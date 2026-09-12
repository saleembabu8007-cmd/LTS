import { PROJECTS_DATA, ProjectDetailData } from './projectsData';
import { CORPORATE_INFO } from './corporateData';

export interface BusinessCapabilitySubItem {
  title: string;
  slug: string;
}

export interface BusinessCapabilityItem {
  title: string;
  slug: string;
  scope: string;
  subItems?: BusinessCapabilitySubItem[];
}

export interface BusinessCapabilityGroup {
  groupTitle: string;
  groupNumber: string;
  description?: string;
  items: BusinessCapabilityItem[];
}

export interface BusinessFeaturedCapability {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  direction: 'image-left' | 'image-right';
  ctaLabel?: string;
  ctaSlug?: string;
}

export interface BusinessAreaSector {
  num: string;
  title: string;
  scope: string;
  slug: string;
}

export interface BusinessAreaPageData {
  id: 'engineering-construction' | 'facilities-management' | 'trading';
  numeral: string;
  title: string;
  hero: {
    eyebrow: string;
    title: string;
    introduction: string;
    primaryCtaLabel: string;
    primaryCtaSlug: string;
    secondaryLinkText?: string;
    secondaryLinkSlug?: string;
    backgroundImage: string;
  };
  overview: {
    sectionEyebrow: string;
    headline: string;
    paragraphs: string[];
    governanceBadges: string[];
    ctaLabel: string;
    ctaSlug: string;
  };
  capabilities: {
    sectionEyebrow: string;
    headline: string;
    description: string;
    groups: BusinessCapabilityGroup[];
  };
  featuredCapability: BusinessFeaturedCapability;
  proof: {
    sectionEyebrow: string;
    headline: string;
    allProjectsSlug: string;
    featuredProject: ProjectDetailData;
    supportingProjects: ProjectDetailData[];
  };
  relatedIndustries?: {
    sectionEyebrow: string;
    headline: string;
    sectors: BusinessAreaSector[];
  };
  finalCta: {
    eyebrow: string;
    headline: string;
    description: string;
    primaryActionLabel: string;
    primaryActionSlug: string;
    telephone: string;
    email: string;
    backgroundImage?: string;
  };
}

/**
 * 01 — ENGINEERING & CONSTRUCTION
 */
