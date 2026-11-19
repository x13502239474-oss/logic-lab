import { useState } from 'react'
import { DECOMPOSE, DETECT, QUICK, TOPICS } from '../data/daily'
import { useDB, store } from '../store/db'

const dayIndex = () => Math.floor(Date.now() / 86400000)

type Tab = 'quick' | 'decompose' | 'detect' | 'write'

const TABS: { id: Tab; label: string }[] = [
  { id: 'quick', label: '快速推理' },
  { id: 'decompose', label: '论证拆解' },
  { id: 'detect', label: '谬误侦探' },
  { id: 'write', label: '独立论证' },
]

export default function Daily() {
  const [tab, setTab] = useState<Tab>('quick')
  return (
    <div className="fade-in">
      <div style={{ paddingTop: 18, paddingBottom: 12 }}>
        <span className="eyebrow">Daily Drill</span>
        <h1>每日思维训练</h1>
        <p className="lede" style={{ fontSize: 13.5 }}>
          四组固定动作，每天二十分钟。判断力靠重复，不靠灵感。
        </p>
      </div>

      <div className="tabs">
        {TABS.map(t => (
          <button key={t.id} className={tab === t.id ? 'on' : ''} onClick={() => setTab(t.id)}>{t.label}</button>
        ))}
      </div>

      <div style={{ paddingTop: 18 }}>
        {tab === 'quick' && <Quick />}
        {tab === 'decompose' && <Decompose />}
        {tab === 'detect' && <Detect />}
        {tab === 'write' && <Write />}
      </div>
    </div>
  )
}

function Quick() {
  const d = dayIndex()
  const set = [0, 1, 2, 3, 4].map(k => QUICK[(d + k) % QUICK.length])
  const [picks, setPicks] = useState<Record<string, string>>({})

  return (
    <div>
      <p style={{ fontSize: 12.5, color: 'var(--graphite-2)', marginTop: 0 }}>
        今日五题 · 全部答完会显示得分。
      </p>
      {set.map((q, i) => {
        const pick = picks[q.id]
        const answered = !!pick
        return (
          <div key={q.id} style={{ borderTop: '1px solid var(--rule)', padding: '16px 0' }}>
            <div className="row" style={{ gap: 8, marginBottom: 10 }}>
              <span className="q-num">{String(i + 1).padStart(2, '0')}</span>
              <div style={{ fontSize: 14.5, lineHeight: 1.75, flex: 1 }}>{q.stem}</div>
            </div>
            {q.options.map((o, oi) => {
              const L = 'ABCD'[oi]
              const cls = answered
                ? L === q.answer ? 'opt right' : pick === L ? 'opt wrong' : 'opt'
                : 'opt'
              return (
                <button
                  key={L}
                  className={cls}
                  onClick={() => !answered && setPicks({ ...picks, [q.id]: L })}
                >
                  <span className="k">{L}</span><span>{o}</span>
                </button>
              )
            })}
            {answered && (
              <div className="answer-box">
                <span className={`verdict ${pick === q.answer ? 'ok' : 'bad'}`}>
                  {pick === q.answer ? '✓ 正确' : `✗ 正确答案 ${q.answer}`}
                </span>
                {q.explanation}
              </div>
            )}
          </div>
        )
      })}
      <div className="note" style={{ marginTop: 14 }}>
        <span className="note-h">今日得分</span>
        {Object.keys(picks).length === 5
          ? `${set.filter(q => picks[q.id] === q.answer).length} / 5`
          : `已答 ${Object.keys(picks).length} / 5`}
      </div>
    </div>
  )
}

function Decompose() {
  const d = DECOMPOSE[dayIndex() % DECOMPOSE.length]
  const [revealed, setRevealed] = useState(false)
  return (
    <div>
      <div className="panel" style={{ background: 'var(--paper-3)' }}>
        <span className="note-h" style={{ color: 'var(--graphite)' }}>今日语段</span>
        <p style={{ fontSize: 15.5, lineHeight: 2, margin: 0, fontFamily: 'var(--font-serif)' }}>{d.text}</p>
      </div>
      <p style={{ fontSize: 13, color: 'var(--graphite)', marginTop: 14 }}>
        先自己在纸上标出：哪一句是结论？哪些是前提？有没有一句没说出口、但缺了它结论就接不上的话？
      </p>
      {!revealed ? (
        <button className="btn sm" onClick={() => setRevealed(true)}>对照参考拆解</button>
      ) : (
        <div className="fade-in">
          <div className="kv"><span>结论</span><b style={{ textAlign: 'right', maxWidth: '70%' }}>{d.conclusion}</b></div>
          <div className="kv"><span>前提</span><b style={{ textAlign: 'right', maxWidth: '70%', fontWeight: 400 }}>{d.premises.join('；')}</b></div>
          <div className="kv"><span>隐含前提</span><b style={{ textAlign: 'right', maxWidth: '70%', fontWeight: 400 }}>{d.hidden.join('；')}</b></div>
          <div className="note" style={{ marginTop: 14 }}>
            <span className="note-h">点评</span>{d.note}
          </div>
          <button className="btn ghost sm" style={{ marginTop: 12 }} onClick={() => setRevealed(false)}>收起</button>
        </div>
      )}
    </div>
  )
}

