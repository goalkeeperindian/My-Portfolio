import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { nav, profile } from '../data'

const ease = [0.22, 1, 0.36, 1]

export default function Header({ active }) {
  const [open, setOpen] = useState(false)
  const firstLink = useRef(null)
  const burger = useRef(null)

  useEffect(() => {
    if (!open) return
    document.documentElement.classList.add('locked')
    firstLink.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.classList.remove('locked')
      window.removeEventListener('keydown', onKey)
      burger.current?.focus()
    }
  }, [open])

  return (
    <>
      <header className="header">
        <a href="#home" className="logo" aria-label={`${profile.name}, back to top`}>
          LK<span>.</span>
        </a>
        <button
          ref={burger}
          className={`burger ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu"
            className="menu"
            aria-label="Main"
            initial={{ clipPath: 'circle(0% at calc(100% - 52px) 52px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 52px) 52px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 52px) 52px)' }}
            transition={{ duration: 0.5, ease }}
          >
            <ul>
              {nav.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.05, duration: 0.45, ease }}
                >
                  <a
                    ref={i === 0 ? firstLink : undefined}
                    href={`#${item.id}`}
                    aria-current={active === item.id ? 'true' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="menu-num">0{i + 1}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="menu-foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>{profile.location}</span>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
