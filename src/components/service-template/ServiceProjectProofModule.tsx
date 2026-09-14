import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { ServicePageData } from '../../types/serviceTemplate';
import { PROJECTS_DATA } from '../../data/projectsData';

interface ServiceProjectProofModuleProps {
  data: ServicePageData;
  onNavigate: (slug: string) => void;
}

/**
 * Section 06 — Project Proof
 * Conforms strictly to LTSGROUP Service Detail Rules:
 * - Feature the most relevant existing project
 * - Large image (dominant visual object)
 * - Concise case-study information
 * - CTA: View project →
 * - No 10 metadata badges
 */
export const ServiceProjectProofModule: React.FC<ServiceProjectProofModuleProps> = ({
  data,
  onNavigate,
}) => {
  // Find the most relevant project based on service slug or division
  const matchingProject =
    PROJECTS_DATA.find((p) => p.relatedService?.slug === data.slug) ||
    PROJECTS_DATA.find((p) => p.divisionSlug === data.pillarSlug) ||
    PROJECTS_DATA[0];

  const projectTitle = matchingProject.title;
  const projectLocation = matchingProject.location;
  const projectCategory = matchingProject.categoryLabel;
  const projectScope = matchingProject.scopeOverview;
  const projectSlug = `/projects/${matchingProject.slug}`;
  const projectImage = matchingProject.image;

  return (
    <section
      aria-label="Verified Project Reference"
      className="py-20 lg:py-28 bg-white text-left"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-1">
              DELIVERED PROOF
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
              Verified execution reference.
            </h2>
          </div>

          <button
            onClick={() => onNavigate('/projects')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#12304F] cursor-pointer"
          >
            <span>Explore all projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Monograph Project Proof Frame (7/5 Asymmetric Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Large Project Image (7 cols) */}
          <div
            onClick={() => onNavigate(projectSlug)}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px] bg-[#173C62]">
              <img
                src={projectImage}
                alt={projectTitle}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#173C62]/25 via-transparent to-transparent" />
            </div>
            <div className="pt-3 flex items-center justify-between text-xs text-[#64748B]">
              <span className="font-mono uppercase tracking-wider text-[11px] text-[#173C62] font-semibold">
                {projectCategory}
              </span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#173C62] shrink-0" />
                <span>{projectLocation}</span>
              </div>
            </div>
          </div>

          {/* Concise Case Study Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <span className="text-[10.5px] font-mono text-[#64748B] uppercase tracking-wider block">
                BUILT CASE RECORD
              </span>

              <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] leading-snug tracking-tight">
                {projectTitle}
              </h3>

              <p className="text-sm text-[#4A5568] leading-relaxed font-normal pt-1">
                {projectScope}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB]">
              <button
                onClick={() => onNavigate(projectSlug)}
                className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#173C62] hover:text-[#12304F] cursor-pointer"
              >
                <span>View project case record</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
