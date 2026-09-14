import React from 'react';

export interface EditorialImageProps {
  imageSrc: string;
  imageAlt?: string;
  caption?: string;
  figureNumber?: string;
  location?: string;
  aspectRatio?: '16/10' | '4/3' | '3/2' | 'square';
  className?: string;
}

/**
 * 04 / Editorial Image Pattern
 * Large architectural photograph with minimal technical figure annotation below.
 * Conforms to LTSGROUP Image-First rules:
 * - Standalone architectural visual without card borders.
 * - Soft 18–20px radius.
 * - Subtle 1.02 hover zoom.
 * - Concise, monospace technical figure annotation.
 */
export const EditorialImage: React.FC<EditorialImageProps> = ({
  imageSrc,
  imageAlt = '',
  caption,
  figureNumber,
  location,
  aspectRatio = '16/10',
  className = '',
}) => {
  const aspectClass = {
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    square: 'aspect-square',
  }[aspectRatio];

  return (
    <figure className={`group space-y-3 ${className}`}>
      <div className={`relative overflow-hidden rounded-[20px] bg-[#173C62] border border-[#E5E7EB] shadow-sm ${aspectClass}`}>
        <img
          src={imageSrc}
          alt={imageAlt || caption || 'Editorial architectural visual'}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/assets/images/project-solar.jpg';
          }}
        />
      </div>

      {(caption || figureNumber || location) && (
        <figcaption className="flex items-baseline justify-between gap-4 text-[11px] font-mono text-[#999999] px-1">
          <div className="flex items-center gap-2">
            {figureNumber && (
              <span className="font-semibold text-[#173C62]">{figureNumber}</span>
            )}
            {caption && <span className="truncate">{caption}</span>}
          </div>
          {location && (
            <span className="shrink-0 uppercase tracking-wider">{location}</span>
          )}
        </figcaption>
      )}
    </figure>
  );
};
