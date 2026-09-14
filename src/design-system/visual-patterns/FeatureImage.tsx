import React from 'react';
import { IconArrow, IconCheck } from '../icons';

export interface FeatureImageProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  eyebrow?: string;
  description?: string;
  metadata?: string;
  badge?: string;
  href?: string;
  ctaText?: string;
  aspectRatio?: '16/9' | '16/10' | '21/9';
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * 01 / Feature Image Pattern
 * Large rounded image container (18–20px radius) with minimal text and optional bottom metadata.
 * Conforms to LTSGROUP Image-First rules:
 * - Large architectural photography leading the narrative.
 * - Subtle hover scale: 1.02, never aggressive.
 * - Directional scrim only for legible contrast.
 */
export const FeatureImage: React.FC<FeatureImageProps> = ({
  title,
  imageSrc,
  imageAlt = '',
  eyebrow,
  description,
  metadata,
  badge,
  href,
  ctaText = 'Explore Feature',
  aspectRatio = '16/10',
  onNavigate,
  className = '',
}) => {
  const aspectClass = {
    '16/9': 'aspect-[4/3] sm:aspect-[16/9]',
    '16/10': 'aspect-[4/3] sm:aspect-[16/10]',
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
      className={`group relative block overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-[#173C62] shadow-sm select-none ${aspectClass} ${className}`}
      aria-label={`Explore feature: ${title}`}
    >
      {/* 1.02 Hover Scale on Large Image */}
      <img
        src={imageSrc}
        alt={imageAlt || title}
        loading="lazy"
        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/assets/images/hero-building.jpg';
        }}
      />

      {/* Subtle Directional Scrim for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/30 to-transparent pointer-events-none" />

      {/* Top Optional Badge */}
      {badge && (
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wider">
            <IconCheck size="sm" color="white" />
            {badge}
          </span>
        </div>
      )}

      {/* Bottom Minimal Narrative & Metadata */}
      <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 lg:p-10 text-white z-10 flex flex-col justify-end">
        {eyebrow && (
          <span className="text-[11px] font-mono tracking-widest uppercase text-white/75 block mb-2">
            {eyebrow}
          </span>
        )}

        <h3 className="text-xl sm:text-3xl font-light tracking-tight leading-snug mb-2 max-w-3xl">
          {title}
        </h3>

        {description && (
          <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed mb-4 max-w-2xl line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/15">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white group-hover:gap-3 transition-all duration-200">
            <span>{ctaText}</span>
            <IconArrow size="sm" color="white" />
          </span>

          {metadata && (
            <span className="text-[11px] font-mono text-white/70 tracking-wider">
              {metadata}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};
