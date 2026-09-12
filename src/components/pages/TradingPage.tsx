import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Phone, Mail, PackageCheck, FileSpreadsheet } from 'lucide-react';
import { Button } from '../../design-system/atoms/Button';
import { PROJECTS_DATA } from '../../data/projectsData';
import { CORPORATE_INFO } from '../../data/corporateData';

interface TradingPageProps {
  onNavigate: (slug: string) => void;
  currentPath?: string;
}

/**
 * Trading & Component Supply Division Page
 * Division 03: Direct factory procurement of genuine OEM parts, VFDs, BTU meters, lighting, and EV chargers.
 * Visual Composition:
 * - 01 Full-bleed technical equipment hero (~75vh), quiet lower-left anchor.
 * - 02 Asymmetric unbordered intro (3 cols label / 9 cols statement).
 * - 03 Capability Explorer (7/5 + 4/4/4 Multi-Scale Proportions: 5 product families).
 * - 04 Feature Story (35/65 Split: 35% Left Text, 65% Right Image on BTU telemetry).
 * - 05 Related Deployments Rail (Industrial VFD & Switchgear + Commercial Chilling).
 * - 06 Component BOQ Submission & Procurement Closing Section.
 */
export const TradingPage: React.FC<TradingPageProps> = ({ onNavigate }) => {
  const switchgearProject = PROJECTS_DATA[3] || PROJECTS_DATA[0];
  const highriseProject = PROJECTS_DATA[0];

  return (
    <main className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white">
      {/* =====================================================================
          01 — FULL-BLEED TECHNICAL PRODUCT HERO (~75vh)
          - No two-column layout
          - Equipment / technical product photography
          - Lower-left intentional anchor
      ===================================================================== */}
      <section
        aria-label="Trading Division Hero"
        className="relative min-h-[72vh] lg:min-h-[76vh] flex items-end overflow-hidden bg-[#0B1C2F]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80"
            alt="Technical Equipment and Industrial Controls"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/65 to-[#0B1C2F]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2F]/80 via-[#0B1C2F]/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20 pt-28 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#CBD5E1]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-200 font-semibold">
                DIVISION 03
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.12]">
              Direct OEM Supply &amp; Certified Technical Components
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Factory-authorized procurement of genuine OEM HVAC spare parts, variable frequency drives, precision ultrasonic BTU meters, industrial lights, and EV chargers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate('/contact')}
                className="text-[12px] tracking-[0.06em]"
              >
                Inquire about components →
              </Button>

              <a
                href="#product-spectrum"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('product-spectrum')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group min-h-[44px] inline-flex items-center gap-2 text-[13px] text-white hover:text-slate-200 font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[4px]"
              >
                <span>View product families</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02 — INTRO: LARGE EDITORIAL STATEMENT
          - Left: small section label (3 cols)
          - Right: large statement + concise supporting copy (9 cols)
          - No cards, no borders
      ===================================================================== */}
      <section
        aria-label="Trading Procurement Doctrine"
        className="py-20 lg:py-28 bg-white text-left"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block">
                LOGISTICS 03
              </span>
              <span className="text-xs text-[#64748B] mt-1 block">
                Supply Chain Integrity
              </span>
            </div>

            <div className="lg:col-span-9 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-[1.2]">
                Direct manufacturer relationships eliminate counterfeit risks, transit delays, and unauthorized markup.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal max-w-3xl">
                Critical electromechanical equipment cannot tolerate grey-market parts or untested substitutes. LTSGROUP maintains direct authorized relationships with tier-one global manufacturers, ensuring genuine factory warranties, comprehensive compliance submittals, and regional warehouse availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 — CAPABILITY EXPLORER (7/5 + 4/4/4 MULTI-SCALE PRODUCT COMPOSITION)
          - Row 1: Dominant 7-Col HVAC Spares + 5-Col Controls & VFDs
          - Row 2: 4/4/4 Proportions for BTU Meters, Lights, EV Chargers
          - Image, title, short one-line explanation, arrow
      ===================================================================== */}
      <section
        id="product-spectrum"
        aria-label="Product Capability Spectrum"
        className="py-16 lg:py-24 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-xl mb-10">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
              EQUIPMENT SPECTRUM
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
              Five authorized equipment families.
            </h2>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {/* Row 1: 7-Col HVAC Spares + 5-Col Controls & VFDs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* HVAC Spare Parts (7 cols) */}
              <a
                href="/trading/hvac"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/trading/hvac');
                }}
                className="lg:col-span-7 group relative rounded-[18px] overflow-hidden block min-h-[340px] sm:min-h-[400px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="HVAC Genuine Spare Parts"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

                <div className="relative z-10 text-white max-w-lg">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    PRODUCT 01
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
                    HVAC Spare Parts
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Semi-hermetic reciprocating and screw compressors, copper condenser fan coils, electronic expansion valves, and filter driers.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore HVAC spares</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* Controls & VFDs (5 cols) */}
              <a
                href="/trading/controls-vfds"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/trading/controls-vfds');
                }}
                className="lg:col-span-5 group relative rounded-[18px] overflow-hidden block min-h-[340px] sm:min-h-[400px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
                  alt="Controls and Variable Frequency Drives"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    PRODUCT 02
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                    Controls &amp; VFDs
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                    Low-harmonic variable frequency drives, BACnet/Modbus direct digital controllers, and motorized pressure-independent valves.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore controls</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </div>

            {/* Row 2: 4/4/4 Proportions for BTU Meters, Lights, EV Chargers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* BTU Metering & Accessories (4 cols) */}
              <a
                href="/trading/metering"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/trading/metering');
                }}
                className="group relative rounded-[18px] overflow-hidden block min-h-[280px] bg-[#0B1C2F] flex flex-col justify-end p-6 sm:p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
                  alt="Ultrasonic BTU Meters"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    PRODUCT 03
                  </span>
                  <h3 className="text-lg font-medium text-white tracking-tight">
                    BTU Metering &amp; Accessories
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                    EN 1434 / MID Class 2 ultrasonic energy meters for district cooling sub-billing.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>Explore metering</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* Lights (4 cols) */}
              <a
                href="/trading/lights"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/trading/lights');
                }}
                className="group relative rounded-[18px] overflow-hidden block min-h-[280px] bg-[#0B1C2F] flex flex-col justify-end p-6 sm:p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <img
                  src="https://images.unsplash.com/photo-1565814636199-ae8133055c1c?auto=format&fit=crop&w=800&q=80"
                  alt="Commercial & Industrial Lighting"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    PRODUCT 04
                  </span>
                  <h3 className="text-lg font-medium text-white tracking-tight">
                    Architectural &amp; Industrial Lights
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                    IP65 warehouse high bays, linear battens, and DCD central battery emergency fixtures.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>Explore lights</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* EV Chargers (4 cols) */}
              <a
                href="/trading/ev"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/trading/ev');
                }}
                className="group relative rounded-[18px] overflow-hidden block min-h-[280px] bg-[#0B1C2F] flex flex-col justify-end p-6 sm:p-7 sm:col-span-2 lg:col-span-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80"
                  alt="Commercial EV Chargers"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    PRODUCT 05
                  </span>
                  <h3 className="text-lg font-medium text-white tracking-tight">
                    EV Chargers
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                    Commercial Level-2 AC wallboxes and high-voltage DC fast-charging infrastructure.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>Explore EV chargers</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 — FEATURE STORY: 35/65 ASYMMETRIC SPLIT
          - 35% Text on Left
          - 65% Image on Right (BTU metering telemetry focus)
      ===================================================================== */}
      <section
        aria-label="Revenue-Grade Sub-Metering"
        className="py-20 lg:py-28 bg-white text-left"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* 35% Editorial Column (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block">
                METROLOGY PRECISION
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight leading-snug">
                Revenue-grade sub-metering eliminates tenant billing disputes.
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                District cooling consumption represents a major operational expense for commercial towers. Installing static ultrasonic thermal energy meters certified to EN 1434 and MID Class 2 guarantees precise volumetric flow and delta-T measurement, backed by automated M-Bus and LoRa telemetry.
              </p>
              <div className="pt-2 space-y-2.5 text-xs text-[#0B1320] font-medium">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#173C62] shrink-0" />
                  <span>EN 1434 &amp; MID Class 2 metrological compliance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#173C62] shrink-0" />
                  <span>Integrated M-Bus, Modbus RS485, and wireless LoRa</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#173C62] shrink-0" />
                  <span>Zero-wear static ultrasound without moving impellers</span>
                </div>
              </div>
            </div>

            {/* 65% Dominant Image (8 cols) */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-[#0B1C2F]">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision Ultrasonic Metering and Telemetry"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-[#0B1C2F]/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          05 — RELATED DEPLOYMENTS (SUPPLY DEPLOYMENTS RAIL)
          - Switchgear Integration (7 cols) + Commercial High-Rise (5 cols)
      ===================================================================== */}
      <section
        aria-label="Component Deployments"
        className="py-16 lg:py-24 bg-[#F8FAFC] text-left"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-1">
                EQUIPMENT IN SERVICE
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Verified equipment deployments.
              </h2>
            </div>
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/projects');
              }}
              className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#102B47] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px] cursor-pointer"
            >
              <span>Explore all projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Dominant Switchgear & VFD Deployment (7 cols) */}
            <a
              href={`/projects/${switchgearProject.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/projects/${switchgearProject.slug}`);
              }}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden block min-h-[360px] sm:min-h-[420px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <img
                src="/assets/images/mep-construction.jpg"
                alt={switchgearProject.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-white max-w-lg">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  {switchgearProject.categoryLabel} &bull; {switchgearProject.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                  {switchgearProject.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {switchgearProject.scopeOverview}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>View deployment record</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* Supporting High-Rise Metering Deployment (5 cols) */}
            <a
              href={`/projects/${highriseProject.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/projects/${highriseProject.slug}`);
              }}
              className="lg:col-span-5 group relative rounded-[18px] overflow-hidden block min-h-[360px] sm:min-h-[420px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <img
                src={highriseProject.image}
                alt={highriseProject.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  {highriseProject.categoryLabel} &bull; {highriseProject.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                  {highriseProject.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {highriseProject.scopeOverview}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>View deployment record</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          06 — CLOSING CTA: BOQ & SPECIFICATION SUBMISSION
          - Unique to Trading Division
          - Technical procurement desk tone
      ===================================================================== */}
      <section
        aria-label="Trading Procurement Closing"
        className="relative py-20 lg:py-28 bg-[#0B1C2F] text-white overflow-hidden text-left"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80"
            alt="Component Procurement Desk"
            className="w-full h-full object-cover object-center opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/85 to-[#0B1C2F]/70" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-slate-300 uppercase tracking-[0.24em] font-semibold block mb-2">
              BOQ &bull; PROCUREMENT &bull; OEM INVENTORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Submit a component specification or Bill of Quantities.
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
              Direct submission of equipment schedules, compressor model requirements, or VFD specifications. Our technical trading team provides immediate stock verification, manufacturer data sheets, and wholesale contractor pricing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate('/contact')}
                className="text-[12px] tracking-[0.06em]"
              >
                Submit BOQ for quote →
              </Button>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap gap-6 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <a href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {CORPORATE_INFO.contact.telephone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${CORPORATE_INFO.contact.emailTrading}`} className="hover:text-white">
                  {CORPORATE_INFO.contact.emailTrading}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
