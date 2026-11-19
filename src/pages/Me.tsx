import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ALL_LESSONS, BOOK, STAGES, TOTAL_LESSONS } from '../data/curriculum'
import { useDB, store, streakOf, totalSeconds, fmtDuration } from '../store/db'

export default function Me() {
  const db = useDB()
  const nav = useNavigate()
  const [confirm, setConfirm] = useState(false)

  const activeDays = Object.values(db.days).filter(d => d.sec >= 60 || d.lessons > 0 || d.quiz > 0).length
  const answers = Object.values(db.answers)
  const correctRate = answers.length ? Math.round((answers.filter(a => a.correct).length / answers.length) * 100) : 0
  const done = ALL_LESSONS.filter(l => db.lessons[l.id]?.done)
  const favLessons = db.favorites.map(id => ALL_LESSONS.find(l => l.id === id)).filter(Boolean)

  const exportData = () => {
    const blob = new Blob([JSON.stringify(db, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `logiclab-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(a.href)
  }

  return (
    <div className="fade-in">
      <div style={{ paddingTop: 18 }}>
        <span className="eyebrow">Archive</span>
        <h1>我的</h1>
        <p className="lede" style={{ fontSize: 13.5 }}>
          所有数据只存在这台设备的浏览器里，不上传、不需要账号。
        </p>
      </div>

      <div className="stat-grid" style={{ marginTop: 20 }}>
        <div className="stat"><b>{activeDays}<small>天</small></b><em>学习天数</em></div>
        <div className="stat"><b>{streakOf(db)}<small>天</small></b><em>当前连续</em></div>
        <div className="stat"><b>{fmtDuration(totalSeconds(db)).replace(' ', '')}</b><em>累计时长</em></div>
      </div>
      <div className="stat-grid" style={{ borderTop: 'none' }}>
        <div className="stat"><b>{done.length}<small>/{TOTAL_LESSONS}</small></b><em>完成课程</em></div>
        <div className="stat"><b>{answers.length}</b><em>累计答题</em></div>
        <div className="stat"><b>{correctRate}<small>%</small></b><em>正确率</em></div>
      </div>

      <div className="section-label"><span>各阶段进度</span><i /></div>
      {STAGES.map(s => {
        const d = s.lessons.filter(l => db.lessons[l.id]?.done).length
        const p = s.lessons.length ? Math.round((d / s.lessons.length) * 100) : 0
        return (
          <div key={s.id} style={{ marginBottom: 14 }}>
            <div className="row between" style={{ marginBottom: 5 }}>
              <span style={{ fontSize: 13 }}>{s.title}</span>
              <span className="mono" style={{ fontSize: 10.5, color: 'var(--graphite-2)' }}>{d}/{s.lessons.length}</span>
            </div>
            <div className="bar"><i style={{ width: `${p}%`, background: p === 100 ? 'var(--ok)' : undefined }} /></div>
          </div>
        )
      })}

      <div className="section-label"><span>收藏的课程</span><i /></div>
      {favLessons.length === 0 ? (
        <p style={{ fontSize: 13, color: 'var(--graphite-2)' }}>还没有收藏。课程页底部可以收藏值得反复读的那几节。</p>
      ) : (
        favLessons.map(l => l && (
          <button key={l.id} className="lesson-row" onClick={() => nav(`/lesson/${l.id}`)}>
            <div className="lesson-no">{l.code}</div>
            <div className="lesson-main">
              <div className="lesson-title" style={{ fontSize: 15 }}>{l.title}</div>
              <div className="lesson-sub">{l.chapter}</div>
            </div>
          </button>
        ))
      )}

      <div className="section-label"><span>个人论证档案</span><i /></div>
      {db.arguments.length === 0 ? (
        <p style={{ fontSize: 13, color: 'var(--graphite-2)' }}>
          还没有存档。去「每日思维训练 · 独立论证」写下第一个。
          <br />
          <button className="btn ghost sm" style={{ marginTop: 10 }} onClick={() => nav('/daily')}>去写一段</button>
        </p>
      ) : (
        db.arguments.map(a => (
          <div key={a.id} className="panel flat" style={{ marginBottom: 10 }}>
            <div className="row between">
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 14 }}>{a.topic}</span>
              <span className="mono" style={{ fontSize: 10, color: 'var(--graphite-2)' }}>{new Date(a.at).toLocaleDateString('zh-CN')}</span>
            </div>
            <div style={{ marginTop: 10, fontSize: 13, lineHeight: 1.85, color: 'var(--graphite)' }}>
              <div><b style={{ color: 'var(--ink)' }}>观点：</b>{a.claim}</div>
              <div><b style={{ color: 'var(--ink)' }}>前提：</b>{a.premises}</div>
              <div><b style={{ color: 'var(--ink)' }}>推理：</b>{a.reasoning}</div>
              {a.objection && <div><b style={{ color: 'var(--ink)' }}>反对：</b>{a.objection}</div>}
              {a.reply && <div><b style={{ color: 'var(--ink)' }}>回应：</b>{a.reply}</div>}
            </div>
            <button className="btn ghost sm" style={{ marginTop: 10 }} onClick={() => store.removeArgument(a.id)}>删除</button>
          </div>
        ))
      )}

      <div className="section-label"><span>数据</span><i /></div>
      <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
        <button className="btn ghost sm" onClick={exportData}>导出学习记录</button>
        {!confirm ? (
          <button className="btn ghost sm" onClick={() => setConfirm(true)}>清空全部数据</button>
        ) : (
          <>
            <button className="btn sm" style={{ background: 'var(--bad)', borderColor: 'var(--bad)' }} onClick={() => { store.reset(); setConfirm(false) }}>
              确认清空
            </button>
            <button className="btn ghost sm" onClick={() => setConfirm(false)}>取消</button>
          </>
        )}
      </div>
      <p style={{ fontSize: 11.5, color: 'var(--graphite-2)', marginTop: 8, lineHeight: 1.8 }}>
        清空会删除进度、笔记、错题与论证档案，无法恢复。建议先导出一份备份。
      </p>

      <div className="section-label"><span>关于本课程</span><i /></div>
      <div className="note" style={{ fontSize: 12.5 }}>
        <span className="note-h">教材与编写说明</span>
        {BOOK.title}（{BOOK.edition}），{BOOK.authors}，{BOOK.publisher}。<br />
        {BOOK.note}<br />
        课程中的例题、反例与案例均为独立撰写，涉及现实情境时使用虚构主体，不对任何真实个人或机构作评价。
      </div>
      <p style={{ fontSize: 11, color: 'var(--graphite-2)', marginTop: 16 }}>
        LOGIC LAB · 逻辑学研究所 · 本地优先，无账号，无追踪
      </p>
    </div>
  )
}
