import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  GitBranch, 
  FileText,
  Filter,
  CheckCircle2,
  Clock,
  FlaskConical
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterTabs = [
    'All',
    'Software',
    'AI',
    'Research',
    'Robotics',
    'Business',
    'Experimental'
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return PROJECTS;
    return PROJECTS.filter(project => {
      if (selectedFilter === 'Experimental') {
        return project.status === 'Experimental' || project.category === 'Experimental';
      }
      return project.category === selectedFilter;
    });
  }, [selectedFilter]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Development':
        return (
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            In Development
          </span>
        );
      case 'Research':
        return (
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 flex items-center gap-1">
            <FlaskConical className="w-3 h-3 text-teal-400" />
            Research
          </span>
        );
      case 'Experimental':
        return (
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 flex items-center gap-1">
            <Clock className="w-3 h-3 text-sky-400" />
            Experimental
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300">
            {status}
          </span>
        );
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5" />
              Technical Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
              Selected Work & Systems
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Concrete projects demonstrating system architecture, AI agent workflows, hardware experimentation, and problem solving.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            SHOWCASE: 06 ACTIVE SYSTEMS
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-zinc-800/80">
          <div className="text-xs font-mono text-zinc-500 flex items-center gap-1 mr-2 shrink-0">
            <Filter className="w-3 h-3" />
            <span>Filter:</span>
          </div>
          {filterTabs.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500 text-black font-semibold shadow-md shadow-amber-500/10'
                    : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-zinc-800/80 bg-[#0d0f17] hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-black/60"
            >
              <div className="p-6 space-y-4">
                
                {/* Header Metadata */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {project.category}
                    </span>
                    {getStatusBadge(project.status)}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600">
                    ID: {project.id}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Problem Statement Snippet */}
                <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">
                    Problem Handled
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
                    {project.problem}
                  </p>
                </div>

                {/* Architecture Snippet if available */}
                {project.architectureDiagram && (
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1">
                      <GitBranch className="w-3 h-3 text-amber-400" />
                      Architecture Flow
                    </span>
                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-[11px] text-teal-300 truncate">
                      {project.architectureDiagram}
                    </div>
                  </div>
                )}

                {/* Applied Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 border-t border-zinc-800/80 bg-zinc-950/40 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-100 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Inspect Case Study</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
                    title="View GitHub repository"
                    aria-label={`View GitHub for ${project.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Transparency Footnote */}
        <div className="mt-8 text-center text-xs font-mono text-zinc-500">
          Strict Anti-Fabrication Notice: Statuses reflect actual engineering stage (In Development / Research / Experimental).
        </div>

      </div>
    </section>
  );
};
