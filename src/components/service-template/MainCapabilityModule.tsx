import React from 'react';
import {
  IconCheck,
  IconShieldCheck,
  IconHVAC,
  IconElectrical,
  IconControls,
  IconTrading,
} from '../../design-system/icons';
import { ServicePageData } from '../../types/serviceTemplate';

interface MainCapabilityModuleProps {
  data: ServicePageData;
}

/**
 * Section 03 — Capability
 * Conforms strictly to LTSGROUP Service Detail Rules:
 * - Visual storytelling
 * - Large image (~60–65%)
 * - Beside it: 3–5 concise capability points (~35–40%)
 * - Each point gets a minimal icon
 * - Do NOT put every point inside cards
 */
export const MainCapabilityModule: React.FC<MainCapabilityModuleProps> = ({ data }) => {
  const { capabilities, supportingVisual, archetype } = data;
  const items = capabilities.items ? capabilities.items.slice(0, 5) : [];

  // Curate visual storytelling image
  const getCapabilityImage = () => {
    if (supportingVisual?.image && supportingVisual.image.startsWith('/assets/')) {
      return supportingVisual.image;
    }
    if (archetype === 'specialized-solar') {
      return '/assets/images/solar-epc.jpg';
    }
    if (archetype === 'fm-operations') {
      return '/assets/images/project-chiller.jpg';
    }
    if (archetype === 'trading-supply') {
      return 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80';
    }
    return '/assets/images/mep-construction.jpg';
  };

  const imageSrc = getCapabilityImage();

  // Distinct minimal icons for points from LTS design system
  const icons = [IconCheck, IconShieldCheck, IconHVAC, IconElectrical, IconControls, IconTrading];

  return (
    <section
      aria-label="Core Capabilities"
      className="py-20 lg:py-28 bg-[#F8FAFC] text-left"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Large Image: Visual Storytelling (7 cols ~60%) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-[#173C62]">
              <img
                src={imageSrc}
                alt={capabilities.sectionTitle || `${data.title} Capability Execution`}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#173C62]/35 via-transparent to-transparent" />
            </div>
          </div>

          {/* Beside it: 3–5 Concise Capability Points (5 cols ~40% — No Cards!) */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
                CORE DELIVERABLES
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight leading-snug">
                {capabilities.sectionTitle || 'Engineered Scope & Capabilities'}
              </h2>
            </div>

            {/* Concise list with minimal icons (NOT inside cards) */}
            <div className="space-y-4 pt-2">
              {items.map((item, idx) => {
                const IconComponent = icons[idx % icons.length];
                return (
                  <div key={idx} className="flex items-start gap-3.5 pb-4 border-b border-[#E5E7EB] last:border-b-0 last:pb-0">
                    <IconComponent size="sm" color="primary" className="mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-[15px] font-medium text-[#0B1320] leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#4A5568] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
