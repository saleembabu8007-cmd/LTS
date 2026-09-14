import React from 'react';
import { IconArrow } from '../icons';

export interface ImageFullBleedProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  eyebrow?: string;
  subtitle?: string;
  locationDatum?: string;
  statusBadge?: string;
  description?: string;
  href?: string;
  ctaText?: string;
  onNavigate?: (slug: string) => void;
  heightClass?: string;
  objectPosition?: string;
  className?: string;
}

/**
 * TYPE 06 — FULL-BLEED IMAGE
 * 
 * Full-width project photography serving as a visual resting moment.
 * Small text positioned carefully within natural photographic whitespace.
 */
export const ImageFullBleed: React.FC<ImageFullBleedProps> = ({
  title,
  imageSrc,
  imageAlt = '',
  eyebrow,
  subtitle,
  locationDatum = 'DUBAI • UNITED ARAB EMIRATES',
  statusBadge,
  description,
  href,
  ctaText = 'Review Project Scope',
  onNavigate,
  heightClass = 'min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh]',
  objectPosition = 'object-center',
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section
      className={`relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#173C62] my-12 sm:my-20 ${heightClass} ${className}`}
    >
      {/* Full-Bleed Background Photography */}
      <img
        src={imageSrc}
        alt={imageAlt || title}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover filter brightness-[0.92] ${objectPosition}`}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
        }}
      />

      {/* Subtle Directional Scrim for Legible Whitespace Typography */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/35 to-transparent pointer-events-none" />

      {/* Top Datum Bar (Docked Metadata) */}
      <div className="absolute top-6 left-0 right-0 z-10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.14em] text-white/80 font-medium">
            {eyebrow || 'LTSGROUP • BUILT ASSET RECORD'}
          </span>
          {statusBadge && (
            <span className="text-[10px] uppercase tracking-[0.12em] font-medium text-white bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-[4px] border border-white/20">
              {statusBadge}
            </span>
          )}
        </div>
      </div>

      {/* Bottom Content Positioned Within Negative Photographic Space */}
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-3 text-left">
            {subtitle && (
              <span className="text-xs uppercase tracking-[0.14em] text-[#CBD5E1] font-medium block">
                {subtitle}
              </span>
            )}

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.05]">
              {title}
            </h3>

            {description && (
              <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl pt-1">
                {description}
              </p>
            )}

            <div className="pt-3 flex flex-wrap items-center gap-6">
              {href && (
                <a
                  href={href}
                  onClick={handleClick}
                  className="inline-flex items-center gap-2 bg-white text-[#173C62] hover:bg-slate-100 px-5 py-2.5 rounded-[6px] text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>{ctaText}</span>
                  <IconArrow size="sm" color="primary" interactive />
                </a>
              )}

              <span className="text-xs text-white/70 font-normal">
                {locationDatum}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
