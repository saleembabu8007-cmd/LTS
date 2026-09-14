import React from 'react';
import { IconArrow, IconArrowUpRight } from '../../design-system/icons';
import { ProofDominant } from '../../design-system/proof';
import { CompositionSplitEditorial } from '../../design-system/compositions';
import { EdgeToEdgeMedia } from '../../design-system/layouts';

interface AboutUsPageProps {
  onNavigate: (slug: string) => void;
}

/**
 * AboutUsPage — LTSGROUP Corporate Monograph
 * Conforms strictly to the master editorial content reduction rules:
 * - 01 HERO (Clean architectural visual + 1 short sentence)
 * - 02 WHO WE ARE (Short company introduction — single question: Who are you?)
 * - 03 VISION & MISSION (Concise, verified institutional commitments)
 * - 04 BUSINESS STRUCTURE (Approved 3-division hierarchy: E&C, FM, Trading)
 * - 05 CTA (Direct action consultation)
 */
export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — HERO
          Full-screen architectural image.
          H1: About LTSGROUP
          Short supporting statement (1 sentence).
          LTS Brand Blue authority: #173C62
      ========================================================================= */}
      <section className="relative w-full h-[80vh] min-h-[520px] max-h-[860px] bg-[#173C62] overflow-hidden">
        <img
          src="/assets/images/hero-building.jpg"
          alt="LTSGROUP Corporate Architecture and Built Assets"
          className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-[800ms] ease-out hover:scale-[1.01]"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/65 to-[#173C62]/25 pointer-events-none" />

        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-[0.14em] text-[#CBD5E1] block font-medium">
                Corporate Profile
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[0.98]">
                About LTSGROUP
              </h1>

              <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl pt-1">
                Integrated electromechanical contracting, life-cycle facility stewardship, and specialized component distribution across the United Arab Emirates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — SHORT COMPANY INTRODUCTION (5/7 Asymmetric Split)
          Single question: Who are you?
          1 strong headline + 1 concise sentence.
      ========================================================================= */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-2 text-left">
              <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] block font-semibold">
                01 &bull; Corporate Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Single-source accountability across the asset lifecycle.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-4 text-left">
              <p className="text-xl sm:text-2xl font-light text-[#0B1320] leading-snug tracking-tight">
                LTSGROUP unites electromechanical contracting, critical facilities operations, and OEM component supply under one corporate standard.
              </p>

              <p className="text-base text-[#4A5568] leading-relaxed font-normal max-w-[65ch]">
                We eliminate multi-vendor fragmentation by maintaining in-house teams across capital engineering, central plant maintenance, and technical wholesale supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — INSTITUTIONAL COMMITMENTS (Composition 08: Split Editorial Section)
          Replaces repetitive boxed cards with an open, prestigious 5/7 editorial split.
      ========================================================================= */}
      <CompositionSplitEditorial
        sectionEyebrow="02 • Institutional Commitments"
        mainTitle="Direction & Engineering Purpose"
        leadParagraph="Governed by precision engineering standards, statutory alignment, and uninterrupted life-cycle asset performance across Dubai and the UAE built environment."
        columns={[
          {
            eyebrow: 'Corporate Vision',
            title: 'Sustainable built environments.',
            description: "To be the region's benchmark for reliable electromechanical infrastructure, delivering engineering precision and life-cycle asset performance.",
          },
          {
            eyebrow: 'Corporate Mission',
            title: 'Engineering excellence in execution.',
            description: 'To deliver compliant, turnkey MEP contracting, responsive facilities management, and certified technical equipment with uninterrupted operational continuity.',
          },
        ]}
        tone="white"
      />

      {/* =========================================================================
          04 — VERIFIED OPERATIONAL SCALE (ProofDominant - Option C)
          Forensic evidence: 03 Pillars + 03 ISO Standards + 100% Statutory Compliance
      ========================================================================= */}
      <ProofDominant
        eyebrow="03 • SCALE &amp; EVIDENCE"
        title="VERIFIED INSTITUTIONAL PROOF"
        tone="white"
        dominantItem={{
          index: '01',
          value: '03',
          label: 'Core Operating Pillars',
          subtext: 'Turnkey Electromechanical Contracting, Facilities Stewardship, and Technical Equipment Trading.',
        }}
        supportingItems={[
          {
            index: '02',
            value: '24/7',
            label: 'Emergency Response SLA',
            subtext: 'Continuous electromechanical monitoring and rapid UAE technical dispatch center.',
          },
          {
            index: '03',
            value: '100%',
            label: 'Statutory Authority Compliance',
            subtext: 'Strict regulatory alignment across DEWA, Dubai Civil Defense, and Dubai Municipality codes.',
          },
        ]}
      />

      {/* =========================================================================
          05 — BUSINESS STRUCTURE
          Approved LTSGROUP operational hierarchy: E&C, FM, Trading.
          Clean diagram with sub-disciplines, zero marketing fluff.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12 sm:space-y-16">
          <div className="max-w-3xl space-y-3 text-left">
            <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] block font-semibold">
              02 &bull; Operational Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
              Business Structure
            </h2>
            <p className="text-base text-[#4A5568] leading-relaxed">
              Centralized corporate governance directing three specialized operating divisions.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <span className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight font-sans">
                LTSGROUP
              </span>
              <span className="h-px flex-1 bg-[#CBD5E1]" />
              <span className="text-xs text-[#64748B] uppercase tracking-[0.12em] font-medium shrink-0">
                Central Corporate Standard
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 text-left">
              {/* Division 1 */}
              <div className="space-y-5 pt-2">
                <div className="border-t-2 border-[#173C62] pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#173C62] font-semibold">01</span>
                    <a
                      href="/engineering-construction"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/engineering-construction');
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#173C62] hover:underline uppercase tracking-wider py-1 focus-visible:outline-none"
                    >
                      <span>Division Page</span>
                      <IconArrowUpRight size="sm" color="inherit" interactive />
                    </a>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] tracking-tight">
                    Engineering &amp; Construction
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-[#4A5568]">
                  <div>
                    <h4 className="font-medium text-[#0B1320] text-sm">MEP Contracting</h4>
                    <p className="text-[#64748B]">Commercial, residential, and infrastructure contracting.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0B1320] text-sm">Solar PV (EPC)</h4>
                    <p className="text-[#64748B]">Commercial rooftop arrays under DEWA Shams Dubai.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0B1320] text-sm">Control Switchgear</h4>
                    <p className="text-[#64748B]">Type-tested low-voltage switchboards and MCCs.</p>
                  </div>
                </div>
              </div>

              {/* Division 2 */}
              <div className="space-y-5 pt-2">
                <div className="border-t-2 border-[#173C62] pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#173C62] font-semibold">02</span>
                    <a
                      href="/facilities-management"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/facilities-management');
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#173C62] hover:underline uppercase tracking-wider py-1 focus-visible:outline-none"
                    >
                      <span>Division Page</span>
                      <IconArrowUpRight size="sm" color="inherit" interactive />
                    </a>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] tracking-tight">
                    Facilities Management
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-[#4A5568]">
                  <div>
                    <h4 className="font-medium text-[#0B1320] text-sm">Hard Services</h4>
                    <p className="text-[#64748B]">Central chillers, electrical, plumbing, and BMS maintenance.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0B1320] text-sm">Soft Services</h4>
                    <p className="text-[#64748B]">Commercial aquatic care, filtration, and water hygiene.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0B1320] text-sm">Retrofits &amp; Refurbishment</h4>
                    <p className="text-[#64748B]">Live-building chiller replacements and equipment overhauls.</p>
                  </div>
                </div>
              </div>

              {/* Division 3 */}
              <div className="space-y-5 pt-2">
                <div className="border-t-2 border-[#173C62] pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#173C62] font-semibold">03</span>
                    <a
                      href="/trading"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/trading');
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#173C62] hover:underline uppercase tracking-wider py-1 focus-visible:outline-none"
                    >
                      <span>Division Page</span>
                      <IconArrowUpRight size="sm" color="inherit" interactive />
                    </a>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] tracking-tight">
                    Trading &amp; Supply
                  </h3>
                </div>

                <div className="space-y-3 text-xs text-[#4A5568]">
                  <div>
                    <h4 className="font-medium text-[#0B1320] text-sm">HVAC Spare Parts</h4>
                    <p className="text-[#64748B]">OEM compressors, coils, valves, and hardware.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0B1320] text-sm">Controls &amp; VFDs</h4>
                    <p className="text-[#64748B]">Variable frequency drives, BACnet controllers, and sensors.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#0B1320] text-sm">Metering, Lights &amp; EV</h4>
                    <p className="text-[#64748B]">Ultrasonic BTU meters, industrial LED lights, and EV chargers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — FULL-BLEED ARCHITECTURAL BREAK (EdgeToEdgeMedia)
          Container-breaking edge-to-edge media moment calibrating institutional scale.
      ========================================================================= */}
      <EdgeToEdgeMedia
        src="/assets/images/project-highrise.jpg"
        alt="LTSGROUP Built Works & Commercial Infrastructure Delivery"
        caption="SINGLE-SOURCE ACCOUNTABILITY ACROSS COMMERCIAL AND INFRASTRUCTURE BUILT ENVIRONMENTS"
        coordinates="25.2048° N, 55.2708° E • DUBAI UAE"
        aspectRatio="panoramic"
      />

      {/* =========================================================================
          07 — CTA
          Clean LTS blue closing section.
      ========================================================================= */}
      <section className="relative w-full py-20 sm:py-28 bg-[#173C62] text-white overflow-hidden">
        <img
          src="/assets/images/project-highrise.jpg"
          alt="LTSGROUP Built Works"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/80 to-[#173C62]/60 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          <div className="max-w-2xl mx-auto space-y-5">
            <span className="text-xs uppercase tracking-[0.14em] text-[#CBD5E1] block font-medium">
              Built to Perform
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
              Ready to engineer your next asset?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Connect with our Dubai engineering directors for commercial tenders, facility agreements, or equipment distribution.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-[8px] bg-white text-[#173C62] text-xs font-semibold uppercase tracking-wider hover:bg-slate-100 transition-colors focus-visible:outline-none"
              >
                <span>Contact / Enquire</span>
                <IconArrow size="sm" color="inherit" interactive />
              </a>

              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 min-h-[44px] rounded-[8px] bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/20 transition-colors focus-visible:outline-none"
              >
                <span>View Projects Archive</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
