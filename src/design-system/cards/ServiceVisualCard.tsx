import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ServiceCardProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  imageUrl?: string;
  imageAlt?: string;
  subservices?: string[];
  numeral?: string;
  onNavigate?: (slug: string) => void;
  className?: string;
}

export type ServiceVisualCardProps = ServiceCardProps;

/**
 * ServiceImageCard / ServiceVisualCard
 * Purpose-built for operational service disciplines across Engineering, FM, and Trading.
 * Conforms to LTSGROUP Image Card rules:
 * - Clean 16–18px image header with zero artificial overlays.
 * - Numeral / Division eyebrow, title, concise scope description, verified subservice tags.
 * - Subtle hover scale (1.025) and 3px arrow translate.
 */
export const ServiceImageCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  subtitle,
  description,
  href,
  imageUrl,
  imageAlt = '',
  subservices = [],
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
      className={`group block select-none text-left rounded-[18px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 ${className}`}
      aria-label={`Explore service: ${title}`}
    >
      {/* Editorial Image Header (16–18px radius, NO dark overlay) */}
      {imageUrl && (
        <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-[#0B1C2F] mb-4">
          <img
            src={imageUrl}
            alt={imageAlt || title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80';
            }}
          />
        </div>
      )}

      {/* Metadata Line */}
      <div className="flex items-baseline justify-between gap-4">
        {numeral && (
          <span className="font-mono text-[11px] text-[#64748B] tracking-wider uppercase">
            {numeral}
          </span>
        )}
        {subtitle && (
          <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.14em] font-semibold">
            {subtitle}
          </span>
        )}
      </div>

      {/* Title & Arrow */}
      <h3 className="mt-2 text-[19px] font-medium text-[#0B1320] leading-snug group-hover:text-[#173C62] transition-colors duration-180 flex items-center justify-between gap-3">
        <span>{title}</span>
        <span className="shrink-0 text-[#173C62] transition-transform duration-180 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[2px]" aria-hidden="true">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </h3>

      {/* Description */}
      <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed line-clamp-2 font-normal">
        {description}
      </p>

      {/* Subservices List */}
      {subservices.length > 0 && (
        <ul className="mt-3.5 flex flex-wrap gap-1.5">
          {subservices.slice(0, 4).map((item, idx) => (
            <li
              key={idx}
              className="text-[11px] font-mono text-[#64748B] bg-[#F8FAFC] border border-[#E5E7EB] px-2.5 py-1 rounded-[6px] font-normal"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </a>
  );
};

// Backwards-compatible alias
export const ServiceVisualCard = ServiceImageCard;
