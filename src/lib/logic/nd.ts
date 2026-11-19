/**
 * 自然演绎证明检验器（对应教材第 9 章：推论规则与替换规则）
 * 推论规则：MP / MT / DS / HS / Simp / Conj / Add / CD / DD
 * 替换规则：DeM / Comm / Assoc / Dist / DN / Contra / Impl / Equiv / Export / Taut
 * 证明结构：CP（条件证明）、IP（间接证明）
 */
import { Node, same, toPlain, isImp, isOr } from './prop'

export type RuleId =
  | 'MP' | 'MT' | 'DS' | 'HS' | 'Simp' | 'Conj' | 'Add' | 'CD' | 'DD'
  | 'DeM' | 'Comm' | 'Assoc' | 'Dist' | 'DN' | 'Contra' | 'Impl' | 'Equiv' | 'Export' | 'Taut'
  | 'CP' | 'IP'

export const RULE_INFO: Record<RuleId, { name: string; form: string; group: '推论' | '替换' | '证明' }> = {
  MP: { name: '肯定前件式', form: 'p → q ，p  ∴ q', group: '推论' },
  MT: { name: '否定后件式', form: 'p → q ，¬q  ∴ ¬p', group: '推论' },
  DS: { name: '选言三段论', form: 'p ∨ q ，¬p  ∴ q', group: '推论' },
  HS: { name: '假言三段论', form: 'p → q ，q → r  ∴ p → r', group: '推论' },
  Simp: { name: '简化律', form: 'p ∧ q  ∴ p（或 q）', group: '推论' },
  Conj: { name: '合取律', form: 'p ，q  ∴ p ∧ q', group: '推论' },
  Add: { name: '附加律', form: 'p  ∴ p ∨ q', group: '推论' },
  CD: { name: '构造性二难', form: '(p → q) ∧ (r → s) ，p ∨ r  ∴ q ∨ s', group: '推论' },
  DD: { name: '破坏性二难', form: 'p ∨ q ，p → r ，q → s  ∴ r ∨ s', group: '推论' },
  DeM: { name: '德摩根律', form: '¬(p ∧ q) :: ¬p ∨ ¬q ；¬(p ∨ q) :: ¬p ∧ ¬q', group: '替换' },
  Comm: { name: '交换律', form: 'p ∧ q :: q ∧ p ；p ∨ q :: q ∨ p', group: '替换' },
  Assoc: { name: '结合律', form: '(p ∧ q) ∧ r :: p ∧ (q ∧ r)', group: '替换' },
  Dist: { name: '分配律', form: 'p ∧ (q ∨ r) :: (p ∧ q) ∨ (p ∧ r)', group: '替换' },
  DN: { name: '双重否定', form: 'p :: ¬¬p', group: '替换' },
  Contra: { name: '假言易位', form: 'p → q :: ¬q → ¬p', group: '替换' },
  Impl: { name: '蕴涵定义', form: 'p → q :: ¬p ∨ q', group: '替换' },
  Equiv: { name: '等值定义', form: 'p ↔ q :: (p → q) ∧ (q → p)', group: '替换' },
  Export: { name: '输出律', form: '(p ∧ q) → r :: p → (q → r)', group: '替换' },
  Taut: { name: '重言律', form: 'p :: p ∨ p ；p :: p ∧ p', group: '替换' },
  CP: { name: '条件证明', form: '假定 p，推出 q，则得 p → q', group: '证明' },
  IP: { name: '间接证明', form: '假定 ¬p，推出矛盾，则得 p', group: '证明' },
}

const v = (n: string): Node => ({ t: 'var', n })
const neg = (a: Node): Node => ({ t: 'not', a })
const and = (a: Node, b: Node): Node => ({ t: 'and', a, b })
const or = (a: Node, b: Node): Node => ({ t: 'or', a, b })
const imp = (a: Node, b: Node): Node => ({ t: 'imp', a, b })
const iff = (a: Node, b: Node): Node => ({ t: 'iff', a, b })

