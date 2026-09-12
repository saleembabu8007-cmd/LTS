import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServicePageData, RelatedServiceItem } from '../../types/serviceTemplate';
import { ALL_SERVICE_PAGES } from '../../data/serviceTemplateData';

interface RelatedServicesModuleProps {
  data: ServicePageData;
  onNavigate: (slug: string) => void;
}

/**
 * Section 07 — Related Services
 * Conforms strictly to LTSGROUP Service Detail Rules & Master Prompt:
 * - Simple links (no heavy card boxes)
 * - Typographic navigation
 * - Clean hairline separators
 * - Accessible anchors with focus states
 */
export const RelatedServicesModule: React.FC<RelatedServicesModuleProps> = ({
  data,
  onNavigate,
}) => {
  // Use explicit related services or intelligently derive from the registry
  const getRelatedServices = (): RelatedServiceItem[] => {
    if (data.relatedServices?.services && data.relatedServices.services.length > 0) {
      return data.relatedServices.services.slice(0, 4);
    }

    // Contextual fallback from ALL_SERVICE_PAGES (same pillar or complementary services, excluding current)
    const siblings = ALL_SERVICE_PAGES.filter(
      (s) => s.slug !== data.slug && (s.pillar === data.pillar || s.pillarSlug === data.pillarSlug)
    );

    const pool = siblings.length >= 3 ? siblings : ALL_SERVICE_PAGES.filter((s) => s.slug !== data.slug);

    return pool.slice(0, 4).map((s) => ({
      name: s.title,
      pillar: s.pillar,
      slug: s.slug,
      relationReason: s.tagline || s.hero.summary,
    }));
  };

  const services = getRelatedServices();

  if (services.length === 0) {
    return null;
  }

  const handleSelect = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    onNavigate(slug);
  };

  return (
    <section
      aria-label="Related Services & Synergies"
      className="py-16 lg:py-24 bg-[#F8FAFC] text-left"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-10 pb-4 border-b border-[#E5E7EB]">
          <div>
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-1">
              CONNECTED DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
              Related services &amp; engineering scope
            </h2>
          </div>
          <span className="text-xs text-[#64748B] font-mono">
            {data.pillar}
          </span>
        </div>

        {/* Simple Links: Clean Typographic List (No Cards!) */}
        <div className="divide-y divide-[#E5E7EB] border-b border-[#E5E7EB]">
          {services.map((svc, idx) => (
            <a
              key={idx}
              href={svc.slug}
              onClick={(e) => handleSelect(e, svc.slug)}
              className="group py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors hover:bg-white/60 px-2 -mx-2 rounded-[8px] focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none cursor-pointer"
            >
              {/* Left: Pillar & Service Title */}
              <div className="space-y-1 max-w-2xl">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold block">
                  {svc.pillar}
                </span>
                <h3 className="text-lg sm:text-xl font-normal text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
                  {svc.name}
                </h3>
                {svc.relationReason && (
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-1">
                    {svc.relationReason}
                  </p>
                )}
              </div>

              {/* Right: Simple Minimal Link Indicator */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#173C62] shrink-0">
                <span className="group-hover:underline underline-offset-4">Explore service</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
