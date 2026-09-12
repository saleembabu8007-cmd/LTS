import React from 'react';

export interface QuoteAttributionProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  divisionOrCompany?: string;
  avatarSrc?: string;
  light?: boolean;
  className?: string;
}

export const QuoteAttribution: React.FC<QuoteAttributionProps> = ({
  quote,
  authorName,
  authorTitle,
  divisionOrCompany,
  avatarSrc,
  light = false,
  className = '',
}) => {
  const textColor = light ? 'text-white' : 'text-[#0B1320]';
  const subColor = light ? 'text-slate-300' : 'text-[#4A5568]';
  const metaColor = light ? 'text-slate-400' : 'text-[#64748B]';

  return (
    <figure className={`space-y-6 select-none ${className}`}>
      {/* Editorial Quote Mark & Statement */}
      <blockquote className={`text-xl sm:text-2xl lg:text-3xl font-sans font-light leading-relaxed tracking-tight ${textColor}`}>
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution Line */}
      <div className="flex items-center gap-4 pt-2">
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={authorName}
            className="w-12 h-12 rounded-full object-cover object-center border border-[#CBD5E1]"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#173C62] text-white flex items-center justify-center font-sans font-semibold text-sm">
            {authorName.charAt(0)}
          </div>
        )}

        <div className="space-y-0.5">
          <div className={`font-sans font-semibold text-sm sm:text-base ${textColor}`}>
            {authorName}
          </div>
          <div className={`text-xs ${subColor}`}>
            {authorTitle}
            {divisionOrCompany && <span> &bull; {divisionOrCompany}</span>}
          </div>
        </div>
      </div>
    </figure>
  );
};
