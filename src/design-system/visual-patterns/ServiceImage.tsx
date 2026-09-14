import React from 'react';
import { IconArrow } from '../icons';

export interface ServiceImageProps {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  shortLine: string; // Strictly one short line maximum
  href: string;
  numeral?: string;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * 03 / Service Image Pattern
 * Image + Service Title + Arrow. Exactly one short line maximum.
 * Conforms to LTSGROUP Image-First rules:
 * - Large crisp photography focal point (16–18px radius).
 * - Strictly one short line of description maximum.
 * - Subtle hover scale: 1.02, arrow translates 3–5px.
 */
export const ServiceImage: React.FC<ServiceImageProps> = ({
  id,
  title,
  imageSrc,
  imageAlt = '',
  shortLine,
  href,
  numeral,
  onNavigate,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`group block select-none text-left rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 ${className}`}
      aria-label={`Explore service: ${title}`}
    >
      {/* Editorial Image Header (Restrained 8px radius, zero borders/shadows) */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] bg-[#173C62] mb-4">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/assets/images/mep-construction.jpg';
          }}
        />
        {numeral && (
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-[4px] bg-[#173C62]/90 text-[10px] font-mono font-medium text-white">
            {numeral}
          </div>
        )}
      </div>

      {/* Service Title + Arrow */}
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base sm:text-lg font-medium text-[#173C62] leading-snug group-hover:text-[#173C62]/80 transition-colors">
          {title}
        </h3>
        <div className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1">
          <IconArrow size="sm" color="primary" />
        </div>
      </div>

      {/* Strictly One Short Line Maximum */}
      <p className="mt-1.5 text-xs text-[#999999] leading-normal font-normal truncate">
        {shortLine}
      </p>
    </a>
  );
};
