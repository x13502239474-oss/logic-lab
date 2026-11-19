import { ALL_LESSONS } from '../src/data/curriculum'

const flags: string[] = []
const stats = { lessons: ALL_LESSONS.length, quiz: 0, short: 0, single: 0, multi: 0, judge: 0, chars: 0 }

const BAD_PHRASES = ['不是', '而是', '第 1 页', '页码', '原文如', '教材原文']
const ANS: Record<string, number> = {}

for (const l of ALL_LESSONS) {
  stats.chars += l.body.length
  if (/而是/.test(l.body.replace(/不是[^。]{0,10}而是/g, ''))) { /* noop */ }
  if (/不是[^。？！]{1,20}而是/.test(l.body)) flags.push(`${l.id} 使用「不是…而是」句式`)

  for (const q of l.quiz) {
    stats.quiz++
    if (q.type === 'single') { stats.single++; ANS[String(q.answer)] = (ANS[String(q.answer)] ?? 0) + 1 }
    if (q.type === 'multi') stats.multi++
    if (q.type === 'judge') stats.judge++
    if (q.type === 'short') stats.short++
  }

  // 简答题必须能从正文找到线索（关键词至少一个出现在正文里）
  for (const q of l.quiz) {
    if (q.type !== 'short' || !q.keywords) continue
    const hit = q.keywords.some(g => g.some(k => l.body.includes(k)))
    if (!hit) flags.push(`${q.id} 简答要点与正文无交集`)
  }
}

console.log('课程', stats.lessons, '题目', stats.quiz, '（单', stats.single, '多', stats.multi, '判', stats.judge, '简', stats.short, '）')
console.log('正文总字数约', Math.round(stats.chars / 1000), '千字')
console.log('单选答案分布', ANS)
if (flags.length) { console.log('\n待修正：'); flags.forEach(f => console.log(' -', f)) }
else console.log('\n文风与一致性抽查通过')
