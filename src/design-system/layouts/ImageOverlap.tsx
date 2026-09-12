import React from 'react';

export interface ImageOverlapProps {
  primaryImage: {
    url: string;
    alt?: string;
  };
  secondaryImage: {
    url: string;
    alt?: string;
    caption?: string;
  };
  reverse?: boolean;
  className?: string;
}

/**
 * ImageOverlap Archetype (J: Overlapping image composition)
 * Architectural layered image composition using soft 18px radiuses and subtle elevation depth.
 */
export const ImageOverlap: React.FC<ImageOverlapProps> = ({
  primaryImage,
  secondaryImage,
  reverse = false,
  className = '',
}) => {
  return (
    <div className={`relative w-full pb-10 sm:pb-16 ${className}`}>
      {/* Primary dominant image */}
      <div className={`relative aspect-[16/10] sm:aspect-[16/9] w-full sm:w-[82%] overflow-hidden rounded-[18px] bg-[#0B1C2F] ${reverse ? 'sm:ml-auto' : ''}`}>
        <img
          src={primaryImage.url}
          alt={primaryImage.alt || 'LTSGROUP Project Engineering'}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Secondary offset floating image with subtle professional shadow */}
      <div
        className={`absolute bottom-0 w-[55%] sm:w-[42%] aspect-[4/3] overflow-hidden rounded-[18px] bg-[#0B1C2F] shadow-elevated border-2 sm:border-4 border-white ${
          reverse ? 'left-0' : 'right-0'
        }`}
      >
        <img
          src={secondaryImage.url}
          alt={secondaryImage.alt || 'LTSGROUP Engineering Detail'}
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {secondaryImage.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-[#0B1C2F]/80 p-2.5 text-[11px] font-mono text-white/90 uppercase tracking-wider">
            {secondaryImage.caption}
          </div>
        )}
      </div>
    </div>
  );
};
