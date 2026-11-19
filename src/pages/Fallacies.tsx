import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FALLACIES } from '../data/fallacies'
import { lessonById } from '../data/curriculum'
import { InlineMD } from '../components/Markdown'

const FAMILIES = ['相干谬误', '不当归纳谬误', '预设谬误', '含混谬误'] as const

const FAMILY_NOTE: Record<string, string> = {
  '相干谬误': '理由与结论之间没有真正的支持关系，听起来相关，实际不搭。',
  '不当归纳谬误': '推理方式本身是归纳，但样本、类比或因果判断撑不住结论。',
  '预设谬误': '把需要证明的东西偷偷放进了前提里，或者问题本身已经埋了答案。',
  '含混谬误': '词义在中途被换掉，或者把整体与部分的属性互相搬运。',
}

export default function Fallacies() {
  const nav = useNavigate()
  const [fam, setFam] = useState<string>('全部')
  const [open, setOpen] = useState<string | null>(null)

  const list = useMemo(() => fam === '全部' ? FALLACIES : FALLACIES.filter(f => f.family === fam), [fam])

  return (
    <div className="fade-in">
      <div style={{ paddingTop: 18 }}>
        <button onClick={() => nav('/')} style={{ fontSize: 11, letterSpacing: '.16em', color: 'var(--graphite-2)', marginBottom: 14 }}>
          ← 首页
        </button>
        <span className="eyebrow">Taxonomy of Fallacies</span>
        <h1>谬误图鉴</h1>
        <p className="lede" style={{ fontSize: 13.5 }}>
          {FALLACIES.length} 条常见谬误，按教材的四类划分整理。每一条给出结构、案例、错因、识别提问与反驳话术。
        </p>
      </div>

      <div className="chip-scroll" style={{ margin: '16px calc(-1 * var(--pad)) 4px' }}>
        <button className={`chip ${fam === '全部' ? 'on' : ''}`} onClick={() => setFam('全部')}>全部</button>
        {FAMILIES.map(f => (
          <button key={f} className={`chip ${fam === f ? 'on' : ''}`} onClick={() => setFam(f)}>{f.replace('谬误', '')}</button>
        ))}
      </div>

      {fam !== '全部' && (
        <p style={{ fontSize: 12, color: 'var(--graphite-2)', marginBottom: 10, lineHeight: 1.8 }}>{FAMILY_NOTE[fam]}</p>
      )}

      {list.map((f, i) => {
        const isOpen = open === f.id
        const lesson = lessonById(f.lessonId)
        return (
          <div key={f.id} style={{ borderTop: '1px solid var(--rule)', padding: '14px 0' }}>
            <button style={{ width: '100%', textAlign: 'left' }} onClick={() => setOpen(isOpen ? null : f.id)}>
              <div className="row between" style={{ alignItems: 'baseline' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: 16.5 }}>{f.name}</span>
                  <span className="mono" style={{ fontSize: 10.5, color: 'var(--graphite-2)', marginLeft: 8 }}>{f.en}</span>
                </div>
                <span className="mono" style={{ fontSize: 10, color: 'var(--graphite-2)' }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--graphite)', margin: '6px 0 0', lineHeight: 1.75 }}>{f.definition}</p>
            </button>

            {isOpen && (
              <div className="fade-in" style={{ marginTop: 14 }}>
                <div className="formula-block" style={{ textAlign: 'left', fontSize: 13.5, lineHeight: 1.9 }}>
                  <InlineMD text={f.pattern} />
                </div>

                <div style={{ marginTop: 14 }}>
                  <span className="note-h" style={{ color: 'var(--graphite-2)' }}>案例</span>
                  <p style={{ fontSize: 14, lineHeight: 1.9, margin: '4px 0 0' }}>{f.example}</p>
                </div>

                <div style={{ marginTop: 12 }}>
                  <span className="note-h" style={{ color: 'var(--graphite-2)' }}>错在哪</span>
                  <p style={{ fontSize: 14, lineHeight: 1.9, margin: '4px 0 0', color: 'var(--graphite)' }}>{f.flaw}</p>
                </div>

                <div style={{ marginTop: 12 }}>
                  <span className="note-h" style={{ color: 'var(--graphite-2)' }}>怎么识别</span>
                  <ol style={{ margin: '4px 0 0', paddingLeft: 18, fontSize: 14, lineHeight: 1.9 }}>
                    {f.spot.map((s, k) => <li key={k}>{s}</li>)}
                  </ol>
                </div>

                <div style={{ marginTop: 12 }}>
                  <span className="note-h" style={{ color: 'var(--accent)' }}>怎么反驳</span>
                  <ul style={{ margin: '4px 0 0', paddingLeft: 18, fontSize: 14, lineHeight: 1.9 }}>
                    {f.rebut.map((s, k) => <li key={k}>{s}</li>)}
                  </ul>
                </div>

                <div className="row" style={{ gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                  {lesson && <button className="chip" onClick={() => nav(`/lesson/${lesson.id}`)}>第 {lesson.no} 课 · {lesson.title}</button>}
                  <button className="chip" onClick={() => nav('/lab')}>去实验室识别</button>
                </div>
              </div>
            )}
          </div>
        )
      })}

      <div className="note" style={{ marginTop: 24 }}>
        <span className="note-h">提醒</span>
        谬误标签是诊断工具，不是武器。先判断论证是否真的犯了某个错误，再决定要不要贴标签；用标签代替论证，本身就是一种谬误。
      </div>
    </div>
  )
}
