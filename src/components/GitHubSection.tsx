import React from 'react';
import { Terminal, ExternalLink, GitBranch, Shield, Code, Check } from 'lucide-react';
import { GITHUB_USERNAME, GITHUB_PROFILE_URL, GITHUB_REPO } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-950/60 border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-zinc-800 bg-[#0c0e15] p-8 sm:p-12 relative overflow-hidden">
          
          {/* Subtle Ghanaian Geometric Kente border header */}
          <div className="absolute top-0 left-0 right-0 h-1 kente-accent-strip" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-mono text-amber-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>OPEN SOURCE & PUBLIC REPOSITORIES</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
                Public Code Interface & GitHub
              </h2>

              <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                Open-source development experiments, script harnesses, robotics control loops, 
                and this portfolio&apos;s source code are hosted publicly on GitHub.
              </p>

              {/* Verified Identity Box */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 font-mono text-xs text-zinc-300 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Handle:</span>
                  <span className="text-amber-400 font-bold">github.com/{GITHUB_USERNAME}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500">Pages Repo:</span>
                  <span className="text-teal-400 font-bold">{GITHUB_REPO}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-3">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noreferrer noopener"
                id="view-github-button"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 group"
              >
                <Terminal className="w-4 h-4" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-[11px] font-mono text-zinc-500 text-center lg:text-right">
                Verified developer identity: @{GITHUB_USERNAME}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
