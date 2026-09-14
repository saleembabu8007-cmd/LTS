import React, { useState } from 'react';
import { Play } from 'lucide-react';

export type MediaVariant =
  | 'image'
  | 'image-overlay'
  | 'image-caption'
  | 'image-feature'
  | 'video-placeholder';

export type MediaAspectRatio = '16/9' | '16/10' | '4/3' | '3/2' | '1/1' | '21/9' | 'auto';
export type MediaRadius = 'none' | 'sm' | 'md' | 'lg' | 'image' | 'feature';

export interface MediaProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: MediaVariant;
  src: string;
  alt: string;
  aspectRatio?: MediaAspectRatio;
  radius?: MediaRadius;
  caption?: string;
  attribution?: string;
  overlayBadge?: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  videoDuration?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  interactive?: boolean;
  containerClassName?: string;
  imageClassName?: string;
  onPlayClick?: () => void;
}

export const Media: React.FC<MediaProps> = ({
  variant = 'image',
  src,
  alt,
  aspectRatio = '16/10',
  radius = 'image',
  caption,
  attribution,
  overlayBadge,
  overlayTitle,
  overlaySubtitle,
  videoDuration,
  fallbackSrc = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  loading = 'lazy',
  interactive = false,
  containerClassName = '',
  imageClassName = '',
  onPlayClick,
  className = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);

  // Normalized Aspect Ratios
  const aspectMap: Record<MediaAspectRatio, string> = {
    '16/9': 'aspect-[16/9]',
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[21/9]',
    auto: 'aspect-auto',
  };

  // Normalized Soft-Radius System
  const radiusMap: Record<MediaRadius, string> = {
    none: 'rounded-none',
    sm: 'rounded-[8px]',
    md: 'rounded-[12px]',
    lg: 'rounded-[16px]',
    image: 'rounded-[18px]',
    feature: 'rounded-[20px]',
  };

  const actualRadiusClass = radiusMap[radius] || 'rounded-[18px]';
  const isFeatureOrInteractive = interactive || variant === 'image-feature';

  const handleImageError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <figure className={`w-full ${className}`} {...props}>
      <div
        className={`relative w-full overflow-hidden bg-[#173C62]/5 ${actualRadiusClass} ${aspectMap[aspectRatio]} ${containerClassName}`}
      >
        {/* Core Media Photography */}
        <img
          src={currentSrc}
          alt={alt}
          loading={loading}
          onError={handleImageError}
          className={`w-full h-full object-cover object-center ${actualRadiusClass} transition-transform duration-500 ease-out ${
            isFeatureOrInteractive ? 'group-hover:scale-[1.025] hover:scale-[1.025]' : ''
          } ${imageClassName}`}
        />

        {/* Variant: Image with Overlay */}
        {(variant === 'image-overlay' || overlayTitle) && (
          <>
            {/* Directional Gradient Scrim */}
            <div className={`absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent pointer-events-none ${actualRadiusClass}`} />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-left z-10">
              {overlayBadge && (
                <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#93C5FD] mb-2 font-semibold">
                  {overlayBadge}
                </span>
              )}
              {overlayTitle && (
                <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight leading-snug">
                  {overlayTitle}
                </h3>
              )}
              {overlaySubtitle && (
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl line-clamp-2">
                  {overlaySubtitle}
                </p>
              )}
            </div>
          </>
        )}

        {/* Variant: Video Placeholder */}
        {variant === 'video-placeholder' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10 transition-colors hover:bg-black/20">
            <button
              type="button"
              onClick={onPlayClick}
              aria-label={`Play video: ${alt}`}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 text-[#173C62] flex items-center justify-center pl-1 shadow-lg hover:bg-white hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
            >
              <Play className="w-6 h-6 fill-current text-[#173C62]" />
            </button>

            {videoDuration && (
              <span className="absolute bottom-4 right-4 px-2.5 py-1 bg-[#173C62]/90 text-white text-[11px] font-mono tracking-wider rounded-[6px] backdrop-blur-sm">
                {videoDuration}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Variant: Image with Caption */}
      {(variant === 'image-caption' || caption || attribution) && (
        <figcaption className="mt-3 flex items-start justify-between gap-4 text-left">
          {caption && (
            <p className="text-xs sm:text-[13px] text-[#4A5568] leading-relaxed">
              {caption}
            </p>
          )}
          {attribution && (
            <span className="font-mono text-[10.5px] text-[#94A3B8] uppercase tracking-wider shrink-0">
              {attribution}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};
