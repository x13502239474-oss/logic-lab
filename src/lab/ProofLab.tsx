import { useMemo, useRef, useState } from 'react'
import { parse, Node, toPlain, same } from '../lib/logic/prop'
import { checkStep, RULE_INFO, RuleId } from '../lib/logic/nd'
import { Math } from '../components/Markdown'
import { toTex } from '../lib/logic/prop'

interface Line { n: number; text: string; ast: Node; rule: string; refs: number[]; ok: boolean }

interface Exercise {
  id: string
  title: string
  premises: string[]
  goal: string
  hint: string
  solution: string[]
}

const EXERCISES: Exercise[] = [
  {
    id: 'p1',
    title: '假言链条',
    premises: ['P → Q', 'Q → R', 'P'],
    goal: 'R',
    hint: '先用两次假言三段论把条件接起来，再用肯定前件式。',
    solution: ['4. P → R　　HS（1,2）', '5. R　　　　MP（4,3）'],
  },
  {
    id: 'p2',
    title: '否定后件',
    premises: ['P → Q', '¬Q'],
    goal: '¬P',
    hint: '只有一条路，直接套否定后件式。',
    solution: ['3. ¬P　　MT（1,2）'],
  },
  {
    id: 'p3',
    title: '两条路都通向同一处',
    premises: ['P ∨ Q', 'P → R', 'Q → R'],
    goal: 'R',
    hint: '先合取两个条件，再用构造性二难得到 R ∨ R，最后用重言律化简。',
    solution: ['4. (P → R) ∧ (Q → R)　　Conj（2,3）', '5. R ∨ R　　　　　　　　CD（4,1）', '6. R　　　　　　　　　　Taut（5）'],
  },
  {
    id: 'p4',
    title: '先合取再分离',
    premises: ['(P ∧ Q) → R', 'P', 'Q'],
    goal: 'R',
    hint: '把两个孤立的前提合成一个合取式，条件的前件就齐了。',
    solution: ['4. P ∧ Q　　Conj（2,3）', '5. R　　　　MP（1,4）'],
  },
  {
    id: 'p5',
    title: '条件证明',
    premises: ['P → Q', 'Q → R'],
    goal: 'P → R',
    hint: '假定 P，用两次 MP 得到 R，再用 CP 解除假定。',
    solution: ['3. P　　　　　ACP（假定）', '4. Q　　　　　MP（1,3）', '5. R　　　　　MP（2,4）', '6. P → R　　　CP（3–5）'],
  },
]

const RULES: RuleId[] = ['MP', 'MT', 'DS', 'HS', 'Simp', 'Conj', 'Add', 'CD', 'DD', 'DeM', 'Comm', 'Assoc', 'Dist', 'DN', 'Contra', 'Impl', 'Equiv', 'Export', 'Taut', 'CP', 'IP']

