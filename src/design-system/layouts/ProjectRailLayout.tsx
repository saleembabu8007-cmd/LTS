import React, { useRef } from 'react';

export interface ProjectRailLayoutProps {
  eyebrow?: string;
  title: string;
  description?: string;
  viewAllHref?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * ProjectRailLayout Archetype (H: Horizontal Project Rail)
 * Smoothly navigates verified projects horizontally without turning every section into cards.
 */
export const ProjectRailLayout: React.FC<ProjectRailLayoutProps> = ({
  eyebrow,
  title,
  description,
  viewAllHref,
  children,
  className = '',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={`w-full text-left ${className}`}>
      {/* Header bar with navigational controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          {eyebrow && (
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-[26px] sm:text-[32px] md:text-[38px] font-medium text-[#0B1320] leading-[1.12] tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-[15px] text-[#4A5568] max-w-[62ch]">
              {description}
            </p>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 shrink-0">
          {viewAllHref && (
            <a
              href={viewAllHref}
              className="mr-2 text-[12px] font-semibold text-[#173C62] uppercase tracking-[0.08em] hover:text-[#102B47] transition-colors"
            >
              View all portfolio →
            </a>
          )}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-[10px] border border-[#CBD5E1] flex items-center justify-center text-[#0B1320] hover:bg-[#F8FAFC] hover:border-[#173C62] transition-colors cursor-pointer"
            aria-label="Scroll left"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-[10px] border border-[#CBD5E1] flex items-center justify-center text-[#0B1320] hover:bg-[#F8FAFC] hover:border-[#173C62] transition-colors cursor-pointer"
            aria-label="Scroll right"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Rail strip */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pt-1 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  );
};
