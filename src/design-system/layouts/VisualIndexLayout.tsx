import React, { useState } from 'react';

export interface VisualIndexEntry {
  id: string;
  numeral: string;
  title: string;
  scope: string;
  href: string;
  imageUrl?: string;
  meta?: string;
}

export interface VisualIndexLayoutProps {
  entries: VisualIndexEntry[];
  eyebrow?: string;
  heading?: string;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * VisualIndexLayout Archetype (M: Visual Index)
 * Editorial ledger connecting typography with architectural image preview.
 */
export const VisualIndexLayout: React.FC<VisualIndexLayoutProps> = ({
  entries,
  eyebrow,
  heading,
  onNavigate,
  className = '',
}) => {
  const [activeId, setActiveId] = useState<string>(entries[0]?.id || '');
  const activeEntry = entries.find((e) => e.id === activeId) || entries[0];

  return (
    <div className={`w-full text-left ${className}`}>
      {(eyebrow || heading) && (
        <div className="mb-8 md:mb-12">
          {eyebrow && (
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold">
              {eyebrow}
            </span>
          )}
          {heading && (
            <h2 className="mt-2 text-[26px] sm:text-[34px] md:text-[40px] font-medium text-[#0B1320] tracking-tight">
              {heading}
            </h2>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Typographic list (7 cols) */}
        <div className="lg:col-span-7 divide-y divide-[#E5E7EB]">
          {entries.map((entry) => {
            const isActive = entry.id === activeId;
            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (onNavigate && entry.href) {
                e.preventDefault();
                onNavigate(entry.href);
              }
            };

            return (
              <a
                key={entry.id}
                href={entry.href}
                onClick={handleClick}
                onMouseEnter={() => setActiveId(entry.id)}
                className={`group block py-5 md:py-6 transition-colors duration-180 ${
                  isActive ? 'bg-[#F8FAFC]/60 px-4 -mx-4 rounded-[12px]' : ''
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-[13px] text-[#64748B] font-medium">
                      {entry.numeral}
                    </span>
                    <h3 className={`text-[20px] sm:text-[24px] font-medium transition-colors duration-180 ${
                      isActive ? 'text-[#173C62]' : 'text-[#0B1320] group-hover:text-[#173C62]'
                    }`}>
                      {entry.title}
                    </h3>
                  </div>
                  <span className="text-[#173C62] transition-transform duration-180 ease-out group-hover:translate-x-[3px]">
                    →
                  </span>
                </div>
                <p className="mt-1 ml-8 sm:ml-10 text-[14px] text-[#4A5568] max-w-[50ch] line-clamp-1">
                  {entry.scope}
                </p>
              </a>
            );
          })}
        </div>

        {/* Dynamic Architectural Visual Preview (5 cols) */}
        <div className="lg:col-span-5 hidden lg:block">
          {activeEntry?.imageUrl && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#173C62] shadow-elevated">
              <img
                key={activeEntry.id}
                src={activeEntry.imageUrl}
                alt={activeEntry.title}
                className="w-full h-full object-cover object-center transition-all duration-500 ease-out"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#173C62]/95 p-5 text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#CBD5E1]">
                  {activeEntry.numeral}
                </span>
                <div className="text-[16px] font-medium text-white mt-1">
                  {activeEntry.title}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
