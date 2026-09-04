import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Terminal, Copy, Check, ExternalLink } from 'lucide-react';
import { 
  CONTACT_EMAIL, 
  IS_EMAIL_ACTIVE, 
  FULL_NAME, 
  GITHUB_USERNAME, 
  GITHUB_PROFILE_URL,
  TECH_BUSINESS 
} from '../data/portfolioData';

interface ContactSectionProps {
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContactModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyGitHub = () => {
    navigator.clipboard.writeText(`https://github.com/${GITHUB_USERNAME}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-xs font-mono text-amber-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>COMMUNICATION & INQUIRIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Let&apos;s Build Something
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mx-auto">
            For collaborations, projects, technical discussions, or opportunities, 
            use my professional contact channel.
          </p>

          {/* Email Status Card */}
          <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0d0f17] shadow-xl max-w-lg mx-auto text-left space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-amber-400" />
                Professional Email Channel
              </span>
              {IS_EMAIL_ACTIVE ? (
                <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/30">
                  Active
                </span>
              ) : (
                <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 font-semibold">
                  Coming soon
                </span>
              )}
            </div>

            {IS_EMAIL_ACTIVE ? (
              <div className="space-y-2">
                <p className="text-xs text-zinc-400">
                  Verified enterprise address for {TECH_BUSINESS}:
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-base font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </div>
            ) : (
              <div className="space-y-2 text-xs text-zinc-400">
                <p className="leading-relaxed">
                  Email: <strong className="text-zinc-200 font-mono">Coming soon</strong>
                </p>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  A custom enterprise email domain is being configured for {TECH_BUSINESS}. In compliance with portfolio privacy standards, personal addresses are not published.
                </p>
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-3">
              {IS_EMAIL_ACTIVE ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>
              ) : (
                <button
                  onClick={onOpenContactModal}
                  id="email-me-button"
                  className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-medium text-xs transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Email Me (Status Details)</span>
                </button>
              )}

              <button
                onClick={handleCopyGitHub}
                className="px-4 py-2.5 rounded-xl border border-zinc-700 hover:border-zinc-500 bg-zinc-900 text-xs font-mono text-zinc-300 transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied GitHub' : 'Copy GitHub'}</span>
              </button>
            </div>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            DIRECT INQUIRIES // {FULL_NAME} // {TECH_BUSINESS}
          </div>

        </div>

      </div>
    </section>
  );
};
