import React from 'react';
import { Metadata } from '../atoms/Metadata';

export interface MediaCaptionProps {
  caption: string;
  technicalId?: string;
  location?: string;
  light?: boolean;
  className?: string;
}

export const MediaCaption: React.FC<MediaCaptionProps> = ({
  caption,
  technicalId,
  location,
  light = false,
  className = '',
}) => {
  const textColor = light ? 'text-slate-300' : 'text-[#4A5568]';
  const borderColor = light ? 'border-white/10' : 'border-[#E5E7EB]';

  return (
    <div
      className={`pt-2.5 pb-1 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b ${borderColor} ${className}`}
    >
      <p className={`text-xs leading-relaxed max-w-2xl ${textColor}`}>
        {caption}
      </p>

      <div className="flex items-center gap-3 shrink-0">
        {location && (
          <Metadata light={light} mono={false}>
            {location}
          </Metadata>
        )}
        {technicalId && (
          <span className="font-mono text-[10px] px-1.5 py-0.5 border border-[#E5E7EB] text-[#64748B] rounded-none">
            {technicalId}
          </span>
        )}
      </div>
    </div>
  );
};
