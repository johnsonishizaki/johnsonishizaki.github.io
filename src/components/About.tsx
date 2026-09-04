import React from 'react';
import { 
  Code2, 
  Cpu, 
  Compass, 
  Lightbulb, 
  Check, 
  Terminal, 
  Globe, 
  Sparkles 
} from 'lucide-react';
import { ABOUT_ME, FULL_NAME, TECH_BUSINESS } from '../data/portfolioData';
import { KenteDivider } from './KenteDivider';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Engineering Mindset & Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              About Johnson Bediako Ametsitsi
            </h2>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            LOCATION: GHANA // GLOBAL ENGINEERING HORIZON
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-800/90 bg-zinc-900/30 space-y-4">
              <p className="text-base sm:text-lg text-zinc-100 font-medium leading-relaxed">
                {ABOUT_ME.intro}
              </p>
              
              {ABOUT_ME.bioParagraphs.map((para, idx) => (
                <p key={idx} className="text-sm text-zinc-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/50 space-y-1">
                <div className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  Engineering Independence
                </div>
                <p className="text-xs text-zinc-400">
                  Building functional systems from first principles, dissecting APIs, and writing clean, maintainable logic.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950/50 space-y-1">
                <div className="text-xs font-mono text-teal-400 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  African Innovation
                </div>
                <p className="text-xs text-zinc-400">
                  Grounding technology solutions in local African needs while benchmarking against global technical quality.
                </p>
              </div>
            </div>
          </div>

          {/* Primary Areas of Curiosity (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0d0f17] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-200 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-500" />
                  Areas of Active Focus
                </h3>
                <span className="text-[10px] font-mono text-zinc-500">8 CORE DOMAINS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ABOUT_ME.passions.map((passion) => (
                  <div 
                    key={passion}
                    className="p-3 rounded-xl border border-zinc-800/70 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-zinc-700 transition-colors flex items-center gap-2.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span className="text-xs font-medium text-zinc-200">
                      {passion}
                    </span>
                  </div>
                ))}
              </div>

              {/* Business Note */}
              <div className="mt-4 pt-4 border-t border-zinc-800/80 text-xs text-zinc-400 space-y-1">
                <span className="text-zinc-500 font-mono text-[10px] uppercase block">
                  Entrepreneurial Initiative
                </span>
                <p className="leading-relaxed">
                  Founder of <strong className="text-zinc-200">{TECH_BUSINESS}</strong>, providing bespoke digital architecture, web systems, and technical consulting.
                </p>
              </div>
            </div>

            {/* Privacy & Professional Demarcation */}
            <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-950/40 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
              <span>PRIVACY POLICY: STRICT</span>
              <span>VERIFIED PUBLIC RECORD</span>
            </div>
          </div>

        </div>

        <KenteDivider />
      </div>
    </section>
  );
};
