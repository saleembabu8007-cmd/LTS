import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface UnboxedIndexItem {
  id: string | number;
  indexNumber: string; // e.g., '01', '02'
  title: string;
  subtitle?: string;
  description: string;
  metaBadge?: string;
  thumbnail?: string;
  href?: string;
  onClick?: () => void;
}

export interface UnboxedIndexProps {
  items: UnboxedIndexItem[];
  className?: string;
}

/**
 * UnboxedIndex: Typographic Ledger / Index Primitive (Rule 07 & 08)
 * - Replaces repetitive 3-card grids with architectural ledger rows
 * - Rests directly on the section canvas without nested card frames
 * - Clear editorial scan: Numeral -> Title -> Scope -> Action Indicator
 */
export const UnboxedIndex: React.FC<UnboxedIndexProps> = ({
  items,
  className = '',
}) => {
  return (
    <div className={`divide-y divide-[#E5E7EB] border-y border-[#E5E7EB] ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={item.onClick}
          className="group py-6 sm:py-8 lg:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer transition-colors duration-150 hover:bg-[#F8FAFC]/75"
        >
          {/* Index Numeral + Content */}
          <div className="flex items-start md:items-center gap-6 sm:gap-8 lg:gap-12 flex-1">
            <span className="font-mono text-2xl sm:text-3xl font-light text-[#94A3B8] group-hover:text-[#173C62] transition-colors shrink-0">
              {item.indexNumber}
            </span>

            <div className="space-y-1.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl sm:text-2xl font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                  {item.title}
                </h3>
                {item.metaBadge && (
                  <span className="px-2.5 py-0.5 text-[10.5px] font-mono font-medium text-[#173C62] bg-[#EDF3F9] rounded-[8px]">
                    {item.metaBadge}
                  </span>
                )}
              </div>

              {item.subtitle && (
                <p className="font-mono text-xs text-[#64748B] tracking-wide">
                  {item.subtitle}
                </p>
              )}

              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>

          {/* Supporting Thumbnail & Micro-action */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 self-end md:self-center">
            {item.thumbnail && (
              <div className="w-16 h-12 rounded-[12px] overflow-hidden bg-slate-100 hidden sm:block">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                  loading="lazy"
                />
              </div>
            )}

            <div className="flex items-center gap-2 text-xs font-semibold text-[#173C62] uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-150">
              <span className="hidden sm:inline">Explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
