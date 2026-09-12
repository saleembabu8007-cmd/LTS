import React from 'react';

export interface ProjectVisualCardProps {
  id: string;
  title: string;
  category: string;
  descriptor?: string;
  imageUrl: string;
  href?: string;
  location?: string;
  year?: string;
  variant?: 'portrait' | 'landscape' | 'panoramic';
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * ProjectVisualCard
 * Conforms strictly to Rule 10 & 13: Image-led card, not a text-heavy bordered box.
 * Displays: Dominant architectural photograph + small title + concise descriptor + subtle interaction.
 * Radius: 18px (image standard). Motion: 1.025 hover scale, 180ms arrow translation.
 */
export const ProjectVisualCard: React.FC<ProjectVisualCardProps> = ({
  id,
  title,
  category,
  descriptor,
  imageUrl,
  href = `/projects/${id}`,
  location,
  variant = 'landscape',
  onNavigate,
  className = '',
}) => {
  const aspectStyles = {
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[16/11]',
    panoramic: 'aspect-[21/9]',
  }[variant];

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
      aria-label={`View project details for ${title}`}
    >
      {/* 18px Architectural Image Container */}
      <div className={`relative overflow-hidden rounded-[18px] bg-[#0B1C2F] ${aspectStyles}`}>
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Reduced-density metadata & title */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5 text-[11px] uppercase tracking-[0.14em] font-mono text-[#64748B]">
            <span>{category}</span>
            {location && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                <span>{location}</span>
              </>
            )}
          </div>
          <h3 className="mt-1.5 text-[17px] font-medium text-[#0B1320] leading-snug group-hover:text-[#173C62] transition-colors duration-180">
            {title}
          </h3>
          {descriptor && (
            <p className="mt-1 text-[13px] text-[#4A5568] line-clamp-1 leading-relaxed font-normal">
              {descriptor}
            </p>
          )}
        </div>

        {/* Minimal 3px translating arrow */}
        <div className="shrink-0 mt-2 text-[#173C62] transition-transform duration-180 ease-out group-hover:translate-x-[3px]" aria-hidden="true">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </a>
  );
};
