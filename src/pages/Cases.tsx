import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CASES } from '../data/cases'

export default function Cases() {
  const nav = useNavigate()
  const [domain, setDomain] = useState<string>('全部')
  const domains = useMemo(() => Array.from(new Set(CASES.map(c => c.domain))), [])
  const list = domain === '全部' ? CASES : CASES.filter(c => c.domain === domain)

  return (
    <div className="fade-in">
      <div style={{ paddingTop: 18 }}>
        <button onClick={() => nav('/')} style={{ fontSize: 11, letterSpacing: '.16em', color: 'var(--graphite-2)', marginBottom: 14 }}>
          ← 首页
        </button>
        <span className="eyebrow">Case Studies</span>
        <h1>现实论证案例库</h1>
        <p className="lede" style={{ fontSize: 13.5 }}>
          {CASES.length} 个来自新闻、广告、谈判、科研与日常争论的论述。每一个都按同一套流程拆：背景 → 论述 → 前提 → 结论 → 结构 → 检验 → 错误 → 改写。
        </p>
      </div>

      <div className="chip-scroll" style={{ margin: '16px calc(-1 * var(--pad)) 6px' }}>
        <button className={`chip ${domain === '全部' ? 'on' : ''}`} onClick={() => setDomain('全部')}>全部</button>
        {domains.map(d => (
          <button key={d} className={`chip ${domain === d ? 'on' : ''}`} onClick={() => setDomain(d)}>{d}</button>
        ))}
      </div>

      {list.map((c, i) => (
        <button
          key={c.id}
          onClick={() => nav(`/cases/${c.id}`)}
          style={{ display: 'block', width: '100%', textAlign: 'left', borderTop: '1px solid var(--rule)', padding: '16px 0' }}
        >
          <div className="row between" style={{ alignItems: 'baseline' }}>
            <span className="mono" style={{ fontSize: 10.5, color: 'var(--accent)', letterSpacing: '.1em' }}>
              {String(i + 1).padStart(2, '0')} · {c.domain}
            </span>
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 17, margin: '6px 0 5px' }}>{c.title}</div>
          <div style={{ fontSize: 12.5, color: 'var(--graphite)', lineHeight: 1.7 }}>{c.summary}</div>
        </button>
      ))}

      <div className="note" style={{ marginTop: 24 }}>
        <span className="note-h">使用说明</span>
        不要把这些案例当成「找错游戏」。其中有几个论证是站得住的，值得学的恰恰是它为什么站得住。判断之前，先自己写一遍前提与结论。
      </div>
    </div>
  )
}
