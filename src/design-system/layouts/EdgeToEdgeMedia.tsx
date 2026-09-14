import React from 'react';

export interface EdgeToEdgeMediaProps {
  imageSrc: string;
  imageAlt?: string;
  heightClass?: string;
  eyebrow?: string;
  caption?: string;
  coordinates?: string;
  className?: string;
  scrimOpacity?: 'subtle' | 'medium' | 'dark' | 'none';
}

/**
 * EdgeToEdgeMedia
 * High-impact full-bleed photographic moment that intentionally breaks out of the
 * 1440px content container, providing an art-directed architectural visual pause
 * between dense technical sections.
 */
export const EdgeToEdgeMedia: React.FC<EdgeToEdgeMediaProps> = ({
  imageSrc,
  imageAlt = 'LTSGROUP Built Environment Engineering Infrastructure',
  heightClass = 'h-[360px] sm:h-[440px] lg:h-[520px]',
  eyebrow,
  caption,
  coordinates = 'DUBAI, UNITED ARAB EMIRATES',
  className = '',
  scrimOpacity = 'subtle',
}) => {
  const scrimMap = {
    none: 'bg-transparent',
    subtle: 'bg-gradient-to-t from-[#0B1320]/80 via-[#0B1320]/25 to-transparent',
    medium: 'bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/40 to-transparent',
    dark: 'bg-gradient-to-t from-[#0B1320]/95 via-[#0B1320]/60 to-[#0B1320]/20',
  };

  return (
    <figure
      aria-label={imageAlt}
      className={`relative w-full ${heightClass} overflow-hidden bg-[#173C62] my-0 select-none ${className}`}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        className="w-full h-full object-cover object-center filter brightness-[0.92] transition-transform duration-[800ms] ease-out hover:scale-[1.015]"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/assets/images/engineering-intro.jpg';
        }}
      />

      {/* Directional scrim overlay */}
      {scrimOpacity !== 'none' && (
        <div className={`absolute inset-0 ${scrimMap[scrimOpacity]} pointer-events-none`} />
      )}

      {/* Docked coordinate & caption datum strip */}
      {(caption || eyebrow || coordinates) && (
        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 inset-x-0 z-10">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
            <div className="space-y-1 max-w-xl text-left">
              {eyebrow && (
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#93C5FD] block font-semibold">
                  {eyebrow}
                </span>
              )}
              {caption && (
                <p className="text-sm sm:text-base font-light tracking-wide text-white/95 leading-relaxed">
                  {caption}
                </p>
              )}
            </div>

            {coordinates && (
              <span className="font-mono text-[10px] sm:text-xs text-white/75 uppercase tracking-widest sm:text-right shrink-0">
                {coordinates}
              </span>
            )}
          </div>
        </div>
      )}
    </figure>
  );
};
