import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const yMountains = useTransform(scrollYProgress, [0, 1], [0, -150])
  const yBridge = useTransform(scrollYProgress, [0, 1], [0, -80])
  const yCranes = useTransform(scrollYProgress, [0, 1], [0, -40])
  const opacityFog = useTransform(scrollYProgress, [0, 0.3], [1, 0.2])

  return (
    <section className="relative h-screen overflow-hidden" aria-label="KAMUI Hero">
      {/* Gradient Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E79EB6] via-[#7b4a83] to-[#462456]" />

      {/* Atmospheric Fog */}
      <motion.div style={{ opacity: opacityFog }} className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25),transparent_60%)]" />

      {/* Distant Mountains (Parallax) */}
      <motion.div style={{ y: yMountains }} className="absolute inset-x-0 top-20 flex justify-center">
        <div className="w-[1400px] h-64 bg-gradient-to-b from-indigo-900/40 to-transparent rounded-b-[50%] blur-2xl" />
      </motion.div>

      {/* Water */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-indigo-900/60 to-transparent" />

      {/* Pagoda Islet */}
      <motion.div style={{ y: yBridge }} className="absolute bottom-36 left-1/2 -translate-x-1/2 flex items-end gap-10">
        {/* Islet */}
        <div className="w-72 h-28 bg-indigo-900/80 rounded-t-3xl shadow-[0_-20px_80px_rgba(255,150,200,0.25)]" />
        {/* Bridge */}
        <div className="w-80 h-6 bg-rose-200/60 rounded-full shadow-inner" />
      </motion.div>

      {/* Pagoda */}
      <motion.div style={{ y: yBridge }} className="absolute bottom-56 left-1/2 -translate-x-1/2">
        <div className="relative w-72 h-56">
          <div className="absolute inset-x-0 top-0 mx-auto w-44 h-6 bg-indigo-900/80" />
          <div className="absolute inset-x-0 top-8 mx-auto w-52 h-6 bg-indigo-900/80" />
          <div className="absolute inset-x-0 top-16 mx-auto w-64 h-8 bg-indigo-900/90" />
          <div className="absolute inset-x-0 top-24 mx-auto w-72 h-10 bg-indigo-900" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-rose-200/20 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* White Cranes */}
      <motion.div style={{ y: yCranes }} className="absolute bottom-20 left-[15%]">
        <div className="w-10 h-10 rounded-full bg-white/90 shadow-[0_0_20px_#ffffffaa]" />
      </motion.div>
      <motion.div style={{ y: yCranes }} className="absolute bottom-24 right-[12%]">
        <div className="w-8 h-8 rounded-full bg-white/80" />
      </motion.div>

      {/* Title & CTA */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="kamui-brush text-7xl sm:text-8xl text-white drop-shadow-[0_6px_40px_rgba(255,120,180,0.45)]">KAMUI</h1>
        <p className="mt-4 max-w-xl text-pink-100/90">A feudal Japanese fantasy trading card game with lo-fi vibes and deep strategy.</p>
        <a href="#transition" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-6 py-3 text-white border border-white/30 hover:bg-white/20 transition">
          Join the Waitlist
        </a>
      </div>

      {/* Floating Nav */}
      <div className="absolute top-6 inset-x-0 flex justify-center">
        <nav className="backdrop-blur bg-white/5 border border-white/15 rounded-full px-5 py-2 text-white text-sm flex gap-4">
          <a href="#strategy" className="hover:text-pink-200">Strategy</a>
          <a href="#cards" className="hover:text-pink-200">Cards</a>
          <a href="#footer" className="hover:text-pink-200">Platforms</a>
        </nav>
      </div>
    </section>
  )
}
