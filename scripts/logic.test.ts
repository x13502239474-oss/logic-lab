import { parse, truthTable, classify, entails, toPlain, equivalent, evalNode } from '../src/lib/logic/prop.ts'
import { analyzeSyllogism, parseCategorical } from '../src/lib/logic/syllogism.ts'
import { checkStep } from '../src/lib/logic/nd.ts'

let pass = 0, fail = 0
function ok(name: string, cond: boolean, extra = '') {
  if (cond) { pass++ } else { fail++; console.log('FAIL:', name, extra) }
}

// 命题逻辑
ok('tautology p∨¬p', classify(parse('P ∨ ¬P')) === 'tautology')
ok('contradiction p∧¬p', classify(parse('P ∧ ¬P')) === 'contradiction')
ok('contingent p→q', classify(parse('P → Q')) === 'contingent')
ok('DeM equiv', equivalent(parse('¬(P ∧ Q)'), parse('¬P ∨ ¬Q')))
ok('DeM equiv2', equivalent(parse('¬(P ∨ Q)'), parse('¬P ∧ ¬Q')))
ok('impl equiv', equivalent(parse('P → Q'), parse('¬P ∨ Q')))
ok('contra equiv', equivalent(parse('P → Q'), parse('¬Q → ¬P')))
ok('dist equiv', equivalent(parse('P ∧ (Q ∨ R)'), parse('(P ∧ Q) ∨ (P ∧ R)')))
ok('not equiv', !equivalent(parse('P → Q'), parse('Q → P')))
ok('table rows', truthTable(parse('P ∧ Q')).rows.length === 4)
ok('table rows3', truthTable(parse('P ∨ (Q ∧ R)')).rows.length === 8)
ok('entail MP', entails([parse('P → Q'), parse('P')], parse('Q')))
ok('not entail converse', !entails([parse('P → Q'), parse('Q')], parse('P')))
ok('entail DS', entails([parse('P ∨ Q'), parse('¬P')], parse('Q')))
ok('entail HS', entails([parse('P → Q'), parse('Q → R')], parse('P → R')))
ok('entail CD', entails([parse('(P → Q) ∧ (R → S)'), parse('P ∨ R')], parse('Q ∨ S')))
ok('right assoc imp', toPlain(parse('P → Q → R')) === 'P → Q → R')
ok('paren', toPlain(parse('(P → Q) → R')) === '(P → Q) → R')
ok('prec', toPlain(parse('¬P ∧ Q')) === '¬P ∧ Q')
ok('prec2', toPlain(parse('¬(P ∧ Q)')) === '¬(P ∧ Q)')

// 三段论
const s1 = analyzeSyllogism('所有 人 都是 会死的', '所有 希腊人 都是 人', '所有 希腊人 都是 会死的')
ok('Barbara', s1.ok && s1.mood === 'AAA' && s1.figure === 1 && s1.valid, JSON.stringify({ m: s1.mood, f: s1.figure, v: s1.valid, e: s1.error }))
const s2 = analyzeSyllogism('所有 哺乳动物 都是 动物', '所有 狗 都是 动物', '所有 狗 都是 哺乳动物')
ok('undistributed middle', s2.ok && !s2.valid, JSON.stringify({ v: s2.valid, r: s2.reasons }))
const s3 = analyzeSyllogism('所有 诗人 都是 敏感的人', '有的 诗人 是 穷人', '有的 穷人 是 敏感的人')
ok('AII-3 Datisi', s3.ok && s3.mood === 'AII' && s3.figure === 3 && s3.valid, JSON.stringify({ m: s3.mood, f: s3.figure }))
const s4 = analyzeSyllogism('没有 鱼 是 哺乳动物', '所有 鲸 都是 哺乳动物', '没有 鲸 是 鱼')
ok('EAE-2', s4.ok && s4.mood === 'EAE' && s4.figure === 2 && s4.valid, JSON.stringify({ m: s4.mood, f: s4.figure, e: s4.error }))
const s5 = analyzeSyllogism('所有 猫 都是 哺乳动物', '有的 动物 是 猫', '有的 动物 是 哺乳动物')
ok('IAI-4?', s5.ok, JSON.stringify({ m: s5.mood, f: s5.figure, v: s5.valid }))
ok('parse E', parseCategorical('所有学生都不是懒人')?.type === 'E')
ok('parse O', parseCategorical('有的鸟不会飞')?.type === 'O')
ok('parse I', parseCategorical('有些花是红的')?.type === 'I')
ok('parse A', parseCategorical('所有金属都导电')?.type === 'A')

// 自然演绎
const mp = checkStep('MP', [parse('P → Q'), parse('P')], parse('Q'))
ok('nd MP', mp.ok, mp.msg)
const mt = checkStep('MT', [parse('P → Q'), parse('¬Q')], parse('¬P'))
ok('nd MT', mt.ok, mt.msg)
const ds = checkStep('DS', [parse('P ∨ Q'), parse('¬P')], parse('Q'))
ok('nd DS', ds.ok, ds.msg)
const dm = checkStep('DeM', [parse('¬(P ∧ Q)')], parse('¬P ∨ ¬Q'))
ok('nd DeM', dm.ok, dm.msg)
const dn = checkStep('DN', [parse('P')], parse('¬¬P'))
ok('nd DN', dn.ok, dn.msg)
const bad = checkStep('MP', [parse('P → Q'), parse('Q')], parse('P'))
ok('nd MP invalid rejected', !bad.ok)
const cd = checkStep('CD', [parse('(P → Q) ∧ (R → S)'), parse('P ∨ R')], parse('Q ∨ S'))
ok('nd CD', cd.ok, cd.msg)
const cp = checkStep('CP', [parse('P'), parse('Q')], parse('P → Q'))
ok('nd CP', cp.ok, cp.msg)
const ip = checkStep('IP', [parse('¬P'), parse('Q ∧ ¬Q')], parse('P'))
ok('nd IP', ip.ok, ip.msg)

console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
