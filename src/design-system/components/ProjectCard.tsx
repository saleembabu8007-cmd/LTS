import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { TextLink } from './Button';

export interface ProjectCardProps {
  id?: string;
  title: string;
  category: string;
  location: string;
  scopeSummary?: string;
  metric?: string;
  metricLabel?: string;
  client?: string;
  imageSrc: string;
  imageAlt?: string;
  onSelect?: () => void;
  href?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  location,
  scopeSummary,
  metric,
  metricLabel,
  client,
  imageSrc,
  imageAlt,
  onSelect,
  href,
  className = '',
}) => {
  return (
    <article
      className={`group flex flex-col justify-between bg-white border border-[#E5E7EB] rounded-[2px] overflow-hidden transition-all duration-300 hover:border-[#173C62] hover:shadow-xs ${className}`}
    >
      <div>
        {/* Architectural Image Container (16:10) with 2px Universal Radius */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
          {/* Category Tag */}
          <div className="absolute top-3 left-3 bg-[#0B1C2F]/90 backdrop-blur-xs px-2.5 py-1 text-[9.5px] uppercase font-mono tracking-[0.14em] text-white rounded-[1px] border border-white/10">
            {category}
          </div>

          {/* Metric Callout Badge */}
          {metric && (
            <div className="absolute bottom-3 right-3 bg-[#173C62]/95 backdrop-blur-xs px-2.5 py-1 text-right rounded-[1px] border border-white/10">
              <span className="text-xs font-mono font-medium text-white block">
                {metric}
              </span>
              {metricLabel && (
                <span className="text-[9px] uppercase font-mono tracking-wider text-slate-300 block">
                  {metricLabel}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Location & Client Context */}
          <div className="flex items-center justify-between gap-2 text-[#64748B] typography-caption text-xs">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#173C62] shrink-0" />
              <span>{location}</span>
            </div>
            {client && (
              <span className="truncate max-w-[140px] text-slate-500 font-mono text-[11px]">
                {client}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3 className="typography-h4 text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
            {title}
          </h3>

          {/* Scannable Scope Narrative */}
          {scopeSummary && (
            <p className="typography-body-sm text-[#4A5568] line-clamp-2 leading-relaxed">
              {scopeSummary}
            </p>
          )}
        </div>
      </div>

      {/* Footer Action Link */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-[#E5E7EB]/40 pt-3">
        <TextLink href={href} onClick={onSelect} arrow>
          Inspect Project Case
        </TextLink>
      </div>
    </article>
  );
};
