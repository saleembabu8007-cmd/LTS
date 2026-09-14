import React from 'react';
import { GitCommit, CheckCircle2 } from 'lucide-react';
import { ServicePageData } from '../../types/serviceTemplate';

interface ProcessWorkflowModuleProps {
  data: ServicePageData;
}

export const ProcessWorkflowModule: React.FC<ProcessWorkflowModuleProps> = ({ data }) => {
  const methodology = data.methodology;
  if (!methodology || !methodology.steps || methodology.steps.length === 0) return null;

  return (
    <section id="section-methodology" className="py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#173C62]">
            <GitCommit className="w-3.5 h-3.5 text-[#173C62]" />
            <span>[ STAGE-GATE METHODOLOGY ]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#173C62]">
            {methodology.title}
          </h2>
          {methodology.subtitle && (
            <p className="text-base text-slate-600 font-normal">
              {methodology.subtitle}
            </p>
          )}
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border border-slate-300 divide-y md:divide-y-0 md:divide-x divide-slate-300 bg-white">
          {methodology.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 relative flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Step Sequence Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="w-8 h-8 bg-[#173C62] text-white font-medium text-xs flex items-center justify-center rounded-none">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.12em] text-slate-500 font-medium">
                    STAGE &bull; 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Tangible Deliverable Box */}
              {step.deliverable && (
                <div className="pt-4 border-t border-slate-200 space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-slate-500 font-medium">
                    Key Deliverable:
                  </div>
                  <div className="text-xs font-medium text-[#173C62] bg-slate-50 p-2.5 rounded-none border border-slate-200 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#173C62] shrink-0 mt-0.5" />
                    <span className="leading-snug">{step.deliverable}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
