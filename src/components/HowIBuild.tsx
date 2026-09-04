import React, { useState } from 'react';
import { 
  Compass, 
  HelpCircle, 
  Search, 
  Hammer, 
  CheckCircle, 
  Bug, 
  FileText, 
  TrendingUp, 
  Send,
  ArrowRight
} from 'lucide-react';
import { BUILD_STAGES } from '../data/portfolioData';

export const HowIBuild: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const icons = [
    HelpCircle,
    Search,
    Hammer,
    CheckCircle,
    Bug,
    FileText,
    TrendingUp,
    Send
  ];

  return (
    <section id="how-i-build" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-xs font-mono text-amber-400">
            <Compass className="w-3.5 h-3.5" />
            <span>ENGINEERING PROCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            How I Build
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Software craftsmanship is defined by the discipline of the engineering loop. 
            From initial constraint isolation to transparent post-ship iteration:
          </p>
        </div>

        {/* 8-Stage Progression Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
          {BUILD_STAGES.map((stage, idx) => {
            const Icon = icons[idx];
            const isActive = activeStep === idx;

            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl border transition-all text-left flex flex-col justify-between ${
                  isActive
                    ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/10'
                    : 'border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-800/50 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-amber-400' : 'text-zinc-500'}`}>
                    {stage.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-zinc-400'}`} />
                </div>
                <div className={`text-xs font-bold ${isActive ? 'text-zinc-100' : 'text-zinc-300'}`}>
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="p-8 rounded-2xl border border-zinc-800 bg-[#0d0f17] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                PHASE {BUILD_STAGES[activeStep].step}
              </span>
              <h3 className="text-2xl font-bold text-zinc-100">
                {BUILD_STAGES[activeStep].title}
              </h3>
            </div>

            <p className="text-base text-zinc-200 leading-relaxed font-medium">
              {BUILD_STAGES[activeStep].summary}
            </p>

            <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <span className="text-zinc-500">
                Loop Principle: Systematic investigation over trial-and-error
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : BUILD_STAGES.length - 1))}
                  className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white"
                >
                  Previous Phase
                </button>
                <button
                  onClick={() => setActiveStep(prev => (prev < BUILD_STAGES.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 flex items-center gap-1"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
