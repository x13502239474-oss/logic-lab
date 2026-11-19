/**
 * 直言命题与直言三段论分析引擎
 * 命题类型：A 全称肯定 / E 全称否定 / I 特称肯定 / O 特称否定
 * 有效性判据采用现代（布尔）解释：不含存在含义，故 15 个有效形式
 * （Darapti / Felapton / Bramantip / Fesapo 因不含存在含义而无效，另作标注）
 */

export type CType = 'A' | 'E' | 'I' | 'O'

export interface Categorical {
  type: CType
  subject: string
  predicate: string
  raw: string
}

export const QUANT_LABEL: Record<CType, string> = {
  A: '全称肯定（所有 S 都是 P）',
  E: '全称否定（所有 S 都不是 P）',
  I: '特称肯定（有的 S 是 P）',
  O: '特称否定（有的 S 不是 P）',
}

/** 从中文自然语言识别直言命题 */
export function parseCategorical(input: string): Categorical | null {
  let s = input.replace(/[，。,.;；\s]/g, '').replace(/[（）()「」“”"]/g, '')
  if (!s) return null

  // 特殊量词：没有 S 是 P / 无 S 是 P
  const noneM = s.match(/^(?:没有|无|没有一个)(.+?)(?:是|为|属于)(.+)$/)
  if (noneM) {
    const subject = cleanTerm(noneM[1])
    const predicate = cleanTerm(noneM[2])
    if (subject && predicate) return { type: 'E', subject, predicate, raw: input.trim() }
  }

  const quanM = s.match(/^(所有|一切|凡|每一个|任何一个|任何|有的|有些|部分|至少有一个|存在|某个)(.+)$/)
  let universal = true
  let body = s
  if (quanM) {
    body = quanM[2]
    universal = !/^(有的|有些|部分|至少有一个|存在|某个)$/.test(quanM[1])
  }
  body = body.replace(/^(都|均|全都)/, '').replace(/(都|均)$/, '')

  const neg = /不/.test(body)
  let subject = ''
  let predicate = ''

  const splitBy = (sep: RegExp) => {
    const m = body.match(sep)
    if (m) { subject = cleanTerm(m[1]); predicate = cleanTerm(m[2]); return true }
    return false
  }

  if (neg) {
    // 不是 / 不为 / 不属于 / 不会飞
    if (!splitBy(/^(.+?)不(?:是|为|属于)(.+)$/)) {
      if (!splitBy(/^(.+?)不(.+)$/)) return null
    }
  } else if (!splitBy(/^(.+?)(?:是|为|属于)(.+)$/)) {
    // 所有金属都导电 → 谓词为动词短语
    const m = body.match(/^(.+?)(?:都|均)(.+)$/)
    if (m) { subject = cleanTerm(m[1]); predicate = cleanTerm(m[2]) }
  }

  if (!subject || !predicate) return null
  const type: CType = universal ? (neg ? 'E' : 'A') : (neg ? 'O' : 'I')
  return { type, subject, predicate, raw: input.trim() }
}

function cleanTerm(t: string): string {
  return t
    .replace(/^(的|这个|那个|一种|一类|都|均)/, '')
    .replace(/[都均]$/, '')
    .replace(/(者|的东西|事物|的人)$/, '')
    .replace(/了$/, '')
    .trim()
}

/** 词项周延性：A 主项周延，E 主谓都周延，I 都不周延，O 谓项周延 */
export function distributed(type: CType): { subject: boolean; predicate: boolean } {
  return {
    subject: type === 'A' || type === 'E',
    predicate: type === 'E' || type === 'O',
  }
}

export type Figure = 1 | 2 | 3 | 4

export interface SyllogismAnalysis {
  ok: boolean
  error?: string
  major: Categorical
  minor: Categorical
  conclusion: Categorical
  middle: string
  majorTerm: string
  minorTerm: string
  mood: string
  figure: Figure
  valid: boolean
  formName?: string
  reasons: string[]
  conditions: string[]
  diagram: { label: string; formula: string }[]
}

export const FORM_NAMES: Record<string, string> = {
  'AAA-1': 'Barbara（巴巴拉）',
  'EAE-1': 'Celarent（塞拉伦特）',
  'AII-1': 'Darii（达里）',
  'EIO-1': 'Ferio（费里奥）',
  'EAE-2': 'Cesare（切萨雷）',
  'AEE-2': 'Camestres（卡梅斯特斯）',
  'EIO-2': 'Festino（费斯提诺）',
  'AOO-2': 'Baroco（巴罗科）',
  'IAI-3': 'Disamis（迪萨米斯）',
  'AII-3': 'Datisi（达提西）',
  'OAO-3': 'Bocardo（博卡多）',
  'EIO-3': 'Ferison（费里松）',
  'AEE-4': 'Camenes（卡梅内斯）',
  'IAI-4': 'Dimaris（迪马里斯）',
  'EIO-4': 'Fresison（费里松）',
}

/** 仅在传统（含存在含义）解释下有效的 weakened moods */
const CONDITIONAL_FORMS = new Set(['AAI-3', 'EAO-3', 'AAI-4', 'EAO-4', 'AAI-1', 'EAO-1', 'EAO-2'])

export function analyzeSyllogism(
  majorRaw: string,
  minorRaw: string,
  conclRaw: string,
): SyllogismAnalysis {
  const major = parseCategorical(majorRaw)
  const minor = parseCategorical(minorRaw)
  const conclusion = parseCategorical(conclRaw)
  if (!major || !minor || !conclusion) {
    const bad: Categorical = { type: 'A', subject: '?', predicate: '?', raw: '' }
    return {
      ok: false,
      error: '无法识别命题结构。请使用「所有 S 是 P」「所有 S 不是 P」「有的 S 是 P」「有的 S 不是 P」四种句式，或改用手动模式指定词项。',
      major: major ?? bad, minor: minor ?? bad, conclusion: conclusion ?? bad,
      middle: '', majorTerm: '', minorTerm: '', mood: '', figure: 1,
      valid: false, reasons: [], conditions: [], diagram: [],
    }
  }
  return analyzeCategorical(major, minor, conclusion)
}

export function analyzeCategorical(major: Categorical, minor: Categorical, conclusion: Categorical): SyllogismAnalysis {
  const cS = conclusion.subject
  const cP = conclusion.predicate

  // 中项：两个前提共有、结论中没有的词项
  const pre = [major.subject, major.predicate, minor.subject, minor.predicate]
  const shared = [...new Set(pre)].filter(t => pre.filter(x => x === t).length >= 2 && t !== cS && t !== cP)
  let middle = shared[0]
  if (!middle) {
    // 回退：用结论词项之外的交集
    const other = [...new Set(pre)].filter(t => t !== cS && t !== cP)
    middle = other[0] ?? ''
  }

  const inMajor = (major.subject === middle || major.predicate === middle)
  const inMinor = (minor.subject === middle || minor.predicate === middle)
  if (!middle || !inMajor || !inMinor) {
    return {
      ok: false,
      error: '没有找到唯一的中项：有效三段论必须恰好包含三个词项，且中项在两个前提中各出现一次、在结论中不出现。',
      major, minor, conclusion,
      middle: middle || '（未识别）', majorTerm: cP, minorTerm: cS,
      mood: '', figure: 1, valid: false, reasons: [], conditions: [], diagram: [],
    }
  }

  // 大项 P = 结论谓项（应在 Major 中），小项 S = 结论主项（应在 Minor 中）
  const majorTerm = cP
  const minorTerm = cS
  const reasons: string[] = []
  const conditions: string[] = []

  const majorHasP = major.subject === cP || major.predicate === cP
  const majorHasS = major.subject === cS || major.predicate === cS
  if (!majorHasP || majorHasS) {
    conditions.push('标准形式提示：大前提含大项（结论谓项），小前提含小项（结论主项），请检查是否把两条前提写反了。')
  }

  const figure = figureOf(major, minor, middle, majorTerm, minorTerm)
  const mood = major.type + minor.type + conclusion.type
  const key = `${mood}-${figure}`
  const valid = key in FORM_NAMES
  const formName = FORM_NAMES[key]

  // 规则诊断
  const midDis = (distributed(major.type).subject && major.subject === middle) ||
    (distributed(major.type).predicate && major.predicate === middle) ||
    (distributed(minor.type).subject && minor.subject === middle) ||
    (distributed(minor.type).predicate && minor.predicate === middle)
  if (!midDis) reasons.push('中项「' + middle + '」在两个前提中都不周延——中项一次也没有覆盖全部外延，无法把大项与小项必然联结起来（中项不周延谬误）。')

  const pDisInPremise = (distributed(major.type).subject && major.subject === cP) ||
    (distributed(major.type).predicate && major.predicate === cP) ||
    (distributed(minor.type).subject && minor.subject === cP) ||
    (distributed(minor.type).predicate && minor.predicate === cP)
  const pDisInConcl = distributed(conclusion.type).subject && conclusion.subject === cP ||
    distributed(conclusion.type).predicate && conclusion.predicate === cP
  if (pDisInConcl && !pDisInPremise) reasons.push('大项「' + cP + '」在前提中不周延，却在结论中周延——结论超出了前提所断定的范围（大项不当周延）。')

  const sDisInPremise = (distributed(major.type).subject && major.subject === cS) ||
    (distributed(major.type).predicate && major.predicate === cS) ||
    (distributed(minor.type).subject && minor.subject === cS) ||
    (distributed(minor.type).predicate && minor.predicate === cS)
  const sDisInConcl = distributed(conclusion.type).subject && conclusion.subject === cS ||
    distributed(conclusion.type).predicate && conclusion.predicate === cS
  if (sDisInConcl && !sDisInPremise) reasons.push('小项「' + cS + '」在前提中不周延，却在结论中周延（小项不当周延）。')

  const negPremises = (major.type === 'E' || major.type === 'O') && (minor.type === 'E' || minor.type === 'O')
  if (negPremises) reasons.push('两个前提都是否定命题——否定只表示词项分离，两前提都只说「不相干」，无法推出任何确定联系（否定前提谬误）。')

  const oneNeg = (major.type === 'E' || major.type === 'O') !== (minor.type === 'E' || minor.type === 'O')
  const negConcl = conclusion.type === 'E' || conclusion.type === 'O'
  if (oneNeg && !negConcl) reasons.push('前提之一为否定，结论却是肯定——结论的质与前提不符（否定前提得肯定结论谬误）。')
  if (!oneNeg && negConcl && !negPremises) reasons.push('两个前提都是肯定，结论却是否定——无法从肯定的联结推出分离（肯定前提得否定结论谬误）。')

  if (valid) reasons.length = 0
  if (!valid && !reasons.length) reasons.push('形式不在 15 个有效形式之内，虽未必明显违反某一条规则，但用文恩图可以构造出前提真而结论假的情形。')

  if (!valid && CONDITIONAL_FORMS.has(key)) {
    conditions.push('该形式（' + key + '）在传统解释下（假定主项存在）有效，但在现代布尔解释下无效：两个全称前提不保证主项类非空。本课程采用现代解释，判为无效。')
  }

  return {
    ok: true, major, minor, conclusion, middle, majorTerm, minorTerm,
    mood, figure, valid, formName, reasons, conditions,
    diagram: [
      { label: '大前提', formula: `${major.type}：${sentence(major)}` },
      { label: '小前提', formula: `${minor.type}：${sentence(minor)}` },
      { label: '结论', formula: `${conclusion.type}：${sentence(conclusion)}` },
    ],
  }
}

function figureOf(major: Categorical, minor: Categorical, m: string, P: string, S: string): Figure {
  const majorIsMP = major.subject === m && major.predicate === P
  const minorIsSM = minor.subject === S && minor.predicate === m
  if (majorIsMP && minorIsSM) return 1
  if (major.subject === P && major.predicate === m && minor.subject === S && minor.predicate === m) return 2
  if (majorIsMP && minor.subject === m && minor.predicate === S) return 3
  if (major.subject === P && major.predicate === m && minor.subject === m && minor.predicate === S) return 4
  // 退化推断：依据中项位置
  const pos = (c: Categorical) => (c.subject === m ? 'S' : 'P')
  const k = pos(major) + pos(minor)
  if (k === 'SP') return 1
  if (k === 'PP') return 2
  if (k === 'SS') return 3
  return 4
}

export function sentence(c: Categorical): string {
  switch (c.type) {
    case 'A': return `所有 ${c.subject} 都是 ${c.predicate}`
    case 'E': return `所有 ${c.subject} 都不是 ${c.predicate}`
    case 'I': return `有的 ${c.subject} 是 ${c.predicate}`
    case 'O': return `有的 ${c.subject} 不是 ${c.predicate}`
  }
}

export const VALID_FORMS = Object.keys(FORM_NAMES)
