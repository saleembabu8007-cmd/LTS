import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Wrench,
  Droplets,
  RotateCcw,
  Phone,
  Mail,
} from 'lucide-react';
import { Button } from '../../design-system/atoms/Button';
import { PROJECTS_DATA } from '../../data/projectsData';
import { NEWS_DATA } from '../../data/newsData';
import { CORPORATE_INFO } from '../../data/corporateData';

interface HomePageProps {
  onNavigate: (slug: string) => void;
}

/**
 * LTSGROUP Homepage — Art-Directed Rebuild
 * Conforms strictly to LTSGROUP Permanent Design Rules:
 * - 01 Hero: Full-bleed image hero (~85vh), no 2-column, quiet lower-left anchor.
 * - 02 Business Areas: Image-led index (1 dominant + 2 supporting), 18px soft radius, no borders.
 * - 03 Engineering Capability: Editorial 65/35 split, typographic sub-links.
 * - 04 Featured Project: Dominant project photography, integrated minimal info, no metadata rows.
 * - 05 Facilities Management: Immersive image, concise text, horizontal typographic service index.
 * - 06 Trading: Asymmetric product composition with 1 featured visual + 4 supporting items.
 * - 07 Project Portfolio: Editorial rail with 1 dominant + 2 supporting real projects.
 * - 08 Industries: Visual industry index with subtle hover states and project ties.
 * - 09 Trust / Corporate: High-gravity typographic doctrine, zero invented stats.
 * - 10 News: 1 large featured briefing + 2 smaller previews, image-led.
 * - 11 Contact: Visual closing section with architectural image & direct channels.
 */
