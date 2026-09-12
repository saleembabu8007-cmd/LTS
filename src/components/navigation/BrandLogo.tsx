import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'light', compact = false }) => {
  const isDark = variant === 'dark';

  return (
    <div className="flex items-center gap-3.5 select-none group cursor-pointer">
      {/* Precision Emblem Icon */}
      <svg
        className="h-10 w-10 shrink-0 transition-transform duration-200 group-hover:scale-[1.03]"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="LTS Group Emblem"
      >
        {/* Dynamic perimeter arc */}
        <path
          d="M 6 34 C 10 42, 26 44, 40 33 C 44 29, 44 24, 42 21"
          stroke={isDark ? '#FFFFFF' : '#173C62'}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Engineering structural fins */}
        <path
          d="M 14 33 L 14 24 C 14 22.5 15.5 21 17 21 L 17 33"
          fill={isDark ? '#94A3B8' : '#999999'}
        />
        <path
          d="M 19 33 L 19 18 C 19 16.5 20.5 15 22 15 L 22 33"
          fill={isDark ? '#CBD5E1' : '#64748B'}
        />
        <path
          d="M 24 33 L 24 12 C 24 10.5 25.5 9 27 9 L 27 33"
          fill={isDark ? '#FFFFFF' : '#173C62'}
        />
        <path
          d="M 29 33 L 29 16 C 29 14.5 30.5 13 32 13 L 32 33"
          fill={isDark ? '#CBD5E1' : '#475569'}
        />
        <path
          d="M 34 33 L 34 22 C 34 20.5 35.5 19 37 19 L 37 33"
          fill={isDark ? '#94A3B8' : '#999999'}
        />
      </svg>

      {/* Brand Wordmark Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-semibold tracking-tight text-[1.45rem] sm:text-[1.6rem] leading-none ${
              isDark ? 'text-white' : 'text-[#0B1320]'
            }`}
          >
            LTS
          </span>
          <span
            className={`text-xs font-semibold tracking-[0.16em] uppercase leading-none ${
              isDark ? 'text-slate-300' : 'text-[#173C62]'
            }`}
          >
            GROUP
          </span>
        </div>
        {!compact && (
          <span
            className={`typography-caption text-[8.5px] uppercase tracking-[0.12em] leading-tight mt-1 hidden sm:block ${
              isDark ? 'text-slate-400' : 'text-[#999999]'
            }`}
          >
            Electromechanical Engineering &bull; FM &bull; Trading
          </span>
        )}
      </div>
    </div>
  );
};

