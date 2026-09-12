import React from 'react';

export interface ServiceVisualCardProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  imageUrl?: string;
  subservices?: string[];
  numeral?: string;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * ServiceVisualCard
 * Conforms strictly to Rule 07 & 13: Unboxed discipline module.
 * No generic borders, no boxed card container. Editorial typography + optional architectural image thumbnail + verified scope.
 */
export const ServiceVisualCard: React.FC<ServiceVisualCardProps> = ({
  id,
  title,
  subtitle,
  description,
  href,
  imageUrl,
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
      className={`group block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 rounded-[16px] ${className}`}
      aria-label={`Explore service: ${title}`}
    >
      {/* Optional Editorial Image Header (16-18px) */}
      {imageUrl && (
        <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-[#0B1C2F] mb-4">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
          />
        </div>
      )}

      <div className="flex items-baseline justify-between gap-4">
        {numeral && (
          <span className="font-mono text-[11px] text-[#64748B] tracking-wider uppercase">
            {numeral}
          </span>
        )}
        {subtitle && (
          <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.14em]">
            {subtitle}
          </span>
        )}
      </div>

      <h3 className="mt-2 text-[19px] font-medium text-[#0B1320] leading-snug group-hover:text-[#173C62] transition-colors duration-180 flex items-center justify-between gap-3">
        <span>{title}</span>
        <span className="shrink-0 text-[#173C62] transition-transform duration-180 ease-out group-hover:translate-x-[3px]" aria-hidden="true">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </h3>

      <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed line-clamp-2">
        {description}
      </p>

      {/* Verified Subservices List (Quiet Monospace Tags / Unboxed Bullet Items) */}
      {subservices.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {subservices.slice(0, 4).map((item, idx) => (
            <li
              key={idx}
              className="text-[12px] text-[#64748B] bg-[#F8FAFC] px-2.5 py-1 rounded-[8px] font-normal"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </a>
  );
};
