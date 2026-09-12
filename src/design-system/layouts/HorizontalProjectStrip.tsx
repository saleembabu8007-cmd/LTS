import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export interface ProjectStripItem {
  id: string;
  title: string;
  category: string;
  location: string;
  scopeSummary: string;
  image: string;
  slug: string;
}

interface HorizontalProjectStripProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  projects: ProjectStripItem[];
  onProjectClick: (slug: string) => void;
  onViewAll?: () => void;
  className?: string;
}

export const HorizontalProjectStrip: React.FC<HorizontalProjectStripProps> = ({
  eyebrow = 'VERIFIED BUILT DELIVERIES',
  headline,
  description,
  projects,
  onProjectClick,
  onViewAll,
  className = '',
}) => {
  return (
    <section className={`editorial-section bg-white border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E7EB] pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999999] block">
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
              {headline}
            </h2>
            {description && (
              <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {onViewAll && (
            <button
              onClick={onViewAll}
              className="text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:underline flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>Complete Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Horizontal Panoramic Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onProjectClick(item.slug)}
              className="group cursor-pointer space-y-4"
            >
              {/* Wide Aspect Visual */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1C2F] border border-[#E5E7EB]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-[400ms] ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0B1C2F]/90 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white font-medium">
                  {item.category}
                </div>
              </div>

              {/* Minimal Line-Item Metadata */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-1.5 text-xs text-[#999999]">
                  <MapPin className="w-3 h-3 text-[#173C62]" />
                  <span>{item.location}</span>
                </div>

                <h3 className="text-lg font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#4A5568] line-clamp-2 leading-relaxed font-light">
                  {item.scopeSummary}
                </p>

                <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-[#173C62] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
