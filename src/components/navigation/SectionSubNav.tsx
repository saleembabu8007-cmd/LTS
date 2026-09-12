import React from 'react';

export interface SectionTab {
  id: string;
  label: string;
  count?: string | number;
}

interface SectionSubNavProps {
  title: string;
  tabs: SectionTab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  actionLabel?: string;
  onActionClick?: () => void;
}

/**
 * LTSGROUP Architectural Section Sub-Navigation
 * Conforms strictly to LTSGROUP Permanent Design Rules:
 * - Minimal, restrained, quiet
 * - No visually heavy horizontal pill bars
 * - No chunky rounded-full backgrounds or pill count badges
 * - Quiet typographic tabs with subtle hairline active indicators
 * - Accessible keyboard navigation and visible focus rings
 */
export const SectionSubNav: React.FC<SectionSubNavProps> = ({
  title,
  tabs,
  activeTab,
  onTabChange,
  actionLabel,
  onActionClick,
}) => {
  return (
    <div className="bg-white/95 backdrop-blur-xs border-b border-slate-200 sticky top-0 z-20 transition-all">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        {/* Left: Discipline Label & Quiet Text Tabs */}
        <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none">
          {title && (
            <div className="hidden md:flex items-center gap-2 pr-6 border-r border-slate-200 shrink-0 py-3.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#64748B] font-semibold">
                DISCIPLINE
              </span>
              <span className="text-xs font-semibold text-[#0B1320]">{title}</span>
            </div>
          )}

          <nav className="flex space-x-6 sm:space-x-8" aria-label={`${title} Sub Navigation`}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onTabChange(tab.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`py-3.5 text-xs transition-colors whitespace-nowrap cursor-pointer border-b-2 focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none rounded-[2px] ${
                    isActive
                      ? 'border-[#173C62] text-[#0B1320] font-semibold'
                      : 'border-transparent text-slate-500 hover:text-[#0B1320] hover:border-slate-300 font-normal'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: Contextual Text Action */}
        {actionLabel && (
          <div className="hidden sm:block shrink-0 pl-6 py-3.5">
            <button
              type="button"
              onClick={onActionClick}
              className="text-xs font-medium text-[#173C62] hover:text-[#0B1320] transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none rounded-[2px] cursor-pointer"
            >
              <span>{actionLabel}</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