export const ENGINEERING_CONSTRUCTION_PAGE_DATA: BusinessAreaPageData = {
  id: 'engineering-construction',
  numeral: '01',
  title: 'Engineering & Construction',
  hero: {
    eyebrow: 'DIVISION 01 &bull; CAPITAL ELECTROMECHANICAL CONTRACTING',
    title: 'Capital Electromechanical Contracting & EPC',
    introduction:
      'Turnkey electromechanical contracting, utility-synchronized commercial rooftop solar PV under DEWA Shams Dubai, and type-tested low-voltage control switchgear manufacturing.',
    primaryCtaLabel: 'Consult engineering team →',
    primaryCtaSlug: '/contact?tab=rfp&service=engineering',
    secondaryLinkText: 'View engineering projects',
    secondaryLinkSlug: '/projects',
    backgroundImage: '/assets/images/hero-building.jpg',
  },
  overview: {
    sectionEyebrow: '01 / DIVISION OVERVIEW',
    headline:
      'End-to-end electromechanical execution from engineering design to statutory authority handover.',
    paragraphs: [
      'LTSGROUP delivers comprehensive MEP contracting, renewable solar PV integration, and factory-built low-voltage power distribution assemblies for complex built environments across Dubai and the UAE.',
      'Our single-source delivery model integrates 3D BIM clash coordination, procurement of authority-cleared equipment, certified on-site mechanical and electrical installation, and rigorous testing and commissioning with DEWA and Dubai Civil Defense.',
    ],
    governanceBadges: [
      'DEWA Class 1 Approved',
      'Dubai Civil Defense Licensed',
      'ISO 9001:2015 Quality Assured',
    ],
    ctaLabel: 'Learn about engineering governance',
    ctaSlug: '/about-us',
  },
  capabilities: {
    sectionEyebrow: '02 / SERVICE CAPABILITIES',
    headline: 'Core electromechanical disciplines.',
    description:
      'Structured engineering delivery across turnkey MEP contracting, commercial rooftop solar EPC, and low-voltage control switchgear.',
    groups: [
      {
        groupTitle: 'MEP Contracting',
        groupNumber: '01',
        description:
          'Turnkey mechanical, electrical, and plumbing engineering for commercial towers, residential master developments, and public infrastructure.',
        items: [
          {
            title: 'Commercial & Residential',
            slug: '/engineering-construction/mep/commercial-residential',
            scope:
              'Central district cooling hydronics, high-density vertical busways, and life-safety stairwell smoke pressurization.',
          },
          {
            title: 'Infrastructure',
            slug: '/engineering-construction/mep/infrastructure',
            scope:
              '11kV substation coordination, underground utility reticulation, and municipal stormwater lift systems.',
          },
        ],
      },
      {
        groupTitle: 'Solar Solutions (EPC)',
        groupNumber: '02',
        description:
          'Utility-grade solar photovoltaic engineering, procurement, and construction synchronized under the DEWA Shams Dubai initiative.',
        items: [
          {
            title: 'Applications',
            slug: '/engineering-construction/solar/applications',
            scope:
              'Rooftop solar arrays, carport shade structures, and ground-mount PV installations with net-metering grid injection.',
          },
          {
            title: 'Segments',
            slug: '/engineering-construction/solar/segments',
            scope:
              'Commercial logistics warehouses, industrial manufacturing parks, and institutional campus microgrids.',
          },
          {
            title: 'Approach',
            slug: '/engineering-construction/solar/approach',
            scope:
              'Structural load analysis, DEWA solar NOC submittals, high-efficiency tier-1 PV modules, and string inverter commissioning.',
          },
        ],
      },
      {
        groupTitle: 'Control Switchgear',
        groupNumber: '03',
        description:
          'In-house assembly, wiring, and testing of low-voltage switchboards, motor control centers (MCC), and automatic transfer switches.',
        items: [
          {
            title: 'Low-Voltage Switchboards',
            slug: '/engineering-construction/control-switchgear',
            scope:
              'Form-4 type-tested assemblies up to 65kA fault level, Main Distribution Boards (MDB), and intelligent capacitor banks.',
          },
          {
            title: 'Motor Control Centers (MCC)',
            slug: '/engineering-construction/control-switchgear',
            scope:
              'Variable frequency drive panels, soft starter skids, and automated transfer switch (ATS) synchronizations.',
          },
        ],
      },
    ],
  },
  featuredCapability: {
    direction: 'image-left',
    eyebrow: 'FEATURED DISCIPLINE',
    title: 'Utility-Grade Shams Dubai Solar PV EPC & Substation Synchronization',
    subtitle: 'DEWA Shams Dubai Net-Metering & Grid Interconnection',
    description:
      'We execute turnkey commercial rooftop and carport solar photovoltaic systems engineered to withstand intense GCC ambient temperatures while maximizing continuous peak kilowatt-hour generation. From initial structural roof load verifications and shadow analysis to statutory DEWA solar permitting, inverter protection relays, and bidirectional net-meter energization, LTS provides single-source solar EPC accountability.',
    highlights: [
      'Complete DEWA Shams Dubai engineering calculations & statutory NOC approvals',
      'Structural roof reinforcement, aerodynamic racking, and wind tunnel tested mounting',
      'Tier-1 bifacial photovoltaic modules paired with smart multi-MPPT string inverters',
      'Integrated SCADA solar telemetry, performance ratio monitoring, and remote monitoring',
    ],
    image: '/assets/images/project-solar.jpg',
    ctaLabel: 'Explore Solar Capabilities →',
    ctaSlug: '/engineering-construction/solar',
  },
  proof: {
    sectionEyebrow: '03 / VERIFIED PORTFOLIO',
    headline: 'Engineering in execution.',
    allProjectsSlug: '/projects',
    featuredProject: PROJECTS_DATA[0], // Commercial High-Rise MEP Installation
    supportingProjects: [
      PROJECTS_DATA[1], // Logistics Facility Solar PV
      PROJECTS_DATA[3] || PROJECTS_DATA[0], // Industrial MCC Switchgear
    ],
  },
  relatedIndustries: {
    sectionEyebrow: '04 / SECTOR APPLICATIONS',
    headline: 'Engineering delivered across key sectors.',
    sectors: [
      {
        num: '01',
        title: 'Commercial Towers & Corporate Offices',
        scope:
          'High-density vertical power distribution, 3,200 TR district cooling hydronics, and certified smoke management.',
        slug: '/industries',
      },
      {
        num: '02',
        title: 'Industrial Facilities & Logistics Hubs',
        scope:
          '11kV transformers, motor control centers, and turnkey 2.4 MWp rooftop solar photovoltaic generation.',
        slug: '/industries',
      },
      {
        num: '03',
        title: 'Residential Master Communities',
        scope:
          'Potable booster pump skids, community electrical feeder pillars, and recreational facility infrastructure.',
        slug: '/industries',
      },
    ],
  },
  finalCta: {
    eyebrow: 'COMMERCIAL ENGAGEMENT & TENDERS',
    headline: 'Submit your engineering tender or project scope.',
    description:
      'Connect directly with LTSGROUP estimating engineers and technical directors in Dubai for tender submittals, electrical single-line diagram reviews, or solar feasibility studies.',
    primaryActionLabel: 'Submit Engineering Tender →',
    primaryActionSlug: '/contact?tab=rfp&service=engineering',
    telephone: CORPORATE_INFO.contact.telephone,
    email: CORPORATE_INFO.contact.emailTenders,
    backgroundImage: '/assets/images/hero-building.jpg',
  },
};

