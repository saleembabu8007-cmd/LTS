import React from 'react';
import { ProjectRailLayout } from '../layouts/ProjectRailLayout';
import { ProjectVisualCard, ProjectVisualCardProps } from '../cards/ProjectVisualCard';

export interface ProjectRailProps {
  eyebrow?: string;
  title: string;
  description?: string;
  viewAllHref?: string;
  projects: ProjectVisualCardProps[];
  className?: string;
}

/**
 * ProjectRail (Composition 4)
 * Horizontal project portfolio strip.
 * Gives immediate access to architectural project photography without creating 3-column card walls.
 */
export const ProjectRail: React.FC<ProjectRailProps> = ({
  eyebrow = 'Verified Infrastructure Portfolio',
  title = 'Selected Engineering Deployments',
  description,
  viewAllHref = '/projects',
  projects,
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-24 md:py-32 bg-[#F8FAFC] ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <ProjectRailLayout
          eyebrow={eyebrow}
          title={title}
          description={description}
          viewAllHref={viewAllHref}
        >
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="w-[300px] sm:w-[360px] md:w-[420px] shrink-0 snap-start"
            >
              <ProjectVisualCard {...proj} />
            </div>
          ))}
        </ProjectRailLayout>
      </div>
    </section>
  );
};
