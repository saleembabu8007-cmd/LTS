import React from 'react';

export type ImageAspectRatio = '16:9' | '16:10' | '4:3' | '3:2' | '1:1' | '21:9' | 'auto';

export interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
  technicalId?: string;
  aspectRatio?: ImageAspectRatio;
  zoomOnHover?: boolean;
  priority?: boolean;
  dark?: boolean;
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
}

const ASPECT_RATIO_CLASSES: Record<ImageAspectRatio, string> = {
  '16:9': 'aspect-[16/9]',
  '16:10': 'aspect-[16/10]',
  '4:3': 'aspect-[4/3]',
  '3:2': 'aspect-[3/2]',
  '1:1': 'aspect-square',
  '21:9': 'aspect-[21/9]',
  'auto': 'aspect-auto',
};

export const ImageBlock: React.FC<ImageBlockProps> = ({
  src,
  alt,
  caption,
  tag,
  technicalId,
  aspectRatio = '16:10',
  zoomOnHover = true,
  priority = false,
  dark = false,
  className = '',
  imageClassName = '',
  onClick,
}) => {
  const aspectClass = ASPECT_RATIO_CLASSES[aspectRatio];

  return (
    <figure
      className={`group relative flex flex-col space-y-2.5 ${className}`}
      onClick={onClick}
    >
      {/* Authentic Engineering Frame with 2px Universal Radius */}
      <div
        className={`relative w-full overflow-hidden rounded-[18px] border ${
          dark
            ? 'border-white/10 bg-[#173C62]'
            : 'border-[#E5E7EB] bg-slate-100'
        } ${aspectClass} ${onClick ? 'cursor-pointer' : ''}`}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover object-center transition-transform duration-500 ease-out ${
            zoomOnHover ? 'group-hover:scale-[1.02]' : ''
          } ${imageClassName}`}
        />

        {/* Technical Specification Badge */}
        {tag && (
          <div className="absolute top-3 left-3 bg-[#173C62]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase font-mono tracking-[0.14em] text-white rounded-[1px] border border-white/10">
            {tag}
          </div>
        )}

        {/* Technical Asset Code */}
        {technicalId && (
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[9px] font-mono text-slate-300 rounded-[1px]">
            {technicalId}
          </div>
        )}
      </div>

      {/* Restrained Editorial Caption */}
      {caption && (
        <figcaption
          className={`typography-caption max-prose-editorial text-xs leading-relaxed ${
            dark ? 'text-slate-400' : 'text-[#64748B]'
          }`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
