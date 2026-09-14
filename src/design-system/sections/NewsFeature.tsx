import React from 'react';
import { NewsVisualCard, NewsVisualCardProps } from '../cards/NewsVisualCard';

export interface NewsFeatureProps {
  eyebrow?: string;
  title?: string;
  articles: NewsVisualCardProps[];
  viewAllHref?: string;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * NewsFeature (Composition 11)
 * Engineering briefings, regulatory updates, and technical monographs.
 * Features verified practitioner publications using NewsVisualCard.
 */
export const NewsFeature: React.FC<NewsFeatureProps> = ({
  eyebrow = 'Engineering Intelligence',
  title = 'Technical Briefings & Industry Standards',
  articles,
  viewAllHref = '/news',
  onNavigate,
  className = '',
}) => {
  const handleLink = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section className={`py-16 sm:py-24 md:py-32 bg-white text-left ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            {eyebrow && (
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-2 text-[26px] sm:text-[34px] md:text-[40px] font-medium text-[#0B1320] leading-[1.12] tracking-tight">
              {title}
            </h2>
          </div>

          {viewAllHref && (
            <a
              href={viewAllHref}
              onClick={handleLink(viewAllHref)}
              className="text-[12px] font-semibold text-[#173C62] uppercase tracking-[0.08em] hover:text-[#12304F] transition-colors shrink-0"
            >
              All technical briefings →
            </a>
          )}
        </div>

        {/* 3-column asymmetric or 1 lead + 2 secondary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.slice(0, 3).map((article) => (
            <NewsVisualCard key={article.id} {...article} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
};
