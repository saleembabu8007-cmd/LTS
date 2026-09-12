export interface ProjectDetailData {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  division: 'Engineering & Construction' | 'Facilities Management' | 'Trading';
  divisionSlug: string;
  industry: string;
  location: string;
  clientTier: string;
  completionDate: string;
  scopeOverview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  specifications: { label: string; value: string }[];
  approvals: string[];
  image: string;
  secondaryImage?: string;
  gallery?: string[];
  featured?: boolean;
  relatedService: {
    title: string;
    slug: string;
    description: string;
  };
  rfpScopeTag: string;
  outcome?: string;
}

export const PROJECTS_DATA: ProjectDetailData[] = [
  {
    id: 'proj-1',
    slug: 'commercial-high-rise-mep',
    title: 'Commercial High-Rise MEP Installation',
    category: 'mep',
    categoryLabel: 'Commercial MEP',
    division: 'Engineering & Construction',
    divisionSlug: '/engineering-construction',
    industry: 'Commercial Towers',
    location: 'Business Bay, Dubai',
    clientTier: 'Commercial Tower Developer',
    completionDate: 'Q4 2025',
    featured: true,
    scopeOverview:
      'Complete turnkey electromechanical contracting across a 48-floor commercial tower, including centralized district cooling hydronics, dual-busbar electrical risers, and life-safety smoke management.',
    challenge:
      'Coordinating high-volume hydronic pipework, high-amperage vertical busducts, and fire life-safety smoke control in a congested vertical footprint with tight floor-to-floor heights.',
    solution:
      'LTS deployed precision 3D clash-coordinated MEP BIM modelling, off-site pre-fabrication of modular riser spools, dual-source busbar architecture with automatic transfer switches (ATS), and stairwell smoke pressurization tested to strict Civil Defense requirements.',
    outcome:
      'Delivered on schedule with 100% first-pass Civil Defense life-safety inspection approval, energizing 3,200 TR of high-efficiency cooling across all 48 floors.',
    deliverables: [
      'District cooling central heat exchangers & secondary chilled water pumps',
      'Dual 3200A low-impedance copper electrical busways with plug-in tap-off units',
      'Stairwell smoke pressurization & basement smoke exhaust fans with VFD control',
      'Dedicated BMS Direct Digital Control (DDC) panels with Modbus integration',
    ],
    specifications: [
      { label: 'Building Scale', value: '48 Floors + 4 Basements' },
      { label: 'Cooling Capacity', value: '3,200 TR Connected Load' },
      { label: 'Electrical Capacity', value: '11kV / 400V Substation Interface' },
      { label: 'Governing Standards', value: 'IEC 61439, ASHRAE 90.1, DCD Life-Safety' },
    ],
    approvals: [
      'Dubai Electricity & Water Authority (DEWA) Approved',
      'Dubai Civil Defense (DCD) Fire Life-Safety Certified',
      'Dubai Municipality Hydraulic & Structural Clearances',
    ],
    image: '/assets/images/project-highrise.jpg',
    secondaryImage: '/assets/images/mep-construction.jpg',
    gallery: [
      '/assets/images/project-highrise.jpg',
      '/assets/images/mep-construction.jpg',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    ],
    relatedService: {
      title: 'Turnkey MEP Contracting',
      slug: '/engineering-construction/mep',
      description: 'Explore full mechanical, electrical, and plumbing engineering capabilities for commercial towers.',
    },
    rfpScopeTag: 'MEP Contracting (Commercial & Residential)',
  },
  {
    id: 'proj-2',
    slug: 'logistics-facility-solar-pv',
    title: 'Logistics Facility Photovoltaic Rooftop Plant',
    category: 'solar',
    categoryLabel: 'Solar PV EPC',
    division: 'Engineering & Construction',
    divisionSlug: '/engineering-construction',
    industry: 'Logistics & Industrial',
    location: 'Dubai Industrial City',
    clientTier: 'Regional Logistics Operator',
    completionDate: 'Q2 2025',
    featured: false,
    scopeOverview:
      '2.4 MWp turnkey commercial rooftop solar photovoltaic installation across 18,000 sqm of warehouse roofing synchronized under the DEWA Shams Dubai net-metering framework.',
    challenge:
      'Designing and installing a high-capacity solar array on lightweight standing-seam industrial metal roofs without penetrating water membranes or exceeding structural roof load allowances in high ambient coastal heat.',
    solution:
      'LTS engineered a custom non-penetrative seam-clamping rail architecture, utilized Tier-1 bifacial monocrystalline PV modules with low temperature coefficients, and integrated distributed multi-MPPT high-efficiency string inverters paired with cloud SCADA telemetry.',
    outcome:
      'Achieved full DEWA Shams Dubai grid synchronization, generating 3.85 GWh annually with zero structural roof penetrations and high thermal performance.',
    deliverables: [
      'Structural load calculations & wind uplift aerodynamic simulation',
      '2.4 MWp Tier-1 bifacial monocrystalline photovoltaic modules',
      'Multi-MPPT IP66-rated string inverters with high ambient thermal derating protection',
      'DEWA net-metering grid interconnection substation with SCADA telemetry',
    ],
    specifications: [
      { label: 'System Capacity', value: '2.4 MWp DC / 2.0 MW AC' },
      { label: 'Roof Surface Area', value: '18,000 sqm standing-seam roof' },
      { label: 'Annual Generation', value: 'Approx. 3,850,000 kWh' },
      { label: 'Net-Metering Scheme', value: 'DEWA Shams Dubai Framework' },
    ],
    approvals: [
      'DEWA Shams Dubai Solar PV Certified Contractor',
      'Dubai Municipality Structural Safety Approval',
      'Third-Party Grid Interconnection Inspection',
    ],
    image: '/assets/images/project-solar.jpg',
    secondaryImage: '/assets/images/solar-epc.jpg',
    gallery: [
      '/assets/images/project-solar.jpg',
      '/assets/images/solar-epc.jpg',
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    ],
    relatedService: {
      title: 'Solar Photovoltaic EPC',
      slug: '/engineering-construction/solar',
      description: 'Learn about turnkey solar EPC engineering, procurement, and DEWA net-metering synchronization.',
    },
    rfpScopeTag: 'Solar Photovoltaic EPC (DEWA Shams Dubai)',
  },
  {
    id: 'proj-3',
    slug: 'healthcare-facility-hard-services',
    title: 'Critical Healthcare Facility Hard Services Care',
    category: 'fm',
    categoryLabel: 'Facilities Management',
    division: 'Facilities Management',
    divisionSlug: '/facilities-management',
    industry: 'Healthcare',
    location: 'Dubai Healthcare City',
    clientTier: 'Specialized Surgical Hospital',
    completionDate: 'Ongoing Term Contract',
    featured: false,
    scopeOverview:
      '24/7 dedicated engineering residency and planned preventive maintenance safeguarding hospital central chillers, HTM 03-01 cleanroom ventilation, medical gas networks, and emergency backup power.',
    challenge:
      'Ensuring zero downtime or temperature excursions in operating theaters, sterile intensive care units, and pathology labs while conducting essential central chiller maintenance and electrical load testing.',
    solution:
      'LTS structured redundant dual-chiller operating regimes, programmed monthly off-peak resistive load-bank testing for emergency diesel generators, maintained continuous differential pressure monitoring across cleanrooms, and assigned a dedicated on-site certified engineering team with a 15-minute emergency response SLA.',
    outcome:
      'Maintained uninterrupted 100% operational uptime across all surgical suites, sterile zones, and medical gas networks under an SLA response under 15 minutes.',
    deliverables: [
      '24/7 on-site multidisciplinary engineering maintenance residency',
      'Continuous chiller thermodynamic monitoring & vibration trend analysis',
      'HTM 03-01 hospital cleanroom air handling unit (AHU) maintenance & HEPA testing',
      'Medical gas pipework manifold pressure testing & emergency generator servicing',
    ],
    specifications: [
      { label: 'Coverage Model', value: '24/7 On-Site Resident Team' },
      { label: 'Emergency Response SLA', value: 'Under 15 Minutes' },
      { label: 'Governing Standard', value: 'HTM 03-01 & ISO 9001/14001/45001' },
      { label: 'Asset Scope', value: 'HVAC, Electrical, Medical Gas, Hydraulics' },
    ],
    approvals: [
      'Dubai Health Authority (DHA) Environmental Compliance',
      'ISO 9001:2015 / ISO 45001:2018 Certified Operations',
      'Dubai Civil Defense Life-Safety Maintenance Clearances',
    ],
    image: '/assets/images/industry-healthcare.jpg',
    secondaryImage: '/assets/images/project-chiller.jpg',
    gallery: [
      '/assets/images/industry-healthcare.jpg',
      '/assets/images/project-chiller.jpg',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    ],
    relatedService: {
      title: 'Hard Facilities Management',
      slug: '/facilities-management/hard-services',
      description: 'Discover SLA-backed hard FM services covering central chillers, electrical networks, and building systems.',
    },
    rfpScopeTag: 'Hard Facilities Management & PPM Contracts',
  },
  {
    id: 'proj-4',
    slug: 'industrial-chiller-retrofit',
    title: 'Industrial Manufacturing Chiller Plant Retrofit',
    category: 'retrofits',
    categoryLabel: 'Plant Retrofits',
    division: 'Facilities Management',
    divisionSlug: '/facilities-management',
    industry: 'Industrial Manufacturing',
    location: 'Al Quoz Industrial Area, Dubai',
    clientTier: 'Food Processing Manufacturer',
    completionDate: 'Q1 2026',
    featured: false,
    scopeOverview:
      'Live phased replacement of aged reciprocating chillers with high-efficiency variable-speed centrifugal units with zero process interruption to continuous 24-hour manufacturing operations.',
    challenge:
      'Removing and rigging out obsolete cooling equipment from an enclosed plant room while maintaining 450 TR of continuous process cooling without halting active manufacturing lines.',
    solution:
      'LTS installed temporary modular bypass chilled water headers and deployed phased crane rigging during scheduled weekend plant maintenance windows, followed by dynamic primary/secondary hydronic balancing and automated VFD synchronization.',
    outcome:
      'Achieved a verified 28% specific power reduction (kW/TR) with exactly zero process downtime during live factory production changeover.',
    deliverables: [
      'Thermodynamic plant energy audit & equipment lifecycle sizing',
      'Temporary bypass piping and modular chiller header tie-in',
      'Rigging and installation of two high-efficiency variable-speed chillers',
      'Hydronic balancing, VFD commissioning, and DEWA load optimization',
    ],
    specifications: [
      { label: 'Cooling Capacity', value: '600 TR Total Plant Capacity' },
      { label: 'Energy Efficiency', value: '28% Specific Power Reduction (kW/TR)' },
      { label: 'Changeover Downtime', value: '0 Hours Process Interruption' },
      { label: 'Testing Standard', value: 'AHRI 550/590 Certified Performance' },
    ],
    approvals: [
      'DEWA Electrical Modification Clearance',
      'Testing & Balancing Agency Certified Commissioning',
      'ISO 14001 Environmental Energy Reduction Audit',
    ],
    image: '/assets/images/project-chiller.jpg',
    secondaryImage: '/assets/images/industry-logistics.jpg',
    gallery: [
      '/assets/images/project-chiller.jpg',
      '/assets/images/industry-logistics.jpg',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    ],
    relatedService: {
      title: 'Plant Retrofits & Refurbishment',
      slug: '/facilities-management/retrofits-refurbishment',
      description: 'View our zero-downtime engineering methodology for live chiller overhauls and equipment replacement.',
    },
    rfpScopeTag: 'Mechanical & Electrical Plant Retrofits',
  },
  {
    id: 'proj-5',
    slug: 'residential-community-water-networks',
    title: 'Residential Master Community Water & Aquatic Networks',
    category: 'mep',
    categoryLabel: 'Public Health & Hydraulics',
    division: 'Engineering & Construction',
    divisionSlug: '/engineering-construction',
    industry: 'Residential Master Communities',
    location: 'Dubai, UAE',
    clientTier: 'Master Community Developer',
    completionDate: 'Q3 2025',
    featured: false,
    scopeOverview:
      'Quad-pump variable-speed domestic water pressure booster stations, community stormwater drainage, and swimming pool filtration infrastructure across a 600-villa master development.',
    challenge:
      'Balancing consistent hydraulic water pressure across diverse multi-elevation villa zones while safeguarding community recreational swimming pool filtration against bacteriological contamination.',
    solution:
      'LTS engineered multi-stage vertical booster pump sets with dual variable frequency drives and automatic equalization, integrated automatic stormwater sump pumps with dual float switches, and installed automated quartz-sand filtration with automated chemical telemetry.',
    outcome:
      'Secured full Dubai Municipality bacteriological clearance and stable 4.5 bar hydraulic pressure distribution across all 600 residential villa parcels.',
    deliverables: [
      'Quad-pump variable-speed domestic water booster skid assemblies',
      'Submersible stormwater lift stations with dual guide-rail slide systems',
      'Commercial swimming pool sand filters, circulation pumps, and automated dosing',
      'Dubai Municipality bacteriological testing & compliance handover',
    ],
    specifications: [
      { label: 'Residential Coverage', value: '600 Villas + Clubhouse' },
      { label: 'Booster Pressure', value: 'Constant 4.5 Bar Dynamic Pressure' },
      { label: 'Aquatic Volume', value: '1,200 m³ Combined Pool Capacity' },
      { label: 'Water Hygiene Code', value: 'Dubai Municipality Public Health Standards' },
    ],
    approvals: [
      'Dubai Municipality Public Health & Safety Approval',
      'Dubai Electricity & Water Authority (DEWA) Water NOC',
      'Hydraulic Commissioning Certificate',
    ],
    image: '/assets/images/industry-hospitality.jpg',
    secondaryImage: '/assets/images/hero-building.jpg',
    gallery: [
      '/assets/images/industry-hospitality.jpg',
      '/assets/images/hero-building.jpg',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    ],
    relatedService: {
      title: 'Swimming Pool Maintenance & Aquatic Care',
      slug: '/facilities-management/swimming-pool-maintenance',
      description: 'Explore commercial swimming pool filtration, chemical balancing, and municipal hygiene compliance.',
    },
    rfpScopeTag: 'Commercial Swimming Pool Systems & Aquatic Care',
  },
  {
    id: 'proj-6',
    slug: 'industrial-mcc-switchgear',
    title: 'Industrial Motor Control Center (MCC) Assemblies',
    category: 'switchgear',
    categoryLabel: 'Control Switchgear',
    division: 'Engineering & Construction',
    divisionSlug: '/engineering-construction',
    industry: 'Industrial Manufacturing',
    location: 'Dubai, UAE',
    clientTier: 'Industrial Processing Facility',
    completionDate: 'Q4 2025',
    featured: false,
    scopeOverview:
      'Factory design, assembly, and testing of Form-4 type-tested low-voltage Motor Control Centers (MCC) and main distribution boards with intelligent motor management and BMS integration.',
    challenge:
      'Designing heavy industrial motor starters capable of withstanding high prospective short-circuit fault currents (up to 65kA) with complete internal partition safety for plant maintenance technicians.',
    solution:
      'LTS fabricated heavy sheet steel enclosures with Form 4b internal segregation separating busbars from functional starter units, integrated microprocessor-based motor protection relays, and conducted rigorous factory acceptance testing conforming to IEC 61439-1/2.',
    outcome:
      'Complete Form-4b type-tested low-voltage switchboard delivery complying with IEC 61439-1/2 and DEWA low voltage switchgear regulations with 65kA fault withstand.',
    deliverables: [
      'Form-4b low-voltage Motor Control Center switchboards (65kA for 1 sec)',
      'Intelligent electronic motor protection relays with Modbus RTU telemetry',
      'Integrated soft-starters and variable frequency drive feeder compartments',
      'Full Factory Acceptance Testing (FAT) dossier and on-site commissioning',
    ],
    specifications: [
      { label: 'Rated Voltage', value: '400V / 690V, 50Hz' },
      { label: 'Short-Circuit Withstand', value: '65kA rms for 1 second' },
      { label: 'Form of Separation', value: 'Form 4b (IEC 61439-2)' },
      { label: 'Ingress Protection', value: 'IP54 Industrial Enclosure' },
    ],
    approvals: [
      'Type-Test Certified to IEC 61439-1 & IEC 61439-2',
      'DEWA Low Voltage Switchgear Regulations Compliant',
      'Third-Party Independent Laboratory Verification',
    ],
    image: '/assets/images/mep-construction.jpg',
    secondaryImage: '/assets/images/project-highrise.jpg',
    gallery: [
      '/assets/images/mep-construction.jpg',
      '/assets/images/project-highrise.jpg',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    ],
    relatedService: {
      title: 'Form-4 Control Switchgear',
      slug: '/engineering-construction/control-switchgear',
      description: 'Examine our type-tested low-voltage switchboard manufacturing and assembly capabilities.',
    },
    rfpScopeTag: 'Low & Medium Voltage Control Switchgear',
  },
  {
    id: 'proj-7',
    slug: 'district-cooling-metering-rollout',
    title: 'District Cooling Ultrasonic BTU Metering Rollout',
    category: 'metering',
    categoryLabel: 'Metering & Accessories',
    division: 'Trading',
    divisionSlug: '/trading',
    industry: 'District Cooling & Utilities',
    location: 'Dubai Marina, Dubai',
    clientTier: 'District Cooling Utility',
    completionDate: 'Q3 2025',
    featured: false,
    scopeOverview:
      'Turnkey procurement and delivery of 4,500 static ultrasonic BTU thermal energy meters and automated meter reading (AMR) telemetry for multi-tower sub-billing verification.',
    challenge:
      'Ensuring strict MID Class 2 metrological compliance and long-term zero drift across diverse district cooling chilled water branches under continuous operation.',
    solution:
      'LTSGROUP supplied factory-calibrated ultrasonic energy meters with paired PT500 temperature sensors and M-Bus concentration units, achieving tamper-proof tenant billing with zero moving parts.',
    outcome:
      'Deployment of 4,500 static ultrasonic meters with MID Class 2 metrological compliance, enabling automated sub-billing with zero mechanical drift.',
    deliverables: [
      '4,500 static ultrasonic BTU energy meters (DN15 to DN100)',
      'High-precision paired PT500 platinum resistance temperature sensors',
      'Central M-Bus & Wireless LoRaWAN data concentrators',
      'Full factory calibration certificates & EN 1434 conformity verification',
    ],
    specifications: [
      { label: 'Measurement Accuracy', value: 'EN 1434 / MID Class 2' },
      { label: 'Installed Volume', value: '4,500 Dedicated Sub-Meters' },
      { label: 'Data Protocol', value: 'M-Bus / Modbus RTU / LoRaWAN' },
      { label: 'Operational Life', value: '10+ Years Internal Lithium Cell' },
    ],
    approvals: [
      'MID Class 2 European Metrological Directive Certified',
      'Dubai Electricity & Water Authority (DEWA) Approved',
      'District Cooling Operator Utility Handover Clearances',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    ],
    relatedService: {
      title: 'Metering & Energy Accessories',
      slug: '/trading/metering-accessories',
      description: 'Explore our revenue-grade ultrasonic thermal energy meters and automated meter reading systems.',
    },
    rfpScopeTag: 'District Cooling Metering & Telemetry Hardware',
  },
  {
    id: 'proj-8',
    slug: 'commercial-fleet-ev-chargers',
    title: 'Commercial Fleet DC Fast Charging Infrastructure',
    category: 'ev',
    categoryLabel: 'EV Fast Charging',
    division: 'Trading',
    divisionSlug: '/trading',
    industry: 'Logistics & Commercial Fleets',
    location: 'Dubai Logistics City, Dubai',
    clientTier: 'Corporate Fleet Depot',
    completionDate: 'Q1 2026',
    featured: false,
    scopeOverview:
      'Wholesale hardware supply of 60 kW and 120 kW dual-gun DC rapid chargers with dynamic load management for commercial logistics fleet electrification.',
    challenge:
      'Meeting high-power simultaneous vehicle charging demands without exceeding depot peak electrical substation thresholds.',
    solution:
      'LTSGROUP provided OCPP 1.6J compliant dual-gun DC chargers integrated with smart BMS load-balancing and RFID driver access control.',
    outcome:
      'Turnkey integration of 60kW–120kW DC fast chargers with dynamic substation load management, enabling simultaneous rapid charging without grid overloads.',
    deliverables: [
      'Dual-gun DC ultra-rapid commercial charging terminals (60kW – 120kW)',
      'Dynamic power balancing matrix integrated with facility substation',
      'OCPP 1.6J JSON telemetry backend integration',
      'Factory warranty certification & on-site commissioning supervision',
    ],
    specifications: [
      { label: 'Charging Output', value: '60 kW to 120 kW DC Fast Charge' },
      { label: 'Connector Standard', value: 'Dual CCS2 Combined Charging System' },
      { label: 'Network Protocol', value: 'OCPP 1.6J & OCPP 2.0.1 Ready' },
      { label: 'Protection Rating', value: 'IP55 Outdoor Weatherproof Enclosure' },
    ],
    approvals: [
      'DEWA EV Green Charger Infrastructure Standards',
      'IEC 61851-1 / IEC 61851-23 International Safety Certified',
      'Dubai Civil Defense Electrical Station Compliance',
    ],
    image: 'https://images.unsplash.com/photo-1558441719-8b489c63f771?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558441719-8b489c63f771?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80',
      '/assets/images/solar-epc.jpg',
    ],
    relatedService: {
      title: 'EV Fast Charging Infrastructure',
      slug: '/trading/ev-charger',
      description: 'Discover commercial AC and DC charging equipment and smart energy distribution hardware.',
    },
    rfpScopeTag: 'Commercial & Fleet EV Fast Charging Hardware',
  },
];

export function getProjectBySlug(slug: string): ProjectDetailData | undefined {
  const cleanSlug = slug
    .split('?')[0]
    .split('#')[0]
    .replace(/^\/projects\/?/, '')
    .replace(/\/$/, '');
  return PROJECTS_DATA.find((p) => p.slug === cleanSlug || p.id === cleanSlug);
}
