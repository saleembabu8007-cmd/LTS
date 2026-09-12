export interface NewsArticleData {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  keyPoints: string[];
  background: string;
  technicalAnalysis: string[];
  takeaways: string[];
  governingStandards: string[];
  relatedService: {
    title: string;
    slug: string;
    description: string;
  };
}

export const NEWS_DATA: NewsArticleData[] = [
  {
    id: 'news-1',
    slug: 'dewa-shams-dubai-solar-interconnection',
    title: 'DEWA Shams Dubai: Technical Standards for Commercial Rooftop Solar Interconnection',
    category: 'Solar Engineering',
    date: 'September 2026',
    readTime: '4 min read',
    image: '/assets/images/solar-epc.jpg',
    summary:
      'Utility net-metering submittals, bifacial monocrystalline panel yield expectations in GCC ambient temperatures, and non-penetrative roof mounting compliance.',
    keyPoints: [
      'Net-metering tariff synchronization under DEWA Shams Dubai',
      'Non-penetrative warehouse standing-seam mounting integrity',
      'Smart string inverter harmonics & SCADA interface requirements',
    ],
    background:
      'As commercial and logistics building owners across Dubai accelerate their decarbonization strategies, the DEWA Shams Dubai initiative provides the regulatory and technical foundation for distributed rooftop solar PV interconnection.',
    technicalAnalysis: [
      'Interconnection to DEWA’s low-voltage and medium-voltage distribution network mandates rigorous compliance with the Distributed Renewable Resources Generation (DRRG) standard. Key technical checkpoints include loss-of-mains (anti-islanding) protection relays calibrated to trip within 0.2 seconds during grid anomalies.',
      'High ambient temperatures in the Arabian Gulf require conservative thermal derating calculations. Bifacial monocrystalline modules with temperature coefficients below -0.35%/°C deliver superior life-cycle performance when mounted with adequate rear clearance over reflective roof surfaces.',
      'For industrial warehouses with standing-seam metal roofing, non-penetrative mechanical seam clamps are mandatory. These systems distribute aerodynamic wind loads across the structural purlins without puncturing waterproofing membranes, preserving building warranties.',
    ],
    takeaways: [
      'All commercial solar installations must be designed and executed by a DEWA-certified solar contractor.',
      'Bifacial monocrystalline panels achieve up to 12% albedo boost on reflective or coated warehouse roofs.',
      'String inverters with integrated DC disconnects and arc-fault protection simplify maintenance access.',
      'Net-metered power reduces commercial electrical tariffs directly against daytime utility consumption.',
    ],
    governingStandards: [
      'DEWA Shams Dubai Standards for Distributed Generation',
      'IEC 61215 / IEC 61730 Photovoltaic Module Standards',
      'Dubai Municipality Building Code (Structural & Wind Load)',
    ],
    relatedService: {
      title: 'Solar Photovoltaic EPC',
      slug: '/engineering-construction/solar',
      description: 'Review LTSGROUP’s turnkey engineering, procurement, and DEWA net-metering synchronization services.',
    },
  },
  {
    id: 'news-2',
    slug: 'chiller-plant-hydronic-balancing-retrofits',
    title: 'Hydronic Balancing & VFD Integration in Live Commercial Chiller Plant Retrofits',
    category: 'Facilities & Retrofit',
    date: 'August 2026',
    readTime: '5 min read',
    image: '/assets/images/project-chiller.jpg',
    summary:
      'Practical considerations for phased equipment replacement in occupied high-rises, analyzing differential pressure control valves and variable-speed pumping.',
    keyPoints: [
      'Phased zero-downtime changeouts in occupied buildings',
      'Dynamic balancing under partial loads using pressure-independent valves',
      'Harmonic distortion control on high-capacity variable frequency drives',
    ],
    background:
      'In existing commercial towers across the UAE, chiller plants often consume over 65% of total building electrical energy. Retrofitting aged reciprocating or constant-speed screw chillers with modern variable-speed centrifugal units represents the single largest energy conservation opportunity.',
    technicalAnalysis: [
      'Transitioning from constant-volume primary pumping to a variable primary flow (VPF) configuration requires precise hydronic control. Without dynamic pressure-independent control valves (PICVs), cooling towers and coils suffer from the "low delta-T syndrome", forcing chillers to operate at degraded partial-load efficiencies.',
      'Executing equipment changeouts in live, tenanted buildings necessitates temporary bypass piping headers and modular chillers. By scheduling tie-ins during low-demand night or weekend windows, air-conditioning supply is maintained continuously.',
      'High-tonnage variable frequency drives (VFDs) introduce electrical harmonic distortion if unmitigated. Installing active harmonic filters or 18-pulse drive topologies prevents overheating of upstream distribution transformers and maintains total harmonic distortion (THDi) within DEWA’s strict 5% limit.',
    ],
    takeaways: [
      'Dynamic pressure-independent control valves eliminate overflow and restore design chilled water delta-T.',
      'Phased changeover methodology allows full central cooling overhauls without closing commercial offices.',
      'Active harmonic filtering safeguards electrical distribution networks from VFD-induced transients.',
      'Energy audits typically demonstrate a 25% to 35% reduction in plant kilowatt consumption per ton of refrigeration.',
    ],
    governingStandards: [
      'ASHRAE 90.1 Energy Standard for Buildings',
      'AHRI 550/590 Water Chilling Packages Standards',
      'DEWA Regulations for Electrical Installations (Harmonics)',
    ],
    relatedService: {
      title: 'Plant Retrofits & Refurbishment',
      slug: '/facilities-management/retrofits-refurbishment',
      description: 'Explore our zero-downtime methodology for live central chiller replacements and energy optimization.',
    },
  },
  {
    id: 'news-3',
    slug: 'form-4-switchgear-arc-containment',
    title: 'Form-4 Type-Tested Low-Voltage Switchgear (IEC 61439): Arc-Fault Containment',
    category: 'Electrical Distribution',
    date: 'July 2026',
    readTime: '4 min read',
    image: '/assets/images/mep-construction.jpg',
    summary:
      'Technical segregation methods between busbars, functional units, and external cable terminations, ensuring continuity of service in commercial substations.',
    keyPoints: [
      'Form 4b internal segregation standards under IEC 61439-2',
      'Temperature rise verification under continuous 50°C ambient loads',
      'Modbus RS485 / BACnet BMS integration for predictive thermography',
    ],
    background:
      'Low-voltage distribution switchboards and Motor Control Centers (MCC) represent the electrical spine of any facility. The transition from legacy IEC 60439 to IEC 61439 introduced strict type-testing mandates that eliminate self-certification by switchboard assemblers.',
    technicalAnalysis: [
      'IEC 61439-2 defines forms of internal separation from Form 1 through Form 4b. Form 4b provides the highest practical operator safety: busbars are partitioned from functional units (circuit breakers, motor starters), and functional units are partitioned from individual outgoing cable termination compartments.',
      'In Gulf ambient conditions, where outdoor temperatures routinely exceed 45°C, switchboard temperature rise tests must verify that internal copper busbars and terminal lugs do not exceed the thermal limits of insulation materials under full rated load.',
      'Modern Form-4 assemblies integrate intelligent electronic motor management relays and continuous infrared temperature sensors on main busbar joints, streaming telemetry via Modbus to the central BMS for real-time thermal trend monitoring.',
    ],
    takeaways: [
      'Form 4b internal barriers prevent an arc or tool drop in a cable compartment from causing a busbar flashover.',
      'Independent laboratory type-test certificates must match the exact enclosure design and busbar arrangement.',
      'Continuous thermal monitoring detects loose terminal connections long before catastrophic electrical insulation failure occurs.',
      'Standardized withdrawable starter modules allow rapid replacement without de-energizing the main board.',
    ],
    governingStandards: [
      'IEC 61439-1 / IEC 61439-2 Low-Voltage Switchgear Assemblies',
      'DEWA Low Voltage Switchgear Regulations',
      'IEC 61641 Guide for Testing Under Arcing Fault Conditions',
    ],
    relatedService: {
      title: 'Control Switchgear Assemblies',
      slug: '/engineering-construction/control-switchgear',
      description: 'Learn about our Form-4 type-tested low-voltage switchboard manufacturing and testing capabilities.',
    },
  },
  {
    id: 'news-4',
    slug: 'district-cooling-energy-transfer-stations',
    title: 'District Cooling ETS Integration: Hydronic Decoupling & Secondary Flow Optimization',
    category: 'Mechanical Engineering',
    date: 'June 2026',
    readTime: '5 min read',
    image: '/assets/images/project-highrise.jpg',
    summary:
      'Plate heat exchanger selection, delta-T penalty avoidance, and secondary variable-speed pumping architecture in UAE commercial towers.',
    keyPoints: [
      'High-efficiency plate heat exchanger thermal performance',
      'Avoiding utility low delta-T penalty surcharges',
      'Automated secondary pumping integration with tenant BTU sub-metering',
    ],
    background:
      'District cooling networks across Dubai deliver high-density chilled water to commercial towers and master developments. The interface between the district utility and the building—the Energy Transfer Station (ETS)—requires rigorous hydronic decoupling and secondary circuit control.',
    technicalAnalysis: [
      'Plate heat exchangers (PHE) in ETS rooms must achieve close approach temperatures (typically 1.0°C to 1.5°C) to maximize secondary loop cooling capacity while returning primary water at or above the utility contract temperature (typically 14°C to 15°C).',
      'Failure to maintain design temperature differentials results in substantial contractual surcharges from district cooling providers. Installing modulating control valves paired with secondary VFD pumps maintains flow velocity in direct proportion to building thermal demand.',
      'Centralized M-Bus or Modbus telemetry links secondary BTU sub-meters back to the building management system, providing tenant-level billing transparency and continuous flow anomaly detection.',
    ],
    takeaways: [
      'Hydronic decoupling protects building piping from district network pressure fluctuations.',
      'Close-approach plate heat exchangers maximize thermodynamic efficiency under peak summer loads.',
      'Automated secondary variable flow eliminates delta-T penalty surcharges from utility operators.',
      'Integrated ultrasonic BTU metering ensures accurate tenant energy allocation to Dubai standards.',
    ],
    governingStandards: [
      'Empower & Tabreed District Cooling Design Guidelines',
      'ASHRAE 90.1 Energy Standard for Buildings',
      'DEWA Water and Electricity Regulations',
    ],
    relatedService: {
      title: 'Turnkey MEP Contracting',
      slug: '/engineering-construction/mep',
      description: 'Review our complete electromechanical contracting capabilities for high-rise commercial towers.',
    },
  },
  {
    id: 'news-5',
    slug: 'ultrasonic-btu-metering-metrology',
    title: 'Ultrasonic BTU Metering Metrology: Class-2 Accuracy Standards in Central Cooling Sub-Metering',
    category: 'Metering & Energy Management',
    date: 'May 2026',
    readTime: '4 min read',
    image: '/assets/images/project-commercial.jpg',
    summary:
      'Analyzing EN 1434 transit-time ultrasonic flow sensors, paired platinum RTD temperature sensors, and automated M-Bus sub-metering compliance in Dubai commercial towers.',
    keyPoints: [
      'EN 1434 / ISO 4064 metrological certification for billing integrity',
      'Transit-time acoustic signal pathing immune to hydronic particulate fouling',
      'M-Bus and Modbus RTU integration with central building energy telemetry',
    ],
    background:
      'In high-density commercial towers connected to central chilled water systems, individual tenant cooling consumption must be measured with metrological precision. Traditional mechanical impeller meters suffer from bearing wear and fouling from magnetite and hydronic debris.',
    technicalAnalysis: [
      'Ultrasonic heat meters measure flow velocity using paired piezoelectric transducers transmitting acoustic pulses upstream and downstream. Because there are no moving mechanical components within the flow tube, pressure drop is minimal and calibration remains stable over multi-year operational cycles.',
      'Paired PT100/PT500 temperature sensors are matched in factory calibration baths to measure the differential temperature across heat exchangers with tolerances finer than 0.05°C, ensuring accurate enthalpy calculation even at low delta-T conditions.',
      'Automated meter reading (AMR) topologies use wired M-Bus daisy-chaining or Modbus RS485 backbones to transmit volume, energy (kWh/Ton-hr), supply/return temperatures, and diagnostic tamper flags directly into facility billing platforms.',
    ],
    takeaways: [
      'Solid-state ultrasonic meters eliminate mechanical wear and ensure multi-year Class-2 metrological precision.',
      'Close-tolerance matched temperature sensors preserve enthalpy accuracy during partial-load operations.',
      'Wired M-Bus architectures provide centralized real-time telemetry and automated leakage alerts.',
      'Complies with Dubai Supreme Council of Energy directives for chilled water billing accountability.',
    ],
    governingStandards: [
      'EN 1434 Heat Meters Standard (Classes 1, 2 & 3)',
      'ISO 4064 Measurement of Water Flow in Closed Conduits',
      'OIML R 75 Heat Meters Metrological Regulations',
    ],
    relatedService: {
      title: 'Metering & Accessories',
      slug: '/trading',
      description: 'Explore LTS Trading’s supply of EN 1434 certified ultrasonic heat meters, water meters, and M-Bus gateways.',
    },
  },
  {
    id: 'news-6',
    slug: 'commercial-pool-water-quality-microbial-control',
    title: 'Commercial Aquatic Hygiene: Automated Chemical Dosing & Microbial Risk Control',
    category: 'Soft Services & Aquatic Systems',
    date: 'April 2026',
    readTime: '5 min read',
    image: '/assets/images/project-pool.jpg',
    summary:
      'Continuous amperometric chlorine monitoring, automated pH correction, turnover hydraulic calculations, and Dubai Municipality public health regulatory protocols.',
    keyPoints: [
      'Dubai Municipality Public Health & Safety aquatic water parameters',
      'Amperometric free chlorine vs. ORP potential control under high UV exposure',
      'Variable speed filtration turnover rates balancing biocidal efficacy and energy consumption',
    ],
    background:
      'In high-occupancy residential developments and hospitality resorts across the UAE, swimming pools and water features require rigorous biological control to prevent waterborne pathogens including Pseudomonas aeruginosa and Legionella species under extreme desert ambient temperatures.',
    technicalAnalysis: [
      'Dubai Municipality Health Guidelines mandate maintaining free available chlorine between 1.0 and 3.0 ppm and pH between 7.2 and 7.6. High solar radiation and elevated water temperatures accelerate chlorine degradation, requiring continuous microprocessor-controlled chemical dosing.',
      'Modern commercial pool plants utilize amperometric membrane-covered sensors that measure free residual chlorine in real time, avoiding the oxidation potential distortion common with standard ORP probes in water treated with cyanuric acid stabilizers.',
      'Hydraulic turnover rates must be calculated conservatively. For commercial hotel pools, complete water volume circulation every 4 hours via automated multi-port sand or AFM glass-media filtration guarantees uniform biocide distribution and turbidity below 0.5 NTU.',
    ],
    takeaways: [
      'Continuous microprocessor dosing prevents chemical spikes and preserves skin and eye comfort for bathers.',
      'Amperometric sensing provides direct ppm chlorine quantification unaffected by stabilizer accumulation.',
      'AFM glass filtration media prevents biofouling in filter beds, reducing backwash water volume by up to 50%.',
      'Daily microbiological logging ensures continuous compliance with Dubai Municipality public health audits.',
    ],
    governingStandards: [
      'Dubai Municipality Public Health & Safety Department Aquatic Guidelines',
      'DIN 19643 Treatment of Swimming and Bathing Pool Water',
      'WHO Guidelines for Safe Recreational Water Environments',
    ],
    relatedService: {
      title: 'Swimming Pool Maintenance',
      slug: '/facilities-management',
      description: 'Review LTS Facilities Management’s specialized soft services, chemical balancing, and aquatic plant maintenance.',
    },
  },
  {
    id: 'news-7',
    slug: 'vfd-pump-motor-efficiency-harmonics',
    title: 'VFD & Motor Integration: Mitigation of dV/dt Transients & IEEE 519 Harmonic Control',
    category: 'Controls & VFD Solutions',
    date: 'March 2026',
    readTime: '4 min read',
    image: '/assets/images/service-electrical.jpg',
    summary:
      'Technical guidelines for long cable runs between variable frequency drives and induction motors, addressing voltage reflection, bearing currents, and harmonic compliance.',
    keyPoints: [
      'dV/dt line filters and sinusoidal filters on pump motor circuits over 50 meters',
      'Insulated motor bearings and shaft grounding rings preventing EDM pitting',
      'Total harmonic distortion (THDi) reduction to DEWA 5% grid boundary limits',
    ],
    background:
      'Pulse-width modulated (PWM) variable frequency drives are ubiquitous in HVAC air handling units and booster pumping systems. However, steep voltage rise times (dV/dt) generated by insulated gate bipolar transistors (IGBTs) create electrical stress on motor winding insulation.',
    technicalAnalysis: [
      'When inverter-to-motor cable lengths exceed 30 to 50 meters, transmission line impedance mismatches cause voltage wave reflection. Reflected waves can produce peak terminal voltages up to 2.5 times the DC bus voltage, puncturing standard motor stator insulation and causing premature phase-to-ground faults.',
      'Capacitive coupling between motor windings and the rotor induces high-frequency shaft voltages. When these voltages exceed the dielectric breakdown strength of the lubricating grease film, electrical discharge machining (EDM) occurs, fluting bearings and causing premature mechanical failure.',
      'Installing dV/dt output chokes or sine-wave filters at the VFD output clamps peak voltage rise to under 500V/μs. Combining these filters with insulated non-drive-end bearings and conductive carbon microfiber shaft grounding rings ensures multi-year reliability.',
    ],
    takeaways: [
      'Cables over 50 meters must be specified with dV/dt reactors or sinusoidal filters to protect motor insulation.',
      'Shaft grounding rings divert common-mode circulating currents safely away from motor ball bearings.',
      '18-pulse rectifiers or active front-end drives maintain electrical harmonics well within DEWA’s strict 5% threshold.',
      'Pairing premium IE3/IE4 motors with appropriately tuned VFDs yields peak operational efficiency across the duty curve.',
    ],
    governingStandards: [
      'IEEE 519 Recommended Practice for Harmonic Control in Electric Power Systems',
      'IEC 60034-17 / IEC 60034-25 AC Motors Supplied from Converters',
      'NEMA MG1 Part 31 Inverter-Duty Motors',
    ],
    relatedService: {
      title: 'Controls & VFDs Supply',
      slug: '/trading',
      description: 'Learn about LTS Trading’s specialized supply of variable frequency drives, harmonic filters, and building automation sensors.',
    },
  },
];

export function getArticleBySlug(slug: string): NewsArticleData | undefined {
  const cleanSlug = slug
    .split('?')[0]
    .split('#')[0]
    .replace(/^\/news\/?/, '')
    .replace(/\/$/, '');
  return NEWS_DATA.find((a) => a.slug === cleanSlug || a.id === cleanSlug);
}
