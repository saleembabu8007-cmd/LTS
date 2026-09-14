import React from 'react';
import { IconArrow } from '../icons';

export interface ImageAsymmetricPairProps {
  title: string;
  category?: string;
  eyebrow?: string;
  description: string;
  primaryImage: string;
  primaryImageAlt?: string;
  primaryCaption?: string;
  secondaryImage: string;
  secondaryImageAlt?: string;
  secondaryCaption?: string;
  specs?: { label: string; value: string }[];
  href?: string;
  ctaText?: string;
  onNavigate?: (slug: string) => void;
  layout?: 'primary-left' | 'primary-right';
  className?: string;
}

/**
 * TYPE 03 — ASYMMETRIC PAIR
 * 
 * Pairs one large primary architectural photograph with one smaller
 * complementary technical image, with concise text aligned beside them.
 * Editorial asymmetry that avoids repetitive grid boxes.
 */
export const ImageAsymmetricPair: React.FC<ImageAsymmetricPairProps> = ({
  title,
  category,
  eyebrow,
  description,
  primaryImage,
  primaryImageAlt = '',
  primaryCaption,
  secondaryImage,
  secondaryImageAlt = '',
  secondaryCaption,
  specs,
  href,
  ctaText = 'Examine Project Case',
  onNavigate,
  layout = 'primary-left',
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <div className={`py-8 sm:py-12 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Primary Dominant Image (7 cols) */}
        <div
          className={`lg:col-span-7 ${
            layout === 'primary-right' ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="group relative rounded-[8px] overflow-hidden bg-[#173C62] aspect-[4/3] sm:aspect-[3/2]">
            <img
              src={primaryImage}
              alt={primaryImageAlt || title}
              loading="lazy"
              className="w-full h-full object-cover filter brightness-[0.94] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/40 via-transparent to-transparent pointer-events-none" />
            {primaryCaption && (
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-[11px] uppercase tracking-[0.14em] text-white/90 bg-[#173C62]/70 px-2.5 py-1 rounded-[4px] backdrop-blur-sm">
                  {primaryCaption}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Secondary Supporting Column: Smaller Image + Aligned Text (5 cols) */}
        <div
          className={`lg:col-span-5 space-y-6 text-left ${
            layout === 'primary-right' ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Smaller Complementary Image (Portrait 3:4 or 4:3) */}
          <div className="group relative rounded-[8px] overflow-hidden bg-[#173C62] aspect-[4/3] sm:aspect-[16/10] max-w-sm">
            <img
              src={secondaryImage}
              alt={secondaryImageAlt || title}
              loading="lazy"
              className="w-full h-full object-cover filter brightness-[0.95] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            {secondaryCaption && (
              <div className="absolute bottom-3 left-3 z-10">
                <span className="text-[10px] uppercase tracking-[0.12em] text-white/90 bg-[#173C62]/75 px-2 py-0.5 rounded-[4px] backdrop-blur-sm">
                  {secondaryCaption}
                </span>
              </div>
            )}
          </div>

          {/* Short Aligned Editorial Text */}
          <div className="space-y-3 pt-2">
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

            {/* Optional Specifications List */}
            {specs && specs.length > 0 && (
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-200">
                {specs.map((spec, sIdx) => (
                  <div key={sIdx} className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-[0.12em] text-[#64748B] block font-medium">
                      {spec.label}
                    </span>
                    <span className="text-xs font-semibold text-[#173C62] block">
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
    </div>
  );
};
