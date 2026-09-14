import React from 'react';

export interface ProofItemProps {
  /** Optional index identifier, e.g., '01', '02' */
  index?: string;
  /** Verified numerical value, e.g., '03', '24/7', '100%', '09', '99.8%' */
  value: string | number;
  /** Optional unit/suffix displayed beside the number, e.g., '%', 'MWp' */
  unit?: string;
  /** Primary label in uppercase architectural tracking */
  label: string;
  /** Optional short supporting context sentence */
  subtext?: string;
  /** Typographic scale */
  size?: 'standard' | 'large' | 'dominant';
  /** Color tone */
  tone?: 'brand' | 'dark' | 'slate';
  className?: string;
}

/**
 * ProofItem — First-principles atomic building block for verified LTS figures.
 * Designed to feel like forensic editorial evidence rather than decorative UI cards:
 * - Monospace index numeral ('01')
 * - Enormous, elegant font-mono typography
 * - High-contrast uppercase label
 * - Minimal, quiet supporting context
 */
export const ProofItem: React.FC<ProofItemProps> = ({
  index,
  value,
  unit,
  label,
  subtext,
  size = 'standard',
  tone = 'brand',
  className = '',
}) => {
  const isDark = tone === 'dark';

  const sizeClasses = {
    standard: 'text-5xl sm:text-6xl lg:text-7xl xl:text-8xl',
    large: 'text-6xl sm:text-7xl lg:text-8xl xl:text-9xl',
    dominant: 'text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem]',
  }[size];

  const valueColor = {
    brand: 'text-[#173C62]',
    dark: 'text-white',
    slate: 'text-[#0B1320]',
  }[tone];

  const labelColor = isDark ? 'text-white' : 'text-[#0B1320]';
  const indexColor = isDark ? 'text-white/60' : 'text-[#999999]';
  const subtextColor = isDark ? 'text-white/70' : 'text-[#64748B]';

  return (
    <div className={`flex flex-col select-none text-left ${className}`}>
      {/* Index Tag */}
      {index && (
        <span className={`text-[10px] sm:text-xs font-mono font-medium tracking-[0.2em] uppercase mb-2 ${indexColor}`}>
          {index}
        </span>
      )}

      {/* Main Numeral */}
      <div className="flex items-baseline gap-1 leading-none tracking-tight">
        <span className={`font-light font-mono leading-none tracking-tighter ${sizeClasses} ${valueColor}`}>
          {value}
        </span>
        {unit && (
          <span className={`text-2xl sm:text-3xl lg:text-4xl font-light font-mono ml-1 ${valueColor}`}>
            {unit}
          </span>
        )}
      </div>

      {/* Label */}
      <h4 className={`mt-3 sm:mt-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] leading-snug ${labelColor}`}>
        {label}
      </h4>

      {/* Supporting Context */}
      {subtext && (
        <p className={`mt-1 sm:mt-1.5 text-xs font-normal leading-relaxed max-w-xs ${subtextColor}`}>
          {subtext}
        </p>
      )}
    </div>
  );
};