function Detect() {
  const d = DETECT[dayIndex() % DETECT.length]
  const [text, setText] = useState('')
  const [revealed, setRevealed] = useState(false)
  return (
    <div>
      <div className="panel" style={{ background: 'var(--paper-3)' }}>
        <span className="note-h" style={{ color: 'var(--graphite)' }}>今日论述</span>
        <p style={{ fontSize: 15.5, lineHeight: 2, margin: 0, fontFamily: 'var(--font-serif)' }}>{d.text}</p>
      </div>
      <label style={{ fontSize: 11.5, letterSpacing: '.14em', color: 'var(--graphite-2)', display: 'block', marginTop: 16 }}>
        你的诊断：问题在哪？你会怎么反驳？
      </label>
      <textarea
        className="input"
        rows={4}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="先写完，再对照……"
        style={{ marginTop: 6 }}
      />
      {!revealed ? (
        <button className="btn sm" style={{ marginTop: 10 }} onClick={() => setRevealed(true)} disabled={text.trim().length < 2}>
          对照参考答案
        </button>
      ) : (
        <div className="fade-in" style={{ marginTop: 12 }}>
          <div className="verdict-band bad"><span className="t">{d.answer}</span>{d.why}</div>
          <div className="note" style={{ marginTop: 12 }}>
            <span className="note-h">可以这样反驳</span>{d.fix}
          </div>
          <button className="btn ghost sm" style={{ marginTop: 12 }} onClick={() => { setRevealed(false); setText('') }}>再写一次</button>
        </div>
      )}
    </div>
  )
}

function Write() {
  const db = useDB()
  const topic = TOPICS[dayIndex() % TOPICS.length]
  const [f, setF] = useState({ claim: '', premises: '', reasoning: '', objection: '', reply: '' })
  const [saved, setSaved] = useState(false)
  const canSave = f.claim.trim() && f.premises.trim() && f.reasoning.trim()

  return (
    <div>
      <span className="eyebrow">Argument Archive</span>
      <h3 style={{ fontSize: 18, marginBottom: 8 }}>{topic.title}</h3>
      <p style={{ fontSize: 13.5, color: 'var(--graphite)', lineHeight: 1.85 }}>{topic.prompt}</p>
      <div className="row" style={{ flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
        {topic.angles.map(a => <span key={a} className="chip" style={{ fontSize: 10.5, whiteSpace: 'normal', textAlign: 'left' }}>{a}</span>)}
      </div>

      {([
        ['claim', '我的观点', '一句话说清你站在哪一边'],
        ['premises', '支持前提', '至少两条，每条都要能被检验'],
        ['reasoning', '推理过程', '从前提怎么走到结论，中间有没有跳步'],
        ['objection', '最强反对意见', '写出反方最好的版本，不要写稻草人'],
        ['reply', '对反对意见的回应', '承认什么、反驳什么'],
      ] as const).map(([k, label, ph]) => (
        <div key={k} style={{ marginBottom: 12 }}>
          <label style={{ fontSize: 11.5, letterSpacing: '.14em', color: 'var(--graphite-2)' }}>{label}</label>
          <textarea
            className="input"
            rows={k === 'claim' ? 2 : 3}
            value={f[k]}
            onChange={e => { setF({ ...f, [k]: e.target.value }); setSaved(false) }}
            placeholder={ph}
            style={{ marginTop: 5 }}
          />
        </div>
      ))}

      <button
        className="btn block"
        disabled={!canSave}
        onClick={() => { store.addArgument({ topic: topic.title, ...f }); setF({ claim: '', premises: '', reasoning: '', objection: '', reply: '' }); setSaved(true) }}
      >
        存入个人论证档案
      </button>
      {saved && <p style={{ fontSize: 12, color: 'var(--ok)', marginTop: 8 }}>已保存，可在「我的」里查看。</p>}

      <div className="section-label"><span>历史档案</span><i /></div>
      {db.arguments.length === 0 ? (
        <p style={{ fontSize: 13, color: 'var(--graphite-2)' }}>还没有存档。写下的论证会按时间倒序留在这里。</p>
      ) : (
        db.arguments.slice(0, 6).map(a => (
          <div key={a.id} className="panel flat" style={{ marginBottom: 10 }}>
            <div className="row between">
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 14 }}>{a.topic}</span>
              <span className="mono" style={{ fontSize: 10, color: 'var(--graphite-2)' }}>
                {new Date(a.at).toLocaleDateString('zh-CN')}
              </span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--graphite)', marginTop: 6, lineHeight: 1.8 }}>{a.claim}</div>
          </div>
        ))
      )}
    </div>
  )
}
