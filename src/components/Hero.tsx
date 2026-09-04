import React from 'react';
import { ArrowRight, Terminal, Mail, Sparkles, Shield, Cpu } from 'lucide-react';
import { 
  FULL_NAME, 
  PRIMARY_POSITIONING, 
  SUPPORTING_DESCRIPTOR, 
  GITHUB_PROFILE_URL,
  IS_EMAIL_ACTIVE,
  CONTACT_EMAIL
} from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden kente-grid-bg"
    >
      {/* Ambient background glows with subtle warm gold and deep teal */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Command-Center Header Tag */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-mono text-zinc-300">
                Independent Engineering Portfolio & Lab
              </span>
              <span className="text-zinc-600 text-xs">•</span>
              <span className="text-[11px] font-mono text-amber-400/90 hidden sm:inline">
                Ishizaki Tech Services
              </span>
            </div>

            {/* Public Identity - Name Displayed Exactly */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-100 tracking-tight leading-[1.1]">
                {FULL_NAME}
              </h1>

              {/* Primary Positioning */}
              <div className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-amber-400 via-amber-200 to-teal-300 bg-clip-text text-transparent">
                {PRIMARY_POSITIONING}
              </div>

              {/* Optional Supporting Descriptor */}
              <p className="text-sm sm:text-base font-mono text-zinc-400">
                {SUPPORTING_DESCRIPTOR}
              </p>
            </div>

            {/* Editorial Supporting Description */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
              A verifiable public record of engineering thinking, active development, and applied problem solving. 
              This site documents my work across <strong className="text-zinc-100">software systems</strong>,{' '}
              <strong className="text-zinc-100">artificial intelligence pipelines</strong>,{' '}
              <strong className="text-zinc-100">product architecture</strong>,{' '}
              <strong className="text-zinc-100">control systems research</strong>, and{' '}
              <strong className="text-zinc-100">entrepreneurship</strong>.
            </p>

            {/* Verification Metadata Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-zinc-400">
              <div className="p-2.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40">
                <span className="text-[10px] text-zinc-500 uppercase block">Methodology</span>
                <span className="text-zinc-200 font-semibold">Proof of Work</span>
              </div>
              <div className="p-2.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40">
                <span className="text-[10px] text-zinc-500 uppercase block">Active Business</span>
                <span className="text-zinc-200 font-semibold">Ishizaki Tech Services</span>
              </div>
              <div className="p-2.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40 col-span-2 sm:col-span-1">
                <span className="text-[10px] text-zinc-500 uppercase block">Public GitHub</span>
                <span className="text-amber-400 font-semibold">@johnsonishizaki</span>
              </div>
            </div>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary CTA */}
              <a
                href="#projects"
                id="hero-explore-cta"
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-lg shadow-amber-500/10 flex items-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noreferrer noopener"
                id="hero-github-cta"
                className="px-5 py-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-amber-500" />
                <span>View GitHub</span>
              </a>

              {/* Additional CTA */}
              <button
                onClick={onOpenContact}
                id="hero-contact-cta"
                className="px-4 py-3 rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-950/60 text-zinc-300 hover:text-zinc-100 text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Contact</span>
                {!IS_EMAIL_ACTIVE && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                    Coming soon
                  </span>
                )}
              </button>
            </div>

          </div>

          {/* Right Hero Visualization */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
