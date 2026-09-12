import React from 'react';
import { Image, AspectRatio } from '../atoms/Image';
import { Tag } from '../atoms/Tag';
import { Arrow } from '../atoms/Arrow';

export interface ProjectLinkProps {
  title: string;
  category: string;
  location?: string;
  metric?: string;
  metricLabel?: string;
  imageSrc: string;
  imageAlt: string;
  aspectRatio?: AspectRatio;
  onClick?: () => void;
  className?: string;
}

export const ProjectLink: React.FC<ProjectLinkProps> = ({
  title,
  category,
  location,
  metric,
  metricLabel,
  imageSrc,
  imageAlt,
  aspectRatio = '16/10',
  onClick,
  className = '',
}) => {
  return (
    <article
      onClick={onClick}
      className={`group bg-white border border-[#E5E7EB] transition-colors hover:border-[#173C62] cursor-pointer rounded-none shadow-none flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Photographic media frame: 0px radius */}
        <div className="relative border-b border-[#E5E7EB] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            aspectRatio={aspectRatio}
            withBorder={false}
            className="transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        </div>

        {/* Content Block */}
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <Tag variant="brand" shape="square">
              {category}
            </Tag>
            {location && (
              <span className="font-mono text-[11px] text-[#64748B]">
                {location}
              </span>
            )}
          </div>

          <h3 className="typography-h4 text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
            {title}
          </h3>

          {metric && (
            <div className="pt-2 border-t border-[#E5E7EB] flex items-baseline justify-between">
              <span className="font-sans font-bold text-sm text-[#0B1320]">{metric}</span>
              {metricLabel && (
                <span className="font-mono text-[10.5px] text-[#64748B] uppercase">{metricLabel}</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Footer Strip */}
      <div className="px-6 py-3 border-t border-[#E5E7EB] flex items-center justify-between text-[#173C62] bg-[#F8FAFC] group-hover:bg-[#EDF3F9] transition-colors">
        <span className="typography-btn text-xs font-semibold">Inspect Case Study</span>
        <Arrow direction="right" className="transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </article>
  );
};
