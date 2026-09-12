import React from 'react';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export interface ProjectFeatureProps {
  eyebrow?: string;
  title: string;
  category: string;
  location: string;
  scopeNarrative: string;
  challenge?: string;
  solution?: string;
  deliverables?: string[];
  approvals?: string[];
  imageSrc: string;
  imageAlt?: string;
  actionLabel?: string;
  onExploreProject?: () => void;
  className?: string;
}

export const ProjectFeature: React.FC<ProjectFeatureProps> = ({
  eyebrow = 'LANDMARK BUILT ASSET EXECUTION',
  title,
  category,
  location,
  scopeNarrative,
  challenge,
  solution,
  deliverables = [],
  approvals = [],
  imageSrc,
  imageAlt,
  actionLabel = 'Inspect Technical Case Study',
  onExploreProject,
  className = '',
}) => {
  return (
    <section className={`editorial-section bg-[#FAFAFA] border-b border-[#E5E7EB] ${className}`}>
      <div className="lts-container space-y-10 sm:space-y-12">
        {/* Section Lead */}
        {eyebrow && (
          <div className="space-y-2">
            <span className="typography-label text-[#999999] block">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Editorial 12-column composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Architectural Imagery (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1C2F] border border-[#E5E7EB] rounded-[2px]">
              <img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#0B1C2F]/90 backdrop-blur-xs px-3 py-1 text-xs uppercase tracking-[0.14em] text-white font-medium">
                {category}
              </div>
            </div>

            {/* Regulatory Approvals & Certifications */}
            {approvals.length > 0 && (
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                {approvals.map((app, idx) => (
                  <span
                    key={idx}
                    className="typography-caption text-[#4A5568] bg-white border border-[#E5E7EB] px-3 py-1.5 rounded-[2px] font-medium flex items-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#173C62]" />
                    <span>{app}</span>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Technical Scope & Analysis (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 typography-caption text-[#999999]">
                  <MapPin className="w-3.5 h-3.5 text-[#173C62]" />
                  <span>{location}</span>
                </div>
                <h3 className="typography-h2 text-[#0B1320] leading-snug">
                  {title}
                </h3>
              </div>

              <p className="typography-body text-[#4A5568] leading-relaxed">
                {scopeNarrative}
              </p>

              {(challenge || solution) && (
                <div className="border-t border-b border-[#E5E7EB] py-4 space-y-3">
                  {challenge && (
                    <div>
                      <span className="typography-label text-[#999999] block mb-1">
                        Technical Challenge
                      </span>
                      <p className="typography-body-sm text-[#4A5568] leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  )}
                  {solution && (
                    <div>
                      <span className="typography-label text-[#173C62] block mb-1">
                        Delivered Solution
                      </span>
                      <p className="typography-body-sm text-[#4A5568] leading-relaxed">
                        {solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Key Deliverables */}
              {deliverables.length > 0 && (
                <div className="space-y-2">
                  <span className="typography-label text-[#999999] block">
                    Commissioned Scope
                  </span>
                  <div className="space-y-1.5">
                    {deliverables.slice(0, 4).map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2 typography-body-sm text-[#4A5568]">
                        <span className="w-1.5 h-1.5 rounded-none bg-[#173C62] mt-2 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {onExploreProject && (
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onExploreProject}
                  iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  {actionLabel}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
