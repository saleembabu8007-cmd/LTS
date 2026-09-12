import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export interface IndustryCardProps {
  id: string;
  title: string;
  scope: string;
  imageUrl: string;
  imageAlt?: string;
  href?: string;
  capabilities?: string[];
  aspectRatio?: '16/10' | '4/3' | '21/9';
  variant?: 'text-below' | 'overlay';
  onNavigate?: (slug: string) => void;
  className?: string;
}

export type IndustryVisualCardProps = IndustryCardProps;

/**
 * IndustryImageCard / IndustryVisualCard
 * Purpose-built for sector operating environments.
 * Conforms to LTSGROUP Image Card rules:
 * - Supports variable aspect ratios (16/10, 4/3, 21/9) for asymmetric rhythms.
 * - Dark overlay applied ONLY when in 'overlay' mode.
 * - 16–20px soft radius, subtle 1.025 hover scale.
 */
export const IndustryImageCard: React.FC<IndustryCardProps> = ({
  id,
  title,
  scope,
  imageUrl,
  imageAlt = '',
  href = `/industries`,
  capabilities = [],
  aspectRatio = '16/10',
  variant = 'text-below',
  onNavigate,
  className = '',
}) => {
  const aspectClass = {
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '21/9': 'aspect-[16/9] sm:aspect-[21/9]',
  }[aspectRatio];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  if (variant === 'overlay') {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`group relative block w-full select-none text-left overflow-hidden rounded-[20px] bg-[#0B1C2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 ${className}`}
        aria-label={`View sector capabilities for ${title}`}
      >
        <div className={`relative w-full overflow-hidden ${aspectClass}`}>
          <img
            src={imageUrl}
            alt={imageAlt || title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
            }}
          />
          {/* Subtle bottom scrim ONLY because text is overlayed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/85 via-[#0B1320]/25 to-transparent pointer-events-none" />

          {/* Overlay Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 text-white flex flex-col justify-end z-10">
            <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight flex items-center justify-between gap-3">
              <span>{title}</span>
              <span className="shrink-0 text-white transition-transform duration-180 group-hover:translate-x-1" aria-hidden="true">
                <ArrowRight className="w-4 h-4" />
              </span>
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-white/80 line-clamp-2 font-normal">
              {scope}
            </p>
            {capabilities.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {capabilities.slice(0, 3).map((cap, i) => (
                  <span
                    key={i}
                    className="text-[10.5px] font-mono text-white/90 bg-white/15 backdrop-blur-xs px-2 py-0.5 rounded-[6px]"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </a>
    );
  }

  // Default: text-below (NO overlay over the photo)
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group block select-none text-left rounded-[18px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 ${className}`}
      aria-label={`View sector capabilities for ${title}`}
    >
      <div className={`relative w-full overflow-hidden rounded-[16px] sm:rounded-[18px] bg-[#0B1C2F] ${aspectClass}`}>
        <img
          src={imageUrl}
          alt={imageAlt || title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
          }}
        />
      </div>

      <div className="mt-4 space-y-1.5">
        <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200 flex items-center justify-between gap-3">
          <span>{title}</span>
          <span className="shrink-0 text-[#173C62] transition-transform duration-180 group-hover:translate-x-1" aria-hidden="true">
            <ArrowRight className="w-4 h-4" />
          </span>
        </h3>

        <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed line-clamp-2 font-normal">
          {scope}
        </p>

        {capabilities.length > 0 && (
          <div className="pt-2 flex flex-wrap gap-1.5">
            {capabilities.slice(0, 3).map((cap, i) => (
              <span
                key={i}
                className="text-[10.5px] font-mono text-[#173C62] bg-[#F8FAFC] border border-[#E5E7EB] px-2 py-0.5 rounded-[6px]"
              >
                {cap}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

// Backwards-compatible alias
export const IndustryVisualCard = IndustryImageCard;
