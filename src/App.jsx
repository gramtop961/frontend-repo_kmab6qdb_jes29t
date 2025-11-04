import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import GovernanceSection from './components/GovernanceSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <Navbar />

      <main>
        <HeroSection />

        <section id="about" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-rose-500/10 rounded-2xl" aria-hidden />
              <div className="relative">
                <h2 className="text-3xl font-semibold tracking-tight">What is Syra?</h2>
                <p className="mt-4 max-w-3xl text-white/70">
                  Syra is a decentralized autonomous organization designed for builders. Token holders propose, vote, and execute protocol changes on-chain. The community treasury funds public goods, growth initiatives, and ongoing development to keep the network resilient and aligned.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeaturesGrid />
        <GovernanceSection />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Syra DAO. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-white/70 hover:text-white">Docs</a>
            <a href="#" className="text-white/70 hover:text-white">Discord</a>
            <a href="#" className="text-white/70 hover:text-white">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
