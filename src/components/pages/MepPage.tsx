import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Wind, Zap, Droplets, MapPin, Phone } from 'lucide-react';
import { Container } from '../../design-system/structures/Container';
import { Button } from '../../design-system/atoms/Button';
import { Tag } from '../../design-system/atoms/Tag';
import { FullBleedHero, UnboxedIndex, UnboxedIndexItem } from '../../design-system';
import {
  ImageStack,
  ImageOverlappingText,
  ImageAsymmetricPair,
} from '../../design-system/visual-patterns';
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
          'DEWA APPROVED MEP',
          'DUBAI CIVIL DEFENSE COMPLIANT',
          'ASHRAE 90.1 & NFPA ALIGNMENT',
          'STATUTORY CODE COMPLIANCE',
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
      <section id="section-disciplines" className="py-16 lg:py-24 bg-white">
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
      <section id="commercial-residential" className="py-16 lg:py-24 bg-[#F8FAFC]">
        <Container>
          <div className="space-y-6">
            <ImageStack
              title="Commercial & Residential High-Rise MEP"
              category="SECTOR SPECIALIZATION"
              eyebrow="HIGH-DENSITY ELECTROMECHANICAL ENVELOPE"
              description="Engineered for spatial density, acoustic comfort, and tenant reliability. Coordinated 3D BIM clash detection, off-site pre-fabricated riser spools, dual-redundant 3200A low-impedance copper busways, and certified stairwell smoke pressurization tested to strict Civil Defense standards."
              macroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              macroCaption="48-FLOOR COMMERCIAL TOWER ENVELOPE"
              microImage="/assets/images/mep-construction.jpg"
              microCaption="PREFABRICATED RISER SPOOL DETAIL"
              specs={[
                { label: 'Cooling Capacity', value: '3,200 TR District Hydronics' },
                { label: 'Electrical Risers', value: 'Dual 3,200A Busducts' },
                { label: 'Sub-Metering', value: 'Ultrasonic BTU Heat Billing' },
                { label: 'Life-Safety', value: '100% Civil Defense Approved' },
              ]}
              href="/engineering-construction/mep/commercial-residential"
              ctaText="Explore Commercial & Residential Scope"
              onNavigate={onNavigate}
            />
          </div>
        </Container>
      </section>

      {/* =========================================================================
          04 — INFRASTRUCTURE & HEAVY UTILITIES (TYPE 02 — IMAGE + OVERLAPPING TEXT)
      ========================================================================= */}
      <section id="infrastructure" className="py-16 lg:py-24 bg-white border-t border-[#E5E7EB]">
        <Container>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
                  CIVIL &amp; INDUSTRIAL SCALE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight mt-2">
                  Infrastructure &amp; Utility Networks
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4A5568] max-w-md leading-relaxed">
                Municipal pumping stations, district cooling energy transfer stations (ETS), and electrical sub-transmission engineered for peak civil resilience.
              </p>
            </div>

            <ImageOverlappingText
              title="District Cooling & Heavy Utility Infrastructure"
              category="CIVIL NETWORKS & ETS PLANTS"
              metadata="HIGH-CAPACITY CHILLED WATER & POWER TRANSMISSION"
              description="Engineered with large-diameter carbon steel headers, Form-4 switchboards, and Class-A Civil Defense pumping stations."
              imageSrc="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
              imageAlt="District Cooling Plant & Infrastructure MEP Manifold in Dubai"
              aspectRatio="16/9"
              overlapPosition="bottom-left"
              href="/engineering-construction/mep/infrastructure"
              onNavigate={onNavigate}
            />

            {/* Technical Verification Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#E5E7EB]">
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#173C62] uppercase tracking-wider block">Hydronic Manifolds</span>
                <p className="text-xs text-[#4A5568] leading-relaxed">Large-diameter carbon steel chilled water headers &amp; motorized valves.</p>
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#173C62] uppercase tracking-wider block">Form-4 Power</span>
                <p className="text-xs text-[#4A5568] leading-relaxed">Type-tested low voltage switchboards with motor control centers (MCC).</p>
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#173C62] uppercase tracking-wider block">Life-Safety Hydraulic</span>
                <p className="text-xs text-[#4A5568] leading-relaxed">Class-A Dubai Civil Defense fire pump sets with diesel backup drivers.</p>
              </div>
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#173C62] uppercase tracking-wider block">SCADA &amp; Telemetry</span>
                <p className="text-xs text-[#4A5568] leading-relaxed">PLC integration for automated fault detection and remote central monitoring.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          05 — STRUCTURED MEP SYSTEMS MATRIX (ARCHITECTURAL FLOW)
          LTS Brand Blue authority: #173C62
      ========================================================================= */}
      <section id="section-systems" className="py-16 lg:py-24 bg-[#173C62] text-white">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-semibold tracking-[0.12em] text-[#CBD5E1] uppercase block">
                ENGINEERING SYSTEMS ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                Structured MEP Systems Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                How LTSGROUP integrates utility intake, central plant transformation, and terminal distribution into one coherent building operating system.
              </p>
            </div>

            {/* 3-Tier Functional Systems Composition: Open Architectural Hairline Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              {/* Tier 1 */}
              <div className="border-t-2 border-white/60 pt-6 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#CBD5E1] font-semibold tracking-wider">01 &bull; UTILITY INTAKE</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-300 font-medium">Municipal Interface</span>
                  </div>

                  <h4 className="text-xl font-medium text-white tracking-tight">Primary Utility Interface</h4>

                  <p className="text-xs text-slate-200 leading-relaxed">
                    Direct statutory interface with municipal grids, ensuring incoming power, district cooling, and public water supply satisfy peak load demands without tariff penalties.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/15 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">DEWA Substation Connection</span>
                    <span className="font-mono text-[11px] text-white/90">11kV / 33kV</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">District Cooling Interface</span>
                    <span className="font-mono text-[11px] text-white/90">PHE Heat Exchangers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Municipal Potable Supply</span>
                    <span className="font-mono text-[11px] text-white/90">Underground Reservoirs</span>
                  </div>
                </div>
              </div>

              {/* Tier 2 */}
              <div className="border-t-2 border-white/60 pt-6 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#CBD5E1] font-semibold tracking-wider">02 &bull; TRANSFORMATION</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-300 font-medium">Plant &amp; Switchgear</span>
                  </div>

                  <h4 className="text-xl font-medium text-white tracking-tight">Central Plant &amp; Switchboards</h4>

                  <p className="text-xs text-slate-200 leading-relaxed">
                    Factory-assembled Form-4 switchboards, variable speed secondary pumping skids, and automated transfer switches converting primary utility feeds into secure, conditioned services.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/15 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Main Distribution Boards (MDB)</span>
                    <span className="font-mono text-[11px] text-white/90">Form-4 • Up to 65kA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Secondary Hydronic Pumping</span>
                    <span className="font-mono text-[11px] text-white/90">Variable Primary Flow</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Emergency Power Transfer</span>
                    <span className="font-mono text-[11px] text-white/90">Automated ATS Panels</span>
                  </div>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="border-t-2 border-white/60 pt-6 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#CBD5E1] font-semibold tracking-wider">03 &bull; DISTRIBUTION</span>
                    <span className="text-[10px] uppercase tracking-wider text-slate-300 font-medium">Terminal Delivery</span>
                  </div>

                  <h4 className="text-xl font-medium text-white tracking-tight">Telemetry &amp; Terminal Control</h4>

                  <p className="text-xs text-slate-200 leading-relaxed">
                    Vertical copper busways, calibrated air balancing, addressable smoke dampers, and Direct Digital Control (BMS) telemetry delivering precise zone temperature and life safety.
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/15 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Vertical Power Risers</span>
                    <span className="font-mono text-[11px] text-white/90">Sandwich Busbars</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Air Distribution Control</span>
                    <span className="font-mono text-[11px] text-white/90">VAV &amp; Attenuators</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Fire Life-Safety Systems</span>
                    <span className="font-mono text-[11px] text-white/90">DCD Class A Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          06 — DELIVERED PROJECTS SHOWCASE (TYPE 03 — ASYMMETRIC PAIR)
      ========================================================================= */}
      <section id="section-projects" className="py-16 lg:py-24 bg-[#F8FAFC]">
        <Container>
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
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

            <ImageAsymmetricPair
              title={highRiseProject.title}
              category="COMMERCIAL & HOSPITALITY MEP • DUBAI"
              eyebrow="PROVEN PERFORMANCE"
              description={`${highRiseProject.scopeOverview} Executed alongside hydronic system balancing for the ${chillerPlantProject.title}.`}
              primaryImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
              primaryImageAlt={highRiseProject.title}
              primaryCaption="COMMERCIAL TOWER • 3,200 TR DISTRICT COOLING & DEWA CLASS 1 SUBSTATION"
              secondaryImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
              secondaryImageAlt={chillerPlantProject.title}
              secondaryCaption="1,800 TR HOSPITALITY CHILLER PLANT HYDRONICS"
              specs={[
                { label: 'Cooling Capacity', value: '3,200 TR District Hydronics' },
                { label: 'Electrical Riser', value: 'Dual 3,200A Sandwich Busways' },
                { label: 'Compliance', value: 'DEWA Class 1 • DCD Approved' },
                { label: 'Hydronic Efficiency', value: 'Automated Variable Primary Flow' },
              ]}
              href={`/projects/${highRiseProject.slug}`}
              ctaText="Examine Marina Tower Case Study"
              onNavigate={onNavigate}
              layout="primary-left"
            />
          </div>
        </Container>
      </section>

      {/* =========================================================================
          07 — SECTORS SERVED (UNBOXED ARCHITECTURAL MONOGRAPHS)
      ========================================================================= */}
      <section id="section-industries" className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="space-y-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
                SECTORS SERVED
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight mt-2">
                Environments Dependent on MEP Reliability
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedIndustries.map((ind) => (
                <div
                  key={ind.id}
                  onClick={() => onNavigate('/industries')}
                  className="group cursor-pointer flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] bg-slate-100">
                      <img
                        src={ind.imageSrc}
                        alt={ind.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-base font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
                        {ind.title}
                      </h4>
                      <p className="text-xs text-[#4A5568] leading-relaxed">
                        {ind.description}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173C62]">
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
          08 — CONTACT CTA (OPEN ARCHITECTURAL SPLIT)
      ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <Container>
          <div className="border-t-2 border-[#173C62] pt-12 sm:pt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
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
                shape="rounded"
                onClick={() => onNavigate('/contact?tab=rfp&service=mep')}
                className="text-xs px-6 py-3 rounded-[8px]"
              >
                Submit Tender / RFP
              </Button>
              <a
                href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center text-xs font-semibold text-[#0B1320] border border-[#CBD5E1] rounded-[8px] px-5 py-3 hover:bg-white hover:border-[#173C62] transition-colors"
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
