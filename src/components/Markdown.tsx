import React, { useMemo } from 'react'
import katex from 'katex'
import { ArgTree, Flow, Graph, Versus } from './Figures'

export function Math({ tex, display = false }: { tex: string; display?: boolean }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, { displayMode: display, throwOnError: false, strict: false, output: 'html' })
    } catch {
      return tex
    }
  }, [tex, display])
  return <span className={display ? 'math-display' : 'math-inline'} dangerouslySetInnerHTML={{ __html: html }} />
}

/** 把「（categorical proposition）」这类西文夹注整体不换行，避免中文行尾被拆开 */
const NW_RE = /（[A-Za-z][A-Za-z0-9 ,.'’\-]{0,24}）/g

function textNode(s: string, key: string): React.ReactNode[] {
  const out: React.ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  let i = 0
  NW_RE.lastIndex = 0
  while ((m = NW_RE.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index))
    out.push(<span key={`${key}-nw${i++}`} className="nw">{m[0]}</span>)
    last = m.index + m[0].length
  }
  if (last < s.length) out.push(s.slice(last))
  return out
}

/** 行内解析：$公式$、**加粗**、`等宽` */
function inline(text: string, keyPrefix = 'i'): React.ReactNode[] {
  const out: React.ReactNode[] = []
  let rest = text
  let k = 0
  const pushText = (s: string) => { if (s) out.push(...textNode(s, `${keyPrefix}-t${k++}`)) }
  while (rest.length) {
    const m = rest.match(/\$([^$]+)\$|\*\*([^*]+)\*\*|`([^`]+)`/)
    if (!m || m.index === undefined) { pushText(rest); break }
    pushText(rest.slice(0, m.index))
    if (m[1] !== undefined) out.push(<Math key={`${keyPrefix}-m${k++}`} tex={m[1]} />)
    else if (m[2] !== undefined) out.push(<strong key={`${keyPrefix}-b${k++}`}>{m[2]}</strong>)
    else if (m[3] !== undefined) out.push(<code key={`${keyPrefix}-c${k++}`}>{m[3]}</code>)
    rest = rest.slice(m.index + m[0].length)
  }
  return out
}

type Block =
  | { t: 'h'; level: 3 | 4; text: string }
  | { t: 'p'; text: string }
  | { t: 'ul' | 'ol'; items: string[] }
  | { t: 'quote'; text: string }
  | { t: 'formula'; tex: string }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'tree' | 'flow' | 'graph' | 'versus'; lines: string[]; caption?: string; mode?: string }
  | { t: 'hr' }

function parse(src: string): Block[] {
  const lines = src.replace(/\r/g, '').split('\n')
  const blocks: Block[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) { i++; continue }

    // 自定义可视化图块：:::tree / :::flow / :::graph / :::versus
    // 写法：:::tree 可选标题\n<若干行内容>\n:::
    if (line.trim().startsWith(':::')) {
      const head = line.trim().replace(/^:::+/, '').trim()
      const [kindRaw, ...rest] = head.split(/\s+/)
      // versus 支持可选中性模式：:::versus neutral 标题
      const mode = kindRaw === 'versus' && (rest[0] === 'neutral' || rest[0] === 'ranked')
        ? rest.shift()
        : undefined
      const buf: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith(':::')) { buf.push(lines[i]); i++ }
      i++ // 跳过结束标记
      if (kindRaw === 'tree' || kindRaw === 'flow' || kindRaw === 'graph' || kindRaw === 'versus') {
        blocks.push({ t: kindRaw, lines: buf, caption: rest.join(' ').trim() || undefined, mode })
      }
      continue
    }
    if (line.trim().startsWith('```')) {
      const buf: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) { buf.push(lines[i]); i++ }
      i++
      blocks.push({ t: 'formula', tex: buf.join('\n') })
      continue
    }
    if (line.trim().startsWith('$$')) {
      const buf: string[] = []
      let cur = line.trim().slice(2)
      if (cur.endsWith('$$') && cur.length > 2) { blocks.push({ t: 'formula', tex: cur.slice(0, -2) }); i++; continue }
      if (cur) buf.push(cur)
      i++
      while (i < lines.length && !lines[i].includes('$$')) { buf.push(lines[i]); i++ }
      if (i < lines.length) { const tail = lines[i].split('$$')[0]; if (tail) buf.push(tail); i++ }
      blocks.push({ t: 'formula', tex: buf.join('\n') })
      continue
    }
    if (/^\|.*\|$/.test(line.trim())) {
      const rows: string[][] = []
      while (i < lines.length && /^\|.*\|$/.test(lines[i].trim())) {
        const cells = lines[i].trim().slice(1, -1).split('|').map(c => c.trim())
        if (!cells.every(c => /^:?-{2,}:?$/.test(c))) rows.push(cells)
        i++
      }
      if (rows.length) blocks.push({ t: 'table', head: rows[0], rows: rows.slice(1) })
      continue
    }
    if (/^#{2,4}\s/.test(line)) {
      const level = line.match(/^#+/)![0].length <= 3 ? 3 : 4
      blocks.push({ t: 'h', level: level as 3 | 4, text: line.replace(/^#+\s*/, '') })
      i++
      continue
    }
    if (/^\s*([-*])\s+/.test(line) || /^\s*\d+[.、]\s+/.test(line)) {
      const ordered = /^\s*\d+[.、]\s+/.test(line)
      const items: string[] = []
      while (i < lines.length && (/^\s*([-*])\s+/.test(lines[i]) || /^\s*\d+[.、]\s+/.test(lines[i]))) {
        let raw = lines[i].replace(/^\s*([-*]|\d+[.、])\s+/, '')
        i++
        while (i < lines.length && lines[i].startsWith('   ') && !/^\s*([-*]|\d+[.、])\s+/.test(lines[i])) {
          raw += ' ' + lines[i].trim(); i++
        }
        items.push(raw)
      }
      blocks.push({ t: ordered ? 'ol' : 'ul', items })
      continue
    }
    if (line.trim().startsWith('>')) {
      const buf: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        buf.push(lines[i].trim().replace(/^>\s?/, '')); i++
      }
      blocks.push({ t: 'quote', text: buf.join(' ') })
      continue
    }
    if (/^-{3,}$/.test(line.trim())) { blocks.push({ t: 'hr' }); i++; continue }

    const buf: string[] = []
    while (i < lines.length && lines[i].trim() && !/^(#{2,4}\s|```|:::|\$\$|\||>|-\s|\*\s|\d+[.、]\s)/.test(lines[i].trim())) {
      buf.push(lines[i].trim()); i++
    }
    if (buf.length) blocks.push({ t: 'p', text: buf.join(' ') })
    else i++
  }
  return blocks
}

export function InlineMD({ text }: { text: string }) {
  return <>{inline(text)}</>
}

export function Markdown({ text }: { text: string }) {
  const blocks = useMemo(() => parse(text), [text])
  return (
    <div className="prose">
      {blocks.map((b, idx) => {
        switch (b.t) {
          case 'h':
            return b.level === 3
              ? <h3 key={idx}>{inline(b.text, `h${idx}`)}</h3>
              : <h4 key={idx}>{inline(b.text, `h${idx}`)}</h4>
          case 'p':
            return <p key={idx}>{inline(b.text, `p${idx}`)}</p>
          case 'ul':
          case 'ol': {
            const Tag = b.t
            return (
              <Tag key={idx}>
                {b.items.map((it, j) => <li key={j}>{inline(it, `l${idx}-${j}`)}</li>)}
              </Tag>
            )
          }
          case 'quote':
            return <blockquote key={idx}>{inline(b.text, `q${idx}`)}</blockquote>
          case 'formula':
            return (
              <div className="formula-block" key={idx}>
                <Math tex={b.tex.trim()} display />
              </div>
            )
          case 'table':
            return (
              <div className="table-wrap" key={idx}>
                <table className="data">
                  <thead><tr>{b.head.map((h, j) => <th key={j}>{inline(h, `th${idx}-${j}`)}</th>)}</tr></thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>{r.map((c, l) => <td key={l}>{inline(c, `td${idx}-${j}-${l}`)}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'tree':
            return <ArgTree key={idx} lines={b.lines} caption={b.caption} />
          case 'flow':
            return <Flow key={idx} lines={b.lines} caption={b.caption} />
          case 'graph':
            return <Graph key={idx} lines={b.lines} caption={b.caption} />
          case 'versus':
            return <Versus key={idx} lines={b.lines} caption={b.caption} mode={b.mode} />
          case 'hr':
            return <hr key={idx} />
        }
      })}
    </div>
  )
}
