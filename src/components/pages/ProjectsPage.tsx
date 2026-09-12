import React, { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { PROJECTS_DATA, ProjectDetailData } from '../../data/projectsData';

interface ProjectsPageProps {
  onNavigate: (slug: string) => void;
}

/**
 * PortfolioCard
 * Conforms strictly to portfolio design rules:
 * - Image (dominant, soft 18-20px radius, no border)
 * - Project name
 * - Short discipline label
 * - Arrow (translates 4-6px on hover)
 * - Zero tags, zero borders, zero metadata overload
 * - Subtle hover micro-animation (image zoom 1.025x, text shift -2px, arrow shift 6px)
 */
interface PortfolioCardProps {
  project: ProjectDetailData;
  aspectClass: string;
  isLarge?: boolean;
  onNavigate: (slug: string) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  project,
  aspectClass,
  isLarge = false,
  onNavigate,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate(`/projects/${project.slug}`);
  };

  return (
    <a
      href={`/projects/${project.slug}`}
      onClick={handleClick}
      className="group cursor-pointer block select-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none rounded-[20px]"
      aria-label={`View case study: ${project.title}`}
    >
      <article>
        {/* Photographic Container (Soft 18-20px radius, NO borders, NO tags) */}
        <div
          className={`relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#0B1C2F] ${aspectClass}`}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Card Info: Short discipline label + project name + subtle arrow */}
        <div className="mt-4 sm:mt-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#64748B] block font-medium">
                {project.categoryLabel} &bull; {project.location.split(',')[0]}
              </span>
              <h3
                className={`text-[#0B1320] font-light leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200 ${
                  isLarge
                    ? 'text-xl sm:text-2xl lg:text-3xl'
                    : 'text-lg sm:text-xl'
                }`}
              >
                {project.title}
              </h3>
            </div>

            {/* Minimal 4-6px shifting arrow */}
            <div
              className="shrink-0 mt-1.5 text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5"
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </a>
  );
};

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');

  const filterOptions = [
    {
      id: 'all',
      label: 'All Disciplines',
      count: PROJECTS_DATA.length,
    },
    {
      id: 'Engineering & Construction',
      label: 'Engineering & Construction',
      count: PROJECTS_DATA.filter((p) => p.division === 'Engineering & Construction').length,
    },
    {
      id: 'Facilities Management',
      label: 'Facilities Management',
      count: PROJECTS_DATA.filter((p) => p.division === 'Facilities Management').length,
    },
    {
      id: 'Trading',
      label: 'Trading & Components',
      count: PROJECTS_DATA.filter((p) => p.division === 'Trading').length,
    },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedDivision === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.division === selectedDivision);
  }, [selectedDivision]);

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — HEADER
          Large editorial title: Projects
          Short one-line description.
          No huge white empty header.
          Introduces a large project image immediately through Row 1.
      ========================================================================= */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-6 md:pb-8">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 pb-8 md:pb-10 border-b border-[#E5E7EB]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block mb-2 font-semibold">
                Portfolio Monograph
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B1320] tracking-tight leading-[0.95]">
                Projects
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#4A5568] max-w-xl font-normal leading-relaxed">
              Curated records of critical electromechanical contracting, utility-scale solar PV, and plant operations across the UAE.
            </p>
          </div>

          {/* =========================================================================
              02 — FILTER CONTROL
              Do not use a row of pill buttons.
              Desktop: compact filter selector / segmented text navigation.
              Mobile: single filter dropdown.
          ========================================================================= */}
          <div className="pt-6 md:pt-8 flex items-center justify-between gap-6">
            {/* Desktop Segmented Text Navigation (No pills, no borders, clean baseline) */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {filterOptions.map((opt) => {
                const isActive = selectedDivision === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedDivision(opt.id)}
                    className={`group relative flex items-baseline gap-2 py-2 text-sm tracking-normal transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#0B1320] font-semibold'
                        : 'text-[#64748B] hover:text-[#0B1320] font-medium'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span
                      className={`text-[11px] font-mono transition-colors ${
                        isActive
                          ? 'text-[#173C62] font-semibold'
                          : 'text-[#94A3B8] group-hover:text-[#64748B]'
                      }`}
                    >
                      {opt.count < 10 ? `0${opt.count}` : opt.count}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#173C62]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Single Filter Dropdown */}
            <div className="md:hidden w-full">
              <label htmlFor="mobile-project-filter" className="sr-only">
                Filter by discipline
              </label>
              <div className="relative">
                <select
                  id="mobile-project-filter"
                  value={selectedDivision}
                  onChange={(e) => setSelectedDivision(e.target.value)}
                  className="w-full appearance-none bg-[#F8FAFC] border border-[#E5E7EB] text-[#0B1320] text-sm rounded-[12px] px-4 py-3 pr-10 font-medium focus:outline-none focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] cursor-pointer"
                >
                  {filterOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label} ({opt.count})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#64748B]">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Right: Record count indicator */}
            <div className="hidden lg:block font-mono text-xs text-[#94A3B8]">
              <span>Showing </span>
              <span className="text-[#0B1320] font-medium">
                {filteredProjects.length < 10
                  ? `0${filteredProjects.length}`
                  : filteredProjects.length}
              </span>
              <span> verified case studies</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — CURATED EDITORIAL GRID
          Do not use equal 3-column cards.
          Row 1: large featured project ~60%, smaller project ~40%
          Row 2: two differently sized projects (~40% / ~60%)
          Row 3: large project (wide panoramic)
          Vary aspect ratios deliberately.
      ========================================================================= */}
      <section className="pt-4 pb-20 sm:pb-28 md:pb-36">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          {filteredProjects.length === 0 ? (
            <div className="py-24 text-center space-y-4 max-w-md mx-auto">
              <p className="text-base text-[#4A5568]">
                No project records found in this discipline category.
              </p>
              <button
                onClick={() => setSelectedDivision('all')}
                className="text-xs font-semibold text-[#173C62] uppercase tracking-wider hover:underline cursor-pointer"
              >
                Reset Filter View &rarr;
              </button>
            </div>
          ) : (
            <div className="space-y-16 sm:space-y-20 md:space-y-28">
              {/* Row 1: Large featured project ~60% (7 cols) + Smaller project ~40% (5 cols) */}
              {filteredProjects.length >= 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-7">
                    <PortfolioCard
                      project={filteredProjects[0]}
                      aspectClass="aspect-[16/10]"
                      isLarge={true}
                      onNavigate={onNavigate}
                    />
                  </div>
                  {filteredProjects[1] && (
                    <div className="lg:col-span-5">
                      <PortfolioCard
                        project={filteredProjects[1]}
                        aspectClass="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]"
                        isLarge={false}
                        onNavigate={onNavigate}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Row 2: Two differently sized projects (e.g. 5 cols / 7 cols reversed rhythm) */}
              {filteredProjects.length >= 3 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  <div className="lg:col-span-5">
                    <PortfolioCard
                      project={filteredProjects[2]}
                      aspectClass="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]"
                      isLarge={false}
                      onNavigate={onNavigate}
                    />
                  </div>
                  {filteredProjects[3] && (
                    <div className="lg:col-span-7">
                      <PortfolioCard
                        project={filteredProjects[3]}
                        aspectClass="aspect-[16/10]"
                        isLarge={true}
                        onNavigate={onNavigate}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Row 3: Large project (wide / panoramic 12-column dominant monograph) */}
              {filteredProjects.length >= 5 && (
                <div className="w-full">
                  <PortfolioCard
                    project={filteredProjects[4]}
                    aspectClass="aspect-[16/9] lg:aspect-[21/9]"
                    isLarge={true}
                    onNavigate={onNavigate}
                  />
                </div>
              )}

              {/* Row 4+: Remaining projects in intentional asymmetric pairings */}
              {filteredProjects.length > 5 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {filteredProjects[5] && (
                    <div className="lg:col-span-7">
                      <PortfolioCard
                        project={filteredProjects[5]}
                        aspectClass="aspect-[16/10]"
                        isLarge={true}
                        onNavigate={onNavigate}
                      />
                    </div>
                  )}
                  {filteredProjects[6] && (
                    <div className="lg:col-span-5">
                      <PortfolioCard
                        project={filteredProjects[6]}
                        aspectClass="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]"
                        isLarge={false}
                        onNavigate={onNavigate}
                      />
                    </div>
                  )}
                  {filteredProjects[7] && (
                    <div className="lg:col-span-12 mt-8 lg:mt-12">
                      <PortfolioCard
                        project={filteredProjects[7]}
                        aspectClass="aspect-[16/9] lg:aspect-[21/9]"
                        isLarge={true}
                        onNavigate={onNavigate}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          04 — CONSULTATION / TENDER INTAKE
          Quiet, architectural closing section for drawings and engineering reviews
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              Tender &amp; Specification Intake
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
              Commission LTSGROUP on Your Next Built Asset
            </h2>
            <p className="text-base text-[#4A5568] leading-relaxed">
              Directly submit architectural drawings, electromechanical specifications, or equipment schedules to our engineering estimating desk for constructability and EPC reviews.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/contact?tab=rfp')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[12px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#11253E] transition-colors cursor-pointer"
              >
                Submit Project Specification &rarr;
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-[12px] border border-[#CBD5E1] text-[#0B1320] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
              >
                Contact Estimating Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
