import { useEffect, useSyncExternalStore } from 'react'

export interface LessonRec { done?: boolean; doneAt?: string; visitedAt?: string; sec?: number }
export interface AnswerRec { lessonId: string; qid: string; correct: boolean; at: number; answer: string }
export interface MistakeRec { lessonId: string; qid: string; wrongCount: number; lastWrongAt: number; mastered: boolean; favorite: boolean }
export interface ArgumentRec {
  id: string; topic: string; claim: string; premises: string; reasoning: string; objection: string; reply: string; at: number
}

export interface DB {
  v: number
  startedAt: string
  lessons: Record<string, LessonRec>
  answers: Record<string, AnswerRec>
  mistakes: Record<string, MistakeRec>
  days: Record<string, { sec: number; lessons: number; quiz: number }>
  notes: Record<string, string>
  favorites: string[]
  arguments: ArgumentRec[]
  dailyDone: Record<string, string[]>
  challenges: Record<string, string>
  lastVisit: string
}

const KEY = 'logiclab.db.v1'

const blank = (): DB => ({
  v: 1,
  startedAt: new Date().toISOString(),
  lessons: {},
  answers: {},
  mistakes: {},
  days: {},
  notes: {},
  favorites: [],
  arguments: [],
  dailyDone: {},
  challenges: {},
  lastVisit: new Date().toISOString(),
})

export const todayKey = (d = new Date()) => {
  const p = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

let db: DB = load()
const listeners = new Set<() => void>()

function load(): DB {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return blank()
    const parsed = JSON.parse(raw) as DB
    if (!parsed || parsed.v !== 1) return blank()
    return { ...blank(), ...parsed }
  } catch {
    return blank()
  }
}

function commit(next: DB) {
  db = next
  try { localStorage.setItem(KEY, JSON.stringify(db)) } catch { /* 隐私模式下静默失败 */ }
  listeners.forEach(l => l())
}

function subscribe(l: () => void) {
  listeners.add(l)
  return () => { listeners.delete(l) }
}

export function useDB(): DB {
  return useSyncExternalStore(subscribe, () => db, () => db)
}

