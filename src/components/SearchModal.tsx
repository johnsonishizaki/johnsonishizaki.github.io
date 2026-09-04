import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, FolderGit2, FlaskConical, Cpu, History, ArrowRight } from 'lucide-react';
import { PROJECTS, RESEARCH_EXPERIMENTS, TECHNOLOGIES, BUILD_LOG } from '../data/portfolioData';
import { Project } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ 
  isOpen, 
  onClose,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        projects: PROJECTS.slice(0, 3),
        research: RESEARCH_EXPERIMENTS.slice(0, 2),
        tech: TECHNOLOGIES.slice(0, 4),
        buildLog: BUILD_LOG.slice(0, 2)
      };
    }

    return {
      projects: PROJECTS.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.tagline.toLowerCase().includes(q) ||
        p.problem.toLowerCase().includes(q) ||
        p.technologies.some(t => t.toLowerCase().includes(q))
      ),
      research: RESEARCH_EXPERIMENTS.filter(r => 
        r.title.toLowerCase().includes(q) || 
        r.question.toLowerCase().includes(q) ||
        r.tags.some(t => t.toLowerCase().includes(q)) ||
        r.tools.some(t => t.toLowerCase().includes(q))
      ),
      tech: TECHNOLOGIES.filter(t => 
        t.name.toLowerCase().includes(q) || 
        t.category.toLowerCase().includes(q) ||
        t.note.toLowerCase().includes(q)
      ),
      buildLog: BUILD_LOG.filter(b => 
        b.project.toLowerCase().includes(q) || 
        b.whatChanged.toLowerCase().includes(q) ||
        b.whatWasLearned.toLowerCase().includes(q)
      )
    };
  }, [query]);

  const hasAnyResults = 
    searchResults.projects.length > 0 ||
    searchResults.research.length > 0 ||
    searchResults.tech.length > 0 ||
    searchResults.buildLog.length > 0;

  if (!isOpen) return null;

  return (
    <div 
      id="search-modal-backdrop" 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        id="search-modal-container"
        className="w-full max-w-2xl rounded-xl border border-zinc-800 bg-[#0d0f16] shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800/80 bg-zinc-900/40">
          <Search className="w-5 h-5 text-amber-500/80 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            id="global-search-input"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search projects, research notes, tech stack, or build logs..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-zinc-200 text-xs rounded mr-2"
              aria-label="Clear query"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-6 text-sm">
          {!hasAnyResults && (
            <div className="text-center py-12 text-zinc-500">
              <p>No matching technical records found for &quot;{query}&quot;</p>
              <p className="text-xs text-zinc-600 mt-1">Try searching for &quot;AI&quot;, &quot;Robotics&quot;, &quot;Python&quot;, or &quot;OlagAir&quot;</p>
            </div>
          )}

          {/* Projects Results */}
          {searchResults.projects.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-amber-400 uppercase">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Selected Projects</span>
              </div>
              <div className="space-y-2">
                {searchResults.projects.map(p => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(p);
                    }}
                    className="w-full text-left p-3 rounded-lg border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-amber-500/30 transition-all flex items-start justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors">
                          {p.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-700 bg-zinc-800/80 text-zinc-300 font-mono">
                          {p.status}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{p.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all mt-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Research Results */}
          {searchResults.research.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-teal-400 uppercase">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Research & Experiments</span>
              </div>
              <div className="space-y-2">
                {searchResults.research.map(r => (
                  <a
                    key={r.id}
                    href="#research"
                    onClick={onClose}
                    className="block p-3 rounded-lg border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-teal-500/30 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-zinc-100 group-hover:text-teal-400 transition-colors">
                        {r.title}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {r.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1 font-mono">Q: {r.question}</p>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Technology Results */}
          {searchResults.tech.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-zinc-400 uppercase">
                <Cpu className="w-3.5 h-3.5" />
                <span>Technologies</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {searchResults.tech.map((t, idx) => (
                  <a
                    key={idx}
                    href="#technology"
                    onClick={onClose}
                    className="p-2.5 rounded-lg border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-800/40 transition-colors flex items-center justify-between"
                  >
                    <span className="text-xs font-medium text-zinc-200">{t.name}</span>
                    <span className="text-[10px] font-mono text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-800">
                      {t.level}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Build Log Results */}
          {searchResults.buildLog.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-wider text-zinc-400 uppercase">
                <History className="w-3.5 h-3.5" />
                <span>Build Log Records</span>
              </div>
              <div className="space-y-2">
                {searchResults.buildLog.map(b => (
                  <a
                    key={b.id}
                    href="#build-log"
                    onClick={onClose}
                    className="block p-2.5 rounded-lg border border-zinc-800/40 bg-zinc-900/20 hover:bg-zinc-800/30 transition-colors text-xs"
                  >
                    <div className="flex items-center justify-between text-zinc-400 text-[11px] font-mono">
                      <span>{b.project}</span>
                      <span>{b.date}</span>
                    </div>
                    <p className="text-zinc-300 mt-1 line-clamp-1">{b.whatChanged}</p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-zinc-800/80 bg-zinc-950/60 text-[11px] text-zinc-500 flex items-center justify-between">
          <span>Client-side instant search</span>
          <span className="font-mono">Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
