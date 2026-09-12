import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface EditorialListItem {
  id: string;
  index: string; // e.g. "01", "02"
  title: string;
  category?: string;
  description: string;
  slug: string;
  tags?: string[];
}

interface EditorialListProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  items: EditorialListItem[];
  onItemClick: (slug: string) => void;
  className?: string;
}

export const EditorialList: React.FC<EditorialListProps> = ({
  eyebrow,
  headline,
  description,
  items,
  onItemClick,
  className = '',
}) => {
  return (
    <section className={`editorial-section bg-white border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3 max-w-2xl">
          {eyebrow && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999999] block">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
            {headline}
          </h2>
          {description && (
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* The Editorial List with Hairline Separators */}
        <div className="border-t border-[#E5E7EB] divide-y divide-[#E5E7EB]">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onItemClick(item.slug)}
              className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline hover:bg-[#FAFAFA] transition-colors px-4 cursor-pointer group"
            >
              {/* Index number in #999999 */}
              <div className="lg:col-span-1">
                <span className="font-mono text-sm text-[#999999] group-hover:text-[#173C62] transition-colors font-medium">
                  {item.index}
                </span>
              </div>

              {/* Title & Category */}
              <div className="lg:col-span-4 space-y-1">
                {item.category && (
                  <span className="text-[10px] uppercase tracking-wider text-[#999999] block font-medium">
                    {item.category}
                  </span>
                )}
                <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Concise Description */}
              <div className="lg:col-span-5">
                <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
                  {item.description}
                </p>
                {item.tags && item.tags.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] text-slate-500 bg-slate-100 px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Trigger */}
              <div className="lg:col-span-2 flex justify-end items-center">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#173C62] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
