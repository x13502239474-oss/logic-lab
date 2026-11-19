import { useMemo, useState } from 'react'
import { FALLACIES, Fallacy } from '../data/fallacies'
import { InlineMD } from '../components/Markdown'

const FAMILIES: Fallacy['family'][] = ['相干谬误', '不当归纳谬误', '预设谬误', '含混谬误']

function pickOptions(all: Fallacy[], cur: Fallacy): Fallacy[] {
  const others = all.filter(f => f.id !== cur.id && f.family !== cur.family)
  const same = all.filter(f => f.id !== cur.id && f.family === cur.family)
  const pool = [...same.slice(0, 1), ...others.slice(0, 3)]
  const arr = [cur, ...pool]
  return arr.sort((a, b) => a.id.localeCompare(b.id))
}

export default function FallacyLab() {
  const [idx, setIdx] = useState(0)
  const [step, setStep] = useState(0)
  const [famPick, setFamPick] = useState<string | null>(null)
  const [namePick, setNamePick] = useState<string | null>(null)
  const [score, setScore] = useState({ right: 0, total: 0 })

  const cur = FALLACIES[idx % FALLACIES.length]
  const options = useMemo(() => pickOptions(FALLACIES, cur), [cur])

  const reset = (next: number) => {
    setIdx(next)
    setStep(0); setFamPick(null); setNamePick(null)
  }

  const submitFamily = (f: string) => {
    setFamPick(f)
    setScore(s => ({ ...s, total: s.total + 1, right: s.right + (f === cur.family ? 1 : 0) }))
    setStep(1)
  }

  const submitName = (id: string) => {
    setNamePick(id)
    setStep(2)
  }

  return (
    <div>
      <div className="row between" style={{ marginBottom: 12 }}>
        <span className="eyebrow" style={{ marginBottom: 0 }}>Fallacy Detection · {idx + 1}/{FALLACIES.length}</span>
        <span className="mono" style={{ color: 'var(--graphite-2)' }}>答对 {score.right}/{score.total}</span>
      </div>

      <div className="panel" style={{ background: 'var(--paper-3)' }}>
        <span className="note-h" style={{ color: 'var(--graphite)' }}>论述</span>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, lineHeight: 1.85, margin: 0 }}>{cur.example}</p>
      </div>

      {step === 0 && (
        <div className="fade-in" style={{ marginTop: 18 }}>
          <div className="q-stem" style={{ marginBottom: 10 }}>第一步：这段论述的毛病属于哪一大类？</div>
          {FAMILIES.map(f => (
            <button key={f} className="opt" onClick={() => submitFamily(f)}>
              <span className="k">·</span>
              <span>{f}</span>
            </button>
          ))}
        </div>
      )}

      {step >= 1 && (
        <div className="fade-in" style={{ marginTop: 18 }}>
          <div className={`verdict-band ${famPick === cur.family ? 'ok' : 'bad'}`}>
            <span className="t">{famPick === cur.family ? '分类正确' : `分类有误：正确答案是「${cur.family}」`}</span>
            {cur.family === '相干谬误' && '前提与结论之间没有真正的支持关系，理由「不搭」。'}
            {cur.family === '不当归纳谬误' && '推理方式是归纳，但样本、类比或因果判断不成立。'}
            {cur.family === '预设谬误' && '结论或假定被偷偷塞进了前提里。'}
            {cur.family === '含混谬误' && '词义或整体/部分关系在中途被偷换。'}
          </div>

          {step === 1 && (
            <>
              <div className="q-stem" style={{ margin: '18px 0 10px' }}>第二步：具体是哪一种谬误？</div>
              {options.map(o => (
                <button key={o.id} className="opt" onClick={() => submitName(o.id)}>
                  <span className="k">·</span>
                  <span>{o.name}</span>
                </button>
              ))}
            </>
          )}
        </div>
      )}

      {step >= 2 && (
        <div className="fade-in" style={{ marginTop: 18 }}>
          <div className={`verdict-band ${namePick === cur.id ? 'ok' : 'bad'}`}>
            <span className="t">{namePick === cur.id ? '识别正确' : `正确答案：${cur.name}（${cur.en}）`}</span>
            <InlineMD text={cur.definition} />
          </div>

          <div className="section-label"><span>结构还原</span><i /></div>
          <div className="formula-block" style={{ textAlign: 'left', fontSize: 13.5, fontFamily: 'var(--font-mono)', lineHeight: 1.9, overflowX: 'auto' }}>
            <InlineMD text={cur.pattern} />
          </div>

          <div className="section-label"><span>错在哪</span><i /></div>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: 'var(--graphite)' }}>{cur.flaw}</p>

          <div className="section-label"><span>如何识别</span><i /></div>
          <ol style={{ fontSize: 14, lineHeight: 1.9, paddingLeft: 20, color: 'var(--graphite)' }}>
            {cur.spot.map((s, i) => <li key={i}>{s}</li>)}
          </ol>

          <div className="section-label"><span>如何反驳</span><i /></div>
          <ul style={{ fontSize: 14, lineHeight: 1.9, paddingLeft: 18, color: 'var(--ink)' }}>
            {cur.rebut.map((s, i) => <li key={i}>{s}</li>)}
          </ul>

          <div className="row" style={{ marginTop: 18, gap: 8 }}>
            <button className="btn sm" onClick={() => reset(idx + 1)}>下一题</button>
            <button className="btn ghost sm" onClick={() => reset(Math.floor(Math.random() * FALLACIES.length))}>随机一题</button>
          </div>
        </div>
      )}
    </div>
  )
}
