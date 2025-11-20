import { motion, useScroll, useTransform } from 'framer-motion'

export default function TransitionSection() {
  const { scrollYProgress } = useScroll()
  const darkness = useTransform(scrollYProgress, [0.1, 0.4], [0, 0.85])

  return (
    <section id="transition" className="relative h-[120vh] overflow-hidden">
      {/* Darken overlay simulating entering a room */}
      <motion.div style={{ opacity: darkness }} className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/70 to-black" />

      {/* Parallax mountains silhouettes */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 inset-x-0 h-64 bg-gradient-to-b from-indigo-900/30 to-transparent blur-2xl" />
        <div className="absolute top-20 inset-x-0 h-64 bg-gradient-to-b from-indigo-900/50 to-transparent blur-xl" />
      </div>

      <div className="relative h-full flex items-end pb-24 justify-center">
        <div className="text-center text-white/90">
          <p className="uppercase tracking-[0.3em] text-xs text-pink-200/70">Scroll</p>
          <h2 className="mt-2 text-2xl font-semibold">Enter the Dojo</h2>
          <p className="mt-2 text-pink-100/70 max-w-md">As you descend, the light fades and the world narrows into a focused battleground.</p>
        </div>
      </div>
    </section>
  )
}
