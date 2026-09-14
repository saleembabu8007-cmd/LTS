import React, { useState } from 'react';
import {
  IconHVAC,
  IconControls,
  IconBMS,
  IconLighting,
  IconEVCharging,
  IconArrow,
  IconPhone,
  IconEmail,
  IconDocument,
  IconCheck,
  IconShieldCheck,
} from '../../design-system/icons';
import {
  CompositionLargeTypography,
  ProofStrip,
} from '../../design-system/compositions';
import { CORPORATE_INFO } from '../../data/corporateData';

export interface TradingPageProps {
  onNavigate: (slug: string) => void;
  currentPath?: string;
}

type ProductFamily = 'hvac' | 'controls' | 'metering' | 'lights' | 'ev';

interface ProductFamilyInfo {
  id: ProductFamily;
  num: string;
  title: string;
  shortDesc: string;
  slug: string;
  icon: React.ElementType;
  items: { title: string; desc: string; slug: string }[];
}

const PRODUCT_FAMILIES: ProductFamilyInfo[] = [
  {
    id: 'hvac',
    num: '01',
    title: 'HVAC Spare Parts',
    shortDesc: 'Genuine OEM compressors, hydronic valves, and heat exchanger coils for commercial chillers.',
    slug: '/trading/hvac',
    icon: IconHVAC,
    items: [
      { title: 'Compressors & Motors', desc: 'Semi-hermetic screw, scroll compressors, and condenser fan motors.', slug: '/trading/hvac' },
      { title: 'Hydronic & Refrigerant Valves', desc: 'Thermostatic expansion valves, solenoid valves, and PICVs.', slug: '/trading/hvac' },
      { title: 'Heat Exchanger Coils & Media', desc: 'Copper-tube condenser coils and commercial filtration media.', slug: '/trading/hvac' },
    ],
  },
  {
    id: 'controls',
    num: '02',
    title: 'Controls & VFDs',
    shortDesc: 'Low-harmonic variable frequency drives, soft starters, and direct digital building sensors.',
    slug: '/trading/controls-vfds',
    icon: IconControls,
    items: [
      { title: 'Variable Frequency Drives (VFD)', desc: 'Low-harmonic HVAC drives and bypass panels for 50°C GCC loads.', slug: '/trading/controls-vfds' },
      { title: 'Sensors & Actuators', desc: 'DDC temperature sensors, DP transmitters, and motorized actuators.', slug: '/trading/controls-vfds' },
    ],
  },
  {
    id: 'metering',
    num: '03',
    title: 'Metering & Accessories',
    shortDesc: 'MID-approved Class-2 ultrasonic thermal energy BTU meters with automated M-Bus telemetry.',
    slug: '/trading/metering',
    icon: IconBMS,
    items: [
      { title: 'Ultrasonic BTU Meters', desc: 'MID Class-2 thermal energy meters with zero moving parts and M-Bus.', slug: '/trading/metering' },
      { title: 'Flow Sensors & Accessories', desc: 'Matched pair Pt500 temperature sensors and ultrasonic transducers.', slug: '/trading/metering' },
    ],
  },
  {
    id: 'lights',
    num: '04',
    title: 'Industrial & Architectural Lights',
    shortDesc: 'Heavy-duty industrial LED high-bays, explosion-proof fittings, and lighting control systems.',
    slug: '/trading/lights',
    icon: IconLighting,
    items: [
      { title: 'High-Bay Industrial LEDs', desc: 'IP66/IK10 high-efficiency fixtures with 150 lm/W optical output.', slug: '/trading/lights' },
      { title: 'Emergency & Exit Lighting', desc: 'Self-contained DALI-monitored exit signs and emergency battery packs.', slug: '/trading/lights' },
    ],
  },
  {
    id: 'ev',
    num: '05',
    title: 'EV Chargers',
    shortDesc: 'Commercial AC destination chargers and ultra-fast DC charging infrastructure.',
    slug: '/trading/ev',
    icon: IconEVCharging,
    items: [
      { title: 'Level-2 AC Destination Chargers', desc: 'Dual-port commercial chargers with RFID authentication.', slug: '/trading/ev' },
      { title: 'DC Ultra-Fast Chargers', desc: 'High-power DC charging stations compliant with electricity authorities.', slug: '/trading/ev' },
    ],
  },
];

