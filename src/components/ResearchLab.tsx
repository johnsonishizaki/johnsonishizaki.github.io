import React, { useState, useMemo } from 'react';
import { 
  FlaskConical, 
  HelpCircle, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Tag,
  ArrowRight
} from 'lucide-react';
import { RESEARCH_EXPERIMENTS } from '../data/portfolioData';
import { ResearchExperiment, ResearchTag } from '../types';

export const ResearchLab: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(RESEARCH_EXPERIMENTS[0].id);

  const tags: ('All' | ResearchTag)[] = [
    'All',
    'AI',
    'Systems',
    'Robotics',
    'Software',
    'Experiments',
    'Web',
    'Product'
  ];

  const filteredExperiments = useMemo(() => {
    if (selectedTag === 'All') return RESEARCH_EXPERIMENTS;
    return RESEARCH_EXPERIMENTS.filter(exp => 
      exp.tags.includes(selectedTag as ResearchTag)
    );
  }, [selectedTag]);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="research" className="py-20 bg-zinc-950/40 border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <FlaskConical className="w-3.5 h-3.5" />
              Engineering Lab Notebook
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Research & Technical Experiments
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Empirical investigations, control loop testing, and AI pipeline benchmarks. 
              Documenting hypotheses, observed anomalies, and actionable findings.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            SIGNATURE FEATURE // OPEN LAB NOTES
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-zinc-800/60">
          <span className="text-xs font-mono text-zinc-500 flex items-center gap-1 shrink-0 mr-1">
            <Tag className="w-3 h-3" />
            Topic:
          </span>
          {tags.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-teal-500 text-black font-semibold shadow-md shadow-teal-500/10'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Lab Notebook Cards */}
        <div className="space-y-6">
          {filteredExperiments.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="rounded-2xl border border-zinc-800/90 bg-[#0c0e16] hover:border-zinc-700 transition-all duration-300 overflow-hidden shadow-xl"
              >
                {/* Header Strip */}
                <div 
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                  onClick={() => toggleExpand(exp.id)}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-700 text-teal-300">
                        {exp.id}
                      </span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-zinc-800 text-zinc-300">
                        {exp.status}
                      </span>
                      {exp.tags.map(t => (
                        <span key={t} className="text-[10px] font-mono text-zinc-400">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100 hover:text-teal-300 transition-colors">
                      {exp.title}
                    </h3>
                  </div>

                  <button 
                    className="self-start sm:self-center px-3 py-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800/80 text-xs text-zinc-300 flex items-center gap-1.5 shrink-0 hover:bg-zinc-700 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Collapse Lab Record' : 'View Full Lab Notes'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Always-visible Summary: Question & Hypothesis */}
                <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm border-t border-zinc-800/50 pt-4">
                  <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
                    <div className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5" />
                      Research Question
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      {exp.question}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-1">
                    <div className="text-xs font-mono text-teal-400 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Tested Hypothesis
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      {exp.hypothesis}
                    </p>
                  </div>
                </div>

                {/* Expanded Deep-Dive Lab Notes */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-800/80 space-y-6 text-xs sm:text-sm animate-fadeIn">
                    
                    {/* Motivation & Method */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                          Motivation
                        </span>
                        <p className="text-zinc-300 leading-relaxed">
                          {exp.motivation}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                          Methodology & Test Setup
                        </span>
                        <p className="text-zinc-300 leading-relaxed">
                          {exp.method}
                        </p>
                      </div>
                    </div>

                    {/* Tools & Observations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800 space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1">
                          <Terminal className="w-3.5 h-3.5 text-teal-400" />
                          Instruments & Tools Used
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tools.map(tool => (
                            <span 
                              key={tool}
                              className="px-2.5 py-1 rounded bg-zinc-800 text-[11px] font-mono text-zinc-200 border border-zinc-700"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800 space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                          Experimental Observations
                        </span>
                        <p className="text-zinc-300 text-xs leading-relaxed">
                          {exp.observations}
                        </p>
                      </div>
                    </div>

                    {/* Results & Lessons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-800/40 space-y-1">
                        <span className="text-xs font-mono text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Validated Results
                        </span>
                        <p className="text-zinc-200 leading-relaxed">
                          {exp.results}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 space-y-1">
                        <span className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          Key Lesson Learned
                        </span>
                        <p className="text-zinc-200 leading-relaxed">
                          {exp.lessons}
                        </p>
                      </div>
                    </div>

                    {/* Future Questions */}
                    {exp.futureQuestions && exp.futureQuestions.length > 0 && (
                      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2">
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                          Open Research Questions
                        </span>
                        <ul className="space-y-1.5">
                          {exp.futureQuestions.map((q, idx) => (
                            <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                              <span className="text-amber-500 font-mono">→</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
