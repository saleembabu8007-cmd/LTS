import React from 'react';
import { IconArrow } from '../icons';

export interface MosaicPlate {
  src: string;
  alt?: string;
  caption?: string;
  plateNumber?: string;
  objectPosition?: string;
}

export interface ImageEditorialMosaicProps {
  title: string;
  eyebrow?: string;
  description?: string;
  dominantImage: MosaicPlate;
  supportingImage1: MosaicPlate;
  supportingImage2: MosaicPlate;
  href?: string;
  ctaText?: string;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * TYPE 04 — EDITORIAL MOSAIC
 * 
 * One dominant architectural photograph + two smaller supporting images
 * featuring different aspect ratios (landscape + portrait + standard).
 * Designed like an architectural monograph plate spread.
 */
export const ImageEditorialMosaic: React.FC<ImageEditorialMosaicProps> = ({
  title,
  eyebrow,
  description,
  dominantImage,
  supportingImage1,
  supportingImage2,
  href,
  ctaText = 'View Complete Dossier',
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
    <div className={`py-10 sm:py-16 ${className}`}>
      {/* Editorial Header */}
      {(title || eyebrow) && (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 text-left">
          <div className="space-y-1.5 max-w-2xl">
            {eyebrow && (
              <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] font-semibold block">
                {eyebrow}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-[#4A5568] leading-relaxed pt-1">
                {description}
              </p>
            )}
          </div>

          {href && (
            <a
              href={href}
              onClick={handleClick}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#12304F] transition-colors pb-1"
            >
              <span>{ctaText}</span>
              <IconArrow size="sm" color="primary" interactive />
            </a>
          )}
        </div>
      )}

      {/* Asymmetric 3-Plate Mosaic Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Dominant Large Plate (7 cols, 16:10 or 3:2) */}
        <div className="lg:col-span-7 group relative rounded-[8px] overflow-hidden bg-[#173C62] aspect-[16/10] sm:aspect-[3/2] flex flex-col justify-end">
          <img
            src={dominantImage.src}
            alt={dominantImage.alt || title}
            loading="lazy"
            className={`w-full h-full object-cover filter brightness-[0.93] transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
              dominantImage.objectPosition || 'object-center'
            }`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
            <span className="text-[11px] uppercase tracking-[0.14em] font-medium bg-[#173C62]/80 px-2.5 py-1 rounded-[4px] backdrop-blur-sm">
              {dominantImage.plateNumber || 'PLATE 01'}
            </span>
            {dominantImage.caption && (
              <span className="text-xs text-slate-200 font-normal truncate max-w-[70%]">
                {dominantImage.caption}
              </span>
            )}
          </div>
        </div>

        {/* Supporting Stacked Column (5 cols) with 2 Differing Ratios */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-6">
          
          {/* Supporting Plate 1: Landscape 16:9 / 4:3 */}
          <div className="group relative rounded-[8px] overflow-hidden bg-[#173C62] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9] flex flex-col justify-end">
            <img
              src={supportingImage1.src}
              alt={supportingImage1.alt || 'Supporting detail 1'}
              loading="lazy"
              className={`w-full h-full object-cover filter brightness-[0.94] transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                supportingImage1.objectPosition || 'object-center'
              }`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/50 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
              <span className="text-[10px] uppercase tracking-[0.12em] font-medium bg-[#173C62]/80 px-2 py-0.5 rounded-[4px] backdrop-blur-sm">
                {supportingImage1.plateNumber || 'PLATE 02'}
              </span>
              {supportingImage1.caption && (
                <span className="text-[11px] text-slate-200 font-normal truncate max-w-[65%]">
                  {supportingImage1.caption}
                </span>
              )}
            </div>
          </div>

          {/* Supporting Plate 2: Technical Detail / Alternate Ratio */}
          <div className="group relative rounded-[8px] overflow-hidden bg-[#173C62] aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/9] flex flex-col justify-end">
            <img
              src={supportingImage2.src}
              alt={supportingImage2.alt || 'Supporting detail 2'}
              loading="lazy"
              className={`w-full h-full object-cover filter brightness-[0.94] transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                supportingImage2.objectPosition || 'object-center'
              }`}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/50 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
              <span className="text-[10px] uppercase tracking-[0.12em] font-medium bg-[#173C62]/80 px-2 py-0.5 rounded-[4px] backdrop-blur-sm">
                {supportingImage2.plateNumber || 'PLATE 03'}
              </span>
              {supportingImage2.caption && (
                <span className="text-[11px] text-slate-200 font-normal truncate max-w-[65%]">
                  {supportingImage2.caption}
                </span>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
