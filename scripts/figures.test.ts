/**
 * 图块语法解析单测
 * 运行：npx tsx scripts/figures.test.ts
 */
import { parseTree, parseFlow, parseGraph, parseVersus } from '../src/components/Figures'

let pass = 0
let fail = 0

function eq(name: string, got: unknown, want: unknown) {
  const g = JSON.stringify(got)
  const w = JSON.stringify(want)
  if (g === w) { pass++; console.log('  ✓', name) }
  else { fail++; console.log('  ✗', name, '\n    got :', g, '\n    want:', w) }
}

console.log('论证树 parseTree')
{
  const t = parseTree([
    '@ 结论：该方案应当暂缓',
    '- 预算尚未审批',
    '-- 预算文件还在走流程',
    '- 依赖方尚未确认',
  ])
  eq('根节点', t.root, '结论：该方案应当暂缓')
  eq('分支数', t.branches.length, 2)
  eq('第一个分支有子节点', t.branches[0].children.length, 1)
  eq('子节点文本', t.branches[0].children[0].text, '预算文件还在走流程')
  eq('第二个分支无子节点', t.branches[1].children.length, 0)
}

console.log('流程图 parseFlow')
{
  eq('单行箭头切分', parseFlow(['提取结论 => 收集前提 => 检查连接']), ['提取结论', '收集前提', '检查连接'])
  eq('多行逐步', parseFlow(['第一步', '第二步']), ['第一步', '第二步'])
  eq('支持 Unicode 箭头', parseFlow(['A → B']), ['A', 'B'])
}

console.log('概念图 parseGraph')
{
  const g = parseGraph(['论证 -> 包含 -> 前提', '前提 -> 支持 -> 结论'])
  eq('边数', g.length, 2)
  eq('首条边', g[0], { from: '论证', rel: '包含', to: '前提' })
  eq('省略关系', parseGraph(['A -> B'])[0], { from: 'A', rel: '', to: 'B' })
}

console.log('双栏对比 parseVersus')
{
  const v = parseVersus([
    '提要求｜「请提供近三年数据」｜可核查',
    '关上门｜「你能保证绝对安全吗」｜不可核查',
  ])
  eq('行数', v.length, 2)
  eq('第一行判为 good', v[0].side, 'good')
  eq('第二行判为 bad', v[1].side, 'bad')
  eq('标题', v[0].title, '提要求')
  eq('说明', v[0].note, '可核查')
}

console.log('双栏对比：显式标记')
{
  const v = parseVersus([
    '+ 肯定前件｜p → q，p ∴ q｜有效',
    '+ 否定后件｜p → q，¬q ∴ ¬p｜有效',
    '- 肯定后件｜p → q，q ∴ p｜无效',
    '- 否定前件｜p → q，¬p ∴ ¬q｜无效',
  ])
  eq('四行全保留', v.length, 4)
  eq('标记顺序', v.map(r => r.side), ['good', 'good', 'bad', 'bad'])
  eq('标记已剥离', v[0].title, '肯定前件')
  eq('第三行标题', v[2].title, '肯定后件')
}

console.log(`\n${pass} 通过 / ${fail} 失败`)
if (fail) process.exit(1)
