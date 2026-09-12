import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Phone, Mail } from 'lucide-react';
import { Button } from '../../design-system/atoms/Button';
import { PROJECTS_DATA } from '../../data/projectsData';
import { CORPORATE_INFO } from '../../data/corporateData';

interface EngineeringConstructionPageProps {
  onNavigate: (slug: string) => void;
  initialSubSection?: string;
}

/**
 * Engineering & Construction Division Page
 * Division 01: Capital electromechanical contracting, solar PV EPC, and control switchgear.
 * Visual Composition:
 * - 01 Full-bleed image hero (~82vh), quiet lower-left anchor.
 * - 02 Asymmetric unbordered intro (3 cols label / 9 cols statement).
 * - 03 Capability Explorer (7/5 Asymmetric Visual Index: MEP, Solar, Switchgear).
 * - 04 Feature Story (65/35 Asymmetric Split: 65% Left Image, 35% Right Text).
 * - 05 Related Projects Rail (7/5 Asymmetric Rail: High-Rise + Solar).
 * - 06 Engineering Tender Intake & Consultation Closing Section.
 */
export const EngineeringConstructionPage: React.FC<EngineeringConstructionPageProps> = ({
  onNavigate,
}) => {
  const mepProject = PROJECTS_DATA[0]; // Commercial High-Rise MEP
  const solarProject = PROJECTS_DATA[1]; // Logistics Facility Solar PV

  return (
    <main className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white">
      {/* =====================================================================
          01 — FULL-BLEED IMAGE HERO (~82vh)
          - No two-column layout
          - Division-specific engineering installation photography
          - Lower-left intentional anchor
      ===================================================================== */}
      <section
        aria-label="Engineering & Construction Hero"
        className="relative min-h-[78vh] lg:min-h-[82vh] flex items-end overflow-hidden bg-[#0B1C2F]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-building.jpg"
            alt="Engineering and Construction Infrastructure"
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
                DIVISION 01
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.12]">
              Capital Electromechanical Contracting &amp; EPC
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Turnkey MEP execution, utility-synchronized rooftop solar PV under DEWA Shams Dubai, and type-tested low-voltage control switchgear manufacturing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate('/contact')}
                className="text-[12px] tracking-[0.06em]"
              >
                Consult engineering team →
              </Button>

              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="group min-h-[44px] inline-flex items-center gap-2 text-[13px] text-white hover:text-slate-200 font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[4px]"
              >
                <span>View engineering projects</span>
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
        aria-label="Engineering Doctrine"
        className="py-20 lg:py-28 bg-white text-left"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block">
                DISCIPLINE 01
              </span>
              <span className="text-xs text-[#64748B] mt-1 block">
                Engineering Governance
              </span>
            </div>

            <div className="lg:col-span-9 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-[1.2]">
                Precision electromechanical coordination from engineering submittals to statutory utility energization.
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal max-w-3xl">
                Commercial high-rises and infrastructure projects fail when mechanical, electrical, and life-safety systems are procured as fragmented packages. LTSGROUP unifies hydraulic calculations, 3D BIM clash resolution, DEWA authority submittals, and factory panel assembly under singular technical accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 — CAPABILITY EXPLORER (VISUAL INDEX — ASYMMETRIC 7/5)
          - Replace 3-column scope grids
          - Varied image sizes: Dominant 7-col MEP + 2 Stacked 5-col items
          - Image, title, short one-line explanation, arrow
      ===================================================================== */}
      <section
        aria-label="Engineering Capabilities"
        className="py-16 lg:py-24 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-xl mb-10">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
              CAPABILITY MATRIX
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
              Three specialized engineering disciplines.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Dominant 7-Col Card: MEP Contracting */}
            <a
              href="/engineering-construction/mep"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/engineering-construction/mep');
              }}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden block min-h-[380px] sm:min-h-[460px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <img
                src="/assets/images/mep-construction.jpg"
                alt="MEP Contracting"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-white max-w-lg">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  CAPABILITY 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
                  Turnkey MEP Contracting
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  End-to-end electromechanical execution for commercial towers, residential communities, and infrastructure substations.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>Explore MEP scope</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* 5-Col Stacked: Solar PV + Switchgear */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              {/* Solar Photovoltaic EPC */}
              <a
                href="/engineering-construction/solar"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/engineering-construction/solar');
                }}
                className="group relative rounded-[18px] overflow-hidden block min-h-[220px] flex-1 bg-[#0B1C2F] flex flex-col justify-end p-6 sm:p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <img
                  src="/assets/images/project-solar.jpg"
                  alt="Solar Photovoltaic EPC"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    CAPABILITY 02
                  </span>
                  <h3 className="text-xl font-normal text-white tracking-tight">
                    Solar Photovoltaic (EPC)
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                    Commercial rooftop solar plants synchronized under the DEWA Shams Dubai net-metering framework.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore solar</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>

              {/* Control Switchgear Assembly */}
              <a
                href="/engineering-construction/control-switchgear"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/engineering-construction/control-switchgear');
                }}
                className="group relative rounded-[18px] overflow-hidden block min-h-[220px] flex-1 bg-[#0B1C2F] flex flex-col justify-end p-6 sm:p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              >
                <img
                  src="/assets/images/mep-construction.jpg"
                  alt="Control Switchgear Assembly"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    CAPABILITY 03
                  </span>
                  <h3 className="text-xl font-normal text-white tracking-tight">
                    Control Switchgear Assembly
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed font-normal">
                    Form-4 type-tested low-voltage switchboards, motor control centers (MCC), and custom automation panels.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore switchgear</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 — FEATURE STORY: 65/35 ASYMMETRIC SPLIT
          - 65% Image on Left
          - 35% Editorial Text on Right
      ===================================================================== */}
      <section
        aria-label="Turnkey Engineering Delivery"
        className="py-20 lg:py-28 bg-white text-left"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* 65% Dominant Image (8 cols) */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-[#0B1C2F]">
                <img
                  src="/assets/images/engineering-intro.jpg"
                  alt="Clash-Coordinated MEP Engineering"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1C2F]/35 via-transparent to-transparent" />
              </div>
            </div>

            {/* 35% Editorial Column (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block">
                EXECUTION DISCIPLINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight leading-snug">
                Eliminating clash rework before site mobilization.
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                By investing heavily in advanced 3D BIM clash modeling during pre-construction, LTSGROUP resolves spatial collisions between chilled water piping, cable containment, and fire sprinkler headers months before field fabrication.
              </p>
              <div className="pt-2 space-y-2.5 text-xs text-[#0B1320] font-medium">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#173C62] shrink-0" />
                  <span>DEWA Class 1 statutory engineering submittals</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#173C62] shrink-0" />
                  <span>Dubai Civil Defense (DCD) Class A fire systems</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#173C62] shrink-0" />
                  <span>DEWA Shams Dubai certified solar PV contractor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          05 — RELATED PROJECTS (VISUAL PROJECT RAIL — NOT 3 EQUAL CARDS)
          - 7/5 Asymmetric Rail: Dominant High-Rise (7 cols) + Solar PV (5 cols)
      ===================================================================== */}
      <section
        aria-label="Engineering Deployments"
        className="py-16 lg:py-24 bg-[#F8FAFC] text-left"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-1">
                VERIFIED DEPLOYMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Selected engineering case records.
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
            {/* Dominant Card: Commercial High-Rise (7 cols) */}
            <a
              href={`/projects/${mepProject.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/projects/${mepProject.slug}`);
              }}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden block min-h-[360px] sm:min-h-[420px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <img
                src={mepProject.image}
                alt={mepProject.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-white max-w-lg">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  {mepProject.categoryLabel} &bull; {mepProject.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                  {mepProject.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {mepProject.scopeOverview}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>View project record</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* Supporting Card: Solar PV Rooftop (5 cols) */}
            <a
              href={`/projects/${solarProject.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/projects/${solarProject.slug}`);
              }}
              className="lg:col-span-5 group relative rounded-[18px] overflow-hidden block min-h-[360px] sm:min-h-[420px] bg-[#0B1C2F] flex flex-col justify-end p-7 sm:p-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <img
                src={solarProject.image}
                alt={solarProject.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/95 via-[#0B1C2F]/40 to-transparent" />

              <div className="relative z-10 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  {solarProject.categoryLabel} &bull; {solarProject.location}
                </span>
                <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight">
                  {solarProject.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {solarProject.scopeOverview}
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
          06 — CLOSING CTA: ENGINEERING TENDER INTAKE
          - Unique to Engineering Division
          - Architectural background with deep navy scrim
      ===================================================================== */}
      <section
        aria-label="Engineering Consultation Closing"
        className="relative py-20 lg:py-28 bg-[#0B1C2F] text-white overflow-hidden text-left"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-building.jpg"
            alt="Engineering Consultation"
            className="w-full h-full object-cover object-center opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/85 to-[#0B1C2F]/70" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-slate-300 uppercase tracking-[0.24em] font-semibold block mb-2">
              TENDER &bull; RFP &bull; SPECIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
              Initiate an engineering &amp; tender review.
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
              Direct technical review of tender specifications, preliminary solar feasibility calculations, or switchgear single-line diagrams (SLD) with our senior engineering directorate.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate('/contact')}
                className="text-[12px] tracking-[0.06em]"
              >
                Submit tender documents →
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
                <a href={`mailto:${CORPORATE_INFO.contact.emailTenders}`} className="hover:text-white">
                  {CORPORATE_INFO.contact.emailTenders}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
