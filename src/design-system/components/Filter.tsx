import React from 'react';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterProps {
  options: FilterOption[];
  activeId: string;
  onChange: (id: string) => void;
  variant?: 'buttons' | 'underlined';
  ariaLabel?: string;
  className?: string;
}

export const Filter: React.FC<FilterProps> = ({
  options,
  activeId,
  onChange,
  variant = 'buttons',
  ariaLabel = 'Filter items',
  className = '',
}) => {
  if (variant === 'underlined') {
    return (
      <nav
        aria-label={ariaLabel}
        role="tablist"
        className={`flex items-center gap-6 sm:gap-8 border-b border-[#E5E7EB] overflow-x-auto no-scrollbar ${className}`}
      >
        {options.map((option) => {
          const isActive = option.id === activeId;

          return (
            <button
              key={option.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(option.id)}
              className={`pb-3.5 typography-navigation text-xs sm:text-[13px] tracking-wide whitespace-nowrap transition-all duration-150 relative cursor-pointer focus:outline-none focus-visible:text-[#173C62] ${
                isActive
                  ? 'text-[#173C62] font-semibold'
                  : 'text-[#64748B] hover:text-[#0B1320] font-normal'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span>{option.label}</span>
                {option.count !== undefined && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-[1px] ${
                      isActive
                        ? 'bg-[#173C62] text-white'
                        : 'bg-slate-100 text-[#64748B]'
                    }`}
                  >
                    {option.count}
                  </span>
                )}
              </span>

              {/* Active Bottom Hairline Accent */}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#173C62]" />
              )}
            </button>
          );
        })}
      </nav>
    );
  }

  // Restrained 2px Buttons Variant (Consistent with Universal Radius System)
  return (
    <nav
      aria-label={ariaLabel}
      role="tablist"
      className={`flex flex-wrap items-center gap-2 sm:gap-2.5 ${className}`}
    >
      {options.map((option) => {
        const isActive = option.id === activeId;

        return (
          <button
            key={option.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.id)}
            className={`typography-btn text-xs px-3.5 py-2 rounded-[2px] transition-all duration-150 select-none cursor-pointer flex items-center gap-2 border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] ${
              isActive
                ? 'bg-[#173C62] text-white border-[#173C62] shadow-xs'
                : 'bg-white text-[#4A5568] border-[#E5E7EB] hover:border-[#173C62]/40 hover:text-[#173C62]'
            }`}
          >
            <span>{option.label}</span>
            {option.count !== undefined && (
              <span
                className={`text-[10px] font-mono px-1 py-0.2 rounded-[1px] ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#64748B]'
                }`}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
};
