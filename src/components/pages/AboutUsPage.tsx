import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface AboutUsPageProps {
  onNavigate: (slug: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — HERO
          Full-screen architectural / engineering image.
          H1: About LTSGROUP
          Short statement.
          No two-column hero.
      ========================================================================= */}
      <section className="relative w-full h-[85vh] min-h-[580px] max-h-[920px] bg-[#0B1C2F] overflow-hidden">
        {/* Full-bleed photography */}
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

        {/* Directional gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/85 via-[#0B1320]/30 to-[#0B1320]/40 pointer-events-none" />

        {/* Hero Content Positioned Intentionally in Lower-Left */}
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-4xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
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
          02 — WHO WE ARE
          Large editorial text.
          Only verified company information.
          Zero fabricated facts (no fake founding year, employee counts, fake leadership, or unverified awards).
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-32 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Section Marker */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                01 &bull; Corporate Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Single-source accountability across the asset lifecycle.
              </h2>
            </div>

            {/* Right: Large Editorial Statements */}
            <div className="lg:col-span-8 space-y-8">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#0B1320] leading-snug tracking-tight">
                LTSGROUP unites turnkey electromechanical construction, critical facilities operations, and factory-grade equipment supply under one synchronized corporate structure.
              </p>

              <div className="space-y-6 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal max-w-[70ch]">
                <p>
                  Built environments require rigorous technical alignment from initial engineering drawings to continuous decades-long plant operations. Rather than relying on fragmented subcontractors, LTSGROUP maintains direct multidisciplinary capability across capital engineering, maintenance engineering, and component logistics.
                </p>
                <p>
                  Our three core operational divisions—Engineering &amp; Construction, Facilities Management, and Trading—coordinate seamlessly to deliver verified performance, regulatory adherence, and operational longevity for property developers, asset owners, and industrial enterprises.
                </p>
              </div>

              {/* Three Pillars Summary Ribbon */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#E5E7EB]">
                <div>
                  <span className="font-mono text-xs text-[#173C62] font-semibold block mb-1">
                    DIVISION 01
                  </span>
                  <h3 className="text-base font-medium text-[#0B1320]">Engineering &amp; Construction</h3>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    Turnkey MEP, Solar PV EPC, and Form-4 Control Switchgear.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs text-[#173C62] font-semibold block mb-1">
                    DIVISION 02
                  </span>
                  <h3 className="text-base font-medium text-[#0B1320]">Facilities Management</h3>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    Hard services, central chiller care, pool maintenance, and retrofits.
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs text-[#173C62] font-semibold block mb-1">
                    DIVISION 03
                  </span>
                  <h3 className="text-base font-medium text-[#0B1320]">Trading</h3>
                  <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                    HVAC parts, controls, ultrasonic BTU metering, lighting, and EV chargers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — BUSINESS STRUCTURE
          Visual relationship diagram:
          LTSGROUP -> Engineering & Construction / Facilities Management / Trading -> Capabilities.
          Do NOT use a bordered org chart.
          Use typography + connecting visual relationships.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-32 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="space-y-12 sm:space-y-16">
            {/* Section Header */}
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                02 &bull; Operational Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
                Business Structure
              </h2>
              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
                The approved LTSGROUP operational hierarchy, organizing multi-tiered technical disciplines under centralized corporate governance.
              </p>
            </div>

            {/* Visual Relationship Diagram (Typography + Fluid Visual Connectors, No Org Chart Boxes) */}
            <div className="space-y-10">
              {/* Central Apex Node */}
              <div className="flex items-center gap-4">
                <span className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight font-sans">
                  LTSGROUP
                </span>
                <span className="h-px flex-1 bg-[#CBD5E1]" />
                <span className="font-mono text-xs text-[#64748B] uppercase tracking-widest shrink-0">
                  Parent Corporate Standard
                </span>
              </div>

              {/* Three Divisional Branches */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Branch 1: Engineering & Construction */}
                <div className="space-y-6 pt-2">
                  <div className="border-t-2 border-[#173C62] pt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#173C62] font-semibold">01</span>
                      <a
                        href="/engineering-construction"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('/engineering-construction');
                        }}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#173C62] hover:underline uppercase tracking-wider py-2 px-1 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded"
                      >
                        <span>Division Page</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] tracking-tight">
                      Engineering &amp; Construction
                    </h3>
                  </div>

                  <div className="space-y-4 pl-4 border-l border-[#CBD5E1] text-sm text-[#4A5568]">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-[#0B1320]">MEP Contracting</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Commercial, residential, and infrastructure electromechanical installations.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-[#0B1320]">Solar Photovoltaic EPC</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Commercial rooftop &amp; ground-mounted arrays under DEWA Shams Dubai.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-[#0B1320]">Control Switchgear</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Form-4 type-tested low-voltage switchboards and motor control centers.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Branch 2: Facilities Management */}
                <div className="space-y-6 pt-2">
                  <div className="border-t-2 border-[#173C62] pt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#173C62] font-semibold">02</span>
                      <a
                        href="/facilities-management"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('/facilities-management');
                        }}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#173C62] hover:underline uppercase tracking-wider py-2 px-1 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded"
                      >
                        <span>Division Page</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] tracking-tight">
                      Facilities Management
                    </h3>
                  </div>

                  <div className="space-y-4 pl-4 border-l border-[#CBD5E1] text-sm text-[#4A5568]">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-[#0B1320]">Hard Services</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Central chiller plants, electrical networks, plumbing, BMS, and civil maintenance.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-[#0B1320]">Soft Services</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Swimming pool maintenance, filtration, and certified water hygiene compliance.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-[#0B1320]">Retrofits &amp; Refurbishment</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Live-building central chiller changeovers and mechanical modernizations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Branch 3: Trading */}
                <div className="space-y-6 pt-2">
                  <div className="border-t-2 border-[#173C62] pt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#173C62] font-semibold">03</span>
                      <a
                        href="/trading"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate('/trading');
                        }}
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#173C62] hover:underline uppercase tracking-wider py-2 px-1 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded"
                      >
                        <span>Division Page</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] tracking-tight">
                      Trading
                    </h3>
                  </div>

                  <div className="space-y-4 pl-4 border-l border-[#CBD5E1] text-sm text-[#4A5568]">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-[#0B1320]">HVAC Spare Parts</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        OEM compressors, fan motors, valves, and rapid-dispatch mechanical hardware.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-[#0B1320]">Controls &amp; VFDs</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Variable frequency drives, BACnet/Modbus direct digital controllers, and sensors.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-[#0B1320]">Metering, Lights &amp; EV</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        Revenue-grade BTU meters, architectural/industrial lights, and DC fast chargers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — CAPABILITY STORY
          Large engineering image.
          Short editorial statement.
          Then supporting image.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-32 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-14 sm:space-y-20">
          {/* Section Marker */}
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              03 &bull; Execution Capability
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
              Capability in the Field
            </h2>
          </div>

          {/* Large Engineering Image */}
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-[#0B1C2F] aspect-[16/10] shadow-none">
            <img
              src="/assets/images/mep-construction.jpg"
              alt="LTSGROUP Electromechanical Installation and Engineering Execution"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-[0.92] hover:scale-[1.015] transition-transform duration-700 ease-out"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80';
              }}
            />
            <div className="absolute bottom-4 left-4 font-mono text-xs text-white/90 bg-[#0B1320]/75 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
              Field Execution &bull; Capital Electromechanical Infrastructure
            </div>
          </div>

          {/* Short Editorial Statement */}
          <div className="max-w-3xl mx-auto text-center space-y-4 py-4">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] leading-snug tracking-tight">
              From vertical riser coordination in 48-floor towers to live-plant chiller modernizations, our engineers maintain direct control over every physical detail.
            </p>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed max-w-xl mx-auto font-normal">
              By combining in-house 3D BIM modelling with off-site spool prefabrication and factory acceptance testing, we reduce on-site execution risk and guarantee statutory compliance.
            </p>
          </div>

          {/* Supporting Field Installation Image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#0B1C2F] aspect-[16/10]">
              <img
                src="/assets/images/project-solar.jpg"
                alt="LTSGROUP Solar PV Installation under DEWA Shams Dubai"
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.92] hover:scale-[1.015] transition-transform duration-700 ease-out"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1400&q=80';
                }}
              />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-white/90 bg-[#0B1320]/75 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-white/10">
                Supporting Plate &bull; Clean Energy Infrastructure
              </div>
            </div>

            <div className="md:col-span-4 space-y-4 pl-0 md:pl-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                Rigorous Methodology
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight leading-snug">
                Engineered for High-Ambient Resilience
              </h3>
              <p className="text-sm text-[#4A5568] leading-relaxed">
                Operating in the UAE demands specialized thermal derating calculations, non-penetrative mounting architectures, and zero-drift calibration. Every LTSGROUP deployment is designed for peak summer environmental tolerances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — PEOPLE & TECHNICAL GOVERNANCE
          Strict rule: Never invent names or portraits.
          Only verified company facts.
          Features authentic governance standards without fabricated personnel.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              04 &bull; Technical Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
              Operational Governance &amp; Standards
            </h2>
            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              Every project and term maintenance contract is managed under established quality, environmental, and occupational safety frameworks conforming strictly to UAE statutory regulations.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-[16px] border border-[#E5E7EB] space-y-1">
                <span className="font-mono text-xs text-[#173C62] font-semibold block">
                  Statutory Alignment
                </span>
                <p className="text-sm text-[#0B1320] font-normal leading-relaxed">
                  Direct adherence to Dubai Electricity &amp; Water Authority (DEWA), Dubai Civil Defense (DCD), and Dubai Municipality standards.
                </p>
              </div>

              <div className="bg-white p-5 rounded-[16px] border border-[#E5E7EB] space-y-1">
                <span className="font-mono text-xs text-[#173C62] font-semibold block">
                  Safety &amp; Reliability
                </span>
                <p className="text-sm text-[#0B1320] font-normal leading-relaxed">
                  Standardized method statements, continuous hazard auditing, and certified testing and commissioning protocols on all active sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — CLOSING
          Large image background.
          Short corporate statement.
          CTA.
      ========================================================================= */}
      <section className="relative w-full py-24 sm:py-32 md:py-40 bg-[#0B1C2F] overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src="/assets/images/project-highrise.jpg"
          alt="LTSGROUP Built Works"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] transition-transform duration-[1000ms] ease-out hover:scale-[1.01]"
        />

        {/* Gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/90 via-[#0B1320]/40 to-[#0B1320]/80 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
              Built to Perform
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05]">
              Engineering environments built to perform across every stage of the asset lifecycle.
            </h2>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/engineering-construction"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/engineering-construction');
                }}
                className="inline-flex items-center gap-2 px-7 py-4 min-h-[44px] rounded-[12px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#11253E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1C2F]"
              >
                <span>Explore Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="inline-flex items-center gap-2 px-7 py-4 min-h-[44px] rounded-[12px] bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1C2F]"
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
