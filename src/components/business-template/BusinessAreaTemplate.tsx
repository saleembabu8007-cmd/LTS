import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '../../design-system/atoms/Button';
import { BusinessAreaPageData } from '../../data/businessAreasData';

export interface BusinessAreaTemplateProps {
  data: BusinessAreaPageData;
  onNavigate: (slug: string) => void;
}

/**
 * Reusable Business Area Page Template
 * Conforms strictly to the LTSGROUP 7-Stage Business Architecture:
 * - 01 Page Hero (Full-bleed contextual photography, quiet lower-left anchor)
 * - 02 Overview (2-column editorial split)
 * - 03 Capabilities (Grouped service disciplines)
 * - 04 Featured Capability (Image-led split with alternating direction)
 * - 05 Proof / Projects (1 large feature + 2 supporting items)
 * - 06 Related Industries (Concise 3-column sector cards)
 * - 07 Final CTA (Division-specific commercial enquiry)
 */
export const BusinessAreaTemplate: React.FC<BusinessAreaTemplateProps> = ({
  data,
  onNavigate,
}) => {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    if (slug.startsWith('#')) {
      const element = document.getElementById(slug.substring(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate(slug);
    }
  };

  const isImageLeft = data.featuredCapability.direction === 'image-left';

  return (
    <main className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white">
      {/* =====================================================================
          01 — PAGE HERO
          - Full-bleed contextual photography (~78-82vh)
          - Directional gradient scrim
          - Lower-left intentional anchor
          - Eyebrow, page title, short introduction, primary & secondary CTA
      ===================================================================== */}
      <section
        aria-label={`${data.title} Hero`}
        className="relative min-h-[76vh] lg:min-h-[82vh] flex items-end overflow-hidden bg-[#0B1C2F]"
      >
        {/* Full-Bleed Background Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src={data.hero.backgroundImage}
            alt={data.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/60 to-[#0B1C2F]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2F]/85 via-[#0B1C2F]/35 to-transparent" />
        </div>

        {/* Lower-Left Quiet Content Anchor */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20 pt-28 text-left">
          <div className="max-w-2xl">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-[#CBD5E1]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-slate-200 font-semibold">
                {data.hero.eyebrow}
              </span>
            </div>

            {/* Page Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.12]">
              {data.hero.title}
            </h1>

            {/* Short Introduction */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              {data.hero.introduction}
            </p>

            {/* Action Group */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate(data.hero.primaryCtaSlug)}
                className="text-[12px] tracking-[0.06em] px-5 sm:px-6 min-h-[44px]"
              >
                {data.hero.primaryCtaLabel}
              </Button>

              {data.hero.secondaryLinkText && data.hero.secondaryLinkSlug && (
                <a
                  href={data.hero.secondaryLinkSlug}
                  onClick={(e) => handleLink(e, data.hero.secondaryLinkSlug!)}
                  className="group min-h-[44px] inline-flex items-center gap-2 text-[13px] text-white hover:text-slate-200 font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[4px] py-2 px-1"
                >
                  <span>{data.hero.secondaryLinkText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02 — OVERVIEW
          - Two-column editorial layout: Left Heading, Right Description
          - Open section, generous whitespace, zero heavy card borders
      ===================================================================== */}
      <section
        aria-label={`${data.title} Overview`}
        className="py-20 lg:py-28 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
            {/* Left: Heading Statement (5 cols) */}
            <div className="lg:col-span-5 space-y-4 lg:pr-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#173C62]" />
                <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold">
                  {data.overview.sectionEyebrow}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-snug">
                {data.overview.headline}
              </h2>
            </div>

            {/* Right: Description & Governance Badges (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {data.overview.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal"
                >
                  {para}
                </p>
              ))}

              {/* Governance & Credibility Badges */}
              {data.overview.governanceBadges.length > 0 && (
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {data.overview.governanceBadges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-mono text-[#173C62] font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#173C62]" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <a
                  href={data.overview.ctaSlug}
                  onClick={(e) => handleLink(e, data.overview.ctaSlug)}
                  className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px]"
                >
                  <span>{data.overview.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 — CAPABILITIES
          - Logically grouped service disciplines
          - Editorial cards with 14px-16px soft radius
          - Deep-links to sub-services
      ===================================================================== */}
      <section
        id="capabilities-spectrum"
        aria-label={`${data.title} Capabilities`}
        className="py-20 lg:py-28 bg-[#F8FAFC]"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-xl text-left mb-12 lg:mb-14">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
              {data.capabilities.sectionEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
              {data.capabilities.headline}
            </h2>
            <p className="mt-3 text-sm text-[#4A5568] leading-relaxed">
              {data.capabilities.description}
            </p>
          </div>

          {/* Grouped Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 text-left items-start">
            {data.capabilities.groups.map((group) => (
              <div
                key={group.groupTitle}
                className="p-6 sm:p-7 rounded-[16px] bg-white border border-[#E5E7EB] shadow-[0_4px_20px_-8px_rgba(11,28,47,0.04)] space-y-5"
              >
                {/* Group Header */}
                <div className="border-b border-[#F1F5F9] pb-4">
                  <span className="text-[10.5px] font-mono text-[#64748B] uppercase tracking-[0.18em] block">
                    CATEGORY {group.groupNumber}
                  </span>
                  <h3 className="text-xl font-medium text-[#0B1320] mt-1">
                    {group.groupTitle}
                  </h3>
                  {group.description && (
                    <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                      {group.description}
                    </p>
                  )}
                </div>

                {/* Sub-Service Items */}
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <div key={item.title} className="group/item">
                      <a
                        href={item.slug}
                        onClick={(e) => handleLink(e, item.slug)}
                        className="block py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-[14.5px] font-medium text-[#0B1320] group-hover/item:text-[#173C62] transition-colors">
                            {item.title}
                          </h4>
                          <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover/item:text-[#173C62] transition-transform group-hover/item:translate-x-1 shrink-0" />
                        </div>
                        <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                          {item.scope}
                        </p>
                      </a>

                      {/* Sub-items if any */}
                      {item.subItems && item.subItems.length > 0 && (
                        <div className="mt-2 pl-3 space-y-1 border-l border-[#E2E8F0]">
                          {item.subItems.map((sub) => (
                            <a
                              key={sub.title}
                              href={sub.slug}
                              onClick={(e) => handleLink(e, sub.slug)}
                              className="block py-0.5 text-xs text-[#64748B] hover:text-[#173C62] transition-colors"
                            >
                              &bull; {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 — FEATURED CAPABILITY
          - One strong image-led feature
          - Alternating direction: image-left or image-right
          - Soft 18px radius on photography
      ===================================================================== */}
      <section
        aria-label="Featured Capability"
        className="py-20 lg:py-28 bg-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Image Column */}
            <div
              className={`lg:col-span-7 ${
                isImageLeft ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
              }`}
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[18px] overflow-hidden bg-[#0B1C2F] shadow-[0_16px_40px_-16px_rgba(11,28,47,0.15)]">
                <img
                  src={data.featuredCapability.image}
                  alt={data.featuredCapability.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1C2F]/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Text Column */}
            <div
              className={`lg:col-span-5 text-left space-y-5 ${
                isImageLeft ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
              }`}
            >
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block">
                  {data.featuredCapability.eyebrow}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight leading-snug">
                  {data.featuredCapability.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
                  {data.featuredCapability.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
                {data.featuredCapability.description}
              </p>

              {/* Technical Highlights */}
              <div className="space-y-2.5 pt-2 border-t border-[#E5E7EB]">
                {data.featuredCapability.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {data.featuredCapability.ctaLabel && data.featuredCapability.ctaSlug && (
                <div className="pt-2">
                  <a
                    href={data.featuredCapability.ctaSlug}
                    onClick={(e) => handleLink(e, data.featuredCapability.ctaSlug!)}
                    className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px]"
                  >
                    <span>{data.featuredCapability.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          05 — PROOF / PROJECTS
          - Deep navy architectural canvas (#0B1C2F)
          - 1 large dominant project + 2 supporting project cards
          - Sourced from PROJECTS_DATA
      ===================================================================== */}
      <section
        aria-label="Verified Project Proof"
        className="py-20 lg:py-28 bg-[#0B1C2F] text-white"
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
            <div>
              <span className="text-[11px] font-mono text-[#CBD5E1] uppercase tracking-[0.2em] font-semibold block mb-2">
                {data.proof.sectionEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
                {data.proof.headline}
              </h2>
            </div>
            <a
              href={data.proof.allProjectsSlug}
              onClick={(e) => handleLink(e, data.proof.allProjectsSlug)}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] rounded-[4px]"
            >
              <span>Explore all projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 1 Dominant (7 cols) + 2 Supporting (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* DOMINANT PROJECT CARD */}
            <a
              href={`/projects/${data.proof.featuredProject.slug}`}
              onClick={(e) => handleLink(e, `/projects/${data.proof.featuredProject.slug}`)}
              className="lg:col-span-7 group relative rounded-[18px] overflow-hidden block min-h-[380px] sm:min-h-[480px] bg-[#0B1320] flex flex-col justify-end p-7 sm:p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
            >
              <img
                src={data.proof.featuredProject.image}
                alt={data.proof.featuredProject.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/95 via-[#0B1320]/45 to-transparent" />

              <div className="relative z-10 text-left text-white max-w-lg">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                  {data.proof.featuredProject.categoryLabel} &bull; {data.proof.featuredProject.location}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  {data.proof.featuredProject.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  {data.proof.featuredProject.scopeOverview}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white group-hover:text-slate-200">
                  <span>View case details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            {/* TWO SUPPORTING PROJECT CARDS */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {data.proof.supportingProjects.map((project) => (
                <a
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  onClick={(e) => handleLink(e, `/projects/${project.slug}`)}
                  className="group relative rounded-[18px] overflow-hidden block flex-1 min-h-[220px] bg-[#0B1320] flex flex-col justify-end p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/95 via-[#0B1320]/45 to-transparent" />

                  <div className="relative z-10 text-left text-white">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#CBD5E1] block mb-1">
                      {project.categoryLabel} &bull; {project.location}
                    </span>
                    <h4 className="text-lg font-medium text-white tracking-tight">
                      {project.title}
                    </h4>
                    <div className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold uppercase text-white group-hover:text-slate-200">
                      <span>View project</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          06 — RELATED INDUSTRIES
          - If provided in data
          - Concise 3-column sector cards with engineering use cases
      ===================================================================== */}
      {data.relatedIndustries && (
        <section
          aria-label="Related Industries"
          className="py-20 lg:py-28 bg-[#F8FAFC]"
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
              <div>
                <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
                  {data.relatedIndustries.sectionEyebrow}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
                  {data.relatedIndustries.headline}
                </h2>
              </div>
              <a
                href="/industries"
                onClick={(e) => handleLink(e, '/industries')}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] py-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px]"
              >
                <span>Explore all sectors</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {data.relatedIndustries.sectors.map((sector) => (
                <a
                  key={sector.title}
                  href={sector.slug}
                  onClick={(e) => handleLink(e, sector.slug)}
                  className="group p-6 rounded-[14px] bg-white border border-[#E5E7EB] hover:border-[#173C62] transition-colors flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#64748B] uppercase tracking-[0.18em] block mb-2">
                      SECTOR {sector.num}
                    </span>
                    <h3 className="text-lg font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors">
                      {sector.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#4A5568] leading-relaxed">
                      {sector.scope}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[11.5px] font-semibold text-[#173C62]">
                    <span>Sector Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================================
          07 — FINAL CTA
          - Established dark architectural closing section (#0B1C2F)
          - Division-specific enquiry headline & action
          - Direct telephone & email dispatch
      ===================================================================== */}
      <section
        aria-label="Division Consultation"
        className="relative py-24 lg:py-32 bg-[#0B1C2F] text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={data.finalCta.backgroundImage || data.hero.backgroundImage}
            alt={data.title}
            className="w-full h-full object-cover object-center opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/85 to-[#0B1C2F]/70" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono text-[#CBD5E1] uppercase tracking-[0.24em] font-semibold block mb-3">
              {data.finalCta.eyebrow}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight">
              {data.finalCta.headline}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {data.finalCta.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button
                variant="white"
                size="md"
                shape="capsule"
                onClick={() => onNavigate(data.finalCta.primaryActionSlug)}
                className="text-[12px] tracking-[0.06em] px-6 min-h-[44px]"
              >
                {data.finalCta.primaryActionLabel}
              </Button>
            </div>

            {/* Direct Official Communication Channels */}
            <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap gap-8 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400" aria-hidden="true" />
                <a
                  href={`tel:${data.finalCta.telephone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center"
                >
                  <span>{data.finalCta.telephone}</span>
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400" aria-hidden="true" />
                <a
                  href={`mailto:${data.finalCta.email}`}
                  className="hover:text-white transition-colors py-1 min-h-[44px] flex items-center"
                >
                  <span>{data.finalCta.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
