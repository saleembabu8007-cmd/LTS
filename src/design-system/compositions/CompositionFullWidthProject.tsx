import React from 'react';
import { IconArrow } from '../icons';

export interface ProjectParameter {
  label: string;
  value: string;
}

export interface CompositionFullWidthProjectProps {
  eyebrow?: string;
  projectTitle: string;
  category: string;
  location?: string;
  summary: string;
  image: string;
  imageAlt?: string;
  parameters?: ProjectParameter[];
  ctaLabel?: string;
  ctaSlug?: string;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * Composition 07 — Full-Width Project Image Showcase
 * Panoramic project photography anchoring the viewport with a docked
 * architectural metadata plate and verified engineering parameters.
 */
export const CompositionFullWidthProject: React.FC<CompositionFullWidthProjectProps> = ({
  eyebrow = 'DELIVERED INFRASTRUCTURE',
  projectTitle,
  category,
  location = 'DUBAI, UAE',
  summary,
  image,
  imageAlt,
  parameters = [],
  ctaLabel = 'Inspect Case Record',
  ctaSlug = '/projects',
  onNavigate,
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-24 bg-white border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
          <div className="space-y-1 text-left">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              {eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
              {projectTitle}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
              {category}
            </span>
            <span className="text-[#CBD5E1]">&bull;</span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#173C62] font-medium">
              {location}
            </span>
          </div>
        </div>

        {/* Panoramic Visual Container (20-24px radius) with Docked Parameters */}
        <div className="relative rounded-[20px] sm:rounded-[24px] overflow-hidden aspect-[16/9] sm:aspect-[21/10] bg-[#173C62] shadow-[0_20px_50px_-20px_rgba(23,60,98,0.22)]">
          <img
            src={image}
            alt={imageAlt || projectTitle}
            className="w-full h-full object-cover filter brightness-[0.9] transition-transform duration-700 hover:scale-[1.015]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/85 via-[#173C62]/35 to-transparent pointer-events-none" />

          {/* Docked Lower Architectural Strip */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 lg:p-10 text-white flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl space-y-2 text-left">
              <p className="text-base sm:text-lg text-white/95 font-light leading-relaxed">
                {summary}
              </p>
              {onNavigate && ctaSlug && (
                <div className="pt-2">
                  <a
                    href={ctaSlug}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(ctaSlug);
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#93C5FD] transition-colors"
                  >
                    <span>{ctaLabel}</span>
                    <IconArrow size="sm" color="white" interactive />
                  </a>
                </div>
              )}
            </div>

            {/* Verified Parameters Grid */}
            {parameters.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 bg-[#173C62]/80 backdrop-blur-md px-5 py-4 rounded-[14px] border border-white/15">
                {parameters.map((param, pIdx) => (
                  <div key={pIdx} className="space-y-0.5 text-left">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-[#93C5FD]">
                      {param.label}
                    </span>
                    <span className="block font-mono text-sm sm:text-base font-semibold text-white">
                      {param.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
