import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export interface CompactImageCardProps {
  title: string;
  imageUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  eyebrow?: string;
  description?: string;
  meta?: string;
  badge?: string;
  href?: string;
  onNavigate?: (slug: string) => void;
  onClick?: () => void;
  className?: string;
}

/**
 * CompactImageCard
 * Small visual weight card for secondary listings, component indices, and related services rails.
 * Conforms to LTSGROUP Image Card rules:
 * - Horizontal composition with left thumbnail and right content.
 * - 10–12px thumbnail radius, 12–14px container radius.
 * - Subtle hover scale (1.025), zero aggressive effects.
 * - Proportional compact layout ensuring zero overflow on 360px mobile viewports.
 */
export const CompactImageCard: React.FC<CompactImageCardProps> = ({
  title,
  imageUrl,
  imageSrc,
  imageAlt = '',
  eyebrow,
  description,
  meta,
  badge,
  href,
  onNavigate,
  onClick,
  className = '',
}) => {
  const finalImage = imageUrl || imageSrc || 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80';

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
      className={`group flex items-center gap-3 sm:gap-4 p-2.5 sm:p-4 rounded-[14px] bg-white border border-[#E5E7EB] hover:border-[#173C62] text-left select-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer ${className}`}
    >
      {/* Thumbnail Frame (10–12px radius, NO overlay) */}
      <div className="relative w-16 h-14 sm:w-24 sm:h-20 shrink-0 overflow-hidden rounded-[10px] bg-[#0B1C2F]">
        <img
          src={finalImage}
          alt={imageAlt || title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.025]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80';
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {(eyebrow || meta || badge) && (
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            {eyebrow && (
              <span className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-[0.14em] text-[#64748B] block truncate">
                {eyebrow}
              </span>
            )}
            {badge && (
              <span className="font-mono text-[9.5px] uppercase tracking-wider px-1.5 py-0.2 bg-[#EDF3F9] text-[#173C62] rounded-xs font-semibold">
                {badge}
              </span>
            )}
            {meta && (
              <span className="font-mono text-[10px] text-[#94A3B8] hidden sm:inline">
                {meta}
              </span>
            )}
          </div>
        )}

        <h4 className="text-xs sm:text-sm font-medium text-[#0B1320] leading-snug truncate group-hover:text-[#173C62] transition-colors">
          {title}
        </h4>

        {description && (
          <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-[#4A5568] line-clamp-1 leading-normal font-normal">
            {description}
          </p>
        )}
      </div>

      {/* Action Indicator */}
      {(href || onClick) && (
        <div className="shrink-0 text-[#94A3B8] group-hover:text-[#173C62] transition-colors pl-1">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </CardWrapper>
  );
};
