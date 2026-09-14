import React from 'react';
import {
  IconArrow,
  IconArrowLeft,
  IconArrowUpRight,
  IconCheck,
  IconShieldCheck,
  IconPhone,
  IconEmail,
} from '../../design-system/icons';
import { getProjectBySlug, PROJECTS_DATA, ProjectDetailData } from '../../data/projectsData';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (slug: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, onNavigate }) => {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-24 px-6 text-center bg-white text-[#0B1320]">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#64748B] block mb-3">
          Archive Record
        </span>
        <h1 className="text-3xl sm:text-4xl font-light text-[#0B1320] mb-4 tracking-tight">
          Project Record Not Found
        </h1>
        <p className="text-sm text-[#4A5568] mb-8 max-w-md leading-relaxed">
          The requested engineering monograph could not be retrieved from the current verified project archive.
        </p>
        <a
          href="/projects"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/projects');
          }}
          className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#12304F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer"
        >
          <IconArrowLeft size="sm" color="white" />
          <span>Return to Projects Archive</span>
        </a>
      </div>
    );
  }

  // Related projects from same division or nearest, excluding self
  const relatedProjects: ProjectDetailData[] = PROJECTS_DATA.filter((p) => p.id !== project.id)
    .sort((a, b) => (a.division === project.division ? -1 : 1))
    .slice(0, 2);

  // Gallery collection
  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image, project.secondaryImage || project.image];

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — FULL-BLEED HERO IMAGE
          Full-bleed project image occupying the viewport (~75-80vh)
          Subtle gradient scrim, architectural back button, and location plate.
          LTS Brand Blue authority: #173C62
      ========================================================================= */}
      <section className="relative w-full h-[72vh] sm:h-[80vh] min-h-[520px] max-h-[860px] bg-[#173C62] overflow-hidden">
        {/* Full-bleed photography */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover filter brightness-[0.88] transition-transform duration-[700ms] ease-out hover:scale-[1.01]"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
          }}
        />

        {/* Cinematic gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/60 to-[#173C62]/20 pointer-events-none" />

        {/* Top architectural breadcrumb bar */}
        <div className="absolute top-6 sm:top-8 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/projects');
              }}
              className="min-h-[44px] inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/90 hover:text-white bg-[#0B1320]/60 hover:bg-[#0B1320]/80 backdrop-blur-md px-4 py-2 rounded-[8px] border border-white/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              <IconArrowLeft size="sm" color="white" />
              <span>All Projects</span>
            </a>

            <span className="hidden sm:inline-block font-mono text-[11px] text-white/70 uppercase tracking-widest bg-[#0B1320]/40 backdrop-blur-xs px-3.5 py-1.5 rounded-[8px] border border-white/10">
              {project.division} &bull; {project.location}
            </span>
          </div>
        </div>

        {/* Bottom Hero Anchor Info */}
        <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-4xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#93C5FD] block font-semibold">
                {project.categoryLabel} &bull; Case Study Monograph
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.05]">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — EXECUTIVE OVERVIEW
          Project title, short description, and key parameter summary.
          Generous whitespace, editorial typography.
      ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Lead Scope Description (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                Executive Monograph
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] leading-snug tracking-tight">
                {project.scopeOverview}
              </h2>
              <div className="pt-2 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono text-[#64748B]">
                <div>
                  <span className="text-[#94A3B8] block">Location</span>
                  <span className="text-[#0B1320] font-medium text-sm">{project.location}</span>
                </div>
                <div>
                  <span className="text-[#94A3B8] block">Client Sector</span>
                  <span className="text-[#0B1320] font-medium text-sm">{project.industry}</span>
                </div>
                <div>
                  <span className="text-[#94A3B8] block">Timeline</span>
                  <span className="text-[#0B1320] font-medium text-sm">{project.completionDate}</span>
                </div>
                <div>
                  <span className="text-[#94A3B8] block">Governing Authority</span>
                  <span className="text-[#0B1320] font-medium text-sm">{project.approvals?.[0] || 'DEWA Certified'}</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Specification Panel (4 cols) */}
            <div className="lg:col-span-4 bg-[#F8FAFC] rounded-[8px] p-6 sm:p-7 space-y-5">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#173C62] block font-semibold">
                Technical Parameters
              </span>

              <div className="space-y-3 font-mono text-xs divide-y divide-[#E5E7EB]">
                {project.specifications.slice(0, 4).map((spec, sIdx) => (
                  <div key={sIdx} className="pt-3 first:pt-0 flex items-start justify-between gap-4">
                    <span className="text-[#64748B]">{spec.label}</span>
                    <span className="text-[#0B1320] font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={`/contact?tab=rfp&service=${project.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/contact?tab=rfp&service=${project.slug}`);
                  }}
                  className="min-h-[44px] inline-flex items-center justify-center w-full py-3 px-4 rounded-[8px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#12304F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer text-center"
                >
                  Inquire on Similar Scope &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — TURNKEY SCOPE & STATUTORY EXECUTION
          Consolidated, crisp deliverables & authority compliance (no essay fluff).
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Summary & Clearances (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                  01 &bull; Engineering Scope
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                  Turnkey contract packages.
                </h3>
              </div>

              <p className="text-sm text-[#4A5568] leading-relaxed">
                {project.challenge}
              </p>

              <div className="pt-2 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] block font-semibold">
                  Statutory Accreditations:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.approvals.map((appr, aIdx) => (
                    <span
                      key={aIdx}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0B1320] bg-[#F8FAFC] px-3 py-1.5 rounded-[6px] border border-[#E5E7EB]"
                    >
                      <IconShieldCheck size="sm" color="primary" className="w-3.5 h-3.5" />
                      <span>{appr}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Commissioned Deliverables (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#64748B] font-semibold block mb-2">
                Commissioned Systems
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((deliv, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-3 bg-[#F8FAFC] p-3.5 rounded-[6px]"
                  >
                    <IconCheck size="sm" color="primary" className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#0B1320] leading-snug font-normal">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — SUPPORTING PROJECT IMAGERY THROUGHOUT
          Authentic field photography plate (soft 20px radius, image-first break)
      ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block mb-1 font-semibold">
                  Field Verification
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                  Site Execution &amp; Installation Plates
                </h3>
              </div>
              <span className="font-mono text-xs text-[#64748B]">
                Plate Monograph &bull; Field Archive
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              <div className="md:col-span-7 relative overflow-hidden rounded-[8px] bg-[#173C62] aspect-[16/10]">
                <img
                  src={galleryImages[1] || project.image}
                  alt={`${project.title} field installation`}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.92] hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/90 bg-[#173C62]/85 backdrop-blur-xs px-3 py-1 rounded-[6px] border border-white/10">
                  Plate 01 &bull; Mechanical &amp; Hydronic Infrastructure
                </div>
              </div>

              <div className="md:col-span-5 relative overflow-hidden rounded-[8px] bg-[#173C62] aspect-[4/3] md:aspect-auto">
                <img
                  src={galleryImages[2] || galleryImages[0]}
                  alt={`${project.title} technical commissioning`}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.92] hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 font-mono text-[11px] text-white/90 bg-[#173C62]/85 backdrop-blur-xs px-3 py-1 rounded-[6px] border border-white/10">
                  Plate 02 &bull; Commissioning Handover
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — RELATED CAPABILITY LINK
          Bridge from this project monograph to its delivering business discipline.
      ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="bg-white rounded-[8px] p-8 sm:p-10 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                Delivering Discipline
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                {project.relatedService.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                {project.relatedService.description}
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={project.relatedService.slug}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(project.relatedService.slug);
                }}
                className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#12304F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer whitespace-nowrap"
              >
                <span>Explore Discipline Scope</span>
                <IconArrow size="sm" color="white" interactive />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 — FINISH WITH RELATED PROJECTS
          Curated 2-project monograph pair using image-first cards
          (image + project name + short discipline label + arrow, soft radius).
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block mb-2 font-semibold">
                  Portfolio Context
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
                  Related Project References
                </h2>
              </div>

              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="min-h-[44px] inline-flex items-center gap-2 text-xs font-semibold text-[#173C62] uppercase tracking-wider hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px] cursor-pointer"
              >
                <span>View Full Portfolio Archive</span>
                <IconArrow size="sm" color="primary" interactive />
              </a>
            </div>

            {/* 2-Project Monograph Grid (No borders, image-first, soft radius) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {relatedProjects.map((rel) => (
                <a
                  key={rel.id}
                  href={`/projects/${rel.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/projects/${rel.slug}`);
                  }}
                  className="group block select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[8px]"
                  aria-label={`View case study: ${rel.title}`}
                >
                  <div className="relative overflow-hidden rounded-[8px] bg-[#173C62] aspect-[16/10]">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  <div className="mt-4 sm:mt-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-[#64748B] block font-medium">
                          {rel.categoryLabel} &bull; {rel.location.split(',')[0]}
                        </span>
                        <h3 className="text-lg sm:text-xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                          {rel.title}
                        </h3>
                      </div>

                      <div
                        className="shrink-0 mt-1.5 text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5"
                        aria-hidden="true"
                      >
                        <IconArrowUpRight size="sm" color="primary" interactive />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 — NEXT ACTION / SPECIFICATION INTAKE
          Clean corporate CTA directing to RFP with pre-filled context.
      ========================================================================= */}
      <section className="py-16 sm:py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              Engineering Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
              Request Similar Project Specifications
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              Consult with our engineering directors regarding equipment schedules, constructability analyses, or tender documentation for projects of comparable scale.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a
                href={`/contact?tab=rfp&service=${project.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/contact?tab=rfp&service=${project.slug}`);
                }}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#12304F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer"
              >
                <span>Submit Project Specification</span>
                <IconArrow size="sm" color="white" interactive />
              </a>
              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="min-h-[44px] inline-flex items-center justify-center px-6 py-3.5 rounded-[8px] border border-[#CBD5E1] text-[#0B1320] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer"
              >
                Return to Projects Archive
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E7EB] flex flex-wrap gap-6 text-xs font-mono text-[#64748B]">
              <div className="flex items-center gap-2">
                <IconPhone size="sm" color="primary" className="w-3.5 h-3.5" />
                <a href={`tel:${CORPORATE_INFO.contact.telephone}`} className="hover:text-[#0B1320]">
                  {CORPORATE_INFO.contact.telephone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <IconEmail size="sm" color="primary" className="w-3.5 h-3.5" />
                <a href={`mailto:${CORPORATE_INFO.contact.emailTenders}`} className="hover:text-[#0B1320]">
                  {CORPORATE_INFO.contact.emailTenders}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
