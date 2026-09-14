import React from 'react';

export interface EditorialColumnItem {
  eyebrow?: string;
  title: string;
  description: string;
}

export interface CompositionSplitEditorialProps {
  sectionEyebrow?: string;
  mainTitle: string;
  leadParagraph: string;
  columns?: EditorialColumnItem[];
  tone?: 'white' | 'stone';
  className?: string;
}

/**
 * Composition 08 — Split Editorial Section
 * Asymmetric 5/7 or balanced 2-column editorial layout pairing an institutional headline
 * with concise technical body copy and quiet whitespace. Replaces repetitive boxed cards.
 */
export const CompositionSplitEditorial: React.FC<CompositionSplitEditorialProps> = ({
  sectionEyebrow,
  mainTitle,
  leadParagraph,
  columns = [],
  tone = 'white',
  className = '',
}) => {
  const bgClass = tone === 'stone' ? 'bg-[#F8FAFC]' : 'bg-white';

  return (
    <section className={`py-20 sm:py-28 ${bgClass} border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start text-left">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {sectionEyebrow && (
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                {sectionEyebrow}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.08]">
              {mainTitle}
            </h2>
          </div>

          {/* Right Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 lg:pt-2">
            <p className="text-xl sm:text-2xl font-light text-[#0B1320] leading-snug tracking-tight">
              {leadParagraph}
            </p>

            {columns.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#E5E7EB]">
                {columns.map((col, idx) => (
                  <div key={idx} className="space-y-2">
                    {col.eyebrow && (
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-medium block">
                        {col.eyebrow}
                      </span>
                    )}
                    <h3 className="text-lg font-normal text-[#0B1320] tracking-tight">
                      {col.title}
                    </h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
                      {col.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
