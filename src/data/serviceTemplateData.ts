import { ServicePageData } from '../types/serviceTemplate';

export const SERVICE_PAGES_REGISTRY: Record<string, ServicePageData> = {
  // =========================================================================
  // 1. ENGINEERING & CONSTRUCTION
  // =========================================================================

  // MEP Core
  'mep': {
    id: 'mep',
    slug: '/engineering-construction/mep',
    pillar: 'Engineering & Construction',
    pillarSlug: '/engineering-construction',
    title: 'Mechanical, Electrical & Plumbing (MEP)',
    tagline: 'Turnkey electromechanical design, coordinated drafting, and site installation for building infrastructure.',
    archetype: 'engineering-infrastructure',
    hero: {
      eyebrow: 'Engineering & Construction',
      heading: 'Turnkey MEP Contracting',
      summary: 'Complete mechanical, electrical, and plumbing engineering delivered from initial technical design review through testing, balancing, and authority handover.',
      primaryCta: { label: 'Submit Tender / RFP', slug: '/contact?tab=rfp' },
      secondaryCta: { label: 'View Projects', slug: '/projects' },
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['DEWA Approved', 'Civil Defense Certified', 'ISO 9001:2015'],
    },
    introduction: {
      leadText: 'LTSGROUP provides integrated mechanical, electrical, and plumbing contracting across commercial towers, residential developments, and public infrastructure in the UAE.',
      bodyParagraphs: [
        'Our engineering teams manage design coordination, technical submittals, equipment procurement, on-site installation, and authority approvals under single-source contractual accountability.',
        'We work directly with developers, consultants, and main contractors to ensure timely execution in compliance with local utility regulations and international engineering standards.',
      ],
      scopeInclusion: [
        'Central chilled water piping, air handling units, and thermal distribution',
        'Medium and low-voltage electrical distribution, busways, and switchboards',
        'Domestic water boosting sets, drainage networks, and water hygiene systems',
        'Life-safety smoke evacuation, stairwell pressurization, and fire systems',
        'Statutory testing, balancing, commissioning, and authority documentation handover',
      ],
      standards: ['DEWA Regulations', 'UAE Civil Defense Fire Code', 'ASHRAE 90.1', 'IEC 60364'],
    },
    capabilities: {
      sectionTitle: 'MEP Engineering Disciplines',
      items: [
        {
          title: 'Mechanical & HVAC Systems',
          description: 'Chilled water integration, primary/secondary pumping, air handling units (AHU), and VAV distribution.',
          specs: [
            { key: 'Cooling Sources', value: 'District Cooling & Central Chillers' },
            { key: 'Air Distribution', value: 'Galvanized Ductwork to SMACNA Standards' },
          ],
        },
        {
          title: 'Electrical Power Distribution',
          description: 'Substations, vertical electrical busways, sub-main distribution boards (SMDB), and backup generator synchronization.',
          specs: [
            { key: 'Voltage Levels', value: '11kV Intake & 415V Low Voltage' },
            { key: 'Enclosures', value: 'IEC 61439 Type-Tested Boards' },
          ],
        },
        {
          title: 'Public Health & Drainage',
          description: 'Variable-speed water booster sets, stormwater retention, foul drainage lift stations, and water treatment.',
          specs: [
            { key: 'Piping Materials', value: 'PPR, HDPE, Copper, and Cast Iron' },
            { key: 'Hygiene Compliance', value: 'Dubai Municipality Standards' },
          ],
        },
      ],
    },
    cta: {
      headline: 'Discuss Your MEP Project Requirements',
      subheadline: 'Our estimation team provides rapid reviews of bills of quantities, tender documents, and project briefs.',
      primaryButtonText: 'Submit Tender Package',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // MEP: Commercial & Residential
  'mep-commercial-residential': {
    id: 'mep-commercial-residential',
    slug: '/engineering-construction/mep/commercial-residential',
    pillar: 'Engineering & Construction',
    pillarSlug: '/engineering-construction',
    parentCategory: 'MEP Services',
    parentCategorySlug: '/engineering-construction/mep',
    title: 'Commercial & Residential MEP',
    tagline: 'High-density electromechanical installations for commercial towers, residential developments, and hospitality assets.',
    archetype: 'engineering-infrastructure',
    hero: {
      eyebrow: 'MEP / Commercial & Residential',
      heading: 'Commercial & Residential MEP Systems',
      summary: 'Turnkey building engineering for high-rise commercial towers, luxury residential master communities, and mixed-use developments across Dubai and the UAE.',
      primaryCta: { label: 'Submit Tender / RFP', slug: '/contact?tab=rfp' },
      secondaryCta: { label: 'Explore Portfolio', slug: '/projects' },
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['ASHRAE 90.1', 'DEWA Regulations', 'Civil Defense Approved'],
    },
    introduction: {
      leadText: 'High-density developments require disciplined electromechanical coordination to maximize rentable space, ensure acoustic comfort, and lower operating energy costs.',
      bodyParagraphs: [
        'LTSGROUP installs primary chilled water risers, vertical busways, and pressurized domestic water networks tailored to the distinct demands of multi-tenant commercial and residential assets.',
      ],
      scopeInclusion: [
        'District cooling heat exchanger stations and primary pumping networks',
        'Sound-attenuated fan coil units and acoustic duct liners for quiet tenant spaces',
        'Sub-metering networks for individual tenant energy and BTU billing',
        'Life-safety stairwell pressurization and smoke extract automation',
      ],
      standards: ['DEWA Building Regulations', 'UAE Civil Defense Life Safety Code'],
    },
    capabilities: {
      items: [
        {
          title: 'High-Rise Riser Engineering',
          description: 'High-capacity vertical electrical busducts and primary chilled water risers engineered for thermal expansion and pressure management.',
        },
        {
          title: 'Tenant Sub-Metering & Controls',
          description: 'Modbus and M-Bus sub-meters integrated with centralized building management systems for tenant utility tracking.',
        },
      ],
    },
    cta: {
      headline: 'Submit Commercial or Residential Tender',
      subheadline: 'Send your project drawings or BOQ for prompt commercial engineering review.',
      primaryButtonText: 'Submit Inquiry',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // MEP: Infrastructure
  'mep-infrastructure': {
    id: 'mep-infrastructure',
    slug: '/engineering-construction/mep/infrastructure',
    pillar: 'Engineering & Construction',
    pillarSlug: '/engineering-construction',
    parentCategory: 'MEP Services',
    parentCategorySlug: '/engineering-construction/mep',
    title: 'Infrastructure & Public Realm Utilities',
    tagline: 'Heavy civil-electromechanical coordination, pumping stations, and external electrical distribution.',
    archetype: 'engineering-infrastructure',
    hero: {
      eyebrow: 'MEP / Infrastructure',
      heading: 'Electromechanical Infrastructure Utilities',
      summary: 'Engineering contracting for municipal stormwater lift stations, wastewater pumping plants, external substation connections, and public realm lighting.',
      primaryCta: { label: 'Submit Tender / RFP', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Municipal Infrastructure', 'DEWA Code Compliant'],
    },
    introduction: {
      leadText: 'Public utility and civil infrastructure projects require rigorous electromechanical installations built to withstand severe environmental operating conditions.',
      bodyParagraphs: [
        'LTSGROUP installs heavy stormwater and wastewater lift pumping stations, regional cable containment networks, and outdoor electrical power distribution for developers and municipalities.',
      ],
      scopeInclusion: [
        'Heavy submersible storm and wastewater lift pumping stations',
        'Medium-voltage external cabling, trenching, and cable duct banks',
        'Automated street and public realm LED illumination systems',
        'Statutory authority witness testing and formal municipal handover',
      ],
      standards: ['DEWA Infrastructure Standards', 'Dubai Municipality Drainage Codes'],
    },
    capabilities: {
      items: [
        {
          title: 'Municipal Lift Stations',
          description: 'Submersible dual and triple pump sets with automated level transducers, guide rails, and emergency overflow controls.',
        },
        {
          title: 'External Power Distribution',
          description: 'Heavy duty duct banks, pull pits, and feeder cabling compliant with DEWA transmission specifications.',
        },
      ],
    },
    cta: {
      headline: 'Contact Infrastructure Engineering Team',
      subheadline: 'Direct commercial engagement for municipal and master infrastructure works.',
      primaryButtonText: 'Submit Infrastructure RFP',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // Solar Core
  'solar': {
    id: 'solar',
    slug: '/engineering-construction/solar',
    pillar: 'Engineering & Construction',
    pillarSlug: '/engineering-construction',
    title: 'Solar Photovoltaic EPC',
    tagline: 'Turnkey commercial and industrial rooftop solar PV engineering compliant with DEWA Shams Dubai.',
    archetype: 'specialized-solar',
    hero: {
      eyebrow: 'Engineering & Construction / Solar',
      heading: 'Turnkey Solar Photovoltaic EPC',
      summary: 'Complete engineering, procurement, and construction (EPC) for commercial rooftop solar, industrial carports, and ground-mounted arrays certified under DEWA Shams Dubai.',
      primaryCta: { label: 'Request Solar Feasibility', slug: '/contact?tab=rfp' },
      secondaryCta: { label: 'View Solar Projects', slug: '/projects' },
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['DEWA Shams Dubai Certified', 'Tier-1 PV Modules'],
    },
    introduction: {
      leadText: 'Commercial solar photovoltaic systems provide predictable operating expense reduction and carbon emission mitigation for commercial and industrial facilities.',
      bodyParagraphs: [
        'As an approved DEWA Shams Dubai solar contractor, LTSGROUP delivers turnkey solar EPC solutions from structural roof load validation through tier-1 procurement, electrical grid synchronization, and net-metering approvals.',
      ],
      scopeInclusion: [
        'Structural roof loading audits, wind load calculations, and non-penetrative mounting',
        'Tier-1 bifacial monocrystalline PV modules and smart string inverters',
        'Complete AC/DC electrical balance of plant, cable trays, and switchgear integration',
        'DEWA Shams Dubai approvals, inspection witnessing, and net-metering synchronization',
      ],
      standards: ['DEWA Shams Dubai Standards', 'IEC 61215 / 61730'],
    },
    capabilities: {
      items: [
        {
          title: 'Industrial Rooftop Systems',
          description: 'Turnkey PV arrays installed across logistics warehouses, manufacturing plants, and distribution centers.',
        },
        {
          title: 'Solar Carport Infrastructure',
          description: 'Dual-purpose solar canopies providing vehicle shade and clean power generation integrated with EV chargers.',
        },
      ],
    },
    cta: {
      headline: 'Request a Solar Feasibility Assessment',
      subheadline: 'Provide your facility location and annual electricity consumption for an engineering yield assessment.',
      primaryButtonText: 'Request Assessment',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // Solar: Applications
  'solar-applications': {
    id: 'solar-applications',
    slug: '/engineering-construction/solar/applications',
    pillar: 'Engineering & Construction',
    pillarSlug: '/engineering-construction',
    parentCategory: 'Solar Solutions',
    parentCategorySlug: '/engineering-construction/solar',
    title: 'Solar PV Applications',
    tagline: 'Rooftop arrays, commercial carports, and industrial ground-mounted solar configurations.',
    archetype: 'specialized-solar',
    hero: {
      eyebrow: 'Solar Solutions / Applications',
      heading: 'Commercial Solar PV Configurations',
      summary: 'Engineered solar mounting and layout architectures adapted to commercial metal roofs, concrete decks, and parking structures.',
      primaryCta: { label: 'Submit Solar Inquiry', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Rooftop & Carport', 'DEWA Shams Approved'],
    },
    introduction: {
      leadText: 'Every facility requires a mounting and electrical design matched to its roof structural capacity, orientation, and utility interconnection point.',
      bodyParagraphs: [
        'We engineer non-penetrative clamp solutions for standing seam roofs, ballast systems for flat concrete decks, and structural steel carports designed for high wind resistance in the UAE.',
      ],
      scopeInclusion: [
        'Standing seam non-penetrative clamp systems preserving roof waterproofing',
        'Aerodynamic ballasted concrete roof structures',
        'Turnkey solar carports with integrated LED lighting and EV charging',
      ],
      standards: ['DEWA Shams Dubai Technical Guidelines'],
    },
    capabilities: {
      items: [
        { title: 'Metal Standing Seam Mounts', description: 'Certified non-penetrative clamps that preserve manufacturer roof warranties.' },
        { title: 'Commercial Carport Structures', description: 'Engineered structural steel framing optimized for shaded parking and maximum solar yield.' },
      ],
    },
    cta: {
      headline: 'Review Your Roof Solar Potential',
      subheadline: 'Our solar team will evaluate your roof layout and structural type.',
      primaryButtonText: 'Request Evaluation',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // Solar: Segments
  'solar-segments': {
    id: 'solar-segments',
    slug: '/engineering-construction/solar/segments',
    pillar: 'Engineering & Construction',
    pillarSlug: '/engineering-construction',
    parentCategory: 'Solar Solutions',
    parentCategorySlug: '/engineering-construction/solar',
    title: 'Solar Industry Segments',
    tagline: 'Commercial facilities, logistics warehouses, and industrial operations.',
    archetype: 'specialized-solar',
    hero: {
      eyebrow: 'Solar Solutions / Segments',
      heading: 'Solar for Commercial & Industrial Sectors',
      summary: 'Tailored solar power generation designed for large-scale energy consumers across Dubai logistics hubs and industrial free zones.',
      primaryCta: { label: 'Submit Solar Inquiry', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Industrial Solar', 'Logistics Warehouses'],
    },
    introduction: {
      leadText: 'Logistics hubs, cold storage facilities, and factories have extensive unshaded roof footprints that can offset significant utility grid power.',
      bodyParagraphs: [
        'LTSGROUP installs commercial PV arrays that synchronize with high-daytime cooling and machinery loads to deliver immediate utility cost reductions.',
      ],
      scopeInclusion: [
        'Logistics warehouse rooftop arrays with minimal structural loading impact',
        'Manufacturing plant installations coordinated around existing industrial operations',
        'Real-time energy generation telemetry integrated with facility BMS',
      ],
      standards: ['DEWA Net Metering Regulations'],
    },
    capabilities: {
      items: [
        { title: 'Logistics Warehouses', description: 'High-capacity arrays optimized for flat, continuous metal roof surfaces.' },
        { title: 'Manufacturing Facilities', description: 'Heavy industrial power synchronization offsetting peak-tariff machinery draw.' },
      ],
    },
    cta: {
      headline: 'Inquire for Your Facility Sector',
      subheadline: 'Speak with our commercial solar engineers.',
      primaryButtonText: 'Contact Solar Team',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // Solar: Approach
  'solar-approach': {
    id: 'solar-approach',
    slug: '/engineering-construction/solar/approach',
    pillar: 'Engineering & Construction',
    pillarSlug: '/engineering-construction',
    parentCategory: 'Solar Solutions',
    parentCategorySlug: '/engineering-construction/solar',
    title: 'Solar EPC Approach',
    tagline: 'Disciplined stage-gate delivery from yield simulation to DEWA net-metering commissioning.',
    archetype: 'specialized-solar',
    hero: {
      eyebrow: 'Solar Solutions / Approach',
      heading: 'Our Solar EPC Delivery Process',
      summary: 'A structured 4-stage engineering approach ensuring safety, structural integrity, and predictable electrical yield under DEWA Shams Dubai.',
      primaryCta: { label: 'Start Solar Project', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['DEWA Process Compliant', 'Turnkey Stage-Gate'],
    },
    introduction: {
      leadText: 'From initial solar irradiance modeling to final DEWA meter energization, each project follows a structured engineering workflow.',
      bodyParagraphs: [
        'We validate structural roof capacity, model shadow losses, submit full electrical single-line diagrams to DEWA, install tier-1 hardware, and complete witness testing.',
      ],
      scopeInclusion: [
        'Stage 1: Site survey, structural verification, and PVSyst energy yield modeling',
        'Stage 2: DEWA Shams Dubai connection application and engineering approvals',
        'Stage 3: Procurement of tier-1 bifacial modules, inverters, and on-site EPC installation',
        'Stage 4: Testing, commissioning, DEWA inspection witness, and net-meter energization',
      ],
      standards: ['DEWA Shams Dubai Process Framework'],
    },
    capabilities: {
      items: [
        { title: 'Energy Yield Modeling', description: 'High-precision solar irradiance simulations accounting for UAE ambient heat derating.' },
        { title: 'DEWA Authority Handover', description: 'End-to-end documentation management and witness testing for bi-directional metering.' },
      ],
    },
    cta: {
      headline: 'Engage Our Solar Engineering Team',
      subheadline: 'Begin your commercial solar project with certified Dubai engineers.',
      primaryButtonText: 'Start Consultation',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // Control Switchgear
  'control-switchgear': {
    id: 'control-switchgear',
    slug: '/engineering-construction/control-switchgear',
    pillar: 'Engineering & Construction',
    pillarSlug: '/engineering-construction',
    title: 'Control Switchgear & Assemblies',
    tagline: 'Custom fabrication, assembly, and testing of Form-4 type-tested low-voltage switchboards and motor control centers.',
    archetype: 'engineering-infrastructure',
    hero: {
      eyebrow: 'Engineering & Construction / Switchgear',
      heading: 'Low Voltage Switchgear & Motor Control',
      summary: 'Custom-assembled low-voltage switchboards, Form-4 motor control centers (MCC), and industrial automation panels manufactured to IEC 61439 standards.',
      primaryCta: { label: 'Request Switchgear Proposal', slug: '/contact?tab=rfp' },
      secondaryCta: { label: 'View Projects', slug: '/projects' },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['IEC 61439 Type-Tested', 'Form-4 Separation', 'DEWA Compliant'],
    },
    introduction: {
      leadText: 'Low-voltage distribution switchgear and motor control centers are the operational heart of commercial facilities and industrial plants.',
      bodyParagraphs: [
        'LTSGROUP manufactures custom-engineered switchgear assemblies in compliance with international electrical codes and local utility requirements.',
        'Every panel undergoes strict Factory Acceptance Testing (FAT), including dielectric insulation testing, busbar temperature rise verification, and functional control testing.',
      ],
      scopeInclusion: [
        'Main Low Voltage (MLV) switchboards up to 4000A with Form-4 internal separation',
        'Motor Control Centers (MCC) with integrated VFDs, soft starters, and bypass circuits',
        'Sub-Main Distribution Boards (SMDB) and final commercial power distribution boards',
        'Modbus and BACnet communications interface for BMS telemetry supervision',
      ],
      standards: ['IEC 61439-1 & 2', 'DEWA Regulations for Electrical Installations'],
    },
    capabilities: {
      items: [
        {
          title: 'Form-4 Motor Control Centers (MCC)',
          description: 'Internal metallic barriers separating busbars, functional units, and terminals to ensure operator safety during maintenance.',
        },
        {
          title: 'VFD Starter Panels',
          description: 'Precision variable-speed motor starter assemblies with thermal overload protection and harmonic mitigation.',
        },
      ],
    },
    cta: {
      headline: 'Submit Switchgear Specifications',
      subheadline: 'Provide your single-line diagram (SLD) or load schedule for an engineering quotation.',
      primaryButtonText: 'Submit Switchgear Specs',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // =========================================================================
  // 2. FACILITIES MANAGEMENT
  // =========================================================================

  // FM Core
  'facilities-management-core': {
    id: 'facilities-management-core',
    slug: '/facilities-management',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    title: 'Facilities Operations & Maintenance',
    tagline: 'SLA-backed hard facilities management, planned preventive care, aquatic maintenance, and plant retrofits.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Facilities Management / Overview',
      heading: 'Hard Facilities Operations & Maintenance',
      summary: 'Planned preventive maintenance, 24/7 emergency repair dispatch, specialist commercial swimming pool care, and turnkey plant retrofits across the UAE.',
      primaryCta: { label: 'Request FM Proposal', slug: '/contact?tab=rfp' },
      secondaryCta: { label: 'View Projects', slug: '/projects' },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['24/7 Dispatch SLA', 'ISO 9001:2015', 'CAFM Governed'],
    },
    introduction: {
      leadText: 'Electromechanical equipment represents a major capital investment. Disciplined preventive maintenance safeguards efficiency and extends asset operating lifespans.',
      bodyParagraphs: [
        'LTSGROUP manages commercial towers, residential communities, and industrial facilities with dedicated engineering residency and mobile emergency fleets across Dubai.',
      ],
      scopeInclusion: [
        'Central chiller maintenance, air handling units, and water balance verification',
        'Low and medium voltage switchgear maintenance, thermography, and generator load testing',
        'Domestic water pressure pumps, drainage lift stations, and water tank hygiene',
        'Commercial swimming pool filtration, chemical dosing, and water hygiene compliance',
      ],
      standards: ['ISO 9001:2015 Quality Management', 'Dubai Municipality Public Health Standards'],
    },
    capabilities: {
      items: [
        { title: 'Hard Services Care', description: 'HVAC, electrical distribution, plumbing hydronics, and civil building fabric.' },
        { title: 'Soft Services: Pool Care', description: 'Automated chemical treatment, sand filtration, and water hygiene.' },
        { title: 'Plant Retrofits', description: 'Turnkey live-building mechanical and electrical equipment upgrades.' },
      ],
    },
    cta: {
      headline: 'Request a Comprehensive FM Proposal',
      subheadline: 'Our operations team will survey your facility and prepare a structured PPM schedule.',
      primaryButtonText: 'Request Proposal',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: Hard Services
  'hard-services': {
    id: 'hard-services',
    slug: '/facilities-management/hard-services',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    title: 'Hard Facilities Management Services',
    tagline: 'Preventive and corrective maintenance for core electromechanical systems.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Facilities Management / Hard Services',
      heading: 'Hard Services Maintenance',
      summary: 'Engineering coverage for central chillers, electrical switchboards, booster pumps, and building fabric under strict service level agreements.',
      primaryCta: { label: 'Request Hard FM Proposal', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Hard Services', '24/7 On-Call Support'],
    },
    introduction: {
      leadText: 'Preventive maintenance is essential to prevent costly equipment downtime, maintain tenant comfort, and ensure statutory safety compliance.',
      bodyParagraphs: [
        'LTSGROUP provides both dedicated on-site engineering teams and mobile response units equipped to service complex HVAC, electrical, and plumbing plant.',
      ],
      scopeInclusion: [
        'Scheduled Planned Preventive Maintenance (PPM) based on SFG20 standards',
        '24/7 reactive callout for critical equipment failures with guaranteed arrival SLAs',
        'Infrared thermographic inspections of electrical panels to identify loose connections',
        'Monthly testing and logbook maintenance for emergency standby generators',
      ],
      standards: ['SFG20 Maintenance Standards', 'DEWA Compliance'],
    },
    capabilities: {
      items: [
        { title: 'HVAC Plant Care', description: 'Water-cooled chillers, cooling towers, package units, and split systems.' },
        { title: 'Electrical & Power', description: 'Main switchboards, capacitor banks, emergency generators, and UPS.' },
      ],
    },
    cta: {
      headline: 'Inquire About Hard Services Contracts',
      subheadline: 'Contact our facility operations division in Dubai.',
      primaryButtonText: 'Submit Inquiry',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: HVAC
  'fm-hvac': {
    id: 'fm-hvac',
    slug: '/facilities-management/hvac',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    parentCategory: 'Hard Services',
    parentCategorySlug: '/facilities-management/hard-services',
    title: 'HVAC Maintenance Services',
    tagline: 'Central chiller overhauls, hydronic balancing, air handling maintenance, and compressor care.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Hard Services / HVAC',
      heading: 'HVAC & Chiller Plant Maintenance',
      summary: 'Scheduled thermodynamic inspections, oil analysis, tube brushing, and air distribution balancing across commercial cooling plants.',
      primaryCta: { label: 'Request HVAC Service', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Chiller Specialists', 'Refrigerant Certified'],
    },
    introduction: {
      leadText: 'Air conditioning represents over 60% of building energy use in the GCC. Regular maintenance maintains coefficient of performance (COP) and lowers power draw.',
      bodyParagraphs: [
        'Our certified technicians service centrifugal, screw, and scroll chillers, package units, air handling units, and variable refrigerant flow (VRF) systems.',
      ],
      scopeInclusion: [
        'Chiller condenser tube descaling, cleaning, and eddy-current testing',
        'Compressor vibration analysis, oil spectrometry, and refrigerant leak detection',
        'Air handling unit belt tensioning, motor alignment, and filter replacement',
        'Automated chemical water treatment inspection for open cooling tower loops',
      ],
      standards: ['ASHRAE Guidelines', 'Refrigerant Recovery Regulations'],
    },
    capabilities: {
      items: [
        { title: 'Chiller Plant Overhauls', description: 'Major overhauls, bearing replacements, and thermodynamic re-commissioning.' },
        { title: 'Air Distribution Balancing', description: 'Airflow CFM verification and duct static pressure testing.' },
      ],
    },
    cta: {
      headline: 'Schedule HVAC Plant Service',
      subheadline: 'Prevent cooling failures before peak summer demand.',
      primaryButtonText: 'Schedule Inspection',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: Electrical
  'fm-electrical': {
    id: 'fm-electrical',
    slug: '/facilities-management/electrical',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    parentCategory: 'Hard Services',
    parentCategorySlug: '/facilities-management/hard-services',
    title: 'Electrical Infrastructure Maintenance',
    tagline: 'Substations, switchboards, capacitor banks, emergency generators, and power factor correction.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Hard Services / Electrical',
      heading: 'Electrical Infrastructure Care',
      summary: 'Preventive testing, infrared thermography, breaker servicing, and standby generator maintenance for commercial and industrial facilities.',
      primaryCta: { label: 'Request Electrical Survey', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Infrared Thermography', 'DEWA Code Compliant'],
    },
    introduction: {
      leadText: 'Electrical safety and power continuity require scheduled breaker testing, contact cleaning, and thermographic load verification.',
      bodyParagraphs: [
        'LTSGROUP provides electrical maintenance ensuring smooth operation of low-voltage switchboards, power factor correction banks, and emergency power backup.',
      ],
      scopeInclusion: [
        'Infrared thermal scanning of electrical distribution boards to identify hot spots',
        'Capacitor bank inspection to maintain power factor above 0.95 and avoid DEWA penalties',
        'Routine servicing, battery testing, and load-bank validation for emergency diesel generators',
        'Earth pit resistance testing and lightning protection certification',
      ],
      standards: ['DEWA Electrical Safety Regulations', 'NFPA 70B'],
    },
    capabilities: {
      items: [
        { title: 'Thermal Imaging Inspections', description: 'Non-destructive thermal analysis of live switchboards detecting loose connections.' },
        { title: 'Power Factor Optimization', description: 'Automatic power factor controller servicing and capacitor replacement.' },
      ],
    },
    cta: {
      headline: 'Book an Electrical Infrastructure Audit',
      subheadline: 'Protect your building from unannounced electrical outages.',
      primaryButtonText: 'Request Audit',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: Plumbing
  'fm-plumbing': {
    id: 'fm-plumbing',
    slug: '/facilities-management/plumbing',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    parentCategory: 'Hard Services',
    parentCategorySlug: '/facilities-management/hard-services',
    title: 'Plumbing & Drainage Maintenance',
    tagline: 'Booster pump sets, water hygiene, drainage networks, and stormwater retention.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Hard Services / Plumbing',
      heading: 'Plumbing & Water Hydraulics Maintenance',
      summary: 'Scheduled inspection of water booster pump sets, pressure vessels, sump drainage pumps, and municipal water hygiene compliance.',
      primaryCta: { label: 'Request Plumbing Service', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1584463699059-86c472f77891?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Water Hygiene Approved', 'Pump Specialists'],
    },
    introduction: {
      leadText: 'Reliable water pressure and hygienic domestic water storage are basic requirements for any commercial tower or residential complex.',
      bodyParagraphs: [
        'We service variable speed booster pumping sets, water storage tank disinfection, sump pump automation, and foul drainage lines.',
      ],
      scopeInclusion: [
        'Quarterly inspection of multi-stage variable speed domestic booster pump sets',
        'Water storage tank cleaning, disinfection, and Dubai Municipality laboratory testing',
        'Submersible stormwater and sewage lift station testing with float switch validation',
        'Backflow preventer and pressure reducing valve (PRV) testing and calibration',
      ],
      standards: ['Dubai Municipality Health Guidelines', 'Public Health Codes'],
    },
    capabilities: {
      items: [
        { title: 'Booster Pump Maintenance', description: 'Mechanical seal replacement, pressure tank bladder checks, and VFD staging.' },
        { title: 'Water Tank Disinfection', description: 'Municipality-approved tank cleaning and certified laboratory water analysis.' },
      ],
    },
    cta: {
      headline: 'Schedule Plumbing & Pumping Maintenance',
      subheadline: 'Contact our hydraulic engineering technicians.',
      primaryButtonText: 'Submit Request',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: Building Management Systems (BMS)
  'fm-bms': {
    id: 'fm-bms',
    slug: '/facilities-management/bms',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    parentCategory: 'Hard Services',
    parentCategorySlug: '/facilities-management/hard-services',
    title: 'Building Management Systems (BMS)',
    tagline: 'Direct digital control calibration, BACnet/Modbus network supervision, and HVAC optimization.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Hard Services / BMS',
      heading: 'Building Management Systems & Automation Maintenance',
      summary: 'Scheduled calibration of direct digital controllers (DDC), field sensors, valve actuators, and BACnet/Modbus IP network communications safeguarding central plant performance.',
      primaryCta: { label: 'Request BMS Survey', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['BACnet Certified', 'DDC Specialists', 'Energy Management'],
    },
    introduction: {
      leadText: 'Modern commercial buildings rely on intelligent automation to synchronize cooling loads, fresh air ventilation, and energy consumption.',
      bodyParagraphs: [
        'LTSGROUP provides comprehensive BMS maintenance, software optimization, sensor loop calibration, and field controller programming across legacy and modern automation architectures.',
        'Our controls engineers ensure seamless communication across BACnet, Modbus, LonWorks, and KNX protocols to eliminate energy waste and prevent plant downtime.',
      ],
      scopeInclusion: [
        'Routine calibration of chilled water temperature, pressure, and flow rate sensors',
        'Direct Digital Controller (DDC) firmware updates, database backups, and I/O point testing',
        'Actuator stroke calibration on motorized 2-way and 3-way chilled water control valves',
        'Energy management optimization, chiller plant staging algorithms, and occupancy scheduling',
      ],
      standards: ['ASHRAE Guideline 36', 'BACnet International Standard', 'ISO 50001 Energy Management'],
    },
    capabilities: {
      items: [
        { title: 'DDC Controller Maintenance', description: 'Preventive inspection of central automation panels, power supplies, and field bus communication loops.' },
        { title: 'Sensor Loop Calibration', description: 'High-precision recalibration of temperature, humidity, CO2, and differential pressure sensors.' },
      ],
    },
    cta: {
      headline: 'Optimize Facility Automation & BMS',
      subheadline: 'Speak with our building automation and controls engineers.',
      primaryButtonText: 'Schedule BMS Review',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: Civil Works
  'fm-civil-works': {
    id: 'fm-civil-works',
    slug: '/facilities-management/civil-works',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    parentCategory: 'Hard Services',
    parentCategorySlug: '/facilities-management/hard-services',
    title: 'Civil & Building Fabric Maintenance',
    tagline: 'Masonry, waterproofing, structural inspections, painting, and interior fabric repairs.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Hard Services / Civil Works',
      heading: 'Civil & Building Fabric Maintenance',
      summary: 'Preserving commercial building fabric, roof waterproofing, sealant joints, masonry repairs, and tenant common area finishes.',
      primaryCta: { label: 'Request Civil Maintenance', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Fabric Care', 'Waterproofing Verification'],
    },
    introduction: {
      leadText: 'Building fabric maintenance prevents moisture ingress, protects structural concrete, and maintains property market valuation.',
      bodyParagraphs: [
        'LTSGROUP provides routine and corrective civil fabric maintenance across commercial, residential, and industrial properties in the UAE.',
      ],
      scopeInclusion: [
        'Roof waterproofing membrane inspections and perimeter flashing repairs',
        'Expansion joint sealant replacement and exterior facade seal maintenance',
        'Interior common area painting, masonry, tiling, and drywall restoration',
        'Carpentry, ironmongery, fire door inspections, and hardware servicing',
      ],
      standards: ['Building Code Standards', 'Fire Door Safety Regulations'],
    },
    capabilities: {
      items: [
        { title: 'Waterproofing Integrity', description: 'Comprehensive roof and basement leak detection and membrane repair.' },
        { title: 'Common Area Restoration', description: 'High-traffic commercial floor polishing, tiling repairs, and wall finishing.' },
      ],
    },
    cta: {
      headline: 'Inquire for Civil Fabric Services',
      subheadline: 'Protect your building structure from environmental degradation.',
      primaryButtonText: 'Inquire Now',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: Soft Services / Swimming Pool
  'swimming-pool-maintenance': {
    id: 'swimming-pool-maintenance',
    slug: '/facilities-management/swimming-pool-maintenance',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    parentCategory: 'Soft Services',
    parentCategorySlug: '/facilities-management/soft-services',
    title: 'Swimming Pool & Aquatic Maintenance',
    tagline: 'Automated chemical treatment, filtration plant servicing, water hygiene, and municipal certification.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Soft Services / Aquatic Care',
      heading: 'Commercial Swimming Pool Maintenance',
      summary: 'Turnkey maintenance for commercial resort pools, residential community facilities, and water features meeting strict Dubai Municipality hygiene standards.',
      primaryCta: { label: 'Request Pool Service', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1584463699059-86c472f77891?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Dubai Municipality Approved', 'Water Hygiene Certified'],
    },
    introduction: {
      leadText: 'Commercial swimming pools require daily testing and filtration maintenance to guarantee bather safety and comply with municipal regulations.',
      bodyParagraphs: [
        'LTSGROUP manages swimming pool filtration plants, automated chemical dosing systems, balance tanks, and underwater lighting across Dubai resorts and residential communities.',
      ],
      scopeInclusion: [
        'Daily chemical water parameter testing (pH 7.2–7.6, Free Chlorine 1.5–3.0 ppm)',
        'Automated chemical dosing system calibration, probe cleaning, and chemical supply',
        'Commercial sand filter backwashing, media replacement, and pump room servicing',
        'Underwater electrical lighting inspection and pool basin vacuum cleaning',
      ],
      standards: ['Dubai Municipality Public Health Swimming Pool Standards'],
    },
    capabilities: {
      items: [
        { title: 'Filtration Plant Servicing', description: 'Commercial pump overhauls, multi-port valve repairs, and silica sand replacement.' },
        { title: 'Chemical Water Hygiene', description: 'Microprocessor chemical dosing automation ensuring 100% municipal compliance.' },
      ],
    },
    cta: {
      headline: 'Book Swimming Pool Maintenance',
      subheadline: 'Protect bather safety with certified aquatic technicians.',
      primaryButtonText: 'Request Pool Care',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: Retrofits & Refurbishment
  'retrofits-refurbishment': {
    id: 'retrofits-refurbishment',
    slug: '/facilities-management/retrofits-refurbishment',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    title: 'Plant Retrofits & Refurbishment',
    tagline: 'Turnkey equipment replacement, chiller modernization, and energy retrofits in live operating buildings.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Facilities Management / Retrofits',
      heading: 'Plant Retrofits & Energy Refurbishment',
      summary: 'Turnkey modernization of aging chillers, pumping stations, and electrical switchgear executed in operational facilities without tenant disruption.',
      primaryCta: { label: 'Request Retrofit Feasibility', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Zero Downtime', 'Energy Efficiency Upgrades'],
    },
    introduction: {
      leadText: 'Replacing obsolete mechanical equipment with high-efficiency variable-speed units substantially cuts energy bills and operational risks.',
      bodyParagraphs: [
        'LTSGROUP manages complete live-building retrofits from thermal load auditing and equipment sizing through phased installation and final authority re-certification.',
      ],
      scopeInclusion: [
        'Thermal load auditing and replacement equipment sizing calculations',
        'Phased mechanical installation maintaining 100% building uptime during changeover',
        'Variable frequency drive (VFD) retrofits on existing chiller and pump motors',
        'Testing, hydronic balancing, and re-commissioning of modern plant equipment',
      ],
      standards: ['ASHRAE 90.1 Energy Standards', 'DEWA Efficiency Guidelines'],
    },
    capabilities: {
      items: [
        { title: 'Chiller Modernization', description: 'Replacing reciprocating chillers with high-COP variable-speed centrifugal units.' },
        { title: 'Hydronic Pump Staging', description: 'Converting primary/secondary constant speed loops into energy-saving variable speed staging.' },
      ],
    },
    cta: {
      headline: 'Evaluate Your Plant Retrofit Opportunity',
      subheadline: 'Speak with our retrofit engineering managers.',
      primaryButtonText: 'Request Retrofit Survey',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: Retrofits - Design & Engineering
  'design-engineering': {
    id: 'design-engineering',
    slug: '/facilities-management/retrofits/design-engineering',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    parentCategory: 'Retrofits / Refurbishment',
    parentCategorySlug: '/facilities-management/retrofits',
    title: 'Retrofit Design & Engineering',
    tagline: 'Engineering assessment, cooling load calculations, and mechanical-electrical schematic integration for operational facility upgrades.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Retrofits & Refurbishment / Design & Engineering',
      heading: 'Retrofit Engineering & Systems Design',
      summary: 'Engineering diagnostics, thermodynamic load modeling, and mechanical-electrical integration drawings designed to modernize aging building systems with zero disruption to continuous operations.',
      primaryCta: { label: 'Request Engineering Assessment', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80',
    },
    introduction: {
      leadText: 'Upgrading central plants in live buildings requires disciplined front-end engineering to ensure new high-efficiency equipment matches existing distribution hydronics and power capacity.',
      bodyParagraphs: [
        'LTSGROUP provides turnkey engineering assessments, load verification, and plant coordination to ensure retrofit solutions integrate seamlessly with building infrastructure.',
      ],
      scopeInclusion: [
        'Cooling load calculations and chiller plant thermodynamic optimization modeling',
        'Electrical load flow and short-circuit validation for upgraded switchgear and VFDs',
        'Spatial coordination for equipment replacement in restricted plant room footprints',
        'Authority submittals and utility compliance coordination across Dubai and the UAE',
      ],
      standards: ['ASHRAE 90.1 Energy Standards', 'DEWA Regulations'],
    },
    capabilities: {
      sectionTitle: 'Core Engineering Scope',
      items: [
        {
          title: 'Thermal & Electrical Diagnostics',
          description: 'Comprehensive baseline measurements of operating plant efficiency, power draw, and hydronic pressure drops.',
        },
        {
          title: 'Equipment Replacement Sizing',
          description: 'Selecting modern variable-speed equipment matched to actual facility cooling and power profiles.',
        },
        {
          title: 'Authority Compliance Submittals',
          description: 'Preparing single-line diagrams, layout drawings, and safety filings for statutory approvals.',
        },
      ],
    },
    cta: {
      headline: 'Discuss Retrofit Design & Engineering',
      subheadline: 'Consult our senior engineering team to review existing plant drawings and replacement options.',
      primaryButtonText: 'Start Engineering Review',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: Retrofits - Project Management
  'project-management': {
    id: 'project-management',
    slug: '/facilities-management/retrofits/project-management',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    parentCategory: 'Retrofits / Refurbishment',
    parentCategorySlug: '/facilities-management/retrofits',
    title: 'Retrofit Project Management',
    tagline: 'Phased site management, heavy equipment rigging, and zero-downtime execution in operational buildings.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Retrofits & Refurbishment / Project Management',
      heading: 'Live-Building Retrofit Execution',
      summary: 'Methodical site management and phased equipment changeover protocols engineered to maintain 100% facility uptime during heavy mechanical and electrical replacements.',
      primaryCta: { label: 'Consult Project Managers', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
    },
    introduction: {
      leadText: 'Executing major equipment replacements within fully occupied commercial towers, hotels, or hospitals demands rigorous logistics, temporary bypass engineering, and strict safety management.',
      bodyParagraphs: [
        'LTSGROUP project managers coordinate crane lifting, off-hours deliveries, temporary utility loops, and phased cutovers to eliminate disruption to tenants and critical operations.',
      ],
      scopeInclusion: [
        'Detailed phased transition plans and temporary cooling/power bypass design',
        'Heavy equipment rigging, roof-level crane mobilization, and structural coordination',
        'Strict HSE compliance, hot-work permits, and acoustic mitigation in occupied assets',
        'Multi-contractor site coordination and milestone schedule tracking',
      ],
      standards: ['ISO 9001:2015 Quality Management', 'UAE Civil Defense Guidelines'],
    },
    capabilities: {
      sectionTitle: 'Project Management Deliverables',
      items: [
        {
          title: 'Zero-Downtime Transition Planning',
          description: 'Sequencing mechanical cuts and electrical transfers during scheduled low-load windows.',
        },
        {
          title: 'Rigging & Heavy Lifting Logistics',
          description: 'Obtaining municipal permits, road closure permissions, and coordinated crane lifts.',
        },
        {
          title: 'Live Building HSE & Acoustic Control',
          description: 'Strict dust containment, noise-restricted work hours, and fire life-safety protection.',
        },
      ],
    },
    cta: {
      headline: 'Plan Live-Building Equipment Replacement',
      subheadline: 'Engage our experienced site project managers for phased changeover execution.',
      primaryButtonText: 'Consult Project Team',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // FM: Retrofits - Testing & Commissioning
  'testing-commissioning': {
    id: 'testing-commissioning',
    slug: '/facilities-management/retrofits/testing-commissioning',
    pillar: 'Facilities Management',
    pillarSlug: '/facilities-management',
    parentCategory: 'Retrofits / Refurbishment',
    parentCategorySlug: '/facilities-management/retrofits',
    title: 'Testing & Commissioning',
    tagline: 'Independent testing, hydronic balancing, electrical energization validation, and authority handover.',
    archetype: 'fm-operations',
    hero: {
      eyebrow: 'Retrofits & Refurbishment / Testing & Commissioning',
      heading: 'Testing, Adjusting & Commissioning (TAB)',
      summary: 'Independent thermodynamic performance verification, chilled water hydronic balancing, electrical protection testing, and statutory handover certification.',
      primaryCta: { label: 'Request TAB Consultation', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80',
    },
    introduction: {
      leadText: 'Proper testing and balancing ensures that installed mechanical and electrical equipment operates at designed efficiency and delivers expected comfort and safety.',
      bodyParagraphs: [
        'Our commissioning engineers verify airflow volume, hydronic flow distribution, sensor calibration, and safety interlocks prior to formal client and authority signoff.',
      ],
      scopeInclusion: [
        'Hydronic balancing of chilled water distribution loops, risers, and control valves',
        'Air distribution testing, adjusting, and balancing (TAB) to NEBB/BSRIA standards',
        'Electrical insulation testing, relay calibration, and generator transfer verification',
        'BMS sensor loop calibration and automated sequence-of-operation verification',
      ],
      standards: ['ASHRAE Commissioning Guidelines', 'DEWA Regulations', 'CIBSE Code M'],
    },
    capabilities: {
      sectionTitle: 'Testing & Handover Scope',
      items: [
        {
          title: 'Hydronic & Air Balancing (TAB)',
          description: 'Precision flow verification using calibrated ultrasonic and differential pressure meters.',
        },
        {
          title: 'Electrical Protection Validation',
          description: 'Primary and secondary injection testing, phase sequence checks, and insulation resistance.',
        },
        {
          title: 'Statutory Handover Documentation',
          description: 'Comprehensive O&M manuals, as-built documentation, and authority signoff dossiers.',
        },
      ],
    },
    cta: {
      headline: 'Engage Commissioning & Balancing Engineers',
      subheadline: 'Ensure newly installed plant meets designed flow rates, temperatures, and power benchmarks.',
      primaryButtonText: 'Request Commissioning Support',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'tenders@ltsgroup.ae',
    },
  },

  // =========================================================================
  // 3. TRADING & COMPONENT SUPPLY
  // =========================================================================

  // Trading: HVAC Spare Parts
  'trading-hvac-spare-parts': {
    id: 'trading-hvac-spare-parts',
    slug: '/trading/hvac-spare-parts',
    pillar: 'Trading',
    pillarSlug: '/trading',
    title: 'HVAC Spare Parts & Components',
    tagline: 'Direct wholesale distribution of genuine OEM compressors, fan motors, expansion valves, and coils.',
    archetype: 'trading-supply',
    hero: {
      eyebrow: 'Trading & Component Supply / HVAC',
      heading: 'Genuine OEM HVAC Spare Parts',
      summary: 'Wholesale supply of original compressors, condenser coils, electronic expansion valves, and fan motors for commercial chillers and air handling systems.',
      primaryCta: { label: 'Request Parts Quote', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['OEM Certified Parts', 'Warehouse Stock in Dubai'],
    },
    introduction: {
      leadText: 'Using authentic OEM spare parts ensures designed thermodynamic performance and protects manufacturer equipment warranties.',
      bodyParagraphs: [
        'LTSGROUP supplies regional contractors, facility management teams, and building owners with genuine replacement components from our Dubai warehouse.',
      ],
      scopeInclusion: [
        'Semi-hermetic and scroll compressors for major commercial chiller brands',
        'Direct-drive and belt-driven evaporator fan motors and condenser fans',
        'Electronic expansion valves, filter driers, and refrigerant sight glasses',
        'Thermostats, pressure transducers, temperature sensors, and control boards',
      ],
      standards: ['OEM Manufacturer Specifications', 'AHRI Standards'],
    },
    capabilities: {
      items: [
        { title: 'Commercial Compressors', description: 'Original replacement compressors for commercial chillers, package units, and VRF systems.' },
        { title: 'Fan Motors & Blowers', description: 'High-efficiency electronically commutated (EC) and standard AC fan motors.' },
      ],
    },
    cta: {
      headline: 'Request Parts Availability & Pricing',
      subheadline: 'Provide your part numbers or equipment nameplate details.',
      primaryButtonText: 'Request Parts Quote',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'trading@ltsgroup.ae',
    },
  },

  // Trading: Controls & VFDs
  'trading-controls-vfds': {
    id: 'trading-controls-vfds',
    slug: '/trading/controls-vfds',
    pillar: 'Trading',
    pillarSlug: '/trading',
    title: 'Controls & Variable Frequency Drives',
    tagline: 'Variable frequency drives (VFD), automated motor starters, BACnet controllers, and sensors.',
    archetype: 'trading-supply',
    hero: {
      eyebrow: 'Trading & Component Supply / Automation',
      heading: 'Variable Frequency Drives & Controls',
      summary: 'Authorized distribution of industrial variable frequency drives, building automation controllers, and precision pressure and temperature sensors.',
      primaryCta: { label: 'Request VFD Quote', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['VFD Automation', 'BACnet & Modbus Compatible'],
    },
    introduction: {
      leadText: 'VFDs optimize motor power draw according to real-time system demand, reducing wear on mechanical pumps and fans.',
      bodyParagraphs: [
        'We stock and distribute a broad range of low-voltage variable frequency drives, soft starters, and HVAC-specific motor speed controllers.',
      ],
      scopeInclusion: [
        'Dedicated HVAC and water pump variable frequency drives (0.75 kW to 315 kW)',
        'Enclosed IP54 and IP55 drives with built-in bypass contactors',
        'Programmable BACnet MS/TP and Modbus RTU interface cards',
        'Differential pressure transmitters, immersion temperature sensors, and humidity probes',
      ],
      standards: ['IEC 61800 Variable Speed Drives Standard'],
    },
    capabilities: {
      items: [
        { title: 'HVAC & Pump VFDs', description: 'Pre-programmed pump staging, sleep mode, and dry-run protection functions.' },
        { title: 'BMS Sensors & Field Devices', description: 'High-accuracy 4-20mA and 0-10V analog transducers for HVAC supervision.' },
      ],
    },
    cta: {
      headline: 'Inquire About Drive Sizing & Supply',
      subheadline: 'Our automation specialists will help select the appropriate drive for your motor rating.',
      primaryButtonText: 'Request VFD Quote',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'trading@ltsgroup.ae',
    },
  },

  // Trading: Metering & Accessories
  'trading-metering-accessories': {
    id: 'trading-metering-accessories',
    slug: '/trading/metering-accessories',
    pillar: 'Trading',
    pillarSlug: '/trading',
    title: 'Metering Systems & Accessories',
    tagline: 'Ultrasonic BTU heat meters, sub-meters, flow sensors, and energy monitoring hardware.',
    archetype: 'trading-supply',
    hero: {
      eyebrow: 'Trading & Component Supply / Metering',
      heading: 'Ultrasonic BTU Meters & Energy Monitoring',
      summary: 'Certified ultrasonic BTU meters and electrical energy sub-meters for commercial tenant billing and district cooling monitoring.',
      primaryCta: { label: 'Request Metering Quote', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['MID Class 2 Certified', 'M-Bus / Modbus'],
    },
    introduction: {
      leadText: 'Accurate thermal and electrical sub-metering is essential for commercial tenant cost allocation and energy audit compliance.',
      bodyParagraphs: [
        'LTSGROUP supplies ultrasonic BTU heat meters that measure flow rate and temperature differential without moving mechanical parts subject to wear.',
      ],
      scopeInclusion: [
        'MID Class 2 approved ultrasonic BTU meters with M-Bus and pulse outputs',
        'Matched paired PT1000 temperature sensors with thermal pockets',
        'Multi-function electrical sub-meters with RS485 Modbus communications',
        'Centralized M-Bus level converters and automated meter reading (AMR) gateways',
      ],
      standards: ['EN 1434 Heat Meter Standard', 'OIML R75'],
    },
    capabilities: {
      items: [
        { title: 'Ultrasonic BTU Meters', description: 'Accurate thermal cooling energy measurement for district cooling customer billing.' },
        { title: 'Digital Power Meters', description: 'Active and reactive energy sub-metering with harmonic distortion analysis.' },
      ],
    },
    cta: {
      headline: 'Order Metering Hardware',
      subheadline: 'Submit pipe diameter and flow rate requirements for meter sizing.',
      primaryButtonText: 'Request Meter Quote',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'trading@ltsgroup.ae',
    },
  },

  // Trading: Lights
  'trading-lights': {
    id: 'trading-lights',
    slug: '/trading/lights',
    pillar: 'Trading',
    pillarSlug: '/trading',
    title: 'Commercial & Industrial Lighting',
    tagline: 'High-bay industrial luminaires, architectural LED panels, emergency lighting, and exit signage.',
    archetype: 'trading-supply',
    hero: {
      eyebrow: 'Trading & Component Supply / Lighting',
      heading: 'Commercial & Industrial LED Lighting',
      summary: 'Energy-efficient LED high-bays, weather-proof batten luminaires, office panel lights, and Civil Defense approved emergency signage.',
      primaryCta: { label: 'Request Lighting Quote', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['Civil Defense Approved Signage', 'High-Lumen LED'],
    },
    introduction: {
      leadText: 'Modern commercial and industrial facilities require long-lasting, high-lumen illumination that reduces energy bills and maintenance callouts.',
      bodyParagraphs: [
        'We distribute industrial LED high-bays for logistics warehouses, clean architectural troffers for offices, and compliant emergency exit fixtures.',
      ],
      scopeInclusion: [
        'Industrial high-bay LED fixtures with IP65 weather-proof ratings (100W to 240W)',
        'Flicker-free architectural 60x60 LED ceiling panels with UGR<19 low glare ratings',
        'Self-contained emergency battery packs and illuminated Civil Defense exit signs',
        'DALI and 0-10V dimmable drivers for automated architectural lighting control',
      ],
      standards: ['UAE Civil Defense Emergency Lighting Standards', 'IEC 60598 Luminaires'],
    },
    capabilities: {
      items: [
        { title: 'Industrial High-Bay Luminaires', description: 'Robust aluminum housing designed for high ambient temperatures in GCC warehouses.' },
        { title: 'Civil Defense Emergency Lighting', description: 'Certified 3-hour battery backup emergency lights and escape route signage.' },
      ],
    },
    cta: {
      headline: 'Request Lighting Package Quotation',
      subheadline: 'Send your fixture schedule or lighting layout for commercial pricing.',
      primaryButtonText: 'Request Quote',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'trading@ltsgroup.ae',
    },
  },

  // Trading: EV Charger
  'trading-ev-charger': {
    id: 'trading-ev-charger',
    slug: '/trading/ev-charger',
    pillar: 'Trading',
    pillarSlug: '/trading',
    title: 'Commercial EV Chargers',
    tagline: 'AC wallboxes, commercial DC fast chargers, and smart charging management hardware.',
    archetype: 'trading-supply',
    hero: {
      eyebrow: 'Trading & Component Supply / E-Mobility',
      heading: 'Commercial Electric Vehicle Chargers',
      summary: 'AC destination wallboxes and high-output DC fast chargers engineered for commercial towers, residential developments, and fleet depots.',
      primaryCta: { label: 'Request EV Charger Quote', slug: '/contact?tab=rfp' },
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1400&q=80',
      technicalBadges: ['DEWA EV Ready', 'OCPP 1.6 / 2.0.1'],
    },
    introduction: {
      leadText: 'Commercial properties and residential developments are increasingly required to provide electric vehicle charging infrastructure for occupants.',
      bodyParagraphs: [
        'LTSGROUP supplies certified AC and DC charging stations with integrated smart billing, RFID authentication, and OCPP networking support.',
      ],
      scopeInclusion: [
        '7.4 kW to 22 kW AC commercial destination chargers with Type-2 socket connectors',
        '50 kW to 180 kW DC fast chargers with CCS2 dual gun configuration',
        'OCPP 1.6 and 2.0.1 protocol support for open back-end management and payment systems',
        'Dynamic load management hardware protecting facility main electrical switchboards',
      ],
      standards: ['DEWA Electric Vehicle Green Charger Guidelines', 'IEC 61851 EV Charging'],
    },
    capabilities: {
      items: [
        { title: 'Commercial AC Wallboxes', description: 'Compact, weather-proof charging units for residential and commercial parking bays.' },
        { title: 'High-Output DC Fast Stations', description: 'Rapid vehicle charging for fleet depots, retail hubs, and commercial destinations.' },
      ],
    },
    cta: {
      headline: 'Inquire for EV Charging Hardware',
      subheadline: 'Contact our e-mobility supply desk in Dubai.',
      primaryButtonText: 'Request EV Specs',
      contactHotline: '+971 4 347 1234',
      contactEmail: 'trading@ltsgroup.ae',
    },
  },
};

// Helper resolver
export const getServiceBySlug = (slug: string): ServicePageData | null => {
  const cleanSlug = slug.split('?')[0].split('#')[0].replace(/\/$/, '');
  
  // Exact match in registry
  const exact = Object.values(SERVICE_PAGES_REGISTRY).find((s) => s.slug === cleanSlug);
  if (exact) return exact;

  // Facilities Management Aliases & Direct Sub-Routes
  if (cleanSlug === '/facilities-management/hard-services') {
    return SERVICE_PAGES_REGISTRY['hard-services'] || null;
  }
  if (cleanSlug === '/facilities-management/hvac') {
    return SERVICE_PAGES_REGISTRY['fm-hvac'] || null;
  }
  if (cleanSlug === '/facilities-management/electrical') {
    return SERVICE_PAGES_REGISTRY['fm-electrical'] || null;
  }
  if (cleanSlug === '/facilities-management/plumbing') {
    return SERVICE_PAGES_REGISTRY['fm-plumbing'] || null;
  }
  if (cleanSlug === '/facilities-management/bms') {
    return SERVICE_PAGES_REGISTRY['fm-bms'] || null;
  }
  if (cleanSlug === '/facilities-management/civil' || cleanSlug === '/facilities-management/civil-works') {
    return SERVICE_PAGES_REGISTRY['fm-civil-works'] || null;
  }
  if (cleanSlug === '/facilities-management/soft-services' || cleanSlug === '/facilities-management/swimming-pool' || cleanSlug === '/facilities-management/swimming-pool-maintenance') {
    return SERVICE_PAGES_REGISTRY['swimming-pool-maintenance'] || null;
  }
  if (cleanSlug === '/facilities-management/retrofits' || cleanSlug === '/facilities-management/retrofits-refurbishment') {
    return SERVICE_PAGES_REGISTRY['retrofits-refurbishment'] || null;
  }
  if (cleanSlug === '/facilities-management/retrofits/design-engineering' || cleanSlug === '/facilities-management/retrofits-refurbishment/design-engineering') {
    return SERVICE_PAGES_REGISTRY['design-engineering'] || null;
  }
  if (cleanSlug === '/facilities-management/retrofits/project-management' || cleanSlug === '/facilities-management/retrofits-refurbishment/project-management') {
    return SERVICE_PAGES_REGISTRY['project-management'] || null;
  }
  if (cleanSlug === '/facilities-management/retrofits/testing-commissioning' || cleanSlug === '/facilities-management/retrofits-refurbishment/testing-commissioning') {
    return SERVICE_PAGES_REGISTRY['testing-commissioning'] || null;
  }

  // Trading Aliases & Direct Sub-Routes
  if (cleanSlug === '/trading/hvac' || cleanSlug === '/trading/hvac-spare-parts') {
    return SERVICE_PAGES_REGISTRY['trading-hvac-spare-parts'] || null;
  }
  if (cleanSlug === '/trading/controls' || cleanSlug === '/trading/controls-vfds') {
    return SERVICE_PAGES_REGISTRY['trading-controls-vfds'] || null;
  }
  if (cleanSlug === '/trading/metering' || cleanSlug === '/trading/metering-accessories') {
    return SERVICE_PAGES_REGISTRY['trading-metering-accessories'] || null;
  }
  if (cleanSlug === '/trading/lights' || cleanSlug === '/trading/lighting') {
    return SERVICE_PAGES_REGISTRY['trading-lights'] || null;
  }
  if (cleanSlug === '/trading/ev' || cleanSlug === '/trading/ev-charger') {
    return SERVICE_PAGES_REGISTRY['trading-ev-charger'] || null;
  }

  // Engineering & Construction Aliases
  if (cleanSlug === '/engineering-construction/mep') {
    return SERVICE_PAGES_REGISTRY['mep'] || null;
  }
  if (cleanSlug === '/engineering-construction/solar') {
    return SERVICE_PAGES_REGISTRY['solar'] || null;
  }
  if (cleanSlug === '/engineering-construction/switchgear' || cleanSlug === '/engineering-construction/control-switchgear') {
    return SERVICE_PAGES_REGISTRY['control-switchgear'] || null;
  }

  return null;
};

export const ALL_SERVICE_PAGES = Object.values(SERVICE_PAGES_REGISTRY);
