import React from 'react';
import {
  IconArrow,
  IconArrowUpRight,
  IconCheck,
  IconHVAC,
  IconElectrical,
  IconSolar,
  IconSwitchgear,
  IconBMS,
} from '../../design-system/icons';
import { PROJECTS_DATA } from '../../data/projectsData';

interface IndustriesPageProps {
  onNavigate: (slug: string) => void;
}

interface IndustryItem {
  num: string;
  name: string;
  sentence: string;
  image: string;
  fallbackImage: string;
  projectSlug: string;
}

/**
 * IndustriesPage — LTSGROUP Sector Monograph
 * Conforms strictly to the 5-stage minimal-content architecture:
 * 01 Hero &rarr; 02 Industry Visual Grid (6 Sectors) &rarr; 03 Relevant Solutions &rarr; 04 Delivered Projects &rarr; 05 CTA.
 */
export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
  // 6 Verified Industries conforming to approved business data
  const industries: IndustryItem[] = [
    {
      num: '01',
      name: 'Commercial Towers & Real Estate',
      sentence:
        'High-density vertical electromechanical infrastructure, centralized district cooling hydronics, and certified life-safety smoke management.',
      image: '/assets/images/industry-commercial.jpg',
      fallbackImage: '/assets/images/project-highrise.jpg',
      projectSlug: 'commercial-high-rise-mep',
    },
    {
      num: '02',
      name: 'Healthcare & Clinical Facilities',
      sentence:
        'Continuous central chiller uptime, HTM 03-01 hospital cleanroom ventilation, and 24/7 critical plant stewardship.',
      image: '/assets/images/industry-healthcare.jpg',
      fallbackImage: '/assets/images/project-chiller.jpg',
      projectSlug: 'healthcare-facility-hard-services',
    },
    {
      num: '03',
      name: 'Logistics & Industrial Manufacturing',
      sentence:
        'Turnkey rooftop solar PV arrays, live-plant chiller retrofits, and Form-4 motor control centers with zero production downtime.',
      image: '/assets/images/industry-logistics.jpg',
      fallbackImage: '/assets/images/project-solar.jpg',
      projectSlug: 'logistics-facility-solar-pv',
    },
    {
      num: '04',
      name: 'District Cooling & Utilities Infrastructure',
      sentence:
        'Revenue-grade static ultrasonic BTU thermal energy metering, automated telemetry, and municipal hydraulic distribution networks.',
      image: '/assets/images/hero-building.jpg',
      fallbackImage: '/assets/images/engineering-intro.jpg',
      projectSlug: 'district-cooling-metering-rollout',
    },
    {
      num: '05',
      name: 'Educational & Institutional Campuses',
      sentence:
        'Multi-facility planned preventive maintenance, central plant energy optimization, and life-safety compliance.',
      image: '/assets/images/engineering-intro.jpg',
      fallbackImage: '/assets/images/mep-construction.jpg',
      projectSlug: 'institutional-campus-facilities',
    },
    {
      num: '06',
      name: 'Hospitality & Commercial Aquatic Centers',
      sentence:
        'Turnkey heat-pump climate control, automated chemical water balancing, and municipal health hygiene certification.',
      image: '/assets/images/project-chiller.jpg',
      fallbackImage: '/assets/images/industry-healthcare.jpg',
      projectSlug: 'luxury-resort-aquatic-systems',
    },
  ];

  // Cross-sector solutions mapping
  const solutions = [
    {
      title: 'Turnkey MEP Contracting',
      desc: 'BIM-coordinated hydronic piping, electrical busways, and certified life-safety systems.',
      icon: IconElectrical,
      slug: '/engineering-construction/mep',
    },
    {
      title: 'Solar Photovoltaic EPC',
      desc: 'Commercial rooftop PV and carport arrays under the DEWA Shams Dubai framework.',
      icon: IconSolar,
      slug: '/engineering-construction/solar',
    },
    {
      title: 'Hard Facilities Stewardship',
      desc: '24/7 central chiller plant maintenance, vibration diagnostics, and CAFM telemetry.',
      icon: IconHVAC,
      slug: '/facilities-management',
    },
    {
      title: 'Control Switchgear',
      desc: 'Form-4 type-tested low-voltage switchboards up to 65kA and Motor Control Centers (MCC).',
      icon: IconSwitchgear,
      slug: '/engineering-construction/control-switchgear',
    },
    {
      title: 'BTU Metering & Controls',
      desc: 'Ultrasonic thermal energy meters, low-harmonic VFDs, and automated building sensors.',
      icon: IconBMS,
      slug: '/trading',
    },
  ];

  // Curated 2-case study projects
  const relevantProjects = [PROJECTS_DATA[0], PROJECTS_DATA[2]].filter(Boolean);

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — HERO
          Full-bleed architectural hero (~76vh).
          LTS Brand Blue authority: #173C62
      ========================================================================= */}
      <section className="relative w-full h-[72vh] sm:h-[76vh] min-h-[520px] max-h-[840px] bg-[#173C62] overflow-hidden">
        <img
          src="/assets/images/hero-building.jpg"
          alt="LTSGROUP Operating Industries and Sector Infrastructure"
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
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                Sectors &amp; Operating Environments
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[0.98]">
                Industries
              </h1>

              <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl pt-1">
                Specialized electromechanical contracting, life-cycle facility stewardship, and equipment supply engineered for the regulatory and environmental realities of each sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — INDUSTRY VISUAL GRID
          Asymmetric visual index of the 6 verified sectors.
      ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12 sm:space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              01 &bull; Sector Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
              Operating Sectors &amp; Environments
            </h2>
            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              Six established commercial, institutional, and infrastructure domains where LTSGROUP delivers capital execution and continuous reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {industries.map((item) => (
              <div
                key={item.num}
                onClick={() => onNavigate(`/projects/${item.projectSlug}`)}
                className="group cursor-pointer block text-left transition-all"
              >
                <div className="relative overflow-hidden rounded-[18px] bg-[#173C62] aspect-[16/10] mb-5 border border-[#E5E7EB]">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = item.fallbackImage;
                    }}
                  />
                  <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wider text-white bg-[#173C62]/90 backdrop-blur-xs px-2.5 py-1 rounded-[6px] border border-white/15">
                    Sector {item.num}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
                    {item.sentence}
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173C62]">
                    <span>Inspect Sector Monograph</span>
                    <IconArrowUpRight size="sm" color="primary" interactive />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — RELEVANT SOLUTIONS
          Concise cross-sector engineering solutions matrix.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              02 &bull; Cross-Sector Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
              Core Engineering Solutions
            </h2>
            <p className="text-base text-[#4A5568] leading-relaxed">
              Standardized engineering packages deployed across commercial towers, healthcare complexes, and industrial logistics parks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {solutions.map((sol, sIdx) => {
              const IconComp = sol.icon;
              return (
                <button
                  key={sIdx}
                  onClick={() => onNavigate(sol.slug)}
                  className="text-left group p-6 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#173C62] transition-all flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#173C62]/5 text-[#173C62] flex items-center justify-center">
                      <IconComp size="md" color="primary" />
                    </div>
                    <h4 className="text-base font-medium text-[#173C62] leading-snug">
                      {sol.title}
                    </h4>
                    <p className="text-xs text-[#999999] leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-medium text-[#173C62]">
                    <span>Scope Details</span>
                    <IconArrow size="sm" color="primary" interactive />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — DELIVERED PROJECTS PROOF
          Curated case study evidence by sector.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block mb-2 font-semibold">
                03 &bull; Field Verification
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
                Delivered Sector Proof
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/projects')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173C62] hover:underline uppercase tracking-wider cursor-pointer"
            >
              <span>View All Project Records</span>
              <IconArrow size="sm" color="primary" interactive />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {relevantProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onNavigate(`/projects/${proj.slug}`)}
                className="group cursor-pointer bg-[#F8FAFC] rounded-[20px] p-6 sm:p-8 border border-[#E5E7EB] hover:border-[#173C62]/40 transition-all"
              >
                <div className="aspect-[16/10] rounded-[16px] overflow-hidden mb-5 bg-[#173C62] border border-[#E5E7EB]">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-xs text-[#64748B]">
                    <span>{proj.industry}</span>
                    <span>{proj.location.split(',')[0]}</span>
                  </div>
                  <h3 className="text-xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                    {proj.title}
                  </h3>
                  <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-[#173C62]">
                    <span>Read Monograph</span>
                    <IconArrow size="sm" color="primary" interactive />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — CTA
          Commercial engagement & specification intake.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="bg-[#173C62] text-white rounded-[24px] p-8 sm:p-14 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-5">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-white/70 block">
                04 &bull; COMMERCIAL ENGAGEMENT
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                Engineer your next sector facility with LTSGROUP.
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed max-w-2xl">
                Submit project drawings, RFP schedules, or facility maintenance requirements directly to our engineering directors in Dubai.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/contact?tab=rfp')}
                  className="inline-flex items-center gap-2 bg-white text-[#173C62] hover:bg-white/95 text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-[12px] transition-all duration-200 cursor-pointer"
                >
                  <span>Submit Project Scope</span>
                  <IconArrow size="sm" color="primary" interactive />
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-4 rounded-[12px] transition-all duration-200 cursor-pointer"
                >
                  <span>Contact Engineering Desk</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
