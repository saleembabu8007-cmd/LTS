import React from 'react';

export interface ImageTrioItem {
  url: string;
  alt?: string;
  caption?: string;
}

export interface ImageTrioProps {
  primary: ImageTrioItem;
  secondary1: ImageTrioItem;
  secondary2: ImageTrioItem;
  reverse?: boolean;
  className?: string;
}

/**
 * ImageTrio Archetype (K: Large image + two smaller supporting images)
 * Asymmetric editorial photo composition pairing a dominant narrative frame with two technical detail frames.
 */
export const ImageTrio: React.FC<ImageTrioProps> = ({
  primary,
  secondary1,
  secondary2,
  reverse = false,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center ${className}`}>
      {/* Dominant large image (7 cols) */}
      <div className={`md:col-span-7 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#0B1C2F]">
          <img
            src={primary.url}
            alt={primary.alt || 'LTSGROUP Primary Architectural Project'}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          {primary.caption && (
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1C2F]/80 to-transparent p-4 text-[12px] font-mono text-white/90">
              {primary.caption}
            </div>
          )}
        </div>
      </div>

      {/* Two supporting detail images (5 cols) */}
      <div className={`md:col-span-5 flex flex-col gap-6 md:gap-8 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#0B1C2F]">
          <img
            src={secondary1.url}
            alt={secondary1.alt || 'LTSGROUP Engineering Detail'}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          {secondary1.caption && (
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1C2F]/80 to-transparent p-3 text-[11px] font-mono text-white/90">
              {secondary1.caption}
            </div>
          )}
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#0B1C2F]">
          <img
            src={secondary2.url}
            alt={secondary2.alt || 'LTSGROUP Technical Execution'}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          {secondary2.caption && (
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1C2F]/80 to-transparent p-3 text-[11px] font-mono text-white/90">
              {secondary2.caption}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
