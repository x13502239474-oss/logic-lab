import { ALL_LESSONS, STAGES, TOTAL_QUIZ } from '../src/data/curriculum'
import { CASES } from '../src/data/cases'
import { FALLACIES } from '../src/data/fallacies'

const REQ = ['核心定义', '理论讲解', '例题与分析', '反例训练', '现实应用', '本节总结']
const problems: string[] = []
const ids = new Set<string>()
const qids = new Set<string>()

for (const l of ALL_LESSONS) {
  if (ids.has(l.id)) problems.push(`重复课程 id: ${l.id}`)
  ids.add(l.id)

  const heads = (l.body.match(/^## (.+)$/gm) ?? []).map(s => s.replace(/^## /, '').trim())
  for (const r of REQ) {
    if (!heads.some(h => h.includes(r))) problems.push(`${l.id} 缺少小节：${r}`)
  }
  if (heads.length !== 6 && heads.length !== 7) problems.push(`${l.id} 小节数为 ${heads.length}（应为 6 或 7）：${heads.join(' / ')}`)
  // 允许两种标准序列：六节基本式，或加「背景与意义」的七节式（必须置于首位）
  const seq = heads.map(h => (h === '背景与意义' ? '背景与意义' : REQ.find(r => h.includes(r)) ?? h)).join('|')
  const okSeq = seq === REQ.join('|') || seq === ['背景与意义', ...REQ].join('|')
  if (!okSeq) problems.push(`${l.id} 小节顺序不符：${heads.join(' / ')}`)
  if (l.body.includes('\t')) problems.push(`${l.id} 正文含制表符（LaTeX 反斜杠被吞）`)
  if ((l.body.split('$').length - 1) % 2 !== 0) problems.push(`${l.id} 正文 $ 数量为奇数`)
  if (!l.lead || l.lead.length < 20) problems.push(`${l.id} 导入过短`)
  if (l.objectives.length !== 3) problems.push(`${l.id} 目标数为 ${l.objectives.length}`)
  if (l.concepts.length < 3) problems.push(`${l.id} 概念数过少`)
  if (l.quiz.length !== 5) problems.push(`${l.id} 题目数为 ${l.quiz.length}`)

  for (const q of l.quiz) {
    if (qids.has(q.id)) problems.push(`重复题目 id: ${q.id}`)
    qids.add(q.id)
    if (!q.id.startsWith(l.id)) problems.push(`${q.id} 未以课程 id 为前缀`)
    if (!q.explanation || q.explanation.length < 20) problems.push(`${q.id} 解析过短`)
    if (q.type === 'single') {
      if (!q.options || q.options.length < 3) problems.push(`${q.id} 选项不足`)
      if (typeof q.answer !== 'string' || !/^[A-F]$/.test(q.answer)) problems.push(`${q.id} 单选答案非法`)
      else if (q.options && q.answer.charCodeAt(0) - 65 >= q.options.length) problems.push(`${q.id} 答案超出选项范围`)
    }
    if (q.type === 'multi') {
      if (!Array.isArray(q.answer) || !q.answer.length) problems.push(`${q.id} 多选答案非法`)
    }
    if (q.type === 'judge' && typeof q.answer !== 'boolean') problems.push(`${q.id} 判断答案非布尔`)
    if (q.type === 'short' && (!q.keywords || q.keywords.length < 2)) problems.push(`${q.id} 简答缺判分要点`)
  }
}

const stagesEmpty = STAGES.filter(s => s.lessons.length === 0).map(s => s.id)
if (stagesEmpty.length) problems.push(`空阶段：${stagesEmpty.join(',')}`)

console.log('课程数：', ALL_LESSONS.length)
STAGES.forEach(s => console.log(`  阶段${s.id} ${s.title}: ${s.lessons.length} 课`))
console.log('题目总数：', TOTAL_QUIZ)
console.log('案例数：', CASES.length, '领域：', new Set(CASES.map(c => c.domain)).size)
console.log('谬误数：', FALLACIES.length)

if (problems.length) {
  console.log('\n发现问题 ' + problems.length + ' 项：')
  problems.forEach(p => console.log(' -', p))
  process.exit(1)
} else {
  console.log('\n全部检查通过')
}
