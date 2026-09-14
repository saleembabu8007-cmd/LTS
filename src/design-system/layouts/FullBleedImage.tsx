import React from 'react';

interface FullBleedImageProps {
  src: string;
  alt: string;
  eyebrow?: string;
  headline?: string;
  caption?: string;
  aspectRatio?: 'hero' | 'panorama' | 'stadium';
  className?: string;
}

export const FullBleedImage: React.FC<FullBleedImageProps> = ({
  src,
  alt,
  eyebrow,
  headline,
  caption,
  aspectRatio = 'hero',
  className = '',
}) => {
  const aspectClasses = {
    hero: 'aspect-[16/9] min-h-[480px] lg:min-h-[640px]',
    panorama: 'aspect-[21/9] min-h-[360px] lg:min-h-[500px]',
    stadium: 'aspect-[2/1] min-h-[400px]',
  };

  return (
    <figure className={`relative w-full overflow-hidden bg-[#173C62] ${aspectClasses[aspectRatio]} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center"
        loading="eager"
      />
      {/* Subtle cinematic gradient for typography legibility */}
      {(eyebrow || headline || caption) && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/30 to-transparent flex flex-col justify-end p-8 sm:p-12 lg:p-16">
          <div className="max-w-4xl space-y-3 text-white">
            {eyebrow && (
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999999] block">
                {eyebrow}
              </span>
            )}
            {headline && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-snug">
                {headline}
              </h2>
            )}
            {caption && (
              <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl leading-relaxed">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </figure>
  );
};
