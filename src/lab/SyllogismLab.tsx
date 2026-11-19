import { useMemo, useState } from 'react'
import { analyzeSyllogism, analyzeCategorical, Categorical, CType, VALID_FORMS, FORM_NAMES } from '../lib/logic/syllogism'

const PRESETS: { label: string; major: string; minor: string; concl: string }[] = [
  { label: 'Barbara（有效）', major: '所有 人 都是 会死的', minor: '所有 希腊人 都是 人', concl: '所有 希腊人 都是 会死的' },
  { label: '中项不周延（无效）', major: '所有 猫 都是 哺乳动物', minor: '所有 狗 都是 哺乳动物', concl: '所有 狗 都是 猫' },
  { label: 'Celarent（有效）', major: '没有 鱼 是 哺乳动物', minor: '所有 鲸 都是 哺乳动物', concl: '没有 鲸 是 鱼' },
  { label: '大项不当周延（无效）', major: '所有 苹果 都是 水果', minor: '没有 石头 是 苹果', concl: '没有 石头 是 水果' },
]

const TYPES: { t: CType; label: string }[] = [
  { t: 'A', label: 'A 所有 S 是 P' },
  { t: 'E', label: 'E 所有 S 不是 P' },
  { t: 'I', label: 'I 有的 S 是 P' },
  { t: 'O', label: 'O 有的 S 不是 P' },
]

