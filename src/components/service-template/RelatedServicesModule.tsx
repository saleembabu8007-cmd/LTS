import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServicePageData } from '../../types/serviceTemplate';

interface RelatedServicesModuleProps {
  data: ServicePageData;
  onNavigate: (slug: string) => void;
}

/**
 * Section 07 — Related Services
 * Conforms strictly to LTSGROUP Service Detail Rules:
 * - Horizontal visual rail
 * - Maximum 3–4 related items
 * - Clean typographic ribbon
 */
export const RelatedServicesModule: React.FC<RelatedServicesModuleProps> = ({
  data,
  onNavigate,
}) => {
  const related = data.relatedServices;
  if (!related || !related.services || related.services.length === 0) {
    return null;
  }

  const services = related.services.slice(0, 4);

  return (
    <section
      aria-label="Related Capabilities"
      className="py-16 lg:py-24 bg-[#F8FAFC] text-left"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-1">
              CROSS-DISCIPLINE SYNERGIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
              {related.title || 'Related Capabilities'}
            </h2>
          </div>
          <span className="text-xs text-[#64748B] font-mono">
            Interconnected Built Asset Delivery
          </span>
        </div>

        {/* Horizontal Visual Rail / Ribbon (Max 4 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(svc.slug)}
              className="group bg-white rounded-[16px] border border-[#E5E7EB] hover:border-[#173C62] p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer text-left"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#173C62] block">
                  {svc.pillar}
                </span>
                <h3 className="text-base font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
                  {svc.name}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">
                  {svc.relationReason}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#173C62]">
                <span>Explore capability</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
