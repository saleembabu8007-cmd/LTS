import React from 'react';
import { Check, Info, ShieldCheck, FileCheck, Layers } from 'lucide-react';
import { ServicePageData } from '../../types/serviceTemplate';

interface ServiceOverviewModuleProps {
  data: ServicePageData;
}

export const ServiceOverviewModule: React.FC<ServiceOverviewModuleProps> = ({ data }) => {
  const { introduction } = data;

  return (
    <section id="section-overview" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#173C62]">
            <Layers className="w-3.5 h-3.5 text-[#173C62]" />
            <span>[ EXECUTIVE SCOPE &amp; GOVERNANCE ]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#173C62]">
            Service Architecture &amp; <span className="font-bold">Delivery Framework</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            {introduction.leadText}
          </p>
        </div>

        {/* Narrative & Inclusions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-slate-300 divide-y lg:divide-y-0 lg:divide-x divide-slate-300 bg-white">
          {/* Left Column: Descriptive Narrative & Body */}
          <div className="lg:col-span-6 p-8 sm:p-10 space-y-5 text-slate-700 text-xs sm:text-sm leading-relaxed">
            {introduction.bodyParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            {/* Standards & Certifications Bar */}
            {introduction.standards && introduction.standards.length > 0 && (
              <div className="pt-6 mt-6 border-t border-slate-200">
                <div className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#173C62]" />
                  <span>Governing Engineering Codes &amp; Standards</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {introduction.standards.map((std, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-none text-xs font-mono border border-slate-300"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Structured Scope Matrix */}
          <div className="lg:col-span-6 p-8 sm:p-10 space-y-6 bg-slate-50/50">
            {/* Direct Scope Deliverables */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200">
                <h3 className="text-xs font-mono font-bold text-[#173C62] uppercase tracking-[0.18em] flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <span>Primary Scope Inclusions</span>
                </h3>
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-none border border-emerald-300">
                  Turnkey Deliverables
                </span>
              </div>

              <ul className="space-y-2.5">
                {introduction.scopeInclusion.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-800">
                    <span className="w-3.5 h-3.5 bg-[#173C62] text-white flex items-center justify-center shrink-0 mt-0.5 rounded-none">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope Boundaries / Exclusions */}
            {introduction.scopeBoundaries && introduction.scopeBoundaries.length > 0 && (
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                  <span>Interface Boundaries &amp; Client Pre-Requisites</span>
                </h4>
                <ul className="space-y-1.5">
                  {introduction.scopeBoundaries.map((boundary, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 shrink-0 mt-1.5 rounded-none" />
                      <span className="leading-snug">{boundary}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
