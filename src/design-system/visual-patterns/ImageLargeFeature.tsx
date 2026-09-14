import React from 'react';
import { IconArrow } from '../icons';

export interface ImageLargeFeatureProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  eyebrow?: string;
  metadata?: string;
  category?: string;
  description?: string;
  href?: string;
  onNavigate?: (slug: string) => void;
  aspectRatio?: '16/9' | '16/10' | '3/2' | '4/3' | '21/9';
  objectPosition?: string;
  className?: string;
}

/**
 * TYPE 01 — LARGE FEATURE
 * 
 * Monumental focal engineering image carrying 75–80% visual weight.
 * Features quiet lower metadata, large architectural title in Poppins,
 * and a restrained directional arrow trigger with 3–5px hover slide.
 */
export const ImageLargeFeature: React.FC<ImageLargeFeatureProps> = ({
  title,
  imageSrc,
  imageAlt = '',
  eyebrow,
  metadata,
  category,
  description,
  href,
  onNavigate,
  aspectRatio = '16/10',
  objectPosition = 'object-center',
  className = '',
}) => {
  const aspectClass = {
    '16/9': 'aspect-[4/3] sm:aspect-[16/9]',
    '16/10': 'aspect-[4/3] sm:aspect-[16/10]',
    '3/2': 'aspect-[4/3] sm:aspect-[3/2]',
    '4/3': 'aspect-[4/3]',
    '21/9': 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/9]',
  }[aspectRatio];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <a
      href={href || '#'}
      onClick={handleClick}
      className={`group relative block overflow-hidden rounded-[8px] bg-[#173C62] select-none ${aspectClass} ${className}`}
      aria-label={`Featured Project: ${title}`}
    >
      {/* High-Resolution Engineering Photography */}
      <img
        src={imageSrc}
        alt={imageAlt || title}
        loading="lazy"
        className={`w-full h-full object-cover filter brightness-[0.93] transition-transform duration-700 ease-out group-hover:scale-[1.02] ${objectPosition}`}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
        }}
      />

      {/* Calibrated Directional Scrim: Subtle LTS Blue gradient ensuring legible typography without washing out engineering details */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/40 via-45% to-transparent pointer-events-none" />

      {/* Top Metadata Tags (Optional) */}
      {(category || eyebrow) && (
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
          <span className="inline-flex items-center px-3 py-1 bg-[#173C62]/80 backdrop-blur-sm text-white text-[11px] uppercase tracking-[0.14em] font-medium rounded-[4px] border border-white/15">
            {category || eyebrow}
          </span>
        </div>
      )}

      {/* Bottom Content Area */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end text-left z-10 space-y-2 text-white">
        {metadata && (
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.14em] text-[#CBD5E1] font-medium block">
            {metadata}
          </span>
        )}

        <div className="flex items-end justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-snug group-hover:text-slate-100 transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed line-clamp-2 max-w-2xl">
                {description}
              </p>
            )}
          </div>

          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] bg-white/10 group-hover:bg-white text-white group-hover:text-[#173C62] border border-white/20 transition-all duration-300">
            <IconArrow size="sm" color="inherit" interactive />
          </div>
        </div>
      </div>
    </a>
  );
};
