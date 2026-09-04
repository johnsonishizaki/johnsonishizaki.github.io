import React from 'react';
import { History, Calendar, GitCommit, ArrowRight, Lightbulb, Compass, Clock, CheckCircle2 } from 'lucide-react';
import { BUILD_LOG, GROWTH_FRAMEWORK } from '../data/portfolioData';

export const BuildLog: React.FC = () => {
  return (
    <section id="build-log" className="py-20 bg-zinc-950/40 border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <History className="w-3.5 h-3.5" />
              Verifiable Chronology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Build Log & Growth Map
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              A transparent ledger recording code iterations, architectural modifications, and technical lessons learned over time.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            RECORD TYPE // CHRONOLOGICAL LOG
          </div>
        </div>

        {/* Growth Map Framework (Section 21) */}
        <div className="mb-16 p-8 rounded-3xl border border-zinc-800 bg-[#0d0f17]">
          <div className="flex items-center justify-between mb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Evolutionary Framework
              </span>
              <h3 className="text-xl font-bold text-zinc-100">
                Technical Growth Map
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-500 hidden sm:inline">
              6-STAGE PROGRESSION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {GROWTH_FRAMEWORK.map((stage, idx) => (
              <div 
                key={stage.stage}
                className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
                    <span>STAGE 0{idx + 1}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      stage.status === 'Active' ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' :
                      stage.status === 'In Progress' ? 'bg-teal-500/10 text-teal-300 border border-teal-500/20' :
                      'bg-zinc-800 text-zinc-400'
                    }`}>
                      {stage.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-100">
                    {stage.stage}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/60 text-[10px] font-mono text-zinc-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-amber-500" />
                  <span>Iterative Framework</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Build Log Timeline Entries */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
            <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-amber-500" />
              Chronological Engineering Entries
            </h3>
            <span className="text-xs font-mono text-zinc-500">
              ENTRIES: {BUILD_LOG.length} VERIFIED
            </span>
          </div>

          <div className="space-y-4">
            {BUILD_LOG.map((log) => (
              <div
                key={log.id}
                className="p-6 rounded-2xl border border-zinc-800/80 bg-[#0c0e15] hover:border-zinc-700 transition-all duration-300 space-y-4 shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono pb-3 border-b border-zinc-800/60">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{log.date}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-300 font-semibold">{log.project}</span>
                  </div>
                  <span className="text-zinc-500 text-[11px]">
                    LOG ID: {log.id}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                  {/* What Changed */}
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-teal-400 block">
                      What Changed
                    </span>
                    <p className="text-zinc-200 leading-relaxed">
                      {log.whatChanged}
                    </p>
                  </div>

                  {/* Why it Changed */}
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-400 block">
                      Why it Changed
                    </span>
                    <p className="text-zinc-300 leading-relaxed">
                      {log.whyItChanged}
                    </p>
                  </div>

                  {/* What was Learned */}
                  <div className="space-y-1 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1">
                      <Lightbulb className="w-3 h-3 text-amber-400" />
                      What was Learned
                    </span>
                    <p className="text-zinc-300 text-xs leading-relaxed">
                      {log.whatWasLearned}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty-state / Expansion Notice mandated by Section 20 */}
          <div className="p-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 text-center space-y-2">
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto text-zinc-400">
              <Clock className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-semibold text-zinc-300">
              Ongoing Development Record
            </h4>
            <p className="text-xs text-zinc-500 max-w-lg mx-auto leading-relaxed">
              This build log will continue to grow chronologically as new features, bug fixes, 
              and architectural decisions are committed across active repositories.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
