import React from 'react';
import {
  IconArrow,
  IconArrowUpRight,
  IconPhone,
  IconEmail,
} from '../../design-system/icons';
import { Button } from '../../design-system/atoms/Button';
import { PROJECTS_DATA } from '../../data/projectsData';
import { NEWS_DATA } from '../../data/newsData';
import { CORPORATE_INFO } from '../../data/corporateData';

interface HomePageProps {
  onNavigate: (slug: string) => void;
}

/**
 * LTSGROUP Homepage — Master Engineering Editorial Art Direction
 * Conforms strictly to the approved 11-stage architectural narrative:
 * 01 HERO: Image-first editorial hero (88vh), large concise statement, primary CTA + text link
 * 02 WHO WE ARE: Asymmetric 60/40 visual perspective (60% engineering photograph, 40% concise thesis)
 * 03 WHAT WE DO: Hierarchical business-area presentation (E&C dominant 7 cols, FM & Trading 5 cols)
 * 04 FEATURED PROJECT: Monumental architectural scale (Commercial High-Rise MEP, 3,200 TR, 0 cards)
 * 05 CAPABILITIES: Clean typographic directory with subtle hover shifts (0 boxes, 0 borders)
 * 06 STATISTICS: 4 verified LTS numbers in monumental typography (text-6xl to 8xl, 0 metric cards)
 * 07 PROJECTS GALLERY: Varied image scale rhythm (1 dominant + 2 supporting + 1 horizontal ledger)
 * 08 INDUSTRIES: Image-led asymmetric masonry composition (4 key sectors, varied aspect ratios)
 * 09 CLIENTS & GOVERNANCE: Clean horizontal statutory authority strip (DEWA, DCD, DM, IEC)
 * 10 NEWS / BRIEFINGS: 1 large featured story + 2 smaller supporting dispatches
 * 11 FINAL CTA: Singular confident LTS Blue statement (LET'S BUILD WHAT'S NEXT.)
 */
