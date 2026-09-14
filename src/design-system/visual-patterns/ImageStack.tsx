import React from 'react';
import { IconArrow } from '../icons';

export interface ImageStackProps {
  title: string;
  category?: string;
  eyebrow?: string;
  description: string;
  macroImage: string;
  macroImageAlt?: string;
  macroCaption?: string;
  microImage: string;
  microImageAlt?: string;
  microCaption?: string;
  specs?: { label: string; value: string }[];
  href?: string;
  ctaText?: string;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * TYPE 07 — IMAGE STACK
 * 
 * Large primary image foundation paired with a smaller supporting
 * technical image offset vertically, expressing macro-to-micro architectural depth.
 */
export const ImageStack: React.FC<ImageStackProps> = ({
  title,
  category,
  eyebrow,
  description,
  macroImage,
  macroImageAlt = '',
  macroCaption = 'MACRO ENVELOPE',
  microImage,
  microImageAlt = '',
  microCaption = 'TECHNICAL PLANT DETAIL',
  specs,
  href,
  ctaText = 'Inspect Engineering Dossier',
  onNavigate,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <div className={`py-12 sm:py-16 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Visual Stack Column (7 cols) */}
        <div className="lg:col-span-7 relative pb-8 sm:pb-12">
          {/* Primary Large Image (16:10 or 3:2) */}
          <div className="group relative rounded-[8px] overflow-hidden bg-[#173C62] aspect-[16/10] w-[90%] sm:w-[88%]">
            <img
              src={macroImage}
              alt={macroImageAlt || title}
              loading="lazy"
              className="w-full h-full object-cover filter brightness-[0.94] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 z-10">
              <span className="text-[10px] uppercase tracking-[0.14em] text-white/90 bg-[#173C62]/75 px-2.5 py-0.5 rounded-[4px] backdrop-blur-sm">
                {macroCaption}
              </span>
            </div>
          </div>

          {/* Secondary Stacked Image (Portrait 3:4 / 4:5) Offset Vertically */}
          <div className="absolute right-0 bottom-0 w-[42%] sm:w-[38%] rounded-[8px] overflow-hidden bg-white p-2 shadow-sm border border-slate-200">
            <div className="group relative rounded-[6px] overflow-hidden bg-[#173C62] aspect-[3/4]">
              <img
                src={microImage}
                alt={microImageAlt || title}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.95] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute bottom-2.5 left-2.5 z-10">
                <span className="text-[9px] uppercase tracking-[0.12em] text-white/90 bg-[#173C62]/80 px-2 py-0.5 rounded-[3px] backdrop-blur-sm">
                  {microCaption}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Narrative Column (5 cols) */}
        <div className="lg:col-span-5 space-y-5 text-left">
          {(category || eyebrow) && (
            <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] font-semibold block">
              {category || eyebrow}
            </span>
          )}

          <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight leading-snug">
            {title}
          </h3>

          <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
            {description}
          </p>

          {specs && specs.length > 0 && (
            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-200">
              {specs.map((spec, sIdx) => (
                <div key={sIdx} className="space-y-0.5">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-[#64748B] block font-medium">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#173C62] block">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {href && (
            <div className="pt-2">
              <a
                href={href}
                onClick={handleClick}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#12304F] transition-colors"
              >
                <span>{ctaText}</span>
                <IconArrow size="sm" color="primary" interactive />
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
