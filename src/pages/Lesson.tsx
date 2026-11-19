import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { lessonById, nextLesson, prevLesson, stageOfLesson } from '../data/curriculum'
import { useDB, store } from '../store/db'
import { Markdown, InlineMD } from '../components/Markdown'
import { QuizCard } from '../components/QuizCard'

export default function LessonPage() {
  const { id } = useParams()
  const nav = useNavigate()
  const db = useDB()
  const lesson = id ? lessonById(id) : undefined
  const [note, setNote] = useState('')
  const [noteSaved, setNoteSaved] = useState(false)

  useEffect(() => {
    if (lesson) {
      store.visitLesson(lesson.id)
      setNote(db.notes[lesson.id] ?? '')
      setNoteSaved(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.id])

  if (!lesson) {
    return (
      <div className="empty">
        <b>找不到这一课</b>
        课程编号可能有误。
        <div style={{ marginTop: 16 }}><button className="btn ghost sm" onClick={() => nav('/courses')}>返回课程目录</button></div>
      </div>
    )
  }

  const stage = stageOfLesson(lesson.id)
  const prev = prevLesson(lesson.id)
  const next = nextLesson(lesson.id)
  const rec = db.lessons[lesson.id]
  const isFav = db.favorites.includes(lesson.id)

  return (
    <article className="fade-in">
      <div style={{ paddingTop: 16 }}>
        <button
          onClick={() => nav('/courses')}
          style={{ fontSize: 11, letterSpacing: '.16em', color: 'var(--graphite-2)', marginBottom: 14, textTransform: 'uppercase' }}
        >
          ← 课程目录
        </button>

        <span className="eyebrow">
          Stage {String(lesson.stage).padStart(2, '0')} · {stage?.title}
        </span>
        <h1>{lesson.title}</h1>
        <div className="meta-row">
          <span>教材 {lesson.code} 节</span>
          <span>{lesson.chapter}</span>
          <span>{lesson.minutes} 分钟</span>
          <span>{lesson.quiz.length} 道习题</span>
        </div>
      </div>

      <div className="panel" style={{ marginTop: 20, background: 'var(--paper-3)', borderColor: 'var(--rule)' }}>
        <span className="note-h" style={{ color: 'var(--graphite)', letterSpacing: '.18em' }}>学完这一课，你能</span>
        <ul style={{ margin: '6px 0 0', paddingLeft: 18, fontSize: 14, lineHeight: 1.85 }}>
          {lesson.objectives.map((o, i) => <li key={i}><InlineMD text={o} /></li>)}
        </ul>
      </div>

      <div style={{ margin: '24px 0 26px', paddingLeft: 16, borderLeft: '2px solid var(--accent)' }}>
        <span className="note-h">本节导入</span>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16.5, lineHeight: 1.85, margin: 0, color: 'var(--ink)' }}>
          {lesson.lead}
        </p>
      </div>

      <Markdown text={lesson.body} />

      <div className="section-label"><span>本课概念</span><i /></div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {lesson.concepts.map(c => <span key={c} className="chip">{c}</span>)}
      </div>

      <div className="section-label"><span>章节测试</span><i /></div>
      <p style={{ fontSize: 12.5, color: 'var(--graphite-2)', marginTop: -6 }}>
        共 {lesson.quiz.length} 题，答错会自动收进错题本。
      </p>
      <div style={{ borderTop: '1px solid var(--rule)' }}>
        {lesson.quiz.map((q, i) => (
          <QuizCard key={q.id} q={q} index={i} lessonId={lesson.id} />
        ))}
      </div>

      <div className="section-label"><span>我的笔记</span><i /></div>
      <textarea
        className="input"
        rows={4}
        placeholder="写下你的疑问、反例或一句话总结。只有你自己看得到。"
        value={note}
        onChange={e => { setNote(e.target.value); setNoteSaved(false) }}
      />
      <div className="row" style={{ marginTop: 8 }}>
        <button
          className="btn ghost sm"
          onClick={() => { store.saveNote(lesson.id, note); setNoteSaved(true) }}
        >
          {noteSaved ? '已保存' : '保存笔记'}
        </button>
        <button className="btn ghost sm" onClick={() => store.toggleFavoriteLesson(lesson.id)}>
          {isFav ? '★ 已收藏' : '☆ 收藏本课'}
        </button>
      </div>

      <div style={{ marginTop: 26 }}>
        <button
          className={`btn block ${rec?.done ? 'ghost' : ''}`}
          onClick={() => store.setLessonDone(lesson.id, !rec?.done)}
        >
          {rec?.done ? '✓ 已完成 · 点击撤销' : '标记本课学完'}
        </button>
      </div>

      <div className="row between" style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid var(--rule)' }}>
        <button
          className="btn ghost sm"
          disabled={!prev}
          onClick={() => prev && nav(`/lesson/${prev.id}`)}
          style={{ maxWidth: '48%', overflow: 'hidden' }}
        >
          ← {prev ? prev.title : '已是第一课'}
        </button>
        <button
          className="btn ghost sm"
          disabled={!next}
          onClick={() => next && nav(`/lesson/${next.id}`)}
          style={{ maxWidth: '48%', overflow: 'hidden' }}
        >
          {next ? next.title : '已是最后一课'} →
        </button>
      </div>
    </article>
  )
}
