import React from 'react';
import { Building, Factory, Landmark, Hotel, Hospital, Plane } from 'lucide-react';
import { ServicePageData } from '../../types/serviceTemplate';

interface ApplicationsSegmentsModuleProps {
  data: ServicePageData;
}

export const ApplicationsSegmentsModule: React.FC<ApplicationsSegmentsModuleProps> = ({ data }) => {
  const applications = data.applications;
  if (!applications || !applications.items || applications.items.length === 0) return null;

  const getSectorIcon = (sector: string) => {
    const s = sector.toLowerCase();
    if (s.includes('hospital') || s.includes('health')) return <Hospital className="w-4 h-4 text-[#173C62]" />;
    if (s.includes('hotel') || s.includes('resort') || s.includes('hospitality')) return <Hotel className="w-4 h-4 text-[#173C62]" />;
    if (s.includes('airport') || s.includes('transport') || s.includes('aviation')) return <Plane className="w-4 h-4 text-[#173C62]" />;
    if (s.includes('industrial') || s.includes('manufactur') || s.includes('warehouse')) return <Factory className="w-4 h-4 text-[#173C62]" />;
    if (s.includes('tower') || s.includes('office') || s.includes('commercial')) return <Building className="w-4 h-4 text-[#173C62]" />;
    return <Landmark className="w-4 h-4 text-[#173C62]" />;
  };

  return (
    <section id="section-applications" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#173C62]">
            <Building className="w-3.5 h-3.5 text-[#173C62]" />
            <span>[ REGULATED SECTORS ]</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#173C62]">
            {applications.title || 'Engineered for Demanding Sector Environments'}
          </h2>
          {applications.subtitle && (
            <p className="text-base text-slate-600 font-normal">
              {applications.subtitle}
            </p>
          )}
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-none border border-slate-300 p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-[#173C62] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-none bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                    {getSectorIcon(item.sector)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.sector}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Concrete Application Use Case Box */}
              <div className="pt-4 border-t border-slate-200 space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Primary Application:
                </div>
                <div className="text-xs font-medium text-[#173C62] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#173C62] rounded-none shrink-0" />
                  <span>{item.useCase}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
