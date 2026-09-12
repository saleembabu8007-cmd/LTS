import React from 'react';
import { Image } from '../atoms/Image';
import { Tag } from '../atoms/Tag';
import { TextLink } from '../atoms/TextLink';
import { NewsMeta } from '../molecules/NewsMeta';

export interface NewsItemData {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  readTime?: string;
  imageSrc?: string;
  author?: string;
}

export interface NewsGridProps {
  featured: NewsItemData;
  secondary: NewsItemData[];
  onSelectArticle: (slug: string) => void;
  className?: string;
}

export const NewsGrid: React.FC<NewsGridProps> = ({
  featured,
  secondary,
  onSelectArticle,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 ${className}`}>
      {/* Featured Lead Story (7 Cols) */}
      <article
        onClick={() => onSelectArticle(featured.slug)}
        className="lg:col-span-7 group cursor-pointer space-y-4"
      >
        {featured.imageSrc && (
          <div className="overflow-hidden border border-[#E5E7EB]">
            <Image
              src={featured.imageSrc}
              alt={featured.title}
              aspectRatio="16/10"
              withBorder={false}
              className="transition-transform duration-500 group-hover:scale-[1.015]"
            />
          </div>
        )}

        <NewsMeta
          date={featured.date}
          category={featured.category}
          readTime={featured.readTime}
        />

        <h3 className="typography-h2 text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
          {featured.title}
        </h3>

        <p className="typography-body text-[#4A5568] leading-relaxed max-prose-editorial">
          {featured.summary}
        </p>

        <div className="pt-2">
          <TextLink onClick={() => onSelectArticle(featured.slug)}>
            Read Full Announcement
          </TextLink>
        </div>
      </article>

      {/* Secondary Technical Briefs (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col divide-y divide-[#E5E7EB] border-t lg:border-t-0 border-[#E5E7EB]">
        {secondary.map((item, idx) => (
          <article
            key={idx}
            onClick={() => onSelectArticle(item.slug)}
            className={`group cursor-pointer py-6 space-y-2.5 ${idx === 0 ? 'lg:pt-0' : ''}`}
          >
            <div className="flex items-center justify-between">
              <Tag variant="neutral" shape="square">
                {item.category}
              </Tag>
              <span className="font-mono text-[11px] text-[#64748B]">{item.date}</span>
            </div>

            <h4 className="typography-h4 text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
              {item.title}
            </h4>

            <p className="typography-body-sm text-[#4A5568] line-clamp-2 leading-relaxed">
              {item.summary}
            </p>

            <div className="pt-1">
              <TextLink size="sm" onClick={() => onSelectArticle(item.slug)}>
                Read Technical Brief
              </TextLink>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
