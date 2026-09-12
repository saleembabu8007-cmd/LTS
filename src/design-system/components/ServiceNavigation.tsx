import React from 'react';

export interface ServiceNavItem {
  id: string;
  label: string;
  slug: string;
  count?: number;
}

export interface ServiceNavigationProps {
  items: ServiceNavItem[];
  activeSlug: string;
  onSelect: (slug: string) => void;
  sticky?: boolean;
  className?: string;
}

export const ServiceNavigation: React.FC<ServiceNavigationProps> = ({
  items,
  activeSlug,
  onSelect,
  sticky = true,
  className = '',
}) => {
  return (
    <nav
      aria-label="Service Sub-Navigation"
      className={`bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] z-30 transition-all ${
        sticky ? 'sticky top-[72px]' : ''
      } ${className}`}
    >
      <div className="lts-container">
        <div className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
          {items.map((item) => {
            const isActive =
              activeSlug === item.slug ||
              (item.slug !== '/' && activeSlug.startsWith(item.slug));

            return (
              <button
                key={item.id || item.slug}
                onClick={() => onSelect(item.slug)}
                className={`relative py-3.5 px-3 sm:px-4 typography-nav transition-colors select-none focus:outline-none flex items-center gap-2 ${
                  isActive
                    ? 'text-[#173C62] font-semibold'
                    : 'text-slate-600 hover:text-[#173C62]'
                }`}
              >
                <span>{item.label}</span>
                {typeof item.count === 'number' && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                      isActive
                        ? 'bg-[#173C62]/10 text-[#173C62]'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {item.count}
                  </span>
                )}

                {/* Architectural Hairline Indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#173C62]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
