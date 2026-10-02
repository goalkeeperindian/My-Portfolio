import { useState } from 'react'
import { motion } from 'motion/react'
import { deck } from '../data'

export default function About() {
  const [order, setOrder] = useState(() => deck.map((_, i) => i))
  const top = deck[order[0]]

  const next = () => setOrder((o) => [...o.slice(1), o[0]])

  return (
    <div className="about">
      <h2 className="section-title">This Is Where It Gets Personal.</h2>

      <div className="deck">
        {order.map((cardIndex, pos) => {
          const card = deck[cardIndex]
          const isTop = pos === 0
          return (
            <motion.div
              key={card.label}
              className="card"
              style={{ background: card.tone, color: card.ink, zIndex: deck.length - pos }}
              animate={{
                x: pos * -14,
                y: pos * -6,
                rotate: pos === 0 ? 0 : -3 - pos * 3,
                scale: 1 - pos * 0.035,
              }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              drag={isTop}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.6}
              whileDrag={{ scale: 1.03, cursor: 'grabbing' }}
              onDragEnd={(_, info) => {
                const far = Math.abs(info.offset.x) > 90 || Math.abs(info.offset.y) > 90
                const fast = Math.abs(info.velocity.x) > 600 || Math.abs(info.velocity.y) > 600
                if (far || fast) next()
              }}
              aria-hidden={!isTop}
            >
              {isTop ? (
                <button className="card-btn" onClick={next} aria-label={`${card.big}: ${card.label}. Show next card`}>
                  <CardFace card={card} />
                </button>
              ) : (
                <CardFace card={card} />
              )}
            </motion.div>
          )
        })}
      </div>
      <p className="deck-hint">
        Drag or tap to shuffle · <span aria-live="polite">{order[0] + 1} / {deck.length}</span>
        <span className="sr-only">: {top.label}</span>
      </p>
    </div>
  )
}

function CardFace({ card }) {
  return (
    <span className="card-face">
      <span className="card-big">{card.big}</span>
      <span className="card-label">{card.label}</span>
      <span className="card-note">{card.note}</span>
    </span>
  )
}
