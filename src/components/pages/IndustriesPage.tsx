import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, X, Check, ShieldCheck } from 'lucide-react';
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
  isWide?: boolean;
  projectSlugs: string[];
  capabilities: {
    title: string;
    slug: string;
    division: string;
  }[];
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string | null>(null);

  // 6 Verified Industries conforming to approved business data
  const industries: IndustryItem[] = [
    // 01 — Large Industry Feature
    {
      id: 'commercial',
      name: 'Commercial Towers & Real Estate',
      sentence:
        'High-density vertical electromechanical infrastructure, centralized district cooling hydronics, and certified life-safety smoke management.',
      image: '/assets/images/industry-commercial.jpg',
      fallbackImage: '/assets/images/project-highrise.jpg',
      aspectClass: 'aspect-[16/10] lg:aspect-[16/11]',
      projectSlugs: ['commercial-high-rise-mep'],
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
          title: 'Static Ultrasonic BTU Metering & AMR',
          slug: '/trading/metering-accessories',
          division: 'Trading',
        },
      ],
    },

    // 02 — Supporting Industry 1
    {
      id: 'healthcare',
      name: 'Healthcare & Specialized Facilities',
      sentence:
        'Continuous central chiller uptime, HTM 03-01 hospital cleanroom ventilation, and 24/7 critical plant stewardship.',
      image: '/assets/images/industry-healthcare.jpg',
      fallbackImage: '/assets/images/project-chiller.jpg',
      aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
      projectSlugs: ['healthcare-facility-hard-services'],
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

    // 03 — Supporting Industry 2
    {
      id: 'industrial',
      name: 'Logistics & Industrial Manufacturing',
      sentence:
        'Turnkey rooftop solar PV arrays, live-plant chiller retrofits, and Form-4 motor control centers with zero production downtime.',
      image: '/assets/images/industry-logistics.jpg',
      fallbackImage: '/assets/images/project-solar.jpg',
      aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
      projectSlugs: [
        'logistics-facility-solar-pv',
        'industrial-chiller-retrofit',
        'industrial-mcc-switchgear',
        'commercial-fleet-ev-chargers',
      ],
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
        {
          title: 'Commercial DC Ultra-Rapid EV Chargers',
          slug: '/trading/ev-charger',
          division: 'Trading',
        },
      ],
    },

    // 04 — Wide Industry Feature
    {
      id: 'utilities',
      name: 'District Cooling & Utilities Infrastructure',
      sentence:
        'Revenue-grade static ultrasonic BTU thermal energy metering, automated telemetry, and municipal hydraulic distribution networks.',
      image: '/assets/images/hero-building.jpg',
      fallbackImage: '/assets/images/engineering-intro.jpg',
      aspectClass: 'aspect-[16/9] lg:aspect-[21/9]',
      isWide: true,
      projectSlugs: ['district-cooling-metering-rollout'],
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

    // 05 — Supporting Industry 3
    {
      id: 'residential',
      name: 'Residential Master Communities',
      sentence:
        'Quad-pump variable-speed booster stations, community stormwater drainage, and certified aquatic amenity maintenance.',
      image: '/assets/images/industry-hospitality.jpg',
      fallbackImage: '/assets/images/hero-building.jpg',
      aspectClass: 'aspect-[16/10]',
      projectSlugs: ['residential-community-water-networks'],
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

    // 06 — Supporting Industry 4
    {
      id: 'hospitality',
      name: 'Hospitality & Commercial Destinations',
      sentence:
        'Silent thermal comfort, off-peak central chiller servicing, and automated recreational aquatic disinfection for luxury resorts.',
      image: '/assets/images/project-chiller.jpg',
      fallbackImage: '/assets/images/industry-hospitality.jpg',
      aspectClass: 'aspect-[4/3] sm:aspect-[16/10]',
      projectSlugs: ['residential-community-water-networks', 'industrial-chiller-retrofit'],
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

  const selectedIndustry = industries.find((ind) => ind.id === selectedIndustryId) || null;

  // Resolve verified real projects for the selected industry
  const verifiedProjects: ProjectDetailData[] = selectedIndustry
    ? selectedIndustry.projectSlugs
        .map((slug) => PROJECTS_DATA.find((p) => p.slug === slug))
        .filter((p): p is ProjectDetailData => Boolean(p))
    : [];

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — HEADER
          Editorial title: Industries
          Short one-line description.
          No huge white empty header.
          Introduces imagery immediately through Block 1.
      ========================================================================= */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-6 md:pb-8 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block mb-2 font-semibold">
                Sectors &amp; Operating Environments
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B1320] tracking-tight leading-[0.95]">
                Industries
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#4A5568] max-w-xl font-normal leading-relaxed">
              Specialized electromechanical contracting, critical facilities stewardship, and equipment supply engineered for the regulatory realities of each sector.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — EDITORIAL VISUAL INDEX
          Layout sequence:
          - One large industry feature + two supporting industries
          - Wide industry feature
          - Two supporting industries
          Vary image proportions deliberately.
          Each item: image, industry name, one concise sentence, arrow.
      ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-16 sm:space-y-20 md:space-y-28">
          {/* ---------------------------------------------------------------------
              BLOCK 1: One Large Feature (Commercial) + Two Supporting (Healthcare, Industrial)
              Asymmetric 7/5 composition
          --------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* One Large Industry Feature (7 cols) */}
            <div className="lg:col-span-7">
              <button
                type="button"
                onClick={() => setSelectedIndustryId(industries[0].id)}
                className="group cursor-pointer block text-left w-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 rounded-[20px]"
                aria-label={`Inspect case studies for ${industries[0].name}`}
              >
                {/* Photographic Container (Soft 18-20px radius, NO borders, NO tags) */}
                <div
                  className={`relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#0B1C2F] ${industries[0].aspectClass}`}
                >
                  <img
                    src={industries[0].image}
                    alt={industries[0].name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = industries[0].fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Card Anatomy: Name + One Concise Sentence + Arrow */}
                <div className="mt-4 sm:mt-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 max-w-2xl">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                        {industries[0].name}
                      </h2>
                      <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal">
                        {industries[0].sentence}
                      </p>
                    </div>

                    {/* Minimal 4-6px translating arrow */}
                    <div
                      className="shrink-0 mt-1.5 text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Two Supporting Industries (5 cols stacked) */}
            <div className="lg:col-span-5 space-y-12 sm:space-y-14">
              {/* Supporting Industry 1 (Healthcare) */}
              <button
                type="button"
                onClick={() => setSelectedIndustryId(industries[1].id)}
                className="group cursor-pointer block text-left w-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 rounded-[20px]"
                aria-label={`Inspect case studies for ${industries[1].name}`}
              >
                <div
                  className={`relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#0B1C2F] ${industries[1].aspectClass}`}
                >
                  <img
                    src={industries[1].image}
                    alt={industries[1].name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = industries[1].fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="mt-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                        {industries[1].name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                        {industries[1].sentence}
                      </p>
                    </div>

                    <div
                      className="shrink-0 mt-1 text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Supporting Industry 2 (Logistics & Industrial) */}
              <button
                type="button"
                onClick={() => setSelectedIndustryId(industries[2].id)}
                className="group cursor-pointer block text-left w-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 rounded-[20px]"
                aria-label={`Inspect case studies for ${industries[2].name}`}
              >
                <div
                  className={`relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#0B1C2F] ${industries[2].aspectClass}`}
                >
                  <img
                    src={industries[2].image}
                    alt={industries[2].name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = industries[2].fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                <div className="mt-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                        {industries[2].name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                        {industries[2].sentence}
                      </p>
                    </div>

                    <div
                      className="shrink-0 mt-1 text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* ---------------------------------------------------------------------
              BLOCK 2: Wide Industry Feature (District Cooling & Utilities)
              Full-width panoramic 12-col composition
          --------------------------------------------------------------------- */}
          <div className="w-full">
            <button
              type="button"
              onClick={() => setSelectedIndustryId(industries[3].id)}
              className="group cursor-pointer block text-left w-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 rounded-[24px]"
              aria-label={`Inspect case studies for ${industries[3].name}`}
            >
              <div
                className={`relative overflow-hidden rounded-[18px] sm:rounded-[24px] bg-[#0B1C2F] ${industries[3].aspectClass}`}
              >
                <img
                  src={industries[3].image}
                  alt={industries[3].name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[500ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = industries[3].fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <div className="mt-5 sm:mt-6 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 sm:gap-8">
                  <div className="space-y-1.5 max-w-3xl">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                      {industries[3].name}
                    </h2>
                    <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal">
                      {industries[3].sentence}
                    </p>
                  </div>

                  <div
                    className="shrink-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5"
                    aria-hidden="true"
                  >
                    <span>Inspect Sector References</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.75"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* ---------------------------------------------------------------------
              BLOCK 3: Two Supporting Industries (Residential & Hospitality)
              Asymmetric/balanced 2-column composition with varied aspect ratios
          --------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Supporting Industry 3 (Residential Master Communities) */}
            <button
              type="button"
              onClick={() => setSelectedIndustryId(industries[4].id)}
              className="group cursor-pointer block text-left w-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 rounded-[20px]"
              aria-label={`Inspect case studies for ${industries[4].name}`}
            >
              <div
                className={`relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#0B1C2F] ${industries[4].aspectClass}`}
              >
                <img
                  src={industries[4].image}
                  alt={industries[4].name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = industries[4].fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <div className="mt-4 sm:mt-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                      {industries[4].name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                      {industries[4].sentence}
                    </p>
                  </div>

                  <div
                    className="shrink-0 mt-1 text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.75"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            {/* Supporting Industry 4 (Hospitality & Leisure) */}
            <button
              type="button"
              onClick={() => setSelectedIndustryId(industries[5].id)}
              className="group cursor-pointer block text-left w-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-4 rounded-[20px]"
              aria-label={`Inspect case studies for ${industries[5].name}`}
            >
              <div
                className={`relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#0B1C2F] ${industries[5].aspectClass}`}
              >
                <img
                  src={industries[5].image}
                  alt={industries[5].name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = industries[5].fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              <div className="mt-4 sm:mt-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                      {industries[5].name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                      {industries[5].sentence}
                    </p>
                  </div>

                  <div
                    className="shrink-0 mt-1 text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.75"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — INDUSTRY SELECTION DISCOVERY DRAWER / PANEL
          When an industry is selected:
          - Connects user to relevant verified project case studies
          - Does not invent project relationships
          - Does not force users into contact forms
          - Builds confidence through authentic delivered engineering records
      ========================================================================= */}
      {selectedIndustry && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="sector-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#0B1320]/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
          onClick={() => setSelectedIndustryId(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col shadow-2xl transition-transform duration-300"
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-[#E5E7EB] flex items-start justify-between gap-6 bg-[#FAFAFA]">
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                  Sector Experience &bull; Verified Portfolio
                </span>
                <h2
                  id="sector-modal-title"
                  className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight leading-snug"
                >
                  {selectedIndustry.name}
                </h2>
                <p className="text-sm text-[#4A5568] leading-relaxed max-w-2xl font-normal">
                  {selectedIndustry.sentence}
                </p>
              </div>

              <button
                onClick={() => setSelectedIndustryId(null)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#64748B] hover:text-[#0B1320] hover:bg-[#F1F5F9] transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                aria-label="Close sector details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 divide-y divide-[#E5E7EB]">
              {/* Part 1: Delivered Project Case Studies (Verified Relationships Only) */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#173C62] font-semibold block">
                    Delivered Project Case Studies
                  </span>
                  <span className="font-mono text-xs text-[#94A3B8]">
                    {verifiedProjects.length} Verified Case Stud{verifiedProjects.length === 1 ? 'y' : 'ies'}
                  </span>
                </div>

                {verifiedProjects.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {verifiedProjects.map((proj) => (
                      <a
                        key={proj.id}
                        href={`/projects/${proj.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedIndustryId(null);
                          onNavigate(`/projects/${proj.slug}`);
                        }}
                        className="group block select-none bg-[#F8FAFC] rounded-[18px] p-4 transition-all hover:bg-slate-100/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                      >
                        <div className="relative overflow-hidden rounded-[14px] bg-[#0B1C2F] aspect-[16/10]">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
                          />
                        </div>

                        <div className="mt-3.5 space-y-1">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] block">
                            {proj.categoryLabel} &bull; {proj.location.split(',')[0]}
                          </span>
                          <h3 className="text-base font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug line-clamp-2">
                            {proj.title}
                          </h3>
                          <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#173C62]">
                            <span>Read Case Study</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 rounded-[16px] bg-[#F8FAFC] text-sm text-[#64748B] leading-relaxed">
                    Sector case studies currently undergoing client security and clearance review. Explore our delivering capabilities below.
                  </div>
                )}
              </div>

              {/* Part 2: Relevant Core Capabilities */}
              <div className="pt-8 space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#173C62] font-semibold block">
                  Delivering Disciplines &amp; Capabilities
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedIndustry.capabilities.map((cap, cIdx) => (
                    <a
                      key={cIdx}
                      href={cap.slug}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedIndustryId(null);
                        onNavigate(cap.slug);
                      }}
                      className="text-left p-4 rounded-[14px] bg-white border border-[#E5E7EB] hover:border-[#173C62] hover:bg-[#F8FAFC] transition-colors group flex items-start justify-between gap-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">
                          {cap.division}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug block">
                          {cap.title}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#173C62] transition-transform shrink-0 mt-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-[#E5E7EB] bg-[#FAFAFA] flex items-center justify-between gap-4">
              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedIndustryId(null);
                  onNavigate('/projects');
                }}
                className="text-xs font-semibold text-[#173C62] uppercase tracking-wider hover:underline py-2 min-h-[44px] inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded"
              >
                Inspect All Verified Project Records &rarr;
              </a>

              <button
                onClick={() => setSelectedIndustryId(null)}
                className="px-5 py-2.5 min-h-[44px] rounded-[10px] bg-[#0B1320] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#173C62] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          04 — REASSURANCE FOOTER
          Builds confidence without forcing users into contact
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              Regulatory Accountability
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
              Engineering Built for Statutory Standards
            </h2>
            <p className="text-base text-[#4A5568] leading-relaxed">
              Every LTSGROUP deployment is executed to conform strictly with Dubai Electricity &amp; Water Authority (DEWA), Dubai Civil Defense (DCD), Dubai Municipality, and international electromechanical codes.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-[12px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#11253E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
              >
                <span>Explore Verified Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="/about-us"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/about-us');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-[12px] border border-[#CBD5E1] text-[#0B1320] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
              >
                <span>About LTSGROUP</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
