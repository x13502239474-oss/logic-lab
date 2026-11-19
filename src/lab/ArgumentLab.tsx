import { useMemo, useState } from 'react'
import { DECOMPOSE } from '../data/daily'

type Role = 'premise' | 'mid' | 'final' | 'hidden' | 'none'

const ROLE_LABEL: Record<Role, string> = {
  premise: '前提',
  mid: '中间结论',
  final: '最终结论',
  hidden: '隐含前提',
  none: '背景信息',
}

const ROLE_COLOR: Record<Role, string> = {
  premise: 'var(--ink)',
  mid: 'var(--copper)',
  final: 'var(--accent)',
  hidden: 'var(--graphite-2)',
  none: 'var(--rule)',
}

function splitSentences(t: string): string[] {
  return t
    .replace(/\n+/g, '。')
    .split(/(?<=[。！？；])/)
    .map(s => s.trim())
    .filter(s => s.length > 1)
}

export default function ArgumentLab() {
  const [text, setText] = useState(DECOMPOSE[0].text)
  const [roles, setRoles] = useState<Record<number, Role>>({})
  const [hidden, setHidden] = useState<{ id: number; text: string }[]>([])
  const [parsed, setParsed] = useState(false)

  const sents = useMemo(() => splitSentences(text), [text])

  const doParse = () => {
    const auto: Record<number, Role> = {}
    sents.forEach((s, i) => {
      if (/所以|因此|可见|由此可见|总之|故/.test(s)) auto[i] = 'final'
      else if (/因为|由于|既然|理由是/.test(s)) auto[i] = 'premise'
      else auto[i] = 'none'
    })
    setRoles(auto)
    setParsed(true)
  }

  const grouped = useMemo(() => {
    const g: Record<Role, number[]> = { premise: [], mid: [], final: [], hidden: [], none: [] }
    Object.entries(roles).forEach(([k, v]) => g[v].push(Number(k)))
    return g
  }, [roles])

  const ok = grouped.final.length === 1 && grouped.premise.length + grouped.mid.length >= 1

  return (
    <div>
      <p className="lede" style={{ fontSize: 13 }}>
        把一段话拆成句子，逐句标注它在论证中的角色，最后检查结构是否完整。这个工具不做自动语义理解——判断由你下，它只负责把结构摆清楚。
      </p>

      <label style={{ fontSize: 11.5, letterSpacing: '.14em', color: 'var(--graphite-2)' }}>原始语段</label>
      <textarea
        className="input"
        rows={5}
        value={text}
        onChange={e => { setText(e.target.value); setParsed(false); setRoles({}) }}
        style={{ marginTop: 6, lineHeight: 1.8 }}
      />

      <div className="row" style={{ flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
        {DECOMPOSE.map((d, i) => (
          <button
            key={d.id}
            className="chip"
            onClick={() => { setText(d.text); setParsed(false); setRoles({}); setHidden([]) }}
          >
            示例 {i + 1}
          </button>
        ))}
        <button className="btn sm" onClick={doParse}>开始拆解</button>
      </div>

      {parsed && (
        <div className="fade-in" style={{ marginTop: 20 }}>
          <div className="section-label"><span>逐句标注</span><i /></div>
          <p style={{ fontSize: 11.5, color: 'var(--graphite-2)', marginTop: -8 }}>点击角色标签切换；一段好的论证通常只有一个最终结论。</p>

          {sents.map((s, i) => {
            const r = roles[i] ?? 'none'
            return (
              <div key={i} style={{ borderTop: '1px solid var(--rule-soft)', padding: '12px 0' }}>
                <div className="row" style={{ gap: 8, alignItems: 'flex-start' }}>
                  <span className="mono" style={{ color: 'var(--graphite-2)', minWidth: 18, paddingTop: 3 }}>{i + 1}</span>
                  <div style={{ flex: 1, fontSize: 14.5, lineHeight: 1.75 }}>{s}</div>
                </div>
                <div className="row" style={{ flexWrap: 'wrap', gap: 5, marginTop: 8, paddingLeft: 26 }}>
                  {(Object.keys(ROLE_LABEL) as Role[]).map(k => (
                    <button
                      key={k}
                      className={`chip ${r === k ? 'on' : ''}`}
                      style={r === k ? { borderColor: ROLE_COLOR[k], color: ROLE_COLOR[k] } : undefined}
                      onClick={() => setRoles({ ...roles, [i]: k })}
                    >
                      {ROLE_LABEL[k]}
                    </button>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="section-label"><span>隐含前提</span><i /></div>
          <p style={{ fontSize: 11.5, color: 'var(--graphite-2)', marginTop: -8 }}>
            论证里没说出口、但缺了它结论就接不上的那句话。这是最有价值的一步。
          </p>
          {hidden.map((h, i) => (
            <input
              key={h.id}
              className="input"
              style={{ marginBottom: 6 }}
              value={h.text}
              placeholder="例如：试点部门的经验可以推广到全公司"
              onChange={e => setHidden(hidden.map(x => x.id === h.id ? { ...x, text: e.target.value } : x))}
            />
          ))}
          <button className="btn ghost sm" onClick={() => setHidden([...hidden, { id: Date.now(), text: '' }])}>+ 添加一条</button>

          <div className="section-label"><span>结构图</span><i /></div>
          <div style={{ border: '1px solid var(--rule)', padding: 16, background: 'var(--paper-2)' }}>
            <Layer title="最终结论" ids={grouped.final} sents={sents} color={ROLE_COLOR.final} />
            <Arrow label="↑ 由下列各条支持" />
            {(grouped.mid.length > 0 || hidden.length > 0) && (
              <>
                <Layer title="中间结论 / 隐含前提" ids={grouped.mid} sents={sents} color={ROLE_COLOR.mid} extra={hidden.filter(h => h.text.trim()).map(h => h.text)} />
                <Arrow label="↑ 由下列各条支持" />
              </>
            )}
            <Layer title="前提" ids={grouped.premise} sents={sents} color={ROLE_COLOR.premise} />
          </div>

          {!ok && (
            <div className="verdict-band bad" style={{ marginTop: 14 }}>
              <span className="t">结构还不完整</span>
              {grouped.final.length === 0 && '还没有标出最终结论——找一找哪句话是整段话真正想让你接受的。'}
              {grouped.final.length > 1 && '标出了多个最终结论。一个论证通常只有一个；其余可能是中间结论。'}
              {grouped.premise.length + grouped.mid.length === 0 && '还没有任何前提支持这个结论。'}
            </div>
          )}

          <div className="note" style={{ marginTop: 16 }}>
            <span className="note-h">示范答案</span>
            {DECOMPOSE.find(d => d.text === text)
              ? (() => {
                  const d = DECOMPOSE.find(x => x.text === text)!
                  return (
                    <div>
                      <div style={{ marginBottom: 6 }}><b>结论：</b>{d.conclusion}</div>
                      <div style={{ marginBottom: 6 }}><b>前提：</b>{d.premises.join('；')}</div>
                      <div style={{ marginBottom: 6 }}><b>隐含前提：</b>{d.hidden.join('；')}</div>
                      <div><b>点评：</b>{d.note}</div>
                    </div>
                  )
                })()
              : '这段文字是你自己输入的，没有预置答案。对照结构图检查：每条前提是否真的支持结论？哪一条最弱？'}
          </div>
        </div>
      )}

      {!parsed && (
        <div className="empty" style={{ padding: '34px 10px' }}>
          <b>先点「开始拆解」</b>
          系统会把语段切成句子，并自动标出含有「所以」「因为」的句子作为初判。
        </div>
      )}
    </div>
  )
}

function Layer({ title, ids, sents, color, extra = [] }: { title: string; ids: number[]; sents: string[]; color: string; extra?: string[] }) {
  const items = [...ids.map(i => sents[i]), ...extra]
  if (!items.length) return null
  return (
    <div>
      <div style={{ fontSize: 10, letterSpacing: '.18em', color: 'var(--graphite-2)', marginBottom: 7 }}>{title}</div>
      {items.map((t, i) => (
        <div
          key={i}
          style={{
            border: `1px solid ${color}`, borderLeftWidth: 3, padding: '9px 11px',
            fontSize: 13.5, lineHeight: 1.7, marginBottom: 6, background: 'var(--paper)',
          }}
        >
          {t}
        </div>
      ))}
    </div>
  )
}

function Arrow({ label }: { label: string }) {
  return (
    <div style={{ textAlign: 'center', fontSize: 10, letterSpacing: '.14em', color: 'var(--graphite-2)', padding: '8px 0' }}>
      {label}
    </div>
  )
}
