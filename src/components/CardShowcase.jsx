import { motion } from 'framer-motion'
import { useState } from 'react'

function Card({ title, type, index, activeIndex, onHover }) {
  const isActive = index === activeIndex
  return (
    <motion.div
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="relative w-56 h-80 [perspective:1200px]"
    >
      <motion.div
        animate={{ rotateY: isActive ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-900 to-purple-900 border border-white/10 shadow-xl overflow-hidden [backface-visibility:hidden]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,200,240,0.2),transparent_60%)]" />
          <div className="absolute inset-0 p-4 flex flex-col">
            <div className="text-xs uppercase tracking-[0.3em] text-pink-200/70">{type}</div>
            <div className="mt-auto text-center text-white text-2xl font-semibold">{title}</div>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500/30 to-orange-400/20 border border-amber-200/30 shadow-2xl overflow-hidden rotate-y-180 [backface-visibility:hidden]">
          <div className="absolute inset-0 grid place-items-center">
            <div className="w-32 h-32 rounded-full bg-amber-300/30 blur-2xl" />
            <div className="absolute text-amber-200">{title} Art</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function CardShowcase() {
  const [active, setActive] = useState(null)
  const cards = [
    { title: 'Ronin', type: 'Samurai' },
    { title: 'Kitsune', type: 'Yokai' },
    { title: 'Onna-bugeisha', type: 'Samurai' },
    { title: 'Tengu', type: 'Yokai' },
    { title: 'Shogun', type: 'Samurai' },
  ]

  return (
    <section id="cards" className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h3 className="kamui-brush text-3xl sm:text-5xl">Card Showcase</h3>
          <p className="text-white/60">Hover to flip</p>
        </div>

        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-6 min-w-max">
            {cards.map((c, i) => (
              <Card key={i} index={i} activeIndex={active} onHover={setActive} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
