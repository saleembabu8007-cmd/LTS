import React from 'react';
import { IconArrow, IconCheck } from '../icons';

export interface FullWidthImageProps {
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  statusBadge?: string;
  metaRight?: string;
  ctaText?: string;
  ctaHref?: string;
  minHeight?: string;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * 05 / Full-width Image Pattern
 * Panoramic full-bleed or wide-span architectural viewport with quiet lower-left/lower-right anchors.
 * Conforms to LTSGROUP Image-First rules:
 * - Panoramic architectural presence (21/9 or min-height 520px).
 * - Soft 24px radius (or full bleed).
 * - Subtle 1.02 hover zoom.
 * - Minimal floating metadata chips with soft backdrop blur.
 */
export const FullWidthImage: React.FC<FullWidthImageProps> = ({
  imageSrc,
  imageAlt = '',
  title,
  subtitle,
  statusBadge,
  metaRight,
  ctaText,
  ctaHref,
  minHeight = 'min-h-[460px] sm:min-h-[560px]',
  onNavigate,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && ctaHref) {
      e.preventDefault();
      onNavigate(ctaHref);
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-[8px] bg-[#173C62] flex flex-col justify-between p-6 sm:p-10 lg:p-12 ${minHeight} ${className}`}
    >
      {/* Background Image with 1.02 subtle scale on container hover */}
      <img
        src={imageSrc}
        alt={imageAlt || title || 'Full-width architectural environment'}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/assets/images/project-chiller.jpg';
        }}
      />

      {/* Subtle Architectural Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/20 to-transparent pointer-events-none" />

      {/* Top Status Indicators */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-white">
        {statusBadge ? (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#173C62]/90 text-xs font-mono tracking-wider text-white">
            <IconCheck size="sm" color="white" />
            <span>{statusBadge}</span>
          </div>
        ) : <div />}

        {metaRight && (
          <span className="text-xs font-mono tracking-widest uppercase text-white/75">
            {metaRight}
          </span>
        )}
      </div>

      {/* Bottom Anchor Narrative & Actions */}
      <div className="relative z-10 max-w-2xl text-white">
        {subtitle && (
          <span className="text-[11px] font-mono tracking-widest uppercase text-white/75 block mb-2">
            {subtitle}
          </span>
        )}

        {title && (
          <h2 className="text-2xl sm:text-4xl font-light tracking-tight leading-snug mb-4">
            {title}
          </h2>
        )}

        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            onClick={handleClick}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white hover:text-white/80 transition-colors pt-2 group-hover:gap-3"
          >
            <span>{ctaText}</span>
            <IconArrow size="sm" color="white" />
          </a>
        )}
      </div>
    </div>
  );
};
