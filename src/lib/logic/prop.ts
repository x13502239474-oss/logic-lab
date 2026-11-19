/**
 * 命题逻辑表达式解析器
 * 支持：否定 ¬ ~ !、合取 ∧ & ·、析取 ∨ |、条件 → -> ⊃、双条件 ↔ <-> ≡
 * 优先级：¬ > ∧ > ∨ > → (右结合) > ↔
 */

export type Node =
  | { t: 'var'; n: string }
  | { t: 'not'; a: Node }
  | { t: 'and' | 'or' | 'imp' | 'iff'; a: Node; b: Node }

const VAR_RE = /^[A-Za-z][A-Za-z0-9_]*$/

/** 常见中英文连接词的替换，便于用户直接输入中文 */
const CN_MAP: [RegExp, string][] = [
  [/并且|而且|但是|同时|且/g, '∧'],
  [/或者|要么/g, '∨'],
  [/如果|那么|则/g, ''], // 仅做保守处理，不作为主要输入方式
]

export function tokenize(input: string): string[] {
  const s = input
    .replace(/[（]/g, '(')
    .replace(/[）]/g, ')')
    .replace(/<->|<=>|↔|⇔|≡/g, '↔')
    .replace(/->|=>|→|⇒|⊃|⊃/g, '→')
    .replace(/[¬~!]/g, '¬')
    .replace(/[∧&·•^]/g, '∧')
    .replace(/[∨|+]/g, '∨')
  const out: string[] = []
  let i = 0
  while (i < s.length) {
    const c = s[i]
    if (/\s/.test(c)) { i++; continue }
    if ('()¬∧∨→↔'.includes(c)) { out.push(c); i++; continue }
    if (/[A-Za-z]/.test(c)) {
      let j = i
      while (j < s.length && /[A-Za-z0-9_]/.test(s[j])) j++
      out.push(s.slice(i, j))
      i = j
      continue
    }
    throw new ParseError(`无法识别的字符：「${c}」`)
  }
  return out
}

export class ParseError extends Error {}

/** 递归下降解析，返回 AST */
export function parse(input: string): Node {
  const toks = tokenize(input)
  if (!toks.length) throw new ParseError('表达式为空')
  let p = 0
  const peek = () => toks[p]
  const eat = (x?: string) => {
    const t = toks[p]
    if (x && t !== x) throw new ParseError(`期望「${x}」，实际读到「${t ?? '结尾'}」`)
    p++
    return t
  }

  function parseIff(): Node {
    let left = parseImp()
    while (peek() === '↔') { eat(); left = { t: 'iff', a: left, b: parseImp() } }
    return left
  }
  function parseImp(): Node {
    const left = parseOr()
    if (peek() === '→') { eat(); return { t: 'imp', a: left, b: parseImp() } }
    return left
  }
  function parseOr(): Node {
    let left = parseAnd()
    while (peek() === '∨') { eat(); left = { t: 'or', a: left, b: parseAnd() } }
    return left
  }
  function parseAnd(): Node {
    let left = parseUnary()
    while (peek() === '∧') { eat(); left = { t: 'and', a: left, b: parseUnary() } }
    return left
  }
  function parseUnary(): Node {
    if (peek() === '¬') { eat(); return { t: 'not', a: parseUnary() } }
    return parseAtom()
  }
  function parseAtom(): Node {
    const t = peek()
    if (t === undefined) throw new ParseError('表达式意外结束')
    if (t === '(') {
      eat('(')
      const n = parseIff()
      eat(')')
      return n
    }
    if (VAR_RE.test(t) && !'∧∨¬→↔'.includes(t)) { eat(); return { t: 'var', n: t } }
    throw new ParseError(`此处不应出现「${t}」`)
  }

  const ast = parseIff()
  if (p < toks.length) throw new ParseError(`多余的符号：「${toks[p]}」`)
  return ast
}

/** 收集所有命题变项 */
export function vars(n: Node, acc: Set<string> = new Set()): Set<string> {
  if (n.t === 'var') acc.add(n.n)
  else if (n.t === 'not') vars(n.a, acc)
  else { vars(n.a, acc); vars(n.b, acc) }
  return acc
}

export function evalNode(n: Node, env: Record<string, boolean>): boolean {
  switch (n.t) {
    case 'var': return !!env[n.n]
    case 'not': return !evalNode(n.a, env)
    case 'and': return evalNode(n.a, env) && evalNode(n.b, env)
    case 'or': return evalNode(n.a, env) || evalNode(n.b, env)
    case 'imp': return !evalNode(n.a, env) || evalNode(n.b, env)
    case 'iff': return evalNode(n.a, env) === evalNode(n.b, env)
  }
}