export default function SyllogismLab() {
  const [manual, setManual] = useState(false)
  const [major, setMajor] = useState(PRESETS[0].major)
  const [minor, setMinor] = useState(PRESETS[0].minor)
  const [concl, setConcl] = useState(PRESETS[0].concl)

  const [m1, setM1] = useState<{ type: CType; s: string; p: string }>({ type: 'A', s: '人', p: '会死的' })
  const [m2, setM2] = useState<{ type: CType; s: string; p: string }>({ type: 'A', s: '希腊人', p: '人' })
  const [m3, setM3] = useState<{ type: CType; s: string; p: string }>({ type: 'A', s: '希腊人', p: '会死的' })

  const res = useMemo(() => {
    if (manual) {
      const mk = (x: { type: CType; s: string; p: string }): Categorical => ({ type: x.type, subject: x.s || '?', predicate: x.p || '?', raw: '' })
      return analyzeCategorical(mk(m1), mk(m2), mk(m3))
    }
    return analyzeSyllogism(major, minor, concl)
  }, [manual, major, minor, concl, m1, m2, m3])

  return (
    <div>
      <div className="row" style={{ gap: 8, marginBottom: 14 }}>
        <button className={`chip ${!manual ? 'on' : ''}`} onClick={() => setManual(false)}>自然语言输入</button>
        <button className={`chip ${manual ? 'on' : ''}`} onClick={() => setManual(true)}>手动指定结构</button>
      </div>

      {!manual ? (
        <div className="stack">
          <Field label="大前提（含大项 P：结论的谓项）" value={major} onChange={setMajor} ph="所有 人 都是 会死的" />
          <Field label="小前提（含小项 S：结论的主项）" value={minor} onChange={setMinor} ph="所有 希腊人 都是 人" />
          <Field label="结论" value={concl} onChange={setConcl} ph="所有 希腊人 都是 会死的" />
        </div>
      ) : (
        <div>
          <p style={{ fontSize: 12, color: 'var(--graphite-2)', marginTop: 0 }}>
            直接指定三个命题的类型与词项。中项会自动识别为两个前提共有、结论中没有的那个词项。
          </p>
          <ManualRow label="大前提" v={m1} set={setM1} />
          <ManualRow label="小前提" v={m2} set={setM2} />
          <ManualRow label="结论" v={m3} set={setM3} />
        </div>
      )}

      <div className="row" style={{ flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
        {PRESETS.map(p => (
          <button
            key={p.label}
            className="chip"
            onClick={() => { setMajor(p.major); setMinor(p.minor); setConcl(p.concl); setManual(false) }}
          >
            {p.label}
          </button>
        ))}
      </div>

      {!res.ok ? (
        <div className="verdict-band bad" style={{ marginTop: 18 }}>
          <span className="t">无法分析</span>{res.error}
        </div>
      ) : (
        <div style={{ marginTop: 20 }}>
          <div className={`verdict-band ${res.valid ? 'ok' : 'bad'}`}>
            <span className="t">{res.valid ? '有效形式' : '无效形式'}</span>
            {res.valid
              ? `这是第 ${res.figure} 格的 ${res.mood} 式${res.formName ? `，传统名称 ${res.formName}` : ''}，属于十五个有效形式之一。前提为真时，结论必然为真。`
              : '这个形式不在十五个有效形式之内。下面列出它违反了哪条规则。'}
          </div>

          <div style={{ marginTop: 16 }}>
            <div className="kv"><span>式（mood）</span><b>{res.mood}</b></div>
            <div className="kv"><span>格（figure）</span><b>第 {res.figure} 格</b></div>
            <div className="kv"><span>中项 M</span><b>{res.middle}</b></div>
            <div className="kv"><span>大项 P</span><b>{res.majorTerm}</b></div>
            <div className="kv"><span>小项 S</span><b>{res.minorTerm}</b></div>
          </div>

          <div className="section-label"><span>结构还原</span><i /></div>
          <div className="formula-block" style={{ textAlign: 'left', fontFamily: 'var(--font-mono)', fontSize: 13.5, lineHeight: 2 }}>
            <div>大前提　{res.diagram[0].formula}</div>
            <div>小前提　{res.diagram[1].formula}</div>
            <div style={{ borderTop: '1px solid var(--rule)', marginTop: 6, paddingTop: 6 }}>结　论　{res.diagram[2].formula}</div>
          </div>

          {res.reasons.length > 0 && (
            <>
              <div className="section-label"><span>为什么无效</span><i /></div>
              <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.9, color: 'var(--graphite)' }}>
                {res.reasons.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </>
          )}

          {res.conditions.length > 0 && (
            <div className="note" style={{ marginTop: 16 }}>
              <span className="note-h">解释说明</span>
              {res.conditions.map((c, i) => <div key={i} style={{ marginBottom: 6 }}>{c}</div>)}
            </div>
          )}

          <div className="section-label"><span>十五个有效形式</span><i /></div>
          <div className="table-wrap">
            <table className="data">
              <thead><tr><th>格</th><th>有效式（式）</th><th>传统名称</th></tr></thead>
              <tbody>
                {[1, 2, 3, 4].map(f => {
                  const list = VALID_FORMS.filter(k => k.endsWith(`-${f}`))
                  return (
                    <tr key={f}>
                      <td>第 {f} 格</td>
                      <td>{list.map(k => k.split('-')[0]).join(' / ')}</td>
                      <td style={{ whiteSpace: 'normal', fontSize: 12, color: 'var(--graphite)' }}>
                        {list.map(k => (FORM_NAMES[k] ?? '').replace(/（.*/, '')).join('、')}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 11.5, color: 'var(--graphite-2)', marginTop: 8, lineHeight: 1.8 }}>
            本判定采用现代（布尔）解释：全称前提不假定主项类存在，故 AAI-3、EAO-3、AAI-4、EAO-4 等「弱化式」判为无效。
          </p>
        </div>
      )}
    </div>
  )
}

function Field({ label, value, onChange, ph }: { label: string; value: string; onChange: (v: string) => void; ph: string }) {
  return (
    <div>
      <label style={{ fontSize: 11.5, letterSpacing: '.12em', color: 'var(--graphite-2)' }}>{label}</label>
      <input className="input" value={value} onChange={e => onChange(e.target.value)} placeholder={ph} style={{ marginTop: 5 }} />
    </div>
  )
}

function ManualRow({
  label, v, set,
}: { label: string; v: { type: CType; s: string; p: string }; set: (x: { type: CType; s: string; p: string }) => void }) {
  return (
    <div style={{ marginTop: 12 }}>
      <label style={{ fontSize: 11.5, letterSpacing: '.12em', color: 'var(--graphite-2)' }}>{label}</label>
      <div className="row" style={{ gap: 6, marginTop: 5 }}>
        <select
          value={v.type}
          onChange={e => set({ ...v, type: e.target.value as CType })}
          className="input"
          style={{ width: 150, paddingLeft: 8, fontSize: 13 }}
        >
          {TYPES.map(t => <option key={t.t} value={t.t}>{t.label}</option>)}
        </select>
        <input className="input" value={v.s} onChange={e => set({ ...v, s: e.target.value })} placeholder="主项" style={{ flex: 1 }} />
        <input className="input" value={v.p} onChange={e => set({ ...v, p: e.target.value })} placeholder="谓项" style={{ flex: 1 }} />
      </div>
    </div>
  )
}
