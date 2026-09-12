import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { PROJECTS_DATA, ProjectDetailData } from '../../data/projectsData';

interface IndustriesPageProps {
  onNavigate: (slug: string) => void;
}

interface IndustryItem {
  id: string;
  name: string;
  sentence: string;
  image: string;
  fallbackImage: string;
  aspectClass: string;
  projectSlug: string;
  capabilities: {
    title: string;
    slug: string;
    division: string;
  }[];
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>('commercial');

  // 6 Verified Industries conforming to approved business data
  const industries: IndustryItem[] = [
    {
      id: 'commercial',
      name: 'Commercial Towers & Real Estate',
      sentence:
        'High-density vertical electromechanical infrastructure, centralized district cooling hydronics, and certified life-safety smoke management.',
      image: '/assets/images/industry-commercial.jpg',
      fallbackImage: '/assets/images/project-highrise.jpg',
      aspectClass: 'aspect-[16/10] lg:aspect-[16/11]',
      projectSlug: 'commercial-high-rise-mep',
      capabilities: [
        {
          title: 'Turnkey MEP Contracting',
          slug: '/engineering-construction/mep',
          division: 'Engineering & Construction',
        },
        {
          title: 'Form-4 Low-Voltage Switchgear',
          slug: '/engineering-construction/control-switchgear',
          division: 'Engineering & Construction',
        },
        {
          title: 'Static Ultrasonic BTU Metering',
          slug: '/trading/metering-accessories',
          division: 'Trading',
        },
      ],
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Specialized Facilities',
      sentence:
        'Continuous central chiller uptime, HTM 03-01 hospital cleanroom ventilation, and 24/7 critical plant stewardship.',
      image: '/assets/images/industry-healthcare.jpg',
      fallbackImage: '/assets/images/project-chiller.jpg',
      aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
      projectSlug: 'healthcare-facility-hard-services',
      capabilities: [
        {
          title: 'Hard Facilities Stewardship & 24/7 PPM',
          slug: '/facilities-management/hard-services',
          division: 'Facilities Management',
        },
        {
          title: 'Central Chiller Operations & Vibration Analysis',
          slug: '/facilities-management/hvac',
          division: 'Facilities Management',
        },
        {
          title: 'Direct Digital BMS Telemetry',
          slug: '/trading/controls-vfds',
          division: 'Trading',
        },
      ],
    },
    {
      id: 'industrial',
      name: 'Logistics & Industrial Manufacturing',
      sentence:
        'Turnkey rooftop solar PV arrays, live-plant chiller retrofits, and Form-4 motor control centers with zero production downtime.',
      image: '/assets/images/industry-logistics.jpg',
      fallbackImage: '/assets/images/project-solar.jpg',
      aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
      projectSlug: 'logistics-facility-solar-pv',
      capabilities: [
        {
          title: 'Solar Photovoltaic EPC (DEWA Shams Dubai)',
          slug: '/engineering-construction/solar',
          division: 'Engineering & Construction',
        },
        {
          title: 'Plant Retrofits & Refurbishment',
          slug: '/facilities-management/retrofits-refurbishment',
          division: 'Facilities Management',
        },
        {
          title: 'Form-4 Motor Control Centers (MCC)',
          slug: '/engineering-construction/control-switchgear',
          division: 'Engineering & Construction',
        },
      ],
    },
    {
      id: 'utilities',
      name: 'District Cooling & Utilities Infrastructure',
      sentence:
        'Revenue-grade static ultrasonic BTU thermal energy metering, automated telemetry, and municipal hydraulic distribution networks.',
      image: '/assets/images/hero-building.jpg',
      fallbackImage: '/assets/images/engineering-intro.jpg',
      aspectClass: 'aspect-[16/9] lg:aspect-[21/9]',
      projectSlug: 'district-cooling-metering-rollout',
      capabilities: [
        {
          title: 'Revenue-Grade Ultrasonic BTU Metering',
          slug: '/trading/metering-accessories',
          division: 'Trading',
        },
        {
          title: 'Variable Frequency Drives & Energy Controls',
          slug: '/trading/controls-vfds',
          division: 'Trading',
        },
        {
          title: 'Infrastructure MEP Contracting',
          slug: '/engineering-construction/mep',
          division: 'Engineering & Construction',
        },
      ],
    },
    {
      id: 'residential',
      name: 'Residential Master Communities',
      sentence:
        'Quad-pump variable-speed booster stations, community stormwater drainage, and certified aquatic amenity maintenance.',
      image: '/assets/images/industry-hospitality.jpg',
      fallbackImage: '/assets/images/hero-building.jpg',
      aspectClass: 'aspect-[16/10]',
      projectSlug: 'residential-community-water-networks',
      capabilities: [
        {
          title: 'Commercial Swimming Pool Care & Water Quality',
          slug: '/facilities-management/swimming-pool-maintenance',
          division: 'Facilities Management',
        },
        {
          title: 'Plumbing & Hydraulic Networks',
          slug: '/facilities-management/plumbing',
          division: 'Facilities Management',
        },
        {
          title: 'Sub-Metering & Multi-Jet Telemetry',
          slug: '/trading/metering-accessories',
          division: 'Trading',
        },
      ],
    },
    {
      id: 'hospitality',
      name: 'Hospitality & Commercial Destinations',
      sentence:
        'Silent thermal comfort, off-peak central chiller servicing, and automated recreational aquatic disinfection for luxury resorts.',
      image: '/assets/images/project-chiller.jpg',
      fallbackImage: '/assets/images/industry-hospitality.jpg',
      aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
      projectSlug: 'industrial-chiller-retrofit',
      capabilities: [
        {
          title: 'Hard Facilities Stewardship & Central Plant',
          slug: '/facilities-management/hard-services',
          division: 'Facilities Management',
        },
        {
          title: 'Aquatic Amenities & Disinfection',
          slug: '/facilities-management/swimming-pool-maintenance',
          division: 'Facilities Management',
        },
        {
          title: 'Architectural & Emergency Lighting',
          slug: '/trading/lights',
          division: 'Trading',
        },
      ],
    },
  ];

