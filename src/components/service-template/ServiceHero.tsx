import React from 'react';
import { ServicePageData } from '../../types/serviceTemplate';
import { Button } from '../../design-system/atoms/Button';

interface ServiceHeroProps {
  data: ServicePageData;
  onNavigate: (slug: string) => void;
}

/**
 * ServiceHero
 * Conforms strictly to LTSGROUP Service Detail Rules:
 * - Full-bleed service-specific image (~78vh)
 * - No two-column hero
 * - No technical badges floating over hero
 * - No tag clouds
 * - No metadata row or datum strip
 * - Content: Service category, H1 service name, one concise value statement, CTA
 * - Subtly integrates quiet breadcrumb on image hero
 */
export const ServiceHero: React.FC<ServiceHeroProps> = ({ data, onNavigate }) => {
  const { hero, pillar, parentCategory, title } = data;

  // Curate high-impact local photographic fallback based on pillar / archetype
  const getHeroImage = () => {
    if (hero.image && hero.image.startsWith('/assets/')) {
      return hero.image;
    }
    if (data.archetype === 'specialized-solar') {
      return '/assets/images/solar-epc.jpg';
    }
    if (data.archetype === 'fm-operations') {
      return '/assets/images/project-chiller.jpg';
    }
    if (data.archetype === 'trading-supply') {
      return 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80';
    }
    return '/assets/images/mep-construction.jpg';
  };

  const heroImageSrc = getHeroImage();
  const categoryLabel = parentCategory
    ? `${pillar} — ${parentCategory}`
    : pillar;

  const ctaLabel = hero.primaryCta?.label || 'Consult engineering team';
  const ctaSlug = hero.primaryCta?.slug || '/contact';

  return (
    <section
      aria-label={`${title} Service Hero`}
      className="relative min-h-[72vh] lg:min-h-[78vh] flex items-end overflow-hidden bg-[#0B1C2F]"
    >
      {/* Full-Bleed Service Imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageSrc}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/60 to-[#0B1C2F]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2F]/80 via-[#0B1C2F]/30 to-transparent" />
      </div>

      {/* Quiet Lower-Left Content Anchor */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20 pt-28 text-left">
        <div className="max-w-2xl">
          {/* Service Category / Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#CBD5E1]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-slate-200 font-semibold">
              {categoryLabel}
            </span>
          </div>

          {/* H1 Service Name */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.14]">
            {hero.heading || title}
          </h1>

          {/* One Concise Value Statement */}
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
            {hero.summary}
          </p>

          {/* Clean CTA Button */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="white"
              size="md"
              shape="capsule"
              onClick={() => onNavigate(ctaSlug)}
              className="text-[12px] tracking-[0.06em]"
            >
              {ctaLabel} →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
