import React from 'react';
import { Container } from '../structures/Container';
import { QuoteAttribution } from '../molecules/QuoteAttribution';

export interface TestimonialOrganismProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  divisionOrCompany?: string;
  avatarSrc?: string;
  eyebrow?: string;
  light?: boolean;
  className?: string;
}

export const TestimonialOrganism: React.FC<TestimonialOrganismProps> = ({
  quote,
  authorName,
  authorTitle,
  divisionOrCompany,
  avatarSrc,
  eyebrow = 'CLIENT & AUTHORITY VERIFICATION',
  light = false,
  className = '',
}) => {
  const bgClass = light ? 'bg-[#173C62]' : 'bg-white';

  return (
    <section className={`py-16 sm:py-24 ${bgClass} ${className}`}>
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          <span className={`font-mono text-xs ${light ? 'text-slate-300' : 'text-[#173C62]'} uppercase tracking-[0.2em] font-semibold block text-center`}>
            {eyebrow}
          </span>

          <QuoteAttribution
            quote={quote}
            authorName={authorName}
            authorTitle={authorTitle}
            divisionOrCompany={divisionOrCompany}
            avatarSrc={avatarSrc}
            light={light}
            className="text-center"
          />
        </div>
      </Container>
    </section>
  );
};
