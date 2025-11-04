import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.25),transparent_50%)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-semibold tracking-tight text-white"
            >
              Syra DAO
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-rose-400">Own the Protocol</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 max-w-2xl text-lg text-white/70"
            >
              A community-owned, on-chain organization powering the next generation of web3 products. Govern the treasury, ship proposals, and shape the future together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#app"
                className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90"
              >
                Launch App <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 text-white px-5 py-3 text-sm font-semibold hover:bg-white/20 border border-white/10"
              >
                Learn More
              </a>
            </motion.div>

            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="inline-flex items-center gap-2"><Shield size={16} className="text-indigo-400" /> Audited Contracts</div>
              <div className="inline-flex items-center gap-2"><Users size={16} className="text-fuchsia-400" /> Community First</div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-rose-500/40 blur-2xl rounded-full" aria-hidden />
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Holders', value: '42,318' },
                    { label: 'TVL', value: '$128M' },
                    { label: 'Proposals', value: '287' },
                    { label: 'Snapshot', value: 'Live' },
                    { label: 'Treasury', value: '$64.2M' },
                    { label: 'Chain', value: 'EVM' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg border border-white/10 bg-black/40 p-4">
                      <div className="text-xs text-white/60">{item.label}</div>
                      <div className="mt-1 text-lg font-semibold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/50">
                  Metrics are illustrative. Connect your wallet in the app to view real-time on-chain stats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
