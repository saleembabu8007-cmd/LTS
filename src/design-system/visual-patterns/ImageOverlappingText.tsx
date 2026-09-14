import React from 'react';
import { IconArrow } from '../icons';

export interface ImageOverlappingTextProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  category?: string;
  metadata?: string;
  description?: string;
  href?: string;
  onNavigate?: (slug: string) => void;
  aspectRatio?: '16/9' | '4/3' | '3/2';
  overlapPosition?: 'bottom-left' | 'bottom-right';
  objectPosition?: string;
  className?: string;
}

/**
 * TYPE 02 — IMAGE + OVERLAPPING TEXT
 * 
 * Large architectural image paired with a restrained surface card
 * that physically breaks and overlaps the image boundary.
 * Highly restrained content: category + title + 1 concise line + arrow.
 */
export const ImageOverlappingText: React.FC<ImageOverlappingTextProps> = ({
  title,
  imageSrc,
  imageAlt = '',
  category,
  metadata,
  description,
  href,
  onNavigate,
  aspectRatio = '4/3',
  overlapPosition = 'bottom-left',
  objectPosition = 'object-center',
  className = '',
}) => {
  const aspectClass = {
    '16/9': 'aspect-[4/3] sm:aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[4/3] sm:aspect-[3/2]',
  }[aspectRatio];

  const overlapPosClass =
    overlapPosition === 'bottom-left'
      ? '-bottom-6 sm:-bottom-8 left-4 sm:left-8'
      : '-bottom-6 sm:-bottom-8 right-4 sm:right-8';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <div className={`relative mb-8 sm:mb-10 ${className}`}>
      <a
        href={href || '#'}
        onClick={handleClick}
        className="group block select-none"
        aria-label={`View ${title}`}
      >
        {/* Primary Large Image Frame */}
        <div
          className={`relative w-full rounded-[8px] overflow-hidden bg-[#173C62] ${aspectClass}`}
        >
          <img
            src={imageSrc}
            alt={imageAlt || title}
            loading="lazy"
            className={`w-full h-full object-cover filter brightness-[0.95] transition-transform duration-700 ease-out group-hover:scale-[1.02] ${objectPosition}`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/30 via-transparent to-transparent pointer-events-none" />

          {metadata && (
            <div className="absolute top-4 right-4 z-10">
              <span className="inline-flex items-center px-2.5 py-1 bg-[#173C62]/75 backdrop-blur-sm text-white text-[11px] uppercase tracking-[0.12em] font-medium rounded-[4px] border border-white/15">
                {metadata}
              </span>
            </div>
          )}
        </div>

        {/* Overlapping Restrained Surface Card */}
        <div
          className={`absolute ${overlapPosClass} z-20 w-[calc(100%-2rem)] sm:w-auto sm:max-w-md bg-white rounded-[8px] p-5 sm:p-6 border border-slate-200 shadow-sm transition-all duration-300 group-hover:border-[#173C62]/40 text-left`}
        >
          <div className="space-y-2">
            {category && (
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#173C62] font-semibold block">
                {category}
              </span>
            )}

            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base sm:text-lg font-medium text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors">
                {title}
              </h3>
              <div className="flex-shrink-0 text-[#173C62] pt-0.5">
                <IconArrow size="sm" color="primary" interactive />
              </div>
            </div>

            {description && (
              <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 pt-0.5">
                {description}
              </p>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};
