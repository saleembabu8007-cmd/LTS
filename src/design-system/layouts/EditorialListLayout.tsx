import React from 'react';

export interface EditorialListItem {
  numeral: string;
  title: string;
  subtitle?: string;
  description: string;
  href?: string;
  meta?: string;
}

export interface EditorialListLayoutProps {
  items: EditorialListItem[];
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * EditorialListLayout Archetype (L: Editorial List)
 * Unboxed typographic row layout. Replaces repetitive card grids with high-editorial scannability.
 */
export const EditorialListLayout: React.FC<EditorialListLayoutProps> = ({
  items,
  onNavigate,
  className = '',
}) => {
  return (
    <div className={`w-full divide-y divide-[#E5E7EB] ${className}`}>
      {items.map((item) => {
        const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
          if (onNavigate && item.href) {
            e.preventDefault();
            onNavigate(item.href);
          }
        };

        const Content = (
          <div className="py-6 sm:py-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 group text-left">
            <div className="flex items-baseline gap-6 md:w-1/3">
              <span className="font-mono text-[14px] text-[#64748B] font-medium tracking-wider">
                {item.numeral}
              </span>
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors duration-180 leading-snug">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <span className="text-[12px] font-mono text-[#173C62] uppercase tracking-[0.14em]">
                    {item.subtitle}
                  </span>
                )}
              </div>
            </div>

            <div className="md:w-1/2">
              <p className="text-[15px] text-[#4A5568] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="md:w-1/6 flex items-center justify-between md:justify-end gap-3 text-right">
              {item.meta && (
                <span className="text-[12px] font-mono text-[#64748B]">
                  {item.meta}
                </span>
              )}
              {item.href && (
                <span className="text-[#173C62] transition-transform duration-180 ease-out group-hover:translate-x-[3px]">
                  →
                </span>
              )}
            </div>
          </div>
        );

        if (item.href) {
          return (
            <a
              key={item.numeral}
              href={item.href}
              onClick={handleClick}
              className="block focus:outline-none focus-visible:bg-[#F8FAFC]"
            >
              {Content}
            </a>
          );
        }

        return <div key={item.numeral}>{Content}</div>;
      })}
    </div>
  );
};
