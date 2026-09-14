import React from 'react';
import { Container } from '../structures/Container';
import { QuoteAttribution, QuoteAttributionProps } from '../molecules/QuoteAttribution';

export interface QuoteFeatureProps extends QuoteAttributionProps {
  eyebrow?: string;
  tone?: 'white' | 'subtle' | 'dark';
}

/**
 * QuoteFeature: Full-width editorial quote moment with atmospheric background tone.
 */
export const QuoteFeature: React.FC<QuoteFeatureProps> = ({
  quote,
  authorName,
  authorTitle,
  divisionOrCompany,
  avatarSrc,
  eyebrow = 'EXECUTIVE DIRECTIVE',
  tone = 'subtle',
  className = '',
}) => {
  const toneClasses = {
    white: 'bg-white text-[#0B1320]',
    subtle: 'bg-[#F8FAFC] text-[#0B1320]',
    dark: 'bg-[#173C62] text-white',
  };

  const isDark = tone === 'dark';

  return (
    <section className={`py-16 sm:py-24 ${toneClasses[tone]} ${className}`}>
      <Container>
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          {eyebrow && (
            <span
              className={`font-mono text-xs uppercase tracking-[0.2em] font-semibold block ${
                isDark ? 'text-slate-400' : 'text-[#173C62]'
              }`}
            >
              {eyebrow}
            </span>
          )}

          <QuoteAttribution
            quote={quote}
            authorName={authorName}
            authorTitle={authorTitle}
            divisionOrCompany={divisionOrCompany}
            avatarSrc={avatarSrc}
            light={isDark}
            className="text-center"
          />
        </div>
      </Container>
    </section>
  );
};
