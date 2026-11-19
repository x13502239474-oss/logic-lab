export type QType = 'single' | 'multi' | 'judge' | 'short'

export interface Quiz {
  id: string
  type: QType
  stem: string
  options?: string[]
  /** single: 'A'；multi: ['A','C']；judge: boolean；short: 参考答案字符串 */
  answer?: string | string[] | boolean
  /** 简答题判分要点组，命中 ≥70% 视为通过 */
  keywords?: string[][]
  explanation: string
  /** 对应知识点，用于错题本归类与知识图谱 */
  skill?: string
}

export interface Lesson {
  /** 全局唯一，形如 s1-01 */
  id: string
  /** 全局顺序，1 起 */
  no: number
  /** 对应教材小节，如 '1.1' */
  code: string
  title: string
  stage: number
  /** 对应教材章次 */
  chapter: string
  minutes: number
  /** 本节导入的问题 */
  lead: string
  /** 学完你能…… */
  objectives: string[]
  /** 关键概念，用于掌握度与知识图谱 */
  concepts: string[]
  /** 正文 Markdown（## 二级标题分节） */
  body: string
  quiz: Quiz[]
}

export interface Stage {
  id: number
  title: string
  en: string
  chapters: string
  summary: string
  lessons: Lesson[]
}
