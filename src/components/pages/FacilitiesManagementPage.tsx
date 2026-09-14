import React, { useState } from 'react';
import {
  IconHVAC,
  IconElectrical,
  IconPlumbing,
  IconBMS,
  IconCivil,
  IconArrow,
  IconPhone,
  IconEmail,
} from '../../design-system/icons';
import {
  CompositionSplitEditorial,
  ProofSplit,
} from '../../design-system/compositions';
import { CORPORATE_INFO } from '../../data/corporateData';

export interface FacilitiesManagementPageProps {
  onNavigate: (slug: string) => void;
  initialSubSection?: string;
}

type FMTab = 'hard-services' | 'soft-services' | 'retrofits';

/**
 * Facilities Management Division Page
 * Division 02: Continuous built asset stewardship, hard and soft FM services, and live plant retrofits.
 * 
 * Art-directed narrative rhythm:
 * 01 Full-Bleed Image Hero (Composition 01 — Chiller Plant Architecture)
 * 02 Split Editorial Section (Composition 08 — Stewardship Philosophy)
 * 03 Horizontal Service List & Telemetry (Composition 05 — Zero Boxed Cards!)
 * 04 Full-Width Image Plate (Composition 01 — Visual Resting Moment)
 * 05 Operational Proof (Composition 06 / ProofSplit — 24/7 Rapid Dispatch & SLA)
 * 06 CTA Section
 */
