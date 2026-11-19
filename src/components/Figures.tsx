/**
 * 课程正文可视化图块
 * ------------------------------------------------------------
 * 课程 body 里的自定义块语法（由 Markdown.tsx 解析后交给本文件渲染）：
 *
 *   :::tree      论证树（结论在上，前提分支在下）
 *   :::flow      推理流程图（步骤链）
 *   :::graph     概念关系图（节点 + 关系连线）
 *   :::versus    正误 / 有效无效 双栏对比
 *
 * 全部用原生 HTML/CSS 或内联 SVG 绘制，零第三方依赖，移动端优先。
 * 图内文字一律使用 Unicode 逻辑符号（¬ ∧ ∨ → ↔ ∴ ∀ ∃），不走 KaTeX，
 * 避免与 Markdown.tsx 产生循环依赖。
 */

/* ============================ 论证树 ============================ */

interface TreeNode {
  text: string
  level: number
  children: TreeNode[]
}

/**
 * 行格式：
 *   @ 结论文本
 *   - 前提
 *   -- 子前提（挂在最近一条 `-` 下）
 *   --- 孙前提（挂在最近一条 `--` 下）
 * 也接受 `—` / `–` / `*` 作为破折号写法的宽松匹配。
 */
export function parseTree(lines: string[]): { root: string; branches: TreeNode[] } {
  let root = ''
  const branches: TreeNode[] = []
  const stack: TreeNode[] = []

  for (const raw of lines) {
    const line = raw.trim()
    if (!line) continue

    if (/^[@＠]\s*/.test(line)) {
      root = line.replace(/^[@＠]\s*/, '')
      stack.length = 0
      continue
    }

    // 统计前导破折号数量（- / – / — / *），每个字符算一级，但「--」视为 2 级
    const m = line.match(/^([-–—*]+)\s*(.+)$/)
    if (!m) continue
    const level = m[1].length
    const text = m[2].trim()
    const node: TreeNode = { text, level, children: [] }

    while (stack.length && stack[stack.length - 1].level >= level) stack.pop()
    if (stack.length) stack[stack.length - 1].children.push(node)
    else branches.push(node)
    stack.push(node)
  }

  return { root, branches }
}

function TreeBranch({ nodes }: { nodes: TreeNode[] }) {
  if (!nodes.length) return null
  return (
    <ul className="tree-branch">
      {nodes.map((n, i) => (
        <li key={i} className="tree-item">
          <div className="tree-node">{n.text}</div>
          {n.children.length > 0 && <TreeBranch nodes={n.children} />}
        </li>
      ))}
    </ul>
  )
}

export function ArgTree({ lines, caption }: { lines: string[]; caption?: string }) {
  const { root, branches } = parseTree(lines)
  if (!root && !branches.length) return null
  return (
    <figure className="fig">
      {caption && <figcaption className="fig-cap">{caption}</figcaption>}
      <div className="fig-tree">
        {root && <div className="tree-root">{root}</div>}
        <TreeBranch nodes={branches} />
      </div>
    </figure>
  )
}

/* ============================ 流程图 ============================ */

/** 行格式：单行用 `=>` / `->` / `→` 分隔步骤；也可每行写一步 */
export function parseFlow(lines: string[]): string[] {
  const steps: string[] = []
  for (const raw of lines) {
    const line = raw.trim()
    if (!line) continue
    const parts = line.split(/\s*(?:=>|->|→)\s*/)
    for (const p of parts) if (p.trim()) steps.push(p.trim())
  }
  return steps
}

export function Flow({ lines, caption }: { lines: string[]; caption?: string }) {
  const steps = parseFlow(lines)
  if (!steps.length) return null
  return (
    <figure className="fig">
      {caption && <figcaption className="fig-cap">{caption}</figcaption>}
      <div className="fig-flow-wrap">
        <div className="fig-flow">
          {steps.map((s, i) => (
            <div className="flow-cell" key={i}>
              <div className={`flow-step${i === steps.length - 1 ? ' end' : ''}`}>
                <span className="flow-idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="flow-txt">{s}</span>
              </div>
              {i < steps.length - 1 && <span className="flow-arrow" aria-hidden>→</span>}
            </div>
          ))}
        </div>
      </div>
    </figure>
  )
}

/* ============================ 概念关系图 ============================ */

interface GraphEdge { from: string; rel: string; to: string }

/** 行格式：`节点A -> 关系 -> 节点B`，关系可省略（写成 `A -> B`） */
export function parseGraph(lines: string[]): GraphEdge[] {
  const edges: GraphEdge[] = []
  for (const raw of lines) {
    const line = raw.trim()
    if (!line) continue
    const parts = line.split(/\s*(?:->|→|=>)\s*/).filter(Boolean)
    if (parts.length >= 3) edges.push({ from: parts[0], rel: parts[1], to: parts[2] })
    else if (parts.length === 2) edges.push({ from: parts[0], rel: '', to: parts[1] })
  }
  return edges
}

