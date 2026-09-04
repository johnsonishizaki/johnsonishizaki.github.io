import React, { useState } from 'react';
import { Mail, X, Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';
import { 
  CONTACT_EMAIL, 
  IS_EMAIL_ACTIVE, 
  GITHUB_PROFILE_URL, 
  GITHUB_USERNAME,
  FULL_NAME 
} from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyGitHub = () => {
    navigator.clipboard.writeText(`https://github.com/${GITHUB_USERNAME}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id="contact-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        id="contact-modal-content"
        className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-[#0d0f17] shadow-2xl p-6 relative overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Subtle geometric accent header */}
        <div className="absolute top-0 left-0 right-0 h-1 kente-accent-strip" />

        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Communication Channel
            </span>
            <h3 className="text-xl font-bold text-zinc-100 mt-1">Get in Touch</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed mb-6">
          For technical collaborations, enterprise inquiries with Ishizaki Tech Services, 
          or architectural discussions with <strong className="text-zinc-100">{FULL_NAME}</strong>:
        </p>

        {IS_EMAIL_ACTIVE ? (
          <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-950/20 mb-6">
            <div className="text-xs font-mono text-teal-400 mb-1">Official Professional Email</div>
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-base font-semibold text-zinc-100 hover:text-teal-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              {CONTACT_EMAIL}
            </a>
          </div>
        ) : (
          <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-950/20 mb-6 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 font-medium">Public Email Status</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono">
                Coming soon
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-normal">
              A dedicated professional domain email for <strong>Ishizaki Tech Services</strong> is currently being provisioned.
              In accordance with portfolio privacy and security guidelines, personal emails are not published.
            </p>
          </div>
        )}

        {/* Primary Contact Alternative: GitHub */}
        <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 mb-6">
          <div className="text-xs font-mono text-zinc-400 mb-2">Verified Public Developer Profile</div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-mono text-zinc-200 truncate">
              github.com/{GITHUB_USERNAME}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyGitHub}
                className="px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 transition-colors flex items-center gap-1.5"
                title="Copy GitHub link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-teal-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <span>Visit</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