export default function ProofLab() {
  const [ei, setEi] = useState(0)
  const [lines, setLines] = useState<Line[]>(() => initLines(EXERCISES[0]))
  const [formula, setFormula] = useState('')
  const [rule, setRule] = useState<RuleId>('MP')
  const [refs, setRefs] = useState('')
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null)
  const [showSol, setShowSol] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const ex = EXERCISES[ei]
  const goalAst = useMemo(() => { try { return parse(ex.goal) } catch { return null } }, [ex.goal])
  const solved = lines.length > 0 && goalAst && same(lines[lines.length - 1].ast, goalAst)

  const load = (i: number) => {
    setEi(i); setLines(initLines(EXERCISES[i])); setFormula(''); setRefs(''); setMsg(null); setShowSol(false)
  }

  const insert = (s: string) => {
    const el = inputRef.current
    if (!el) { setFormula(formula + s); return }
    const a = el.selectionStart ?? formula.length
    const b = el.selectionEnd ?? a
    const next = formula.slice(0, a) + s + formula.slice(b)
    setFormula(next)
    requestAnimationFrame(() => { el.focus(); el.setSelectionRange(a + s.length, a + s.length) })
  }

  const add = () => {
    if (!formula.trim()) { setMsg({ ok: false, text: '先写下这一行的公式。' }); return }
    let ast: Node
    try { ast = parse(formula) } catch (e) {
      setMsg({ ok: false, text: `公式无法解析：${(e as Error).message}` }); return
    }
    const refNums = refs.split(/[,，\s]+/).filter(Boolean).map(Number).filter(n => !Number.isNaN(n))
    const cited = refNums.map(n => lines.find(l => l.n === n)).filter(Boolean) as Line[]
    if (refNums.length !== cited.length) { setMsg({ ok: false, text: '引用了不存在的行号。' }); return }
    if (rule !== 'CP' && rule !== 'IP' && cited.length === 0) {
      setMsg({ ok: false, text: '这一步需要引用至少一行已得公式。' }); return
    }
    const r = checkStep(rule, cited.map(c => c.ast), ast)
    if (!r.ok) { setMsg({ ok: false, text: r.msg }); return }
    const nl: Line = { n: lines.length + 1, text: toPlain(ast), ast, rule, refs: refNums, ok: true }
    setLines([...lines, nl])
    setFormula(''); setRefs('')
    setMsg({ ok: true, text: `${RULE_INFO[rule].name} 使用正确。` })
  }

  return (
    <div>
      <div className="row" style={{ flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
        {EXERCISES.map((e, i) => (
          <button key={e.id} className={`chip ${i === ei ? 'on' : ''}`} onClick={() => load(i)}>
            {i + 1}. {e.title}
          </button>
        ))}
      </div>

      <div className="panel" style={{ background: 'var(--paper-3)' }}>
        <span className="note-h" style={{ color: 'var(--graphite)' }}>要证明的论证</span>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13.5, lineHeight: 2 }}>
          {ex.premises.map((p, i) => <div key={i}>{i + 1}. <Math tex={toTex(parse(p))} /></div>)}
          <div style={{ borderTop: '1px solid var(--rule)', marginTop: 6, paddingTop: 6, color: 'var(--accent)' }}>
            目标 ∴ <Math tex={toTex(parse(ex.goal))} />
          </div>
        </div>
      </div>

      <div className="section-label"><span>证明过程</span><i /></div>
      <div className="table-wrap">
        <table className="data">
          <thead><tr><th style={{ width: 34 }}>行</th><th>公式</th><th style={{ width: 92 }}>规则</th><th style={{ width: 62 }}>引用</th></tr></thead>
          <tbody>
            {lines.map(l => (
              <tr key={l.n} className={goalAst && same(l.ast, goalAst) ? 'tt-row-hi' : ''}>
                <td style={{ color: 'var(--graphite-2)' }}>{l.n}</td>
                <td style={{ whiteSpace: 'normal' }}><Math tex={toTex(l.ast)} /></td>
                <td style={{ fontSize: 11.5, color: 'var(--graphite)' }}>{l.rule}</td>
                <td style={{ fontSize: 11.5, color: 'var(--graphite-2)' }}>{l.refs.join(',') || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {solved ? (
        <div className="verdict-band ok" style={{ marginTop: 14 }}>
          <span className="t">证明完成</span>
          你已经从前提推出了目标公式。每一步都经过规则检验，不存在跳步。
        </div>
      ) : (
        <div style={{ marginTop: 16 }}>
          <label style={{ fontSize: 11.5, letterSpacing: '.14em', color: 'var(--graphite-2)' }}>
            新的一行（第 {lines.length + 1} 行）
          </label>
          <input
            ref={inputRef}
            className="input"
            value={formula}
            onChange={e => setFormula(e.target.value)}
            placeholder="例如 P → R"
            spellCheck={false}
            style={{ fontFamily: 'var(--font-mono)', marginTop: 6 }}
          />
          <div className="symbar">
            {['¬', '∧', '∨', '→', '↔', '(', ')', 'P', 'Q', 'R'].map(s => (
              <button key={s} onClick={() => insert(s)}>{s}</button>
            ))}
          </div>

          <div className="row" style={{ gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            <select className="input" value={rule} onChange={e => setRule(e.target.value as RuleId)} style={{ flex: 2, minWidth: 150, fontSize: 13 }}>
              {RULES.map(r => (
                <option key={r} value={r}>{r} · {RULE_INFO[r].name}</option>
              ))}
            </select>
            <input
              className="input"
              value={refs}
              onChange={e => setRefs(e.target.value)}
              placeholder="引用行号，如 1,2"
              style={{ flex: 1, minWidth: 100, fontSize: 13 }}
            />
          </div>
          <p style={{ fontSize: 11.5, color: 'var(--graphite-2)', margin: '8px 0 0', lineHeight: 1.7 }}>
            {RULE_INFO[rule].name}：{RULE_INFO[rule].form}
          </p>

          <div className="row" style={{ marginTop: 12, gap: 8 }}>
            <button className="btn sm" onClick={add}>检验并添加</button>
            <button
              className="btn ghost sm"
              onClick={() => { if (lines.length > ex.premises.length) setLines(lines.slice(0, -1)); setMsg(null) }}
            >
              撤销上一步
            </button>
          </div>

          {msg && (
            <div className={`verdict-band ${msg.ok ? 'ok' : 'bad'}`} style={{ marginTop: 12 }}>
              <span className="t">{msg.ok ? '通过' : '这一步不成立'}</span>{msg.text}
            </div>
          )}
        </div>
      )}

      <div className="note" style={{ marginTop: 20 }}>
        <span className="note-h">提示</span>{ex.hint}
      </div>

      <button className="btn ghost sm" style={{ marginTop: 10 }} onClick={() => setShowSol(!showSol)}>
        {showSol ? '收起参考解法' : '看参考解法'}
      </button>
      {showSol && (
        <div className="formula-block" style={{ marginTop: 10, textAlign: 'left', fontSize: 13, lineHeight: 2 }}>
          {ex.solution.map((s, i) => <div key={i}>{s}</div>)}
        </div>
      )}

      <div className="section-label"><span>规则速查</span><i /></div>
      <div className="table-wrap">
        <table className="data">
          <thead><tr><th style={{ width: 60 }}>规则</th><th>形式</th></tr></thead>
          <tbody>
            {RULES.map(r => (
              <tr key={r}>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: 11.5 }}>{r}</td>
                <td style={{ whiteSpace: 'normal', fontSize: 12, color: 'var(--graphite)' }}>
                  {RULE_INFO[r].name}：{RULE_INFO[r].form}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function initLines(ex: Exercise): Line[] {
  return ex.premises.map((p, i) => ({
    n: i + 1,
    text: p,
    ast: parse(p),
    rule: '前提',
    refs: [],
    ok: true,
  }))
}
