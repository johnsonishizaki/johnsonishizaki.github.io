import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Terminal, ArrowUpRight } from 'lucide-react';
import { FULL_NAME, GITHUB_PROFILE_URL } from '../data/portfolioData';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'brand', 'about', 'projects', 'research', 'how-i-build', 'technology', 'services', 'build-log', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#projects', id: 'projects' },
    { label: 'Research', href: '#research', id: 'research' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Build Log', href: '#build-log', id: 'build-log' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0c12]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/40' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
        >
          {/* Subtle Kente Geometric Emblem */}
          <div className="w-8 h-8 rounded-lg border border-amber-500/40 bg-zinc-950 flex items-center justify-center relative overflow-hidden group-hover:border-amber-400 transition-colors">
            <div className="w-3.5 h-3.5 rotate-45 border border-amber-500 bg-amber-500/10" />
            <div className="absolute w-1.5 h-1.5 rotate-45 bg-teal-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold text-zinc-100 tracking-tight group-hover:text-amber-400 transition-colors">
              {FULL_NAME}
            </span>
            <span className="text-[10px] font-mono text-zinc-400 hidden sm:block">
              Software • AI • Entrepreneurship
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-amber-400 bg-zinc-900 border border-zinc-800'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Group */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 text-xs transition-colors"
            title="Search portfolio (Cmd+K)"
            aria-label="Search portfolio"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden md:inline font-mono text-[11px]">Search</span>
            <kbd className="hidden md:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
              ⌘K
            </kbd>
          </button>

          {/* Contact Direct Trigger */}
          <button
            onClick={onOpenContact}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold transition-colors"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-zinc-800 bg-zinc-900/70 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c12]/95 backdrop-blur-xl border-b border-zinc-800 p-5 space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800/60 text-xs font-mono text-zinc-400">
            <span>NAVIGATION</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Active System
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-amber-400 hover:bg-zinc-900 border border-transparent hover:border-zinc-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-800/60 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 py-2 text-center rounded-lg bg-amber-500 text-black text-xs font-semibold"
            >
              Contact Johnson
            </button>
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 hover:text-white flex items-center gap-1"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
