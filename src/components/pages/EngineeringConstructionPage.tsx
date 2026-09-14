import React from 'react';
import { IconArrow, IconPhone, IconEmail } from '../../design-system/icons';
import {
  CompositionLargeTypography,
  CompositionOverlappingImage,
  CompositionFullWidthProject,
} from '../../design-system/compositions';
import { CORPORATE_INFO } from '../../data/corporateData';

export interface EngineeringConstructionPageProps {
  onNavigate: (slug: string) => void;
  initialSubSection?: string;
}

/**
 * Engineering & Construction Division Page
 * Division 01: Turnkey electromechanical contracting, solar PV EPC, and control switchgear.
 * 
 * Art-directed narrative rhythm:
 * 01 Full-Bleed Image Hero (Composition 01)
 * 02 Large Typography Section (Composition 14 — Quiet Whitespace Breather)
 * 03 Asymmetric Capabilities: Dominant 7-col MEP + 5-col Stacked Rails (Zero 3-card grid!)
 * 04 Overlapping Image Composition (Composition 13 — Layered Technical Depth)
 * 05 Full-Width Project Image Showcase (Composition 07 — Verified Case Record)
 * 06 CTA Section
 */
export const EngineeringConstructionPage: React.FC<EngineeringConstructionPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="bg-white text-[#0B1320] font-sans selection:bg-[#173C62] selection:text-white pb-16 antialiased">
      
      {/* =========================================================================
          01 / HERO
          Full-bleed architectural / engineering image (~78vh) with LTS Blue authority.
      ========================================================================= */}
      <section className="relative w-full h-[78vh] min-h-[540px] max-h-[860px] bg-[#173C62] overflow-hidden">
        <img
          src="/assets/images/engineering-intro.jpg"
          alt="LTSGROUP Capital Electromechanical Contracting and Solar Infrastructure"
          className="w-full h-full object-cover filter brightness-[0.88] transition-transform duration-[800ms] ease-out hover:scale-[1.01]"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80';
          }}
        />

        {/* Directional LTS Blue gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/65 to-[#173C62]/20 pointer-events-none" />

        {/* Hero Content Positioned Lower-Left */}
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-left">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                LTSGROUP &bull; DIVISION 01 &bull; ENGINEERING &amp; CONSTRUCTION
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.06]">
                Capital Electromechanical Contracting &amp; EPC
              </h1>

              <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl pt-1">
                Turnkey electromechanical contracting, utility-scale solar PV under DEWA Shams Dubai, and type-tested low-voltage control switchgear across the United Arab Emirates.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact?tab=rfp&service=engineering')}
                  className="inline-flex items-center gap-2 bg-white text-[#173C62] hover:bg-slate-100 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 rounded-[12px] transition-colors cursor-pointer"
                >
                  <span>Consult Engineering Team</span>
                  <IconArrow size="sm" color="primary" interactive />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 rounded-[12px] backdrop-blur-md transition-colors cursor-pointer"
                >
                  <span>View Verified Projects</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 / EXECUTION PHILOSOPHY (Composition 14 — Large Typography Section)
          Airy whitespace breather with monumental typographic hierarchy. Zero boxed cards.
      ========================================================================= */}
      <CompositionLargeTypography
        eyebrow="01 • EXECUTION PHILOSOPHY"
        leadStatement="End-to-end electromechanical execution from engineering design to statutory authority handover."
        bodyText="We eliminate multi-vendor fragmentation on capital infrastructure projects by unifying in-house MEP engineering, solar EPC delivery, and custom low-voltage switchboard manufacturing under direct Dubai governance."
        attribution="LTSGROUP CAPITAL CONTRACTING STANDARD"
        tone="white"
      />

      {/* =========================================================================
          03 / CAPABILITIES (Asymmetric 7/5 Layout)
          Dominant 7-col MEP visual feature + 5-col stacked Solar & Switchgear rails.
          Strictly replaces the formulaic 3-column bordered grid.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#E5E7EB] gap-4">
            <div className="space-y-1 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                02 • OPERATING DISCIPLINES
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
                Integrated Engineering Disciplines
              </h2>
            </div>
            <span className="font-mono text-xs text-[#64748B]">
              [01 &bull; 02 &bull; 03]
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Dominant MEP Feature (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-[24px] border border-[#E5E7EB] p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-5 text-left">
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                  <span className="font-mono text-xs font-semibold text-[#173C62] tracking-wider uppercase">
                    DISCIPLINE 01 // CORE CONTRACTING
                  </span>
                  <span className="text-[11px] font-mono text-[#64748B] uppercase">
                    COMMERCIAL &bull; INFRASTRUCTURE
                  </span>
                </div>

                <div className="relative aspect-[16/10] rounded-[18px] overflow-hidden bg-[#173C62]">
                  <img
                    src="/assets/images/project-highrise.jpg"
                    alt="Turnkey MEP Contracting"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight pt-2">
                  MEP Contracting &amp; Turnkey Execution
                </h3>

                <p className="text-base text-[#4A5568] leading-relaxed font-normal">
                  Turnkey mechanical, electrical, and plumbing engineering for commercial towers, master residential communities, and municipal utilities. Full life-safety, hydronic balancing, and vertical power busways.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href="/engineering-construction/mep/commercial-residential"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/engineering-construction/mep/commercial-residential');
                    }}
                    className="p-3.5 rounded-[12px] bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#173C62] text-xs font-medium text-[#0B1320] flex items-center justify-between transition-colors"
                  >
                    <span>Commercial &amp; Residential</span>
                    <IconArrow size="sm" color="primary" interactive />
                  </a>

                  <a
                    href="/engineering-construction/mep/infrastructure"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/engineering-construction/mep/infrastructure');
                    }}
                    className="p-3.5 rounded-[12px] bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#173C62] text-xs font-medium text-[#0B1320] flex items-center justify-between transition-colors"
                  >
                    <span>Infrastructure &amp; Utilities</span>
                    <IconArrow size="sm" color="primary" interactive />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB]">
                <button
                  type="button"
                  onClick={() => onNavigate('/engineering-construction/mep')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#12304F] transition-colors cursor-pointer"
                >
                  <span>Explore Full MEP Scope &amp; Deliverables</span>
                  <IconArrow size="sm" color="primary" interactive />
                </button>
              </div>
            </div>

            {/* Right: Stacked Capability Rails (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              
              {/* Discipline 02: Solar EPC */}
              <div className="bg-white rounded-[24px] border border-[#E5E7EB] p-6 sm:p-8 space-y-4 text-left flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                    <span className="font-mono text-xs font-semibold text-[#173C62] tracking-wider uppercase">
                      DISCIPLINE 02
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B] uppercase">
                      DEWA SHAMS DUBAI
                    </span>
                  </div>

                  <h3 className="text-xl font-normal text-[#0B1320] tracking-tight">
                    Solar Solutions (EPC)
                  </h3>

                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Turnkey EPC delivery for commercial rooftop PV arrays, carport systems, and utility grid interconnections under the DEWA Shams Dubai initiative.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E7EB]">
                  <button
                    type="button"
                    onClick={() => onNavigate('/engineering-construction/solar')}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#12304F] transition-colors cursor-pointer"
                  >
                    <span>Inspect Solar PV Scope</span>
                    <IconArrow size="sm" color="primary" interactive />
                  </button>
                </div>
              </div>

              {/* Discipline 03: Control Switchgear */}
              <div className="bg-white rounded-[24px] border border-[#E5E7EB] p-6 sm:p-8 space-y-4 text-left flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                    <span className="font-mono text-xs font-semibold text-[#173C62] tracking-wider uppercase">
                      DISCIPLINE 03
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B] uppercase">
                      TYPE-TESTED UP TO 65kA
                    </span>
                  </div>

                  <h3 className="text-xl font-normal text-[#0B1320] tracking-tight">
                    Control Switchgear Assembly
                  </h3>

                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    Form-4 low-voltage switchboards, Motor Control Centers (MCC), synchronizing panels, and dynamic power factor correction systems.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E7EB]">
                  <button
                    type="button"
                    onClick={() => onNavigate('/engineering-construction/control-switchgear')}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#12304F] transition-colors cursor-pointer"
                  >
                    <span>Inspect Switchgear Scope</span>
                    <IconArrow size="sm" color="primary" interactive />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          04 / FIELD EXECUTION (Composition 13 — Overlapping Image Composition)
          Layered architectural and substation imagery demonstrating field precision.
      ========================================================================= */}
      <CompositionOverlappingImage
        eyebrow="03 • FIELD EXECUTION"
        title="Precision Engineering Across Critical Envelopes"
        description="Every electromechanical installation adheres strictly to Dubai Electricity and Water Authority (DEWA), Dubai Civil Defense (DCD), and Dubai Municipality (DM) engineering codes, ensuring seamless prequalification and life-safety clearance."
        mainImage="/assets/images/solar-epc.jpg"
        mainImageAlt="LTSGROUP Solar Infrastructure and High-Voltage Deployment"
        insetPlateImage="/assets/images/industry-logistics.jpg"
        insetPlateAlt="LTSGROUP Substation and Motor Control Center"
        insetCaption="PLATE 01 // SUBSTATION SYNCHRONIZATION"
        parameterTag="100% STATUTORY CLEARANCE RECORD"
      />

      {/* =========================================================================
          05 / SELECTED PROJECT SHOWCASE (Composition 07 — Full-Width Project Image)
          Panoramic project showcase with docked parameters and verified engineering data.
      ========================================================================= */}
      <CompositionFullWidthProject
        eyebrow="04 • DELIVERED INFRASTRUCTURE"
        projectTitle="Commercial High-Rise MEP Installation"
        category="Turnkey Electromechanical Contracting"
        location="Business Bay, Dubai"
        summary="Complete turnkey electromechanical installation for a 45-storey commercial tower comprising 2,400 TR central water-cooled chillers, vertical 4000A sandwich busway risers, and central automated BMS controls."
        image="/assets/images/project-highrise.jpg"
        imageAlt="Commercial High-Rise MEP Project"
        parameters={[
          { label: 'Plant Capacity', value: '2,400 TR Hydronic' },
          { label: 'Vertical Risers', value: '4000A Sandwich' },
          { label: 'Clearance Status', value: '100% Handover' },
        ]}
        ctaLabel="Inspect Full Case Record"
        ctaSlug="/projects/commercial-high-rise-mep"
        onNavigate={onNavigate}
      />

      {/* =========================================================================
          06 / CTA
          Clean LTS blue closing section.
      ========================================================================= */}
      <section className="pt-16 sm:pt-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="bg-[#173C62] text-white rounded-[24px] p-8 sm:p-14 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-5 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                COMMERCIAL ENGAGEMENT &bull; TENDERS
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                Submit your engineering tender or project scope.
              </h2>
              <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl">
                Connect directly with LTSGROUP estimating engineers and technical directors in Dubai for tender pricing, submittals, and compliance reviews.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact?tab=rfp&service=engineering')}
                  className="inline-flex items-center gap-2 bg-white text-[#173C62] hover:bg-slate-100 text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-[12px] transition-colors cursor-pointer"
                >
                  <span>Submit Engineering Tender</span>
                  <IconArrow size="sm" color="primary" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-[12px] transition-colors cursor-pointer"
                >
                  <span>View Project Records</span>
                </button>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-8 text-xs font-mono text-white/80">
                <div className="flex items-center gap-2">
                  <IconPhone size="sm" color="white" />
                  <span>{CORPORATE_INFO.contact.telephone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconEmail size="sm" color="white" />
                  <span>{CORPORATE_INFO.contact.emailTenders}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
