import Hero from './components/Hero'
import TransitionSection from './components/Transition'
import Strategy from './components/Strategy'
import CardShowcase from './components/CardShowcase'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Hero />
      <TransitionSection />
      <Strategy />
      <CardShowcase />

      {/* Footer */}
      <footer id="footer" className="bg-gradient-to-t from-indigo-950 via-black to-black text-white/80">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="kamui-brush text-2xl">KAMUI</h4>
              <p className="text-sm text-white/60 mt-2">Japanese folklore aesthetic • Parallax depth • Atmospheric perspective • Vector illustration • Glassmorphism UI • Lottie Animation ready</p>
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-wide">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">macOS</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Windows</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Linux</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">iPhone</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Android</span>
            </div>
          </div>
          <p className="mt-10 text-xs text-white/40">© {new Date().getFullYear()} KAMUI</p>
        </div>
      </footer>
    </div>
  )
}

export default App
