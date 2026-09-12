import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface FeatureImageCardProps {
  title: string;
  imageUrl: string;
  imageAlt?: string;
  eyebrow?: string;
  description?: string;
  href?: string;
  ctaText?: string;
  aspectRatio?: '16/9' | '16/10' | '21/9';
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * FeatureImageCard
 * Large visual prominence for flagship milestones and top-level division features.
 * Conforms to LTSGROUP Image Card rules:
 * - Subtle hover scale (1.025–1.03), never aggressive.
 * - Directional scrim ONLY because text is positioned directly over the image.
 * - 20–24px soft radius, zero floating shadows.
 */
export const FeatureImageCard: React.FC<FeatureImageCardProps> = ({
  title,
  imageUrl,
  imageAlt = '',
  eyebrow,
  description,
  href,
  ctaText = 'Explore feature',
  aspectRatio = '16/10',
  onNavigate,
  className = '',
}) => {
  const aspectClass = {
    '16/9': 'aspect-[16/9]',
    '16/10': 'aspect-[16/10]',
    '21/9': 'aspect-[16/9] sm:aspect-[21/9]',
  }[aspectRatio];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const CardWrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? {
        href,
        onClick: handleClick,
        'aria-label': `${title}${eyebrow ? ` - ${eyebrow}` : ''}`,
      }
    : {};

  return (
    <CardWrapper
      {...(wrapperProps as any)}
      className={`group relative block w-full select-none overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#0B1C2F] text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 ${className}`}
    >
      {/* Media Container */}
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <img
          src={imageUrl}
          alt={imageAlt || title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80';
          }}
        />

        {/* Directional scrim applied ONLY because text is overlayed */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/90 via-[#0B1320]/40 to-transparent pointer-events-none" />

        {/* Overlay Content */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end z-10">
          {eyebrow && (
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#93C5FD] mb-2 font-semibold block">
              {eyebrow}
            </span>
          )}

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-[1.15] max-w-3xl">
            {title}
          </h3>

          {description && (
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/85 max-w-2xl font-normal leading-relaxed line-clamp-2">
              {description}
            </p>
          )}

          {href && (
            <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#93C5FD] transition-colors">
              <span>{ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};
