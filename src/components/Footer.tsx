import React from 'react';
import { Terminal, Mail, ArrowUp, Shield } from 'lucide-react';
import { 
  FULL_NAME, 
  PRIMARY_POSITIONING, 
  TECH_BUSINESS, 
  GITHUB_PROFILE_URL, 
  GITHUB_USERNAME,
  CONTACT_EMAIL,
  IS_EMAIL_ACTIVE 
} from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 bg-[#07080d] py-14 text-xs text-zinc-400 relative">
      
      {/* Subtle Ghanaian Kente geometric accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 kente-accent-strip" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-800/60">
          
          {/* Identity Info (Col 6) */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-base sm:text-lg font-bold text-zinc-100 tracking-tight">
              {FULL_NAME}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-amber-400">
              {PRIMARY_POSITIONING}
            </p>
            <p className="text-xs text-zinc-400 max-w-md leading-relaxed">
              Founder of <strong className="text-zinc-200">{TECH_BUSINESS}</strong>. 
              Engineering software, AI agent orchestration pipelines, and empirical research systems.
            </p>
          </div>

          {/* Quick Links (Col 3) */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 block">
              Navigation
            </span>
            <ul className="space-y-1.5 font-mono text-[11px]">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">Selected Work</a>
              </li>
              <li>
                <a href="#research" className="hover:text-amber-400 transition-colors">Research & Experiments</a>
              </li>
              <li>
                <a href="#technology" className="hover:text-amber-400 transition-colors">Technology Stack</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">{TECH_BUSINESS}</a>
              </li>
              <li>
                <a href="#build-log" className="hover:text-amber-400 transition-colors">Build Log</a>
              </li>
            </ul>
          </div>

          {/* External & Contact (Col 3) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-300 block">
              Direct Channels
            </span>
            <div className="space-y-2 font-mono text-xs">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>github.com/{GITHUB_USERNAME}</span>
              </a>

              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 text-zinc-300 hover:text-amber-400 transition-colors text-left"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>
                  {IS_EMAIL_ACTIVE ? CONTACT_EMAIL : 'Email: Coming soon'}
                </span>
              </button>
            </div>
            
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-zinc-100 text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright and Legal Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-zinc-500">
          <p>
            © 2026 Johnson Bediako Ametsitsi. Built and documented over time.
          </p>
          <div className="flex items-center gap-4">
            <span>Proof-of-Work Platform</span>
            <span>•</span>
            <span>Privacy Guarded</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
