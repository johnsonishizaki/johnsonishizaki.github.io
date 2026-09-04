import React, { useState } from 'react';
import { Cpu, Hammer, FlaskConical, Box, Compass, Briefcase } from 'lucide-react';

interface EcosystemNode {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  x: number; // percentage
  y: number; // percentage
  color: string;
  glowColor: string;
}

const NODES: EcosystemNode[] = [
  { id: 'build', label: 'Build', sublabel: 'Software & Systems', icon: Hammer, x: 22, y: 20, color: '#D97706', glowColor: 'rgba(217, 119, 6, 0.4)' },
  { id: 'ai', label: 'AI', sublabel: 'Agents & Pipelines', icon: Cpu, x: 78, y: 20, color: '#14B8A6', glowColor: 'rgba(20, 184, 166, 0.4)' },
  { id: 'research', label: 'Research', sublabel: 'Empirical Labs', icon: FlaskConical, x: 12, y: 65, color: '#38BDF8', glowColor: 'rgba(56, 189, 248, 0.4)' },
  { id: 'products', label: 'Products', sublabel: 'Applied Solutions', icon: Box, x: 88, y: 65, color: '#F59E0B', glowColor: 'rgba(245, 158, 11, 0.4)' },
  { id: 'experiments', label: 'Experiments', sublabel: 'Control & Hardware', icon: Compass, x: 32, y: 88, color: '#10B981', glowColor: 'rgba(16, 185, 129, 0.4)' },
  { id: 'business', label: 'Business', sublabel: 'Ishizaki Tech Services', icon: Briefcase, x: 68, y: 88, color: '#F97316', glowColor: 'rgba(249, 115, 22, 0.4)' },
];

export const HeroVisual: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center select-none">
      {/* Background ambient circular geometry */}
      <div className="absolute inset-0 rounded-full border border-zinc-800/40 opacity-70 pointer-events-none animate-pulse" />
      <div className="absolute inset-8 rounded-full border border-dashed border-zinc-800/60 pointer-events-none" />
      <div className="absolute inset-20 rounded-full border border-zinc-800/30 pointer-events-none" />
      
      {/* Subtle Ghanaian Geometric Cross-Grid Accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-teal-500 to-transparent" />
      </div>

      {/* SVG Connecting Lines between Central Core and Nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {NODES.map((node) => {
          const isHovered = hoveredNode === node.id;
          return (
            <g key={node.id}>
              {/* Primary connection line to center (50%, 50%) */}
              <line
                x1="50%"
                y1="50%"
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke={isHovered ? node.color : 'rgba(113, 113, 122, 0.3)'}
                strokeWidth={isHovered ? 2 : 1}
                strokeDasharray={isHovered ? 'none' : '4 4'}
                className="transition-all duration-300"
              />
              
              {/* Subtle geometric midpoint marker */}
              <circle
                cx={`${(50 + node.x) / 2}%`}
                cy={`${(50 + node.y) / 2}%`}
                r={isHovered ? 3 : 1.5}
                fill={isHovered ? node.color : '#52525b'}
                className="transition-all duration-300"
              />
            </g>
          );
        })}

        {/* Outer perimeter subtle web links */}
        <polygon
          points="22,20 78,20 88,65 68,88 32,88 12,65"
          fill="none"
          stroke="rgba(255, 255, 255, 0.04)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
      </svg>

      {/* Central Core ("Johnson Bediako Ametsitsi" Ecosystem Hub) */}
      <div 
        className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border border-zinc-700/80 bg-[#0c0e15]/90 backdrop-blur-md flex flex-col items-center justify-center p-2 shadow-2xl text-center transition-transform duration-300 hover:scale-105"
        style={{
          boxShadow: '0 0 35px rgba(217, 119, 6, 0.15), inset 0 0 15px rgba(20, 184, 166, 0.08)'
        }}
      >
        <div className="w-2 h-2 rounded-full bg-amber-500 mb-1.5 animate-ping" />
        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">Core</span>
        <span className="text-xs sm:text-sm font-bold text-zinc-100 leading-tight">Digital</span>
        <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">
          Ecosystem
        </span>
        <span className="text-[9px] font-mono text-zinc-500 mt-1">J. B. Ametsitsi</span>
      </div>

      {/* Peripheral Ecosystem Nodes */}
      {NODES.map((node) => {
        const Icon = node.icon;
        const isHovered = hoveredNode === node.id;
        return (
          <div
            key={node.id}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
          >
            <div 
              className={`p-2 sm:p-2.5 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                isHovered 
                  ? 'bg-zinc-900 border-zinc-600 scale-110 shadow-lg' 
                  : 'bg-zinc-950/80 border-zinc-800/80 hover:border-zinc-700'
              }`}
              style={{
                boxShadow: isHovered ? `0 0 20px ${node.glowColor}` : 'none'
              }}
            >
              <div 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                style={{
                  backgroundColor: isHovered ? node.color : 'rgba(39, 39, 42, 0.5)',
                  color: isHovered ? '#000000' : node.color
                }}
              >
                <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </div>

              <div className="hidden sm:block text-left pr-1">
                <div className="text-xs font-semibold text-zinc-200 group-hover:text-zinc-100 transition-colors">
                  {node.label}
                </div>
                <div className="text-[9px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {node.sublabel}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Subtle Coordinate/Telemetry details */}
      <div className="absolute top-2 left-2 text-[9px] font-mono text-zinc-600">
        SYS.NODE: 06_ACTIVE
      </div>
      <div className="absolute bottom-2 right-2 text-[9px] font-mono text-zinc-600">
        LAT: 5.6037° N (ACCRA)
      </div>
    </div>
  );
};
