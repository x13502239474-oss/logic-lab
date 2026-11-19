import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QUIZ_INDEX, STAGES } from '../data/curriculum'
import { useDB, store } from '../store/db'
import { QuizCard } from '../components/QuizCard'
import { InlineMD } from '../components/Markdown'

type Tab = 'todo' | 'done' | 'fav'

export default function Mistakes() {
  const db = useDB()
  const nav = useNavigate()
  const [tab, setTab] = useState<Tab>('todo')
  const [stage, setStage] = useState<number | 0>(0)
  const [redo, setRedo] = useState<string | null>(null)

  const items = useMemo(() => {
    return Object.values(db.mistakes)
      .filter(m => (tab === 'todo' ? !m.mastered : tab === 'done' ? m.mastered : m.favorite))
      .map(m => ({ m, ref: QUIZ_INDEX[m.qid] }))
      .filter(x => !!x.ref)
      .filter(x => stage === 0 || x.ref!.lesson.stage === stage)
      .sort((a, b) => b.m.lastWrongAt - a.m.lastWrongAt)
  }, [db.mistakes, tab, stage])

  const total = Object.values(db.mistakes).length
  const mastered = Object.values(db.mistakes).filter(m => m.mastered).length
  const fav = Object.values(db.mistakes).filter(m => m.favorite).length

  return (
    <div className="fade-in">
      <div style={{ paddingTop: 18 }}>
        <span className="eyebrow">Error Notebook</span>
        <h1>错题本</h1>
        <p className="lede" style={{ fontSize: 13.5 }}>
          答错自动收录，重做答对自动移出。共 {total} 道，已掌握 {mastered} 道。
        </p>
      </div>

      <div className="tabs" style={{ marginTop: 6 }}>
        <button className={tab === 'todo' ? 'on' : ''} onClick={() => { setTab('todo'); setRedo(null) }}>待复习 {total - mastered}</button>
        <button className={tab === 'done' ? 'on' : ''} onClick={() => { setTab('done'); setRedo(null) }}>已掌握 {mastered}</button>
        <button className={tab === 'fav' ? 'on' : ''} onClick={() => { setTab('fav'); setRedo(null) }}>收藏 {fav}</button>
      </div>

      <div className="chip-scroll" style={{ marginTop: 12 }}>
        <button className={`chip ${stage === 0 ? 'on' : ''}`} onClick={() => setStage(0)}>全部阶段</button>
        {STAGES.map(s => (
          <button key={s.id} className={`chip ${stage === s.id ? 'on' : ''}`} onClick={() => setStage(s.id)}>
            {s.title}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="empty">
          <b>{tab === 'todo' ? '没有待复习的错题' : tab === 'done' ? '还没有已掌握的错题' : '还没有收藏的题目'}</b>
          {tab === 'todo' ? '做课程里的章节测试，答错的题会自动出现在这里。' : '在题目解析处可以收藏值得反复看的题。'}
          <div style={{ marginTop: 16 }}><button className="btn ghost sm" onClick={() => nav('/courses')}>去课程</button></div>
        </div>
      ) : (
        <div style={{ marginTop: 8 }}>
          {items.map(({ m, ref }) => {
            const isRedo = redo === m.qid
            return (
              <div key={m.qid} style={{ borderTop: '1px solid var(--rule)', paddingTop: 16 }}>
                <div className="row between" style={{ alignItems: 'baseline', marginBottom: 8 }}>
                  <button
                    onClick={() => nav(`/lesson/${ref!.lesson.id}`)}
                    style={{ fontSize: 11, letterSpacing: '.1em', color: 'var(--graphite-2)' }}
                  >
                    {ref!.lesson.chapter} · 第 {ref!.lesson.no} 课 {ref!.lesson.title}
                  </button>
                  <span className="mono" style={{ fontSize: 10.5, color: m.wrongCount > 1 ? 'var(--bad)' : 'var(--graphite-2)' }}>
                    错 {m.wrongCount} 次
                  </span>
                </div>

                <div style={{ fontSize: 14.5, lineHeight: 1.8, marginBottom: 10 }}>
                  <InlineMD text={ref!.quiz.stem} />
                </div>

                {isRedo ? (
                  <QuizCard
                    q={ref!.quiz}
                    index={0}
                    lessonId={ref!.lesson.id}
                    onAnswered={c => { if (c) store.markMastered(m.qid, ref!.lesson.id) }}
                  />
                ) : (
                  <>
                    <div className="answer-box">
                      <div>
                        <b>正确答案：</b>
                        {ref!.quiz.type === 'judge'
                          ? (ref!.quiz.answer ? '正确' : '错误')
                          : ref!.quiz.type === 'short'
                            ? String(ref!.quiz.answer ?? '（见解析）')
                            : (Array.isArray(ref!.quiz.answer) ? ref!.quiz.answer : [String(ref!.quiz.answer ?? '')])
                                .map(L => (ref!.quiz.options ?? [])[L.charCodeAt(0) - 65] ?? L)
                                .join('；')}
                      </div>
                      <div style={{ marginTop: 6 }}><b>解析：</b><InlineMD text={ref!.quiz.explanation} /></div>
                    </div>
                    <div className="row" style={{ gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
                      <button className="btn sm" onClick={() => setRedo(m.qid)}>重做</button>
                      <button className="btn ghost sm" onClick={() => store.toggleFavorite(m.qid, ref!.lesson.id)}>
                        {m.favorite ? '★ 取消收藏' : '☆ 收藏'}
                      </button>
                      {!m.mastered && (
                        <button className="btn ghost sm" onClick={() => store.markMastered(m.qid, ref!.lesson.id)}>标记已掌握</button>
                      )}
                      <button className="btn ghost sm" onClick={() => store.removeMistake(m.qid)}>移出</button>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      )}

      <div className="note" style={{ marginTop: 26 }}>
        <span className="note-h">复习建议</span>
        错题按「错误次数」排序，反复错的那几道才是真正的薄弱点。同一类错误连错三次，回到对应课程重读那一节，比刷十道新题有效。
      </div>
    </div>
  )
}
