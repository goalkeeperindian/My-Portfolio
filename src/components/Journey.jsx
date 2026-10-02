import { motion } from 'motion/react'
import { journey, toolkit } from '../data'

const ease = [0.22, 1, 0.36, 1]

// Positions in a 0–100 box; the path winds between alternating sides.
const points = journey.map((j, i) => ({
  x: j.side === 'left' ? 24 : 76,
  y: 9 + (i * 82) / (journey.length - 1),
}))

const path = points.reduce((d, p, i) => {
  if (i === 0) return `M ${p.x} ${p.y}`
  const prev = points[i - 1]
  const dy = p.y - prev.y
  return `${d} C ${prev.x + (p.x - prev.x) * 0.1} ${prev.y + dy * 0.75}, ${p.x - (p.x - prev.x) * 0.1} ${p.y - dy * 0.75}, ${p.x} ${p.y}`
}, '')

export default function Journey() {
  return (
    <div className="journey">
      <h2 className="section-title center">The Build Journey</h2>

      <div className="journey-map">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <mask id="draw">
              <motion.path
                d={path}
                stroke="#fff"
                strokeWidth="8"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
            </mask>
          </defs>
          <path
            d={path}
            mask="url(#draw)"
            stroke="#9a9a9a"
            strokeWidth="1.5"
            strokeDasharray="5 6"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ol>
          {journey.map((j, i) => (
            <motion.li
              key={j.org}
              className={`stop ${j.side}`}
              style={{ left: `${points[i].x}%`, top: `${points[i].y}%`, x: '-50%', y: '-50%' }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.35, duration: 0.5, ease }}
            >
              <span className="stop-org">{j.org}</span>
              <span className="stop-role">
                {j.role} · {j.sub}
              </span>
              <span className="stop-when">{j.when}</span>
            </motion.li>
          ))}
        </ol>
      </div>

      <h3 className="toolkit-title">Tools I Build With</h3>
      <ul className="toolkit">
        {toolkit.map((t, i) => (
          <motion.li
            key={t}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.35, ease }}
          >
            {t}
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
