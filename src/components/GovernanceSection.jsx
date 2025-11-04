import { CheckCircle2, Shield, Users } from 'lucide-react';

const steps = [
  { title: 'Draft', desc: 'Ideate with the community and collect feedback.', icon: Users },
  { title: 'Vote', desc: 'Submit to snapshot or on-chain ballot for token voting.', icon: Shield },
  { title: 'Execute', desc: 'Successful proposals are executed by the protocol.', icon: CheckCircle2 },
];

const sampleProposals = [
  { id: 42, title: 'Grant: zkResearch Guild Q1 Budget', votes: '12.4M FOR • 1.1M AGAINST', status: 'Active' },
  { id: 41, title: 'Parameter Update: Treasury Policy v2', votes: '9.8M FOR • 320k AGAINST', status: 'Passed' },
  { id: 40, title: 'Ecosystem: Integrate L2 liquidity incentives', votes: '7.1M FOR • 540k AGAINST', status: 'Queued' },
];

export default function GovernanceSection() {
  return (
    <section id="governance" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Governance</h2>
          <p className="mt-3 text-white/70">From idea to execution, proposals flow through a transparent, auditable process.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map(({ title, desc, icon: Icon }) => (
            <li key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5">
          <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <h3 className="text-white font-semibold">Recent Proposals</h3>
            <a href="#app" className="text-sm text-white/80 hover:text-white">Open App</a>
          </div>
          <ul className="divide-y divide-white/10">
            {sampleProposals.map((p) => (
              <li key={p.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">[{p.id}] {p.title}</p>
                  <p className="text-xs text-white/60 mt-1">{p.votes}</p>
                </div>
                <span
                  className={`text-xs rounded-full px-3 py-1 border ${
                    p.status === 'Active'
                      ? 'border-amber-400 text-amber-300'
                      : p.status === 'Passed'
                      ? 'border-emerald-400 text-emerald-300'
                      : 'border-indigo-400 text-indigo-300'
                  }`}
                >
                  {p.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
