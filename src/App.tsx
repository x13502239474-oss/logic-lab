import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import LessonPage from './pages/Lesson'
import Lab from './pages/Lab'
import Mistakes from './pages/Mistakes'
import Me from './pages/Me'
import Daily from './pages/Daily'
import Cases from './pages/Cases'
import CaseDetail from './pages/CaseDetail'
import Graph from './pages/Graph'
import Fallacies from './pages/Fallacies'
import { useTimeTracker } from './store/db'

const TABS = [
  { to: '/', label: '首页', icon: 'home' },
  { to: '/courses', label: '课程', icon: 'book' },
  { to: '/lab', label: '实验室', icon: 'flask' },
  { to: '/mistakes', label: '错题本', icon: 'flag' },
  { to: '/me', label: '我的', icon: 'user' },
]

function Icon({ name }: { name: string }) {
  const p: Record<string, React.ReactNode> = {
    home: <><path d="M3 9.5 10 3l7 6.5" /><path d="M5 8.6V16h10V8.6" /></>,
    book: <><path d="M4 3.5h5a1.5 1.5 0 0 1 1 2.6v9.4H5.5A1.5 1.5 0 0 1 4 14V3.5Z" /><path d="M16 3.5h-5a1.5 1.5 0 0 0-1 2.6v9.4h4.5A1.5 1.5 0 0 0 16 14V3.5Z" /></>,
    flask: <><path d="M8 3h4M8.5 3v4.2L4.6 14a1.4 1.4 0 0 0 1.2 2.1h8.4A1.4 1.4 0 0 0 15.4 14l-3.9-6.8V3" /><path d="M6.4 11h7.2" /></>,
    flag: <><path d="M5 17V3.5" /><path d="M5 4h8l-1.2 2.6L13 9.2H5" /></>,
    user: <><circle cx="10" cy="7" r="3" /><path d="M4 17c0-3 2.7-4.6 6-4.6S16 14 16 17" /></>,
  }
  return <svg viewBox="0 0 20 20" aria-hidden>{p[name]}</svg>
}

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const nav = useNavigate()
  useTimeTracker()

  const active = (to: string) =>
    to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(to + '/')
      || (to === '/courses' && pathname.startsWith('/lesson'))

  const title = pathname.startsWith('/lesson') ? '课程'
    : pathname.startsWith('/cases') ? '案例库'
      : pathname.startsWith('/graph') ? '知识图谱'
        : pathname.startsWith('/fallacies') ? '谬误图鉴'
          : pathname.startsWith('/daily') ? '思维训练'
            : ''

  return (
    <>
      <ScrollTop />
      <header className="masthead">
        <div className="shell masthead-inner">
          <div className="wordmark" onClick={() => nav('/')} style={{ cursor: 'pointer' }}>
            <b>Logic Lab</b>
            <span>{title || '逻辑学研究所'}</span>
          </div>
          <div className="masthead-meta">《逻辑学导论》第 15 版</div>
        </div>
      </header>

      <main className="page">
        <div className="shell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/lesson/:id" element={<LessonPage />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/mistakes" element={<Mistakes />} />
            <Route path="/me" element={<Me />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/:id" element={<CaseDetail />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/fallacies" element={<Fallacies />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </main>

      <nav className="tabbar">
        <div className="tabbar-inner">
          {TABS.map(t => (
            <button key={t.to} className={`tab ${active(t.to) ? 'active' : ''}`} onClick={() => nav(t.to)}>
              <Icon name={t.icon} />
              {t.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
