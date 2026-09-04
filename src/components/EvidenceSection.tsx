import React from 'react';
import { ShieldCheck, FileCode, GitBranch, Terminal, ExternalLink, CheckCircle } from 'lucide-react';
import { EVIDENCE_ITEMS, GITHUB_PROFILE_URL } from '../data/portfolioData';

export const EvidenceSection: React.FC = () => {
  return (
    <section id="evidence" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verifiable Artifacts
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Featured Technical Evidence
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Philosophy: <strong className="text-zinc-200">&laquo;Show the work.&raquo;</strong> Concrete architecture diagrams, 
              empirical test logs, repository links, and data specifications.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            PROVENANCE // REPRODUCIBLE DATA
          </div>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVIDENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl border border-zinc-800/80 bg-[#0d0f17] hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {item.type}
                  </span>
                  <span className={`text-[10px] ${
                    item.status === 'Documented' ? 'text-teal-400' : 'text-amber-400'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-100">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-zinc-500">
                  REF: {item.id}
                </span>
                <a
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-mono text-[11px]"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Long-term Extensibility Banner */}
        <div className="mt-12 p-5 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 flex items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span>EXTENSIBILITY: Architecture ready for technical papers, video benchmarks & formal schemas</span>
          <span>EST. 2026</span>
        </div>

      </div>
    </section>
  );
};
