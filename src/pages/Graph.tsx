import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { KG_LAYERS, kgById, relatedNodes } from '../data/graph'
import { lessonById } from '../data/curriculum'
import { CASES } from '../data/cases'
import { InlineMD } from '../components/Markdown'

export default function Graph() {
  const nav = useNavigate()
  const [sel, setSel] = useState('argument')
  const node = kgById(sel)!
  const rel = relatedNodes(sel)
  const main = lessonById(node.lessonId)
  const related = CASES.filter(c => c.lessonRef === node.lessonId || node.drills.includes(c.lessonRef ?? ''))

  return (
    <div className="fade-in">
      <div style={{ paddingTop: 18 }}>
        <button onClick={() => nav('/')} style={{ fontSize: 11, letterSpacing: '.16em', color: 'var(--graphite-2)', marginBottom: 14 }}>
          ← 首页
        </button>
        <span className="eyebrow">Concept Map</span>
        <h1>知识图谱</h1>
        <p className="lede" style={{ fontSize: 13.5 }}>
          六层依赖关系。点击任一概念，看它的定义、前置与后续，以及该练哪几课。
        </p>
      </div>

      {KG_LAYERS.map(layer => (
        <section key={layer.title} style={{ marginTop: 22 }}>
          <div className="row between" style={{ alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: 14, letterSpacing: '.06em' }}>{layer.title}</span>
            <span className="mono" style={{ fontSize: 10, color: 'var(--graphite-2)' }}>{layer.nodes.length}</span>
          </div>
          <p style={{ fontSize: 11.5, color: 'var(--graphite-2)', margin: '3px 0 10px' }}>{layer.note}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {layer.nodes.map(n => {
              const isRel = rel.some(r => r.node.id === n.id)
              const cls = sel === n.id ? 'kg-node on' : isRel ? 'kg-node' : n.stage === 6 ? 'kg-node' : 'kg-node'
              return (
                <button
                  key={n.id}
                  className={cls}
                  style={isRel ? { borderColor: 'var(--graphite)', borderStyle: 'dashed' } : undefined}
                  onClick={() => setSel(n.id)}
                >
                  {n.label}
                </button>
              )
            })}
          </div>
        </section>
      ))}

      <div className="section-label"><span>概念详情</span><i /></div>
      <div className="panel">
        <div className="row between" style={{ alignItems: 'baseline' }}>
          <h3 style={{ margin: 0, fontSize: 19 }}>{node.label}</h3>
          <span className="chip">Stage {node.stage}</span>
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.9, color: 'var(--graphite)', marginTop: 10 }}>{node.desc}</p>

        <div className="divider-dotted" />
        <div style={{ fontSize: 13 }}>
          <div style={{ marginBottom: 8 }}>
            <span style={{ color: 'var(--graphite-2)' }}>前置：</span>
            {rel.filter(r => r.relation === '前置').length === 0 ? '（起点概念）' :
              rel.filter(r => r.relation === '前置').map(r => (
                <button key={r.node.id} onClick={() => setSel(r.node.id)} style={{ textDecoration: 'underline', textUnderlineOffset: 3, marginRight: 8 }}>
                  {r.node.label}
                </button>
              ))}
          </div>
          <div>
            <span style={{ color: 'var(--graphite-2)' }}>后续：</span>
            {rel.filter(r => r.relation === '后续').length === 0 ? '（本分支的终点）' :
              rel.filter(r => r.relation === '后续').map(r => (
                <button key={r.node.id} onClick={() => setSel(r.node.id)} style={{ textDecoration: 'underline', textUnderlineOffset: 3, marginRight: 8 }}>
                  {r.node.label}
                </button>
              ))}
          </div>
        </div>

        <div className="divider-dotted" />
        <div style={{ fontSize: 13 }}>
          <span style={{ color: 'var(--graphite-2)' }}>主课：</span>
          {main ? (
            <button onClick={() => nav(`/lesson/${main.id}`)} style={{ textDecoration: 'underline', textUnderlineOffset: 3 }}>
              第 {main.no} 课 · {main.title}
            </button>
          ) : '—'}
        </div>

        {node.drills.length > 0 && (
          <>
            <div className="divider-dotted" />
            <div style={{ fontSize: 13 }}>
              <span style={{ color: 'var(--graphite-2)' }}>相关练习：</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                {node.drills.map(d => {
                  const l = lessonById(d)
                  if (!l) return null
                  return <button key={d} className="chip" onClick={() => nav(`/lesson/${d}`)}>{l.code} {l.title}</button>
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {related.length > 0 && (
        <>
          <div className="section-label"><span>典型案例</span><i /></div>
          {related.map(c => (
            <button
              key={c.id}
              onClick={() => nav(`/cases/${c.id}`)}
              style={{ display: 'block', width: '100%', textAlign: 'left', borderTop: '1px solid var(--rule-soft)', padding: '10px 0' }}
            >
              <div style={{ fontSize: 14 }}>{c.title}</div>
              <div style={{ fontSize: 11.5, color: 'var(--graphite-2)', marginTop: 2 }}>{c.domain}</div>
            </button>
          ))}
        </>
      )}

      {related.length > 0 && (
        <>
          <div className="section-label"><span>典型案例</span><i /></div>
          {related.map(c => (
            <button
              key={c.id}
              onClick={() => nav(`/cases/${c.id}`)}
              style={{ display: 'block', width: '100%', textAlign: 'left', borderTop: '1px solid var(--rule-soft)', padding: '10px 0' }}
            >
              <div style={{ fontSize: 14 }}>{c.title}</div>
              <div style={{ fontSize: 11.5, color: 'var(--graphite-2)', marginTop: 2 }}>{c.domain}</div>
            </button>
          ))}
        </>
      )}

      <div className="note" style={{ marginTop: 20 }}>
        <span className="note-h">怎么用</span>
        按「前置 → 本课 → 后续」的顺序学，比按目录顺序硬啃更稳。虚线框是当前概念的直接邻居，可以顺着它往前或往后跳。
      </div>
    </div>
  )
}
