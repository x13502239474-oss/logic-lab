import { useMemo, useRef, useState } from 'react'
import { parse, toTex, toPlain, evalNode, subformulas, classify, equivalent, Node, ParseError } from '../lib/logic/prop'
import { Math } from '../components/Markdown'

const SYMS = ['¬', '∧', '∨', '→', '↔', '(', ')', 'P', 'Q', 'R', 'S']

function SymBar({ onInsert }: { onInsert: (s: string) => void }) {
  return (
    <div className="symbar">
      {SYMS.map(s => <button key={s} onClick={() => onInsert(s)}>{s}</button>)}
      <button onClick={() => onInsert(' ')} style={{ minWidth: 30 }}>␣</button>
    </div>
  )
}

function useInsert(ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>, set: (v: string) => void) {
  return (sym: string) => {
    const el = ref.current
    if (!el) { set(sym); return }
    const start = el.selectionStart ?? el.value.length
    const end = el.selectionEnd ?? start
    const next = el.value.slice(0, start) + sym + el.value.slice(end)
    set(next)
    requestAnimationFrame(() => {
      el.focus()
      const pos = start + sym.length
      el.setSelectionRange(pos, pos)
    })
  }
}

const EXAMPLES = ['P → Q', '¬(P ∧ Q) ↔ (¬P ∨ ¬Q)', '(P → Q) ∧ (Q → R) → (P → R)', 'P ∨ (Q ∧ ¬P)']