/**
 * 02 — FACILITIES MANAGEMENT
 */
export const FACILITIES_MANAGEMENT_PAGE_DATA: BusinessAreaPageData = {
  id: 'facilities-management',
  numeral: '02',
  title: 'Facilities Management',
  hero: {
    eyebrow: 'DIVISION 02 &bull; BUILT ASSET STEWARDSHIP & HARD FM',
    title: 'Continuous Built Asset Stewardship & Plant Reliability',
    introduction:
      'Preserving electromechanical equipment life, statutory authority compliance, and continuous thermodynamic plant uptime across commercial, healthcare, and industrial assets.',
    primaryCtaLabel: 'Schedule facility audit →',
    primaryCtaSlug: '/contact?tab=general&service=facilities',
    secondaryLinkText: 'Review FM case records',
    secondaryLinkSlug: '/projects',
    backgroundImage: '/assets/images/project-chiller.jpg',
  },
  overview: {
    sectionEyebrow: '01 / DIVISION OVERVIEW',
    headline:
      'Rigorous planned preventive maintenance and zero-downtime mechanical retrofits.',
    paragraphs: [
      'LTS Facilities Management safeguards the performance, occupant safety, and statutory compliance of built environments through structured hard FM, commercial swimming pool care, and turnkey equipment retrofits.',
      'Our dedicated mobile and resident engineering crews enforce disciplined thermodynamic logging, vibration diagnostics, and statutory Civil Defense testing, guaranteeing prompt emergency dispatch and measurable energy conservation.',
    ],
    governanceBadges: [
      '24/7 Rapid Emergency Response',
      'HTM 03-01 Air Hygiene Compliant',
      'ISO 14001:2015 Environmental Care',
    ],
    ctaLabel: 'Learn about FM SLAs & standards',
    ctaSlug: '/about-us',
  },
  capabilities: {
    sectionEyebrow: '02 / SERVICE CAPABILITIES',
    headline: 'Comprehensive asset preservation scope.',
    description:
      'Disciplined preventive maintenance, commercial aquatic water chemistry, and live-building plant overhauls.',
    groups: [
      {
        groupTitle: 'Hard Services',
        groupNumber: '01',
        description:
          'Mission-critical electromechanical asset care protecting chillers, electrical switchrooms, life-safety plumbing, and building control systems.',
        items: [
          {
            title: 'HVAC & Central Chillers',
            slug: '/facilities-management/hvac',
            scope:
              'Water-cooled and air-cooled chiller servicing, compressor overhauls, cooling tower descaling, and condenser water treatment.',
          },
          {
            title: 'Electrical Distribution',
            slug: '/facilities-management/electrical',
            scope:
              'Thermographic infrared switchgear surveys, capacitor bank servicing, busbar torque audits, and emergency generator testing.',
          },
          {
            title: 'Plumbing & Drainage',
            slug: '/facilities-management/plumbing',
            scope:
              'Potable booster pump skids, backflow preventers, drainage lift station maintenance, and water hygiene compliance.',
          },
          {
            title: 'BMS & Automation',
            slug: '/facilities-management/bms',
            scope:
              'Direct digital controller calibration, sensor validation, energy metering verification, and automated control sequence tuning.',
          },
          {
            title: 'Civil Works',
            slug: '/facilities-management/civil',
            scope:
              'Equipment plinth repairs, acoustic vibration pad inspections, waterproof coatings, and plant room structural upkeep.',
          },
        ],
      },
      {
        groupTitle: 'Soft Services',
        groupNumber: '02',
        description:
          'Specialized commercial aquatic hygiene and leisure water stewardship compliant with municipal health standards.',
        items: [
          {
            title: 'Swimming Pool Maintenance',
            slug: '/facilities-management/swimming-pool',
            scope:
              'Daily chemical balancing (pH/chlorine), automated dosing calibration, filtration backwashing, and Dubai Municipality health clearance.',
          },
        ],
      },
      {
        groupTitle: 'Retrofits / Refurbishment',
        groupNumber: '03',
        description:
          'Phased modernization of aging electromechanical plant rooms in operational facilities with zero service interruption.',
        items: [
          {
            title: 'Design & Engineering',
            slug: '/facilities-management/retrofits/design-engineering',
            scope:
              'Hydronic load recalculations, variable primary flow conversions, and high-efficiency equipment selection.',
          },
          {
            title: 'Project Management',
            slug: '/facilities-management/retrofits/project-management',
            scope:
              'Phased live-building changeouts, temporary cooling cutovers, and rigorous site safety supervision.',
          },
          {
            title: 'Testing & Commissioning',
            slug: '/facilities-management/retrofits/testing-commissioning',
            scope:
              'Third-party air and water balancing, acoustic verification, and complete statutory authority handovers.',
          },
        ],
      },
    ],
  },
  featuredCapability: {
    direction: 'image-right', // Alternating direction per specifications
    eyebrow: 'FEATURED DISCIPLINE',
    title: '24/7 Central Chiller Plant Reliability & Predictive Thermodynamic Maintenance',
    subtitle: 'Mission-Critical Chiller Stewardship & Energy Conservation',
    description:
      'In high-ambient desert environments, central chiller failure results in rapid facility crisis. LTSGROUP operates a specialized chiller engineering cell providing continuous delta-T tracking, vibration spectral analysis, spectroscopic oil condition checks, and non-destructive eddy-current tube testing. We prevent catastrophic motor burnout, eliminate scale fouling, and maintain optimal kW/TR thermodynamic efficiency over decades of operation.',
    highlights: [
      'Guaranteed emergency response SLAs backed by 24/7 central dispatch switchboard',
      'Continuous thermodynamic delta-T optimization across primary & secondary chilled water loops',
      'Non-destructive eddy-current testing & oil spectrographic contamination diagnostics',
      'Live equipment changeouts and variable primary flow conversions with zero tenant downtime',
    ],
    image: '/assets/images/project-chiller.jpg',
    ctaLabel: 'Explore Hard Services Scope →',
    ctaSlug: '/facilities-management/hard-services',
  },
  proof: {
    sectionEyebrow: '03 / VERIFIED PORTFOLIO',
    headline: 'Facilities stewardship in action.',
    allProjectsSlug: '/projects',
    featuredProject: PROJECTS_DATA[2], // Healthcare Facility Hard Services
    supportingProjects: [
      PROJECTS_DATA[0], // Commercial High-Rise MEP
      PROJECTS_DATA[5] || PROJECTS_DATA[1], // Commercial Tower Chiller Retrofit
    ],
  },
  relatedIndustries: {
    sectionEyebrow: '04 / SECTOR APPLICATIONS',
    headline: 'Asset care calibrated for mission-critical facilities.',
    sectors: [
      {
        num: '01',
        title: 'Healthcare & Clinical Facilities',
        scope:
          'HTM 03-01 hospital ventilation compliance, isolated power supplies, and uninterrupted cooling reliability.',
        slug: '/industries',
      },
      {
        num: '02',
        title: 'Commercial Towers & Mixed-Use',
        scope:
          'High-capacity central chiller stewardship, elevator electrical feeds, and tenant BTU sub-metering.',
        slug: '/industries',
      },
      {
        num: '03',
        title: 'Hospitality & Leisure Developments',
        scope:
          'Pristine recreational pool water hygiene, guestroom fan coil acoustic tuning, and kitchen extract maintenance.',
        slug: '/industries',
      },
    ],
  },
  finalCta: {
    eyebrow: 'OPERATIONAL AUDITS & SLAS',
    headline: 'Request a plant reliability or facility maintenance audit.',
    description:
      'Connect directly with our facilities directors in Dubai to review preventive maintenance SLAs, chiller plant operating logs, or aquatic care compliance.',
    primaryActionLabel: 'Request Facility Audit →',
    primaryActionSlug: '/contact?tab=general&service=facilities',
    telephone: CORPORATE_INFO.contact.telephone,
    email: CORPORATE_INFO.contact.emailFM,
    backgroundImage: '/assets/images/project-chiller.jpg',
  },
};

