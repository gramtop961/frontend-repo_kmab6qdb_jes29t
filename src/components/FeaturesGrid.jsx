import { BarChart3, Layers, Shield, Users } from 'lucide-react';

const features = [
  {
    title: 'On-chain Governance',
    description:
      'Token-weighted voting with transparent execution. Every decision is immutable and traceable.',
    icon: Shield,
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Treasury Management',
    description:
      'Programmatic budgeting and streaming payments to contributors using multi-sig safeguards.',
    icon: BarChart3,
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Modular Protocol',
    description:
      'Composable architecture that lets you plug in voting, delegation, and reputation modules.',
    icon: Layers,
    accent: 'from-fuchsia-500 to-rose-500',
  },
  {
    title: 'Community Ownership',
    description:
      'Delegate your voice, propose upgrades, and coordinate roadmaps with transparent incentives.',
    icon: Users,
    accent: 'from-amber-500 to-orange-500',
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Why Syra</h2>
          <p className="mt-3 text-white/70">Purpose-built tools to help decentralized communities move fast and stay aligned.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon, accent }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br ${accent} text-white`}> 
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
