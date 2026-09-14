import React, { useState, useRef, useEffect } from 'react';
import {
  IconArrow,
  IconArrowLeft,
  IconArrowUpRight,
  IconPhone,
  IconEmail,
  IconShieldCheck,
} from '../../design-system/icons';
import { Button } from '../../design-system/atoms/Button';
import { ProofStrip } from '../../design-system/proof';
import { EdgeToEdgeMedia } from '../../design-system/layouts';
import { PROJECTS_DATA } from '../../data/projectsData';
import { NEWS_DATA } from '../../data/newsData';
import { CORPORATE_INFO } from '../../data/corporateData';

interface HomePageProps {
  onNavigate: (slug: string) => void;
}

/**
 * LTSGROUP Homepage — Master Engineering Editorial Art Direction
 * Conforms strictly to the approved 11-stage editorial composition:
 * 01 HERO (Image-first composition, quiet anchor, 5-word headline, single primary CTA)
 * 02 WHO WE ARE (Minimal editorial layout: large heading left, concise statement right, no card)
 * 03 WHAT WE DO (Three large visual business area panels: E&C, FM, Trading)
 * 04 FEATURED CAPABILITY (One visually dominant story: ~65% image, minimal text)
 * 05 SOLUTIONS (Clean typographic editorial list with subtle separators)
 * 06 PROJECTS (Image-led portfolio moment: 1 dominant + 2 supporting)
 * 07 NUMBERS (Very clean large-number strip with enormous typography)
 * 08 INDUSTRIES (Horizontal scrollable photographic monograph cards with left/right controls)
 * 09 CLIENTS (Minimal TRUSTED BY authority accreditation field, zero paragraphs)
 * 10 NEWS (1 featured story + 2 smaller previews)
 * 11 FINAL CTA (Bold statement LET'S BUILD WHAT'S NEXT. in LTS Blue)
 */
