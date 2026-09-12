import React from 'react';
import { ServicePageData } from '../../types/serviceTemplate';
import { Breadcrumb } from '../../design-system/molecules/Breadcrumb';
import { BreadcrumbItem } from '../../types/navigation';
import { ServiceHero } from './ServiceHero';
import { ServiceDescriptionModule } from './ServiceDescriptionModule';
import { MainCapabilityModule } from './MainCapabilityModule';
import { ApplicationsModule } from './ApplicationsModule';
import { ServiceProjectProofModule } from './ServiceProjectProofModule';
import { RelatedServicesModule } from './RelatedServicesModule';
import { ServiceCtaModule } from './ServiceCtaModule';

interface ServiceDetailTemplateProps {
  data: ServicePageData;
  onNavigate: (slug: string) => void;
}

/**
 * ServiceDetailTemplate
 * Universal canonical template for all LTSGROUP service detail pages.
 * Conforms strictly to the master 8-stage page structure:
 * - 01 Breadcrumb (Dedicated accessible navigation datum above the hero)
 * - 02 Hero (Small eyebrow, service title, short description, capsule CTA, large image)
 * - 03 Service overview (Short editorial section, asymmetric 2-column, no cards)
 * - 04 Capabilities (Structured list, clean dividers, minimal icons)
 * - 05 Applications / scope (Conditionally rendered only when supported by content)
 * - 06 Related projects (Image-led verified project reference)
 * - 07 Related services (Simple, elegant typographic links)
 * - 08 CTA (Quiet image-led corporate consultation closing)
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

      {/* 02 — Hero */}
      <ServiceHero data={data} onNavigate={onNavigate} />

      {/* 03 — Service Overview */}
      <ServiceDescriptionModule data={data} />

      {/* 04 — Capabilities (Structured List) */}
      <MainCapabilityModule data={data} />

      {/* 05 — Applications / Scope (Only when supported by content) */}
      <ApplicationsModule data={data} />

      {/* 06 — Related Projects (Image-Led) */}
      <ServiceProjectProofModule data={data} onNavigate={onNavigate} />

      {/* 07 — Related Services (Simple Links) */}
      <RelatedServicesModule data={data} onNavigate={onNavigate} />

      {/* 08 — CTA */}
      <ServiceCtaModule data={data} onNavigate={onNavigate} />
    </article>
  );
};
