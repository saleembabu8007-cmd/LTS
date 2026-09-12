import React from 'react';
import { ServicePageData } from '../../types/serviceTemplate';

interface SupportingVisualModuleProps {
  data: ServicePageData;
}

/**
 * Section 05 — Technical Depth
 * Conforms strictly to LTSGROUP Service Detail Rules:
 * - Where technical information exists, present it elegantly
 * - Use specification rows, technical imagery, concise lists
 * - Avoid making the entire page look like a spreadsheet
 * - Clean architectural presentation
 */
export const SupportingVisualModule: React.FC<SupportingVisualModuleProps> = ({ data }) => {
  const { introduction, capabilities, supportingVisual } = data;

  // Aggregate specifications from capabilities if present
  const allSpecs = capabilities.items
    ? capabilities.items.flatMap((item) => item.specs || [])
    : [];

  const standards = introduction.standards || [];
  const hasSpecs = allSpecs.length > 0;
  const hasStandards = standards.length > 0;

  // If no technical data exists, do not render a placeholder
  if (!hasSpecs && !hasStandards && !supportingVisual?.dataPoints) {
    return null;
  }

  return (
    <section
      aria-label="Technical Specifications and Standards"
      className="py-20 lg:py-28 bg-[#F8FAFC] text-left"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Governance Citations (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.2em] font-semibold block mb-2">
                TECHNICAL RIGOR &bull; COMPLIANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight leading-snug">
                Engineering specifications &amp; governing standards.
              </h2>
            </div>

            <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
              Every system is engineered to strict statutory clearances and international codes, ensuring statutory utility energization, fire life-safety signoff, and long-term operating durability.
            </p>

            {/* Statutory Authority Standards List */}
            {hasStandards && (
              <div className="pt-4 border-t border-[#E5E7EB] space-y-2.5">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#64748B] block">
                  GOVERNING REGULATORY CODES
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {standards.map((std, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono text-[#173C62] bg-white border border-[#E5E7EB] px-3 py-1 rounded-full"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Elegant Specification Rows (7 cols — Not a Spreadsheet!) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[18px] border border-[#E5E7EB] p-7 sm:p-9 divide-y divide-[#F1F5F9]">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#64748B] block pb-4">
                ENGINEERING PARAMETERS
              </span>

              {hasSpecs ? (
                allSpecs.slice(0, 6).map((spec, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-left"
                  >
                    <span className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
                      {spec.key}
                    </span>
                    <span className="text-sm font-medium text-[#0B1320]">
                      {spec.value}
                    </span>
                  </div>
                ))
              ) : supportingVisual?.dataPoints ? (
                supportingVisual.dataPoints.map((dp, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-left"
                  >
                    <span className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
                      {dp.label}
                    </span>
                    <span className="text-sm font-medium text-[#0B1320]">
                      {dp.value}
                    </span>
                  </div>
                ))
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
