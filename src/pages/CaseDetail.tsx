import { useNavigate, useParams } from 'react-router-dom'
import { CASES } from '../data/cases'
import { lessonById } from '../data/curriculum'

export default function CaseDetail() {
  const { id } = useParams()
  const nav = useNavigate()
  const c = CASES.find(x => x.id === id)

  if (!c) {
    return (
      <div className="empty">
        <b>找不到这个案例</b>
        <div style={{ marginTop: 16 }}><button className="btn ghost sm" onClick={() => nav('/cases')}>返回案例库</button></div>
      </div>
    )
  }

  const rel = c.lessonRef ? lessonById(c.lessonRef) : undefined

  return (
    <article className="fade-in">
      <div style={{ paddingTop: 16 }}>
        <button onClick={() => nav('/cases')} style={{ fontSize: 11, letterSpacing: '.16em', color: 'var(--graphite-2)', marginBottom: 14 }}>
          ← 案例库
        </button>
        <span className="eyebrow">{c.domain}</span>
        <h1 style={{ fontSize: 25 }}>{c.title}</h1>
        <p className="lede" style={{ fontSize: 14 }}>{c.summary}</p>
      </div>

      <Block n="01" title="案例背景">{c.background}</Block>

      <Block n="02" title="原始论述">
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 2, padding: '4px 0' }}>{c.passage}</div>
      </Block>

      <Block n="03" title="前提识别">
        <ol style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, lineHeight: 1.9 }}>
          {c.premises.map((p, i) => <li key={i}>{p}</li>)}
        </ol>
        {c.hidden?.length > 0 && (
          <div style={{ marginTop: 12 }}>
            <span className="note-h" style={{ color: 'var(--graphite-2)', fontSize: 10 }}>隐含前提</span>
            <ul style={{ margin: '4px 0 0', paddingLeft: 18, fontSize: 14, lineHeight: 1.9, color: 'var(--graphite)' }}>
              {c.hidden.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        )}
      </Block>

      <Block n="04" title="结论识别">
        <div style={{ borderLeft: '2px solid var(--accent)', paddingLeft: 14, fontSize: 15.5, lineHeight: 1.9 }}>{c.conclusion}</div>
      </Block>

      <Block n="05" title="推理结构">
        <div className="formula-block" style={{ textAlign: 'left', fontSize: 14, lineHeight: 1.9 }}>{c.structure}</div>
      </Block>

      <Block n="06" title="逻辑检验">{c.check}</Block>

      <Block n="07" title="错误分析">{c.error}</Block>

      <Block n="08" title="正确表达">
        <div style={{ background: 'var(--paper-3)', padding: 14, fontSize: 14.5, lineHeight: 1.9 }}>{c.rewrite}</div>
      </Block>

      {rel && (
        <div className="note" style={{ marginTop: 8 }}>
          <span className="note-h">相关课程</span>
          <button style={{ textDecoration: 'underline', textUnderlineOffset: 3 }} onClick={() => nav(`/lesson/${rel.id}`)}>
            第 {rel.no} 课 · {rel.title}
          </button>
        </div>
      )}

      <div className="divider-dotted" />
      <p style={{ fontSize: 11.5, color: 'var(--graphite-2)', lineHeight: 1.9 }}>
        本案例为教学目的撰写，人物、机构与数据均为虚构或匿名化处理，不对任何现实主体作评价。
      </p>
    </article>
  )
}

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 26 }}>
      <div className="row" style={{ gap: 10, alignItems: 'baseline', marginBottom: 8 }}>
        <span className="mono" style={{ color: 'var(--accent)', fontSize: 10.5 }}>{n}</span>
        <h3 style={{ margin: 0, fontSize: 16 }}>{title}</h3>
        <i style={{ flex: 1, height: 1, background: 'var(--rule)' }} />
      </div>
      <div style={{ fontSize: 14.5, lineHeight: 1.9, color: 'var(--ink-2)' }}>{children}</div>
    </section>
  )
}