export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Verified real project records
  const featuredHighRise = PROJECTS_DATA[0]; // Commercial High-Rise MEP Installation
  const solarProject = PROJECTS_DATA[1]; // Logistics Facility Rooftop Solar PV
  const fmProject = PROJECTS_DATA[2]; // Critical Healthcare Facility Hard Services Care
  const switchgearProject = PROJECTS_DATA[3] || PROJECTS_DATA[0]; // Industrial MCC & Switchgear

  // Verified news briefings
  const featuredArticle = NEWS_DATA[0];
  const supportingArticle1 = NEWS_DATA[1];
  const supportingArticle2 = NEWS_DATA[2];

  return (
    <main className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white">
      {/* =====================================================================
          SECTION 01 — FULL-BLEED ARCHITECTURAL HERO
          - Full-bleed image occupying ~85vh
          - Subtle and purposeful directional dark overlay
          - Content anchored in lower-left
          - No two-column layout, no white text panel, no floating cards
      ===================================================================== */}
      <section
        aria-label="LTSGROUP Hero"
        className="relative min-h-[82vh] lg:min-h-[88vh] flex items-end overflow-hidden bg-[#0B1C2F]"
      >
        {/* Full-Bleed Background Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-building.jpg"
            alt="LTSGROUP Built Environment Architecture"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Refined directional scrim: strong in lower-left, gentle across image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/55 to-[#0B1C2F]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2F]/80 via-[#0B1C2F]/30 to-transparent" />
        </div>

        {/* Lower-Left Quiet Content Anchor */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-22 pt-32">
          <div className="max-w-2xl text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#CBD5E1]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-200 font-semibold">
                LTSGROUP
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-[1.12]">
              Engineering environments built to perform.
            </h1>

            {/* Supporting Statement (1-2 lines maximum) */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Turnkey electromechanical contracting, life-cycle facility operations, and specialized technical supply across the United Arab Emirates.
            </p>

            {/* Action Group */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate('/engineering-construction')}
                className="text-[12px] tracking-[0.06em]"
              >
                Explore our capabilities →
              </Button>

              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="group inline-flex items-center gap-2 text-[13px] text-white hover:text-slate-200 font-medium transition-colors py-2 px-1 min-h-[44px] focus:outline-none focus-visible:underline"
              >
                <span>View projects</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02 — IMAGE-LED BUSINESS AREAS INDEX
          - No 3 bordered cards
          - 3 large image panels with different dimensions
          - One dominant panel (Engineering & Construction)
          - Two supporting panels (Facilities Management, Trading)
          - Soft 18px radius, subtle 1.025x zoom on hover
      ===================================================================== */}
      <section
        aria-label="Core Business Divisions"
        className="py-20 lg:py-28 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Subtle Section Intro */}
          <div className="max-w-xl text-left mb-10 lg:mb-12">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
              OPERATING DIVISIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
              Three pillars of built-environment infrastructure.
            </h2>
          </div>

          {/* Asymmetric 1 Dominant + 2 Supporting Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* DOMINANT PANEL: Engineering & Construction (7 Columns) */}
            <a
              href="/engineering-construction"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/engineering-construction');
              }}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden cursor-pointer min-h-[360px] sm:min-h-[460px] lg:min-h-[540px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-10 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none"
            >
              {/* Image with subtle hover zoom */}
              <img
                src="/assets/images/mep-construction.jpg"
                alt="Engineering & Construction Division"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              {/* Panel Content */}
              <div className="relative z-10 text-left text-white max-w-lg">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  DIVISION 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
                  Engineering &amp; Construction
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Turnkey electromechanical contracting, utility rooftop solar PV under DEWA Shams Dubai, and type-tested low-voltage control switchgear assembly.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>Explore division</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* TWO SUPPORTING PANELS (5 Columns Stacked) */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              {/* SUPPORTING PANEL 1: Facilities Management */}
              <a
                href="/facilities-management"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/facilities-management');
                }}
                className="group relative rounded-[18px] overflow-hidden cursor-pointer min-h-[250px] sm:min-h-[260px] flex-1 bg-[#0B1C2F] flex flex-col justify-end p-6 sm:p-8 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none"
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
                  <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                    Facilities Management
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed font-normal">
                    24/7 hard MEP engineering, predictive central chiller stewardship, aquatic hygiene, and live-plant zero-downtime retrofits.
                  </p>
                  <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore division</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* SUPPORTING PANEL 2: Trading */}
              <a
                href="/trading"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/trading');
                }}
                className="group relative rounded-[18px] overflow-hidden cursor-pointer min-h-[250px] sm:min-h-[260px] flex-1 bg-[#0B1C2F] flex flex-col justify-end p-6 sm:p-8 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none"
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
                    Authorized distribution of genuine OEM HVAC spare parts, variable frequency drives, ultrasonic BTU meters, and EV chargers.
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
          SECTION 03 — ENGINEERING CAPABILITY (65/35 EDITORIAL SPLIT)
          - Large engineering image: ~65%
          - Small text area: ~35%
          - Typographic links: MEP, Solar, Control Switchgear (no cards)
      ===================================================================== */}
      <section
        aria-label="Engineering Capability"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* 65% Dominant Engineering Image */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[20px] overflow-hidden bg-[#0B1C2F]">
                <img
                  src="/assets/images/engineering-intro.jpg"
                  alt="LTS Engineering & Construction"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1C2F]/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* 35% Typographic Text Column */}
            <div className="lg:col-span-4 order-1 lg:order-2 text-left space-y-6">
              <div>
                <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
                  DISCIPLINE FOCUS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-snug">
                  Engineering &amp; Construction
                </h2>
                <p className="mt-4 text-sm text-[#4A5568] leading-relaxed font-normal">
                  We engineer, coordinate, and commission high-performance electromechanical systems for complex built environments. Single-source delivery eliminates multi-vendor coordination friction from pre-construction submittals to authority handover.
                </p>
              </div>

              {/* Simple Typographic Links (No Cards) */}
              <div className="pt-3 border-t border-[#E5E7EB] space-y-2">
                <a
                  href="/engineering-construction/mep"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/engineering-construction/mep');
                  }}
                  className="group flex items-center justify-between w-full text-left py-2.5 min-h-[44px] border-b border-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded"
                >
                  <div>
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      MEP Contracting
                    </h4>
                    <p className="text-xs text-[#64748B]">
                      Commercial, Residential &amp; Infrastructure Hydronics &amp; Power
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#173C62] transition-all group-hover:translate-x-1 shrink-0" />
                </a>

                <a
                  href="/engineering-construction/solar"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/engineering-construction/solar');
                  }}
                  className="group flex items-center justify-between w-full text-left py-2.5 min-h-[44px] border-b border-[#F1F5F9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded"
                >
                  <div>
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      Solar Solutions
                    </h4>
                    <p className="text-xs text-[#64748B]">
                      Rooftop PV EPC under DEWA Shams Dubai
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#173C62] transition-all group-hover:translate-x-1 shrink-0" />
                </a>

                <a
                  href="/engineering-construction/control-switchgear"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/engineering-construction/control-switchgear');
                  }}
                  className="group flex items-center justify-between w-full text-left py-2.5 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded"
                >
                  <div>
                    <h4 className="text-[15px] font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      Control Switchgear
                    </h4>
                    <p className="text-xs text-[#64748B]">
                      Form-4 Type-Tested Low-Voltage Assemblies
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#173C62] transition-all group-hover:translate-x-1 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 04 — FEATURED PROJECT BREAKOUT
          - Full-width architectural image breakout
          - Single real project highlight (DEWA Substation 132/11kV)
          - Verified record from PROJECTS_DATA
      ===================================================================== */}
      <section
        aria-label="Featured Project"
        className="py-16 lg:py-24 bg-[#0B1320] text-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[11px] font-mono text-slate-300 uppercase tracking-[0.2em] font-semibold">
              FEATURED PROJECT
            </span>
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/projects');
              }}
              className="group inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-mono tracking-wider uppercase py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded px-1"
            >
              <span>Explore all projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Dominant Project Showcase */}
          <a
            href={`/projects/${featuredHighRise.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(`/projects/${featuredHighRise.slug}`);
            }}
            className="group relative rounded-[20px] overflow-hidden cursor-pointer min-h-[380px] sm:min-h-[500px] lg:min-h-[600px] flex flex-col justify-end p-6 sm:p-10 lg:p-12 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none"
          >
            <img
              src={featuredHighRise.image}
              alt={featuredHighRise.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
            {/* Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/95 via-[#0B1320]/40 to-transparent" />

            {/* Integrated Minimalist Information Area */}
            <div className="relative z-10 max-w-2xl text-left">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1]">
                {featuredHighRise.categoryLabel} &bull; {featuredHighRise.location}
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                {featuredHighRise.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-xl">
                {featuredHighRise.scopeOverview}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                <span>View project case record</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* =====================================================================
          SECTION 05 — FACILITIES MANAGEMENT
          - Large immersive image with concise overlay text
          - Horizontal service index: Hard Services, Soft Services, Retrofits
          - No cards; typography and small icons
      ===================================================================== */}
      <section
        aria-label="Facilities Management"
        className="relative py-24 lg:py-32 bg-[#0B1C2F] text-white overflow-hidden"
      >
        {/* Background Immersive Image with Veil */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/project-chiller.jpg"
            alt="Central Chiller Plant Engineering"
            className="w-full h-full object-cover object-center opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#0B1C2F]/75 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl text-left mb-14 lg:mb-18">
            <span className="text-[11px] font-mono text-[#CBD5E1] uppercase tracking-[0.2em] font-semibold block mb-2">
              ASSET PRESERVATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Preserving built asset performance and operational reliability.
            </h2>
            <p className="mt-4 text-sm text-slate-300 font-normal leading-relaxed">
              We deploy disciplined preventive maintenance, continuous thermodynamic monitoring, and emergency response teams to safeguard critical MEP equipment over decades of operation.
            </p>
          </div>

          {/* Horizontal Service Index (No Cards — Typography & Minimalist Icons) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-white/15 text-left">
            {/* Hard Services */}
            <a
              href="/facilities-management/hard-services"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/facilities-management/hard-services');
              }}
              className="group block space-y-3 p-2 -m-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1C2F]"
            >
              <div className="flex items-center gap-3">
                <Wrench className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors shrink-0" />
                <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-slate-200 transition-colors">
                  Hard Services
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Continuous preventive and reactive maintenance for central chillers, electrical distribution, life-safety plumbing, BMS, and structural civil works.
              </p>
              <div className="pt-1 inline-flex items-center gap-1.5 text-xs text-slate-300 group-hover:text-white font-medium transition-colors">
                <span>View Hard FM</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </a>

            {/* Soft Services */}
            <a
              href="/facilities-management/soft-services"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/facilities-management/soft-services');
              }}
              className="group block space-y-3 p-2 -m-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1C2F]"
            >
              <div className="flex items-center gap-3">
                <Droplets className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors shrink-0" />
                <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-slate-200 transition-colors">
                  Soft Services
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Commercial swimming pool maintenance, chemical water balancing, filtration care, and statutory health authority compliance.
              </p>
              <div className="pt-1 inline-flex items-center gap-1.5 text-xs text-slate-300 group-hover:text-white font-medium transition-colors">
                <span>View Aquatic Care</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </a>

            {/* Retrofits / Refurbishment */}
            <a
              href="/facilities-management/retrofits"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/facilities-management/retrofits');
              }}
              className="group block space-y-3 p-2 -m-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1C2F]"
            >
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors shrink-0" />
                <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-slate-200 transition-colors">
                  Retrofits &amp; Refurbishment
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                Live-building equipment changeouts, variable primary flow conversions, energy optimization audits, and full testing &amp; commissioning.
              </p>
              <div className="pt-1 inline-flex items-center gap-1.5 text-xs text-slate-300 group-hover:text-white font-medium transition-colors">
                <span>View Retrofits</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 06 — TRADING & TECHNICAL SUPPLY
          - Product photography
          - Horizontal product composition (NOT 5 equal cards!)
          - 1 large featured product visual + 4 smaller supporting items
      ===================================================================== */}
      <section
        aria-label="Trading and Technical Supply"
        className="py-20 lg:py-28 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
                EQUIPMENT &bull; CONTROLS &bull; COMPONENTS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
                Trading &amp; Component Supply
              </h2>
            </div>
            <a
              href="/trading"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/trading');
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#102B47] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded px-1"
            >
              <span>Explore Trading Division</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Asymmetric Product Composition: 1 Featured Visual + 4 Supporting Items */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Large Featured Product Visual (7 cols) */}
            <a
              href="/trading/controls-vfds"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/trading/controls-vfds');
              }}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden cursor-pointer min-h-[360px] sm:min-h-[420px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none"
            >
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                alt="Controls and Variable Frequency Drives"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-left text-white max-w-md">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  FEATURED OEM SUPPLY
                </span>
                <h3 className="text-2xl font-normal text-white tracking-tight">
                  Controls &amp; Variable Frequency Drives
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  Factory-authorized supply of heavy-duty low-harmonic VFDs, soft starters, and intelligent motor controllers calibrated for continuous GCC ambient loads.
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>View controls range</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* 4 Supporting Technical Items (5 cols — 2x2 Grid) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* HVAC Spare Parts */}
              <a
                href="/trading/hvac"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/trading/hvac');
                }}
                className="group relative rounded-[14px] overflow-hidden cursor-pointer bg-white border border-[#E5E7EB] hover:border-[#173C62] p-5 flex flex-col justify-between transition-colors text-left focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none min-h-[140px]"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block mb-1">
                    SUPPLY 01
                  </span>
                  <h4 className="text-base font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                    HVAC Spare Parts
                  </h4>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Genuine OEM compressors, heat exchanger coils, gaskets, and filter media.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold uppercase text-[#173C62]">
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* Metering & Accessories */}
              <a
                href="/trading/metering"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/trading/metering');
                }}
                className="group relative rounded-[14px] overflow-hidden cursor-pointer bg-white border border-[#E5E7EB] hover:border-[#173C62] p-5 flex flex-col justify-between transition-colors text-left focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none min-h-[140px]"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block mb-1">
                    SUPPLY 02
                  </span>
                  <h4 className="text-base font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                    BTU Metering
                  </h4>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Ultrasonic thermal energy meters and dynamic pressure balancing accessories.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold uppercase text-[#173C62]">
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* Lights */}
              <a
                href="/trading/lights"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/trading/lights');
                }}
                className="group relative rounded-[14px] overflow-hidden cursor-pointer bg-white border border-[#E5E7EB] hover:border-[#173C62] p-5 flex flex-col justify-between transition-colors text-left focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none min-h-[140px]"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block mb-1">
                    SUPPLY 03
                  </span>
                  <h4 className="text-base font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                    Architectural Lighting
                  </h4>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Commercial LED luminaires, explosion-proof industrial fittings, and sensors.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold uppercase text-[#173C62]">
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              {/* EV Chargers */}
              <a
                href="/trading/ev"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/trading/ev');
                }}
                className="group relative rounded-[14px] overflow-hidden cursor-pointer bg-white border border-[#E5E7EB] hover:border-[#173C62] p-5 flex flex-col justify-between transition-colors text-left focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none min-h-[140px]"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-wider block mb-1">
                    SUPPLY 04
                  </span>
                  <h4 className="text-base font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                    EV Chargers
                  </h4>
                  <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                    Level-2 AC destination chargers and high-power DC fast-charging units.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold uppercase text-[#173C62]">
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 07 — PROJECT PORTFOLIO RAIL
          - Editorial project rail
          - One dominant project + two smaller supporting projects
          - Verified real project records from PROJECTS_DATA
      ===================================================================== */}
      <section
        aria-label="Selected Project Deployments"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
                VERIFIED PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
                Engineering in execution.
              </h2>
            </div>
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/projects');
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#102B47] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded px-1"
            >
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Editorial Project Rail: 1 Dominant (7 cols) + 2 Supporting (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Dominant Project Card (Solar PV) */}
            <a
              href={`/projects/${solarProject.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/projects/${solarProject.slug}`);
              }}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden block min-h-[360px] sm:min-h-[460px] bg-[#0B1C2F] flex flex-col justify-end p-6 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
            >
              <img
                src={solarProject.image}
                alt={solarProject.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-left text-white max-w-lg">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  {solarProject.categoryLabel} &bull; {solarProject.location}
                </span>
                <h3 className="text-2xl font-normal text-white tracking-tight">
                  {solarProject.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {solarProject.scopeOverview}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>View case details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* Two Supporting Project Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Supporting Project 1 (Healthcare FM) */}
              <a
                href={`/projects/${fmProject.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/projects/${fmProject.slug}`);
                }}
                className="group relative rounded-[18px] overflow-hidden block flex-1 min-h-[200px] sm:min-h-[220px] bg-[#0B1C2F] flex flex-col justify-end p-5 sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
              >
                <img
                  src="/assets/images/project-chiller.jpg"
                  alt={fmProject.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-left text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    {fmProject.categoryLabel} &bull; {fmProject.location}
                  </span>
                  <h4 className="text-lg font-medium text-white tracking-tight">
                    {fmProject.title}
                  </h4>
                  <div className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>View project</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* Supporting Project 2 (Switchgear Assembly) */}
              <a
                href={`/projects/${switchgearProject.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/projects/${switchgearProject.slug}`);
                }}
                className="group relative rounded-[18px] overflow-hidden block flex-1 min-h-[200px] sm:min-h-[220px] bg-[#0B1C2F] flex flex-col justify-end p-5 sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
              >
                <img
                  src="/assets/images/mep-construction.jpg"
                  alt={switchgearProject.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-left text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    {switchgearProject.categoryLabel} &bull; {switchgearProject.location}
                  </span>
                  <h4 className="text-lg font-medium text-white tracking-tight">
                    {switchgearProject.title}
                  </h4>
                  <div className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
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
          SECTION 08 — INDUSTRIES
          - Visual industry index (no generic 3-column cards)
          - Large image + industry title with subtle hover state
          - Direct connection to /industries
      ===================================================================== */}
      <section
        aria-label="Industry Sectors"
        className="py-20 lg:py-28 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-left mb-12">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
              SECTOR EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
              Calibrated for mission-critical sectors.
            </h2>
          </div>

          {/* Visual Industry Index: Asymmetric 4-Card Composition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Commercial Towers */}
            <a
              href="/industries"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/industries');
              }}
              className="group relative rounded-[16px] overflow-hidden block aspect-[4/3] sm:aspect-[3/4] bg-[#0B1C2F] flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
            >
              <img
                src="/assets/images/industry-commercial.jpg"
                alt="Commercial & Corporate Towers"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/90 via-[#0B1C2F]/30 to-transparent" />
              <div className="relative z-10 text-left text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#CBD5E1] block">
                  SECTOR 01
                </span>
                <h3 className="text-lg font-medium text-white tracking-tight mt-1 group-hover:text-slate-200 transition-colors">
                  Commercial Towers
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  High-density vertical busways, 3,200 TR district cooling, and smoke pressurization.
                </p>
              </div>
            </a>

            {/* Healthcare */}
            <a
              href="/industries"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/industries');
              }}
              className="group relative rounded-[16px] overflow-hidden block aspect-[4/3] sm:aspect-[3/4] bg-[#0B1C2F] flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
            >
              <img
                src="/assets/images/industry-healthcare.jpg"
                alt="Healthcare & Clinical Facilities"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/90 via-[#0B1C2F]/30 to-transparent" />
              <div className="relative z-10 text-left text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#CBD5E1] block">
                  SECTOR 02
                </span>
                <h3 className="text-lg font-medium text-white tracking-tight mt-1 group-hover:text-slate-200 transition-colors">
                  Healthcare Facilities
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  HTM cleanroom ventilation, medical gas piping, and isolated hospital power networks.
                </p>
              </div>
            </a>

            {/* Industrial Logistics */}
            <a
              href="/industries"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/industries');
              }}
              className="group relative rounded-[16px] overflow-hidden block aspect-[4/3] sm:aspect-[3/4] bg-[#0B1C2F] flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
            >
              <img
                src="/assets/images/industry-logistics.jpg"
                alt="Industrial Logistics & Warehousing"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/90 via-[#0B1C2F]/30 to-transparent" />
              <div className="relative z-10 text-left text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#CBD5E1] block">
                  SECTOR 03
                </span>
                <h3 className="text-lg font-medium text-white tracking-tight mt-1 group-hover:text-slate-200 transition-colors">
                  Industrial Logistics
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  High-capacity motor control centers, 11kV substations, and rooftop solar arrays.
                </p>
              </div>
            </a>

            {/* Hospitality & Residential */}
            <a
              href="/industries"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/industries');
              }}
              className="group relative rounded-[16px] overflow-hidden block aspect-[4/3] sm:aspect-[3/4] bg-[#0B1C2F] flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
            >
              <img
                src="/assets/images/industry-hospitality.jpg"
                alt="Hospitality & Mixed-Use"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/90 via-[#0B1C2F]/30 to-transparent" />
              <div className="relative z-10 text-left text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#CBD5E1] block">
                  SECTOR 04
                </span>
                <h3 className="text-lg font-medium text-white tracking-tight mt-1 group-hover:text-slate-200 transition-colors">
                  Hospitality &amp; Residential
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Centralized water boosting, aquatic filtration hygiene, and comprehensive hard FM.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 09 — TRUST / CORPORATE DOCTRINE
          - Zero invented statistics
          - Elegant typographic section explaining how LTS business areas connect
          - Single-source accountability
      ===================================================================== */}
      <section
        aria-label="Corporate Accountability"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.24em] font-semibold block">
              OPERATIONAL DOCTRINE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.18]">
              Single-source accountability eliminates the friction between engineering, preservation, and supply.
            </h2>

            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal pt-2 max-w-2xl mx-auto">
              Most built environments suffer from disconnected hand-offs: contractors complete installation without long-term operational empathy, maintenance providers lack deep engineering insight, and procurement relies on third-party supply chains.
            </p>

            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal max-w-2xl mx-auto">
              LTSGROUP unifies electromechanical contracting, continuous facilities management, and authorized OEM trading under a singular engineering governance model.
            </p>

            <div className="pt-6 flex justify-center">
              <a
                href="/about-us"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/about-us');
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#102B47] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded px-1"
              >
                <span>Learn more about our governance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10 — NEWS & TECHNICAL BRIEFINGS
          - One large featured article + two smaller article previews
          - Image-led; no generic card grid
          - Verified news data
      ===================================================================== */}
      <section
        aria-label="Technical Briefings"
        className="py-20 lg:py-28 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
                TECHNICAL BRIEFINGS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
                Engineering intelligence.
              </h2>
            </div>
            <a
              href="/news"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/news');
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#102B47] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded px-1"
            >
              <span>View all briefings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 1 Large Featured Article + 2 Smaller Supporting Previews */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Large Featured Article (7 cols) */}
            <a
              href={`/news/${featuredArticle.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/news/${featuredArticle.slug}`);
              }}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden block min-h-[360px] sm:min-h-[440px] bg-[#0B1C2F] flex flex-col justify-end p-6 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
            >
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-left text-white max-w-lg">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
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
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/news/${supportingArticle1.slug}`);
                }}
                className="group relative rounded-[16px] overflow-hidden block flex-1 min-h-[180px] sm:min-h-[200px] bg-[#0B1C2F] flex flex-col justify-end p-5 sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
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
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/news/${supportingArticle2.slug}`);
                }}
                className="group relative rounded-[16px] overflow-hidden block flex-1 min-h-[180px] sm:min-h-[200px] bg-[#0B1C2F] flex flex-col justify-end p-5 sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2"
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
          SECTION 11 — VISUAL CLOSING / CONTACT
          - Large architectural image
          - Simple statement
          - CTA: "Start a conversation →"
          - Direct phone & email channels
      ===================================================================== */}
      <section
        aria-label="Direct Consultation"
        className="relative py-24 lg:py-32 bg-[#0B1C2F] text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-building.jpg"
            alt="LTS Consultation"
            className="w-full h-full object-cover object-center opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/85 to-[#0B1C2F]/70" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-slate-300 uppercase tracking-[0.24em] font-semibold block mb-3">
              CONSULTATION &bull; RFP &bull; TENDERS
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              Start an engineering conversation.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Connect directly with our technical leadership regarding turnkey MEP contracting, commercial rooftop solar EPC feasibility, or life-cycle facilities management.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate('/contact')}
                className="text-[12px] tracking-[0.06em]"
              >
                Start a conversation →
              </Button>
            </div>

            {/* Direct Lines */}
            <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap gap-8 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400" />
                <a
                  href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {CORPORATE_INFO.contact.telephone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400" />
                <a
                  href={`mailto:${CORPORATE_INFO.contact.emailGeneral}`}
                  className="hover:text-white transition-colors"
                >
                  {CORPORATE_INFO.contact.emailGeneral}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
