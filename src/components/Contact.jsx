import { motion } from 'motion/react'
import { profile, socials } from '../data'
import { ArrowDownIcon, socialIcons } from './Icons'

const ease = [0.22, 1, 0.36, 1]
const item = (i) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.08, duration: 0.5, ease },
})

export default function Contact() {
  return (
    <div className="contact">
      <motion.h2 className="contact-title" {...item(0)}>
        You&rsquo;ve Reached The End.
      </motion.h2>
      <motion.p className="contact-sub" {...item(1)}>
        Or The Beginning.
      </motion.p>

      <motion.p className="contact-label" {...item(2)}>
        Mail me
      </motion.p>
      <motion.a className="contact-big" href={`mailto:${profile.email}`} {...item(2)}>
        {profile.email}
      </motion.a>

      <motion.p className="contact-label" {...item(3)}>
        Meet me in
      </motion.p>
      <motion.p className="contact-big" {...item(3)}>
        {profile.location}
      </motion.p>

      <motion.p className="contact-label" {...item(4)}>
        or stalk my profiles
      </motion.p>
      <motion.ul className="socials" {...item(4)}>
        {socials.map((s) => {
          const Icon = socialIcons[s.icon]
          return (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <Icon width={18} height={18} />
              </a>
            </li>
          )
        })}
      </motion.ul>

      <a className="resume-btn" href={profile.resume} download>
        <span className="resume-icon">
          <ArrowDownIcon width={16} height={16} />
        </span>
        Download Resume
      </a>
    </div>
  )
}