export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredProject = PROJECTS_DATA[0]; // Commercial High-Rise MEP (48 Floors, 3,200 TR)
  const dominantGalleryProject = PROJECTS_DATA[1]; // Logistics Rooftop Solar PV (2.4 MWp)
  const supportingProject1 = PROJECTS_DATA[2]; // Critical Healthcare Facility Hard Services
  const supportingProject2 = PROJECTS_DATA[3]; // Industrial Chiller Plant Retrofit (600 TR)
  const horizontalProject = PROJECTS_DATA[4]; // Residential Community Water & Aquatic Networks

  const featuredArticle = NEWS_DATA[0];
  const supportingArticle1 = NEWS_DATA[1];
  const supportingArticle2 = NEWS_DATA[2];

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    onNavigate(slug);
  };

  const capabilities = [
    {
      num: '01',
      name: 'Mechanical & District Cooling Hydronics',
      category: 'HVAC & Central Plant',
      slug: '/engineering-construction/mep',
    },
    {
      num: '02',
      name: 'Electrical Distribution & Form-4 Switchgear',
      category: 'Power & Motor Control',
      slug: '/engineering-construction/control-switchgear',
    },
    {
      num: '03',
      name: 'Plumbing & Public Health Hydraulics',
      category: 'Water & Booster Systems',
      slug: '/engineering-construction/mep',
    },
    {
      num: '04',
      name: 'HVAC Systems & Cleanroom Ventilation',
      category: 'Thermal & Air Quality',
      slug: '/engineering-construction/mep',
    },
    {
      num: '05',
      name: 'Commercial Rooftop Solar Photovoltaic EPC',
      category: 'Renewable Power (Shams Dubai)',
      slug: '/engineering-construction/solar',
    },
    {
      num: '06',
      name: 'Hard Facilities Management & 24/7 Residency',
      category: 'Asset Stewardship',
      slug: '/facilities-management/hard-services',
    },
    {
      num: '07',
      name: 'Plant Automation, Controls & Low-Harmonic VFDs',
      category: 'Automation & Telemetry',
      slug: '/trading/controls-vfds',
    },
    {
      num: '08',
      name: 'OEM Technical Spare Parts & Metering Supply',
      category: 'Component Supply',
      slug: '/trading/hvac',
    },
  ];

  return (
    <main className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =====================================================================
          01 HERO — EDITORIAL ARCHITECTURAL HERO
          - Image-first composition carrying primary visual weight (~88vh)
          - Directional gradient scrim in authentic LTS Blue (#173C62)
          - Small supporting label, concise statement, one supporting sentence
          - One primary CTA + one secondary text link
          - Strictly zero floating cards, badges, or synthetic widgets
      ===================================================================== */}
      <section
        aria-label="LTSGROUP Hero"
        className="relative min-h-[86vh] lg:min-h-[90vh] flex items-end overflow-hidden bg-[#173C62]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-building.jpg"
            alt="LTSGROUP Built Environment Architecture"
            className="w-full h-full object-cover object-center filter brightness-[0.92]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/65 via-45% to-[#173C62]/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#173C62]/85 via-[#173C62]/35 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-24 pt-36 text-left">
          <div className="max-w-2xl">
            {/* Small supporting label */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="h-px w-6 bg-[#CBD5E1]" />
              <span className="text-xs uppercase tracking-[0.14em] text-slate-200 font-semibold">
                LTSGROUP &bull; BUILT ENVIRONMENT ENGINEERING
              </span>
            </div>

            {/* Large concise statement */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Engineering environments built to perform.
            </h1>

            {/* One short supporting sentence */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl">
              Turnkey electromechanical contracting, life-cycle facility operations, and specialized technical supply across the United Arab Emirates.
            </p>

            {/* Primary CTA + Secondary Text Link */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button
                variant="white"
                size="md"
                shape="rounded"
                onClick={() => onNavigate('/engineering-construction')}
                className="text-[12px] tracking-[0.06em] px-6 min-h-[44px]"
              >
                Explore capabilities →
              </Button>

              <a
                href="/projects"
                onClick={(e) => handleLink(e, '/projects')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white hover:text-slate-200 py-2 min-h-[44px] transition-colors focus-visible:outline-none"
              >
                <span className="border-b border-white/60 pb-0.5 hover:border-white">
                  View project archive
                </span>
                <IconArrowUpRight size="sm" color="white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02 WHO WE ARE — 60/40 ASYMMETRIC PERSPECTIVE
          - Asymmetric 5/7 layout: concise thesis left, dominant photo right (~60% width)
          - Generous negative space (py-24 lg:py-36)
          - Avoids standard 50/50 card box
      ===================================================================== */}
      <section
        aria-label="Who We Are"
        className="py-24 lg:py-36 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center text-left">
            {/* Left 5 Cols: Thesis & Title */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs text-[#173C62] uppercase tracking-[0.14em] font-semibold block">
                01 &bull; PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#173C62] tracking-tight leading-[1.02]">
                WHO WE ARE
              </h2>
              <p className="text-lg sm:text-xl font-light text-[#0B1320] leading-relaxed tracking-tight max-w-xl">
                LTSGROUP unifies turnkey MEP contracting, facilities management, and OEM technical equipment supply under direct Dubai governance—ensuring built assets operate with unbroken reliability across decades.
              </p>
              <div className="pt-2">
                <a
                  href="/about-us"
                  onClick={(e) => handleLink(e, '/about-us')}
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none"
                >
                  <span className="border-b border-[#173C62] pb-0.5 group-hover:border-[#0B1320] transition-colors">
                    ABOUT OUR GROUP
                  </span>
                  <IconArrow size="sm" color="inherit" interactive />
                </a>
              </div>
            </div>

            {/* Right 7 Cols: Dominant Photographic Plate (~60% visual weight) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-[8px] overflow-hidden bg-[#173C62]">
                <img
                  src="/assets/images/engineering-intro.jpg"
                  alt="LTS Engineering Perspective in Dubai"
                  className="w-full h-full object-cover object-center filter brightness-[0.95] transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/65 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[10px] text-white/90 tracking-wider uppercase font-medium pointer-events-none">
                  <span>25.2048° N, 55.2708° E</span>
                  <span>DUBAI GOVERNANCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 WHAT WE DO — VISUAL HIERARCHY ACROSS 3 DIVISIONS
          - NOT 3 identical cards
          - Engineering & Construction: dominant 7-col plate with large visual weight
          - Facilities Management & Trading: supporting 5-col stacked plates
          - Clear hierarchy with title, one-line scope, simple link
      ===================================================================== */}
      <section
        aria-label="What We Do"
        className="py-24 lg:py-32 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="max-w-xl mb-12 lg:mb-16">
            <span className="text-xs text-[#173C62] uppercase tracking-[0.14em] font-semibold block mb-2">
              02 &bull; DIVISIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#173C62] tracking-tight">
              WHAT WE DO
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Division 01: Engineering & Construction (Dominant 7 Cols) */}
            <a
              href="/engineering-construction"
              onClick={(e) => handleLink(e, '/engineering-construction')}
              className="lg:col-span-7 group relative rounded-[8px] overflow-hidden block min-h-[440px] sm:min-h-[520px] lg:min-h-[620px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-12 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <img
                src="/assets/images/mep-construction.jpg"
                alt="Engineering & Construction"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/45 via-45% to-transparent pointer-events-none" />

              <div className="relative z-10 text-white max-w-xl">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#CBD5E1] block mb-2 font-semibold">
                  DIVISION 01 &bull; CAPITAL CONTRACTING
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                  ENGINEERING &amp; CONSTRUCTION
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  Turnkey electromechanical contracting, commercial rooftop solar EPC under DEWA Shams Dubai, and factory type-tested switchboard assemblies.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>Explore division</span>
                  <IconArrow size="sm" color="white" interactive />
                </div>
              </div>
            </a>

            {/* Divisions 02 & 03: Facilities Management & Trading (5 Cols Stacked) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Division 02 */}
              <a
                href="/facilities-management"
                onClick={(e) => handleLink(e, '/facilities-management')}
                className="group relative rounded-[8px] overflow-hidden block flex-1 min-h-[260px] sm:min-h-[295px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-8 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src="/assets/images/project-chiller.jpg"
                  alt="Facilities Management"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/40 to-transparent pointer-events-none" />

                <div className="relative z-10 text-white">
                  <span className="text-[10.5px] uppercase tracking-[0.14em] text-[#CBD5E1] block mb-1 font-semibold">
                    DIVISION 02 &bull; ASSET STEWARDSHIP
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    FACILITIES MANAGEMENT
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-200 leading-relaxed font-normal">
                    24/7 predictive maintenance, central chiller plant overhauls, and live-plant energy retrofits.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore division</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>

              {/* Division 03 */}
              <a
                href="/trading"
                onClick={(e) => handleLink(e, '/trading')}
                className="group relative rounded-[8px] overflow-hidden block flex-1 min-h-[260px] sm:min-h-[295px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-8 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src="/assets/images/industry-logistics.jpg"
                  alt="Trading & Component Supply"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/40 to-transparent pointer-events-none" />

                <div className="relative z-10 text-white">
                  <span className="text-[10.5px] uppercase tracking-[0.14em] text-[#CBD5E1] block mb-1 font-semibold">
                    DIVISION 03 &bull; OEM PROCUREMENT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    TRADING &amp; COMPONENT SUPPLY
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-200 leading-relaxed font-normal">
                    Genuine OEM HVAC spare parts, low-harmonic VFDs, and Class-2 ultrasonic BTU metering.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore division</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 FEATURED PROJECT — MONUMENTAL ARCHITECTURAL SCALE
          - Massive image plate (aspect-[21/9] desktop) as primary design element
          - Project name, location, scope, simple view project link
          - Avoids enclosing box card
      ===================================================================== */}
      <section
        aria-label="Featured Project"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-12">
            <div>
              <span className="text-xs text-[#173C62] uppercase tracking-[0.14em] font-semibold block mb-2">
                03 &bull; FEATURED RECORD
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#173C62] tracking-tight">
                FLAGSHIP BUILT ENVIRONMENT DELIVERY
              </h2>
            </div>

            <a
              href="/projects"
              onClick={(e) => handleLink(e, '/projects')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none"
            >
              <span>Explore all project cases</span>
              <IconArrowUpRight size="sm" color="inherit" interactive />
            </a>
          </div>

          {/* Monumental Architectural Image Plate — Pure Image Scale */}
          <a
            href={`/projects/${featuredProject.slug}`}
            onClick={(e) => handleLink(e, `/projects/${featuredProject.slug}`)}
            className="group relative rounded-[8px] overflow-hidden block aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] bg-[#173C62] flex flex-col justify-end p-8 sm:p-12 lg:p-14 transition-all duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
          >
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/45 via-45% to-transparent pointer-events-none" />

            <div className="relative z-10 text-white max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#CBD5E1] font-semibold">
                  {featuredProject.categoryLabel} &bull; {featuredProject.location}
                </span>
                <span className="text-white/40">&bull;</span>
                <span className="text-[10.5px] uppercase tracking-wider text-[#CBD5E1] font-medium">
                  48 FLOORS
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.08]">
                {featuredProject.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl line-clamp-2">
                {featuredProject.scopeOverview}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                <span>View project case record</span>
                <IconArrow size="sm" color="white" interactive />
              </div>
            </div>

            {/* Delivery Parameters docked bottom-right */}
            <div className="hidden md:flex absolute bottom-8 sm:bottom-12 right-8 sm:right-12 z-10 flex-col items-end text-right text-xs text-white/80 space-y-1">
              <span className="text-[11px] text-[#CBD5E1] font-semibold tracking-wider uppercase">DELIVERY PARAMETERS</span>
              <span>48 FLOORS &bull; 3,200 TR DISTRICT COOLING</span>
              <span>100% FIRST-PASS CIVIL DEFENSE CLEARANCE</span>
            </div>
          </a>
        </div>
      </section>

      {/* =====================================================================
          05 CAPABILITIES — CLEAN TYPOGRAPHIC DIRECTORY
          - Replaces card grids with an open architectural typographic list
          - Pure typography, single divider hairlines, subtle hover translation
          - No boxes, no borders, no cards
      ===================================================================== */}
      <section
        aria-label="Engineering Capabilities"
        className="py-24 lg:py-32 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="max-w-xl mb-12 lg:mb-16">
            <span className="text-xs text-[#173C62] uppercase tracking-[0.14em] font-semibold block mb-2">
              04 &bull; CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#173C62] tracking-tight">
              DISCIPLINES IN PRACTICE
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              Integrated electromechanical, life-cycle stewardship, and equipment supply disciplines executing across UAE built environments.
            </p>
          </div>

          {/* Clean Typographic List — Zero Boxes, Zero Cards */}
          <div className="divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
            {capabilities.map((item) => (
              <a
                key={item.num}
                href={item.slug}
                onClick={(e) => handleLink(e, item.slug)}
                className="group py-6 sm:py-7 flex items-center justify-between transition-all duration-300 hover:pl-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="text-xs font-semibold text-[#94A3B8] group-hover:text-[#173C62] transition-colors">
                    {item.num}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                    <h3 className="text-lg sm:text-2xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors tracking-tight">
                      {item.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-wider text-[#64748B] font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="text-[#94A3B8] group-hover:text-[#173C62] group-hover:translate-x-1 transition-all flex items-center gap-1">
                  <IconArrow size="sm" color="inherit" interactive />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          06 STATISTICS — MONUMENTAL TYPOGRAPHY
          - Strictly verified LTS facts: 03 Divisions, 3,200 TR, 2.4 MWp, 24/7 Dispatch
          - Large typography (text-6xl to 8xl), thin top border
          - Zero metric cards, zero background fills
      ===================================================================== */}
      <section
        aria-label="Verified Evidence"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="border-t-2 border-[#173C62] pt-12 sm:pt-16">
            <div className="max-w-xl mb-12">
              <span className="text-xs text-[#173C62] uppercase tracking-[0.14em] font-semibold block mb-2">
                05 &bull; SCALE &amp; PROOF
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#173C62] tracking-tight">
                VERIFIED OPERATIONAL BENCHMARKS
              </h2>
            </div>

            {/* 4-Column Monumental Typography Grid — Zero Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              <div className="space-y-2">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#173C62] tracking-tight block">
                  03
                </span>
                <h3 className="text-sm font-semibold text-[#0B1320] tracking-wide uppercase">
                  Operating Divisions
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Engineering &amp; Construction, Facilities Management, and Technical Trading.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#173C62] tracking-tight block">
                  3,200 TR
                </span>
                <h3 className="text-sm font-semibold text-[#0B1320] tracking-wide uppercase">
                  Cooling Connected Load
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  District cooling hydronics across 48-storey high-rise commercial assets.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#173C62] tracking-tight block">
                  2.4 MWp
                </span>
                <h3 className="text-sm font-semibold text-[#0B1320] tracking-wide uppercase">
                  Commercial Solar PV EPC
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  DEWA Shams Dubai net-metered rooftop array generating 3.85 GWh annually.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#173C62] tracking-tight block">
                  24/7
                </span>
                <h3 className="text-sm font-semibold text-[#0B1320] tracking-wide uppercase">
                  Emergency Dispatch
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Dedicated electromechanical monitoring with under 15-minute SLA response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          07 PROJECTS GALLERY — VARIED IMAGE SCALES
          - 1 Dominant project plate (16:10, 7 cols)
          - 2 Supporting project plates (5 cols stacked)
          - 1 Horizontal project ledger banner
          - Avoids equal card repetition
      ===================================================================== */}
      <section
        aria-label="Project Gallery"
        className="py-24 lg:py-32 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-16">
            <div>
              <span className="text-xs text-[#173C62] uppercase tracking-[0.14em] font-semibold block mb-2">
                06 &bull; PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#173C62] tracking-tight">
                SELECTED PROJECT RECORDS
              </h2>
            </div>

            <a
              href="/projects"
              onClick={(e) => handleLink(e, '/projects')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none"
            >
              <span>View complete archive</span>
              <IconArrowUpRight size="sm" color="inherit" interactive />
            </a>
          </div>

          <div className="space-y-8 lg:space-y-10">
            {/* Asymmetric Split: 1 Dominant (7 cols) + 2 Supporting (5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Dominant Project (7 cols) */}
              <a
                href={`/projects/${dominantGalleryProject.slug}`}
                onClick={(e) => handleLink(e, `/projects/${dominantGalleryProject.slug}`)}
                className="lg:col-span-7 group relative rounded-[8px] overflow-hidden block min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-10 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={dominantGalleryProject.image}
                  alt={dominantGalleryProject.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/40 via-45% to-transparent pointer-events-none" />

                <div className="relative z-10 text-white max-w-xl">
                  <span className="text-[10.5px] uppercase tracking-[0.14em] text-[#CBD5E1] block mb-1.5 font-semibold">
                    {dominantGalleryProject.categoryLabel} &bull; {dominantGalleryProject.location}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug">
                    {dominantGalleryProject.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed line-clamp-2">
                    {dominantGalleryProject.scopeOverview}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>Examine solar EPC case</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>

              {/* Two Supporting Projects (5 cols stacked) */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                {/* Supporting 1 */}
                <a
                  href={`/projects/${supportingProject1.slug}`}
                  onClick={(e) => handleLink(e, `/projects/${supportingProject1.slug}`)}
                  className="group relative rounded-[8px] overflow-hidden block flex-1 min-h-[220px] sm:min-h-[250px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-8 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <img
                    src={supportingProject1.image}
                    alt={supportingProject1.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/40 to-transparent pointer-events-none" />

                  <div className="relative z-10 text-white">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#CBD5E1] block mb-1 font-semibold">
                      {supportingProject1.categoryLabel} &bull; {supportingProject1.location}
                    </span>
                    <h4 className="text-lg sm:text-xl font-light text-white tracking-tight">
                      {supportingProject1.title}
                    </h4>
                    <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                      <span>View case study</span>
                      <IconArrow size="sm" color="white" interactive />
                    </div>
                  </div>
                </a>

                {/* Supporting 2 */}
                <a
                  href={`/projects/${supportingProject2.slug}`}
                  onClick={(e) => handleLink(e, `/projects/${supportingProject2.slug}`)}
                  className="group relative rounded-[8px] overflow-hidden block flex-1 min-h-[220px] sm:min-h-[250px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-8 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <img
                    src={supportingProject2.image}
                    alt={supportingProject2.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/40 to-transparent pointer-events-none" />

                  <div className="relative z-10 text-white">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#CBD5E1] block mb-1 font-semibold">
                      {supportingProject2.categoryLabel} &bull; {supportingProject2.location}
                    </span>
                    <h4 className="text-lg sm:text-xl font-light text-white tracking-tight">
                      {supportingProject2.title}
                    </h4>
                    <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                      <span>View case study</span>
                      <IconArrow size="sm" color="white" interactive />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Horizontal Project Row / Archival Ledger Banner */}
            <a
              href={`/projects/${horizontalProject.slug}`}
              onClick={(e) => handleLink(e, `/projects/${horizontalProject.slug}`)}
              className="group rounded-[8px] bg-white border border-[#E5E7EB] hover:border-[#173C62] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src={horizontalProject.image}
                  alt={horizontalProject.title}
                  className="w-20 h-14 sm:w-28 sm:h-20 object-cover rounded-[6px] shrink-0 bg-slate-100"
                  loading="lazy"
                />
                <div className="space-y-1">
                  <span className="text-[10.5px] uppercase tracking-[0.14em] text-[#173C62] font-semibold block">
                    {horizontalProject.categoryLabel} &bull; {horizontalProject.location}
                  </span>
                  <h4 className="text-base sm:text-lg font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
                    {horizontalProject.title}
                  </h4>
                  <p className="text-xs text-[#64748B] hidden md:block">
                    {horizontalProject.scopeOverview}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#173C62] shrink-0 self-end sm:self-center">
                <span>View project case</span>
                <IconArrow size="sm" color="inherit" interactive />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          08 OPERATING SECTORS — ASYMMETRIC EDITORIAL MASONRY
          - Image-led industry tiles with varied aspect ratios
          - Masonry composition (replaces generic horizontal cards)
          - Direct navigation to /industries
      ===================================================================== */}
      <section
        aria-label="Operating Sectors"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-16">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs text-[#173C62] uppercase tracking-[0.14em] font-semibold block">
                07 &bull; SECTOR EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#173C62] tracking-tight">
                Calibrated for mission-critical sectors.
              </h2>
            </div>

            <a
              href="/industries"
              onClick={(e) => handleLink(e, '/industries')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none"
            >
              <span>Explore all industries</span>
              <IconArrowUpRight size="sm" color="inherit" interactive />
            </a>
          </div>

          {/* Asymmetric Editorial Masonry Grid — Varied Heights & Aspect Ratios */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Sector 1: Commercial Towers (6 cols, 4/5 portrait ratio) */}
            <div
              onClick={() => onNavigate('/industries')}
              className="md:col-span-6 group relative cursor-pointer aspect-[4/3] sm:aspect-[4/5] rounded-[8px] overflow-hidden bg-[#173C62] transition-all duration-300"
            >
              <img
                src="/assets/images/industry-commercial.jpg"
                alt="Commercial High-Rises & Towers"
                className="w-full h-full object-cover object-center filter brightness-[0.95] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/60 via-45% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-left z-10 space-y-1.5 text-white">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#CBD5E1] font-semibold block">
                  SECTOR 01 &bull; HIGH-DENSITY VERTICAL
                </span>
                <h3 className="text-xl sm:text-3xl font-light text-white tracking-tight leading-snug">
                  Commercial High-Rises &amp; Towers
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed max-w-md pt-1">
                  High-density vertical busways, 3,200 TR district cooling hydronics, and certified smoke pressurization.
                </p>
              </div>
            </div>

            {/* Sector 2: Healthcare & Sterile Environments (6 cols, 4/5 portrait ratio) */}
            <div
              onClick={() => onNavigate('/industries')}
              className="md:col-span-6 group relative cursor-pointer aspect-[4/3] sm:aspect-[4/5] rounded-[8px] overflow-hidden bg-[#173C62] transition-all duration-300"
            >
              <img
                src="/assets/images/industry-healthcare.jpg"
                alt="Healthcare & Sterile Environments"
                className="w-full h-full object-cover object-center filter brightness-[0.95] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/60 via-45% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-left z-10 space-y-1.5 text-white">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#CBD5E1] font-semibold block">
                  SECTOR 02 &bull; MISSION-CRITICAL LIFE SAFETY
                </span>
                <h3 className="text-xl sm:text-3xl font-light text-white tracking-tight leading-snug">
                  Healthcare &amp; Sterile Facilities
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed max-w-md pt-1">
                  HTM 03-01 cleanroom ventilation, medical gas piping, and isolated hospital power networks.
                </p>
              </div>
            </div>

            {/* Sector 3: Industrial Logistics (6 cols, 16/10 ratio) */}
            <div
              onClick={() => onNavigate('/industries')}
              className="md:col-span-6 group relative cursor-pointer aspect-[16/10] rounded-[8px] overflow-hidden bg-[#173C62] transition-all duration-300"
            >
              <img
                src="/assets/images/industry-logistics.jpg"
                alt="Industrial & Logistics Facilities"
                className="w-full h-full object-cover object-center filter brightness-[0.95] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/60 via-45% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col justify-end text-left z-10 space-y-1 text-white">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#CBD5E1] font-semibold block">
                  SECTOR 03 &bull; HEAVY INDUSTRIAL
                </span>
                <h3 className="text-lg sm:text-2xl font-light text-white tracking-tight">
                  Industrial &amp; Logistics Hubs
                </h3>
                <p className="text-xs text-slate-200 font-normal leading-relaxed max-w-sm pt-0.5">
                  High-capacity motor control centers, 11kV substations, and rooftop solar arrays.
                </p>
              </div>
            </div>

            {/* Sector 4: Hospitality & Master Communities (6 cols, 16/10 ratio) */}
            <div
              onClick={() => onNavigate('/industries')}
              className="md:col-span-6 group relative cursor-pointer aspect-[16/10] rounded-[8px] overflow-hidden bg-[#173C62] transition-all duration-300"
            >
              <img
                src="/assets/images/industry-hospitality.jpg"
                alt="Hospitality & Master Communities"
                className="w-full h-full object-cover object-center filter brightness-[0.95] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/60 via-45% to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col justify-end text-left z-10 space-y-1 text-white">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#CBD5E1] font-semibold block">
                  SECTOR 04 &bull; RESIDENTIAL &amp; AQUATIC
                </span>
                <h3 className="text-lg sm:text-2xl font-light text-white tracking-tight">
                  Hospitality &amp; Communities
                </h3>
                <p className="text-xs text-slate-200 font-normal leading-relaxed max-w-sm pt-0.5">
                  Centralized water boosting, aquatic filtration hygiene, and comprehensive hard FM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          09 CLIENTS & STATUTORY GOVERNANCE — CLEAN LOGO STRIP
          - Clean institutional authority strip
          - DEWA, DCD, DM, IEC
          - Zero bordered boxes, zero card backgrounds
      ===================================================================== */}
      <section
        aria-label="Statutory Governance"
        className="py-20 lg:py-28 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="border-t-2 border-[#173C62] pt-12">
            <div className="max-w-xl mb-12">
              <span className="text-xs text-[#173C62] uppercase tracking-[0.14em] font-semibold block mb-2">
                08 &bull; GOVERNANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#173C62] tracking-tight">
                STATUTORY CODE CLEARANCES &amp; PREQUALIFICATIONS
              </h2>
            </div>

            {/* Clean Institutional Strip — Zero Boxed Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              <div className="space-y-2 text-left">
                <span className="text-2xl sm:text-3xl font-semibold text-[#173C62] tracking-wider block">
                  DEWA
                </span>
                <h3 className="text-sm font-medium text-[#0B1320] leading-snug">
                  Dubai Electricity &amp; Water Authority
                </h3>
                <p className="text-xs text-[#64748B] font-normal leading-relaxed">
                  11kV substation clearances &amp; Shams Dubai solar PV EPC certified accreditation.
                </p>
              </div>

              <div className="space-y-2 text-left">
                <span className="text-2xl sm:text-3xl font-semibold text-[#173C62] tracking-wider block">
                  DCD
                </span>
                <h3 className="text-sm font-medium text-[#0B1320] leading-snug">
                  Dubai Civil Defense
                </h3>
                <p className="text-xs text-[#64748B] font-normal leading-relaxed">
                  Fire life-safety, stairwell smoke pressurization &amp; emergency extract clearances.
                </p>
              </div>

              <div className="space-y-2 text-left">
                <span className="text-2xl sm:text-3xl font-semibold text-[#173C62] tracking-wider block">
                  DM
                </span>
                <h3 className="text-sm font-medium text-[#0B1320] leading-snug">
                  Dubai Municipality
                </h3>
                <p className="text-xs text-[#64748B] font-normal leading-relaxed">
                  Building hydraulics, potable water skids, aquatic health &amp; municipal clearances.
                </p>
              </div>

              <div className="space-y-2 text-left">
                <span className="text-2xl sm:text-3xl font-semibold text-[#173C62] tracking-wider block">
                  IEC
                </span>
                <h3 className="text-sm font-medium text-[#0B1320] leading-snug">
                  International Electrotechnical Commission
                </h3>
                <p className="text-xs text-[#64748B] font-normal leading-relaxed">
                  IEC 61439 Form-4 type-tested low-voltage switchgear assemblies up to 65kA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          10 NEWS & BRIEFINGS — 1 LARGE FEATURED + 2 SMALLER SUPPORTING
          - Left (7 cols): Large featured technical dispatch with 16:10 photograph
          - Right (5 cols): Two smaller supporting stories in compact editorial format
          - Zero identical cards
      ===================================================================== */}
      <section
        aria-label="News and Briefings"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-16">
            <div>
              <span className="text-xs text-[#173C62] uppercase tracking-[0.14em] font-semibold block mb-2">
                09 &bull; BRIEFINGS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#173C62] tracking-tight">
                ENGINEERING INTELLIGENCE
              </h2>
            </div>

            <a
              href="/news"
              onClick={(e) => handleLink(e, '/news')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none"
            >
              <span>View all briefings</span>
              <IconArrow size="sm" color="inherit" interactive />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Featured Lead Story (7 cols) */}
            <a
              href={`/news/${featuredArticle.slug}`}
              onClick={(e) => handleLink(e, `/news/${featuredArticle.slug}`)}
              className="lg:col-span-7 group relative rounded-[8px] overflow-hidden block min-h-[420px] sm:min-h-[500px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/45 to-transparent pointer-events-none" />

              <div className="relative z-10 text-white max-w-lg">
                <span className="text-[11px] uppercase tracking-[0.14em] text-[#CBD5E1] block mb-2 font-semibold">
                  {featuredArticle.category} &bull; {featuredArticle.date}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug">
                  {featuredArticle.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal line-clamp-2">
                  {featuredArticle.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>Read technical briefing</span>
                  <IconArrow size="sm" color="white" interactive />
                </div>
              </div>
            </a>

            {/* Two Supporting Previews (5 cols stacked) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <a
                href={`/news/${supportingArticle1.slug}`}
                onClick={(e) => handleLink(e, `/news/${supportingArticle1.slug}`)}
                className="group relative rounded-[8px] overflow-hidden block flex-1 min-h-[220px] sm:min-h-[235px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingArticle1.image}
                  alt={supportingArticle1.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/40 to-transparent pointer-events-none" />

                <div className="relative z-10 text-white">
                  <span className="text-[10.5px] uppercase tracking-[0.14em] text-[#CBD5E1] block mb-1 font-semibold">
                    {supportingArticle1.category} &bull; {supportingArticle1.date}
                  </span>
                  <h4 className="text-base sm:text-lg font-light text-white tracking-tight line-clamp-2">
                    {supportingArticle1.title}
                  </h4>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>Read briefing</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>

              <a
                href={`/news/${supportingArticle2.slug}`}
                onClick={(e) => handleLink(e, `/news/${supportingArticle2.slug}`)}
                className="group relative rounded-[8px] overflow-hidden block flex-1 min-h-[220px] sm:min-h-[235px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingArticle2.image}
                  alt={supportingArticle2.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/40 to-transparent pointer-events-none" />

                <div className="relative z-10 text-white">
                  <span className="text-[10.5px] uppercase tracking-[0.14em] text-[#CBD5E1] block mb-1 font-semibold">
                    {supportingArticle2.category} &bull; {supportingArticle2.date}
                  </span>
                  <h4 className="text-base sm:text-lg font-light text-white tracking-tight line-clamp-2">
                    {supportingArticle2.title}
                  </h4>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>Read briefing</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          11 FINAL CTA — SINGULAR CONFIDENT ARCHITECTURAL STATEMENT
          - LTS Blue statement: LET'S BUILD WHAT'S NEXT.
          - 1 concise supporting sentence
          - 1 primary button + direct contact lines
          - Singular finish; no repeated CTA blocks elsewhere on page
      ===================================================================== */}
      <section
        aria-label="Direct Commercial Consultation"
        className="relative py-24 lg:py-36 bg-[#173C62] text-white overflow-hidden text-left"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/assets/images/hero-building.jpg"
            alt="LTS Consultation"
            className="w-full h-full object-cover object-center opacity-15"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/85 to-[#173C62]/70" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-xs text-[#CBD5E1] uppercase tracking-[0.14em] font-semibold block mb-4">
              10 &bull; ENGAGEMENT
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05]">
              LET&apos;S BUILD WHAT&apos;S NEXT.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-xl">
              Connect directly with our Dubai estimating engineers and technical directors for tenders, solar feasibility, or facility management agreements.
            </p>

            <div className="mt-8">
              <Button
                variant="white"
                size="md"
                shape="rounded"
                onClick={() => onNavigate('/contact')}
                className="text-[12px] tracking-[0.06em] px-7 min-h-[44px]"
              >
                Initiate Commercial Review →
              </Button>
            </div>

            <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap gap-8 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2.5">
                <IconPhone size="sm" color="white" />
                <a
                  href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center"
                >
                  <span>{CORPORATE_INFO.contact.telephone} (24/7 Dispatch)</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <IconEmail size="sm" color="white" />
                <a
                  href={`mailto:${CORPORATE_INFO.contact.emailGeneral}`}
                  className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center"
                >
                  <span>{CORPORATE_INFO.contact.emailGeneral}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

