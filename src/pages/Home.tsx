import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { STAGES, TOTAL_LESSONS, ALL_LESSONS, BOOK } from '../data/curriculum'
import { CASES } from '../data/cases'
import { CHALLENGES, QUICK, TOPICS } from '../data/daily'
import { useDB, store, streakOf, totalSeconds, fmtDuration, todayKey } from '../store/db'
import { Markdown } from '../components/Markdown'

const dayIndex = () => Math.floor(Date.now() / 86400000)

function durValue(sec: number) {
  if (sec < 60) return String(sec)
  if (sec < 3600) return String(Math.round(sec / 60))
  return (sec / 3600).toFixed(1).replace('.0', '')
}
function durUnit(sec: number) {
  if (sec < 60) return '秒'
  if (sec < 3600) return '分'
  return '小时'
}

export default function Home() {
  const db = useDB()
  const nav = useNavigate()

  const done = ALL_LESSONS.filter(l => db.lessons[l.id]?.done)
  const pct = TOTAL_LESSONS ? Math.round((done.length / TOTAL_LESSONS) * 100) : 0
  const currentStage = STAGES.find(s => s.lessons.some(l => !db.lessons[l.id]?.done)) ?? STAGES[STAGES.length - 1]
  const next = ALL_LESSONS.find(l => !db.lessons[l.id]?.done) ?? ALL_LESSONS[0]
  const streak = streakOf(db)
  const secs = totalSeconds(db)
  const mastered = new Set(done.flatMap(l => l.concepts)).size
  const toReview = Object.values(db.mistakes).filter(m => !m.mastered).length

  const d = dayIndex()
  const challenge = CHALLENGES[d % CHALLENGES.length]
  const kase = CASES.length ? CASES[d % CASES.length] : null
  const quick = QUICK[d % QUICK.length]
  const topic = TOPICS[d % TOPICS.length]

  const today = db.dailyDone[todayKey()] ?? []
  const savedChallenge = db.challenges[challenge.id] ?? ''
  const [draft, setDraft] = useState(savedChallenge)
  const [revealed, setRevealed] = useState(Boolean(savedChallenge))

  const tasks = useMemo(() => ([
    { id: 'point', label: '核心知识点', value: `第 ${next.no} 课 · ${next.title}`, min: next.minutes, to: `/lesson/${next.id}` },
    { id: 'case', label: '逻辑案例', value: kase ? `${kase.domain} · ${kase.title}` : '案例库', min: 6, to: kase ? `/cases/${kase.id}` : '/cases' },
    { id: 'drill', label: '推理题', value: quick.stem.replace(/\$/g, ''), min: 5, to: '/daily' },
    { id: 'think', label: '思维训练', value: topic.title, min: 12, to: '/daily' },
  ]), [next, kase, quick, topic])

  return (
    <div className="fade-in">
      <div style={{ paddingTop: 18 }}>
        <span className="eyebrow">Study Record</span>
        <h1 style={{ marginBottom: 6 }}>思维训练中心</h1>
        <p className="lede" style={{ fontSize: 13.5, marginBottom: 0 }}>
          {new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
          {' · '}学习进度档案
        </p>
      </div>

      <div className="stat-grid" style={{ marginTop: 22 }}>
        <div className="stat">
          <b>{pct}<small>%</small></b>
          <em>总完成率</em>
        </div>
        <div className="stat">
          <b>{streak}<small>天</small></b>
          <em>连续学习</em>
        </div>
        <div className="stat">
          <b>{durValue(secs)}<small>{durUnit(secs)}</small></b>
          <em>累计学习</em>
        </div>
      </div>
      <div className="stat-grid" style={{ borderTop: 'none' }}>
        <div className="stat">
          <b>{mastered}<small>个</small></b>
          <em>已掌握知识点</em>
        </div>
        <div className="stat">
          <b>{toReview}<small>个</small></b>
          <em>待复习</em>
        </div>
        <div className="stat">
          <b>{done.length}<small>/{TOTAL_LESSONS}</small></b>
          <em>已完成课程</em>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <div className="row between" style={{ marginBottom: 8 }}>
          <span style={{ fontSize: 12, letterSpacing: '.1em', color: 'var(--graphite-2)' }}>
            当前阶段 · 第{currentStage.id}阶段 {currentStage.title}
          </span>
          <span className="mono" style={{ color: 'var(--graphite-2)' }}>{currentStage.chapters}</span>
        </div>
        <div className="bar"><i style={{ width: `${pct}%` }} /></div>
        <div className="row between" style={{ marginTop: 8 }}>
          <span style={{ fontSize: 11.5, color: 'var(--graphite-2)' }}>{currentStage.summary}</span>
        </div>
      </div>

      {/* 今日任务 */}
      <div className="section-label"><span>今日任务</span><i /></div>
      <p style={{ fontSize: 12.5, color: 'var(--graphite-2)', marginTop: -6 }}>
        四项合计约 {tasks.reduce((s, t) => s + t.min, 0)} 分钟 · 已完成 {today.filter(t => t !== 'challenge').length} / 4
      </p>

      <div style={{ borderTop: '1px solid var(--rule)' }}>
        {tasks.map((t, i) => {
          const isDone = today.includes(t.id)
          return (
            <button key={t.id} className="lesson-row" onClick={() => { store.markDaily(t.id); nav(t.to) }}>
              <div className={`tick ${isDone ? 'done' : i === 0 ? 'doing' : ''}`}>{isDone ? '✓' : ''}</div>
              <div className="lesson-main">
                <div className="lesson-title" style={{ fontSize: 14.5 }}>{t.label}</div>
                <div className="lesson-sub" style={{ whiteSpace: 'normal' }}>{t.value}</div>
              </div>
              <div className="mono" style={{ color: 'var(--graphite-2)', fontSize: 10.5, paddingTop: 4 }}>{t.min}′</div>
            </button>
          )
        })}
      </div>

      {/* 每日挑战 */}
      <div className="section-label"><span>每日逻辑挑战</span><i /></div>
      <div className="panel">
        <div className="mono" style={{ color: 'var(--accent)', fontSize: 10.5, letterSpacing: '.16em', marginBottom: 10 }}>
          QUESTION OF THE DAY · {challenge.tag}
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.6, marginBottom: 14 }}>
          {challenge.question}
        </div>

        {!revealed ? (
          <>
            <p style={{ fontSize: 12.5, color: 'var(--graphite-2)', marginBottom: 8 }}>{challenge.hint}</p>
            <textarea
              className="input"
              rows={3}
              placeholder="先自己写下判断，再看分析……"
              value={draft}
              onChange={e => setDraft(e.target.value)}
            />
            <div className="row" style={{ marginTop: 10 }}>
              <button
                className="btn sm"
                onClick={() => { store.saveChallenge(challenge.id, draft); setRevealed(true); store.markDaily('challenge') }}
              >
                提交并查看分析
              </button>
              <button className="btn ghost sm" onClick={() => setRevealed(true)}>直接看分析</button>
            </div>
          </>
        ) : (
          <div className="fade-in">
            {savedChallenge || draft ? (
              <div className="note" style={{ marginBottom: 14 }}>
                <span className="note-h">你的作答</span>
                {savedChallenge || draft}
              </div>
            ) : null}
            <span className="note-h" style={{ display: 'block', fontSize: 10.5, letterSpacing: '.2em', color: 'var(--accent)', marginBottom: 6 }}>
              分析
            </span>
            <div style={{ fontSize: 14.5 }}>
              <Markdown text={challenge.analysis} />
            </div>
            <button className="btn ghost sm" style={{ marginTop: 12 }} onClick={() => setRevealed(false)}>收起</button>
          </div>
        )}
      </div>

      {/* 入口 */}
      <div className="section-label"><span>继续深入</span><i /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {[
          { t: '逻辑实验室', s: '真值表 · 三段论 · 证明', to: '/lab' },
          { t: '论证案例库', s: `${CASES.length} 个现实论述拆解`, to: '/cases' },
          { t: '知识图谱', s: '概念之间的依赖关系', to: '/graph' },
          { t: '谬误图鉴', s: '18 种谬误的识别与反驳', to: '/fallacies' },
        ].map(x => (
          <button key={x.to} className="panel flat" style={{ textAlign: 'left', padding: 15 }} onClick={() => nav(x.to)}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, marginBottom: 4 }}>{x.t}</div>
            <div style={{ fontSize: 11, color: 'var(--graphite-2)', letterSpacing: '.02em' }}>{x.s}</div>
          </button>
        ))}
      </div>

      <div className="note" style={{ marginTop: 28, fontSize: 12.5 }}>
        <span className="note-h">关于本课程</span>
        {BOOK.note}
      </div>
    </div>
  )
}
