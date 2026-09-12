import React from 'react';
import { ServicePageData } from '../../types/serviceTemplate';
import { ServiceHero } from './ServiceHero';
import { ServiceDescriptionModule } from './ServiceDescriptionModule';
import { MainCapabilityModule } from './MainCapabilityModule';
import { ApplicationsModule } from './ApplicationsModule';
import { SupportingVisualModule } from './SupportingVisualModule';
import { ServiceProjectProofModule } from './ServiceProjectProofModule';
import { RelatedServicesModule } from './RelatedServicesModule';
import { ServiceCtaModule } from './ServiceCtaModule';

interface ServiceDetailTemplateProps {
  data: ServicePageData;
  onNavigate: (slug: string) => void;
}

/**
 * ServiceDetailTemplate
 * Universal template for all LTSGROUP service detail pages.
 * 8-Section Chronological Architecture:
 * - 01 Hero: Full-bleed service-specific image, no 2-column, no floating badges, no metadata row
 * - 02 What This Service Does: Large editorial statement, one strong paragraph, no cards
 * - 03 Capability: Visual storytelling with large image and 3–5 points with minimal icons (no cards)
 * - 04 Application / Scope: Visual list with large typography and subtle separators
 * - 05 Technical Depth: Specification rows, governing standards, technical parameters
 * - 06 Project Proof: Most relevant project monograph with large photography & case info
 * - 07 Related Services: Horizontal visual rail (max 3–4 items)
 * - 08 CTA: Quiet image-led closing section (replacing the old commercial desk)
 */
export const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({
  data,
  onNavigate,
}) => {
  return (
    <article className="bg-white text-[#0B1320] antialiased selection:bg-[#173C62] selection:text-white">
      {/* 01 — Full-Bleed Service Hero */}
      <ServiceHero data={data} onNavigate={onNavigate} />

      {/* 02 — What This Service Does */}
      <ServiceDescriptionModule data={data} />

      {/* 03 — Capability (Visual Storytelling + 3-5 Points) */}
      <MainCapabilityModule data={data} />

      {/* 04 — Application / Scope (Visual List) */}
      <ApplicationsModule data={data} />

      {/* 05 — Technical Depth (Specifications & Standards) */}
      <SupportingVisualModule data={data} />

      {/* 06 — Project Proof (Delivered Case Reference) */}
      <ServiceProjectProofModule data={data} onNavigate={onNavigate} />

      {/* 07 — Related Services (Horizontal Visual Rail) */}
      <RelatedServicesModule data={data} onNavigate={onNavigate} />

      {/* 08 — Quiet Image-Led Closing CTA */}
      <ServiceCtaModule data={data} onNavigate={onNavigate} />
    </article>
  );
};
