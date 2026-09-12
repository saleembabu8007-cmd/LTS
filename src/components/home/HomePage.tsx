import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Wrench,
  Layers,
  Cpu,
  Sun,
  Activity,
  Droplets,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { Button } from '../../design-system/atoms/Button';
import { PROJECTS_DATA } from '../../data/projectsData';
import { NEWS_DATA } from '../../data/newsData';
import { CORPORATE_INFO } from '../../data/corporateData';

interface HomePageProps {
  onNavigate: (slug: string) => void;
}

/**
 * LTSGROUP Homepage
 * Conforms strictly to the 10-Stage Editorial Narrative:
 * 01 HERO
 * 02 WHO LTSGROUP IS
 * 03 BUSINESS AREAS
 * 04 CAPABILITIES / SERVICES
 * 05 FEATURED PROJECTS
 * 06 INDUSTRIES
 * 07 WHY LTSGROUP / APPROACH
 * 08 CLIENTS / GOVERNANCE
 * 09 NEWS / INSIGHTS
 * 10 FINAL CTA
 */
export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Verified project monographs
  const featuredProject = PROJECTS_DATA[0]; // Commercial High-Rise MEP Installation
  const supportingProject1 = PROJECTS_DATA[1]; // Logistics Facility Rooftop Solar PV
  const supportingProject2 = PROJECTS_DATA[2]; // Healthcare Facility Hard Services

  // Verified technical briefings
  const featuredArticle = NEWS_DATA[0];
  const supportingArticle1 = NEWS_DATA[1];
  const supportingArticle2 = NEWS_DATA[2];

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    onNavigate(slug);
  };

  return (
    <main className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white">
      {/* =====================================================================
          01 HERO
          - Full-bleed engineering imagery (~85vh)
          - Directional gradient scrim
          - Lower-left quiet content anchor
          - Eyebrow, large headline, short supporting statement, primary & secondary CTA
      ===================================================================== */}
      <section
        aria-label="LTSGROUP Hero"
        className="relative min-h-[84vh] lg:min-h-[88vh] flex items-end overflow-hidden bg-[#0B1C2F]"
      >
        {/* Full-Bleed Background Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-building.jpg"
            alt="LTSGROUP Built Environment Architecture"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Refined directional scrims: rich in lower-left, gentle across image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/60 to-[#0B1C2F]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2F]/85 via-[#0B1C2F]/35 to-transparent" />
        </div>

        {/* Lower-Left Quiet Content Anchor */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-22 pt-32">
          <div className="max-w-2xl text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#CBD5E1]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-200 font-semibold">
                LTSGROUP &bull; BUILT ENVIRONMENT ENGINEERING
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-[1.12]">
              Engineering environments built to perform.
            </h1>

            {/* Supporting Statement (1-2 sentences maximum) */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Turnkey electromechanical contracting, life-cycle facility operations, and specialized technical supply across the United Arab Emirates.
            </p>

            {/* Action Group */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate('/engineering-construction')}
                className="text-[12px] tracking-[0.06em] px-5 sm:px-6 min-h-[44px]"
              >
                Explore capabilities →
              </Button>

              <a
                href="/projects"
                onClick={(e) => handleLink(e, '/projects')}
                className="group inline-flex items-center gap-2 text-[13px] text-white hover:text-slate-200 font-medium transition-colors py-2 px-1 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[4px]"
              >
                <span>View projects</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02 WHO LTSGROUP IS
          - Open editorial section (no giant card)
          - Small eyebrow, strong heading, 2-3 sentence maximum, text link CTA
          - Asymmetric 7/5 split with supporting technical photography
      ===================================================================== */}
      <section
        aria-label="About LTSGROUP"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Editorial Statement (7 cols) */}
            <div className="lg:col-span-7 text-left space-y-5">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#173C62]" />
                <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold">
                  01 / WHO WE ARE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-snug">
                Single-source electromechanical accountability across the complete building lifecycle.
              </h2>

              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal pt-1">
                LTSGROUP unifies turnkey electromechanical contracting, continuous facilities management, and authorized OEM equipment supply under strict statutory governance in Dubai. By eliminating contractor fragmentation between initial installation and multi-decade maintenance, we ensure built assets perform with unbroken thermodynamic and electrical reliability.
              </p>

              <div className="pt-3">
                <a
                  href="/about-us"
                  onClick={(e) => handleLink(e, '/about-us')}
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px]"
                >
                  <span>About LTSGROUP &amp; Governance</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right: Focused Technical Visual (5 cols, 16px soft radius) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-[#0B1C2F] shadow-[0_12px_32px_-12px_rgba(11,28,47,0.12)]">
                <img
                  src="/assets/images/engineering-intro.jpg"
                  alt="Precision electromechanical installations by LTSGROUP"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-200">
                    Electromechanical Infrastructure &bull; Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 BUSINESS AREAS
          - 3 clear business pillars: Engineering & Construction, FM, Trading
          - Asymmetric 1 dominant + 2 supporting structure
          - Different image crops, consistent component structure, 18px soft radius
      ===================================================================== */}
      <section
        aria-label="Core Business Divisions"
        className="py-20 lg:py-28 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-xl text-left mb-10 lg:mb-12">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
              02 / OPERATING DIVISIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
              Three pillars of built-environment infrastructure.
            </h2>
          </div>

          {/* Asymmetric Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* DOMINANT PILLAR: Engineering & Construction (7 Columns) */}
            <a
              href="/engineering-construction"
              onClick={(e) => handleLink(e, '/engineering-construction')}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden cursor-pointer min-h-[340px] sm:min-h-[440px] lg:min-h-[520px] bg-[#0B1C2F] flex flex-col justify-end p-5 sm:p-7 md:p-10 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none"
            >
              <img
                src="/assets/images/mep-construction.jpg"
                alt="Engineering & Construction Division"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-left text-white max-w-lg">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  DIVISION 01
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-white tracking-tight">
                  Engineering &amp; Construction
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Turnkey MEP contracting, commercial rooftop solar PV EPC under DEWA Shams Dubai, and type-tested low-voltage control switchgear assembly.
                </p>
                <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>Explore division</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* TWO SUPPORTING PILLARS (5 Columns Stacked) */}
            <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 lg:gap-8">
              {/* SUPPORTING PILLAR 1: Facilities Management */}
              <a
                href="/facilities-management"
                onClick={(e) => handleLink(e, '/facilities-management')}
                className="group relative rounded-[18px] overflow-hidden cursor-pointer min-h-[220px] sm:min-h-[240px] flex-1 bg-[#0B1C2F] flex flex-col justify-end p-5 sm:p-6 md:p-8 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none"
              >
                <img
                  src="/assets/images/project-chiller.jpg"
                  alt="Facilities Management Division"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-left text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    DIVISION 02
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-white tracking-tight">
                    Facilities Management
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                    24/7 hard MEP engineering, predictive central chiller plant maintenance, aquatic hygiene, and live-plant zero-downtime retrofits.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore division</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* SUPPORTING PILLAR 2: Trading */}
              <a
                href="/trading"
                onClick={(e) => handleLink(e, '/trading')}
                className="group relative rounded-[18px] overflow-hidden cursor-pointer min-h-[220px] sm:min-h-[240px] flex-1 bg-[#0B1C2F] flex flex-col justify-end p-5 sm:p-6 md:p-8 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none"
              >
                <img
                  src="/assets/images/industry-logistics.jpg"
                  alt="Trading Division"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-left text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    DIVISION 03
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                    Trading &amp; Component Supply
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed font-normal">
                    Regional distribution of genuine OEM HVAC spare parts, variable frequency drives, smart ultrasonic BTU heat meters, and EV chargers.
                  </p>
                  <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore division</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 CAPABILITIES / SERVICES
          - Editorial grouped disciplines underneath business areas (no card walls)
          - Column 1: Engineering & Construction (MEP, Solar, Switchgear)
          - Column 2: Facilities Management (Hard Services, Soft Services, Retrofits)
          - Column 3: Trading (Spares, Controls, Metering, Lights, EV)
      ===================================================================== */}
      <section
        aria-label="Capabilities and Scope"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Intro */}
          <div className="max-w-xl text-left mb-12 lg:mb-14">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
              03 / CAPABILITY ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
              Specialized electromechanical disciplines.
            </h2>
            <p className="mt-3 text-sm text-[#4A5568] leading-relaxed">
              Every division operates with dedicated engineering teams, specialized tools, and direct statutory clearance compliance.
            </p>
          </div>

          {/* 3 Clean Editorial Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-left">
            {/* Column 1: Engineering & Construction */}
            <div className="space-y-6">
              <div className="border-b border-[#E5E7EB] pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#64748B] block">
                  CAPABILITY 01
                </span>
                <h3 className="text-xl font-medium text-[#0B1320] mt-1">
                  Engineering &amp; Construction
                </h3>
              </div>

              <div className="space-y-3.5">
                <a
                  href="/engineering-construction/mep"
                  onClick={(e) => handleLink(e, '/engineering-construction/mep')}
                  className="group block p-3 -m-3 rounded-[8px] hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      MEP Contracting
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#173C62] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Commercial towers, residential developments, and infrastructure power networks.
                  </p>
                </a>

                <a
                  href="/engineering-construction/solar"
                  onClick={(e) => handleLink(e, '/engineering-construction/solar')}
                  className="group block p-3 -m-3 rounded-[8px] hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      Solar Solutions (EPC)
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#173C62] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Rooftop, carport, and ground-mount PV under DEWA Shams Dubai net-metering.
                  </p>
                </a>

                <a
                  href="/engineering-construction/control-switchgear"
                  onClick={(e) => handleLink(e, '/engineering-construction/control-switchgear')}
                  className="group block p-3 -m-3 rounded-[8px] hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      Control Switchgear
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#173C62] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Form-4 type-tested low-voltage distribution boards, MCCs, and ATS panels.
                  </p>
                </a>
              </div>
            </div>

            {/* Column 2: Facilities Management */}
            <div className="space-y-6">
              <div className="border-b border-[#E5E7EB] pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#64748B] block">
                  CAPABILITY 02
                </span>
                <h3 className="text-xl font-medium text-[#0B1320] mt-1">
                  Facilities Management
                </h3>
              </div>

              <div className="space-y-3.5">
                <a
                  href="/facilities-management/hard-services"
                  onClick={(e) => handleLink(e, '/facilities-management/hard-services')}
                  className="group block p-3 -m-3 rounded-[8px] hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      Hard Services
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#173C62] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Continuous PPM for central chillers, electrical switchrooms, BMS, and hydraulics.
                  </p>
                </a>

                <a
                  href="/facilities-management/soft-services"
                  onClick={(e) => handleLink(e, '/facilities-management/soft-services')}
                  className="group block p-3 -m-3 rounded-[8px] hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      Soft Services &bull; Pools
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#173C62] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Commercial aquatic care, automated dosing balancing, and Dubai Municipality standards.
                  </p>
                </a>

                <a
                  href="/facilities-management/retrofits"
                  onClick={(e) => handleLink(e, '/facilities-management/retrofits')}
                  className="group block p-3 -m-3 rounded-[8px] hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      Plant Retrofits &bull; Overhauls
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#173C62] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Live-building phased chiller replacements, VFD conversions, and energy optimization.
                  </p>
                </a>
              </div>
            </div>

            {/* Column 3: Trading & Supply */}
            <div className="space-y-6">
              <div className="border-b border-[#E5E7EB] pb-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#64748B] block">
                  CAPABILITY 03
                </span>
                <h3 className="text-xl font-medium text-[#0B1320] mt-1">
                  Trading &amp; Component Supply
                </h3>
              </div>

              <div className="space-y-3.5">
                <a
                  href="/trading/hvac"
                  onClick={(e) => handleLink(e, '/trading/hvac')}
                  className="group block p-3 -m-3 rounded-[8px] hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      HVAC Spare Parts
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#173C62] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    OEM semi-hermetic compressors, condenser coils, valves, and refrigerant gases.
                  </p>
                </a>

                <a
                  href="/trading/controls-vfds"
                  onClick={(e) => handleLink(e, '/trading/controls-vfds')}
                  className="group block p-3 -m-3 rounded-[8px] hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      Controls &amp; VFDs
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#173C62] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Low-harmonic variable frequency drives, soft starters, and intelligent transducers.
                  </p>
                </a>

                <a
                  href="/trading/metering"
                  onClick={(e) => handleLink(e, '/trading/metering')}
                  className="group block p-3 -m-3 rounded-[8px] hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      Metering, Lights &amp; EV
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#173C62] transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Ultrasonic BTU meters, industrial LED luminaires, and commercial EV fast chargers.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          05 FEATURED PROJECTS
          - Deep navy architectural canvas (#0B1C2F)
          - 1 large dominant project + 2 smaller supporting projects
          - Real verified project monographs only
      ===================================================================== */}
      <section
        aria-label="Featured Projects"
        className="py-20 lg:py-28 bg-[#0B1C2F] text-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
            <div>
              <span className="text-[11px] font-mono text-[#CBD5E1] uppercase tracking-[0.2em] font-semibold block mb-2">
                04 / VERIFIED PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                Engineering in execution.
              </h2>
            </div>
            <a
              href="/projects"
              onClick={(e) => handleLink(e, '/projects')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] rounded-[4px]"
            >
              <span>Explore all projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 1 Dominant (7 cols) + 2 Supporting (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* DOMINANT PROJECT CARD */}
            <a
              href={`/projects/${featuredProject.slug}`}
              onClick={(e) => handleLink(e, `/projects/${featuredProject.slug}`)}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden block min-h-[380px] sm:min-h-[480px] bg-[#0B1320] flex flex-col justify-end p-7 sm:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
            >
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/95 via-[#0B1320]/45 to-transparent" />

              <div className="relative z-10 text-left text-white max-w-lg">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  {featuredProject.categoryLabel} &bull; {featuredProject.location}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  {featuredProject.scopeOverview}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>View case details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* TWO SUPPORTING PROJECT CARDS */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Supporting Project 1: Solar */}
              <a
                href={`/projects/${supportingProject1.slug}`}
                onClick={(e) => handleLink(e, `/projects/${supportingProject1.slug}`)}
                className="group relative rounded-[18px] overflow-hidden block flex-1 min-h-[220px] bg-[#0B1320] flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
              >
                <img
                  src={supportingProject1.image}
                  alt={supportingProject1.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/95 via-[#0B1320]/45 to-transparent" />

                <div className="relative z-10 text-left text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    {supportingProject1.categoryLabel} &bull; {supportingProject1.location}
                  </span>
                  <h4 className="text-lg font-medium text-white tracking-tight">
                    {supportingProject1.title}
                  </h4>
                  <div className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>View project</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* Supporting Project 2: FM Overhaul */}
              <a
                href={`/projects/${supportingProject2.slug}`}
                onClick={(e) => handleLink(e, `/projects/${supportingProject2.slug}`)}
                className="group relative rounded-[18px] overflow-hidden block flex-1 min-h-[220px] bg-[#0B1320] flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
              >
                <img
                  src={supportingProject2.image}
                  alt={supportingProject2.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/95 via-[#0B1320]/45 to-transparent" />

                <div className="relative z-10 text-left text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    {supportingProject2.categoryLabel} &bull; {supportingProject2.location}
                  </span>
                  <h4 className="text-lg font-medium text-white tracking-tight">
                    {supportingProject2.title}
                  </h4>
                  <div className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>View project</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          06 INDUSTRIES
          - Restrained 3-column architectural list / subtle cards
          - Only approved LTSGROUP sectors
          - Simple typography with clear engineering use cases
      ===================================================================== */}
      <section
        aria-label="Industry Sectors"
        className="py-20 lg:py-28 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
                05 / SECTOR EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
                Calibrated for mission-critical built environments.
              </h2>
            </div>
            <a
              href="/industries"
              onClick={(e) => handleLink(e, '/industries')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px]"
            >
              <span>Explore all industries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Restrained 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              {
                num: '01',
                title: 'Commercial Towers & Offices',
                scope: 'High-density vertical busways, 3,200 TR central hydronics, and stairwell pressurization.',
                slug: '/industries',
              },
              {
                num: '02',
                title: 'Residential Master Developments',
                scope: 'Potable water booster skids, community switchgear networks, and aquatic leisure care.',
                slug: '/industries',
              },
              {
                num: '03',
                title: 'Healthcare & Clinical Facilities',
                scope: 'Cleanroom HTM air handling units, medical gas infrastructure, and isolated backup circuits.',
                slug: '/industries',
              },
              {
                num: '04',
                title: 'Industrial Facilities & Logistics',
                scope: 'Heavy motor control centers (MCC), 11kV transformer tie-ins, and turnkey rooftop solar PV.',
                slug: '/industries',
              },
              {
                num: '05',
                title: 'Retail & Hospitality Destinations',
                scope: 'Sound-attenuated fan coil units, commercial kitchen extract, and dynamic BTU balancing.',
                slug: '/industries',
              },
              {
                num: '06',
                title: 'Public Infrastructure & Utilities',
                scope: 'Municipal pumping stations, drainage lift infrastructure, and statutory utility compliance.',
                slug: '/industries',
              },
            ].map((sector) => (
              <a
                key={sector.title}
                href={sector.slug}
                onClick={(e) => handleLink(e, sector.slug)}
                className="group p-6 rounded-[14px] bg-white border border-[#E5E7EB] hover:border-[#173C62] transition-colors flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-[0.18em] block mb-2">
                    SECTOR {sector.num}
                  </span>
                  <h3 className="text-lg font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#4A5568] leading-relaxed">
                    {sector.scope}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11.5px] font-semibold text-[#173C62]">
                  <span>Sector Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          07 WHY LTSGROUP / APPROACH
          - Actual capabilities and verified information (no marketing fluff)
          - 4 structured capability pillars:
            01 Integrated capabilities
            02 Engineering + execution
            03 Facilities lifecycle support
            04 Technical supply
      ===================================================================== */}
      <section
        aria-label="Approach and Methodology"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Doctrine Narrative (5 cols) */}
            <div className="lg:col-span-5 text-left space-y-5 lg:pr-6">
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block">
                06 / OPERATING DOCTRINE
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-snug">
                Single-source accountability eliminates multi-vendor failure.
              </h2>

              <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
                Most built environments suffer from disconnected handoffs: contractors complete installation without long-term operational empathy, maintenance providers lack deep engineering insight, and component replacement suffers from third-party supply chain delays.
              </p>

              <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
                LTSGROUP unifies turnkey electromechanical contracting, continuous facilities management, and authorized OEM trading under a singular engineering governance model.
              </p>

              <div className="pt-2">
                <a
                  href="/about-us"
                  onClick={(e) => handleLink(e, '/about-us')}
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px]"
                >
                  <span>Learn about our governance</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Column: 4 Capability Pillars (7 cols, 2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="p-6 rounded-[14px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-2.5">
                <span className="text-xs font-mono font-bold text-[#173C62] block">
                  01
                </span>
                <h3 className="text-[16px] font-medium text-[#0B1320]">
                  Integrated Capabilities
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Complete electromechanical spectrum spanning mechanical hydronics, electrical distribution, and digital BMS controls under one roof.
                </p>
              </div>

              <div className="p-6 rounded-[14px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-2.5">
                <span className="text-xs font-mono font-bold text-[#173C62] block">
                  02
                </span>
                <h3 className="text-[16px] font-medium text-[#0B1320]">
                  Engineering + Execution
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Authority-approved engineering design synchronized with certified on-site installation and factory-tested Form-4 low-voltage switchgear.
                </p>
              </div>

              <div className="p-6 rounded-[14px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-2.5">
                <span className="text-xs font-mono font-bold text-[#173C62] block">
                  03
                </span>
                <h3 className="text-[16px] font-medium text-[#0B1320]">
                  Facilities Lifecycle Support
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Decades of operational asset care with guaranteed SLAs, continuous chiller optimization, and live-plant zero-downtime retrofits.
                </p>
              </div>

              <div className="p-6 rounded-[14px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-2.5">
                <span className="text-xs font-mono font-bold text-[#173C62] block">
                  04
                </span>
                <h3 className="text-[16px] font-medium text-[#0B1320]">
                  Technical Component Supply
                </h3>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Factory-authorized wholesale distribution providing verified OEM spares, VFDs, and smart BTU meters with direct technical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          08 CLIENTS / AUTHORITY GOVERNANCE
          - Clean, restrained authority credentials grid
          - DEWA, Dubai Civil Defense, Dubai Municipality, ISO Standards
          - Zero invented client logos
      ===================================================================== */}
      <section
        aria-label="Statutory Clearances and Governance"
        className="py-16 lg:py-20 bg-[#F8FAFC] border-y border-[#E5E7EB]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 text-left">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-1">
                07 / STATUTORY COMPLIANCE
              </span>
              <h2 className="text-xl sm:text-2xl font-light text-[#0B1320] tracking-tight">
                Accredited authority clearances across the UAE.
              </h2>
            </div>
            <a
              href="/clients"
              onClick={(e) => handleLink(e, '/clients')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded"
            >
              <span>Explore statutory clearances</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Clean 4-Column Restrained Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {[
              {
                code: 'DEWA APPROVED',
                authority: 'Dubai Electricity & Water Authority',
                scope: 'Substation works, LV switchgear submittals & Shams Dubai solar PV net-metering.',
              },
              {
                code: 'DCD CERTIFIED',
                authority: 'Dubai Civil Defense',
                scope: 'Fire life-safety systems, stairwell smoke pressurization & statutory inspections.',
              },
              {
                code: 'DUBAI MUNICIPALITY',
                authority: 'DM Public Health & Hydraulics',
                scope: 'Potable water storage hygiene, drainage lift infrastructure & aquatic water chemistry.',
              },
              {
                code: 'ISO CERTIFIED',
                authority: 'Integrated Management Systems',
                scope: 'Independently audited ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 governance.',
              },
            ].map((auth) => (
              <div
                key={auth.code}
                className="p-5 rounded-[12px] bg-white border border-[#E5E7EB] space-y-2"
              >
                <span className="text-[10.5px] font-mono font-bold text-[#173C62] uppercase tracking-wider block">
                  {auth.code}
                </span>
                <h3 className="text-sm font-medium text-[#0B1320]">
                  {auth.authority}
                </h3>
                <p className="text-[11.5px] text-[#64748B] leading-relaxed">
                  {auth.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          09 NEWS / INSIGHTS
          - One featured article + two compact previews
          - Verified news data from NEWS_DATA
          - Avoid 6-card blog grid
      ===================================================================== */}
      <section
        aria-label="Technical Briefings and News"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
                08 / TECHNICAL BRIEFINGS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
                Engineering intelligence.
              </h2>
            </div>
            <a
              href="/news"
              onClick={(e) => handleLink(e, '/news')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px]"
            >
              <span>View all briefings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 1 Large Featured Article + 2 Smaller Supporting Previews */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Featured Article (7 cols) */}
            <a
              href={`/news/${featuredArticle.slug}`}
              onClick={(e) => handleLink(e, `/news/${featuredArticle.slug}`)}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden block min-h-[360px] sm:min-h-[440px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-left text-white max-w-lg">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  {featuredArticle.category} &bull; {featuredArticle.date}
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                  {featuredArticle.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {featuredArticle.summary}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>Read technical briefing</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* Two Supporting Previews (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Supporting Article 1 */}
              <a
                href={`/news/${supportingArticle1.slug}`}
                onClick={(e) => handleLink(e, `/news/${supportingArticle1.slug}`)}
                className="group relative rounded-[16px] overflow-hidden block flex-1 min-h-[190px] bg-[#0B1C2F] flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingArticle1.image}
                  alt={supportingArticle1.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-left text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    {supportingArticle1.category} &bull; {supportingArticle1.date}
                  </span>
                  <h4 className="text-base font-medium text-white tracking-tight line-clamp-2">
                    {supportingArticle1.title}
                  </h4>
                  <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>Read briefing</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* Supporting Article 2 */}
              <a
                href={`/news/${supportingArticle2.slug}`}
                onClick={(e) => handleLink(e, `/news/${supportingArticle2.slug}`)}
                className="group relative rounded-[16px] overflow-hidden block flex-1 min-h-[190px] bg-[#0B1C2F] flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingArticle2.image}
                  alt={supportingArticle2.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-left text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    {supportingArticle2.category} &bull; {supportingArticle2.date}
                  </span>
                  <h4 className="text-base font-medium text-white tracking-tight line-clamp-2">
                    {supportingArticle2.title}
                  </h4>
                  <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>Read briefing</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          10 FINAL CTA
          - Established dark architectural closing section (#0B1C2F)
          - Clear, direct, action-oriented headline
          - Primary Action: Contact / Enquire
          - Secondary: Direct telephone & email dispatch
      ===================================================================== */}
      <section
        aria-label="Direct Commercial Consultation"
        className="relative py-24 lg:py-32 bg-[#0B1C2F] text-white overflow-hidden"
      >
        {/* Architectural Image Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-building.jpg"
            alt="LTS Consultation"
            className="w-full h-full object-cover object-center opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/85 to-[#0B1C2F]/70" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-[#CBD5E1] uppercase tracking-[0.24em] font-semibold block mb-3">
              COMMERCIAL &bull; TENDERS &bull; RFPS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              Ready to engineer your next built environment?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Connect directly with LTSGROUP estimating engineers and technical directors in Dubai for turnkey MEP contracting tenders, commercial rooftop solar EPC feasibility, or life-cycle facilities management agreements.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate('/contact')}
                className="text-[12px] tracking-[0.06em] px-6 min-h-[44px]"
              >
                Contact / Enquire →
              </Button>
            </div>

            {/* Direct Official Communication Channels */}
            <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap gap-8 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400" aria-hidden="true" />
                <a
                  href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center"
                >
                  <span>{CORPORATE_INFO.contact.telephone} (24/7 Dispatch)</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400" aria-hidden="true" />
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