/** 替换规则的模式对（左式 → 右式） */
function replacePairs(rule: RuleId): [Node, Node][] {
  const p = v('p'), q = v('q'), r = v('r')
  switch (rule) {
    case 'DeM': return [
      [neg(and(p, q)), or(neg(p), neg(q))],
      [neg(or(p, q)), and(neg(p), neg(q))],
    ]
    case 'Comm': return [
      [and(p, q), and(q, p)],
      [or(p, q), or(q, p)],
    ]
    case 'Assoc': return [
      [and(and(p, q), r), and(p, and(q, r))],
      [and(p, and(q, r)), and(and(p, q), r)],
      [or(or(p, q), r), or(p, or(q, r))],
      [or(p, or(q, r)), or(or(p, q), r)],
    ]
    case 'Dist': return [
      [and(p, or(q, r)), or(and(p, q), and(p, r))],
      [or(and(p, q), and(p, r)), and(p, or(q, r))],
      [or(p, and(q, r)), and(or(p, q), or(p, r))],
      [and(or(p, q), or(p, r)), or(p, and(q, r))],
    ]
    case 'DN': return [
      [p, neg(neg(p))],
      [neg(neg(p)), p],
    ]
    case 'Contra': return [
      [imp(p, q), imp(neg(q), neg(p))],
      [imp(neg(q), neg(p)), imp(p, q)],
    ]
    case 'Impl': return [
      [imp(p, q), or(neg(p), q)],
      [or(neg(p), q), imp(p, q)],
    ]
    case 'Equiv': return [
      [iff(p, q), and(imp(p, q), imp(q, p))],
      [and(imp(p, q), imp(q, p)), iff(p, q)],
      [iff(p, q), or(and(p, q), and(neg(p), neg(q)))],
      [or(and(p, q), and(neg(p), neg(q))), iff(p, q)],
    ]
    case 'Export': return [
      [imp(and(p, q), r), imp(p, imp(q, r))],
      [imp(p, imp(q, r)), imp(and(p, q), r)],
    ]
    case 'Taut': return [
      [p, or(p, p)],
      [or(p, p), p],
      [p, and(p, p)],
      [and(p, p), p],
    ]
    default: return []
  }
}

/** 模式匹配：模式中的命题变项可匹配任意子公式，但同一变项必须匹配同一公式 */
function unify(pat: Node, target: Node, sub: Map<string, Node>): boolean {
  if (pat.t === 'var') {
    const cur = sub.get(pat.n)
    if (!cur) { sub.set(pat.n, target); return true }
    return same(cur, target)
  }
  if (pat.t === 'not' && target.t === 'not') return unify(pat.a, target.a, sub)
  if ((pat.t === 'and' || pat.t === 'or' || pat.t === 'imp' || pat.t === 'iff') &&
      pat.t === target.t && (target.t === 'and' || target.t === 'or' || target.t === 'imp' || target.t === 'iff')) {
    return unify(pat.a, target.a, sub) && unify(pat.b, target.b, sub)
  }
  return false
}

function instantiate(pat: Node, sub: Map<string, Node>): Node {
  if (pat.t === 'var') return sub.get(pat.n) ?? pat
  if (pat.t === 'not') return neg(instantiate(pat.a, sub))
  const a = instantiate(pat.a, sub), b = instantiate(pat.b, sub)
  return { t: pat.t, a, b } as Node
}

/** 在 src 中把所有与 lhs 匹配（同一代入）的子公式替换为 rhs */
function tryReplaceAll(src: Node, lhs: Node, rhs: Node): Node | null {
  const sub = new Map<string, Node>()
  if (!unify(lhs, src, sub)) return null
  return instantiate(rhs, sub)
}

function replaceOne(formula: Node, lhs: Node, rhs: Node): Node[] {
  const out: Node[] = []
  const rec = (n: Node): Node[] => {
    const direct = tryReplaceAll(n, lhs, rhs)
    const res: Node[] = []
    if (direct) res.push(direct)
    if (n.t === 'not') {
      for (const c of rec(n.a)) res.push(neg(c))
    } else if (n.t === 'and' || n.t === 'or' || n.t === 'imp' || n.t === 'iff') {
      for (const c of rec(n.a)) res.push({ t: n.t, a: c, b: n.b } as Node)
      for (const c of rec(n.b)) res.push({ t: n.t, a: n.a, b: c } as Node)
    }
    return res
  }
  const all = rec(formula)
  out.push(...all)
  return out
}

export interface StepCheck { ok: boolean; msg: string }

