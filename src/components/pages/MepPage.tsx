import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Wind, Zap, Droplets, MapPin, Phone } from 'lucide-react';
import { Container } from '../../design-system/structures/Container';
import { Button } from '../../design-system/atoms/Button';
import { Tag } from '../../design-system/atoms/Tag';
import { FullBleedHero, UnboxedIndex, UnboxedIndexItem } from '../../design-system';
import { PROJECTS_DATA } from '../../data/projectsData';
import { CORPORATE_INFO } from '../../data/corporateData';

interface MepPageProps {
  onNavigate: (slug: string) => void;
}

export const MepPage: React.FC<MepPageProps> = ({ onNavigate }) => {
  const highRiseProject = PROJECTS_DATA[0]; // Commercial High-Rise MEP (3,200 TR)
  const chillerPlantProject = PROJECTS_DATA[2]; // Hospitality Chiller Plant (1,800 TR)

  const mepDisciplineItems: UnboxedIndexItem[] = [
    {
      id: 'mep-mechanical',
      indexNumber: '01',
      title: 'Mechanical & District Cooling Hydronics (HVAC)',
      subtitle: 'HEAVY THERMAL & VENTILATION INFRASTRUCTURE',
      description:
        'Centralized chilled water heat exchanger interfaces, primary/secondary variable-speed pumping skids, double-skin air handling units (AHU), sound-attenuated fan coils, and stairwell life-safety smoke pressurization.',
      metaBadge: 'ASHRAE 90.1 • AHRI Certified',
      thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80',
      onClick: () => {
        document.getElementById('commercial-residential')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'mep-electrical',
      indexNumber: '02',
      title: 'Electrical Distribution & Low Voltage Networks',
      subtitle: 'POWER TRANSMISSION, BUSWAYS & SUBSTATIONS',
      description:
        'DEWA-compliant 11kV/400V step-down substation interfaces, low-impedance sandwich copper busway risers up to 5,000A, emergency generator synchronization, automatic transfer switches (ATS), and central BMS telemetry.',
      metaBadge: 'DEWA Class 1 • IEC 61439-2',
      thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=300&q=80',
      onClick: () => {
        document.getElementById('infrastructure')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'mep-plumbing',
      indexNumber: '03',
      title: 'Plumbing, Hydraulics & Fire Life-Safety Systems',
      subtitle: 'POTABLE BOOSTING, DRAINAGE & FIRE HYDRONICS',
      description:
        'Multi-stage variable frequency potable water boosting skids, acoustic drainage stacks, storm retention pumps, and Dubai Civil Defense Class-A certified wet sprinkler, pre-action, and zone hydrant systems.',
      metaBadge: 'DCD Class A • NFPA 13/14',
      thumbnail: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80',
      onClick: () => {
        document.getElementById('section-systems')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  const relatedIndustries = [
    {
      id: 'commercial',
      title: 'Commercial Office Towers',
      description: 'District cooling hydronics, sandwich copper busbars, and multi-tenant ultrasonic BTU energy sub-metering.',
      imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Clinical Facilities',
      description: 'Laminar cleanroom AHUs, isolated medical power supplies, and 24/7 positive pressure environments.',
      imageSrc: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'residential',
      title: 'Residential Master Developments',
      description: 'Centralized water boosting, domestic hot water recirculation, and municipal stormwater lift systems.',
      imageSrc: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'industrial',
      title: 'Industrial Logistics Hubs',
      description: '11kV substation coordination, heavy motor control centers (MCC), and high-capacity ventilation.',
      imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white">
      {/* =========================================================================
          01 — HERO (CONSTITUTIONAL RULE 04: FULL-BLEED IMAGE HERO)
          Cinematic mechanical plant photography with multi-stop contrast scrim.
      ========================================================================= */}
      <FullBleedHero
        eyebrow="ENGINEERING & CONSTRUCTION • DISCIPLINE 01"
        title="Mechanical, Electrical & Plumbing (MEP)"
        description="Turnkey mechanical, electrical, and plumbing engineering contracting for complex commercial towers, residential master developments, and critical municipal infrastructure across the United Arab Emirates."
        image="/assets/images/mep-construction.jpg"
        imageAlt="LTSGROUP Turnkey MEP Contracting"
        scrimVariant="cinematic"
        primaryCta={{
          label: 'Submit Tender / RFP',
          onClick: () => onNavigate('/contact?tab=rfp'),
        }}
        secondaryCta={{
          label: 'Explore Disciplines',
          onClick: () => {
            document.getElementById('section-disciplines')?.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        technicalBadges={[
          'DEWA CLASS 1 MEP',
          'DUBAI CIVIL DEFENSE CLASS A',
          'ASHRAE 90.1 & NFPA COMPLIANT',
          'ISO 9001:2015 ACCREDITED',
        ]}
        datumStrip={{
          leftText: 'STATUTORY LICENSURE: DEWA • SEWA • DCD LIFE SAFETY • DUBAI MUNICIPALITY',
          rightText: 'CENTRAL ENGINEERING DESK • AL QUOZ INDUSTRIAL 1, DUBAI',
        }}
      />

      {/* =========================================================================
          02 — CAPABILITY LEDGER (UNBOXED TYPOGRAPHIC INDEX — RULE 07 & 08)
          Replaces previous 3 bordered cards with clean architectural ledger.
      ========================================================================= */}
      <section id="section-disciplines" className="py-16 lg:py-24 border-b border-[#E5E7EB] bg-white">
        <Container>
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-2">
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
                  INTEGRATED MEP EXECUTION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] leading-snug tracking-tight">
                  Single-source electromechanical precision engineered for building performance.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-3 text-sm text-[#4A5568] leading-relaxed">
                <p>
                  LTSGROUP delivers turnkey mechanical, electrical, and plumbing contracting under unified management—coordinating 3D BIM clash detection, procurement, physical installation, and statutory authority testing directly under DEWA, DCD, and municipal licensures.
                </p>
              </div>
            </div>

            {/* The 3 Core Disciplines as an Unboxed Ledger */}
            <UnboxedIndex items={mepDisciplineItems} />
          </div>
        </Container>
      </section>

      {/* =========================================================================
          03 — COMMERCIAL & RESIDENTIAL CHAPTER (ASYMMETRIC 7/5 SPLIT)
      ========================================================================= */}
      <section id="commercial-residential" className="py-16 lg:py-24 border-b border-[#E5E7EB] bg-[#F8FAFC]">
        <Container>
          <div className="space-y-10">
            <div>
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
                SECTOR SPECIALIZATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight mt-2">
                Commercial &amp; Residential MEP
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Media Frame (7 cols): 18px soft radius */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-[18px] bg-[#173C62] aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    alt="Commercial High-Rise MEP Installation in Dubai"
                    className="w-full h-full object-cover filter brightness-[0.88]"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90 bg-[#173C62]/85 backdrop-blur-xs px-3.5 py-1.5 rounded-[10px] border border-white/10">
                    <span>Business Bay 48-Floor Tower</span>
                    <span className="text-[#93C5FD]">3,200 TR District Hydronics</span>
                  </div>
                </div>
              </div>

              {/* Technical Scope (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-medium text-[#0B1320] leading-snug">
                    Engineered for Spatial Density, Acoustic Comfort &amp; Tenant Reliability
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    In high-density commercial and residential developments, MEP systems must operate with zero acoustic intrusion, optimized shaft footprints, and reliable sub-metering accuracy.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-[#E5E7EB] text-xs text-[#334155]">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span>Centralized chilled water heat exchangers &amp; variable primary pumping</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span>Dual-redundant 3200A low-impedance copper busway risers with tap-off units</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span>Multi-tenant ultrasonic BTU heat sub-metering linked directly to billing BMS</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span>Stairwell smoke pressurization &amp; basement CO monitoring with variable speed fans</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    shape="capsule"
                    onClick={() => onNavigate('/contact?tab=rfp&service=commercial')}
                    className="text-xs px-6 py-3"
                    iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Request Commercial MEP Spec
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          04 — INFRASTRUCTURE & HEAVY UTILITIES (ASYMMETRIC 5/7 SPLIT)
      ========================================================================= */}
      <section id="infrastructure" className="py-16 lg:py-24 border-b border-[#E5E7EB] bg-white">
        <Container>
          <div className="space-y-10">
            <div>
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
                CIVIL &amp; INDUSTRIAL SCALE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight mt-2">
                Infrastructure &amp; Utility Networks
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Technical Scope (5 cols) */}
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-medium text-[#0B1320] leading-snug">
                    Resilient Plant Architecture for High-Demand Civil Assets
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    Municipal pumping stations, district cooling energy transfer stations (ETS), and electrical sub-transmission require heavy-gauge materials and fail-safe automation.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-[#E5E7EB] text-xs text-[#334155]">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span>Large-diameter carbon steel chilled water headers &amp; motorized control valves</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span>Form-4 type-tested low voltage switchboards with motor control centers (MCC)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span>Class-A Dubai Civil Defense fire pump sets with diesel backup drivers</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span>SCADA and PLC integration for automated fault detection and remote monitoring</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    shape="capsule"
                    onClick={() => onNavigate('/contact?tab=rfp&service=infrastructure')}
                    className="text-xs px-6 py-3"
                    iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Submit Infrastructure Tender
                  </Button>
                </div>
              </div>

              {/* Media Frame (7 cols): 18px soft radius */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-[18px] bg-[#173C62] aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
                    alt="District Cooling Plant & Infrastructure MEP Manifold in Dubai"
                    className="w-full h-full object-cover filter brightness-[0.88]"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90 bg-[#173C62]/85 backdrop-blur-xs px-3.5 py-1.5 rounded-[10px] border border-white/10">
                    <span>Central Utility Manifold</span>
                    <span className="text-[#93C5FD]">Variable Primary Flow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          05 — STRUCTURED MEP SYSTEMS MATRIX (ARCHITECTURAL FLOW)
          LTS Brand Blue authority: #173C62
      ========================================================================= */}
      <section id="section-systems" className="py-16 lg:py-24 border-b border-[#E5E7EB] bg-[#173C62] text-white">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            <div className="max-w-2xl space-y-2">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#93C5FD] uppercase block">
                ENGINEERING SYSTEMS ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                Structured MEP Systems Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                How LTSGROUP integrates utility intake, central plant transformation, and terminal distribution into one coherent building operating system.
              </p>
            </div>

            {/* 3-Tier Functional Systems Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Tier 1 */}
              <div className="p-8 bg-white/[0.06] border border-white/15 rounded-[16px] space-y-5">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="font-mono text-xs text-[#93C5FD] font-semibold">TIER 01</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">Utility Intake</span>
                </div>

                <h4 className="text-lg font-medium text-white">Primary Utility Interface</h4>

                <p className="text-xs text-slate-200 leading-relaxed">
                  Direct statutory interface with municipal grids, ensuring incoming power, district cooling, and public water supply satisfy peak load demands without tariff penalties.
                </p>

                <div className="space-y-2.5 pt-3 border-t border-white/15 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span>DEWA Substation Connection</span>
                    <span className="font-mono text-[11px] text-white/90">11kV / 33kV</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>District Cooling Interface</span>
                    <span className="font-mono text-[11px] text-white/90">PHE Heat Exchangers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Municipal Potable Supply</span>
                    <span className="font-mono text-[11px] text-white/90">Underground Reservoirs</span>
                  </div>
                </div>
              </div>

              {/* Tier 2 */}
              <div className="p-8 bg-white/[0.06] border border-white/15 rounded-[16px] space-y-5">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="font-mono text-xs text-[#93C5FD] font-semibold">TIER 02</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">Plant Transformation</span>
                </div>

                <h4 className="text-lg font-medium text-white">Central Plant &amp; Switchgear</h4>

                <p className="text-xs text-slate-200 leading-relaxed">
                  Factory-assembled Form-4 switchboards, variable speed secondary pumping skids, and automated transfer switches converting primary utility feeds into secure, conditioned services.
                </p>

                <div className="space-y-2.5 pt-3 border-t border-white/15 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span>Main Distribution Boards (MDB)</span>
                    <span className="font-mono text-[11px] text-white/90">Form-4 • Up to 65kA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Secondary Hydronic Pumping</span>
                    <span className="font-mono text-[11px] text-white/90">Variable Primary Flow</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Emergency Power Transfer</span>
                    <span className="font-mono text-[11px] text-white/90">Automated ATS Panels</span>
                  </div>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="p-8 bg-white/[0.06] border border-white/15 rounded-[16px] space-y-5">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="font-mono text-xs text-[#93C5FD] font-semibold">TIER 03</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">Terminal Delivery</span>
                </div>

                <h4 className="text-lg font-medium text-white">Distribution &amp; BMS Telemetry</h4>

                <p className="text-xs text-slate-200 leading-relaxed">
                  Vertical copper busways, calibrated air balancing, addressable smoke dampers, and Direct Digital Control (BMS) telemetry delivering precise zone temperature and life safety.
                </p>

                <div className="space-y-2.5 pt-3 border-t border-white/15 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span>Vertical Power Risers</span>
                    <span className="font-mono text-[11px] text-white/90">Sandwich Busbars</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Air Distribution Control</span>
                    <span className="font-mono text-[11px] text-white/90">VAV &amp; Attenuators</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Fire Life-Safety Systems</span>
                    <span className="font-mono text-[11px] text-white/90">DCD Class A Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          06 — DELIVERED PROJECTS SHOWCASE
      ========================================================================= */}
      <section id="section-projects" className="py-16 lg:py-24 border-b border-[#E5E7EB] bg-[#F8FAFC]">
        <Container>
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
                  PROVEN PERFORMANCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight mt-2">
                  Connected MEP Deliveries
                </h2>
              </div>

              <button
                onClick={() => onNavigate('/projects')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173C62] hover:underline"
              >
                <span>View all projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Project 1 */}
              <div
                onClick={() => onNavigate(`/projects/${highRiseProject.slug}`)}
                className="group bg-white rounded-[18px] border border-[#E5E7EB] overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div className="h-[260px] overflow-hidden relative bg-[#173C62]">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    alt={highRiseProject.title}
                    className="w-full h-full object-cover filter brightness-[0.88] group-hover:scale-[1.025] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Tag label="3,200 TR District Cooling" variant="inverse" shape="pill" className="bg-[#173C62] text-[10px]" />
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <span className="text-[11px] font-mono text-[#173C62] font-semibold uppercase block">
                    Commercial High-Rise MEP • Dubai Marina
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
                    {highRiseProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {highRiseProject.scopeOverview}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">DEWA Class 1 • 48 Floors</span>
                    <span className="font-semibold text-[#173C62] flex items-center gap-1">
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div
                onClick={() => onNavigate(`/projects/${chillerPlantProject.slug}`)}
                className="group bg-white rounded-[18px] border border-[#E5E7EB] overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div className="h-[260px] overflow-hidden relative bg-[#173C62]">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                    alt={chillerPlantProject.title}
                    className="w-full h-full object-cover filter brightness-[0.88] group-hover:scale-[1.025] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Tag label="1,800 TR Chiller Plant" variant="inverse" shape="pill" className="bg-[#173C62] text-[10px]" />
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <span className="text-[11px] font-mono text-[#173C62] font-semibold uppercase block">
                    Hospitality Chilled Water • Dubai
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
                    {chillerPlantProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {chillerPlantProject.scopeOverview}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">Variable Speed Chilled Hydronics</span>
                    <span className="font-semibold text-[#173C62] flex items-center gap-1">
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          07 — SECTORS SERVED (16px SOFT RADIUS, ZERO 2px SHARP BOXES)
      ========================================================================= */}
      <section id="section-industries" className="py-16 lg:py-24 border-b border-[#E5E7EB] bg-white">
        <Container>
          <div className="space-y-10">
            <div>
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
                SECTORS SERVED
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight mt-2">
                Environments Dependent on MEP Reliability
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedIndustries.map((ind) => (
                <div
                  key={ind.id}
                  onClick={() => onNavigate('/industries')}
                  className="group bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden flex flex-col justify-between cursor-pointer hover:border-[#173C62] transition-colors"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-[#E5E7EB]">
                      <img
                        src={ind.imageSrc}
                        alt={ind.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <h4 className="text-base font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
                        {ind.title}
                      </h4>
                      <p className="text-xs text-[#4A5568] line-clamp-2 leading-relaxed">
                        {ind.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 border-t border-[#E5E7EB]/50 flex items-center gap-1.5 text-xs font-semibold text-[#173C62]">
                    <span>Inspect Sector</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          08 — CONTACT CTA (EDITORIAL SPLIT INVITATION)
      ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <Container>
          <div className="bg-white rounded-[18px] border border-[#E5E7EB] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
                COMMERCIAL MEP COLLABORATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
                Initiate an MEP project tender review or technical consultation.
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                Connect directly with our senior MEP estimating engineers for detailed bill of quantities (BOQ) reviews, equipment specification submittals, and turnkey contracting proposals across the United Arab Emirates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <Button
                variant="primary"
                size="md"
                shape="soft"
                onClick={() => onNavigate('/contact?tab=rfp&service=mep')}
                className="text-xs px-6 py-3 rounded-[10px]"
              >
                Submit Tender / RFP
              </Button>
              <a
                href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center text-xs font-semibold text-[#0B1320] border border-[#CBD5E1] rounded-[10px] px-5 py-3 hover:bg-[#F8FAFC] transition-colors"
              >
                Direct Line: {CORPORATE_INFO.contact.telephone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
