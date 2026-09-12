import React from 'react';
import { IndustryVisualCard, IndustryVisualCardProps } from '../cards/IndustryVisualCard';

export interface IndustryExplorerProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  industries: IndustryVisualCardProps[];
  className?: string;
}

/**
 * IndustryExplorer (Composition 8)
 * Sector application explorer pairing architectural imagery with sector-specific MEP and FM requirements.
 */
export const IndustryExplorer: React.FC<IndustryExplorerProps> = ({
  eyebrow = 'Target Sectors',
  title = 'Engineered for Critical Environments',
  description = 'Mission-critical engineering and facility operations tailored for high-demand regional sectors.',
  industries,
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-24 md:py-32 bg-[#F8FAFC] text-left ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-[26px] sm:text-[34px] md:text-[40px] font-medium text-[#0B1320] leading-[1.12] tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* 2x2 on tablet/desktop or staggered 4-grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <IndustryVisualCard key={ind.id} {...ind} />
          ))}
        </div>
      </div>
    </section>
  );
};
