import React from 'react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Lock, Check } from 'lucide-react';
import { PROJECTS_DATA, ProjectDetailData } from '../../data/projectsData';

interface ClientsPageProps {
  onNavigate: (slug: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate }) => {
  // Verified UAE Statutory Authorities
  const statutoryAuthorities = [
    {
      code: 'DEWA',
      name: 'Dubai Electricity & Water Authority',
      role: 'Approved Electrical Contractor & Shams Dubai Solar PV EPC',
      scope:
        'Certified for 11kV substation coordination, low-impedance copper busduct risers, Form-4 switchgear submittals, and Shams Dubai net-metered solar photovoltaic grid synchronizations.',
    },
    {
      code: 'DCD',
      name: 'Dubai Civil Defense',
      role: 'Approved Fire Life-Safety & Smoke Management Systems',
      scope:
        'Licensed for high-rise stairwell smoke pressurization, basement smoke extract fans, fire-rated ductwork coordination, and certified life-safety compliance inspections.',
    },
    {
      code: 'DM',
      name: 'Dubai Municipality',
      role: 'Public Health, Building Drainage & Water Hydraulics',
      scope:
        'Compliant with municipal potable water storage codes, quad-pump variable-speed booster systems, stormwater lift infrastructure, and commercial aquatic hygiene standards.',
    },
    {
      code: 'STANDARDS',
      name: 'Governing Technical Codes',
      role: 'IEC, ASHRAE, AHRI & HTM Standards Compliance',
      scope:
        'Rigorous adherence to IEC 61439-1/2 (low-voltage switchboards), ASHRAE 90.1 (energy conservation), AHRI 550/590 (chiller efficiency), and HTM 03-01 (hospital cleanroom air hygiene).',
    },
  ];

  // 4 Clearances & Verification Milestones
  const clearanceMilestones = [
    {
      step: '01',
      title: 'Statutory Authority Submittals & NOCs',
      detail:
        'Direct permit applications, electrical single-line diagram approvals, and civil defense life-safety reviews cleared prior to on-site breaking of ground.',
    },
    {
      step: '02',
      title: 'Factory Acceptance Testing (FAT) Dossiers',
      detail:
        'Comprehensive factory testing for low-voltage switchboards (up to 65kA short-circuit withstand) and packaged booster pump skids before site mobilization.',
    },
    {
      step: '03',
      title: 'Independent Third-Party Testing & Balancing',
      detail:
        'Dynamic primary and secondary hydronic balancing, acoustic attenuation checks, and thermal imaging diagnostics verified by certified testing agencies.',
    },
    {
      step: '04',
      title: 'Statutory Handover & Lifecycle Commissioning',
      detail:
        'Final utility meter energization under DEWA, Dubai Civil Defense operational clearance certification, and handover into structured facility maintenance PPM regimes.',
    },
  ];

  // Verified Project Monograph References
  const verifiedReferences: ProjectDetailData[] = [
    PROJECTS_DATA[0], // Commercial High-Rise MEP
    PROJECTS_DATA[2], // Healthcare Facility Hard Services
    PROJECTS_DATA[1], // Logistics Solar PV
    PROJECTS_DATA[6], // District Cooling BTU Metering
  ].filter(Boolean);

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — HERO IMAGE
          Full-bleed architectural image (~75-80vh).
          H1: Credentials & Client Governance
          Short statement.
          No two-column hero.
      ========================================================================= */}
      <section className="relative w-full h-[76vh] min-h-[540px] max-h-[860px] bg-[#0B1C2F] overflow-hidden">
        {/* Full-bleed photography */}
        <img
          src="/assets/images/project-highrise.jpg"
          alt="LTSGROUP Built Asset Infrastructure and Institutional Trust"
          className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-[800ms] ease-out hover:scale-[1.01]"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
          }}
        />

        {/* Directional gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/85 via-[#0B1320]/30 to-[#0B1320]/40 pointer-events-none" />

        {/* Hero Content Positioned Intentionally in Lower-Left */}
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-4xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                Trust &amp; Verification
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[0.98]">
                Credentials &amp; Client Governance
              </h1>

              <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl pt-1">
                Institutional trust built on statutory authority licensing, rigorous commissioning, and strict commercial confidentiality across the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — SHORT EDITORIAL INTRODUCTION
          High-contrast editorial statement establishing trust, confidentiality,
          and why verified dossiers take precedence over fake logo grids.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Section Marker */}
            <div className="lg:col-span-4 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                01 &bull; Institutional Baseline
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Trust is earned through verified physical compliance.
              </h2>
            </div>

            {/* Right Column: Narrative & Confidentiality Framework */}
            <div className="lg:col-span-8 space-y-8">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#0B1320] leading-snug tracking-tight">
                In capital engineering and mission-critical facilities, credibility is demonstrated through statutory authority approvals, zero unplanned plant downtime, and transparent commissioning data.
              </p>

              <div className="space-y-6 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal max-w-[70ch]">
                <p>
                  LTSGROUP operates under strict commercial non-disclosure agreements (NDAs) protecting developer blueprints, security matrices, and critical infrastructure layouts. Rather than displaying unverified logo placeholders, we substantiate our track record through verified statutory pre-qualification dossiers and audited engineering monographs.
                </p>
              </div>

              {/* Commercial NDA Protocol Card */}
              <div className="p-6 sm:p-7 rounded-[20px] bg-[#F8FAFC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#173C62]/10 text-[#173C62] flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-[#0B1320] font-mono uppercase">
                      Commercial Non-Disclosure Protocol
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                      Detailed client reference letters, electrical single-line diagrams, and completion certificates are shared under formal pre-qualification dossiers for active tenders.
                    </p>
                  </div>
                </div>

                <a
                  href="/contact?tab=rfp"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact?tab=rfp');
                  }}
                  className="min-h-[44px] inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#11253E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px] cursor-pointer whitespace-nowrap"
                >
                  <span>Request Tender Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — AUTHORITY / COMPLIANCE SECTION
          Verified UAE statutory authority frameworks (DEWA, DCD, DM, Standards).
          Clean editorial layout, zero fake logos or generic cards.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="space-y-12 sm:space-y-16">
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                02 &bull; Statutory Authority Compliance
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
                Authority Licensure &amp; Standards
              </h2>
              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
                Operating under formal pre-qualification frameworks governed by Dubai utility directors, municipal civil defense authorities, and international engineering bodies.
              </p>
            </div>

            {/* 4 Clean Editorial Compliance Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statutoryAuthorities.map((auth, aIdx) => (
                <div
                  key={aIdx}
                  className="bg-white p-6 sm:p-7 rounded-[20px] space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-wider">
                        {auth.code}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-[#173C62]" />
                    </div>

                    <h3 className="text-lg font-medium text-[#0B1320] leading-snug">
                      {auth.name}
                    </h3>

                    <p className="text-xs font-mono text-[#173C62] leading-snug">
                      {auth.role}
                    </p>

                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal pt-1">
                      {auth.scope}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — CLEARANCES / CREDENTIALS MILESTONES
          Dignified presentation of operational clearances from permit to handover.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="space-y-12 sm:space-y-16">
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                03 &bull; Quality &amp; Verification Milestones
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
                Clearance &amp; Verification Procedures
              </h2>
              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
                Every electromechanical package and facility contract follows an audited 4-stage clearance workflow ensuring risk-free handover.
              </p>
            </div>

            {/* Clearances Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {clearanceMilestones.map((milestone, mIdx) => (
                <div key={mIdx} className="space-y-3 pt-4 border-t-2 border-[#173C62]">
                  <span className="font-mono text-xs text-[#173C62] font-semibold block">
                    STAGE {milestone.step}
                  </span>
                  <h3 className="text-base sm:text-lg font-medium text-[#0B1320] leading-snug">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {milestone.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — SUPPORTING EXPLANATION & DELIVERED EVIDENCE
          Connects trust directly to verified built works (PROJECTS_DATA).
          Builds confidence without fake logos.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-3xl space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                  04 &bull; Verified Delivered Evidence
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
                  Field Execution as Primary Proof
                </h2>
                <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
                  Real electromechanical installations, commercial rooftop solar plants, and continuous hospital facility operations delivered across Dubai.
                </p>
              </div>

              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-[#173C62] hover:underline uppercase tracking-wider shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px] cursor-pointer"
              >
                <span>View Full Monograph Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 4-Project Monograph Cards (Soft 18-20px radius, image-first) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {verifiedReferences.map((ref) => (
                <a
                  key={ref.id}
                  href={`/projects/${ref.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/projects/${ref.slug}`);
                  }}
                  className="group block select-none bg-white p-4 rounded-[20px] transition-all hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                  aria-label={`Inspect case study: ${ref.title}`}
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
        </div>
      </section>

      {/* =========================================================================
          06 — CONTACT / PREQUALIFICATION CTA
          Tender dossier and vendor pre-qualification intake.
      ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              Vendor Enrollment &amp; Pre-Qualification
            </span>

            <h2 className="text-3xl sm:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.08]">
              Request Complete Statutory Pre-Qualification Dossier
            </h2>

            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              Direct dispatch of verified commercial trade licensing, DEWA electrical contractor registrations, Dubai Civil Defense permits, and audited project handover letters for commercial developers and consultants.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact?tab=rfp"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact?tab=rfp');
                }}
                className="min-h-[44px] inline-flex items-center gap-2 px-7 py-3.5 rounded-[12px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#11253E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer"
              >
                <span>Request Pre-Qualification Pack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="min-h-[44px] inline-flex items-center gap-2 px-7 py-3.5 rounded-[12px] border border-[#CBD5E1] text-[#0B1320] text-xs font-semibold uppercase tracking-wider hover:bg-[#F8FAFC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer"
              >
                <span>Inspect Projects Archive</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