export default function TruthTableLab() {
  const [mode, setMode] = useState<'single' | 'argue'>('single')
  const [expr, setExpr] = useState('(P → Q) ∧ P → Q')
  const [cmp, setCmp] = useState('')
  const [premises, setPremises] = useState('P → Q\nP')
  const [concl, setConcl] = useState('Q')
  const ref = useRef<HTMLInputElement>(null)
  const insert = useInsert(ref, setExpr)

  const parsed = useMemo(() => {
    try {
      if (!expr.trim()) return { ok: false as const, err: '输入一个命题表达式' }
      return { ok: true as const, ast: parse(expr) }
    } catch (e) {
      return { ok: false as const, err: e instanceof ParseError ? e.message : '解析失败' }
    }
  }, [expr])

  const cmpParsed = useMemo(() => {
    if (!cmp.trim()) return null
    try { return { ok: true as const, ast: parse(cmp) } } catch { return { ok: false as const } }
  }, [cmp])

  const argue = useMemo(() => {
    const ps = premises.split('\n').map(s => s.trim()).filter(Boolean)
    try {
      const pNodes: Node[] = ps.map(parse)
      const cNode = parse(concl)
      if (!pNodes.length) return { ok: false as const, err: '至少写一条前提' }
      const vs = Array.from(new Set([...pNodes.flatMap(p => [...collect(p)]), ...collect(cNode)])).sort()
      const total = 1 << vs.length
      const rows: { env: Record<string, boolean>; vals: boolean[]; c: boolean }[] = []
      for (let i = 0; i < total; i++) {
        const env: Record<string, boolean> = {}
        vs.forEach((v, k) => { env[v] = Boolean((i >> (vs.length - 1 - k)) & 1) })
        rows.push({ env, vals: pNodes.map(p => evalNode(p, env)), c: evalNode(cNode, env) })
      }
      const bad = rows.filter(r => r.vals.every(Boolean) && !r.c)
      return { ok: true as const, vs, rows, bad, pNodes, cNode, plausible: ps.length > 0 }
    } catch (e) {
      return { ok: false as const, err: e instanceof ParseError ? e.message : '解析失败' }
    }
  }, [premises, concl])

  return (
    <div>
      <div className="row" style={{ gap: 8, marginBottom: 14 }}>
        <button className={`chip ${mode === 'single' ? 'on' : ''}`} onClick={() => setMode('single')}>单式分析</button>
        <button className={`chip ${mode === 'argue' ? 'on' : ''}`} onClick={() => setMode('argue')}>论证有效性检验</button>
      </div>

      {mode === 'single' ? (
        <>
          <label style={{ fontSize: 11.5, letterSpacing: '.14em', color: 'var(--graphite-2)' }}>命题表达式</label>
          <input
            ref={ref as React.RefObject<HTMLInputElement>}
            className="input"
            value={expr}
            onChange={e => setExpr(e.target.value)}
            spellCheck={false}
            style={{ fontFamily: 'var(--font-mono)', marginTop: 6 }}
            placeholder="例如 (P ∧ Q) → R"
          />
          <SymBar onInsert={insert} />
          <p style={{ fontSize: 11.5, color: 'var(--graphite-2)', marginTop: 10 }}>
            支持 ¬ ~ ! ∧ &amp; · ∨ | → -&gt; ↔ &lt;-&gt; ；优先级 ¬ &gt; ∧ &gt; ∨ &gt; → &gt; ↔。
          </p>
          <div className="row" style={{ flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
            {EXAMPLES.map(x => (
              <button key={x} className="chip" onClick={() => setExpr(x)} style={{ fontFamily: 'var(--font-mono)' }}>{x}</button>
            ))}
          </div>

          {!parsed.ok ? (
            <div className="verdict-band bad" style={{ marginTop: 16 }}>
              <span className="t">表达式有误</span>{parsed.err}
            </div>
          ) : (
            <SingleResult ast={parsed.ast} cmpAst={cmpParsed?.ok ? cmpParsed.ast : null} />
          )}

          <label style={{ fontSize: 11.5, letterSpacing: '.14em', color: 'var(--graphite-2)', display: 'block', marginTop: 22 }}>
            与另一式比较是否逻辑等值（可选）
          </label>
          <input
            className="input"
            value={cmp}
            onChange={e => setCmp(e.target.value)}
            spellCheck={false}
            style={{ fontFamily: 'var(--font-mono)', marginTop: 6 }}
            placeholder="例如 ¬P ∨ ¬Q"
          />
          {cmpParsed && !cmpParsed.ok && <p style={{ fontSize: 12, color: 'var(--bad)', marginTop: 6 }}>第二式无法解析</p>}
        </>
      ) : (
        <>
          <label style={{ fontSize: 11.5, letterSpacing: '.14em', color: 'var(--graphite-2)' }}>前提（每行一条）</label>
          <textarea
            className="input"
            rows={3}
            value={premises}
            onChange={e => setPremises(e.target.value)}
            spellCheck={false}
            style={{ fontFamily: 'var(--font-mono)', marginTop: 6 }}
          />
          <label style={{ fontSize: 11.5, letterSpacing: '.14em', color: 'var(--graphite-2)', display: 'block', marginTop: 12 }}>结论</label>
          <input
            className="input"
            value={concl}
            onChange={e => setConcl(e.target.value)}
            spellCheck={false}
            style={{ fontFamily: 'var(--font-mono)', marginTop: 6 }}
          />
          <div className="row" style={{ flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
            <button className="chip" onClick={() => { setPremises('P → Q\nP'); setConcl('Q') }}>MP</button>
            <button className="chip" onClick={() => { setPremises('P → Q\n¬Q'); setConcl('¬P') }}>MT</button>
            <button className="chip" onClick={() => { setPremises('P → Q\nQ'); setConcl('P') }}>肯定后件（应判无效）</button>
            <button className="chip" onClick={() => { setPremises('P ∨ Q\n¬P'); setConcl('Q') }}>DS</button>
          </div>
          {argue.ok ? <ArgueResult data={argue} /> : <div className="verdict-band bad" style={{ marginTop: 16 }}><span className="t">无法检验</span>{argue.err}</div>}
        </>
      )}
    </div>
  )
}

function collect(n: Node, acc: Set<string> = new Set()): Set<string> {
  if (n.t === 'var') acc.add(n.n)
  else if (n.t === 'not') collect(n.a, acc)
  else { collect(n.a, acc); collect(n.b, acc) }
  return acc
}

const CIRCLED = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '⑪', '⑫']

function SingleResult({ ast, cmpAst }: { ast: Node; cmpAst: Node | null }) {
  const [hi, setHi] = useState<number | null>(null)
  const vars = Array.from(collect(ast)).sort()
  const subs = subformulas(ast).filter(s => s.t !== 'var')
  const total = 1 << vars.length
  const rows: { env: Record<string, boolean>; vals: boolean[]; main: boolean }[] = []
  for (let i = 0; i < total; i++) {
    const env: Record<string, boolean> = {}
    vars.forEach((v, k) => { env[v] = Boolean((i >> (vars.length - 1 - k)) & 1) })
    rows.push({ env, vals: subs.map(s => evalNode(s, env)), main: evalNode(ast, env) })
  }
  const cls = classify(ast)
  const clsText = cls === 'tautology' ? '重言式（永真）' : cls === 'contradiction' ? '矛盾式（永假）' : '偶真式（可真可假）'
  const eq = cmpAst ? equivalent(ast, cmpAst) : null

  return (
    <div style={{ marginTop: 18 }}>
      <div className="formula-block" style={{ marginBottom: 14 }}>
        <Math tex={toTex(ast)} display />
      </div>

      <div className="step-legend">
        {subs.map((sf, i) => (
          <button
            key={i}
            className={`step-chip ${hi === i ? 'on' : ''}`}
            onClick={() => setHi(hi === i ? null : i)}
          >
            <b>{CIRCLED[i] ?? i + 1}</b>
            <Math tex={toTex(sf)} />
          </button>
        ))}
      </div>
      <div className="table-wrap">
        <table className="data tt-table">
          <thead>
            <tr>
              {vars.map(v => <th key={v}>{v}</th>)}
              {subs.map((sf, i) => (
                <th
                  key={i}
                  className={hi === i ? 'hi' : ''}
                  style={{ cursor: 'pointer', fontSize: 13 }}
                  onClick={() => setHi(hi === i ? null : i)}
                >
                  {CIRCLED[i] ?? i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                {vars.map(v => <td key={v}>{r.env[v] ? 'T' : 'F'}</td>)}
                {r.vals.map((x, j) => (
                  <td
                    key={j}
                    className={`${j === subs.length - 1 ? 't' : ''} ${hi === j ? 'hi' : ''}`}
                    style={{ color: x ? 'var(--ink)' : 'var(--graphite-2)' }}
                  >
                    {x ? 'T' : 'F'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="kv" style={{ marginTop: 14 }}>
        <span>命题变项</span><b>{vars.join('、')}（共 {total} 行）</b>
      </div>
      <div className="kv">
        <span>主联结词</span><b>{mainOp(ast)}</b>
      </div>
      <div className="kv">
        <span>真值分布</span>
        <b>{rows.filter(r => r.main).length} 真 / {rows.filter(r => !r.main).length} 假</b>
      </div>

      <div className={`verdict-band ${cls === 'contradiction' ? 'bad' : 'ok'}`} style={{ marginTop: 14 }}>
        <span className="t">{clsText}</span>
        {cls === 'tautology' && '所有指派下都为真，说明这个形式在任何情况下都成立——它是逻辑真理，可以用作推理的等价替换。'}
        {cls === 'contradiction' && '所有指派下都为假，说明这个形式自相矛盾。若一个论证的前提推出矛盾式，通常意味着前提之间不相容。'}
        {cls === 'contingent' && `真值取决于具体指派：${rows.filter(r => r.main).length} 种情况下为真，${rows.filter(r => !r.main).length} 种情况下为假。它不是逻辑真理，也不是矛盾。`}
      </div>

      {eq !== null && (
        <div className={`verdict-band ${eq ? 'ok' : 'bad'}`} style={{ marginTop: 10 }}>
          <span className="t">{eq ? '两式逻辑等值' : '两式不等值'}</span>
          {eq ? '在所有指派下真值完全相同，可以互相替换。' : '存在至少一种指派使两式真值不同，不能互相替换。'}
        </div>
      )}

      <p style={{ fontSize: 12, color: 'var(--graphite-2)', marginTop: 12, lineHeight: 1.8 }}>
        上方的编号是计算次序：先算括号内、再算 ¬，然后 ∧，再 ∨，最后 → 与 ↔。点编号可以高亮对应那一列，核对时从 ① 往右走，每一列只依赖它左边已经算出的列。
      </p>
    </div>
  )
}

function mainOp(n: Node): string {
  switch (n.t) {
    case 'not': return '¬ 否定'
    case 'and': return '∧ 合取'
    case 'or': return '∨ 析取'
    case 'imp': return '→ 条件'
    case 'iff': return '↔ 双条件'
    default: return '无（原子命题）'
  }
}

function ArgueResult({ data }: { data: { vs: string[]; rows: { env: Record<string, boolean>; vals: boolean[]; c: boolean }[]; bad: { env: Record<string, boolean>; vals: boolean[]; c: boolean }[] } }) {
  const valid = data.bad.length === 0
  const shown = data.bad.length ? data.bad.slice(0, 3) : data.rows.slice(0, 4)
  return (
    <div style={{ marginTop: 18 }}>
      <div className={`verdict-band ${valid ? 'ok' : 'bad'}`}>
        <span className="t">{valid ? '论证有效' : '论证无效'}</span>
        {valid
          ? `在全部 ${data.rows.length} 种真值指派中，不存在「前提全真而结论假」的情况。因此前提为真时结论必然为真。`
          : `存在 ${data.bad.length} 种指派使前提全真而结论为假。下表列出前三种——这就是反驳这个论证的反例行。`}
      </div>

      <div className="scroll-hint">← 左右滑动查看全部列 →</div>
      <div className="table-wrap">
        <table className="data tt-table">
          <thead>
            <tr>
              {data.vs.map(v => <th key={v}>{v}</th>)}
              {data.rows[0].vals.map((_, i) => <th key={i} className="sub">前提{i + 1}</th>)}
              <th className="sub">结论</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((r, i) => (
              <tr key={i} className={!r.c && r.vals.every(Boolean) ? 'tt-row-hi' : ''}>
                {data.vs.map(v => <td key={v}>{r.env[v] ? 'T' : 'F'}</td>)}
                {r.vals.map((x, j) => <td key={j}>{x ? 'T' : 'F'}</td>)}
                <td className="t">{r.c ? 'T' : 'F'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 12, color: 'var(--graphite-2)', marginTop: 10 }}>
        {valid ? '灰底行表示被检查的指派。' : '高亮行即反例：前提全为 T，结论为 F。'}
      </p>
    </div>
  )
}