/**
 * Trading & Component Supply Division Page
 * Division 03: Direct factory procurement of genuine OEM parts, VFDs, BTU meters, lighting, and EV chargers.
 * 
 * Art-directed narrative rhythm:
 * 01 Full-Bleed Image Hero (Composition 01 — Direct OEM Supply)
 * 02 Large Typography Statement (Composition 14 — Traceability Mandate)
 * 03 Horizontal Category Rail (Composition 05 — 5 Equipment Disciplines)
 * 04 Large Product Focal Showcase + Dynamic Specifications (Composition 02 & 06 ProofStrip)
 * 05 CTA Section
 */
export const TradingPage: React.FC<TradingPageProps> = ({
  onNavigate,
}) => {
  const [selectedFamily, setSelectedFamily] = useState<ProductFamily>('hvac');

  const activeFamilyData = PRODUCT_FAMILIES.find((f) => f.id === selectedFamily) || PRODUCT_FAMILIES[0];

  return (
    <div className="bg-white text-[#0B1320] font-sans selection:bg-[#173C62] selection:text-white pb-16 antialiased">
      
      {/* =========================================================================
          01 / HERO
          Full-bleed industrial supply / components image (~78vh) with LTS Blue authority.
      ========================================================================= */}
      <section className="relative w-full h-[78vh] min-h-[540px] max-h-[860px] bg-[#173C62] overflow-hidden">
        <img
          src="/assets/images/trading-components.jpg"
          alt="LTSGROUP Factory Authorized Component Procurement"
          className="w-full h-full object-cover filter brightness-[0.88] transition-transform duration-[800ms] ease-out hover:scale-[1.01]"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80';
          }}
        />

        {/* Directional LTS Blue gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/65 to-[#173C62]/20 pointer-events-none" />

        {/* Hero Content Positioned Lower-Left */}
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-left">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                LTSGROUP &bull; DIVISION 03 &bull; TRADING &amp; SUPPLY
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.06]">
                Direct OEM Supply &amp; Certified Technical Components
              </h1>

              <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl pt-1">
                Factory-authorized procurement of genuine OEM HVAC parts, variable frequency drives, precision ultrasonic BTU heat meters, industrial lights, and commercial EV chargers.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact?tab=rfp&service=trading')}
                  className="inline-flex items-center gap-2 bg-white text-[#173C62] hover:bg-slate-100 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 rounded-[8px] transition-colors cursor-pointer"
                >
                  <IconDocument size="sm" color="primary" className="w-4 h-4" />
                  <span>Submit BOQ Schedule</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact?tab=general&service=trading')}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-3.5 rounded-[8px] backdrop-blur-md transition-colors cursor-pointer"
                >
                  <span>Inquire About Components</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 / TRACEABILITY MANDATE (Composition 14 — Large Typography Section)
          Airy whitespace breather with verified manufacturer certification.
      ========================================================================= */}
      <CompositionLargeTypography
        eyebrow="01 • FACTORY AUTHORIZATION"
        leadStatement="100% factory-authorized component traceability backed by direct manufacturer warranties."
        bodyText="We eliminate unauthorized gray-market substitutions on commercial plants by maintaining direct procurement channels with tier-one electromechanical manufacturers across Europe, Japan, and the GCC."
        attribution="LTSGROUP DIRECT PROCUREMENT STANDARD"
        tone="white"
      />

      {/* =========================================================================
          03 / HORIZONTAL PRODUCT / SERVICE RAIL (Composition 05)
          Clean horizontal category selector with dedicated technical icons.
      ========================================================================= */}
      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-left">
          
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold">
              SELECT TECHNICAL CATEGORY:
            </span>
            <span className="font-mono text-xs text-[#64748B]">
              5 EQUIPMENT DISCIPLINES
            </span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {PRODUCT_FAMILIES.map((family) => {
              const isSelected = selectedFamily === family.id;
              const Icon = family.icon;
              return (
                <button
                  key={family.id}
                  type="button"
                  onClick={() => setSelectedFamily(family.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-[6px] text-xs font-medium tracking-wide uppercase transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#173C62] text-white'
                      : 'bg-white text-[#173C62] hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#64748B]'}`} />
                  <span>{family.num} / {family.title}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          04 / LARGE PRODUCT FOCAL SHOWCASE + DYNAMIC SPECS (Asymmetric 8/4 Layout)
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
            
            {/* Large Product Photographic Focal Point (8 cols) */}
            <div className="lg:col-span-8">
              <div className="relative rounded-[8px] overflow-hidden bg-[#173C62] aspect-[16/10]">
                <img
                  src="/assets/images/trading-components.jpg"
                  alt="LTSGROUP Factory Authorized Component Supply"
                  className="w-full h-full object-cover filter brightness-[0.92] transition-transform duration-700 hover:scale-[1.015]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Dynamic Specification Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block mb-2">
                  CATEGORY {activeFamilyData.num} // SPECIFICATION MATRIX
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                  {activeFamilyData.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mt-2">
                  {activeFamilyData.shortDesc}
                </p>
              </div>

              {/* Sub-item specifications - Unboxed clean rows */}
              <div className="divide-y divide-[#E5E7EB] pt-2 border-t border-[#E5E7EB]">
                {activeFamilyData.items.map((item, idx) => (
                  <div key={idx} className="py-3.5 space-y-1">
                    <div className="flex items-center gap-2">
                      <IconCheck size="sm" color="primary" />
                      <h4 className="text-xs font-semibold text-[#0B1320] uppercase tracking-wider">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#64748B] pl-5 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact?tab=rfp&service=trading')}
                  className="inline-flex items-center gap-2 bg-[#173C62] text-white hover:bg-[#12304F] text-xs font-semibold tracking-wider uppercase px-6 py-3 rounded-[8px] transition-colors cursor-pointer"
                >
                  <span>Request Product Quote</span>
                  <IconArrow size="sm" color="white" interactive />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate(activeFamilyData.slug)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:underline cursor-pointer"
                >
                  <span>Explore Sub-Category</span>
                  <IconArrow size="sm" color="primary" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          VERIFIED SUPPLY PROOF STRIP (Composition 06 — ProofStrip: Option A)
      ========================================================================= */}
      <ProofStrip
        eyebrow="03 / SUPPLY CHAIN RIGOR"
        title="VERIFIED PROCUREMENT METRICS"
        tone="stone"
        items={[
          {
            index: '01',
            value: '05',
            label: 'Authorized OEM Lines',
            subtext: 'HVAC parts, Variable Frequency Drives, ultrasonic heat meters, industrial lighting, and EV chargers.',
          },
          {
            index: '02',
            value: '100%',
            label: 'Factory Traceability',
            subtext: 'Every component shipped with manufacturer compliance certificates, serial tracking, and full warranty.',
          },
        ]}
      />

      {/* =========================================================================
          05 / CTA
          Clean LTS blue closing section.
      ========================================================================= */}
      <section className="pt-16 sm:pt-20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="bg-[#173C62] text-white rounded-[8px] p-8 sm:p-14 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-5 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                BOQ TENDERS &bull; WHOLESALE SUPPLY
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                Submit your Bill of Quantities (BOQ) or equipment schedule.
              </h2>
              <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl">
                Send your material schedules directly to our Dubai trading and procurement team for verified pricing and delivery timelines.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/contact?tab=rfp&service=trading')}
                  className="inline-flex items-center gap-2 bg-white text-[#173C62] hover:bg-slate-100 text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-[8px] transition-colors cursor-pointer"
                >
                  <IconDocument size="sm" color="primary" className="w-4 h-4" />
                  <span>Submit BOQ For Quotation</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/contact?tab=general&service=trading')}
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase px-7 py-4 rounded-[8px] transition-colors cursor-pointer"
                >
                  <span>Contact Sales Desk</span>
                </button>
              </div>

              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-8 text-xs font-mono text-white/80">
                <div className="flex items-center gap-2">
                  <IconPhone size="sm" color="white" />
                  <span>{CORPORATE_INFO.contact.telephone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconEmail size="sm" color="white" />
                  <span>{CORPORATE_INFO.contact.emailTrading}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
