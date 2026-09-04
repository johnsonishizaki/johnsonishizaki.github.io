import React, { useState, useMemo } from 'react';
import { Cpu, Code2, Database, Wrench, Layers, CheckCircle2 } from 'lucide-react';
import { TECHNOLOGIES } from '../data/portfolioData';
import { TechFamiliarity } from '../types';

export const TechnologyStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'AI', 'Backend / Data', 'Tools'];

  const filteredTech = useMemo(() => {
    if (selectedCategory === 'All') return TECHNOLOGIES;
    return TECHNOLOGIES.filter(t => t.category === selectedCategory);
  }, [selectedCategory]);

  const getLevelBadge = (level: TechFamiliarity) => {
    switch (level) {
      case 'Strong':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 font-semibold">
            Strong
          </span>
        );
      case 'Building with':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 font-semibold">
            Building with
          </span>
        );
      case 'Familiar':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">
            Familiar
          </span>
        );
      case 'Exploring':
        return (
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
            Exploring
          </span>
        );
    }
  };

  const categoryIcons: Record<string, React.ElementType> = {
    'Languages': Code2,
    'AI': Cpu,
    'Backend / Data': Database,
    'Tools': Wrench,
  };

  return (
    <section id="technology" className="py-20 bg-zinc-950/40 border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Technical Competencies & Tooling
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Technology Stack
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Honest capability mapping across languages, artificial intelligence, backend infrastructure, and deployment toolchains.
            </p>
          </div>

          {/* Level Legend */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-zinc-500 text-[10px] uppercase mr-1">Familiarity:</span>
            <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30 text-[10px]">Strong</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[10px]">Building with</span>
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30 text-[10px]">Familiar</span>
            <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30 text-[10px]">Exploring</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-zinc-800/60">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500 text-black font-semibold shadow-md shadow-amber-500/10'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTech.map((item, idx) => {
            const Icon = categoryIcons[item.category] || Layers;

            return (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-zinc-800/80 bg-[#0d0f17] hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    {getLevelBadge(item.level)}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.note}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>VERIFIED USE</span>
                  <span>PRODUCTION // LAB</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
