import React from 'react';
import { PeopleCard, PeopleCardProps } from '../cards/PeopleCard';

export interface PeopleFeatureProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  people: PeopleCardProps[];
  className?: string;
}

/**
 * PeopleFeature (Composition 10)
 * Engineering craftsmanship & technical governance team feature.
 * Presents real field practitioners & leadership with verified discipline titles.
 */
export const PeopleFeature: React.FC<PeopleFeatureProps> = ({
  eyebrow = 'Engineering Leadership & Field Governance',
  title = 'Direct Technical Accountability on Every Asset',
  description = 'Our licensed engineers, project directors, and facility technicians oversee every phase of execution.',
  people,
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-24 md:py-32 bg-white text-left ${className}`}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {people.map((person, idx) => (
            <PeopleCard key={idx} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
};
