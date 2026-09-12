import React from 'react';
import { Container } from '../structures/Container';
import { Tag } from '../atoms/Tag';
import { Image } from '../atoms/Image';
import { StatusIndicator } from '../atoms/StatusIndicator';
import { TextLink } from '../atoms/TextLink';

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectFeatureOrganismProps {
  category: string;
  title: string;
  client: string;
  location: string;
  scopeSummary: string;
  metricValue: string;
  metricLabel: string;
  specs: ProjectSpec[];
  clearanceLevel?: string;
  imageSrc: string;
  imageAlt: string;
  onExplore?: () => void;
  className?: string;
}

export const ProjectFeatureOrganism: React.FC<ProjectFeatureOrganismProps> = ({
  category,
  title,
  client,
  location,
  scopeSummary,
  metricValue,
  metricLabel,
  specs,
  clearanceLevel = 'DEWA / DCD Verified',
  imageSrc,
  imageAlt,
  onExplore,
  className = '',
}) => {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Rail: 28px Rounded Photography with Inset Capacity Metric */}
          <div className="lg:col-span-7 relative group">
            <Image
              src={imageSrc}
              alt={imageAlt}
              aspectRatio="16/10"
              radius="image"
            />
            <div className="absolute top-4 left-4">
              <StatusIndicator label={clearanceLevel} tone="success" variant="pill" />
            </div>
            <div className="absolute bottom-4 right-4 bg-[#0B1320]/90 backdrop-blur-sm text-white px-5 py-3 rounded-[16px] text-right">
              <div className="text-xl sm:text-2xl font-sans font-bold tracking-tight">
                {metricValue}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-300">
                {metricLabel}
              </div>
            </div>
          </div>

          {/* Narrative & Verification Rail */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Tag variant="brand" shape="pill">
                  {category}
                </Tag>
                <span className="text-xs font-mono text-[#64748B]">{location}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#0B1320] tracking-tight">
                {title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              {scopeSummary}
            </p>

            {/* Spec Matrix */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-[#E5E7EB]">
              <div className="space-y-0.5">
                <span className="block font-mono text-[10.5px] uppercase text-[#64748B]">Client</span>
                <span className="block text-xs font-semibold text-[#0B1320]">{client}</span>
              </div>
              {specs.map((spec, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="block font-mono text-[10.5px] uppercase text-[#64748B]">{spec.label}</span>
                  <span className="block text-xs font-semibold text-[#0B1320]">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <TextLink arrow onClick={onExplore}>
                Inspect Comprehensive Project Scope
              </TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
