import React from 'react';
import { Award } from 'lucide-react';
import { ServicePageData } from '../../types/serviceTemplate';

interface StrengthsBenefitsModuleProps {
  data: ServicePageData;
}

export const StrengthsBenefitsModule: React.FC<StrengthsBenefitsModuleProps> = ({ data }) => {
  const strengths = data.strengths;
  if (!strengths || !strengths.items || strengths.items.length === 0) return null;

  return (
    <section className="py-20 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#173C62]">
            <Award className="w-3.5 h-3.5 text-[#173C62]" />
            <span>[ OPERATIONAL ADVANTAGE ]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#173C62]">
            {strengths.title || 'The LTSGROUP Engineering Advantage'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-300 divide-y md:divide-y-0 md:divide-x divide-slate-300 bg-white">
          {strengths.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 space-y-4 hover:bg-slate-50 transition-colors"
            >
              {/* Highlight Tag */}
              {item.highlight && (
                <div className="inline-block px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-100 text-[#173C62] border border-slate-200 rounded-none">
                  {item.highlight}
                </div>
              )}

              <h3 className="text-base font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
