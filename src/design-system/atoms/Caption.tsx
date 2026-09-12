import React from 'react';

export interface CaptionProps {
  children: React.ReactNode;
  technicalId?: string;
  location?: string;
  light?: boolean;
  className?: string;
}

export const Caption: React.FC<CaptionProps> = ({
  children,
  technicalId,
  location,
  light = false,
  className = '',
}) => {
  const textColor = light ? 'text-slate-300' : 'text-[#64748B]';
  const metaColor = light ? 'text-slate-400' : 'text-[#94A3B8]';

  return (
    <figcaption className={`space-y-1 ${className}`}>
      <p className={`text-xs sm:text-[12.5px] leading-relaxed font-sans ${textColor}`}>
        {children}
      </p>

      {(technicalId || location) && (
        <div className={`flex flex-wrap items-center gap-3 text-[10.5px] font-mono uppercase tracking-wider ${metaColor}`}>
          {technicalId && <span>REF: {technicalId}</span>}
          {technicalId && location && <span>&bull;</span>}
          {location && <span>{location}</span>}
        </div>
      )}
    </figcaption>
  );
};
