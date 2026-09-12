import React from 'react';
import { Tag } from '../atoms/Tag';

export interface MosaicItem {
  imageSrc: string;
  imageAlt: string;
  label?: string;
  caption?: string;
  span?: 'tall' | 'wide' | 'standard';
}

export interface AsymmetricMediaMosaicProps {
  items: MosaicItem[];
  className?: string;
}

/**
 * Asymmetric Media Mosaic
 * High-impact photographic composition for engineering storytelling.
 * Features soft 24-32px rounded corners, natural crop ratios, zero box shadows,
 * and restrained editorial caption overlays.
 */
export const AsymmetricMediaMosaic: React.FC<AsymmetricMediaMosaicProps> = ({
  items,
  className = '',
}) => {
  if (!items || items.length === 0) return null;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 ${className}`}>
      {/* Primary Feature (Left, 7 columns) */}
      {items[0] && (
        <div className="md:col-span-7 relative group overflow-hidden rounded-[20px] aspect-[4/3] md:aspect-[16/11] bg-slate-100">
          <img
            src={items[0].imageSrc}
            alt={items[0].imageAlt}
            className="w-full h-full object-cover object-center rounded-[20px] transition-transform duration-[400ms] ease-out group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/75 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex items-end justify-between gap-4">
            <div className="space-y-1 text-white">
              {items[0].label && (
                <Tag variant="dark" shape="pill" className="mb-2">
                  {items[0].label}
                </Tag>
              )}
              {items[0].caption && (
                <p className="text-sm sm:text-base font-sans font-medium text-white/90">
                  {items[0].caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Secondary Stack (Right, 5 columns) */}
      <div className="md:col-span-5 flex flex-col gap-6 lg:gap-8">
        {items.slice(1, 3).map((item, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-[18px] aspect-[16/10] md:aspect-[16/9] flex-1 bg-slate-100"
          >
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="w-full h-full object-cover object-center rounded-[18px] transition-transform duration-[400ms] ease-out group-hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white space-y-1">
              {item.label && (
                <Tag variant="dark" shape="pill" className="mb-1">
                  {item.label}
                </Tag>
              )}
              {item.caption && (
                <p className="text-xs sm:text-sm font-sans font-medium text-white/90">
                  {item.caption}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
