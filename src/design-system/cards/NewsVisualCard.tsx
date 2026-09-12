import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export interface EditorialStoryCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  imageAlt?: string;
  readTime?: string;
  href?: string;
  layout?: 'stacked' | 'horizontal';
  onNavigate?: (slug: string) => void;
  className?: string;
}

export type NewsVisualCardProps = EditorialStoryCardProps;

/**
 * EditorialStoryCard / NewsVisualCard
 * Purpose-built for technical bulletins, engineering whitepapers, and regulatory updates.
 * Conforms to LTSGROUP Image Card rules:
 * - Editorial typography with disciplined metadata.
 * - 16–18px soft radius, zero dark overlay on the photograph.
 * - Supports stacked and horizontal layouts.
 * - Subtle hover scale (1.025) and arrow translate.
 */
export const EditorialStoryCard: React.FC<EditorialStoryCardProps> = ({
  id,
  title,
  category,
  date,
  excerpt,
  imageUrl,
  imageAlt = '',
  readTime,
  href = `/news/${id}`,
  layout = 'stacked',
  onNavigate,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  if (layout === 'horizontal') {
    return (
      <article className={`group block select-none text-left ${className}`}>
        <a
          href={href}
          onClick={handleClick}
          className="block py-6 sm:py-8 border-b border-[#E5E7EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[16px]"
          aria-label={`Read article: ${title}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {imageUrl && (
              <div className="md:col-span-4 lg:col-span-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-[#0B1C2F]">
                  <img
                    src={imageUrl}
                    alt={imageAlt || title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </div>
              </div>
            )}

            <div className={`${imageUrl ? 'md:col-span-8 lg:col-span-8' : 'md:col-span-12'} space-y-2.5`}>
              <div className="flex items-center gap-2.5 text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                <span className="text-[#173C62] font-semibold">{category}</span>
                <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                <time dateTime={date}>{date}</time>
                {readTime && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                    <span>{readTime}</span>
                  </>
                )}
              </div>

              <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                {title}
              </h3>

              <p className="text-sm text-[#4A5568] leading-relaxed line-clamp-2 font-normal max-w-3xl">
                {excerpt}
              </p>

              <div className="pt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173C62] group-hover:text-[#11253E] transition-colors">
                <span>Read technical analysis</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </a>
      </article>
    );
  }

  // Stacked layout
  return (
    <article className={`group block select-none text-left ${className}`}>
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
              alt={imageAlt || title}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>
        )}

        <div className="flex items-center gap-2.5 text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
          <span className="text-[#173C62] font-semibold">{category}</span>
          <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
          <time dateTime={date}>{date}</time>
          {readTime && (
            <>
              <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
              <span>{readTime}</span>
            </>
          )}
        </div>

        <h3 className="mt-2 text-[17px] font-medium text-[#0B1320] leading-snug group-hover:text-[#173C62] transition-colors duration-180">
          {title}
        </h3>

        <p className="mt-1.5 text-[14px] text-[#4A5568] leading-relaxed line-clamp-2 font-normal">
          {excerpt}
        </p>

        <div className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#173C62] group-hover:text-[#102B47]">
          <span>Read briefing</span>
          <span className="transition-transform duration-180 ease-out group-hover:translate-x-[3px]" aria-hidden="true">
            &rarr;
          </span>
        </div>
      </a>
    </article>
  );
};

// Backwards-compatible alias
export const NewsVisualCard = EditorialStoryCard;
