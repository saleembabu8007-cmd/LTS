import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export interface StandardImageCardProps {
  title: string;
  imageUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;
  description?: string;
  meta?: string;
  tags?: string[];
  href?: string;
  ctaText?: string;
  aspectRatio?: '16/10' | '4/3' | '3/2';
  bordered?: boolean;
  onNavigate?: (slug: string) => void;
  onClick?: () => void;
  className?: string;
}

/**
 * StandardImageCard
 * Medium visual weight card for general capabilities, equipment groups, and technical topics.
 * Conforms to LTSGROUP Image Card rules:
 * - Text placed BELOW the image.
 * - Zero dark overlay on the photograph (preserves natural daylight and authentic colors).
 * - 16–18px soft radius, subtle 1.025 image hover scale.
 * - Responsive padding and clean tag wrapping for mobile viewports.
 */
export const StandardImageCard: React.FC<StandardImageCardProps> = ({
  title,
  imageUrl,
  imageSrc,
  imageAlt = '',
  eyebrow,
  description,
  meta,
  tags,
  href,
  ctaText = 'Explore details',
  aspectRatio = '16/10',
  bordered = true,
  onNavigate,
  onClick,
  className = '',
}) => {
  const finalImage = imageUrl || imageSrc || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80';

  const aspectClass = {
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
  }[aspectRatio];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
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
    : onClick
    ? {
        onClick,
        role: 'button',
        tabIndex: 0,
        'aria-label': `${title}${eyebrow ? ` - ${eyebrow}` : ''}`,
      }
    : {};

  return (
    <CardWrapper
      {...(wrapperProps as any)}
      className={`group block select-none text-left rounded-[18px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer ${
        bordered
          ? 'bg-white p-3.5 sm:p-5 border border-[#E5E7EB] hover:border-[#CBD5E1]'
          : 'bg-transparent p-0'
      } ${className}`}
    >
      {/* Photo Frame (16–18px radius, NO dark overlay) */}
      <div className={`relative w-full overflow-hidden rounded-[14px] sm:rounded-[16px] bg-[#0B1C2F] ${aspectClass}`}>
        <img
          src={finalImage}
          alt={imageAlt || title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80';
          }}
        />
      </div>

      {/* Content Area Below Image */}
      <div className="mt-3.5 sm:mt-4 space-y-1.5 sm:space-y-2">
        {(eyebrow || meta) && (
          <div className="flex items-center justify-between text-[11px] font-mono">
            {eyebrow && (
              <span className="uppercase tracking-[0.16em] text-[#173C62] font-semibold block truncate">
                {eyebrow}
              </span>
            )}
            {meta && (
              <span className="text-[#94A3B8]">
                {meta}
              </span>
            )}
          </div>
        )}

        <h3 className="text-base sm:text-lg lg:text-xl font-medium text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
          {title}
        </h3>

        {description && (
          <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed line-clamp-2 font-normal">
            {description}
          </p>
        )}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 bg-[#F1F5F9] text-[#173C62] text-[10px] sm:text-[11px] font-mono rounded-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {(href || onClick) && (
          <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#173C62]">
            <span className="uppercase tracking-wider text-[10.5px] sm:text-[11px]">{ctaText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        )}
      </div>
    </CardWrapper>
  );
};
