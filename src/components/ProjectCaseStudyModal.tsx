import React, { useState } from 'react';
import { 
  X, 
  Layers, 
  AlertCircle, 
  CheckCircle2, 
  Lightbulb, 
  Compass, 
  Cpu, 
  GitBranch, 
  ExternalLink 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ 
  project, 
  onClose 
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'implementation' | 'decisions' | 'reflection'>('architecture');

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div 
      id="case-study-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        id="case-study-modal"
        className="w-full max-w-4xl max-h-[90vh] rounded-2xl border border-zinc-800 bg-[#0d0f17] shadow-2xl flex flex-col overflow-hidden text-zinc-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-zinc-800/80 bg-zinc-950/70 flex items-start justify-between relative">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300">
                {project.category}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300">
                Status: {project.status}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
              {project.name}
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-zinc-800 bg-zinc-900/40 px-6 overflow-x-auto no-scrollbar">
          {[
            { id: 'architecture', label: 'Overview & Architecture', icon: Layers },
            { id: 'decisions', label: 'Technical Decisions', icon: Cpu },
            { id: 'implementation', label: 'Challenges & Solutions', icon: AlertCircle },
            { id: 'reflection', label: 'Lessons & Future Work', icon: Lightbulb },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 py-3.5 px-4 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'border-amber-500 text-amber-400 bg-amber-500/5' 
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-sm">
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Overview & Problem */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/30 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" />
                    Overview & Motivation
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                    {caseStudy.overview}
                  </p>
                  <p className="text-zinc-400 text-xs leading-relaxed mt-2 pt-2 border-t border-zinc-800/60">
                    <strong>Why it was built:</strong> {caseStudy.motivation}
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/30 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Target Problem
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                    {caseStudy.problem}
                  </p>
                </div>
              </div>

              {/* Architecture Blueprint Display */}
              <div className="p-6 rounded-xl border border-zinc-800 bg-[#090b10] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-amber-500" />
                    System Architecture & Data Topology
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">Pipeline Model</span>
                </div>

                <div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs text-amber-300/90 overflow-x-auto leading-relaxed">
                  {caseStudy.architecture}
                </div>

                {project.architectureDiagram && (
                  <div className="pt-2 text-xs text-zinc-400">
                    <strong className="text-zinc-300">Data flow sequence: </strong>
                    <code className="px-2 py-0.5 rounded bg-zinc-800/80 text-teal-300 text-[11px]">
                      {project.architectureDiagram}
                    </code>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Applied Technologies & Tooling
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800/60 text-xs font-mono text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'decisions' && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-zinc-100">Engineering Trade-offs & Decisions</h3>
                <p className="text-xs text-zinc-400">
                  Every technical choice reflects a deliberate evaluation between simplicity, developer control, latency, and maintainability.
                </p>
              </div>

              <div className="space-y-3">
                {caseStudy.technicalDecisions.map((decision, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 flex items-start gap-3.5"
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {decision}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950 space-y-2">
                <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">
                  Development Progression
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {caseStudy.development}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'implementation' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Challenges */}
                <div className="p-5 rounded-xl border border-rose-900/30 bg-rose-950/10 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    What Failed or Became Difficult
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {caseStudy.challenges}
                  </p>
                </div>

                {/* Solutions */}
                <div className="p-5 rounded-xl border border-teal-900/30 bg-teal-950/10 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    How Problems Were Approached
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {caseStudy.solutions}
                  </p>
                </div>
              </div>

              {/* What actually worked */}
              <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 space-y-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Empirical Results (What Actually Worked)
                </span>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {caseStudy.results}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'reflection' && (
            <div className="space-y-6">
              {/* Lessons Learned */}
              <div className="p-5 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  Key Engineering Lessons
                </div>
                <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed">
                  {caseStudy.lessons}
                </p>
              </div>

              {/* Future Work */}
              <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Upcoming Roadmap & Open Questions
                </span>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  {caseStudy.futureWork}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-4 border-t border-zinc-800/80 bg-zinc-950/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-zinc-400 font-mono">
            <span>Project ID:</span>
            <span className="text-zinc-200">{project.id}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="px-3 py-1.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 flex items-center gap-1.5 transition-colors"
              >
                <span>View GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
