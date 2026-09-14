import React from 'react';

export interface BrandLogoProps {
  variant?: 'dark' | 'light' | 'monogram';
  withTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Official LTSGROUP Brand Logo & Precision Emblem.
 * Adheres strictly to the LTS Brand Book authority:
 * - Primary Brand Color: #173C62 (LTS Architectural Blue)
 * - Secondary Brand Color: #999999 (Brand Grey)
 * - Contrast Canvas: #FFFFFF (Crisp White)
 * - Clear space protected; vector proportions never distorted or stretched.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  withTagline = false,
  className = '',
  onClick,
}) => {
  const isLight = variant === 'light'; // White/bright on dark blue surfaces
  const isMonogram = variant === 'monogram';

  // SVG Emblem rendering with authentic engineering structural fins and perimeter arc
  const renderEmblem = (sizeClass: string = 'w-9 h-9 sm:w-10 sm:h-10') => (
    <svg
      className={`${sizeClass} shrink-0 transition-transform duration-200 group-hover:scale-[1.02]`}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LTS Group Emblem"
    >
      {/* Dynamic perimeter arc */}
      <path
        d="M 6 34 C 10 42, 26 44, 40 33 C 44 29, 44 24, 42 21"
        stroke={isLight ? '#FFFFFF' : '#173C62'}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Precision structural fins */}
      <path
        d="M 14 33 L 14 24 C 14 22.5 15.5 21 17 21 L 17 33"
        fill={isLight ? '#CBD5E1' : '#999999'}
      />
      <path
        d="M 19 33 L 19 18 C 19 16.5 20.5 15 22 15 L 22 33"
        fill={isLight ? '#E2E8F0' : '#64748B'}
      />
      {/* Center dominant structural spine */}
      <path
        d="M 24 33 L 24 12 C 24 10.5 25.5 9 27 9 L 27 33"
        fill={isLight ? '#FFFFFF' : '#173C62'}
      />
      <path
        d="M 29 33 L 29 16 C 29 14.5 30.5 13 32 13 L 32 33"
        fill={isLight ? '#E2E8F0' : '#64748B'}
      />
      <path
        d="M 34 33 L 34 22 C 34 20.5 35.5 19 37 19 L 37 33"
        fill={isLight ? '#CBD5E1' : '#999999'}
      />
    </svg>
  );

  if (isMonogram) {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`inline-flex items-center justify-center p-1 rounded-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] ${
          onClick ? 'cursor-pointer' : 'cursor-default'
        } ${className}`}
        aria-label="LTSGROUP Home"
      >
        {renderEmblem('w-8 h-8')}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={`group inline-flex items-center gap-3 sm:gap-3.5 focus:outline-none focus-visible:ring-2 ${
        isLight ? 'focus-visible:ring-white' : 'focus-visible:ring-[#173C62]'
      } text-left select-none ${
        onClick ? 'cursor-pointer' : 'cursor-default'
      } ${className}`}
      aria-label="LTSGROUP Home"
    >
      {/* Precision Emblem */}
      {renderEmblem()}

      {/* Brand Wordmark Lockup */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-semibold tracking-tight text-[1.35rem] sm:text-[1.5rem] leading-none ${
              isLight ? 'text-white' : 'text-[#173C62]'
            }`}
          >
            LTS
          </span>
          <span
            className={`text-xs font-semibold tracking-[0.16em] uppercase leading-none ${
              isLight ? 'text-[#CBD5E1]' : 'text-[#173C62]'
            }`}
          >
            GROUP
          </span>
        </div>
        {withTagline && (
          <span
            className={`text-[8.5px] uppercase tracking-[0.12em] font-medium leading-tight mt-1 hidden sm:block ${
              isLight ? 'text-slate-300' : 'text-[#999999]'
            }`}
          >
            Electromechanical Engineering &bull; FM &bull; Trading
          </span>
        )}
      </div>
    </button>
  );
};
