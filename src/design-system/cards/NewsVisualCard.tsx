import React from 'react';

export interface NewsVisualCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  href?: string;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * NewsVisualCard
 * Conforms to Rule 09 & 13: Practitioner technical briefing card.
 * Editorial typography, 16px soft-radius thumbnail, quiet date stamp, verified content only.
 */
export const NewsVisualCard: React.FC<NewsVisualCardProps> = ({
  id,
  title,
  category,
  date,
  excerpt,
  imageUrl,
  href = `/news/${id}`,
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
    <article className={`group block text-left ${className}`}>
      <a
        href={href}
        onClick={handleClick}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 rounded-[16px]"
        aria-label={`Read article: ${title}`}
      >
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

        <div className="flex items-center gap-3 text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
          <span className="text-[#173C62] font-semibold">{category}</span>
          <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
          <time dateTime={date}>{date}</time>
        </div>

        <h3 className="mt-2 text-[17px] font-medium text-[#0B1320] leading-snug group-hover:text-[#173C62] transition-colors duration-180">
          {title}
        </h3>

        <p className="mt-1.5 text-[14px] text-[#4A5568] leading-relaxed line-clamp-2">
          {excerpt}
        </p>

        <div className="mt-3 inline-flex items-center gap-2 text-[12px] font-medium text-[#173C62] group-hover:text-[#102B47]">
          <span>Read briefing</span>
          <span className="transition-transform duration-180 ease-out group-hover:translate-x-[3px]" aria-hidden="true">
            →
          </span>
        </div>
      </a>
    </article>
  );
};
