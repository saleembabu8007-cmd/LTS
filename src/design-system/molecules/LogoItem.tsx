import React from 'react';

export interface LogoItemProps {
  name: string;
  category?: string;
  clearanceLevel?: string;
  logoSrc?: string;
  light?: boolean;
  className?: string;
}

export const LogoItem: React.FC<LogoItemProps> = ({
  name,
  category,
  clearanceLevel,
  logoSrc,
  light = false,
  className = '',
}) => {
  const textColor = light ? 'text-white' : 'text-[#0B1320]';
  const metaColor = light ? 'text-slate-400' : 'text-[#64748B]';

  return (
    <div
      className={`group flex flex-col items-center justify-center p-6 text-center select-none transition-all duration-300 hover:scale-[1.02] ${className}`}
    >
      {logoSrc ? (
        <div className="h-12 flex items-center justify-center mb-3">
          <img
            src={logoSrc}
            alt={name}
            className={`max-h-10 max-w-[140px] object-contain transition-opacity ${
              light ? 'brightness-0 invert opacity-75 group-hover:opacity-100' : 'opacity-70 group-hover:opacity-100'
            }`}
          />
        </div>
      ) : (
        <div className="h-12 flex items-center justify-center mb-3">
          <span className={`font-sans font-bold text-lg sm:text-xl tracking-tight ${textColor} group-hover:text-[#173C62]`}>
            {name}
          </span>
        </div>
      )}

      {(category || clearanceLevel) && (
        <div className="space-y-0.5">
          {category && (
            <span className={`block text-[11px] font-mono uppercase tracking-wider ${metaColor}`}>
              {category}
            </span>
          )}
          {clearanceLevel && (
            <span className={`block text-[10px] font-mono font-medium text-[#173C62] ${light ? 'text-sky-400' : ''}`}>
              {clearanceLevel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
