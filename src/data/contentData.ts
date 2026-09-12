/**
 * LTSGROUP Scannable Content Architecture
 * Single source of truth for concise, customer-focused copy.
 * Strictly adheres to 1-1-1 density: 1 Strong Heading + 1 Supporting Sentence + 1 Clear Action.
 */

export interface PillarSummary {
  id: string;
  name: string;
  tagline: string;
  description: string;
  slug: string;
  image: string;
  disciplines: string[];
  ctaLabel: string;
}

export interface ProjectSummary {
  id: string;
  title: string;
  category: string;
  location: string;
  scope: string;
  clearance: string;
  image: string;
  slug: string;
}

export interface SectorSummary {
  id: string;
  title: string;
  useCase: string;
  slug: string;
}

export interface GovernanceItem {
  authority: string;
  title: string;
  scope: string;
}

export const CONTENT_DATA = {
  // 1. WHAT LTS IS
  identity: {
    badge: 'LTS ELECTROMECHANICAL LLC • DUBAI, UAE',
    heroHeadline: 'Engineering Precision. Operating Reliability.',
    heroSentence:
      'Turnkey electromechanical contracting, commercial solar EPC, hard facilities management, and direct OEM equipment supply across the UAE.',
    overviewHeadline: 'Single-source electromechanical accountability across the complete building lifecycle.',
    overviewSentence:
      'LTSGROUP eliminates contractor fragmentation by uniting engineering design, site execution, facilities maintenance, and wholesale distribution under strict statutory governance.',
  },

  // 2. WHAT LTS DOES (The 3 Core Pillars)
  pillars: [
    {
      id: 'engineering',
      name: 'Engineering & Construction',
      tagline: 'Capital Works & Turnkey Contracting',
      description:
        'Complete MEP engineering, turnkey commercial solar photovoltaic EPC, and factory-assembled Form-4 low-voltage control switchgear.',
      slug: '/engineering-construction',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      disciplines: [
        'MEP Contracting (Commercial, Residential & Infrastructure)',
        'Solar Photovoltaic EPC (DEWA Shams Dubai Certified)',
        'Form-4 Type-Tested Control Switchgear & MCCs',
      ],
      ctaLabel: 'Explore Engineering Scope',
    },
    {
      id: 'facilities',
      name: 'Facilities Management',
      tagline: 'Operational Asset Care & Plant Retrofits',
      description:
        '24/7 mission-critical hard FM safeguarding chillers and electrical infrastructure, commercial swimming pool care, and live-building plant retrofits.',
      slug: '/facilities-management',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      disciplines: [
        'Hard Services: HVAC Chillers, Electrical & Plumbing',
        'Soft Services: Commercial Swimming Pool Care',
        'Plant Retrofits: Live Chiller Replacement & Energy Optimization',
      ],
      ctaLabel: 'Explore Facilities Scope',
    },
    {
      id: 'trading',
      name: 'Trading & Distribution',
      tagline: 'Direct OEM Sourcing & Wholesale Supply',
      description:
        'Regional wholesale distribution of genuine OEM HVAC spare parts, variable frequency drives (VFDs), smart ultrasonic BTU meters, and EV chargers.',
      slug: '/trading',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      disciplines: [
        'HVAC Spare Parts: Compressors, Motors & Valves',
        'Controls & VFDs: Variable Frequency Drives & Sensors',
        'Metering & EV: Ultrasonic BTU Heat Meters & EV Charging',
      ],
      ctaLabel: 'Browse Equipment Lines',
    },
  ] as PillarSummary[],

  // 3. WHERE LTS CAN HELP (6 Regulated Sectors)
  sectors: [
    {
      id: 'commercial',
      title: 'Commercial Towers',
      useCase: 'District cooling hydronics, high-amperage vertical busways, and automated balancing.',
      slug: '/industries#commercial',
    },
    {
      id: 'residential',
      title: 'Residential Communities',
      useCase: 'Community water boosting, power distribution networks, and aquatic leisure care.',
      slug: '/industries#residential',
    },
    {
      id: 'healthcare',
      title: 'Healthcare Facilities',
      useCase: 'Cleanroom air handling units, medical gas networks, and uninterruptible backup power.',
      slug: '/industries#healthcare',
    },
    {
      id: 'industrial',
      title: 'Industrial & Logistics',
      useCase: '11kV substations, heavy motor control centers (MCC), and turnkey rooftop solar PV.',
      slug: '/industries#industrial',
    },
    {
      id: 'hospitality',
      title: 'Retail & Hospitality',
      useCase: 'Sound-attenuated fan coil units, commercial kitchen exhaust, and pristine water features.',
      slug: '/industries#hospitality',
    },
    {
      id: 'infrastructure',
      title: 'Public Infrastructure',
      useCase: 'Municipal pumping stations, drainage lift infrastructure, and statutory utility compliance.',
      slug: '/industries#infrastructure',
    },
  ] as SectorSummary[],

  // 4. WHAT LTS HAS DELIVERED (Verified Built Deliveries)
  projects: [
    {
      id: 'proj-1',
      title: 'Commercial High-Rise MEP Installation',
      category: 'Commercial MEP',
      location: 'Business Bay, Dubai',
      scope: 'Complete electromechanical execution across 48 floors including centralized chilled water, dual busbars, and smoke management.',
      clearance: 'DEWA Approved • Civil Defense Certified',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      slug: '/projects/commercial-high-rise-mep',
    },
    {
      id: 'proj-2',
      title: 'Logistics Facility Photovoltaic Rooftop Plant',
      category: 'Solar PV EPC',
      location: 'Dubai Industrial City',
      scope: '2.4 MWp turnkey grid-tied solar photovoltaic installation on warehouse roofing synchronized under DEWA Shams Dubai.',
      clearance: 'DEWA Shams Dubai Certified',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
      slug: '/projects/logistics-facility-solar-pv',
    },
    {
      id: 'proj-3',
      title: 'Healthcare Facility Central Chiller Overhaul',
      category: 'Facilities & Retrofit',
      location: 'Dubai Healthcare City',
      scope: 'Live phased replacement of aged chillers with high-efficiency variable-speed units maintaining continuous clinical operations.',
      clearance: 'HTM 03-01 & ISO 9001 Compliant',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      slug: '/projects/healthcare-facility-hard-services',
    },
  ] as ProjectSummary[],

  // 5. WHY LTS CAN BE TRUSTED (Statutory Credibility)
  governance: [
    {
      authority: 'DEWA Approved',
      title: 'Dubai Electricity & Water Authority',
      scope: 'Substation works, LV switchgear submittals, and Shams Dubai solar PV net-metering.',
    },
    {
      authority: 'Civil Defense Certified',
      title: 'Dubai Civil Defense (DCD)',
      scope: 'Fire life-safety systems, stairwell smoke pressurization, and statutory safety approvals.',
    },
    {
      authority: 'Dubai Municipality',
      title: 'Public Health & Hydraulics',
      scope: 'Potable water storage hygiene, drainage lift stations, and commercial pool water chemistry.',
    },
    {
      authority: 'ISO Certified',
      title: 'Integrated Management System',
      scope: 'Independently audited ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 compliance.',
    },
  ] as GovernanceItem[],

  // 6. HOW TO CONTACT LTS (Clear Commercial Action)
  contact: {
    headline: 'Submit Project Tender or Request Pre-Qualification Pack.',
    sentence:
      'Our Dubai estimation and technical teams provide rapid reviews of project briefs, bills of quantities (BOQ), and facilities maintenance tenders.',
    primaryActionLabel: 'Submit Tender / RFP Package',
    secondaryActionLabel: 'Contact Commercial Desk',
    turnaround: 'Tender submissions reviewed within 48 hours.',
  },
} as const;
