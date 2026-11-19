/**
 * 九条教学标准覆盖审计
 * 对每课检查：定义 / 背景 / 形式结构 / 示例 / 正误对比 / 常见误区 / 练习 / 解析 / 可视化
 * 用法：npx tsx scripts/standards.ts [--detail]
 */
import { ALL_LESSONS, STAGES } from '../src/data/curriculum'

const detail = process.argv.includes('--detail')

type Check = {
  key: string
  label: string
  test: (l: (typeof ALL_LESSONS)[number]) => boolean
}

const has = (s: string, re: RegExp) => re.test(s)

const CHECKS: Check[] = [
  {
    key: 'def', label: '定义',
    test: l => has(l.body, /定义|什么叫|指的是|称为|意思是/) || l.concepts.length > 0,
  },
  {
    key: 'bg', label: '背景/意义',
    test: l => has(l.body, /背景|由来|历史上|为什么要有|提出|起源|意义在于|为了解决/),
  },
  {
    key: 'form', label: '形式结构',
    test: l => has(l.body, /\$|形式|结构|模式|公式/),
  },
  {
    key: 'eg', label: '示例≥2',
    test: l => {
      const n = (l.body.match(/例\s*[1-9一二三]|示例|例如|比如/g) || []).length
      return n >= 2
    },
  },
  {
    key: 'modes', label: '正误对比',
    test: l => has(l.body, /:::versus|正确做法|错误做法|有效[^。]{0,12}无效/) || has(l.body, /✗|✓/),
  },
  {
    key: 'trap', label: '常见误区',
    test: l => has(l.body, /误区|容易混淆|常见错误|误解|坑|注意不要/),
  },
  {
    key: 'quiz', label: '练习≥5',
    test: l => l.quiz.length >= 5,
  },
  {
    key: 'expl', label: '每题解析',
    test: l => l.quiz.every(q => (q.explanation || '').length >= 40),
  },
  {
    key: 'vis', label: '可视化图块',
    test: l => has(l.body, /^:::(tree|flow|graph|versus)/m),
  },
]

type Row = { stage: number; id: string; no: number; title: string; miss: string[]; chars: number }

const rows: Row[] = ALL_LESSONS.map(l => ({
  stage: l.stage,
  id: l.id,
  no: l.no,
  title: l.title,
  chars: l.body.length,
  miss: CHECKS.filter(c => !c.test(l)).map(c => c.label),
}))

// 按阶段汇总
const byStage = new Map<number, Row[]>()
for (const r of rows) {
  const arr = byStage.get(r.stage) ?? []
  arr.push(r)
  byStage.set(r.stage, arr)
}

console.log('=== 九条教学标准覆盖审计 ===\n')
console.log('阶段'.padEnd(24) + CHECKS.map(c => c.label.padStart(7)).join('') + '   平均字数  待补课数')
for (const s of STAGES) {
  const list = byStage.get(s.id) ?? []
  if (!list.length) continue
  const cells = CHECKS.map(c => {
    const missN = list.filter(r => r.miss.includes(c.label)).length
    const rate = Math.round(((list.length - missN) / list.length) * 100)
    return String(rate + '%').padStart(7)
  }).join('')
  const avg = Math.round(list.reduce((a, r) => a + r.chars, 0) / list.length)
  const todo = list.filter(r => r.miss.length > 0).length
  console.log(`阶段${s.id} ${s.title}`.padEnd(24) + cells + `${String(avg).padStart(10)}${String(todo).padStart(10)}`)
}

const totalMiss = CHECKS.map(c => ({
  label: c.label,
  n: rows.filter(r => r.miss.includes(c.label)).length,
}))
console.log('\n=== 全课程缺口统计 ===')
for (const t of totalMiss) console.log(`  ${t.label.padEnd(8)} 缺失 ${String(t.n).padStart(2)} 课`)

if (detail) {
  console.log('\n=== 逐课明细（仅列有缺口的课）===')
  for (const r of rows) {
    if (!r.miss.length) continue
    console.log(`  ${r.id.padEnd(7)} ${String(r.no).padStart(2)}. ${r.title}  ← 缺：${r.miss.join('、')}`)
  }
}

const passAll = rows.filter(r => r.miss.length === 0).length
console.log(`\n九项全达标：${passAll}/${rows.length} 课`)
