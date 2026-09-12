import React from 'react';

export interface EditorialIntroProps {
  eyebrow?: string;
  statement: string;
  leadParagraph: string;
  secondaryParagraph?: string;
  metaDatums?: Array<{ label: string; value: string }>;
  className?: string;
}

/**
 * EditorialIntro (Composition 2)
 * High-contrast editorial narrative introduction with generous whitespace and disciplined typography.
 * No borders, no cards. Breathing space that establishes corporate gravity.
 */
export const EditorialIntro: React.FC<EditorialIntroProps> = ({
  eyebrow = 'Official Corporate Profile',
  statement,
  leadParagraph,
  secondaryParagraph,
  metaDatums = [],
  className = '',
}) => {
  return (
    <section className={`py-20 sm:py-28 md:py-36 bg-white text-left ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Eyebrow and Statement (7 cols) */}
          <div className="lg:col-span-7">
            {eyebrow && (
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold block mb-4">
                {eyebrow}
              </span>
            )}
            <h2 className="text-[28px] sm:text-[38px] md:text-[46px] font-light text-[#0B1320] leading-[1.12] tracking-[-0.025em]">
              {statement}
            </h2>
          </div>

          {/* Lead Paragraph and Secondary Prose (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <div>
              <p className="text-[16px] sm:text-[18px] text-[#334155] leading-relaxed font-normal">
                {leadParagraph}
              </p>
              {secondaryParagraph && (
                <p className="mt-5 text-[14px] sm:text-[15px] text-[#64748B] leading-relaxed">
                  {secondaryParagraph}
                </p>
              )}
            </div>

            {metaDatums.length > 0 && (
              <div className="mt-10 pt-8 border-t border-[#E5E7EB] grid grid-cols-2 gap-6">
                {metaDatums.map((item, idx) => (
                  <div key={idx}>
                    <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#64748B]">
                      {item.label}
                    </div>
                    <div className="mt-1 font-mono text-[18px] sm:text-[20px] font-medium text-[#173C62]">
                      {item.value}
                    </div>
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
