import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Wrench, Droplets, RotateCcw, Phone, Mail } from 'lucide-react';
import { Button } from '../../design-system/atoms/Button';
import { PROJECTS_DATA } from '../../data/projectsData';
import { CORPORATE_INFO } from '../../data/corporateData';

interface FacilitiesManagementPageProps {
  onNavigate: (slug: string) => void;
  initialSubSection?: string;
}

/**
 * Facilities Management Division Page
 * Division 02: Continuous built asset stewardship, hard/soft FM services, and live plant retrofits.
 * Visual Composition:
 * - 01 Full-bleed plant-room hero (~80vh), intentional lower-left anchor.
 * - 02 Asymmetric unbordered intro (3 cols label / 9 cols statement).
 * - 03 Capability Explorer (8/4/12 Multi-Scale Grid: Hard FM, Aquatic Care, Retrofits).
 * - 04 Feature Story (40/60 Reversed Split: 40% Left Text, 60% Right Image).
 * - 05 Related Projects Rail (Healthcare Hard Services + Central Chilling).
 * - 06 Facility Operations & Maintenance Audit Closing Section.
 */
export const FacilitiesManagementPage: React.FC<FacilitiesManagementPageProps> = ({
  onNavigate,
}) => {
  const fmProject = PROJECTS_DATA[2]; // Healthcare Facility Hard Services
  const highriseProject = PROJECTS_DATA[0]; // High-Rise MEP

  return (
    <main className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white">
      {/* =====================================================================
          01 — FULL-BLEED PLANT ROOM HERO (~80vh)
          - No two-column layout
          - Plant room / maintenance photography
          - Lower-left intentional anchor
      ===================================================================== */}
      <section
        aria-label="Facilities Management Hero"
        className="relative min-h-[78vh] lg:min-h-[82vh] flex items-end overflow-hidden bg-[#0B1C2F]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/project-chiller.jpg"
            alt="Central Plant Room and Chiller Infrastructure"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/60 to-[#0B1C2F]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2F]/80 via-[#0B1C2F]/30 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20 pt-28 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#CBD5E1]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-200 font-semibold">
                DIVISION 02
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.12]">
              Continuous Built Asset Stewardship &amp; Plant Reliability
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Preserving electromechanical equipment life, statutory authority compliance, and continuous plant uptime across commercial, healthcare, and industrial assets.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate('/contact')}
                className="text-[12px] tracking-[0.06em]"
              >
                Schedule facility audit →
              </Button>

              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="group min-h-[44px] inline-flex items-center gap-2 text-[13px] text-white hover:text-slate-200 font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[4px]"
              >
                <span>Review FM case records</span>
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
        aria-label="Facilities Management Doctrine"
        className="py-20 lg:py-28 bg-white text-left"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block">
                LIFECYCLE 02
              </span>
              <span className="text-xs text-[#64748B] mt-1 block">
                Asset Stewardship
              </span>
            </div>

            <div className="lg:col-span-9 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-[1.2]">
                Engineering discipline does not terminate at handover—it begins with life-cycle stewardship.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal max-w-3xl">
                A high-performance electromechanical plant is only as durable as the predictive maintenance regime that protects it. LTSGROUP combines 24/7 on-site multidisciplinary engineering teams, vibration analysis, HTM hospital cleanroom air handling protocols, and chiller thermodynamic trend analysis to prevent catastrophic equipment failures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 — CAPABILITY EXPLORER (VISUAL INDEX — 8/4/12 MULTI-SCALE GRID)
          - Replace 3-column scope grids
          - Row 1: Dominant 8-Col Hard Services + 4-Col Soft Services
          - Row 2: 12-Col Full-Width Horizontal Feature for Retrofits
          - Image, title, short one-line explanation, arrow
      ===================================================================== */}
      <section
        aria-label="Facilities Management Spectrum"
        className="py-16 lg:py-24 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-xl mb-10">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
              SERVICE SPECTRUM
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
              Three operational maintenance disciplines.
            </h2>
          </div>

          <div className="space-y-6 lg:space-y-8">
            {/* Row 1: 8-Col Hard Services + 4-Col Soft Services */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Hard Services (8 cols) */}
              <a
                href="/facilities-management/hard-services"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/facilities-management/hard-services');
                }}
                className="lg:col-span-8 group relative rounded-[18px] overflow-hidden block min-h-[340px] sm:min-h-[400px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <img
                  src="/assets/images/project-chiller.jpg"
                  alt="Hard Services Engineering"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

                <div className="relative z-10 text-white max-w-lg">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    SERVICE 01
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
                    Hard Services Engineering
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Preventive and reactive maintenance for central chillers, electrical distribution, BMS, plumbing, and structural civil works.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore hard services</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* Soft Services (Aquatic Care) (4 cols) */}
              <a
                href="/facilities-management/soft-services"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/facilities-management/soft-services');
                }}
                className="lg:col-span-4 group relative rounded-[18px] overflow-hidden block min-h-[340px] sm:min-h-[400px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <img
                  src="/assets/images/industry-hospitality.jpg"
                  alt="Commercial Swimming Pool Care"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    SERVICE 02
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                    Soft Services &bull; Aquatic Care
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                    Commercial swimming pool maintenance, chemical sanitization, and statutory hygiene compliance.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore aquatic care</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </div>

            {/* Row 2: 12-Col Full-Width Horizontal Feature for Retrofits */}
            <a
              href="/facilities-management/retrofits"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/facilities-management/retrofits');
              }}
              className="group relative rounded-[18px] overflow-hidden block min-h-[220px] sm:min-h-[260px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <img
                src="/assets/images/mep-construction.jpg"
                alt="Plant Retrofits & Refurbishment"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-white max-w-2xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  SERVICE 03
                </span>
                <h3 className="text-2xl font-normal text-white tracking-tight">
                  Plant Retrofits &amp; Refurbishment
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Turnkey equipment replacement in occupied facilities, variable primary flow conversions, energy audits, and testing &amp; commissioning.
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>Explore retrofits</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 — FEATURE STORY: 40/60 REVERSED ASYMMETRIC SPLIT
          - 40% Text on Left
          - 60% Image on Right (distinct from Engineering's 65/35 Left Image)
      ===================================================================== */}
      <section
        aria-label="Zero-Downtime Retrofits"
        className="py-20 lg:py-28 bg-white text-left"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* 40% Editorial Column (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block">
                RETROFIT METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight leading-snug">
                Zero-downtime plant overhauls in live commercial assets.
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                Replacing aged constant-speed chillers or damaged electrical busbars in occupied commercial high-rises requires extreme logistics coordination. We deploy temporary bypass headers and modular chiller connections during low-demand night windows, ensuring zero loss of cooling for tenants.
              </p>
              <div className="pt-2 space-y-2.5 text-xs text-[#0B1320] font-medium">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#173C62] shrink-0" />
                  <span>24/7 on-site emergency response SLA under 15 minutes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#173C62] shrink-0" />
                  <span>HTM 03-01 hospital cleanroom ventilation verification</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#173C62] shrink-0" />
                  <span>Variable primary flow (VPF) conversion for 25–35% kWh savings</span>
                </div>
              </div>
            </div>

            {/* 60% Dominant Image (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-[#0B1C2F]">
                <img
                  src="/assets/images/project-chiller.jpg"
                  alt="Live Plant Chiller Retrofit"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-[#0B1C2F]/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          05 — RELATED PROJECTS (FM DEPLOYMENTS RAIL)
          - Healthcare Hospital FM (7 cols) + High-Rise MEP (5 cols)
      ===================================================================== */}
      <section
        aria-label="Facilities Deployments"
        className="py-16 lg:py-24 bg-[#F8FAFC] text-left"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-1">
                OPERATIONAL PROOF
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Selected facility management deployments.
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
            {/* Dominant Healthcare FM (7 cols) */}
            <a
              href={`/projects/${fmProject.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/projects/${fmProject.slug}`);
              }}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden block min-h-[360px] sm:min-h-[420px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <img
                src="/assets/images/project-chiller.jpg"
                alt={fmProject.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-white max-w-lg">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  {fmProject.categoryLabel} &bull; {fmProject.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                  {fmProject.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {fmProject.scopeOverview}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>View project record</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* Supporting Card: High-Rise (5 cols) */}
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
                  <span>View project record</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          06 — CLOSING CTA: FACILITY AUDIT & SLA CONSULTATION
          - Unique to Facilities Management Division
          - Plant operations tone
      ===================================================================== */}
      <section
        aria-label="Facilities Consultation Closing"
        className="relative py-20 lg:py-28 bg-[#0B1C2F] text-white overflow-hidden text-left"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/project-chiller.jpg"
            alt="Facilities Management Consultation"
            className="w-full h-full object-cover object-center opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/85 to-[#0B1C2F]/70" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-slate-300 uppercase tracking-[0.24em] font-semibold block mb-2">
              AUDIT &bull; MAINTENANCE SLA &bull; DISPATCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Arrange a facility operations audit.
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
              Evaluate central plant thermodynamic efficiency, review statutory compliance submittals, or structure an on-site 24/7 resident engineering team for your built asset.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate('/contact')}
                className="text-[12px] tracking-[0.06em]"
              >
                Schedule facility audit →
              </Button>
            </div>

            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap gap-6 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <a href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {CORPORATE_INFO.contact.telephone} (24/7 Operations)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${CORPORATE_INFO.contact.emailFM}`} className="hover:text-white">
                  {CORPORATE_INFO.contact.emailFM}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
