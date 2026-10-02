import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { works } from '../data'
import { ArrowUpRightIcon, CloseIcon, FileIcon, FolderIcon } from './Icons'

const ease = [0.22, 1, 0.36, 1]

export default function Works() {
  const [openId, setOpenId] = useState(null)
  const [origin, setOrigin] = useState({ x: 0, y: 0 })
  const triggers = useRef({})
  const open = works.find((w) => w.id === openId)

  const show = (id, e) => {
    const r = e.currentTarget.getBoundingClientRect()
    // Offset from the viewport centre, so the panel grows out of the row that opened it.
    setOrigin({ x: r.left + r.width / 2 - window.innerWidth / 2, y: r.top + r.height / 2 - window.innerHeight / 2 })
    setOpenId(id)
  }

  return (
    <div className="works">
      <h2 className="section-title">Works</h2>
      <ul className="works-list">
        {works.map((w, i) => {
          const Icon = w.kind === 'file' ? FileIcon : FolderIcon
          return (
            <motion.li
              key={w.id}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: i * 0.06, duration: 0.45, ease }}
            >
              <button
                ref={(el) => (triggers.current[w.id] = el)}
                className="works-item"
                onClick={(e) => show(w.id, e)}
                aria-haspopup="dialog"
              >
                <Icon />
                <span>{w.title}</span>
                <span className="works-tag">{w.tagline}</span>
              </button>
            </motion.li>
          )
        })}
      </ul>

      {createPortal(
        <AnimatePresence>
          {open && (
            <ProjectPanel
              key={open.id}
              work={open}
              origin={origin}
              onClose={() => {
                const t = triggers.current[open.id]
                setOpenId(null)
                t?.focus()
              }}
            />
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  )
}

function ProjectPanel({ work, origin, onClose }) {
  const closeRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    document.documentElement.classList.add('locked')
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const els = panelRef.current.querySelectorAll('a[href], button')
        const first = els[0]
        const last = els[els.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('locked')
    }
  }, [onClose])

  const hidden = { opacity: 0, scale: 0.6, x: origin.x * 0.6, y: origin.y * 0.6 }

  return (
    <div className="panel-wrap">
      <motion.div
        className="scrim"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      />
      <motion.div
        ref={panelRef}
        className="panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${work.id}-title`}
        initial={hidden}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        exit={{ ...hidden, transition: { duration: 0.2, ease: 'easeIn' } }}
        transition={{ type: 'spring', bounce: 0, duration: 0.45 }}
      >
        <div className="panel-head">
          <div>
            <p className="panel-kicker">Project</p>
            <h3 id={`${work.id}-title`}>{work.title}</h3>
            <p className="panel-tagline">{work.tagline}</p>
          </div>
          <button ref={closeRef} className="icon-btn" onClick={onClose} aria-label="Close project">
            <CloseIcon />
          </button>
        </div>
        <ul className="panel-points">
          {work.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <ul className="chips" aria-label="Highlights">
          {work.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        {work.link && (
          <a className="pill-link" href={work.link} target="_blank" rel="noreferrer">
            Visit {work.linkLabel}
            <ArrowUpRightIcon width={16} height={16} />
          </a>
        )}
      </motion.div>
    </div>
  )
}
