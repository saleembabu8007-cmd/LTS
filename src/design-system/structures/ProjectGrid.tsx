import React from 'react';
import { ProjectLink, ProjectLinkProps } from '../molecules/ProjectLink';

export interface ProjectGridProps {
  projects: ProjectLinkProps[];
  columns?: 2 | 3;
  className?: string;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  columns = 2,
  className = '',
}) => {
  const colClass = columns === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2';

  return (
    <div className={`grid ${colClass} gap-8 lg:gap-10 ${className}`}>
      {projects.map((proj, idx) => (
        <ProjectLink key={idx} {...proj} />
      ))}
    </div>
  );
};
