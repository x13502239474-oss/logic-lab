import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { STAGES, TOTAL_LESSONS, BOOK } from '../data/curriculum'
import { useDB } from '../store/db'

export default function Courses() {
  const db = useDB()
  const nav = useNavigate()
  const current = STAGES.find(s => s.lessons.some(l => !db.lessons[l.id]?.done))?.id ?? 1
  const [open, setOpen] = useState<number>(current)

  const doneCount = (ids: string[]) => ids.filter(id => db.lessons[id]?.done).length

  return (
    <div className="fade-in">
      <div style={{ paddingTop: 18 }}>
        <span className="eyebrow">Curriculum</span>
        <h1>课程体系</h1>
        <p className="lede">
          {STAGES.length} 个阶段，{TOTAL_LESSONS} 课。前六阶段按《{BOOK.title}》{BOOK.edition}的三篇十四章逐节展开；
          第七阶段按批判性思维的能力目标自主编排，补齐主张与证据、证据分级、隐含假设、反驳与媒体数据素养这条线。
          每课含导入、定义、理论、例题、反例、应用与五道习题。
        </p>
      </div>

      <div className="note" style={{ margin: '18px 0 26px' }}>
        <span className="note-h">关于顺序</span>
        教材本身把三段论（第 5–7 章）放在命题逻辑（第 8–9 章）之前。本课程按「先学会看论证，再学符号工具」的思路，把命题逻辑放在阶段三，
        三段论与谓词逻辑合为阶段四。若你想严格按原书顺序，可以先学阶段四的前十课，再回到阶段三。
      </div>

      {STAGES.map(stage => {
        const done = doneCount(stage.lessons.map(l => l.id))
        const pct = stage.lessons.length ? Math.round((done / stage.lessons.length) * 100) : 0
        const isOpen = open === stage.id
        return (
          <section key={stage.id} style={{ marginBottom: 6 }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : stage.id)}
              style={{ width: '100%', textAlign: 'left', padding: '18px 0 14px', borderTop: '1px solid var(--ink)' }}
            >
              <div className="row between" style={{ alignItems: 'baseline' }}>
                <span className="eyebrow" style={{ marginBottom: 0 }}>Stage {String(stage.id).padStart(2, '0')}</span>
                <span className="mono" style={{ color: 'var(--graphite-2)', fontSize: 10.5 }}>
                  {stage.chapters} · {done}/{stage.lessons.length}
                </span>
              </div>
              <div className="row between" style={{ alignItems: 'center', marginTop: 6 }}>
                <h2 style={{ margin: 0, fontSize: 22 }}>{stage.title}</h2>
                <span style={{ color: 'var(--graphite-2)', fontSize: 12 }}>{isOpen ? '收起' : '展开'}</span>
              </div>
              <div style={{ fontSize: 11, letterSpacing: '.14em', color: 'var(--graphite-2)', textTransform: 'uppercase', marginTop: 2 }}>
                {stage.en}
              </div>
              <div className="bar" style={{ marginTop: 12 }}><i style={{ width: `${pct}%` }} /></div>
            </button>

            {isOpen && (
              <div className="fade-in">
                <p style={{ fontSize: 13, color: 'var(--graphite)', lineHeight: 1.75, margin: '0 0 8px' }}>{stage.summary}</p>
                {stage.lessons.map(l => {
                  const rec = db.lessons[l.id]
                  const isDone = rec?.done
                  return (
                    <button key={l.id} className="lesson-row" onClick={() => nav(`/lesson/${l.id}`)}>
                      <div className="lesson-no">{l.code}</div>
                      <div className="lesson-main">
                        <div className="lesson-title">{l.title}</div>
                        <div className="lesson-sub">
                          {l.chapter} · {l.quiz.length} 题 · {l.minutes} 分钟
                        </div>
                      </div>
                      <div className={`tick ${isDone ? 'done' : rec ? 'doing' : ''}`}>{isDone ? '✓' : ''}</div>
                    </button>
                  )
                })}
                <div style={{ height: 10 }} />
              </div>
            )}
          </section>
        )
      })}

      <div className="divider-dotted" />
      <p style={{ fontSize: 12, color: 'var(--graphite-2)', lineHeight: 1.9 }}>
        {BOOK.title}（{BOOK.edition}），{BOOK.authors}，{BOOK.publisher}。
        课程讲解为独立撰写，公式与规则依据通行逻辑学教材体系，未引用原书页码与原文。
      </p>
    </div>
  )
}
