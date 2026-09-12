import React from 'react';
import { ServicePageData } from '../../types/serviceTemplate';

interface ApplicationsModuleProps {
  data: ServicePageData;
}

/**
 * Section 04 — Application / Scope
 * Conforms strictly to LTSGROUP Service Detail Rules:
 * - Visual list
 * - Large typography
 * - Subtle separators only when useful
 * - No card boxes, no small icon cards
 */
export const ApplicationsModule: React.FC<ApplicationsModuleProps> = ({ data }) => {
  const applications = data.applications;
  const scopeInclusion = data.introduction.scopeInclusion;

  // Render application sectors if defined; otherwise render approved scope parameters as a visual list
  const hasApplications = applications && applications.items && applications.items.length > 0;
  const hasScope = scopeInclusion && scopeInclusion.length > 0;

  if (!hasApplications && !hasScope) {
    return null;
  }

  return (
    <section
      aria-label="Application Scope & Sector Environments"
      className="py-20 lg:py-28 bg-white text-left"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
            ENVIRONMENT &bull; APPLICATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-snug">
            {hasApplications
              ? applications.title || 'Target Application Environments'
              : 'Approved Scope & Application Parameters'}
          </h2>
        </div>

        {/* Visual List with Large Typography & Subtle Separators */}
        {hasApplications ? (
          <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
            {applications.items.map((item, idx) => (
              <div
                key={idx}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
              >
                {/* Sector / Index Numeral (4 cols) */}
                <div className="md:col-span-4 flex items-baseline justify-between md:justify-start gap-4">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-normal text-[#0B1320] tracking-tight">
                    {item.sector}
                  </h3>
                </div>

                {/* Description & Use Case (8 cols) */}
                <div className="md:col-span-8 space-y-1.5">
                  <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
                    {item.description}
                  </p>
                  {item.useCase && (
                    <span className="text-xs font-mono text-[#173C62] block">
                      Specification: {item.useCase}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
            {scopeInclusion.map((item, idx) => (
              <div
                key={idx}
                className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-normal text-[#0B1320] tracking-tight">
                    {item}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#173C62] uppercase tracking-wider">
                  Contractual Scope
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