export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollBounds = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollBounds();
    window.addEventListener('resize', checkScrollBounds);
    return () => window.removeEventListener('resize', checkScrollBounds);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = Math.min(scrollContainerRef.current.clientWidth * 0.75, 400);
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const featuredProject = PROJECTS_DATA[0]; // Commercial High-Rise MEP
  const supportingProject1 = PROJECTS_DATA[1]; // Logistics Rooftop Solar PV
  const supportingProject2 = PROJECTS_DATA[2]; // Healthcare Facility Hard Services

  const featuredArticle = NEWS_DATA[0];
  const supportingArticle1 = NEWS_DATA[1];
  const supportingArticle2 = NEWS_DATA[2];

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    onNavigate(slug);
  };

  const solutions = [
    { name: 'MEP Contracting', category: 'Engineering & Construction', slug: '/engineering-construction/mep' },
    { name: 'Solar PV Solutions (EPC)', category: 'Engineering & Construction', slug: '/engineering-construction/solar' },
    { name: 'Control Switchgear', category: 'Engineering & Construction', slug: '/engineering-construction/control-switchgear' },
    { name: 'Hard Facilities Services', category: 'Facilities Management', slug: '/facilities-management/hard-services' },
    { name: 'Plant Retrofits & Refurbishment', category: 'Facilities Management', slug: '/facilities-management/retrofits' },
    { name: 'Commercial Aquatic Care', category: 'Facilities Management', slug: '/facilities-management/soft-services' },
    { name: 'HVAC Spare Parts', category: 'Trading', slug: '/trading/hvac' },
    { name: 'Controls & Variable Frequency Drives', category: 'Trading', slug: '/trading/controls-vfds' },
    { name: 'Metering, Lights & EV Chargers', category: 'Trading', slug: '/trading/metering' },
  ];

  const industries = [
    {
      num: '01',
      name: 'Commercial Towers',
      slug: '/industries',
      image: '/assets/images/industry-commercial.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      scope: 'High-density vertical busways, 3,200 TR district cooling, and smoke pressurization.',
    },
    {
      num: '02',
      name: 'Healthcare Facilities',
      slug: '/industries',
      image: '/assets/images/industry-healthcare.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      scope: 'HTM cleanroom ventilation, medical gas piping, and isolated hospital power networks.',
    },
    {
      num: '03',
      name: 'Industrial Logistics',
      slug: '/industries',
      image: '/assets/images/industry-logistics.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      scope: 'High-capacity motor control centers, 11kV substations, and rooftop solar arrays.',
    },
    {
      num: '04',
      name: 'Hospitality & Residential',
      slug: '/industries',
      image: '/assets/images/industry-hospitality.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      scope: 'Centralized water boosting, aquatic filtration hygiene, and comprehensive hard FM.',
    },
    {
      num: '05',
      name: 'Residential Communities',
      slug: '/industries',
      image: '/assets/images/hero-building.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      scope: 'Potable booster skids, community switchgear, and aquatic lifestyle amenities.',
    },
    {
      num: '06',
      name: 'Public Infrastructure',
      slug: '/industries',
      image: '/assets/images/engineering-intro.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      scope: 'Municipal pumping stations, drainage lift shafts, and statutory utility handovers.',
    },
  ];

  return (
    <main className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =====================================================================
          01 HERO
          - Image-first composition occupying dominant viewport real estate (~86-88vh)
          - Directional gradient scrim in authentic LTS Blue (#173C62)
          - Small LTS eyebrow, short powerful headline, one concise supporting line
          - One primary CTA — image feels like the hero; text does not compete
      ===================================================================== */}
      <section
        aria-label="LTSGROUP Hero"
        className="relative min-h-[86vh] lg:min-h-[90vh] flex items-end overflow-hidden bg-[#173C62]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-building.jpg"
            alt="LTSGROUP Built Environment Architecture"
            className="w-full h-full object-cover object-center filter brightness-[0.92]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/65 to-[#173C62]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#173C62]/85 via-[#173C62]/35 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-24 pt-36 text-left">
          <div className="max-w-2xl">
            {/* Small LTS Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="h-px w-6 bg-[#CBD5E1]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-200 font-semibold">
                LTSGROUP &bull; BUILT ENVIRONMENT ENGINEERING
              </span>
            </div>

            {/* Short powerful headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08]">
              Engineering environments built to perform.
            </h1>

            {/* One concise supporting line */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl">
              Turnkey electromechanical contracting, life-cycle facility operations, and specialized technical supply across the United Arab Emirates.
            </p>

            {/* One primary CTA */}
            <div className="mt-8 flex items-center gap-5">
              <Button
                variant="white"
                size="md"
                shape="rounded"
                onClick={() => onNavigate('/engineering-construction')}
                className="text-[12px] tracking-[0.06em] px-6 min-h-[44px]"
              >
                Explore capabilities →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02 WHO WE ARE (PERSPECTIVE)
          - 5 / 7 Asymmetric Split
          - Left (5 cols): 01 / PERSPECTIVE eyebrow, large heading, concise statement, CTA
          - Right (7 cols): Editorial engineering photograph + coordinate caption
          - Generous negative space (py-28 lg:py-36)
      ===================================================================== */}
      <section
        aria-label="Who We Are"
        className="py-24 lg:py-36 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center text-left">
            {/* Left 5 Cols: Thesis & Title */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block">
                01 / PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#0B1320] tracking-tight leading-[1.02]">
                WHO WE ARE
              </h2>
              <p className="text-lg sm:text-xl font-light text-[#0B1320] leading-relaxed tracking-tight max-w-xl">
                LTSGROUP unifies turnkey MEP contracting, facilities management, and OEM technical equipment supply under direct Dubai governance—ensuring built assets operate with unbroken reliability across decades.
              </p>
              <div className="pt-2">
                <a
                  href="/about-us"
                  onClick={(e) => handleLink(e, '/about-us')}
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none"
                >
                  <span className="border-b border-[#173C62] pb-0.5 group-hover:border-[#0B1320] transition-colors">
                    READ MORE
                  </span>
                  <IconArrow size="sm" color="inherit" interactive />
                </a>
              </div>
            </div>

            {/* Right 7 Cols: Editorial Engineering Photographic Plate */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-[8px] overflow-hidden bg-[#173C62]">
                <img
                  src="/assets/images/engineering-intro.jpg"
                  alt="LTS Engineering Perspective"
                  className="w-full h-full object-cover object-center filter brightness-[0.95] transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/65 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[10px] font-mono text-white/90 tracking-widest uppercase pointer-events-none">
                  <span>25.2048° N, 55.2708° E</span>
                  <span>DUBAI UAE &bull; ELECTROMECHANICAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 WHAT WE DO (OPERATING DIVISIONS)
          - Three large visual business area panels: E&C, FM, Trading
          - Asymmetric 12-column editorial layout: 8 cols dominant + 4 cols stacked
          - Full photographic narrative with authentic LTS Blue scrims
      ===================================================================== */}
      <section
        aria-label="What We Do"
        className="py-24 lg:py-32 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="max-w-xl mb-12 lg:mb-16">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block mb-2">
              02 / DIVISIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
              WHAT WE DO
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Panel 1: Engineering & Construction (Dominant 8 Cols) */}
            <a
              href="/engineering-construction"
              onClick={(e) => handleLink(e, '/engineering-construction')}
              className="lg:col-span-8 group relative rounded-[8px] overflow-hidden block min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-12 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <img
                src="/assets/images/mep-construction.jpg"
                alt="Engineering & Construction"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/50 to-transparent" />

              <div className="relative z-10 text-white max-w-xl">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-[#93C5FD] block mb-2 font-semibold">
                  DIVISION 01 &bull; CAPITAL CONTRACTING
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                  ENGINEERING &amp; CONSTRUCTION
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  Turnkey MEP contracting, commercial rooftop solar EPC under DEWA Shams Dubai, and factory type-tested switchboard assemblies.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>Explore division</span>
                  <IconArrow size="sm" color="white" interactive />
                </div>
              </div>
            </a>

            {/* Panels 2 & 3: Facilities Management & Trading (4 Cols Stacked) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Panel 2 */}
              <a
                href="/facilities-management"
                onClick={(e) => handleLink(e, '/facilities-management')}
                className="group relative rounded-[8px] overflow-hidden block flex-1 min-h-[250px] sm:min-h-[285px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-8 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src="/assets/images/project-chiller.jpg"
                  alt="Facilities Management"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/50 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD] block mb-1 font-semibold">
                    DIVISION 02 &bull; ASSET STEWARDSHIP
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    FACILITIES MANAGEMENT
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-200 leading-relaxed font-normal">
                    24/7 predictive maintenance, central chiller plant overhauls, and live-plant energy retrofits.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore division</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>

              {/* Panel 3 */}
              <a
                href="/trading"
                onClick={(e) => handleLink(e, '/trading')}
                className="group relative rounded-[8px] overflow-hidden block flex-1 min-h-[250px] sm:min-h-[285px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-8 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src="/assets/images/industry-logistics.jpg"
                  alt="Trading & Component Supply"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/50 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD] block mb-1 font-semibold">
                    DIVISION 03 &bull; OEM PROCUREMENT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    TRADING &amp; COMPONENT SUPPLY
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-200 leading-relaxed font-normal">
                    Genuine OEM HVAC spare parts, low-harmonic VFDs, and Class-2 ultrasonic BTU metering.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                    <span>Explore division</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 FULL-BLEED PHOTOGRAPHIC BREAK
          - Container-breaking edge-to-edge media moment
          - Visual pause calibrating engineering scale
      ===================================================================== */}
      <EdgeToEdgeMedia
        src="/assets/images/solar-epc.jpg"
        alt="Commercial Rooftop Solar Photovoltaic EPC Installation"
        caption="DUBAI INDUSTRIAL ROOFTOP ARRAY • 1.8 MWp CAPTIVE GENERATION • DEWA SHAMS DUBAI GRID SYNCHRONIZATION"
        coordinates="24.9857° N, 55.1412° E"
        aspectRatio="cinematic"
      />

      {/* =====================================================================
          05 CAPABILITY SPOTLIGHT (INVERTED 4/8 ASYMMETRY)
          - Left (4 cols): Thesis, standard approvals, link
          - Right (8 cols): Wide technical engineering plate
          - Inverted composition breaks left-heavy flow
      ===================================================================== */}
      <section
        aria-label="Capability Spotlight"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
            {/* Minimal Technical Narrative Left (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block">
                  03 / CAPABILITY SPOTLIGHT
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-tight">
                  Low-Voltage Switchgear &amp; Motor Automation.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal">
                Factory type-tested low-voltage switchboard assemblies engineered to IEC 61439 Form-4 standards, integrated with motor control centers and automated grid synchronization up to 65kA.
              </p>

              <div className="pt-2">
                <a
                  href="/engineering-construction/control-switchgear"
                  onClick={(e) => handleLink(e, '/engineering-construction/control-switchgear')}
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none"
                >
                  <span className="border-b border-[#173C62] pb-0.5 group-hover:border-[#0B1320] transition-colors">
                    EXPLORE SWITCHGEAR
                  </span>
                  <IconArrow size="sm" color="inherit" interactive />
                </a>
              </div>
            </div>

            {/* Dominant Technical Plate Right (8 cols) */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/10] sm:aspect-[21/11] rounded-[8px] overflow-hidden bg-[#173C62]">
                <img
                  src="/assets/images/trading-components.jpg"
                  alt="Type-tested switchgear and motor automation assembly"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/75 via-[#173C62]/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[10px] font-mono text-white/90 tracking-widest uppercase pointer-events-none">
                  <span>IEC 61439 FORM-4</span>
                  <span>DUBAI UTILITY CLEARANCE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          06 SOLUTIONS (12-COLUMN EDITORIAL LEDGER)
          - Clean editorial typographic ledger (NOT a card grid)
          - Discipline index + name + category + arrow
          - Pure architectural typography
      ===================================================================== */}
      <section
        aria-label="Solutions Directory"
        className="py-24 lg:py-32 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="max-w-xl mb-12 lg:mb-16">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block mb-2">
              04 / SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
              ENGINEERING DISCIPLINES
            </h2>
          </div>

          <div className="divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
            {solutions.map((sol, idx) => (
              <a
                key={sol.name}
                href={sol.slug}
                onClick={(e) => handleLink(e, sol.slug)}
                className="group py-5 sm:py-6 flex items-center justify-between transition-all duration-200 hover:pl-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="font-mono text-xs text-[#94A3B8] group-hover:text-[#173C62] transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                    <h3 className="text-lg sm:text-2xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors tracking-tight">
                      {sol.name}
                    </h3>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
                      {sol.category}
                    </span>
                  </div>
                </div>

                <div className="text-[#94A3B8] group-hover:text-[#173C62] transition-colors flex items-center gap-1">
                  <IconArrow size="sm" color="inherit" interactive />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          07 SELECTED PROJECTS (12-COL MONOGRAPH + 6/6 TWO-UP PAIRING)
          - Full 12-column hero monograph plate for flagship project
          - Side-by-side 6 / 6 two-up pairing for supporting records
          - Overlaid technical delivery parameters
      ===================================================================== */}
      <section
        aria-label="Selected Projects"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-16">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block mb-2">
                05 / PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
                SELECTED PROJECTS
              </h2>
            </div>

            <a
              href="/projects"
              onClick={(e) => handleLink(e, '/projects')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none"
            >
              <span>Explore all projects</span>
              <IconArrowUpRight size="sm" color="inherit" interactive />
            </a>
          </div>

          <div className="space-y-8">
            {/* 12-Column Hero Monograph Plate (Project 01) */}
            <a
              href={`/projects/${featuredProject.slug}`}
              onClick={(e) => handleLink(e, `/projects/${featuredProject.slug}`)}
              className="group relative rounded-[8px] overflow-hidden block min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-12 lg:p-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/50 to-[#173C62]/10" />

              <div className="relative z-10 text-white max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#93C5FD] font-semibold">
                    FEATURED RECORD &bull; {featuredProject.categoryLabel}
                  </span>
                  <span className="text-white/40">&bull;</span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1]">
                    {featuredProject.location}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.08]">
                  {featuredProject.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl line-clamp-2">
                  {featuredProject.scopeOverview}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>View case record</span>
                  <IconArrow size="sm" color="white" interactive />
                </div>
              </div>

              {/* Overlaid Technical Delivery Parameters in Bottom-Right */}
              <div className="hidden md:flex absolute bottom-8 sm:bottom-12 right-8 sm:right-12 z-10 flex-col items-end text-right text-xs font-mono text-white/80 space-y-1">
                <span className="text-[11px] text-[#93C5FD] font-semibold">DELIVERY PARAMETERS</span>
                <span>48 FLOORS &bull; 3,200 TR DISTRICT COOLING</span>
                <span>100% FIRST-PASS CIVIL DEFENSE CLEARANCE</span>
              </div>
            </a>

            {/* 6 / 6 Two-Up Pairing (Projects 02 & 03) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <a
                href={`/projects/${supportingProject1.slug}`}
                onClick={(e) => handleLink(e, `/projects/${supportingProject1.slug}`)}
                className="lg:col-span-6 group relative rounded-[8px] overflow-hidden block min-h-[300px] sm:min-h-[360px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingProject1.image}
                  alt={supportingProject1.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD] block mb-1.5 font-semibold">
                    {supportingProject1.categoryLabel} &bull; {supportingProject1.location}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    {supportingProject1.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-200 leading-relaxed line-clamp-2">
                    {supportingProject1.scopeOverview}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>View project</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>

              <a
                href={`/projects/${supportingProject2.slug}`}
                onClick={(e) => handleLink(e, `/projects/${supportingProject2.slug}`)}
                className="lg:col-span-6 group relative rounded-[8px] overflow-hidden block min-h-[300px] sm:min-h-[360px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingProject2.image}
                  alt={supportingProject2.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD] block mb-1.5 font-semibold">
                    {supportingProject2.categoryLabel} &bull; {supportingProject2.location}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    {supportingProject2.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-200 leading-relaxed line-clamp-2">
                    {supportingProject2.scopeOverview}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>View project</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          07 NUMBERS & PROOF
          - Premium ProofStrip with large typography (text-6xl to 8xl)
          - Generous negative space, thin separators, zero tiny cards
          - Strictly verified values: 03 Divisions, 24/7 Dispatch, 100% Clearances
      ===================================================================== */}
      <ProofStrip
        eyebrow="06 / SCALE"
        title="VERIFIED EVIDENCE"
        description="Factual operational benchmarks strictly established across our UAE built-environment operations."
        tone="subtle"
        separators="subtle"
        items={[
          {
            index: '01',
            value: '03',
            label: 'Business Divisions',
            subtext: 'Engineering & Construction • Facilities Management • Trading',
          },
          {
            index: '02',
            value: '24/7',
            label: 'Emergency Dispatch',
            subtext: 'Continuous electromechanical monitoring and rapid UAE response center.',
          },
          {
            index: '03',
            value: '100%',
            label: 'Statutory Clearances',
            subtext: 'DEWA, Dubai Civil Defense (DCD), and Dubai Municipality compliance.',
          },
        ]}
      />

      {/* =====================================================================
          08 SECTOR EXPERTISE (Operating Industries)
          - Architectural horizontal scrollable card rail matching design specification
          - Full-bleed photography cards with bottom gradient & crisp typography
          - Navigation controls: swipe left & right icons with smooth scrolling
      ===================================================================== */}
      <section
        aria-label="Operating Sectors"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          
          {/* Header & Horizontal Scroll Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block">
                SECTOR EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.12]">
                Calibrated for mission-critical<br className="hidden sm:inline" /> sectors.
              </h2>
            </div>

            {/* Swipe Left & Right Navigation Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-[8px] border border-[#CBD5E1] bg-white text-[#173C62] flex items-center justify-center transition-all duration-200 hover:border-[#173C62] hover:bg-[#F8FAFC] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <IconArrowLeft size="sm" color="inherit" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-[8px] border border-[#CBD5E1] bg-white text-[#173C62] flex items-center justify-center transition-all duration-200 hover:border-[#173C62] hover:bg-[#F8FAFC] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <IconArrow size="sm" color="inherit" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Rail */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollBounds}
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
          >
            {industries.map((ind) => (
              <div
                key={ind.name}
                onClick={() => onNavigate(ind.slug)}
                className="group relative cursor-pointer flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] aspect-[3/4] rounded-[8px] overflow-hidden bg-[#173C62] select-none transition-all duration-300"
              >
                {/* Full-bleed Photography */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = ind.fallbackImage;
                  }}
                  className="w-full h-full object-cover object-center filter brightness-[0.92] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Dark Scrim Gradient matching reference image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320] via-[#0B1320]/65 via-45% to-transparent pointer-events-none" />

                {/* Bottom Content Typography Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col justify-end text-left z-10 space-y-1.5 text-white">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#93C5FD] font-semibold block">
                    SECTOR {ind.num}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight leading-snug group-hover:text-[#93C5FD] transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-3 pt-1">
                    {ind.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          09 CLIENTS & STATUTORY GOVERNANCE
          - Architectural hairline trust field (Skanska/Arup standard)
          - Zero boxed cards, pure institutional authority
      ===================================================================== */}
      <section
        aria-label="Trusted By"
        className="py-20 lg:py-28 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="max-w-xl mb-12 lg:mb-16">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block mb-2">
              08 / GOVERNANCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
              STATUTORY TRUST &amp; CODE CLEARANCES
            </h2>
          </div>

          {/* Architectural Hairline Field — Zero boxed cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { code: 'DEWA', label: 'Dubai Electricity & Water Authority', scope: '11kV substation & Shams Dubai solar PV EPC accreditation' },
              { code: 'DCD', label: 'Dubai Civil Defense', scope: 'Fire life-safety, smoke pressurization & emergency extract clearances' },
              { code: 'DM', label: 'Dubai Municipality', scope: 'Building hydraulics, potable water skids & public health hygiene' },
              { code: 'IEC', label: 'International Electrotechnical Commission', scope: 'IEC 61439 Form-4 type-tested switchgear assemblies up to 65kA' },
            ].map((item) => (
              <div
                key={item.code}
                className="border-t-2 border-[#173C62] pt-6 flex flex-col justify-between space-y-4 text-left"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xl sm:text-2xl font-semibold text-[#173C62] tracking-wider block">
                    {item.code}
                  </span>
                  <h3 className="text-sm font-medium text-[#0B1320] leading-snug">
                    {item.label}
                  </h3>
                </div>
                <p className="text-xs text-[#64748B] font-normal leading-relaxed">
                  {item.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          11 NEWS & TECHNICAL BRIEFINGS (6 / 6 EDITORIAL SPLIT)
          - Left (6 cols): Featured lead technical dispatch
          - Right (6 cols): Two supporting briefings in balanced column
      ===================================================================== */}
      <section
        aria-label="News and Briefings"
        className="py-24 lg:py-32 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-16">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block mb-2">
                09 / BRIEFINGS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
                ENGINEERING INTELLIGENCE
              </h2>
            </div>

            <a
              href="/news"
              onClick={(e) => handleLink(e, '/news')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none"
            >
              <span>View all briefings</span>
              <IconArrow size="sm" color="inherit" interactive />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Featured Lead Story (6 cols) */}
            <a
              href={`/news/${featuredArticle.slug}`}
              onClick={(e) => handleLink(e, `/news/${featuredArticle.slug}`)}
              className="lg:col-span-6 group relative rounded-[8px] overflow-hidden block min-h-[420px] sm:min-h-[500px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

              <div className="relative z-10 text-white max-w-lg">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD] block mb-2 font-semibold">
                  {featuredArticle.category} &bull; {featuredArticle.date}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug">
                  {featuredArticle.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal line-clamp-2">
                  {featuredArticle.summary}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>Read technical briefing</span>
                  <IconArrow size="sm" color="white" interactive />
                </div>
              </div>
            </a>

            {/* Two Supporting Previews (6 cols stacked) */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <a
                href={`/news/${supportingArticle1.slug}`}
                onClick={(e) => handleLink(e, `/news/${supportingArticle1.slug}`)}
                className="group relative rounded-[8px] overflow-hidden block flex-1 min-h-[220px] sm:min-h-[235px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingArticle1.image}
                  alt={supportingArticle1.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD] block mb-1 font-semibold">
                    {supportingArticle1.category} &bull; {supportingArticle1.date}
                  </span>
                  <h4 className="text-base sm:text-lg font-light text-white tracking-tight line-clamp-2">
                    {supportingArticle1.title}
                  </h4>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>Read briefing</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>

              <a
                href={`/news/${supportingArticle2.slug}`}
                onClick={(e) => handleLink(e, `/news/${supportingArticle2.slug}`)}
                className="group relative rounded-[8px] overflow-hidden block flex-1 min-h-[220px] sm:min-h-[235px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingArticle2.image}
                  alt={supportingArticle2.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#93C5FD] block mb-1 font-semibold">
                    {supportingArticle2.category} &bull; {supportingArticle2.date}
                  </span>
                  <h4 className="text-base sm:text-lg font-light text-white tracking-tight line-clamp-2">
                    {supportingArticle2.title}
                  </h4>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>Read briefing</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          11 FINAL CTA
          - Large dark / LTS Blue statement: LET'S BUILD WHAT'S NEXT.
          - CTA: CONTACT / ENQUIRE →
          - Do not add another large paragraph
      ===================================================================== */}
      <section
        aria-label="Direct Commercial Consultation"
        className="relative py-24 lg:py-36 bg-[#173C62] text-white overflow-hidden text-left"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-building.jpg"
            alt="LTS Consultation"
            className="w-full h-full object-cover object-center opacity-15"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/85 to-[#173C62]/70" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-[11px] font-mono text-[#CBD5E1] uppercase tracking-[0.24em] font-semibold block mb-4">
              10 / ENGAGEMENT
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05]">
              LET&apos;S BUILD WHAT&apos;S NEXT.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-xl">
              Connect directly with our Dubai estimating engineers and technical directors for tenders, solar feasibility, or facility management agreements.
            </p>

            <div className="mt-8">
              <Button
                variant="white"
                size="md"
                shape="rounded"
                onClick={() => onNavigate('/contact')}
                className="text-[12px] tracking-[0.06em] px-7 min-h-[44px]"
              >
                CONTACT / ENQUIRE →
              </Button>
            </div>

            <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap gap-8 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2.5">
                <IconPhone size="sm" color="white" />
                <a
                  href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center"
                >
                  <span>{CORPORATE_INFO.contact.telephone} (24/7 Dispatch)</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <IconEmail size="sm" color="white" />
                <a
                  href={`mailto:${CORPORATE_INFO.contact.emailGeneral}`}
                  className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center"
                >
                  <span>{CORPORATE_INFO.contact.emailGeneral}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
