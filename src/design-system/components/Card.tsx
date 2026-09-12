import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'minimal' | 'hairline' | 'darkSurface' | 'photoTile' | 'standard';
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'minimal',
  interactive = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'transition-all duration-300';

  const variantClasses: Record<string, string> = {
    // Minimal borderless tile: relies on whitespace and typographic rhythm
    minimal: 'bg-transparent text-slate-900',
    // Hairline architectural divider
    hairline: 'bg-white border border-[#E4E7EC] text-slate-900',
    // Dark architectural surface (Innovo / TTE inspired)
    darkSurface: 'bg-[#10141D] border border-white/10 text-white',
    // Photographic tile with dark backing
    photoTile: 'relative overflow-hidden bg-[#0A0D12] text-white',
    // Standard clean white box
    standard: 'bg-white border border-slate-200 text-slate-900',
  };

  const interactiveClasses = interactive
    ? 'hover:border-[#11253E] cursor-pointer group'
    : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface MetricBlockProps {
  number: string;
  label: string;
  caption?: string;
  light?: boolean;
  className?: string;
}

export const MetricBlock: React.FC<MetricBlockProps> = ({
  number,
  label,
  caption,
  light = false,
  className = '',
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <span
        className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight block ${
          light ? 'text-white' : 'text-[#11253E]'
        }`}
      >
        {number}
      </span>
      <span
        className={`text-xs sm:text-sm font-medium uppercase tracking-wider block ${
          light ? 'text-slate-300' : 'text-slate-700'
        }`}
      >
        {label}
      </span>
      {caption && (
        <span
          className={`text-xs block ${
            light ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {caption}
        </span>
      )}
    </div>
  );
};
