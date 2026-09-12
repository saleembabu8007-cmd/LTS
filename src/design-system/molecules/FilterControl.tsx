import React from 'react';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FilterControlProps {
  options: FilterOption[];
  activeId: string;
  onChange: (id: string) => void;
  variant?: 'underline' | 'segment' | 'pills';
  className?: string;
}

export const FilterControl: React.FC<FilterControlProps> = ({
  options,
  activeId,
  onChange,
  variant = 'underline',
  className = '',
}) => {
  if (variant === 'pills') {
    return (
      <div
        className={`flex items-center flex-wrap gap-2.5 select-none ${className}`}
        role="tablist"
      >
        {options.map((opt) => {
          const isActive = opt.id === activeId;

          return (
            <button
              type="button"
              key={opt.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(opt.id)}
              className={`text-xs px-4 py-2 transition-all cursor-pointer flex items-center gap-2 rounded-full font-sans font-medium tracking-wide border shadow-none ${
                isActive
                  ? 'bg-[#173C62] text-white border-[#173C62]'
                  : 'bg-white text-[#4A5568] border-[#CBD5E1] hover:border-[#173C62] hover:text-[#0B1320]'
              }`}
            >
              <span>{opt.label}</span>
              {typeof opt.count === 'number' && (
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#64748B]'
                  }`}
                >
                  {opt.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  if (variant === 'segment') {
    return (
      <div
        className={`flex items-center flex-wrap gap-1.5 border border-[#E5E7EB] bg-[#F8FAFC] p-1.5 rounded-full select-none ${className}`}
        role="tablist"
      >
        {options.map((opt) => {
          const isActive = opt.id === activeId;

          return (
            <button
              type="button"
              key={opt.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(opt.id)}
              className={`typography-btn text-xs px-4 py-1.5 transition-colors cursor-pointer flex items-center gap-2 rounded-full border ${
                isActive
                  ? 'bg-[#173C62] text-white border-[#173C62]'
                  : 'bg-transparent text-[#4A5568] border-transparent hover:text-[#0B1320] hover:bg-white'
              }`}
            >
              <span>{opt.label}</span>
              {typeof opt.count === 'number' && (
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#E5E7EB] text-[#4A5568]'
                  }`}
                >
                  {opt.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-6 overflow-x-auto border-b border-[#E5E7EB] scrollbar-none select-none ${className}`}
      role="tablist"
    >
      {options.map((opt) => {
        const isActive = opt.id === activeId;

        return (
          <button
            type="button"
            key={opt.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(opt.id)}
            className={`py-3 text-xs sm:text-[13px] font-sans font-semibold uppercase tracking-[0.08em] whitespace-nowrap transition-colors flex items-center gap-2 border-b-2 cursor-pointer focus:outline-none ${
              isActive
                ? 'border-[#173C62] text-[#173C62]'
                : 'border-transparent text-[#64748B] hover:text-[#0B1320]'
            }`}
          >
            <span>{opt.label}</span>
            {typeof opt.count === 'number' && (
              <span
                className={`text-[10px] font-mono px-1.5 py-0.5 rounded-none ${
                  isActive ? 'bg-[#EDF3F9] text-[#173C62]' : 'bg-slate-100 text-[#64748B]'
                }`}
              >
                {opt.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
