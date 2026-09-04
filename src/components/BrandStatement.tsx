import React from 'react';
import { Hammer, Search, FileText, TrendingUp, CheckCircle2 } from 'lucide-react';
import { BRAND_PHILOSOPHY } from '../data/portfolioData';

export const BrandStatement: React.FC = () => {
  const icons = [Hammer, Search, FileText, TrendingUp];

  return (
    <section id="brand" className="py-16 bg-zinc-950/60 border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-xs font-mono text-amber-400">
            <span>CORE PHILOSOPHY & PROOF-OF-WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-100 tracking-tight">
            {BRAND_PHILOSOPHY.headline}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {BRAND_PHILOSOPHY.subtext}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_PHILOSOPHY.pillars.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={pillar.label}
                className="p-6 rounded-2xl border border-zinc-800/90 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl border border-zinc-700/80 bg-zinc-950 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 group-hover:border-amber-500/40 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {pillar.label}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-teal-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Disciplined Practice</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Rigor Callout Banner */}
        <div className="mt-12 p-5 rounded-2xl border border-zinc-800 bg-[#0c0e15] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
            <span className="text-zinc-300">
              <strong className="text-zinc-100 font-semibold">Evidence over Claims: </strong> 
              No exaggerated credentials or fabricated numbers. Every project and experiment is published with verified status badges and transparent limitations.
            </span>
          </div>
          <span className="font-mono text-zinc-500 shrink-0">
            STANDARDS // ENFORCED
          </span>
        </div>

      </div>
    </section>
  );
};
