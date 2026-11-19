import { Lesson, Stage } from './types'
import { normalizeQuiz } from '../lib/quizOrder'
import { s1 } from './lessons/s1'
import { s2 } from './lessons/s2'
import { s3 } from './lessons/s3'
import { s4 } from './lessons/s4'
import { s5 } from './lessons/s5'
import { s6 } from './lessons/s6'

export const BOOK = {
  title: '逻辑学导论',
  edition: '第 15 版',
  authors: '欧文·M. 柯匹（Irving M. Copi）、卡尔·科恩（Carl Cohen）、维克多·罗迪奇（Victor Rodych）',
  publisher: '中国人民大学出版社（中译本）',
  note: '课程按该版三篇十四章的结构编排，逐节对应原书小节号；讲解文字全部重新撰写，不复制教材原文。',
}

export const STAGE_META = [
  {
    id: 1,
    title: '逻辑学基础',
    en: 'Foundations',
    chapters: '第 1–2 章',
    summary: '先把「论证」这件事看清：前提、结论、有效性、演绎与归纳，以及如何把一段杂乱的话整理成标准论证。',
  },
  {
    id: 2,
    title: '语言与定义',
    en: 'Language & Definition',
    chapters: '第 3 章',
    summary: '论证是用语言做的。含混、歧义、情感语言会悄悄改写前提；定义则是把词钉死在某个含义上的工具。',
  },
  {
    id: 3,
    title: '命题逻辑',
    en: 'Propositional Logic',
    chapters: '第 8–9 章',
    summary: '用符号把「并且、或者、如果」写成公式，用真值表判定有效性，再学会用十九条规则一步步做形式证明。',
  },
  {
    id: 4,
    title: '谓词逻辑与直言三段论',
    en: 'Predicate Logic & Syllogism',
    chapters: '第 5–7 章、第 10 章',
    summary: '从「所有 S 是 P」出发，走完亚里士多德三段论的老路，再进入量词与谓词，处理命题逻辑吃不下的内部结构。',
  },
  {
    id: 5,
    title: '归纳、类比与因果',
    en: 'Induction, Analogy & Causation',
    chapters: '第 11–14 章',
    summary: '前提不保证结论时，推理还剩下什么价值？类比、因果五法、假说与概率，构成日常判断的真实战场。',
  },
  {
    id: 6,
    title: '谬误与批判性思维',
    en: 'Fallacies & Critical Thinking',
    chapters: '第 4 章',
    summary: '把前五个阶段的工具合成一张谬误地图：相干谬误、不当归纳、预设谬误、含混谬误，逐一拆解并学会反驳。',
  },
]

const RAW: Lesson[][] = [s1, s2, s3, s4, s5, s6].map(list =>
  list.map(l => ({ ...l, quiz: l.quiz.map(normalizeQuiz) }))
)

export const STAGES: Stage[] = STAGE_META.map(m => ({
  ...m,
  lessons: (RAW[m.id - 1] ?? []).slice().sort((a, b) => a.no - b.no),
}))

export const ALL_LESSONS: Lesson[] = STAGES.flatMap(s => s.lessons)

export const lessonById = (id: string) => ALL_LESSONS.find(l => l.id === id)

export const lessonIndex = (id: string) => ALL_LESSONS.findIndex(l => l.id === id)

export const TOTAL_LESSONS = ALL_LESSONS.length

export const TOTAL_QUIZ = ALL_LESSONS.reduce((n, l) => n + l.quiz.length, 0)

export const ALL_CONCEPTS = Array.from(new Set(ALL_LESSONS.flatMap(l => l.concepts)))

export function stageOfLesson(id: string) {
  return STAGES.find(s => s.lessons.some(l => l.id === id))
}

export function nextLesson(id: string): Lesson | undefined {
  const i = lessonIndex(id)
  return i >= 0 ? ALL_LESSONS[i + 1] : undefined
}

export function prevLesson(id: string): Lesson | undefined {
  const i = lessonIndex(id)
  return i > 0 ? ALL_LESSONS[i - 1] : undefined
}

export interface QuizRef { lesson: Lesson; quiz: import('./types').Quiz }

export const QUIZ_INDEX: Record<string, QuizRef> = Object.fromEntries(
  ALL_LESSONS.flatMap(l => l.quiz.map(q => [q.id, { lesson: l, quiz: q }] as const))
)
