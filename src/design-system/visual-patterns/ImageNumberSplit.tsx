import React from 'react';
import { IconArrow } from '../icons';

export interface ImageNumberSplitProps {
  title: string;
  category?: string;
  eyebrow?: string;
  imageSrc: string;
  imageAlt?: string;
  imageCaption?: string;
  metricValue: string;
  metricLabel: string;
  metricSubtext?: string;
  description: string;
  citation?: string;
  href?: string;
  ctaText?: string;
  onNavigate?: (slug: string) => void;
  layout?: 'image-left' | 'image-right';
  aspectRatio?: '4/3' | '16/10' | '3/2';
  objectPosition?: string;
  className?: string;
}

/**
 * TYPE 08 — IMAGE + NUMBER
 * 
 * Large project image paired directly with a monumental verified statistic or project fact.
 * Bridges architectural engineering photography with undeniable forensic evidence.
 */
export const ImageNumberSplit: React.FC<ImageNumberSplitProps> = ({
  title,
  category,
  eyebrow,
  imageSrc,
  imageAlt = '',
  imageCaption,
  metricValue,
  metricLabel,
  metricSubtext,
  description,
  citation = 'AUDITED COMMISSIONING DOSSIER • STATUTORY VERIFIED',
  href,
  ctaText = 'View Performance Records',
  onNavigate,
  layout = 'image-left',
  aspectRatio = '4/3',
  objectPosition = 'object-center',
  className = '',
}) => {
  const aspectClass = {
    '4/3': 'aspect-[4/3]',
    '16/10': 'aspect-[4/3] sm:aspect-[16/10]',
    '3/2': 'aspect-[4/3] sm:aspect-[3/2]',
  }[aspectRatio];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <div className={`py-10 sm:py-16 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Large Project Image (7 cols) */}
        <div
          className={`lg:col-span-7 ${
            layout === 'image-right' ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div
            className={`group relative rounded-[8px] overflow-hidden bg-[#173C62] ${aspectClass}`}
          >
            <img
              src={imageSrc}
              alt={imageAlt || title}
              loading="lazy"
              className={`w-full h-full object-cover filter brightness-[0.94] transition-transform duration-700 ease-out group-hover:scale-[1.02] ${objectPosition}`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/40 via-transparent to-transparent pointer-events-none" />
            {imageCaption && (
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-[11px] uppercase tracking-[0.14em] text-white/90 bg-[#173C62]/75 px-3 py-1 rounded-[4px] backdrop-blur-sm">
                  {imageCaption}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Monumental Metric & Editorial Narrative (5 cols) */}
        <div
          className={`lg:col-span-5 space-y-6 text-left ${
            layout === 'image-right' ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {(category || eyebrow) && (
            <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] font-semibold block">
              {category || eyebrow}
            </span>
          )}

          {/* Monumental Verified Number */}
          <div className="space-y-1 border-b border-slate-200 pb-5">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#173C62] tracking-tight leading-none">
              {metricValue}
            </div>
            <div className="text-xs uppercase tracking-[0.14em] font-semibold text-[#0B1320] pt-2">
              {metricLabel}
            </div>
            {metricSubtext && (
              <p className="text-xs text-[#64748B]">
                {metricSubtext}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] tracking-tight leading-snug">
              {title}
            </h3>
            <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
              {description}
            </p>
          </div>

          {citation && (
            <div className="text-[10px] uppercase tracking-[0.14em] font-medium text-[#64748B] pt-1">
              {citation}
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