export function Graph({ lines, caption }: { lines: string[]; caption?: string }) {
  const edges = parseGraph(lines)
  if (!edges.length) return null

  // 节点去重，保持出现顺序；首节点置于中心
  const nodes: string[] = []
  for (const e of edges) {
    if (!nodes.includes(e.from)) nodes.push(e.from)
    if (!nodes.includes(e.to)) nodes.push(e.to)
  }

  const W = 640
  const H = 360
  const cx = W / 2
  const cy = H / 2
  const pos = new Map<string, { x: number; y: number }>()
  const others = nodes.slice(1)
  const R = others.length <= 4 ? 128 : 150

  pos.set(nodes[0], { x: cx, y: cy })
  others.forEach((n, i) => {
    const ang = -Math.PI / 2 + (i * 2 * Math.PI) / others.length
    pos.set(n, { x: cx + R * Math.cos(ang) * 1.5, y: cy + R * Math.sin(ang) })
  })

  const nodeW = 92
  const nodeH = 34

  return (
    <figure className="fig">
      {caption && <figcaption className="fig-cap">{caption}</figcaption>}
      <div className="fig-graph-wrap">
        <svg className="fig-graph" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={caption ?? '概念关系图'}>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#7c7870" />
            </marker>
          </defs>
          {edges.map((e, i) => {
            const a = pos.get(e.from)!
            const b = pos.get(e.to)!
            const dx = b.x - a.x
            const dy = b.y - a.y
            const len = Math.hypot(dx, dy) || 1
            const ux = dx / len
            const uy = dy / len
            const padX = Math.abs(ux) > 0.01 ? Math.min(nodeW / 2 / Math.abs(ux), nodeH / 2 / Math.abs(uy || 1)) : nodeH / 2
            const pad = Math.min(padX + 6, len / 2 - 2)
            const x1 = a.x + ux * pad
            const y1 = a.y + uy * pad
            const x2 = b.x - ux * pad
            const y2 = b.y - uy * pad
            const mx = (x1 + x2) / 2
            const my = (y1 + y2) / 2
            return (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d9d2c1" strokeWidth="1.4" markerEnd="url(#arrow)" />
                {e.rel && (
                  <text x={mx} y={my - 6} className="graph-rel" textAnchor="middle">
                    {e.rel}
                  </text>
                )}
              </g>
            )
          })}
          {nodes.map((n, i) => {
            const p = pos.get(n)!
            const isCenter = i === 0
            return (
              <g key={n}>
                <rect
                  x={p.x - nodeW / 2}
                  y={p.y - nodeH / 2}
                  width={nodeW}
                  height={nodeH}
                  rx="3"
                  fill={isCenter ? '#17150f' : '#fbf8f1'}
                  stroke={isCenter ? '#17150f' : '#d9d2c1'}
                  strokeWidth="1.2"
                />
                <text
                  x={p.x}
                  y={p.y + 4.5}
                  textAnchor="middle"
                  className={isCenter ? 'graph-node on' : 'graph-node'}
                >
                  {n}
                </text>
              </g>
            )
          })}
        </svg>
      </div>
    </figure>
  )
}

/* ============================ 双栏对比 ============================ */

/**
 * 行格式：`左侧标题｜形式｜说明`
 * 可选在标题前加 `+`/`✓` 标为「有效/正确」，加 `-`/`✗` 标为「无效/错误」。
 * 不加标记时：第一行按「有效」处理，其余按「无效」处理。
 */
export function parseVersus(lines: string[]): { title: string; form: string; note: string; side: 'good' | 'bad' }[] {
  const rows: { title: string; form: string; note: string; side: 'good' | 'bad' }[] = []
  for (const raw of lines) {
    const line = raw.trim()
    if (!line) continue
    const cells = line.split(/\s*[|｜]\s*/)
    if (cells.length < 2) continue
    let title = cells[0].trim()
    let side: 'good' | 'bad'
    if (/^[+✓]/.test(title)) { side = 'good'; title = title.replace(/^[+✓]\s*/, '') }
    else if (/^[-✗]/.test(title)) { side = 'bad'; title = title.replace(/^[-✗]\s*/, '') }
    else side = rows.length === 0 ? 'good' : 'bad'
    rows.push({ title, form: cells[1], note: cells[2] ?? '', side })
  }
  return rows
}

export function Versus({ lines, caption, mode }: { lines: string[]; caption?: string; mode?: string }) {
  const rows = parseVersus(lines)
  if (rows.length < 2) return null
  const neutral = mode === 'neutral'
  return (
    <figure className="fig">
      {caption && <figcaption className="fig-cap">{caption}</figcaption>}
      <div className="fig-versus">
        {rows.map((r, i) => (
          <div className={`versus-card ${neutral ? 'mid' : r.side}`} key={i}>
            <div className="versus-head">
              {neutral
                ? <span className="versus-tag mid">对照</span>
                : <span className="versus-tag">{r.side === 'good' ? '有效 / 正确' : '无效 / 错误'}</span>}
              <span className="versus-title">{r.title}</span>
            </div>
            {r.form && <div className="versus-form">{r.form}</div>}
            {r.note && <div className="versus-note">{r.note}</div>}
          </div>
        ))}
      </div>
    </figure>
  )
}
