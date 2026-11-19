import { Quiz } from '../data/types'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

/** 以题目 id 为种子的确定性排列，返回「新顺序中每个位置对应的原选项下标」 */
export function seededOrder(seed: string, n: number): number[] {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619) }
  const arr = Array.from({ length: n }, (_, i) => i)
  for (let i = n - 1; i > 0; i--) {
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5
    const j = Math.abs(h) % (i + 1)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/**
 * 把选项顺序打散，消除「正确答案总是 B」的位置暗示。
 * 只有当解析里没有出现 A–F 字母时才重排，避免「A 项是……」这类指代失效。
 */
export function normalizeQuiz(q: Quiz): Quiz {
  if (!q.options || q.options.length < 2) return q
  if (q.type === 'judge' || q.type === 'short') return q
  if (/[A-F]/.test(q.explanation)) return q

  const n = q.options.length
  const order = seededOrder(q.id, n)
  const options = order.map(i => q.options![i])

  const remap = (letter: string) => {
    const orig = letter.charCodeAt(0) - 65
    const pos = order.indexOf(orig)
    return pos >= 0 ? LETTERS[pos] : letter
  }

  let answer = q.answer
  if (typeof q.answer === 'string') answer = remap(q.answer)
  else if (Array.isArray(q.answer)) answer = q.answer.map(remap).sort()

  return { ...q, options, answer }
}