  // Verified Real Projects Selected
  const selectedProjectReferences: ProjectDetailData[] = [
    PROJECTS_DATA[0], // Commercial High-Rise MEP
    PROJECTS_DATA[2], // Healthcare Facility Hard Services
    PROJECTS_DATA[1], // Logistics Solar PV
    PROJECTS_DATA[6], // District Cooling BTU Metering Rollout
  ].filter(Boolean);

  const activeIndustry = industries.find((i) => i.id === activeIndustryId) || industries[0];

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — HERO
          Full-bleed architectural hero (~76vh).
          Intentional lower-left typography.
      ========================================================================= */}
      <section className="relative w-full h-[76vh] min-h-[540px] max-h-[860px] bg-[#0B1C2F] overflow-hidden">
        <img
          src="/assets/images/hero-building.jpg"
          alt="LTSGROUP Operating Industries and Sector Infrastructure"
          className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-[800ms] ease-out hover:scale-[1.01]"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
          }}
        />

        {/* Directional gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/85 via-[#0B1320]/30 to-[#0B1320]/40 pointer-events-none" />

        {/* Hero Content Positioned Lower-Left */}
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-4xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                Sectors &amp; Operating Environments
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[0.98]">
                Industries
              </h1>

              <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl pt-1">
                Specialized electromechanical contracting, life-cycle facility stewardship, and equipment supply engineered for the regulatory and environmental realities of each sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — SHORT INTRODUCTION
          Editorial two-column narrative.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Section Marker */}
            <div className="lg:col-span-4 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                01 &bull; Sector Specifics
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Engineered for sector-specific regulatory realities.
              </h2>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#0B1320] leading-snug tracking-tight">
                Every operating environment in the UAE imposes distinct physical constraints—from vertical riser hydronics in 48-floor commercial towers to continuous 24/7 chiller plant uptime in acute healthcare.
              </p>
              <p>
                LTSGROUP configures its core engineering, facilities management, and component supply disciplines around these exact statutory codes (DEWA, Dubai Civil Defense, Dubai Municipality) and high-ambient thermal operating envelopes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — INDUSTRY LIST / GRID
          Asymmetric visual index of the 6 verified sectors.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              02 &bull; Sector Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
              Operating Sectors &amp; Environments
            </h2>
            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              Six established commercial, institutional, and infrastructure domains where LTSGROUP provides capital execution and ongoing stewardship.
            </p>
          </div>

          {/* Block 1: Large Commercial (7 cols) + Two Supporting (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* 01 Commercial */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setActiveIndustryId(industries[0].id)}
                className={`group cursor-pointer block text-left w-full select-none rounded-[20px] transition-all p-2 ${
                  activeIndustryId === industries[0].id ? 'bg-slate-50 ring-2 ring-[#173C62]' : 'hover:bg-slate-50/60'
                }`}
              >
                <div className={`relative overflow-hidden rounded-[18px] bg-[#0B1C2F] ${industries[0].aspectClass}`}>
                  <img
                    src={industries[0].image}
                    alt={industries[0].name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = industries[0].fallbackImage;
                    }}
                  />
                </div>
                <div className="mt-4 p-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#173C62] font-semibold uppercase tracking-wider">
                      Sector 01
                    </span>
                    <span className="font-mono text-xs text-[#64748B]">Active Sector</span>
                  </div>
                  <h3 className="text-2xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                    {industries[0].name}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    {industries[0].sentence}
                  </p>
                </div>
              </div>
            </div>

            {/* Supporting 02 (Healthcare) & 03 (Logistics) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Healthcare */}
              <div
                onClick={() => setActiveIndustryId(industries[1].id)}
                className={`group cursor-pointer block text-left w-full select-none rounded-[20px] transition-all p-2 ${
                  activeIndustryId === industries[1].id ? 'bg-slate-50 ring-2 ring-[#173C62]' : 'hover:bg-slate-50/60'
                }`}
              >
                <div className={`relative overflow-hidden rounded-[16px] bg-[#0B1C2F] ${industries[1].aspectClass}`}>
                  <img
                    src={industries[1].image}
                    alt={industries[1].name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = industries[1].fallbackImage;
                    }}
                  />
                </div>
                <div className="mt-3 p-2 space-y-1">
                  <span className="font-mono text-[11px] text-[#173C62] font-semibold uppercase tracking-wider block">
                    Sector 02
                  </span>
                  <h3 className="text-xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                    {industries[1].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {industries[1].sentence}
                  </p>
                </div>
              </div>

              {/* Industrial */}
              <div
                onClick={() => setActiveIndustryId(industries[2].id)}
                className={`group cursor-pointer block text-left w-full select-none rounded-[20px] transition-all p-2 ${
                  activeIndustryId === industries[2].id ? 'bg-slate-50 ring-2 ring-[#173C62]' : 'hover:bg-slate-50/60'
                }`}
              >
                <div className={`relative overflow-hidden rounded-[16px] bg-[#0B1C2F] ${industries[2].aspectClass}`}>
                  <img
                    src={industries[2].image}
                    alt={industries[2].name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = industries[2].fallbackImage;
                    }}
                  />
                </div>
                <div className="mt-3 p-2 space-y-1">
                  <span className="font-mono text-[11px] text-[#173C62] font-semibold uppercase tracking-wider block">
                    Sector 03
                  </span>
                  <h3 className="text-xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                    {industries[2].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {industries[2].sentence}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Wide District Cooling (12 cols) */}
          <div
            onClick={() => setActiveIndustryId(industries[3].id)}
            className={`group cursor-pointer block text-left w-full select-none rounded-[24px] transition-all p-3 ${
              activeIndustryId === industries[3].id ? 'bg-slate-50 ring-2 ring-[#173C62]' : 'hover:bg-slate-50/60'
            }`}
          >
            <div className={`relative overflow-hidden rounded-[20px] bg-[#0B1C2F] ${industries[3].aspectClass}`}>
              <img
                src={industries[3].image}
                alt={industries[3].name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = industries[3].fallbackImage;
                }}
              />
            </div>
            <div className="mt-4 p-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="space-y-1 max-w-3xl">
                <span className="font-mono text-xs text-[#173C62] font-semibold uppercase tracking-wider block">
                  Sector 04 &bull; Utilities
                </span>
                <h3 className="text-2xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                  {industries[3].name}
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {industries[3].sentence}
                </p>
              </div>
              <div className="shrink-0 font-mono text-xs text-[#173C62] flex items-center gap-1">
                <span>Select Sector</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Block 3: Two Supporting (Residential & Hospitality) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Residential */}
            <div
              onClick={() => setActiveIndustryId(industries[4].id)}
              className={`group cursor-pointer block text-left w-full select-none rounded-[20px] transition-all p-2 ${
                activeIndustryId === industries[4].id ? 'bg-slate-50 ring-2 ring-[#173C62]' : 'hover:bg-slate-50/60'
              }`}
            >
              <div className={`relative overflow-hidden rounded-[18px] bg-[#0B1C2F] ${industries[4].aspectClass}`}>
                <img
                  src={industries[4].image}
                  alt={industries[4].name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = industries[4].fallbackImage;
                  }}
                />
              </div>
              <div className="mt-3 p-2 space-y-1">
                <span className="font-mono text-xs text-[#173C62] font-semibold uppercase tracking-wider block">
                  Sector 05
                </span>
                <h3 className="text-xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                  {industries[4].name}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                  {industries[4].sentence}
                </p>
              </div>
            </div>

            {/* Hospitality */}
            <div
              onClick={() => setActiveIndustryId(industries[5].id)}
              className={`group cursor-pointer block text-left w-full select-none rounded-[20px] transition-all p-2 ${
                activeIndustryId === industries[5].id ? 'bg-slate-50 ring-2 ring-[#173C62]' : 'hover:bg-slate-50/60'
              }`}
            >
              <div className={`relative overflow-hidden rounded-[18px] bg-[#0B1C2F] ${industries[5].aspectClass}`}>
                <img
                  src={industries[5].image}
                  alt={industries[5].name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = industries[5].fallbackImage;
                  }}
                />
              </div>
              <div className="mt-3 p-2 space-y-1">
                <span className="font-mono text-xs text-[#173C62] font-semibold uppercase tracking-wider block">
                  Sector 06
                </span>
                <h3 className="text-xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                  {industries[5].name}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                  {industries[5].sentence}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — RELEVANT CAPABILITIES
          Visible, elegant capability matrix for the active sector across all 3 divisions.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                03 &bull; Disciplines In Action
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
                Relevant Capabilities: {activeIndustry.name}
              </h2>
              <p className="text-base text-[#4A5568] leading-relaxed">
                Direct electromechanical disciplines, facilities management operations, and component systems configured for this sector.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeIndustry.capabilities.map((cap, cIdx) => (
              <a
                key={cIdx}
                href={cap.slug}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(cap.slug);
                }}
                className="bg-white p-7 rounded-[20px] border border-[#E5E7EB] hover:border-[#173C62] transition-all flex flex-col justify-between group min-h-[140px]"
              >
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#173C62] font-semibold block">
                    {cap.division}
                  </span>
                  <h3 className="text-lg font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
                    {cap.title}
                  </h3>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-[#173C62]">
                  <span>Explore Discipline</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — SELECTED PROJECTS
          Curated project monographs demonstrating sector execution.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                04 &bull; Sector References
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
                Selected Projects
              </h2>
              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
                Real electromechanical contracting, solar PV EPC, and facilities management projects delivered across Dubai sectors.
              </p>
            </div>

            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/projects');
              }}
              className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-[#173C62] hover:underline uppercase tracking-wider shrink-0"
            >
              <span>View Full Project Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {selectedProjectReferences.map((ref) => (
              <a
                key={ref.id}
                href={`/projects/${ref.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/projects/${ref.slug}`);
                }}
                className="group block select-none bg-[#F8FAFC] p-4 rounded-[20px] transition-all hover:bg-slate-100/80"
              >
                <div className="relative overflow-hidden rounded-[14px] bg-[#0B1C2F] aspect-[16/10]">
                  <img
                    src={ref.image}
                    alt={ref.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                  />
                </div>

                <div className="mt-4 space-y-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] block">
                    {ref.categoryLabel} &bull; {ref.location.split(',')[0]}
                  </span>
                  <h3 className="text-base font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug line-clamp-2">
                    {ref.title}
                  </h3>
                  <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-[#173C62]">
                    <span>Read Monograph</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — CTA
          High-impact closing call to action.
      ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              Sector Technical Advisory
            </span>

            <h2 className="text-3xl sm:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.08]">
              Consult with Our Sector Engineering Teams
            </h2>

            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              Whether you are preparing a commercial tower MEP tender, evaluating live-chiller retrofit feasibility, or seeking DEWA Shams Dubai solar certification, our estimating directors are available to assist.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="min-h-[44px] inline-flex items-center gap-2 px-7 py-3.5 rounded-[12px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#11253E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer"
              >
                <span>Initiate Sector Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="min-h-[44px] inline-flex items-center gap-2 px-7 py-3.5 rounded-[12px] border border-[#CBD5E1] text-[#0B1320] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer"
              >
                <span>Browse All Delivered Works</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
