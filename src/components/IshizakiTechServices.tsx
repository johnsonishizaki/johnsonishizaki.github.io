import React from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  Box, 
  Wrench, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { ISHIZAKI_TECH_SERVICES, FULL_NAME } from '../data/portfolioData';

interface IshizakiTechServicesProps {
  onOpenContact: () => void;
}

export const IshizakiTechServices: React.FC<IshizakiTechServicesProps> = ({ 
  onOpenContact 
}) => {
  const capabilityIcons = [Code2, Cpu, Box, Wrench];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Entrepreneurial & Technical Venture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              {ISHIZAKI_TECH_SERVICES.name}
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              {ISHIZAKI_TECH_SERVICES.mission}
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            INITIATIVE // CLIENT SERVICES & SYSTEMS
          </div>
        </div>

        {/* Services / Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ISHIZAKI_TECH_SERVICES.capabilities.map((cap, idx) => {
            const Icon = capabilityIcons[idx] || Briefcase;

            return (
              <div
                key={cap.title}
                className="p-6 rounded-2xl border border-zinc-800/80 bg-[#0d0f17] hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-100 group-hover:text-amber-400 transition-colors mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-800/80 flex items-center gap-1.5 text-[10px] font-mono text-teal-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Custom Deliverable</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Principles & Project CTA Container */}
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-8 sm:p-10 relative overflow-hidden">
          
          {/* Subtle Ghanaian accent background strip */}
          <div className="absolute top-0 left-0 right-0 h-1 kente-accent-strip" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-mono text-teal-300">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Operating Philosophy</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100">
                Engineering Integrity in Every System
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {ISHIZAKI_TECH_SERVICES.principles.map((principle, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{principle}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center space-y-3">
              <button
                onClick={onOpenContact}
                id="discuss-project-cta"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 group"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-[11px] font-mono text-zinc-500 text-center lg:text-right">
                Led by Johnson Bediako Ametsitsi
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
