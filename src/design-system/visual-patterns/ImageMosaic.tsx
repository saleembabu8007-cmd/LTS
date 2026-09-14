import React from 'react';

export interface MosaicImageItem {
  src: string;
  alt?: string;
  caption?: string;
  tag?: string;
}

export interface ImageMosaicProps {
  primaryImage: MosaicImageItem;
  supportingImages: [MosaicImageItem, MosaicImageItem];
  layoutVariant?: 'default' | 'reversed';
  className?: string;
}

/**
 * 06 / Image Mosaic Pattern
 * Asymmetric composition pairing one large dominant image + two smaller supporting images.
 * Conforms to LTSGROUP Image-First rules:
 * - One dominant image (7-col) paired with two stacked supporting images (5-col).
 * - Layout variants: 'default' (dominant on left) or 'reversed' (dominant on right).
 * - Soft 18–20px rounded corners on all image containers.
 * - Subtle 1.02 hover zoom on individual items.
 * - Monospace caption & tag annotations.
 */
export const ImageMosaic: React.FC<ImageMosaicProps> = ({
  primaryImage,
  supportingImages,
  layoutVariant = 'default',
  className = '',
}) => {
  const isReversed = layoutVariant === 'reversed';

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch ${className}`}>
      
      {/* Primary Dominant Image (7 Columns) */}
      <div className={`lg:col-span-7 flex flex-col ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="group relative overflow-hidden rounded-[20px] bg-[#173C62] border border-[#E5E7EB] shadow-sm aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-full min-h-[360px] sm:min-h-[460px]">
          <img
            src={primaryImage.src}
            alt={primaryImage.alt || primaryImage.caption || 'Primary architectural asset'}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/assets/images/mep-construction.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/70 via-transparent to-transparent pointer-events-none" />

          {/* Tag & Caption */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white flex flex-wrap items-end justify-between gap-3">
            <div>
              {primaryImage.tag && (
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-80 block mb-1">
                  {primaryImage.tag}
                </span>
              )}
              {primaryImage.caption && (
                <p className="text-sm sm:text-base font-light tracking-wide">
                  {primaryImage.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Two Supporting Stacked Images (5 Columns) */}
      <div className={`lg:col-span-5 flex flex-col gap-6 sm:gap-8 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
        
        {/* Supporting Image 01 */}
        <div className="group relative overflow-hidden rounded-[20px] bg-[#173C62] border border-[#E5E7EB] shadow-sm aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:flex-1 min-h-[220px]">
          <img
            src={supportingImages[0].src}
            alt={supportingImages[0].alt || supportingImages[0].caption || 'Supporting asset 01'}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/assets/images/project-solar.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/70 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
            {supportingImages[0].tag && (
              <span className="text-[9px] font-mono uppercase tracking-widest opacity-80 block mb-0.5">
                {supportingImages[0].tag}
              </span>
            )}
            {supportingImages[0].caption && (
              <p className="text-xs sm:text-sm font-light">
                {supportingImages[0].caption}
              </p>
            )}
          </div>
        </div>

        {/* Supporting Image 02 */}
        <div className="group relative overflow-hidden rounded-[20px] bg-[#173C62] border border-[#E5E7EB] shadow-sm aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:flex-1 min-h-[220px]">
          <img
            src={supportingImages[1].src}
            alt={supportingImages[1].alt || supportingImages[1].caption || 'Supporting asset 02'}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/assets/images/industry-logistics.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/70 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
            {supportingImages[1].tag && (
              <span className="text-[9px] font-mono uppercase tracking-widest opacity-80 block mb-0.5">
                {supportingImages[1].tag}
              </span>
            )}
            {supportingImages[1].caption && (
              <p className="text-xs sm:text-sm font-light">
                {supportingImages[1].caption}
              </p>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
