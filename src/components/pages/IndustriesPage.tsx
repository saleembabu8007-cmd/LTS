import React, { useRef, useState, useEffect } from 'react';
import {
  IconArrow,
  IconArrowLeft,
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
 * 01 Hero → 02 Horizontal Photographic Monograph Rail → 03 Typographic Solutions Split → 04 Delivered Projects → 05 CTA.
 */
export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate }) => {
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
      num: '01',
      title: 'Turnkey MEP Contracting',
      desc: 'BIM-coordinated hydronic piping, electrical busways, and certified life-safety systems.',
      slug: '/engineering-construction/mep',
    },
    {
      num: '02',
      title: 'Solar Photovoltaic EPC',
      desc: 'DEWA Shams Dubai certified commercial rooftop and carpark canopy PV arrays.',
      slug: '/engineering-construction/solar',
    },
    {
      num: '03',
      title: 'Low-Voltage Control Switchgear',
      desc: 'Form-4 motor control centers and factory type-tested switchboard assemblies.',
      slug: '/engineering-construction/control-switchgear',
    },
    {
      num: '04',
      title: 'Hard Facilities Engineering',
      desc: '24/7 predictive electromechanical stewardship, chiller overhauls, and continuous uptime SLAs.',
      slug: '/facilities-management/hard-services',
    },
    {
      num: '05',
      title: 'Precision OEM Component Trading',
      desc: 'Authentic compressors, low-harmonic VFDs, and revenue-grade ultrasonic BTU heat meters.',
      slug: '/trading',
    },
  ];

  // Filter curated delivered projects
  const relevantProjects = PROJECTS_DATA.slice(0, 4);

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
              <span className="text-xs uppercase tracking-[0.12em] text-[#CBD5E1] block font-semibold">
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
          02 — SECTOR MONOGRAPHS (Horizontal Photographic Rail)
          Image-first portrait cards with bottom gradient & crisp typography.
          Left / Right smooth scroll navigation controls.
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-left">
          
          {/* Header & Horizontal Scroll Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                01 &bull; Sector Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.12]">
                Operating Sectors &amp;<br className="hidden sm:inline" /> Environments
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
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16"
          >
            {industries.map((item) => (
              <div
                key={item.num}
                onClick={() => onNavigate(`/projects/${item.projectSlug}`)}
                className="group relative cursor-pointer flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] aspect-[3/4] rounded-[8px] overflow-hidden bg-[#173C62] select-none transition-all duration-300"
              >
                {/* Full-bleed Photography */}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center filter brightness-[0.92] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = item.fallbackImage;
                  }}
                />

                {/* LTS Blue Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/90 via-[#173C62]/45 via-45% to-transparent pointer-events-none" />

                {/* Bottom Content Typography Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col justify-end text-left z-10 space-y-1.5 text-white">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-[#CBD5E1] font-medium block">
                    SECTOR {item.num}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight leading-snug group-hover:text-slate-200 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed line-clamp-3 pt-1">
                    {item.sentence}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          03 — CROSS-SECTOR DELIVERY (Architectural Typographic Split List)
          Replaces generic 5-card grid with a clean, editorial typographic layout.
      ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Context Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                02 &bull; Cross-Sector Delivery
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight leading-tight">
                Core Engineering Solutions
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                Standardized, authority-compliant engineering packages deployed across commercial towers, healthcare complexes, and industrial logistics parks.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/engineering-construction')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] transition-colors py-2 min-h-[44px] cursor-pointer"
                >
                  <span className="border-b border-[#173C62] pb-0.5">Explore All Capabilities</span>
                  <IconArrow size="sm" color="primary" interactive />
                </button>
              </div>
            </div>

            {/* Right Typographic Rail (8 cols) — Zero boxy cards */}
            <div className="lg:col-span-8 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB] text-left">
              {solutions.map((sol) => (
                <button
                  key={sol.num}
                  type="button"
                  onClick={() => onNavigate(sol.slug)}
                  className="w-full py-6 sm:py-7 flex items-start justify-between gap-6 group text-left cursor-pointer transition-colors hover:bg-white/60 -mx-4 px-4 rounded-[6px]"
                >
                  <div className="flex items-start gap-5 sm:gap-8 max-w-xl">
                    <span className="font-mono text-xs sm:text-sm text-[#999999] tracking-wider pt-0.5 shrink-0">
                      {sol.num}
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-normal text-[#0B1320] group-hover:text-[#173C62] transition-colors tracking-tight">
                        {sol.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                        {sol.desc}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 pt-1 text-[#173C62] group-hover:translate-x-1 transition-transform">
                    <IconArrow size="sm" color="primary" interactive />
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — DELIVERED PROJECTS PROOF
          Curated case study evidence by sector.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
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
                className="group cursor-pointer bg-[#F8FAFC] rounded-[8px] p-6 sm:p-8 transition-all"
              >
                <div className="aspect-[16/10] rounded-[8px] overflow-hidden mb-5 bg-[#173C62]">
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
          <div className="bg-[#173C62] text-white rounded-[8px] p-8 sm:p-14 lg:p-16 relative overflow-hidden">
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
                  className="inline-flex items-center gap-2 bg-white text-[#173C62] hover:bg-white/95 text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-[8px] transition-all duration-200 cursor-pointer"
                >
                  <span>Submit Project Scope</span>
                  <IconArrow size="sm" color="primary" interactive />
                </button>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/20 text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-4 rounded-[8px] transition-all duration-200 cursor-pointer"
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
