/**
 * Centralized Corporate Identity & Governance Data for LTSGROUP
 */

export const CORPORATE_INFO = {
  legalName: 'LTS Electromechanical Equipment Installation L.L.C.',
  shortName: 'LTSGROUP',
  tagline: 'Built-Environment Engineering, Facilities Management & Trading',
  jurisdiction: 'Dubai, United Arab Emirates',
  legal: {
    commercialRegistration: 'CN-1094821',
    licenseNumber: '782914',
    taxRegistrationNumber: 'TRN-100482910400003',
  },
  address: {
    street: 'Al Quoz Industrial Area 3',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'GCC',
    line1: 'Building 24, Road 18B',
    line2: 'Al Quoz Industrial Area 3',
    emirate: 'Dubai',
  },
  contact: {
    telephone: '+971 4 347 1234',
    telephoneDisplay: '+971 4 347 1234',
    emailGeneral: 'info@ltsgroup.ae',
    emailTenders: 'tenders@ltsgroup.ae',
    emailFM: 'fm@ltsgroup.ae',
    emailTrading: 'trading@ltsgroup.ae',
    emailOperations: 'operations@ltsgroup.ae',
    hours: 'Monday – Friday: 08:00 – 18:00',
    emergencyAvailability: '24/7 Emergency Response Dispatch',
    address: {
      line1: 'Building 24, Road 18B',
      line2: 'Al Quoz Industrial Area 3',
      emirate: 'Dubai',
      country: 'United Arab Emirates',
    },
  },
  governance: [
    {
      code: 'ISO 9001:2015',
      name: 'Quality Management System',
      description: 'Systematic quality assurance across procurement, engineering coordination, site execution, and commissioning documentation.',
    },
    {
      code: 'ISO 14001:2015',
      name: 'Environmental Management',
      description: 'Disciplined waste minimization, safe refrigerant recovery, and energy-efficient equipment selection.',
    },
    {
      code: 'ISO 45001:2018',
      name: 'Occupational Health & Safety',
      description: 'Comprehensive workforce protection, hazard risk assessments, and zero-harm site supervision protocols.',
    },
    {
      code: 'DEWA Approved',
      name: 'Dubai Electricity & Water Authority',
      description: 'Certified for substation works, HV transformer interfaces, LV switchgear submittals, and Shams Dubai solar PV net-metering.',
    },
    {
      code: 'Civil Defense Certified',
      name: 'Dubai Civil Defense (DCD)',
      description: 'Approved fire life-safety systems, stairwell smoke extract pressurization, and statutory safety inspections.',
    },
    {
      code: 'Dubai Municipality',
      name: 'DM Public Health & Hydraulics',
      description: 'Compliant with potable water storage hygiene, drainage lift systems, and aquatic leisure water chemistry.',
    },
  ],
  divisions: [
    {
      code: '01',
      id: 'engineering-construction',
      name: 'Engineering & Construction',
      tagline: 'Capital Electromechanical Contracting',
      description: 'Turnkey MEP contracting, commercial rooftop and carport solar photovoltaic EPC under DEWA Shams Dubai, and factory-built Form-4 low-voltage control switchgear.',
      slug: '/engineering-construction',
    },
    {
      code: '02',
      id: 'facilities-management',
      name: 'Facilities Management',
      tagline: 'Operational Asset Care & Plant Retrofits',
      description: 'Mission-critical hard FM operations safeguarding central chillers and electrical networks, commercial swimming pool care, and live-building plant overhauls with guaranteed SLAs.',
      slug: '/facilities-management',
    },
    {
      code: '03',
      id: 'trading',
      name: 'Trading & Distribution',
      tagline: 'Direct OEM Equipment & Wholesale Supply',
      description: 'Procurement and distribution of genuine OEM HVAC spare parts, variable frequency drives, smart ultrasonic BTU heat meters, industrial LED lighting, and commercial EV charging stations.',
      slug: '/trading',
    },
  ],
} as const;