/** 转 LaTeX（用于 KaTeX 渲染） */
export function toTex(n: Node, top = true): string {
  switch (n.t) {
    case 'var': return n.n
    case 'not': return `\\lnot ${wrap(n.a, 4)}`
    case 'and': return `${wrap(n.a, 3)} \\land ${wrap(n.b, 3)}`
    case 'or': return `${wrap(n.a, 2)} \\lor ${wrap(n.b, 2)}`
    case 'imp': return `${wrap(n.a, 2)} \\to ${wrap(n.b, 1)}`
    case 'iff': return `${wrap(n.a, 0)} \\leftrightarrow ${wrap(n.b, 0)}`
  }
  function wrap(c: Node, need: number) {
    const prec = precOf(c)
    const s = toTex(c, false)
    return prec < need ? `(${s})` : s
  }
}
function precOf(n: Node): number {
  switch (n.t) {
    case 'var': return 9
    case 'not': return 4
    case 'and': return 3
    case 'or': return 2
    case 'imp': return 1
    case 'iff': return 0
  }
}

/** 转纯文本（带括号，用于列表展示） */
export function toPlain(n: Node): string {
  switch (n.t) {
    case 'var': return n.n
    case 'not': return `¬${n.a.t === 'var' ? n.a.n : `(${toPlain(n.a)})`}`
    case 'and': return `${wrap(n.a, 3)} ∧ ${wrap(n.b, 3)}`
    case 'or': return `${wrap(n.a, 2)} ∨ ${wrap(n.b, 2)}`
    case 'imp': return `${wrap(n.a, 2)} → ${wrap(n.b, 1)}`
    case 'iff': return `${wrap(n.a, 0)} ↔ ${wrap(n.b, 0)}`
  }
  function wrap(c: Node, need: number) {
    const s = toPlain(c)
    return precOf(c) < need ? `(${s})` : s
  }
}

/** 结构相等 */
export function same(a: Node, b: Node): boolean {
  if (a.t !== b.t) return false
  if (a.t === 'var' && b.t === 'var') return a.n === b.n
  if (a.t === 'not' && b.t === 'not') return same(a.a, b.a)
  if ((a.t === 'and' || a.t === 'or' || a.t === 'imp' || a.t === 'iff') &&
      (b.t === 'and' || b.t === 'or' || b.t === 'imp' || b.t === 'iff')) {
    return same(a.a, b.a) && same(a.b, b.b)
  }
  return false
}

export interface TruthRow { env: Record<string, boolean>; value: boolean }

export function truthTable(n: Node): { vars: string[]; rows: TruthRow[] } {
  const vs = Array.from(vars(n)).sort()
  const rows: TruthRow[] = []
  const total = 1 << vs.length
  for (let i = 0; i < total; i++) {
    const env: Record<string, boolean> = {}
    vs.forEach((v, k) => { env[v] = Boolean((i >> (vs.length - 1 - k)) & 1) })
    rows.push({ env, value: evalNode(n, env) })
  }
  return { vars: vs, rows }
}

export type Classify = 'tautology' | 'contradiction' | 'contingent'

export function classify(n: Node): Classify {
  const { rows } = truthTable(n)
  const t = rows.every(r => r.value)
  const f = rows.every(r => !r.value)
  return t ? 'tautology' : f ? 'contradiction' : 'contingent'
}

/** 两式是否逻辑等值 */
export function equivalent(a: Node, b: Node): boolean {
  const vs = Array.from(new Set([...vars(a), ...vars(b)])).sort()
  const total = 1 << vs.length
  for (let i = 0; i < total; i++) {
    const env: Record<string, boolean> = {}
    vs.forEach((v, k) => { env[v] = Boolean((i >> (vs.length - 1 - k)) & 1) })
    if (evalNode(a, env) !== evalNode(b, env)) return false
  }
  return true
}

/** 前提是否蕴涵结论（有效性检验） */
export function entails(premises: Node[], conclusion: Node): boolean {
  const vs = Array.from(new Set([...premises.flatMap(p => [...vars(p)]), ...vars(conclusion)])).sort()
  const total = 1 << vs.length
  for (let i = 0; i < total; i++) {
    const env: Record<string, boolean> = {}
    vs.forEach((v, k) => { env[v] = Boolean((i >> (vs.length - 1 - k)) & 1) })
    if (premises.every(p => evalNode(p, env)) && !evalNode(conclusion, env)) return false
  }
  return true
}

/** 生成计算步骤（自底向上的子公式序列，用于真值表逐步展示） */
export function subformulas(n: Node, seen: Node[] = []): Node[] {
  if (n.t === 'var') return push(n)
  if (n.t === 'not') { subformulas(n.a, seen); return push(n) }
  subformulas(n.a, seen)
  subformulas(n.b, seen)
  return push(n)
  function push(x: Node) {
    if (!seen.some(y => same(x, y))) seen.push(x)
    return seen
  }
}

export type ImpNode = { t: 'imp'; a: Node; b: Node }
export type OrNode = { t: 'or'; a: Node; b: Node }
export type AndNode = { t: 'and'; a: Node; b: Node }
export const isImp = (n: Node): n is ImpNode => n.t === 'imp'
export const isOr = (n: Node): n is OrNode => n.t === 'or'
export const isAnd = (n: Node): n is AndNode => n.t === 'and'
