import React from 'react';

export interface CompositionLargeTypographyProps {
  eyebrow?: string;
  leadStatement: string;
  bodyText?: string;
  attribution?: string;
  tone?: 'white' | 'stone' | 'brand';
  className?: string;
}

/**
 * Composition 14 — Large Typography Section
 * Pure display typography section with generous negative space and high typographic
 * contrast. Used as an intentional visual breather between dense image sections.
 */
export const CompositionLargeTypography: React.FC<CompositionLargeTypographyProps> = ({
  eyebrow,
  leadStatement,
  bodyText,
  attribution,
  tone = 'white',
  className = '',
}) => {
  const bgColors = {
    white: 'bg-white text-[#0B1320]',
    stone: 'bg-[#F8FAFC] text-[#0B1320]',
    brand: 'bg-[#173C62] text-white',
  };

  const borderColors = {
    white: 'border-[#E5E7EB]',
    stone: 'border-[#E5E7EB]',
    brand: 'border-white/15',
  };

  const mutedTextColors = {
    white: 'text-[#4A5568]',
    stone: 'text-[#4A5568]',
    brand: 'text-slate-200',
  };

  const eyebrowColors = {
    white: 'text-[#173C62]',
    stone: 'text-[#173C62]',
    brand: 'text-[#CBD5E1]',
  };

  return (
    <section className={`py-20 sm:py-32 border-b ${bgColors[tone]} ${borderColors[tone]} ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl space-y-6 text-left">
          {eyebrow && (
            <span className={`text-xs uppercase tracking-[0.12em] font-semibold block ${eyebrowColors[tone]}`}>
              {eyebrow}
            </span>
          )}

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.06]">
            {leadStatement}
          </h2>

          {bodyText && (
            <p className={`text-base sm:text-xl font-normal leading-relaxed max-w-3xl pt-2 ${mutedTextColors[tone]}`}>
              {bodyText}
            </p>
          )}

          {attribution && (
            <div className="pt-4">
              <span className={`text-xs uppercase tracking-wider block font-medium ${mutedTextColors[tone]}`}>
                &bull; {attribution}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
