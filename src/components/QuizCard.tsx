import { useState } from 'react'
import { Quiz } from '../data/types'
import { grade, QTYPE_LABEL, Response } from '../lib/grade'
import { store } from '../store/db'
import { Markdown, InlineMD } from './Markdown'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

export function QuizCard({
  q, index, lessonId, defaultReveal = false, onAnswered,
}: {
  q: Quiz
  index: number
  lessonId: string
  defaultReveal?: boolean
  onAnswered?: (correct: boolean) => void
}) {
  const [resp, setResp] = useState<Response>(undefined)
  const [submitted, setSubmitted] = useState(false)
  const [res, setRes] = useState<{ correct: boolean; detail: string; hit?: string[]; miss?: string[] } | null>(null)

  const opts = q.options ?? []
  const correctOrig = Array.isArray(q.answer) ? q.answer : q.type === 'single' ? [String(q.answer)] : []

  const submit = () => {
    const payload: Response = resp
    const r = grade(q, payload)
    setRes(r)
    setSubmitted(true)
    store.recordAnswer(lessonId, q.id, r.correct, Array.isArray(payload) ? payload.join(',') : String(payload ?? ''))
    onAnswered?.(r.correct)
  }

  const retry = () => { setResp(undefined); setSubmitted(false); setRes(null) }
  const revealed = submitted || defaultReveal

  const answerLine = () => {
    if (q.type === 'judge') return q.answer ? '正确' : '错误'
    if (q.type === 'short') return String(q.answer ?? '（见解析）')
    const texts = correctOrig
      .map(L => opts[L.charCodeAt(0) - 65])
      .filter(Boolean)
    return texts.length ? `${correctOrig.join('、')}　${texts.join('；')}` : correctOrig.join('、')
  }

  return (
    <div className="q-item">
      <div className="q-head">
        <div className="q-num">{String(index + 1).padStart(2, '0')}</div>
        <div style={{ flex: 1 }}>
          <div className="q-stem"><InlineMD text={q.stem} /></div>
          <div className="mono" style={{ color: 'var(--graphite-2)', fontSize: 10.5, marginTop: 6, letterSpacing: '.1em' }}>
            {QTYPE_LABEL[q.type]}{q.skill ? ` · ${q.skill}` : ''}
          </div>
        </div>
      </div>

      {(q.type === 'single' || q.type === 'multi') && (
        <div>
          {opts.map((optText, orig) => {
            const L = LETTERS[orig]
            const picked = q.type === 'single' ? resp === L : Array.isArray(resp) && resp.includes(L)
            const isRight = correctOrig.includes(L)
            const cls = revealed
              ? isRight ? 'opt right' : picked ? 'opt wrong' : 'opt'
              : picked ? 'opt picked' : 'opt'
            return (
              <button
                key={L}
                className={cls}
                onClick={() => {
                  if (revealed) return
                  if (q.type === 'single') setResp(L)
                  else {
                    const arr = Array.isArray(resp) ? resp : []
                    setResp(picked ? arr.filter(x => x !== L) : [...arr, L])
                  }
                }}
              >
                <span className="k">{L}</span>
                <span><InlineMD text={optText} /></span>
              </button>
            )
          })}
        </div>
      )}

      {q.type === 'judge' && (
        <div style={{ display: 'flex', gap: 8 }}>
          {[true, false].map(v => {
            const picked = resp === v
            const isRight = Boolean(q.answer) === v
            const cls = revealed ? (isRight ? 'opt right' : picked ? 'opt wrong' : 'opt') : picked ? 'opt picked' : 'opt'
            return (
              <button key={String(v)} className={cls} style={{ flex: 1, justifyContent: 'center' }} onClick={() => !revealed && setResp(v)}>
                <span style={{ textAlign: 'center', width: '100%' }}>{v ? '正确' : '错误'}</span>
              </button>
            )
          })}
        </div>
      )}

      {q.type === 'short' && (
        <textarea
          className="input"
          placeholder="用自己的话写下答案，尽量包含关键要点……"
          value={typeof resp === 'string' ? resp : ''}
          onChange={e => setResp(e.target.value)}
          disabled={revealed}
          rows={4}
        />
      )}

      {!revealed && (
        <button
          className="btn sm"
          style={{ marginTop: 10 }}
          onClick={submit}
          disabled={resp === undefined || (Array.isArray(resp) && resp.length === 0) || resp === ''}
        >
          提交作答
        </button>
      )}

      {revealed && (
        <div className="answer-box">
          {res ? (
            <span className={`verdict ${res.correct ? 'ok' : 'bad'}`}>
              {res.correct ? '✓ 正确' : '✗ 未通过'} · {res.detail}
            </span>
          ) : <span className="verdict">参考答案</span>}
          <div style={{ marginBottom: 8 }}><b>答案：</b>{answerLine()}</div>
          {res?.miss?.length ? (
            <div style={{ marginBottom: 8, color: 'var(--bad)' }}><b>未覆盖的要点：</b>{res.miss.join('、')}</div>
          ) : null}
          <div style={{ borderTop: '1px dashed var(--rule)', paddingTop: 9, marginTop: 9 }}>
            <b>解析：</b><Markdown text={q.explanation} />
          </div>
          {submitted && <button className="btn ghost sm" style={{ marginTop: 12 }} onClick={retry}>再做一次</button>}
        </div>
      )}
    </div>
  )
}
