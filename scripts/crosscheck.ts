import { CASES } from '../src/data/cases'
import { FALLACIES } from '../src/data/fallacies'
import { lessonById, ALL_LESSONS } from '../src/data/curriculum'
import { KG_NODES } from '../src/data/graph'

const ids = new Set(ALL_LESSONS.map(l => l.id))
let bad = 0
for (const c of CASES) {
  if (c.lessonRef && !ids.has(c.lessonRef)) { console.log('case ref 无效', c.id, c.lessonRef); bad++ }
  if (!c.error || !c.rewrite) { console.log('case 字段缺失', c.id); bad++ }
}
for (const f of FALLACIES) {
  if (!ids.has(f.lessonId)) { console.log('fallacy ref 无效', f.id, f.lessonId); bad++ }
  if (!f.spot?.length || !f.rebut?.length) { console.log('fallacy 字段缺失', f.id); bad++ }
}
for (const n of KG_NODES) {
  if (!ids.has(n.lessonId)) { console.log('kg ref 无效', n.id, n.lessonId); bad++ }
  for (const d of n.drills) if (!ids.has(d)) { console.log('kg drill 无效', n.id, d); bad++ }
}
console.log('domains:', [...new Set(CASES.map(c => c.domain))].join(' | '))
console.log('families:', [...new Set(FALLACIES.map(f => f.family))].join(' | '))
console.log(bad ? `问题 ${bad} 处` : '交叉引用全部有效')
