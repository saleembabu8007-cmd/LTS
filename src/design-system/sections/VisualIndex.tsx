import React from 'react';
import { VisualIndexLayout, VisualIndexEntry } from '../layouts/VisualIndexLayout';

export interface VisualIndexProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  entries?: VisualIndexEntry[];
  className?: string;
}

const DEFAULT_LTS_DIVISIONS: VisualIndexEntry[] = [
  {
    id: 'engineering-construction',
    numeral: '01',
    title: 'Engineering & Construction',
    scope: 'Turnkey MEP contracting, utility-scale solar EPC, and custom control switchgear manufacturing.',
    href: '/engineering-construction',
    imageUrl: '/images/mep-construction.jpg',
  },
  {
    id: 'facilities-management',
    numeral: '02',
    title: 'Facilities Management',
    scope: 'Continuous hard services (HVAC, Electrical, Plumbing, BMS) and turnkey system retrofits.',
    href: '/facilities-management',
    imageUrl: '/images/hvac-hero.jpg',
  },
  {
    id: 'trading',
    numeral: '03',
    title: 'Trading & Components',
    scope: 'Authorized distribution of OEM HVAC spare parts, ABB VFDs, smart meters, and EV infrastructure.',
    href: '/trading',
    imageUrl: '/images/vfd-panel.jpg',
  },
  {
    id: 'corporate-projects',
    numeral: '04',
    title: 'Corporate Infrastructure Portfolio',
    scope: 'Verified commercial, hospitality, data center, and industrial assets engineered across the region.',
    href: '/projects',
    imageUrl: '/images/hero-building.jpg',
  },
];

/**
 * VisualIndex (Composition 6)
 * Authoritative editorial ledger of LTSGROUP business divisions.
 * Conforms to Rule 12: Approved information architecture.
 */
export const VisualIndex: React.FC<VisualIndexProps> = ({
  eyebrow = 'Core Business Structure',
  heading = 'Engineering Divisions & Operational Matrix',
  description,
  entries = DEFAULT_LTS_DIVISIONS,
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-24 md:py-32 bg-white text-left ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {description && (
          <p className="text-[16px] text-[#4A5568] max-w-[65ch] mb-8">
            {description}
          </p>
        )}
        <VisualIndexLayout
          entries={entries}
          eyebrow={eyebrow}
          heading={heading}
        />
      </div>
    </section>
  );
};
