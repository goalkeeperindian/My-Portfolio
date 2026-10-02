import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import Header from './components/Header'
import Character from './components/Character'
import Hero from './components/Hero'
import Works from './components/Works'
import Journey from './components/Journey'
import About from './components/About'
import Contact from './components/Contact'
import { profile } from './data'

const sections = [
  { id: 'home', pose: 'wave', Body: Hero },
  { id: 'works', pose: 'desk', Body: Works },
  { id: 'journey', pose: 'think', Body: Journey },
  { id: 'about', pose: 'trophy', Body: About },
  { id: 'contact', pose: 'call', Body: Contact },
]

export default function App() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.55 },
    )
    sections.forEach(({ id }) => io.observe(document.getElementById(id)))
    return () => io.disconnect()
  }, [])

  const pose = sections.find((s) => s.id === active)?.pose

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#works">
        Skip to content
      </a>
      <Header active={active} />

      <aside className="side-badge" aria-label={`${profile.badge.top} ${profile.badge.bottom}`}>
        <span className="side-top">{profile.badge.top}</span>
        <span className="side-bottom">{profile.badge.bottom}</span>
      </aside>

      {/* Desktop: one character pinned on the left, changing pose per section */}
      <div className="stage" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pose}
            className="stage-inner"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Character pose={pose} />
          </motion.div>
        </AnimatePresence>
      </div>

      <main>
        {sections.map(({ id, pose, Body }) => (
          <section key={id} id={id} className={`snap snap-${id}`}>
            <div className="content">
              <Body />
            </div>
            {/* Mobile: each section carries its own character */}
            <div className="mobile-char" aria-hidden="true">
              <Character pose={pose} />
            </div>
          </section>
        ))}
      </main>
    </MotionConfig>
  )
}
