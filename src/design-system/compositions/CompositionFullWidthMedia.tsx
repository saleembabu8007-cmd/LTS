import React from 'react';
import { Container } from '../structures/Container';
import { Section, SectionSpacing } from '../structures/Section';

export interface CompositionFullWidthMediaProps {
  imageSrc: string;
  imageAlt?: string;
  caption?: string;
  location?: string;
  attribution?: string;
  overlayEyebrow?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  aspectRatio?: 'panoramic' | 'cinematic' | 'banner';
  bleed?: boolean;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

/**
 * COMPOSITION I: FULL-WIDTH MEDIA
 * Layout Structure: High-resolution architectural photography with minimal overlay.
 * Provides atmospheric pacing and visual scale across the corporate narrative.
 */
export const CompositionFullWidthMedia: React.FC<CompositionFullWidthMediaProps> = ({
  imageSrc,
  imageAlt = '',
  caption,
  location,
  attribution,
  overlayEyebrow,
  overlayTitle,
  overlaySubtitle,
  aspectRatio = 'panoramic',
  bleed = false,
  spacing = 'standard',
  id,
  className = '',
}) => {
  const aspectClass = {
    panoramic: 'aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] min-h-[280px] sm:min-h-0',
    cinematic: 'aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] min-h-[260px] sm:min-h-0',
    banner: 'aspect-[16/10] sm:aspect-[2/1] lg:aspect-[2.4/1] min-h-[260px] sm:min-h-0',
  }[aspectRatio];

  const containerRadius = bleed ? 'rounded-none' : 'rounded-[20px] sm:rounded-[24px]';

  const mediaContent = (
    <div className="relative group">
      <div
        className={`relative w-full overflow-hidden ${containerRadius} bg-[#0B1C2F] ${aspectClass} border ${
          bleed ? 'border-none' : 'border-[#E5E7EB]'
        }`}
      >
        <img
          src={imageSrc}
          alt={imageAlt || overlayTitle || 'LTSGROUP Infrastructure Asset'}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />

        {/* Minimal Bottom Gradient Scrim ONLY when overlay text exists */}
        {(overlayTitle || overlaySubtitle || overlayEyebrow) && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-5 sm:p-8 md:p-14">
            <div className="max-w-3xl space-y-2">
              {overlayEyebrow && (
                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#93C5FD] font-semibold block">
                  {overlayEyebrow}
                </span>
              )}
              {overlayTitle && (
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white tracking-tight leading-tight">
                  {overlayTitle}
                </h3>
              )}
              {overlaySubtitle && (
                <p className="text-xs sm:text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-2xl pt-1">
                  {overlaySubtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {(caption || location || attribution) && (
        <div
          className={`mt-3 flex flex-wrap items-center justify-between text-xs font-mono text-[#64748B] ${
            bleed ? 'px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto' : 'px-1'
          }`}
        >
          <div className="flex items-center gap-3">
            {caption && <span>{caption}</span>}
            {attribution && <span className="uppercase tracking-wider text-[#173C62]">{attribution}</span>}
          </div>
          {location && <span className="uppercase tracking-wider text-[#94A3B8]">{location}</span>}
        </div>
      )}
    </div>
  );

  return (
    <Section id={id} spacing={bleed ? 'none' : spacing} className={className}>
      {bleed ? (
        <div className="w-full">{mediaContent}</div>
      ) : (
        <Container variant="wide">{mediaContent}</Container>
      )}
    </Section>
  );
};

export const CompositionI = CompositionFullWidthMedia;
