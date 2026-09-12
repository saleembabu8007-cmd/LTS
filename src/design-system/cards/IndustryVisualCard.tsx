import React from 'react';

export interface IndustryVisualCardProps {
  id: string;
  title: string;
  scope: string;
  imageUrl: string;
  href?: string;
  capabilities?: string[];
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * IndustryVisualCard
 * Conforms to Rule 13: Sector application visual unit.
 * 16–18px soft-radius image frame, clean sector typography, verified capabilities.
 */
export const IndustryVisualCard: React.FC<IndustryVisualCardProps> = ({
  id,
  title,
  scope,
  imageUrl,
  href = `/industries`,
  capabilities = [],
  onNavigate,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 rounded-[18px] ${className}`}
      aria-label={`View sector capabilities for ${title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#0B1C2F]">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/80 via-[#0B1C2F]/20 to-transparent" />
        
        {/* Title overlay positioned at base of image */}
        <div className="absolute bottom-0 inset-x-0 p-5 text-white">
          <h3 className="text-[18px] font-medium tracking-tight text-white flex items-center justify-between">
            <span>{title}</span>
            <span className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-180 group-hover:translate-x-[3px]">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </h3>
          <p className="mt-1 text-[12px] text-white/80 line-clamp-1 font-normal">
            {scope}
          </p>
        </div>
      </div>

      {capabilities.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {capabilities.slice(0, 3).map((cap, i) => (
            <span
              key={i}
              className="text-[11px] font-mono text-[#64748B] bg-[#F8FAFC] px-2 py-0.5 rounded-[6px]"
            >
              {cap}
            </span>
          ))}
        </div>
      )}
    </a>
  );
};
