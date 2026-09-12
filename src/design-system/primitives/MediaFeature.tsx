import React from 'react';
import { Container } from '../structures/Container';
import { AspectRatio, ImageRadius } from '../atoms/Image';

export interface MediaFeatureProps {
  imageSrc: string;
  imageAlt: string;
  aspectRatio?: AspectRatio;
  radius?: ImageRadius;
  overlay?: React.ReactNode;
  caption?: React.ReactNode;
  fullBleed?: boolean;
  className?: string;
}

/**
 * MediaFeature: Large, intentional photographic moment with soft 32–36px rounded corners.
 */
export const MediaFeature: React.FC<MediaFeatureProps> = ({
  imageSrc,
  imageAlt,
  aspectRatio = '21/9',
  radius = 'feature',
  overlay,
  caption,
  fullBleed = false,
  className = '',
}) => {
  const aspectClasses: Record<AspectRatio, string> = {
    '16/9': 'aspect-[16/9]',
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[16/9] md:aspect-[21/9]',
    auto: 'aspect-auto',
  };

  const radiusClasses: Record<ImageRadius, string> = {
    none: 'rounded-none',
    surface: 'rounded-[16px]',
    image: 'rounded-[18px]',
    imageLarge: 'rounded-[20px]',
    feature: 'rounded-[20px]',
    pill: 'rounded-full',
  };

  const currentRadius = fullBleed ? 'rounded-none' : radiusClasses[radius];

  const content = (
    <div className={`space-y-3 ${className}`}>
      <div className={`relative w-full overflow-hidden ${currentRadius} ${aspectClasses[aspectRatio]} bg-slate-100`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`w-full h-full object-cover object-center ${currentRadius} transition-transform duration-[400ms] ease-out hover:scale-[1.025]`}
        />
        {overlay && (
          <div className="absolute inset-0 flex items-end p-6 sm:p-10">
            {overlay}
          </div>
        )}
      </div>

      {caption && <div className="px-2">{caption}</div>}
    </div>
  );

  if (fullBleed) return content;

  return (
    <section className="py-8 sm:py-12">
      <Container>{content}</Container>
    </section>
  );
};
