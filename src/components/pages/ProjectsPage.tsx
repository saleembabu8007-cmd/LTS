import React, { useState, useMemo } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PROJECTS_DATA, ProjectDetailData } from '../../data/projectsData';

interface ProjectsPageProps {
  onNavigate: (slug: string) => void;
}

/**
 * Standardized Project Card
 * Conforms strictly to LTSGROUP Project Card Rules:
 * - Image (dominant, soft 18-20px radius, subtle hover zoom 1.025x)
 * - Category (clean uppercase mono tag)
 * - Project title (crisp editorial typography)
 * - Short metadata (location, asset sector, concise scope summary)
 * - View project (explicit link with micro-arrow shift)
 */
interface ProjectCardProps {
  project: ProjectDetailData;
  aspectClass?: string;
  variant?: 'featured' | 'standard';
  onNavigate: (slug: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  aspectClass = 'aspect-[16/10]',
  variant = 'standard',
  onNavigate,
}) => {
  const isFeatured = variant === 'featured';

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
      <article className="space-y-4">
        {/* Dominant Contextual Image (Soft 18-20px radius, NO borders, NO AI tags) */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Card Info: Category + Project title + Short metadata + View project */}
        <div className="space-y-2 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
          {/* Category & Location */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#173C62] font-semibold block">
              {project.categoryLabel}
            </span>
            <span className="text-[#94A3B8] text-xs">&bull;</span>
            <span className="font-mono text-[11px] sm:text-xs text-[#64748B]">
              {project.location.split(',')[0]}
            </span>
          </div>

          {/* Project Title */}
          <h3
            className={`text-[#0B1320] font-light leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200 ${
              isFeatured
                ? 'text-2xl sm:text-3xl lg:text-4xl'
                : 'text-xl sm:text-2xl'
            }`}
          >
            {project.title}
          </h3>

          {/* Short Metadata / Scope overview */}
          <p
            className={`text-[#4A5568] font-normal leading-relaxed ${
              isFeatured
                ? 'text-sm sm:text-base line-clamp-2 max-w-3xl'
                : 'text-xs sm:text-sm line-clamp-2'
            }`}
          >
            {project.scopeOverview}
          </p>

          {/* Explicit "View project" action with micro arrow shift */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173C62] group-hover:text-[#102B47] transition-colors">
              <span className="group-hover:underline underline-offset-4">View project case record</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </article>
    </a>
  );
};

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');

  // Simple, authentic categories supported by existing project records
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
      label: 'Trading & Supply',
      count: PROJECTS_DATA.filter((p) => p.division === 'Trading').length,
    },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedDivision === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.division === selectedDivision);
  }, [selectedDivision]);

  // Group filtered projects into sets of 3: [1 featured, up to 2 standards]
  const projectSets = useMemo(() => {
    const sets: { featured: ProjectDetailData; standards: ProjectDetailData[] }[] = [];
    for (let i = 0; i < filteredProjects.length; i += 3) {
      sets.push({
        featured: filteredProjects[i],
        standards: filteredProjects.slice(i + 1, i + 3),
      });
    }
    return sets;
  }, [filteredProjects]);

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          HERO
          Clean, editorial title: Projects
          A concise introduction.
      ========================================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-6 md:pb-8">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 pb-8 md:pb-10 border-b border-[#E5E7EB]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block mb-2 font-semibold">
                LTSGROUP &bull; DELIVERED ASSETS
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
              FILTER / CATEGORIES
              Simple, non-dashboard segmented text filter
              Only uses categories supported by available project data
          ========================================================================= */}
          <div className="pt-6 md:pt-8 flex items-center justify-between gap-6">
            {/* Desktop Segmented Text Navigation */}
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
              <span> verified case records</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROJECT GRID
          Visual editorial grid adhering to the master formula:
          featured project + 2 standard projects + repeat
          Varied image sizes while maintaining a coherent 12-column grid.
      ========================================================================= */}
      <section className="pt-6 pb-20 sm:pb-28 md:pb-36">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          {filteredProjects.length === 0 ? (
            /* EMPTY / LIMITED CONTENT */
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
            <div className="space-y-16 sm:space-y-24 md:space-y-32">
              {projectSets.map((set, setIdx) => {
                const isEvenSet = setIdx % 2 === 0;

                return (
                  <div key={set.featured.id} className="space-y-12 sm:space-y-16">
                    {/* 1. FEATURED PROJECT (Dominant presentation, varied aspect) */}
                    <div className="w-full">
                      <ProjectCard
                        project={set.featured}
                        variant="featured"
                        aspectClass={
                          isEvenSet
                            ? 'aspect-[16/9] lg:aspect-[21/9]'
                            : 'aspect-[16/10] lg:aspect-[16/8]'
                        }
                        onNavigate={onNavigate}
                      />
                    </div>

                    {/* 2. TWO STANDARD PROJECTS (Balanced 2-column pairing) */}
                    {set.standards.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start pt-4 border-t border-[#F1F5F9]">
                        {set.standards.map((stdProject) => (
                          <div key={stdProject.id}>
                            <ProjectCard
                              project={stdProject}
                              variant="standard"
                              aspectClass="aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/10]"
                              onNavigate={onNavigate}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          CONSULTATION / SPECIFICATION INTAKE
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