export function checkStep(rule: RuleId, cited: Node[], target: Node): StepCheck {
  if (rule === 'CP') {
    if (cited.length !== 2) return { ok: false, msg: '条件证明需引用两行：假定行与推出行。' }
    const [assume, last] = cited
    if (target.t === 'imp' && same(target.a, assume) && same(target.b, last)) {
      return { ok: true, msg: '条件证明成立：由假定推出后件，可得条件命题。' }
    }
    return { ok: false, msg: '条件证明要求结论为「假定 → 最后一行」，且前件与假定行完全一致。' }
  }
  if (rule === 'IP') {
    if (cited.length !== 2) return { ok: false, msg: '间接证明需引用两行：假定行与矛盾行。' }
    const [assume, contra] = cited
    const complement = (a: Node, b: Node) =>
      (a.t === 'not' && same(a.a, b)) || (b.t === 'not' && same(b.a, a))
    if (!complement(assume, target)) return { ok: false, msg: '间接证明的结论必须是假定式的否定（假定 ¬p 得 p，或假定 p 得 ¬p）。' }
    if (isContradiction(contra)) return { ok: true, msg: '间接证明成立：由假定推出矛盾，故假定为假。' }
    return { ok: false, msg: '所引用的行不是矛盾式（形如 X ∧ ¬X）。' }
  }

  if (RULE_INFO[rule].group === '替换') {
    const pairs = replacePairs(rule)
    for (const src of cited) {
      for (const [lhs, rhs] of pairs) {
        for (const r of replaceOne(src, lhs, rhs)) if (same(r, target)) return { ok: true, msg: '替换正确：仅在引用的那一行内部做了等值替换。' }
        for (const r of replaceOne(src, rhs, lhs)) if (same(r, target)) return { ok: true, msg: '替换正确（反向使用等值式）。' }
      }
    }
    return { ok: false, msg: `无法用${RULE_INFO[rule].name}从所引用的行得到该式。替换规则只能整段替换匹配的子公式，命题变项要一致。` }
  }

  const c = cited
  switch (rule) {
    case 'MP':
      for (const a of c) for (const b of c) {
        if (a !== b && a.t === 'imp' && same(a.a, b) && same(a.b, target)) return { ok: true, msg: '肯定前件式成立。' }
      }
      return { ok: false, msg: '需要一行形如「p → q」，另一行正好是 p，结论为 q。' }
    case 'MT':
      for (const a of c) for (const b of c) {
        if (a !== b && a.t === 'imp' && b.t === 'not' && same(a.b, b.a) && target.t === 'not' && same(target.a, a.a)) return { ok: true, msg: '否定后件式成立。' }
      }
      return { ok: false, msg: '需要「p → q」与「¬q」，结论为「¬p」。' }
    case 'DS':
      for (const a of c) for (const b of c) {
        if (a !== b && a.t === 'or' && b.t === 'not') {
          if (same(b.a, a.a) && same(target, a.b)) return { ok: true, msg: '选言三段论成立。' }
          if (same(b.a, a.b) && same(target, a.a)) return { ok: true, msg: '选言三段论成立。' }
        }
      }
      return { ok: false, msg: '需要「p ∨ q」与其中一个支的否定，结论为另一个支。' }
    case 'HS':
      for (const a of c) for (const b of c) {
        if (a !== b && a.t === 'imp' && b.t === 'imp' && same(a.b, b.a) && target.t === 'imp' && same(target.a, a.a) && same(target.b, b.b)) {
          return { ok: true, msg: '假言三段论成立。' }
        }
      }
      return { ok: false, msg: '需要「p → q」与「q → r」，结论为「p → r」。' }
    case 'Simp':
      for (const a of c) {
        if (a.t === 'and' && (same(a.a, target) || same(a.b, target))) return { ok: true, msg: '简化律成立。' }
      }
      return { ok: false, msg: '只能从合取式取出其中一个合取支。' }
    case 'Conj':
      for (const a of c) for (const b of c) {
        if (a !== b && same(target, and(a, b))) return { ok: true, msg: '合取律成立。' }
      }
      return { ok: false, msg: '需要两条已得公式，结论为二者的合取。' }
    case 'Add':
      for (const a of c) {
        if (target.t === 'or' && (same(a, target.a) || same(a, target.b))) return { ok: true, msg: '附加律成立。' }
      }
      return { ok: false, msg: '附加律要求结论是「已得公式 ∨ 任意公式」。' }
    case 'CD': {
      const imps: { t: 'imp'; a: Node; b: Node }[] = []
      let disj: { t: 'or'; a: Node; b: Node } | null = null
      for (const a of c) {
        if (a.t === 'and') {
          if (isImp(a.a)) imps.push(a.a)
          if (isImp(a.b)) imps.push(a.b)
        } else if (isImp(a)) imps.push(a)
        else if (isOr(a)) disj = a
      }
      if (imps.length >= 2 && disj && target.t === 'or') {
        for (const i of imps) for (const j of imps) {
          if (i !== j && same(disj.a, i.a) && same(disj.b, j.a) && same(target.a, i.b) && same(target.b, j.b)) {
            return { ok: true, msg: '构造性二难成立。' }
          }
        }
      }
      return { ok: false, msg: '构造性二难需要两个条件命题与一个由两前件构成的析取，结论为由两后件构成的析取。' }
    }
    case 'DD': {
      let d: { t: 'or'; a: Node; b: Node } | null = null
      const imps: { t: 'imp'; a: Node; b: Node }[] = []
      for (const a of c) { if (isOr(a)) d = a; if (isImp(a)) imps.push(a) }
      if (d && imps.length >= 2 && target.t === 'or') {
        for (const i of imps) for (const j of imps) {
          if (i !== j && same(i.a, d.a) && same(j.a, d.b) && same(target.a, i.b) && same(target.b, j.b)) {
            return { ok: true, msg: '破坏性二难成立。' }
          }
        }
      }
      return { ok: false, msg: '破坏性二难需要一个析取与两个分别指向其两支的条件命题。' }
    }
  }
  return { ok: false, msg: '该规则暂不支持自动检验。' }
}

export function isContradiction(n: Node): boolean {
  if (n.t !== 'and') return false
  if (n.a.t === 'not' && same(n.a.a, n.b)) return true
  if (n.b.t === 'not' && same(n.b.a, n.a)) return true
  return false
}

export function explainRule(rule: RuleId): string {
  const r = RULE_INFO[rule]
  return `${r.name}（${rule}）：${r.form}`
}

export { toPlain }
