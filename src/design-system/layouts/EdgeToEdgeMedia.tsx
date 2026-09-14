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
    subtle: 'bg-gradient-to-t from-[#173C62]/80 via-[#173C62]/20 to-transparent',
    medium: 'bg-gradient-to-t from-[#173C62]/85 via-[#173C62]/35 to-transparent',
    dark: 'bg-gradient-to-t from-[#173C62]/92 via-[#173C62]/50 to-[#173C62]/20',
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
        className="w-full h-full object-cover object-center filter brightness-[0.95] transition-transform duration-[800ms] ease-out hover:scale-[1.015]"
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
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-[#CBD5E1] block">
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
              <span className="text-[10px] sm:text-xs text-white/75 uppercase tracking-wider sm:text-right shrink-0 font-medium">
                {coordinates}
              </span>
            )}
          </div>
        </div>
      )}
    </figure>
  );
};
