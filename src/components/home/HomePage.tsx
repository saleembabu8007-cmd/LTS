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
                shape="capsule"
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
          02 WHO WE ARE
          - Very minimal, editorial composition
          - Large heading left: WHO WE ARE
          - Small supporting copy right: one concise paragraph + READ MORE →
          - No card, generous whitespace
      ===================================================================== */}
      <section
        aria-label="Who We Are"
        className="py-24 lg:py-36 bg-white border-b border-[#E5E7EB]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start text-left">
            {/* Large Heading Left */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block">
                01 / PERSPECTIVE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#0B1320] tracking-tight leading-[1.02]">
                WHO WE ARE
              </h2>
            </div>

            {/* Small Supporting Copy Right */}
            <div className="lg:col-span-7 space-y-6 lg:pt-3">
              <p className="text-xl sm:text-2xl font-light text-[#0B1320] leading-snug tracking-tight max-w-2xl">
                LTSGROUP unifies turnkey MEP contracting, facilities management, and OEM technical equipment supply under direct Dubai governance—ensuring built assets operate with unbroken reliability across decades.
              </p>

              <div>
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
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 WHAT WE DO (OPERATING DIVISIONS)
          - Three large visual business area panels: E&C, FM, Trading
          - Asymmetric 12-column editorial layout (7 cols dominant + 5 cols stacked)
          - Full photographic narrative with authentic LTS Blue scrims
      ===================================================================== */}
      <section
        aria-label="What We Do"
        className="py-24 lg:py-32 bg-[#F8FAFC] border-b border-[#E5E7EB]"
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
            {/* Panel 1: Engineering & Construction (Dominant 7 Cols) */}
            <a
              href="/engineering-construction"
              onClick={(e) => handleLink(e, '/engineering-construction')}
              className="lg:col-span-7 group relative rounded-[20px] overflow-hidden block min-h-[400px] sm:min-h-[500px] lg:min-h-[580px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-12 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <img
                src="/assets/images/mep-construction.jpg"
                alt="Engineering & Construction"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/50 to-transparent" />

              <div className="relative z-10 text-white max-w-lg">
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

            {/* Panels 2 & 3: Facilities Management & Trading (5 Cols Stacked) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Panel 2 */}
              <a
                href="/facilities-management"
                onClick={(e) => handleLink(e, '/facilities-management')}
                className="group relative rounded-[20px] overflow-hidden block flex-1 min-h-[240px] sm:min-h-[270px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-9 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
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
                className="group relative rounded-[20px] overflow-hidden block flex-1 min-h-[240px] sm:min-h-[270px] bg-[#173C62] flex flex-col justify-end p-7 sm:p-9 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
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
          04 FEATURED CAPABILITY
          - One visually dominant story
          - Cinematic panoramic visual (~65% / 8 cols)
          - Concise architectural narrative (~35% / 4 cols)
          - Zero excessive shadows or card boxes
      ===================================================================== */}
      <section
        aria-label="Featured Capability"
        className="py-24 lg:py-32 bg-white border-b border-[#E5E7EB]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center text-left">
            {/* Cinematic Dominant Visual (8 cols) */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/10] sm:aspect-[21/11] rounded-[20px] overflow-hidden bg-[#173C62]">
                <img
                  src="/assets/images/solar-epc.jpg"
                  alt="Commercial Solar PV EPC and Infrastructure"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/80 via-[#173C62]/20 to-transparent" />
                <div className="absolute bottom-5 left-6 text-white font-mono text-xs uppercase tracking-wider">
                  DEWA Shams Dubai Synchronized &bull; Zero-Carbon Infrastructure
                </div>
              </div>
            </div>

            {/* Minimal Text Area (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block">
                  03 / CAPABILITY SPOTLIGHT
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-tight">
                  Commercial Rooftop Solar Photovoltaics.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal">
                Turnkey EPC delivery under DEWA Shams Dubai, transforming industrial and commercial building envelopes into high-yield power generation assets with statutory grid synchronization.
              </p>

              <div className="pt-2">
                <a
                  href="/engineering-construction/solar"
                  onClick={(e) => handleLink(e, '/engineering-construction/solar')}
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none"
                >
                  <span className="border-b border-[#173C62] pb-0.5 group-hover:border-[#0B1320] transition-colors">
                    EXPLORE CAPABILITIES
                  </span>
                  <IconArrow size="sm" color="inherit" interactive />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          05 SOLUTIONS
          - Clean editorial list (NOT a card grid)
          - Discipline name + arrow with subtle separators
          - Pure, dignified typography
      ===================================================================== */}
      <section
        aria-label="Solutions Directory"
        className="py-24 lg:py-32 bg-[#F8FAFC] border-b border-[#E5E7EB]"
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
            {solutions.map((sol) => (
              <a
                key={sol.name}
                href={sol.slug}
                onClick={(e) => handleLink(e, sol.slug)}
                className="group py-5 sm:py-6 flex items-center justify-between transition-all duration-200 hover:pl-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <h3 className="text-lg sm:text-2xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors tracking-tight">
                    {sol.name}
                  </h3>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
                    {sol.category}
                  </span>
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
          06 PROJECTS
          - Image-led portfolio moment
          - One dominant project (7 cols) + Two supporting projects (5 cols)
          - Varying image proportions
          - Minimal project info: Title, Category, VIEW CASE RECORD →
      ===================================================================== */}
      <section
        aria-label="Selected Projects"
        className="py-24 lg:py-32 bg-white border-b border-[#E5E7EB]"
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Dominant Project (7 cols, 16/10 ratio) */}
            <a
              href={`/projects/${featuredProject.slug}`}
              onClick={(e) => handleLink(e, `/projects/${featuredProject.slug}`)}
              className="lg:col-span-7 group relative rounded-[20px] overflow-hidden block min-h-[380px] sm:min-h-[480px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

              <div className="relative z-10 text-white max-w-lg">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-2">
                  {featuredProject.categoryLabel} &bull; {featuredProject.location}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                  {featuredProject.title}
                </h3>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>View case record</span>
                  <IconArrow size="sm" color="white" interactive />
                </div>
              </div>
            </a>

            {/* Two Supporting Projects (5 cols stacked) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <a
                href={`/projects/${supportingProject1.slug}`}
                onClick={(e) => handleLink(e, `/projects/${supportingProject1.slug}`)}
                className="group relative rounded-[20px] overflow-hidden block flex-1 min-h-[220px] bg-[#173C62] flex flex-col justify-end p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingProject1.image}
                  alt={supportingProject1.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    {supportingProject1.categoryLabel}
                  </span>
                  <h4 className="text-lg sm:text-xl font-light text-white tracking-tight">
                    {supportingProject1.title}
                  </h4>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold uppercase text-white group-hover:text-slate-200">
                    <span>View project</span>
                    <IconArrow size="sm" color="white" interactive />
                  </div>
                </div>
              </a>

              <a
                href={`/projects/${supportingProject2.slug}`}
                onClick={(e) => handleLink(e, `/projects/${supportingProject2.slug}`)}
                className="group relative rounded-[20px] overflow-hidden block flex-1 min-h-[220px] bg-[#173C62] flex flex-col justify-end p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingProject2.image}
                  alt={supportingProject2.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                    {supportingProject2.categoryLabel}
                  </span>
                  <h4 className="text-lg sm:text-xl font-light text-white tracking-tight">
                    {supportingProject2.title}
                  </h4>
                  <div className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-semibold uppercase text-white group-hover:text-slate-200">
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
        className="py-20 lg:py-28 bg-white border-b border-[#E5E7EB]"
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
                className="w-11 h-11 rounded-[10px] border border-[#CBD5E1] bg-white text-[#173C62] flex items-center justify-center transition-all duration-200 hover:border-[#173C62] hover:bg-[#F8FAFC] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <IconArrowLeft size="sm" color="inherit" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-[10px] border border-[#CBD5E1] bg-white text-[#173C62] flex items-center justify-center transition-all duration-200 hover:border-[#173C62] hover:bg-[#F8FAFC] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
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
                className="group relative cursor-pointer flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] aspect-[3/4] rounded-[20px] overflow-hidden bg-[#173C62] border border-[#E5E7EB] select-none transition-all duration-300 hover:border-[#173C62]/40"
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
        className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB]"
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
          10 NEWS
          - One large featured story (7 cols)
          - Two smaller stories (5 cols)
          - No large blog grid
      ===================================================================== */}
      <section
        aria-label="News and Briefings"
        className="py-24 lg:py-32 bg-white border-b border-[#E5E7EB]"
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
            {/* Featured Article (7 cols) */}
            <a
              href={`/news/${featuredArticle.slug}`}
              onClick={(e) => handleLink(e, `/news/${featuredArticle.slug}`)}
              className="lg:col-span-7 group relative rounded-[20px] overflow-hidden block min-h-[360px] sm:min-h-[440px] bg-[#173C62] flex flex-col justify-end p-8 sm:p-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

              <div className="relative z-10 text-white max-w-lg">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-2">
                  {featuredArticle.category} &bull; {featuredArticle.date}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug">
                  {featuredArticle.title}
                </h3>
                <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>Read technical briefing</span>
                  <IconArrow size="sm" color="white" interactive />
                </div>
              </div>
            </a>

            {/* Two Smaller Previews (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <a
                href={`/news/${supportingArticle1.slug}`}
                onClick={(e) => handleLink(e, `/news/${supportingArticle1.slug}`)}
                className="group relative rounded-[20px] overflow-hidden block flex-1 min-h-[180px] bg-[#173C62] flex flex-col justify-end p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingArticle1.image}
                  alt={supportingArticle1.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
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
                className="group relative rounded-[20px] overflow-hidden block flex-1 min-h-[180px] bg-[#173C62] flex flex-col justify-end p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
              >
                <img
                  src={supportingArticle2.image}
                  alt={supportingArticle2.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/95 via-[#173C62]/45 to-transparent" />

                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
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
                shape="capsule"
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
