import { Quiz } from '../data/types'

export type Response = string | string[] | boolean | undefined

const norm = (s: string) =>
  s.toLowerCase()
    .replace(/[\s，。、；：！？,.!?;:'"“”‘’（）()【】\[\]]/g, '')
    .replace(/[０-９ａ-ｚＡ-Ｚ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xfee0))

export interface GradeResult {
  correct: boolean
  detail: string
  hit?: string[]
  miss?: string[]
}

export function grade(q: Quiz, resp: Response): GradeResult {
  if (resp === undefined || resp === '' || (Array.isArray(resp) && resp.length === 0)) {
    return { correct: false, detail: '未作答' }
  }
  if (q.type === 'short') {
    const text = norm(String(resp))
    const groups = q.keywords ?? []
    if (!groups.length) return { correct: text.length >= 12, detail: '已记录你的作答，简答题以自评与要点对照为主。' }
    const hit: string[] = []
    const miss: string[] = []
    groups.forEach(g => {
      const ok = g.some(k => text.includes(norm(k)))
      if (ok) hit.push(g[0]); else miss.push(g[0])
    })
    const ratio = hit.length / groups.length
    return {
      correct: ratio >= 0.7,
      detail: `要点覆盖 ${hit.length} / ${groups.length}`,
      hit, miss,
    }
  }
  if (q.type === 'judge') {
    const ok = Boolean(resp) === Boolean(q.answer)
    return { correct: ok, detail: ok ? '判断正确' : '判断有误' }
  }
  if (q.type === 'multi') {
    const a = Array.isArray(q.answer) ? [...q.answer].sort().join('') : String(q.answer)
    const b = Array.isArray(resp) ? [...resp].sort().join('') : String(resp)
    return { correct: a === b, detail: a === b ? '选项完全正确' : '选项组合有误' }
  }
  const ok = String(resp).trim().toUpperCase() === String(q.answer).trim().toUpperCase()
  return { correct: ok, detail: ok ? '选择正确' : '选择有误' }
}

export function answerText(q: Quiz): string {
  if (q.type === 'judge') return q.answer ? '正确' : '错误'
  if (q.type === 'multi') return Array.isArray(q.answer) ? q.answer.join('、') : String(q.answer)
  if (q.type === 'short') return String(q.answer ?? '（见解析）')
  return String(q.answer ?? '')
}

export const QTYPE_LABEL: Record<Quiz['type'], string> = {
  single: '单选',
  multi: '多选',
  judge: '判断',
  short: '简答',
}
