import React from 'react';
import { ServicePageData } from '../../types/serviceTemplate';
import { Breadcrumb } from '../../design-system/molecules/Breadcrumb';
import { BreadcrumbItem } from '../../types/navigation';
import { ServiceHero } from './ServiceHero';
import { ServiceDescriptionModule } from './ServiceDescriptionModule';
import { MainCapabilityModule } from './MainCapabilityModule';
import { ServiceProjectProofModule } from './ServiceProjectProofModule';
import { ServiceCtaModule } from './ServiceCtaModule';

interface ServiceDetailTemplateProps {
  data: ServicePageData;
  onNavigate: (slug: string) => void;
}

/**
 * ServiceDetailTemplate
 * Universal canonical template for all LTSGROUP service detail pages.
 * Conforms strictly to the minimal-content 6-stage page structure:
 * - 01 Hero (Breadcrumb datum + eyebrow + title + short statement + image + CTA)
 * - 02 Short description (Asymmetric editorial overview)
 * - 03 Image (High-resolution architectural installation field visual)
 * - 04 Key capabilities (Structured list with clean dividers)
 * - 05 Related projects (Image-led verified project reference)
 * - 06 CTA (Quiet corporate consultation closing)
 */
export const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({
  data,
  onNavigate,
}) => {
  // Compute breadcrumb items for stage 01
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    if (data.breadcrumb && data.breadcrumb.length > 0) {
      return data.breadcrumb;
    }

    const items: BreadcrumbItem[] = [
      { label: data.pillar, slug: data.pillarSlug },
    ];

    if (data.parentCategory) {
      items.push({
        label: data.parentCategory,
        slug: data.parentCategorySlug || data.pillarSlug,
      });
    }

    items.push({
      label: data.title,
      slug: data.slug,
    });

    return items;
  };

  const breadcrumbs = getBreadcrumbItems();

  return (
    <article className="bg-white text-[#0B1320] antialiased selection:bg-[#173C62] selection:text-white">
      {/* 01 — Breadcrumb */}
      <div className="bg-white border-b border-[#E5E7EB] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          <Breadcrumb items={breadcrumbs} onNavigate={onNavigate} variant="inline" />
        </div>
      </div>

      {/* 01 — Hero */}
      <ServiceHero data={data} onNavigate={onNavigate} />

      {/* 02 — Short Description */}
      <ServiceDescriptionModule data={data} />

      {/* 03 & 04 — Key Capabilities (Structured List with Visual Anchors) */}
      <MainCapabilityModule data={data} />

      {/* 05 — Related Projects (Image-Led Reference) */}
      <ServiceProjectProofModule data={data} onNavigate={onNavigate} />

      {/* 06 — CTA */}
      <ServiceCtaModule data={data} onNavigate={onNavigate} />
    </article>
  );
};
