import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { TextLink } from './Button';

export interface NewsCardProps {
  id?: string;
  title: string;
  date: string;
  category: string;
  summary?: string;
  readTime?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  onSelect?: () => void;
  variant?: 'card' | 'compact';
  className?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  category,
  summary,
  readTime,
  imageSrc,
  imageAlt,
  href,
  onSelect,
  variant = 'card',
  className = '',
}) => {
  if (variant === 'compact') {
    return (
      <article
        onClick={onSelect}
        className={`group py-6 sm:py-7 border-b border-[#E5E7EB] first:border-t flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 transition-colors cursor-pointer hover:bg-slate-50/60 px-2 sm:px-3 ${className}`}
      >
        <div className="space-y-2 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 typography-caption">
            <span className="typography-label text-[#173C62] text-[10px] tracking-[0.16em]">
              {category}
            </span>
            <span className="text-[#94A3B8]">&bull;</span>
            <span className="text-[#64748B] text-xs">{date}</span>
            {readTime && (
              <>
                <span className="text-[#94A3B8]">&bull;</span>
                <span className="text-[#64748B] text-xs">{readTime}</span>
              </>
            )}
          </div>

          <h3 className="typography-h4 text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
            {title}
          </h3>

          {summary && (
            <p className="typography-body-sm text-[#4A5568] line-clamp-2 max-prose-editorial">
              {summary}
            </p>
          )}
        </div>

        <div className="shrink-0 pt-1">
          <TextLink href={href} onClick={onSelect} arrow>
            Read Article
          </TextLink>
        </div>
      </article>
    );
  }

  // Card Variant
  return (
    <article
      className={`group flex flex-col justify-between bg-white border border-[#E5E7EB] rounded-[2px] overflow-hidden transition-all duration-300 hover:border-[#173C62] hover:shadow-xs ${className}`}
    >
      <div>
        {imageSrc && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-[#E5E7EB]">
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-[#0B1C2F]/90 backdrop-blur-xs px-2.5 py-1 text-[9.5px] uppercase font-mono tracking-[0.14em] text-white rounded-[1px] border border-white/10">
              {category}
            </div>
          </div>
        )}

        <div className="p-6 sm:p-7 space-y-3">
          {/* Metadata */}
          <div className="flex items-center gap-3 typography-caption text-[#64748B] text-xs">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#173C62]" />
              <span>{date}</span>
            </span>
            {readTime && (
              <>
                <span className="text-[#94A3B8]">&bull;</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#94A3B8]" />
                  <span>{readTime}</span>
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="typography-h4 text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
            {title}
          </h3>

          {/* Summary */}
          {summary && (
            <p className="typography-body-sm text-[#4A5568] line-clamp-2 leading-relaxed">
              {summary}
            </p>
          )}
        </div>
      </div>

      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-[#E5E7EB]/50">
        <TextLink href={href} onClick={onSelect} arrow>
          Read Technical Bulletin
        </TextLink>
      </div>
    </article>
  );
};
