import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  descriptor?: string;
  imageUrl: string;
  imageAlt?: string;
  href?: string;
  location?: string;
  year?: string;
  variant?: 'portrait' | 'landscape' | 'panoramic';
  onNavigate?: (slug: string) => void;
  className?: string;
}

export type ProjectVisualCardProps = ProjectCardProps;

/**
 * ProjectCard / ProjectVisualCard
 * Purpose-built for capital engineering and construction project monographs.
 * Conforms to LTSGROUP Image Card rules:
 * - Dominant architectural photograph without aggressive overlays.
 * - Aspect ratio support: landscape (16/11), portrait (4/5), panoramic (21/9).
 * - 18px image radius, subtle 1.025 hover scale, 3px arrow translation.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  descriptor,
  imageUrl,
  imageAlt = '',
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
      className={`group block text-left select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 rounded-[18px] ${className}`}
      aria-label={`View project details for ${title}`}
    >
      {/* 18px Architectural Image Container (NO dark overlay) */}
      <div className={`relative overflow-hidden rounded-[18px] bg-[#0B1C2F] ${aspectStyles}`}>
        <img
          src={imageUrl}
          alt={imageAlt || title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
          }}
        />
      </div>

      {/* Reduced-density metadata & title */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-mono text-[#64748B]">
            <span className="text-[#173C62] font-semibold">{category}</span>
            {location && (
              <>
                <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                <span>{location}</span>
              </>
            )}
          </div>

          <h3 className="text-[17px] font-medium text-[#0B1320] leading-snug group-hover:text-[#173C62] transition-colors duration-180">
            {title}
          </h3>

          {descriptor && (
            <p className="text-[13px] text-[#4A5568] line-clamp-1 leading-relaxed font-normal">
              {descriptor}
            </p>
          )}
        </div>

        {/* Minimal 3px translating arrow */}
        <div className="shrink-0 mt-1.5 text-[#173C62] transition-transform duration-180 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[2px]" aria-hidden="true">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
};

// Backwards-compatible alias
export const ProjectVisualCard = ProjectCard;
