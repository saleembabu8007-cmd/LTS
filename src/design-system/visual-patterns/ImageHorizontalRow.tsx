import React from 'react';
import { IconArrow } from '../icons';

export interface HorizontalProjectItem {
  id: string;
  title: string;
  location: string;
  category: string;
  thumbnail: string;
  thumbnailAlt?: string;
  specSummary?: string;
  href?: string;
}

export interface ImageHorizontalRowProps {
  project: HorizontalProjectItem;
  onNavigate?: (slug: string) => void;
  className?: string;
}

export interface ImageHorizontalRowListProps {
  projects: HorizontalProjectItem[];
  onNavigate?: (slug: string) => void;
  headerTitle?: string;
  headerEyebrow?: string;
  className?: string;
}

/**
 * TYPE 05 — HORIZONTAL PROJECT ROW
 * 
 * Clean, architectural ledger-style project row:
 * Thumbnail + Project Name + Location + Category + Arrow.
 * Zero repetitive card boxes; pure editorial scannability.
 */
export const ImageHorizontalRow: React.FC<ImageHorizontalRowProps> = ({
  project,
  onNavigate,
  className = '',
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && project.href) {
      e.preventDefault();
      onNavigate(project.href);
    }
  };

  return (
    <a
      href={project.href || '#'}
      onClick={handleClick}
      className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 sm:py-5 border-b border-slate-200 hover:bg-[#F8FAFC] px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-[6px] transition-all duration-200 select-none ${className}`}
      aria-label={`View project: ${project.title}`}
    >
      <div className="flex items-center gap-4 sm:gap-6 min-w-0">
        {/* Crisp Architectural Thumbnail (4:3 or 3:2, 80-110px) */}
        <div className="relative w-20 h-14 sm:w-24 sm:h-16 flex-shrink-0 rounded-[6px] overflow-hidden bg-[#173C62]">
          <img
            src={project.thumbnail}
            alt={project.thumbnailAlt || project.title}
            loading="lazy"
            className="w-full h-full object-cover filter brightness-[0.95] transition-transform duration-500 ease-out group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80';
            }}
          />
        </div>

        {/* Project Name & Optional Specification Summary */}
        <div className="min-w-0 space-y-0.5 text-left">
          <h4 className="text-sm sm:text-base font-medium text-[#0B1320] group-hover:text-[#173C62] transition-colors truncate">
            {project.title}
          </h4>
          {project.specSummary && (
            <p className="text-xs text-[#64748B] truncate">
              {project.specSummary}
            </p>
          )}
        </div>
      </div>

      {/* Location, Category Tag & Directional Arrow */}
      <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 flex-shrink-0 pl-24 sm:pl-0">
        <span className="text-xs text-[#64748B] font-normal">
          {project.location}
        </span>

        <span className="text-[11px] uppercase tracking-[0.12em] font-medium text-[#173C62] bg-[#173C62]/10 px-2.5 py-1 rounded-[4px]">
          {project.category}
        </span>

        <div className="text-[#173C62] transition-transform duration-200 group-hover:translate-x-1">
          <IconArrow size="sm" color="primary" />
        </div>
      </div>
    </a>
  );
};

export const ImageHorizontalRowList: React.FC<ImageHorizontalRowListProps> = ({
  projects,
  onNavigate,
  headerTitle,
  headerEyebrow,
  className = '',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {(headerTitle || headerEyebrow) && (
        <div className="space-y-1 pb-2 border-b border-[#173C62] text-left">
          {headerEyebrow && (
            <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] font-semibold block">
              {headerEyebrow}
            </span>
          )}
          {headerTitle && (
            <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] tracking-tight">
              {headerTitle}
            </h3>
          )}
        </div>
      )}

      <div className="divide-y divide-slate-200">
        {projects.map((project) => (
          <ImageHorizontalRow
            key={project.id}
            project={project}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
};
