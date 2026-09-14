import React, { useState } from 'react';

export type AspectRatio = '16/9' | '16/10' | '4/3' | '3/2' | '1/1' | '21/9' | 'auto';
export type ImageRadius = 'none' | 'surface' | 'image' | 'imageLarge' | 'feature' | 'pill';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: AspectRatio;
  radius?: ImageRadius;
  fallbackSrc?: string;
  className?: string;
  containerClassName?: string;
  withBorder?: boolean;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  aspectRatio = '16/10',
  radius = 'image',
  fallbackSrc = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  className = '',
  containerClassName = '',
  withBorder = false,
  loading = 'lazy',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);

  const aspectClasses: Record<AspectRatio, string> = {
    '16/9': 'aspect-[16/9]',
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
    'auto': 'aspect-auto',
  };

  const radiusClasses: Record<ImageRadius, string> = {
    none: 'rounded-none',
    surface: 'rounded-[8px]',
    image: 'rounded-[8px]',
    imageLarge: 'rounded-[8px]',
    feature: 'rounded-[8px]',
    pill: 'rounded-full',
  };

  const borderClass = withBorder ? 'border border-[#E5E7EB]' : '';
  const currentRadius = radiusClasses[radius];

  return (
    <div
      className={`relative w-full overflow-hidden bg-slate-100 ${currentRadius} ${aspectClasses[aspectRatio]} ${borderClass} ${containerClassName}`}
    >
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        onError={() => {
          if (fallbackSrc && currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
        }}
        className={`w-full h-full object-cover object-center ${currentRadius} transition-transform duration-500 ease-out ${className}`}
        {...props}
      />
    </div>
  );
};

