import React from 'react';

export interface BrandLogoProps {
  variant?: 'dark' | 'light' | 'monogram';
  withTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  withTagline = false,
  className = '',
  onClick,
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-[#0B1320]';
  const subTextColor = isLight ? 'text-slate-300' : 'text-[#64748B]';
  const strokeColor = isLight ? '#FFFFFF' : '#173C62';
  const accentColor = '#173C62';

  if (variant === 'monogram') {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] ${
          onClick ? 'cursor-pointer' : 'cursor-default'
        } ${className}`}
        aria-label="LTSGROUP Home"
      >
        <svg
          className="w-9 h-9 shrink-0"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" fill={isLight ? '#0B1C2F' : '#F8FAFC'} stroke={isLight ? 'rgba(255,255,255,0.12)' : '#E5E7EB'} strokeWidth="1" />
          <path
            d="M9 10H14V22H27V26H9V10Z"
            fill={isLight ? '#FFFFFF' : accentColor}
          />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={`inline-flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] text-left select-none ${
        onClick ? 'cursor-pointer' : 'cursor-default'
      } ${className}`}
      aria-label="LTSGROUP Home"
    >
      {/* Precision Geometric Monogram Icon */}
      <div className="shrink-0">
        <svg
          className="w-8 h-8"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" fill={isLight ? 'rgba(255,255,255,0.06)' : '#F1F5F9'} stroke={isLight ? 'rgba(255,255,255,0.16)' : '#E5E7EB'} strokeWidth="1" />
          <path
            d="M8 9H12.5V20H24V23H8V9Z"
            fill={isLight ? '#FFFFFF' : accentColor}
          />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`text-[17px] font-bold tracking-[0.06em] uppercase font-sans ${textColor}`}>
            LTS<span className={isLight ? 'text-slate-300 font-semibold' : 'text-[#173C62] font-semibold'}>GROUP</span>
          </span>
        </div>
        {withTagline && (
          <span className={`text-[9px] uppercase tracking-[0.24em] font-sans font-medium mt-1 hidden xl:block whitespace-nowrap ${subTextColor}`}>
            Engineering &bull; Contracting &bull; Supply
          </span>
        )}
      </div>
    </button>
  );
};
