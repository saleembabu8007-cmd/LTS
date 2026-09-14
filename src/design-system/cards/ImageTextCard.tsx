import React from 'react';

export interface ImageTextCardProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  href?: string;
  ctaText?: string;
  layout?: 'stacked' | 'side-by-side';
  reverse?: boolean;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * ImageTextCard
 * Conforms to Rule 03 & 13: Image-first narrative unit.
 * 18px soft radius, asymmetric image emphasis, disciplined architectural typography.
 */
export const ImageTextCard: React.FC<ImageTextCardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt = '',
  href,
  ctaText = 'Explore specification →',
  layout = 'stacked',
  reverse = false,
  onNavigate,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  if (layout === 'side-by-side') {
    return (
      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center text-left ${className}`}
      >
        <div className={`md:col-span-6 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
          <div className="relative aspect-[16/11] overflow-hidden rounded-[18px] bg-[#173C62]">
            <img
              src={imageUrl}
              alt={imageAlt || title}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) hover:scale-[1.025]"
            />
          </div>
        </div>

        <div className={`md:col-span-6 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
          {subtitle && (
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.16em] font-semibold">
              {subtitle}
            </span>
          )}
          <h3 className="mt-2 text-[22px] md:text-[26px] font-medium text-[#0B1320] leading-snug tracking-tight">
            {title}
          </h3>
          <p className="mt-3 text-[15px] text-[#4A5568] leading-relaxed">
            {description}
          </p>
          {href && (
            <a
              href={href}
              onClick={handleClick}
              className="group mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173C62] hover:text-[#12304F] uppercase tracking-[0.06em]"
            >
              <span>{ctaText}</span>
              <span className="transition-transform duration-180 ease-out group-hover:translate-x-[3px]" aria-hidden="true">
                →
              </span>
            </a>
          )}
        </div>
      </div>
    );
  }

  // Stacked layout
  return (
    <div className={`text-left ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#173C62]">
        <img
          src={imageUrl}
          alt={imageAlt || title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) hover:scale-[1.025]"
        />
      </div>

      <div className="mt-4">
        {subtitle && (
          <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.16em] font-semibold">
            {subtitle}
          </span>
        )}
        <h3 className="mt-1.5 text-[20px] font-medium text-[#0B1320] leading-snug tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
          {description}
        </p>
        {href && (
          <a
            href={href}
            onClick={handleClick}
            className="group mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-[#173C62] hover:text-[#12304F] uppercase tracking-[0.06em]"
          >
            <span>{ctaText}</span>
            <span className="transition-transform duration-180 ease-out group-hover:translate-x-[3px]" aria-hidden="true">
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );
};
