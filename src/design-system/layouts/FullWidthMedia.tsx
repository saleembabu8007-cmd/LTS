import React from 'react';

export interface FullWidthMediaProps {
  imageUrl: string;
  imageAlt?: string;
  caption?: string;
  location?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  aspectRatio?: 'panoramic' | 'cinematic' | 'banner';
  bleed?: boolean;
  className?: string;
}

/**
 * FullWidthMedia Layout Archetype (G: Full-width image)
 * Full-width architectural photography container with intentional soft-radius or full-bleed.
 */
export const FullWidthMedia: React.FC<FullWidthMediaProps> = ({
  imageUrl,
  imageAlt = '',
  caption,
  location,
  overlayTitle,
  overlaySubtitle,
  aspectRatio = 'cinematic',
  bleed = false,
  className = '',
}) => {
  const aspectStyles = {
    panoramic: 'aspect-[21/9]',
    cinematic: 'aspect-[16/9]',
    banner: 'aspect-[2.4/1]',
  }[aspectRatio];

  const containerRadius = bleed ? 'rounded-none' : 'rounded-[8px]';

  return (
    <figure className={`relative w-full ${className}`}>
      <div className={`relative w-full overflow-hidden ${containerRadius} bg-[#173C62] ${aspectStyles}`}>
        <img
          src={imageUrl}
          alt={imageAlt || overlayTitle || 'LTSGROUP Engineering Infrastructure'}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />

        {(overlayTitle || overlaySubtitle) && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/30 to-transparent flex items-end p-6 sm:p-10 md:p-14">
            <div className="max-w-2xl text-left">
              {overlaySubtitle && (
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#CBD5E1]">
                  {overlaySubtitle}
                </span>
              )}
              {overlayTitle && (
                <h3 className="mt-2 text-[24px] sm:text-[32px] md:text-[40px] font-medium text-white tracking-tight leading-tight">
                  {overlayTitle}
                </h3>
              )}
            </div>
          </div>
        )}
      </div>

      {(caption || location) && (
        <figcaption className="mt-3 flex items-center justify-between text-[12px] font-mono text-[#64748B] px-1">
          {caption && <span>{caption}</span>}
          {location && <span className="uppercase tracking-wider">{location}</span>}
        </figcaption>
      )}
    </figure>
  );
};