/**
 * 03 — TRADING
 */
export const TRADING_PAGE_DATA: BusinessAreaPageData = {
  id: 'trading',
  numeral: '03',
  title: 'Trading & Component Supply',
  hero: {
    eyebrow: 'DIVISION 03 &bull; DIRECT OEM EQUIPMENT & COMPONENT SUPPLY',
    title: 'Direct OEM Supply & Certified Technical Components',
    introduction:
      'Factory-authorized procurement of genuine OEM HVAC spare parts, variable frequency drives, precision ultrasonic BTU heat meters, industrial lights, and commercial EV chargers.',
    primaryCtaLabel: 'Inquire about components →',
    primaryCtaSlug: '/contact?tab=rfp&service=trading',
    secondaryLinkText: 'View component families',
    secondaryLinkSlug: '#capabilities-spectrum',
    backgroundImage: '/assets/images/industry-logistics.jpg',
  },
  overview: {
    sectionEyebrow: '01 / DIVISION OVERVIEW',
    headline:
      'Authorized factory distribution of mission-critical electromechanical equipment.',
    paragraphs: [
      'LTS Trading operates as a specialized procurement partner for electromechanical contractors, facility managers, and industrial plant operators throughout the UAE and GCC.',
      'We maintain direct manufacturer relationships for genuine OEM HVAC compressors, high-efficiency low-harmonic VFDs, ultrasonic thermal energy meters, industrial luminaires, and commercial EV chargers—ensuring authentic certifications, factory warranties, and dependable regional delivery.',
    ],
    governanceBadges: [
      'Direct Manufacturer Warranties',
      'Genuine OEM Sourced Spares',
      'Certified Technical Support',
    ],
    ctaLabel: 'Submit BOQ for quotation',
    ctaSlug: '/contact?tab=rfp&service=trading',
  },
  capabilities: {
    sectionEyebrow: '02 / SERVICE CAPABILITIES',
    headline: 'Specialized equipment families.',
    description:
      'Comprehensive inventory and factory-authorized supply across five critical technical categories.',
    groups: [
      {
        groupTitle: 'HVAC Spare Parts',
        groupNumber: '01',
        description:
          'Genuine OEM replacement components for commercial chillers, packaged air handlers, and split systems.',
        items: [
          {
            title: 'Compressors & Motors',
            slug: '/trading/hvac',
            scope:
              'Semi-hermetic screw, reciprocating, and scroll compressors, heavy-duty condenser fan motors, and shaft couplings.',
          },
          {
            title: 'Hydronic & Refrigerant Valves',
            slug: '/trading/hvac',
            scope:
              'Thermostatic expansion valves, solenoid valves, electronic expansion valves, and dynamic pressure independent control valves (PICV).',
          },
          {
            title: 'Heat Exchanger Coils & Media',
            slug: '/trading/hvac',
            scope:
              'Copper-tube aluminum-fin condenser and evaporator coils, AHU filter media, and commercial air purification filters.',
          },
        ],
      },
      {
        groupTitle: 'Controls & VFDs',
        groupNumber: '02',
        description:
          'Intelligent motor controllers, variable frequency drives, and precision electronic sensing devices.',
        items: [
          {
            title: 'Variable Frequency Drives (VFD)',
            slug: '/trading/controls-vfds',
            scope:
              'Low-harmonic HVAC and industrial variable frequency drives, bypass panels, and soft starters engineered for continuous 50°C GCC loads.',
          },
          {
            title: 'Sensors & Actuators',
            slug: '/trading/controls-vfds',
            scope:
              'Direct digital temperature sensors, differential pressure transmitters, and motorized damper actuators.',
          },
        ],
      },
      {
        groupTitle: 'Metering, Lights & EV Charging',
        groupNumber: '03',
        description:
          'High-precision ultrasonic thermal energy telemetry, energy-efficient commercial LED lighting, and commercial EV charging stations.',
        items: [
          {
            title: 'Ultrasonic BTU Meters',
            slug: '/trading/metering',
            scope:
              'Class-2 ultrasonic thermal energy meters, MID approved, with automated M-Bus and Modbus tenant billing outputs.',
          },
          {
            title: 'Industrial & Architectural Lighting',
            slug: '/trading/lights',
            scope:
              'High-bay industrial LED luminaires, explosion-proof light fittings, and automated occupancy sensing controls.',
          },
          {
            title: 'Commercial EV Chargers',
            slug: '/trading/ev',
            scope:
              'Level-2 AC destination chargers and DC ultra-fast chargers compliant with UAE electricity authority standards.',
          },
        ],
      },
    ],
  },
  featuredCapability: {
    direction: 'image-left',
    eyebrow: 'FEATURED OEM SUPPLY',
    title: 'Smart Ultrasonic BTU Thermal Energy Telemetry & Low-Harmonic Drives',
    subtitle: 'Precision Tenant Energy Accounting & Motor Efficiency',
    description:
      'Accurate sub-metering and dynamic flow balancing represent the backbone of commercial and residential district cooling operations. LTS Trading supplies ultrasonic BTU thermal energy meters with zero moving parts, ensuring lifetime metrological accuracy without drift or mechanical wear. Paired with our low-harmonic HVAC variable frequency drives, building operators achieve precise tenant cost allocation and measurable motor energy conservation.',
    highlights: [
      'MID-certified Class-2 accuracy with integrated matched pair Pt500 temperature sensors',
      'Seamless automated integration into central BMS via wired M-Bus, wireless M-Bus, or Modbus RTU',
      'Heavy-duty VFDs with built-in DC chokes complying with IEEE 519 harmonic standards',
      'Direct manufacturer warranties and factory-trained technical support based in Dubai',
    ],
    image: '/assets/images/vfd-panel.jpg',
    ctaLabel: 'Browse BTU Metering Lines →',
    ctaSlug: '/trading/metering',
  },
  proof: {
    sectionEyebrow: '03 / VERIFIED DEPLOYMENTS',
    headline: 'Component supply in execution.',
    allProjectsSlug: '/projects',
    featuredProject: PROJECTS_DATA[6] || PROJECTS_DATA[0], // District Cooling BTU Metering
    supportingProjects: [
      PROJECTS_DATA[3] || PROJECTS_DATA[0], // Industrial MCC & Switchgear
      PROJECTS_DATA[2], // Healthcare Facility Hard Services
    ],
  },
  relatedIndustries: {
    sectionEyebrow: '04 / SECTOR APPLICATIONS',
    headline: 'Component distribution across core markets.',
    sectors: [
      {
        num: '01',
        title: 'District Cooling Schemes & Utilities',
        scope:
          'High-volume ultrasonic BTU heat meters, dynamic hydronic balancing valves, and automated billing telemetry.',
        slug: '/industries',
      },
      {
        num: '02',
        title: 'Industrial Plants & Manufacturing',
        scope:
          'High-amperage variable frequency drives, soft starters, and explosion-proof LED lighting fittings.',
        slug: '/industries',
      },
      {
        num: '03',
        title: 'Commercial Facilities & Hospitality',
        scope:
          'Genuine OEM chiller compressors, replacement fan coil motors, and commercial Level-2 EV charging stations.',
        slug: '/industries',
      },
    ],
  },
  finalCta: {
    eyebrow: 'EQUIPMENT SOURCING & BOQS',
    headline: 'Submit your equipment bill of quantities (BOQ) for quotation.',
    description:
      'Send component schedules, compressor model numbers, or BTU metering specifications directly to our Dubai trading desk for rapid pricing and regional stock verification.',
    primaryActionLabel: 'Submit BOQ Schedule →',
    primaryActionSlug: '/contact?tab=rfp&service=trading',
    telephone: CORPORATE_INFO.contact.telephone,
    email: CORPORATE_INFO.contact.emailTrading,
    backgroundImage: '/assets/images/industry-logistics.jpg',
  },
};
