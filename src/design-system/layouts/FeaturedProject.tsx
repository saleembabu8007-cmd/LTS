import React from 'react';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';

interface FeaturedProjectProps {
  title: string;
  category: string;
  location: string;
  scopeNarrative: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  approvals: string[];
  imageSrc: string;
  imageAlt: string;
  onExploreProject: () => void;
  className?: string;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  category,
  location,
  scopeNarrative,
  challenge,
  solution,
  deliverables,
  approvals,
  imageSrc,
  imageAlt,
  onExploreProject,
  className = '',
}) => {
  return (
    <section className={`editorial-section bg-[#FAFAFA] border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999999] block">
            LANDMARK BUILT ASSET
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
            Featured <span className="font-semibold text-[#173C62]">Project Execution</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Large Architectural Framing (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1C2F] border border-[#E5E7EB] shadow-xs">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#0B1C2F]/90 px-3 py-1 text-xs uppercase tracking-wider text-white font-medium">
                {category}
              </div>
            </div>

            {/* Approvals Band */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {approvals.map((app, idx) => (
                <span
                  key={idx}
                  className="text-xs text-slate-700 bg-white border border-[#E5E7EB] px-3 py-1 font-medium flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#173C62]" />
                  <span>{app}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Editorial Analysis & Deliverables (5 cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-[#999999] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#173C62]" />
                  <span>{location}</span>
                </div>
                <h3 className="text-2xl font-light text-[#0B1320] leading-snug">
                  {title}
                </h3>
              </div>

              <p className="text-sm text-[#4A5568] leading-relaxed font-normal">
                {scopeNarrative}
              </p>

              <div className="border-t border-b border-[#E5E7EB] py-4 space-y-3 text-xs">
                <div>
                  <span className="font-semibold uppercase tracking-wider text-[#999999] block mb-1">
                    Technical Challenge
                  </span>
                  <p className="text-slate-700 leading-relaxed">{challenge}</p>
                </div>
                <div>
                  <span className="font-semibold uppercase tracking-wider text-[#173C62] block mb-1">
                    Delivered Solution
                  </span>
                  <p className="text-slate-700 leading-relaxed">{solution}</p>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#999999] block">
                  Delivered Scope Items
                </span>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {deliverables.slice(0, 3).map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#173C62] mt-1.5 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={onExploreProject}
                iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Inspect Technical Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
