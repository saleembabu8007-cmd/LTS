import React from 'react';
import { Cpu } from 'lucide-react';
import { ServicePageData } from '../../types/serviceTemplate';

interface CapabilityMatrixModuleProps {
  data: ServicePageData;
}

export const CapabilityMatrixModule: React.FC<CapabilityMatrixModuleProps> = ({ data }) => {
  const { capabilities } = data;
  const items = capabilities.items;

  const getGridClass = (count: number) => {
    if (count <= 2) return 'grid-cols-1 md:grid-cols-2';
    if (count === 3) return 'grid-cols-1 md:grid-cols-3';
    if (count === 4) return 'grid-cols-1 md:grid-cols-2';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <section id="section-capabilities" className="py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#173C62]">
            <Cpu className="w-3.5 h-3.5 text-[#173C62]" />
            <span>[ TECHNICAL CAPABILITIES ]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#173C62]">
            {capabilities.sectionTitle || 'Core Engineering Disciplines & Systems'}
          </h2>
          {capabilities.sectionSubtitle && (
            <p className="text-base text-slate-600 font-normal">
              {capabilities.sectionSubtitle}
            </p>
          )}
        </div>

        {/* Dynamic Capabilities Grid */}
        <div className={`grid ${getGridClass(items.length)} gap-6`}>
          {items.map((cap, idx) => (
            <div
              key={idx}
              className="bg-white rounded-none border border-slate-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#173C62] transition-colors"
            >
              <div className="space-y-4">
                {/* Capability Header & Badge */}
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-semibold text-[#173C62] uppercase tracking-[0.14em]">
                    CAPABILITY &bull; 0{idx + 1}
                  </span>
                  {cap.badge && (
                    <span className="text-[10px] font-medium uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded-none border border-slate-200">
                      {cap.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#173C62] leading-snug">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cap.description}
                </p>

                {/* Technical Specifications Table / Key-Value Pairs */}
                {cap.specs && cap.specs.length > 0 && (
                  <div className="pt-4 border-t border-slate-200 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium block">
                      Engineering Parameters:
                    </span>
                    <div className="space-y-1.5 bg-slate-50 p-3 rounded-none border border-slate-200">
                      {cap.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between text-xs gap-2"
                        >
                          <span className="text-slate-600">{spec.key}</span>
                          <span className="font-medium text-[#173C62] text-right">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tags footer */}
              {cap.tags && cap.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200">
                  {cap.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-medium uppercase tracking-wider rounded-none border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
