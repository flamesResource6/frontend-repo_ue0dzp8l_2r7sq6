export default function Strategy() {
  return (
    <section id="strategy" className="relative bg-gradient-to-b from-indigo-950 via-black to-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs text-pink-300/70">A Strategic Card Game</p>
          <h3 className="mt-4 text-3xl sm:text-5xl font-semibold kamui-brush">Master Every Move</h3>
          <p className="mt-4 text-white/70 leading-relaxed">Build a deck of Samurai and Yokai, chain abilities, and outmaneuver your rivals with perfect timing. Each match is a duel of wits under warm candlelight.</p>
          <div className="mt-8 flex gap-4">
            <a href="#cards" className="rounded-full bg-white/10 border border-white/20 px-5 py-2 hover:bg-white/20 transition">See Cards</a>
            <a href="#footer" className="rounded-full bg-pink-500/20 border border-pink-300/30 px-5 py-2 hover:bg-pink-500/30 transition">Join Waitlist</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-amber-200/20 via-amber-300/10 to-transparent border border-amber-200/20 p-6">
            <div className="w-full h-full rounded-xl bg-gradient-to-t from-amber-900/30 to-transparent relative overflow-hidden">
              <div className="absolute inset-6 rounded-xl border border-amber-200/20" />
              <div className="absolute bottom-8 left-8 w-16 h-16 rounded-full bg-amber-200/30 blur-xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-amber-400/20 blur-2xl" />
              <div className="absolute bottom-10 left-10 text-amber-200/90">Samurai</div>
              <div className="absolute bottom-6 left-24 text-amber-100/70">Dojo Table</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
