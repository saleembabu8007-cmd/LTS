import React from 'react';
import { IconArrowUpRight } from '../icons';

export interface ProjectImageProps {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt?: string;
  location?: string;
  descriptor?: string;
  href?: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * 02 / Project Image Pattern
 * Image occupies approximately 70–80% of visual weight; text occupies 20–30%.
 * Conforms to LTSGROUP Image-First rules:
 * - Dominant architectural photograph without aggressive overlays.
 * - Soft 18px radius on the image container.
 * - Subtle 1.02 hover zoom and 3–5px arrow translation on hover.
 */
export const ProjectImage: React.FC<ProjectImageProps> = ({
  id,
  title,
  category,
  imageSrc,
  imageAlt = '',
  location,
  descriptor,
  href,
  aspectRatio = 'landscape',
  onNavigate,
  className = '',
}) => {
  const targetHref = href || `/projects/${id}`;

  const aspectStyles = {
    landscape: 'aspect-[16/11]',
    portrait: 'aspect-[4/5]',
    square: 'aspect-square',
  }[aspectRatio];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && targetHref) {
      e.preventDefault();
      onNavigate(targetHref);
    }
  };

  return (
    <a
      href={targetHref}
      onClick={handleClick}
      className={`group block select-none text-left rounded-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 ${className}`}
      aria-label={`View project details for ${title}`}
    >
      {/* 70–80% Visual Weight: Clean Architectural Image Container (Zero borders/shadows) */}
      <div className={`relative overflow-hidden rounded-[8px] bg-[#173C62] ${aspectStyles}`}>
        <img
          src={imageSrc}
          alt={imageAlt || title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/assets/images/project-highrise.jpg';
          }}
        />
      </div>

      {/* 20–30% Visual Weight: Compact Minimal Metadata & Title */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-mono text-[#999999]">
            <span className="text-[#173C62] font-medium">{category}</span>
            {location && (
              <>
                <span className="text-[#CBD5E1]">&bull;</span>
                <span>{location}</span>
              </>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-medium text-[#173C62] leading-snug group-hover:text-[#173C62]/80 transition-colors">
            {title}
          </h3>

          {descriptor && (
            <p className="text-xs text-[#999999] line-clamp-1 leading-relaxed font-normal">
              {descriptor}
            </p>
          )}
        </div>

        {/* Minimal 3–5px translating arrow */}
        <div
          className="shrink-0 mt-1 text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          <IconArrowUpRight size="sm" color="primary" />
        </div>
      </div>
    </a>
  );
};
