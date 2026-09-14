import React, { useState, useMemo } from 'react';
import { IconArrow } from '../../design-system/icons';
import { PROJECTS_DATA, ProjectDetailData } from '../../data/projectsData';
import {
  ImageLargeFeature,
  ImageOverlappingText,
  ImageAsymmetricPair,
  ImageHorizontalRowList,
  ImageStack,
  ImageNumberSplit,
} from '../../design-system/visual-patterns';

interface ProjectsPageProps {
  onNavigate: (slug: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');

  const filterOptions = [
    {
      id: 'all',
      label: 'All Delivered Works',
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

  // Lead featured project (Type 01)
  const leadProject = filteredProjects[0];
  // Pair projects (Type 03)
  const pairProjects = filteredProjects.slice(1, 3);
  // Numbered project (Type 08)
  const metricProject = filteredProjects[3];
  // Overlapping text projects (Type 02)
  const overlapProjects = filteredProjects.slice(4, 6);
  // Stacked project (Type 07)
  const stackProject = filteredProjects[6] || filteredProjects[0];

  // Convert all filtered projects into ledger rows for Type 05
  const ledgerProjects = useMemo(() => {
    return filteredProjects.map((p) => ({
      id: p.id,
      title: p.title,
      location: p.location,
      category: p.categoryLabel || p.category,
      thumbnail: p.image,
      thumbnailAlt: p.title,
      specSummary: p.specifications && p.specifications[0] ? `${p.specifications[0].label}: ${p.specifications[0].value}` : p.industry,
      href: `/projects/${p.slug}`,
    }));
  }, [filteredProjects]);

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          HERO
          Clean, editorial title: Projects
          A concise introduction.
      ========================================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-6 md:pb-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 pb-8 md:pb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] block mb-2 font-semibold">
                LTSGROUP &bull; DELIVERED ASSETS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#0B1320] tracking-tight leading-[0.98]">
                Delivered Projects
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#4A5568] max-w-xl font-normal leading-relaxed">
              Curated records of critical electromechanical contracting, utility-scale solar PV, central plant reliability, and OEM component delivery across the UAE.
            </p>
          </div>

          {/* =========================================================================
              FILTER / CATEGORIES
              Simple, non-dashboard segmented text filter
              Only uses categories supported by available project data
          ========================================================================= */}
          <div className="pt-6 md:pt-8 flex items-center justify-between gap-6 border-b border-slate-200 pb-4">
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
                      className={`text-[11px] font-medium transition-colors ${
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
                  className="w-full min-h-[44px] appearance-none bg-[#F8FAFC] border border-[#E5E7EB] text-[#0B1320] text-base sm:text-sm rounded-[8px] px-4 py-2.5 pr-10 font-medium focus:outline-none focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] cursor-pointer"
                >
                  {filterOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.label} ({opt.count})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#64748B]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Record count indicator */}
            <div className="hidden lg:block text-xs text-[#94A3B8] font-normal">
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
          MASTER IMAGE-FIRST EDITORIAL GALLERY
          Replaces formulaic card repetition with varied editorial compositions:
          Type 01 (Large Feature) -> Type 03 (Asymmetric Pair) -> Type 08 (Image + Number)
          -> Type 02 (Overlapping Text) -> Type 07 (Image Stack) -> Type 05 (Project Ledger)
      ========================================================================= */}
      <section className="pt-8 pb-20 sm:pb-28 md:pb-36">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {filteredProjects.length === 0 ? (
            /* EMPTY / LIMITED CONTENT */
            <div className="py-24 text-center space-y-4 max-w-md mx-auto">
              <p className="text-base text-[#4A5568]">
                No project records found in this discipline category.
              </p>
              <button
                onClick={() => setSelectedDivision('all')}
                className="text-xs font-semibold text-[#173C62] uppercase tracking-wider hover:underline cursor-pointer min-h-[44px] py-2"
              >
                Reset Filter View &rarr;
              </button>
            </div>
          ) : (
            <>
              {/* 1. LEAD MARQUEE FEATURE (Type 01: Large Feature, 21:9 Aspect) */}
              {leadProject && (
                <div>
                  <ImageLargeFeature
                    title={leadProject.title}
                    imageSrc={leadProject.image}
                    imageAlt={leadProject.title}
                    category={leadProject.categoryLabel || leadProject.category}
                    metadata={`${leadProject.location.toUpperCase()} • ${leadProject.completionDate}`}
                    description={leadProject.scopeOverview}
                    href={`/projects/${leadProject.slug}`}
                    onNavigate={onNavigate}
                    aspectRatio="21/9"
                  />
                </div>
              )}

              {/* 2. ASYMMETRIC PAIR (Type 03: 1 Dominant + 1 Complementary with Specs) */}
              {pairProjects.length >= 2 && (
                <div className="border-t border-slate-200 pt-12 sm:pt-16">
                  <ImageAsymmetricPair
                    title={pairProjects[0].title}
                    category={pairProjects[0].categoryLabel || pairProjects[0].category}
                    eyebrow={`${pairProjects[0].location.toUpperCase()} • COMMISSIONED ${pairProjects[0].completionDate}`}
                    description={pairProjects[0].scopeOverview}
                    primaryImage={pairProjects[0].image}
                    primaryImageAlt={pairProjects[0].title}
                    primaryCaption={`${pairProjects[0].industry.toUpperCase()} • VERIFIED`}
                    secondaryImage={pairProjects[1].image}
                    secondaryImageAlt={pairProjects[1].title}
                    secondaryCaption={`${pairProjects[1].categoryLabel.toUpperCase()}`}
                    specs={pairProjects[0].specifications.slice(0, 4)}
                    href={`/projects/${pairProjects[0].slug}`}
                    ctaText="Examine Case Record"
                    onNavigate={onNavigate}
                  />
                </div>
              )}

              {/* 3. IMAGE + NUMBER (Type 08: Forensic Metric Split) */}
              {metricProject && (
                <div className="border-t border-slate-200 pt-12 sm:pt-16">
                  <ImageNumberSplit
                    title={metricProject.title}
                    category={metricProject.categoryLabel || metricProject.category}
                    eyebrow={`${metricProject.location.toUpperCase()}`}
                    imageSrc={metricProject.image}
                    imageCaption={metricProject.industry.toUpperCase()}
                    metricValue={
                      metricProject.specifications && metricProject.specifications[1]
                        ? metricProject.specifications[1].value.split(' ')[0]
                        : '100%'
                    }
                    metricLabel={
                      metricProject.specifications && metricProject.specifications[1]
                        ? metricProject.specifications[1].label
                        : 'Statutory Compliance Record'
                    }
                    metricSubtext={metricProject.specifications && metricProject.specifications[1] ? metricProject.specifications[1].value : undefined}
                    description={metricProject.scopeOverview}
                    citation={`AUDITED DOSSIER • ${metricProject.location.toUpperCase()} • DEWA APPROVED`}
                    href={`/projects/${metricProject.slug}`}
                    onNavigate={onNavigate}
                    aspectRatio="16/10"
                  />
                </div>
              )}

              {/* 4. OVERLAPPING TEXT DUO (Type 02: 2 Side-by-Side Overlapping Cards) */}
              {overlapProjects.length > 0 && (
                <div className="border-t border-slate-200 pt-12 sm:pt-16">
                  <div className="text-left pb-8">
                    <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] font-semibold block mb-1">
                      SELECTED DELIVERIES &bull; CRITICAL ENVELOPES
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                      Specialized Contracting &amp; Plant Reliability
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
                    {overlapProjects.map((proj, pIdx) => (
                      <ImageOverlappingText
                        key={proj.id}
                        title={proj.title}
                        imageSrc={proj.image}
                        imageAlt={proj.title}
                        category={proj.categoryLabel || proj.category}
                        metadata={proj.location}
                        description={proj.scopeOverview}
                        href={`/projects/${proj.slug}`}
                        onNavigate={onNavigate}
                        aspectRatio="4/3"
                        overlapPosition={pIdx % 2 === 0 ? 'bottom-left' : 'bottom-right'}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* 5. IMAGE STACK (Type 07: Macro-to-Micro Engineering Depth) */}
              {stackProject && (
                <div className="border-t border-slate-200 pt-12 sm:pt-16">
                  <ImageStack
                    title={stackProject.title}
                    category={stackProject.categoryLabel || stackProject.category}
                    eyebrow={`${stackProject.location.toUpperCase()} • VERIFIED EXECUTION`}
                    description={stackProject.challenge ? `${stackProject.challenge} ${stackProject.solution}` : stackProject.scopeOverview}
                    macroImage={stackProject.image}
                    macroCaption="PRIMARY FACILITY INFRASTRUCTURE"
                    microImage={stackProject.secondaryImage || stackProject.image}
                    microCaption="ELECTROMECHANICAL DETAIL"
                    specs={stackProject.specifications.slice(0, 4)}
                    href={`/projects/${stackProject.slug}`}
                    onNavigate={onNavigate}
                  />
                </div>
              )}

              {/* 6. VERIFIED CASE RECORDS LEDGER (Type 05: Complete Architectural Row List) */}
              <div className="border-t-2 border-[#173C62] pt-12 sm:pt-16">
                <ImageHorizontalRowList
                  headerTitle="Complete Verified Case Records Archive"
                  headerEyebrow="DISCIPLINE INDEX &bull; PERMANENT REPOSITORY"
                  projects={ledgerProjects}
                  onNavigate={onNavigate}
                />
              </div>
            </>
          )}
        </div>
      </section>

      {/* =========================================================================
          CONSULTATION / SPECIFICATION INTAKE
          Quiet, architectural closing section for drawings and engineering reviews
      ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] block font-semibold">
              Tender &amp; Specification Intake
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
              Commission LTSGROUP on Your Next Built Asset
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              Directly submit architectural drawings, electromechanical specifications, or equipment schedules to our engineering estimating desk for constructability and EPC reviews.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('/contact?tab=rfp')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-[8px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#12304F] transition-colors cursor-pointer w-full sm:w-auto"
              >
                <span>Submit Project Specification</span>
                <IconArrow size="sm" color="white" interactive />
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] rounded-[8px] border border-[#CBD5E1] text-[#0B1320] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer w-full sm:w-auto"
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
