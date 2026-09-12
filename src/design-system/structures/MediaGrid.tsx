import React from 'react';
import { Image, AspectRatio } from '../atoms/Image';
import { MediaCaption } from '../molecules/MediaCaption';

export interface MediaGridItem {
  src: string;
  alt: string;
  caption?: string;
  technicalId?: string;
  aspectRatio?: AspectRatio;
  colSpan?: 1 | 2;
}

export interface MediaGridProps {
  items: MediaGridItem[];
  columns?: 2 | 3;
  className?: string;
}

export const MediaGrid: React.FC<MediaGridProps> = ({
  items,
  columns = 3,
  className = '',
}) => {
  const colClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-6 lg:gap-8 ${className}`}>
      {items.map((item, idx) => (
        <div key={idx} className={item.colSpan === 2 ? 'md:col-span-2 space-y-2' : 'space-y-2'}>
          <Image
            src={item.src}
            alt={item.alt}
            aspectRatio={item.aspectRatio || (item.colSpan === 2 ? '21/9' : '16/10')}
            withBorder
          />
          {item.caption && (
            <MediaCaption
              caption={item.caption}
              technicalId={item.technicalId}
            />
          )}
        </div>
      ))}
    </div>
  );
};
