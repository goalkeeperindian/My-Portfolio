import { motion } from 'motion/react'
import { profile } from '../data'

const ease = [0.22, 1, 0.36, 1]
const lines = ['I build.', 'Products ship.', 'Fast.']

const rise = (i) => ({
  initial: { opacity: 0, y: 28, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease },
})

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-copy">
        <motion.p className="hero-hi" {...rise(0)}>
          Hi,
        </motion.p>
        <h1 className="hero-title">
          {lines.map((line, i) => (
            <motion.span key={line} className={i === 2 ? 'hero-gap' : undefined} {...rise(i + 1)}>
              {line}
            </motion.span>
          ))}
        </h1>
      </div>
      <motion.div className="hero-name" {...rise(5)}>
        <p className="hero-who">{profile.name}</p>
        <p className="hero-role">
          <span>{profile.role}</span>
          <span>{profile.tenure}</span>
        </p>
      </motion.div>
    </div>
  )
}