export const FacilitiesManagementPage: React.FC<FacilitiesManagementPageProps> = ({
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<FMTab>('hard-services');

  const hardServices = [
    {
      num: '01',
      code: 'HVAC',
      title: 'Central Chiller Plants & Cooling Towers',
      desc: 'Compressor overhauls, tube eddy current testing, variable primary flow pumping, and thermodynamic water treatment.',
      slug: '/facilities-management/hvac',
      icon: IconHVAC,
      sla: '99.8% Uptime SLA',
    },
    {
      num: '02',
      code: 'POWER',
      title: 'Electrical Power Distribution & Panels',
      desc: 'Thermographic infrared surveys, power factor capacitor banks, busbar torque audits, and statutory DEWA compliance.',
      slug: '/facilities-management/electrical',
      icon: IconElectrical,
      sla: 'Zero Arc Faults',
    },
    {
      num: '03',
      code: 'HYDRONICS',
      title: 'Commercial Plumbing & Water Systems',
      desc: 'Potable booster skids, backflow prevention certifications, drainage lift stations, and acoustic vibration dampening.',
      slug: '/facilities-management/plumbing',
      icon: IconPlumbing,
      sla: '24/7 Leak Response',
    },
    {
      num: '04',
      code: 'AUTOMATION',
      title: 'Building Management Systems (BMS) & DDC',
      desc: 'Field sensor recalibration, automated valve actuator testing, BTU metering verification, and energy optimization.',
      slug: '/facilities-management/bms',
      icon: IconBMS,
      sla: 'Direct Telemetry',
    },
    {
      num: '05',
      code: 'CIVIL',
      title: 'Plant Room Civil Works & Structural Isolation',
      desc: 'Inertia base replacements, seismic spring isolators, chemical-resistant bund lining, and architectural plant acoustic baffles.',
      slug: '/facilities-management/civil',
      icon: IconCivil,
      sla: 'Structural Soundness',
    },
  ];

  return (
    <div className="bg-white text-[#0B1320] font-sans selection:bg-[#173C62] selection:text-white pb-16 antialiased">
      
      {/* =========================================================================
          01 / HERO
          Full-bleed industrial facility / chiller plant image (~78vh) with LTS Blue authority.
      ========================================================================= */}
      <section className="relative w-full h-[78vh] min-h-[540px] max-h-[860px] bg-[#173C62] overflow-hidden">
        <img
          src="/assets/images/project-chiller.jpg"
          alt="LTSGROUP Facilities Management and Central Plant Reliability"
          className="w-full h-full object-cover filter brightness-[0.88] transition-transform duration-[800ms] ease-out hover:scale-[1.01]"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1920&q=80';
          }}
        />

        {/* Directional LTS Blue gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/65 to-[#173C62]/20 pointer-events-none" />

        {/* Hero Content Positioned Lower-Left */}
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-left">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                LTSGROUP &bull; DIVISION 02 &bull; FACILITIES MANAGEMENT
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.06]">
                Continuous Built Asset Stewardship &amp; Plant Reliability
              </h1>

              <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl pt-1">
                Preserving electromechanical equipment life, statutory authority compliance, and continuous thermodynamic plant uptime across commercial, healthcare, and industrial assets.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact?tab=general&service=facilities')}
                  className="inline-flex items-center gap-2 bg-white text-[#173C62] hover:bg-slate-100 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 rounded-[12px] transition-colors cursor-pointer"
                >
                  <span>Schedule Facility Audit</span>
                  <IconArrow size="sm" color="primary" interactive />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 rounded-[12px] backdrop-blur-md transition-colors cursor-pointer"
                >
                  <span>Review FM Case Records</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 / STEWARDSHIP PHILOSOPHY (Composition 08 — Split Editorial Section)
          5/7 editorial split with verified operational protocols. Zero generic quotes.
      ========================================================================= */}
      <CompositionSplitEditorial
        sectionEyebrow="01 • STEWARDSHIP PHILOSOPHY"
        mainTitle="Disciplined Asset Governance"
        leadParagraph="Disciplined preventive maintenance and continuous thermodynamic plant stewardship safeguarding operational longevity and uninterrupted uptime."
        columns={[
          {
            eyebrow: 'CMMS Predictive Scheduling',
            title: 'Preventive PPM Protocols',
            description: 'Rigorous scheduled maintenance overhauls, lube oil spectroscopy, thermographic surveys, and dynamic hydronic balancing preventing premature plant failure.',
          },
          {
            eyebrow: '24/7 Operations Desk',
            title: 'Rapid Telemetry & Dispatch',
            description: 'Centralized UAE command center monitoring critical BMS alarm thresholds with dedicated mobile engineering units ensuring rapid on-site emergency resolution.',
          },
        ]}
        tone="white"
      />

      {/* =========================================================================
          03 / SERVICE ARCHITECTURE (Composition 05 — Horizontal Service List)
          Clean horizontal typographic line rows with dedicated LTSIcons and SLA indicators.
          Zero bulky card boxes!
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-10 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 gap-6">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                02 • SERVICE ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
                Three Operational FM Pillars
              </h2>
            </div>

            {/* Category Switcher: Architectural Segmented Underline Controls */}
            <div className="flex items-center gap-6 sm:gap-8 border-b border-[#CBD5E1]">
              {[
                { id: 'hard-services', label: 'Hard Services (5)' },
                { id: 'soft-services', label: 'Soft Services (1)' },
                { id: 'retrofits', label: 'Retrofits (3)' },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as FMTab)}
                    className={`relative pb-3 text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                      isActive ? 'text-[#173C62]' : 'text-slate-500 hover:text-[#0B1320]'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#173C62]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 01 HARD SERVICES: Open Editorial Line Items on Canvas (Zero Boxed Containers) */}
          {activeTab === 'hard-services' && (
            <div className="divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
              {hardServices.map((svc) => {
                const IconComponent = svc.icon;
                return (
                  <div
                    key={svc.title}
                    onClick={() => onNavigate(svc.slug)}
                    className="py-6 sm:py-8 group flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start gap-4 sm:gap-6 max-w-3xl">
                      <div className="w-10 h-10 rounded-[10px] bg-[#173C62]/5 text-[#173C62] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#173C62] group-hover:text-white transition-colors">
                        <IconComponent size="sm" color="inherit" />
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs uppercase tracking-wider text-[#173C62] font-semibold">
                            {svc.num} &bull; {svc.code}
                          </span>
                          <span className="text-[#CBD5E1]">&bull;</span>
                          <span className="font-mono text-[11px] text-[#64748B] uppercase">
                            {svc.sla}
                          </span>
                        </div>

                        <h3 className="text-xl font-normal text-[#0B1320] group-hover:text-[#173C62] transition-colors tracking-tight">
                          {svc.title}
                        </h3>

                        <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
                          {svc.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173C62] group-hover:translate-x-1 transition-transform self-end md:self-center shrink-0">
                      <span>Inspect Protocol</span>
                      <IconArrow size="sm" color="primary" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* 02 SOFT SERVICES: Open Architectural Showcase */}
          {activeTab === 'soft-services' && (
            <div className="border-t-2 border-[#173C62] pt-8 max-w-3xl space-y-5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#173C62] font-semibold block">
                SOFT SERVICES &bull; AQUATIC HYGIENE
              </span>

              <h3 className="text-2xl font-light text-[#0B1320] tracking-tight">
                Commercial Swimming Pool Maintenance &amp; Water Chemistry
              </h3>

              <p className="text-base text-[#4A5568] leading-relaxed">
                Daily chemical balancing (pH, chlorine, total alkalinity), automated dosing calibration, commercial sand and cartridge filtration backwashing, and strict Dubai Municipality public health compliance.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/facilities-management/swimming-pool')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#12304F] transition-colors cursor-pointer"
                >
                  <span>Explore Aquatic Hygiene Scope</span>
                  <IconArrow size="sm" color="primary" interactive />
                </button>
              </div>
            </div>
          )}

          {/* 03 RETROFITS: 3-Phase Open Hairline Roadmap */}
          {activeTab === 'retrofits' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {[
                {
                  phase: 'PHASE 01',
                  title: 'Design & Engineering',
                  desc: 'Hydronic load recalculations, variable primary flow conversion studies, and plant thermodynamic analysis.',
                  slug: '/facilities-management/retrofits/design-engineering',
                },
                {
                  phase: 'PHASE 02',
                  title: 'Project Management',
                  desc: 'Phased live-building chiller changeouts, temporary modular cooling cutovers, and zero tenant disruption.',
                  slug: '/facilities-management/retrofits/project-management',
                },
                {
                  phase: 'PHASE 03',
                  title: 'Testing & Commissioning',
                  desc: 'Third-party water and air balancing (TAB), vibration baseline certification, and statutory DEWA handovers.',
                  slug: '/facilities-management/retrofits/testing-commissioning',
                },
              ].map((rf) => (
                <div
                  key={rf.phase}
                  onClick={() => onNavigate(rf.slug)}
                  className="border-t-2 border-[#173C62] pt-6 space-y-4 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-wider block">
                      {rf.phase}
                    </span>
                    <h4 className="text-xl font-normal text-[#0B1320] group-hover:text-[#173C62] transition-colors tracking-tight">
                      {rf.title}
                    </h4>
                    <p className="text-sm text-[#4A5568] leading-relaxed">
                      {rf.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#173C62]">
                    <span>Inspect Phase</span>
                    <IconArrow size="sm" color="primary" interactive />
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          04 / FULL-WIDTH FEATURE IMAGE (Composition 01 — Visual Resting Moment)
          Panoramic visual demonstrating plant telemetry & critical chiller operations.
      ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="relative rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-[#173C62] max-h-[560px] border border-[#E5E7EB]">
            <img
              src="/assets/images/project-chiller.jpg"
              alt="LTSGROUP Central Chiller Plant Reliability & Hard FM Operations"
              className="w-full h-full object-cover filter brightness-[0.88]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
              <div className="space-y-1 text-left">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#93C5FD] block">
                  PLANT TELEMETRY // 24/7 SLA DISPATCH
                </span>
                <p className="text-base sm:text-xl font-light tracking-tight">
                  Central chiller plant optimization and critical asset reliability stewardship.
                </p>
              </div>
              <span className="text-[11px] font-mono text-white/90 uppercase tracking-widest bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-[8px] border border-white/20 font-medium">
                15-MINUTE ESCALATION SLA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 / OPERATIONAL PROOF (Composition 06 — ProofSplit: Option B)
          Monumental 24/7 emergency dispatch paired with chiller telemetry SLA.
      ========================================================================= */}
      <ProofSplit
        eyebrow="03 / OPERATIONAL RELIABILITY"
        title="VERIFIED FM RESPONSE BENCHMARKS"
        tone="stone"
        leadMetric={{
          index: '01',
          value: '24/7',
          label: 'Continuous Emergency Dispatch',
          subtext: 'UAE-wide rapid response desk for critical chiller plant trips, power anomalies, and hydronic failures.',
        }}
        statement="Every managed asset is bound by explicit service level agreements, preventive CMMS scheduling, and direct Dubai municipal compliance."
        supportingCitations={[
          'Immediate 15-minute emergency escalation protocol for critical central plants.',
          'Comprehensive preventive maintenance schedules managed via enterprise CMMS.',
          'Fully certified and compliant with Dubai Municipality public health and safety standards.',
        ]}
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
                OPERATIONAL AUDITS &bull; SLAS
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                Request a plant reliability or facility maintenance audit.
              </h2>
              <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl">
                Connect directly with our facilities directors in Dubai to review preventive maintenance SLAs, equipment logs, and operational agreements.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact?tab=general&service=facilities')}
                  className="inline-flex items-center gap-2 bg-white text-[#173C62] hover:bg-slate-100 text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-[12px] transition-colors cursor-pointer"
                >
                  <span>Request Facility Audit</span>
                  <IconArrow size="sm" color="primary" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/projects')}
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-[12px] transition-colors cursor-pointer"
                >
                  <span>Review Case Records</span>
                </button>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-8 text-xs font-mono text-white/80">
                <div className="flex items-center gap-2">
                  <IconPhone size="sm" color="white" />
                  <span>{CORPORATE_INFO.contact.telephone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconEmail size="sm" color="white" />
                  <span>{CORPORATE_INFO.contact.emailFM}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