export const store = {
  get: () => db,
  reset: () => commit(blank()),

  visitLesson(id: string) {
    const prev = db.lessons[id] ?? {}
    commit({
      ...db,
      lessons: { ...db.lessons, [id]: { ...prev, visitedAt: new Date().toISOString() } },
      lastVisit: new Date().toISOString(),
    })
  },

  setLessonDone(id: string, done: boolean) {
    const prev = db.lessons[id] ?? {}
    const day = todayKey()
    const d = db.days[day] ?? { sec: 0, lessons: 0, quiz: 0 }
    commit({
      ...db,
      lessons: {
        ...db.lessons,
        [id]: { ...prev, done, doneAt: done ? new Date().toISOString() : undefined },
      },
      days: {
        ...db.days,
        [day]: {
          ...d,
          lessons: Math.max(0, d.lessons + (done && !prev.done ? 1 : !done && prev.done ? -1 : 0)),
        },
      },
    })
  },

  recordAnswer(lessonId: string, qid: string, correct: boolean, answer: string) {
    const day = todayKey()
    const d = db.days[day] ?? { sec: 0, lessons: 0, quiz: 0 }
    const prevM = db.mistakes[qid]
    const mistakes = { ...db.mistakes }
    if (!correct) {
      mistakes[qid] = {
        lessonId,
        qid,
        wrongCount: (prevM?.wrongCount ?? 0) + 1,
        lastWrongAt: Date.now(),
        mastered: false,
        favorite: prevM?.favorite ?? false,
      }
    } else if (prevM) {
      mistakes[qid] = { ...prevM, mastered: true }
    }
    commit({
      ...db,
      answers: { ...db.answers, [qid]: { lessonId, qid, correct, at: Date.now(), answer } },
      mistakes,
      days: { ...db.days, [day]: { ...d, quiz: d.quiz + 1 } },
    })
  },

  toggleFavorite(qid: string, lessonId: string) {
    const prev = db.mistakes[qid] ?? { lessonId, qid, wrongCount: 0, lastWrongAt: 0, mastered: false, favorite: false }
    commit({ ...db, mistakes: { ...db.mistakes, [qid]: { ...prev, favorite: !prev.favorite } } })
  },

  toggleFavoriteLesson(id: string) {
    const has = db.favorites.includes(id)
    commit({ ...db, favorites: has ? db.favorites.filter(x => x !== id) : [...db.favorites, id] })
  },

  markMastered(qid: string, lessonId: string) {
    const prev = db.mistakes[qid] ?? { lessonId, qid, wrongCount: 0, lastWrongAt: 0, mastered: false, favorite: false }
    commit({ ...db, mistakes: { ...db.mistakes, [qid]: { ...prev, mastered: true } } })
  },

  removeMistake(qid: string) {
    const m = { ...db.mistakes }
    delete m[qid]
    commit({ ...db, mistakes: m })
  },

  saveNote(id: string, text: string) {
    commit({ ...db, notes: { ...db.notes, [id]: text } })
  },

  addArgument(a: Omit<ArgumentRec, 'id' | 'at'>) {
    const rec: ArgumentRec = { ...a, id: `arg-${Date.now()}`, at: Date.now() }
    commit({ ...db, arguments: [rec, ...db.arguments] })
  },

  removeArgument(id: string) {
    commit({ ...db, arguments: db.arguments.filter(a => a.id !== id) })
  },

  markDaily(taskId: string) {
    const day = todayKey()
    const list = db.dailyDone[day] ?? []
    if (list.includes(taskId)) return
    commit({ ...db, dailyDone: { ...db.dailyDone, [day]: [...list, taskId] } })
  },

  saveChallenge(id: string, text: string) {
    commit({ ...db, challenges: { ...db.challenges, [id]: text } })
  },

  addTime(sec: number) {
    if (sec <= 0) return
    const day = todayKey()
    const d = db.days[day] ?? { sec: 0, lessons: 0, quiz: 0 }
    commit({ ...db, days: { ...db.days, [day]: { ...d, sec: d.sec + sec } } })
  },
}

/** 全局学习时长统计：可见时每 20 秒累加一次 */
export function useTimeTracker() {
  useEffect(() => {
    let last = Date.now()
    const tick = () => {
      const now = Date.now()
      const delta = Math.round((now - last) / 1000)
      last = now
      if (document.visibilityState === 'visible' && delta > 0 && delta < 120) store.addTime(delta)
    }
    const iv = setInterval(tick, 20000)
    const onVis = () => { last = Date.now() }
    document.addEventListener('visibilitychange', onVis)
    return () => { clearInterval(iv); document.removeEventListener('visibilitychange', onVis); tick() }
  }, [])
}

/* ---------- 派生统计 ---------- */

export function streakOf(db: DB): number {
  let n = 0
  const d = new Date()
  for (let i = 0; i < 400; i++) {
    const k = todayKey(d)
    const rec = db.days[k]
    const active = rec && (rec.sec >= 60 || rec.lessons > 0 || rec.quiz > 0)
    if (active) n++
    else if (i > 0) break
    d.setDate(d.getDate() - 1)
  }
  return n
}

export function totalSeconds(db: DB): number {
  return Object.values(db.days).reduce((s, d) => s + (d.sec || 0), 0)
}

export function fmtDuration(sec: number): string {
  if (sec < 60) return `${sec} 秒`
  const m = Math.round(sec / 60)
  if (m < 60) return `${m} 分钟`
  const h = Math.floor(m / 60)
  return `${h} 小时 ${m % 60} 分`
}

export function masteredCount(db: DB, conceptTotal: number): number {
  const done = Object.values(db.lessons).filter(l => l.done).length
  return done
}
