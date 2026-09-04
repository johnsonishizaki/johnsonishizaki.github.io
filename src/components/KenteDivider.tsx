import React from 'react';

interface KenteDividerProps {
  className?: string;
  variant?: 'simple' | 'motif' | 'grid';
}

export const KenteDivider: React.FC<KenteDividerProps> = ({ 
  className = '', 
  variant = 'motif' 
}) => {
  if (variant === 'simple') {
    return (
      <div className={`w-full flex items-center justify-center my-8 ${className}`}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <div className="mx-4 flex items-center gap-1">
          <div className="w-1.5 h-1.5 bg-amber-500/60 rotate-45" />
          <div className="w-2 h-2 bg-teal-500/60 rotate-45" />
          <div className="w-1.5 h-1.5 bg-amber-500/60 rotate-45" />
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>
    );
  }

  return (
    <div className={`w-full flex items-center justify-center my-12 overflow-hidden ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800" />
      
      {/* Subtle Geometric Kente Pattern Motif */}
      <div className="mx-4 flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-950/60 backdrop-blur-xs">
        <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-75">
          {/* Subtle interlocking diamond / chevron weave */}
          <path d="M6 1L11 6L6 11L1 6L6 1Z" stroke="#D97706" strokeWidth="1.2" fill="none" />
          <path d="M18 1L23 6L18 11L13 6L18 1Z" stroke="#14B8A6" strokeWidth="1.2" fill="none" />
          <path d="M30 1L35 6L30 11L25 6L30 1Z" stroke="#D97706" strokeWidth="1.2" fill="none" />
          <path d="M42 1L47 6L42 11L37 6L42 1Z" stroke="#14B8A6" strokeWidth="1.2" fill="none" />
          <path d="M54 1L59 6L54 11L49 6L54 1Z" stroke="#D97706" strokeWidth="1.2" fill="none" />
          
          <line x1="11" y1="6" x2="13" y2="6" stroke="#52525B" strokeWidth="1" />
          <line x1="23" y1="6" x2="25" y2="6" stroke="#52525B" strokeWidth="1" />
          <line x1="35" y1="6" x2="37" y2="6" stroke="#52525B" strokeWidth="1" />
          <line x1="47" y1="6" x2="49" y2="6" stroke="#52525B" strokeWidth="1" />
        </svg>
      </div>

      <div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-800 via-zinc-800 to-transparent" />
    </div>
  );
};
