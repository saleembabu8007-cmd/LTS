import React, { useState } from 'react';
import { Container } from '../structures/Container';
import { SectionHeading } from '../molecules/SectionHeading';
import { FilterControl, FilterOption } from '../molecules/FilterControl';
import { ProjectLink } from '../molecules/ProjectLink';
import { Pagination } from '../molecules/Pagination';

export interface ProjectArchiveItem {
  id: string;
  title: string;
  category: string;
  location: string;
  metric?: string;
  metricLabel?: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export interface ProjectArchiveProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  filterOptions: FilterOption[];
  projects: ProjectArchiveItem[];
  itemsPerPage?: number;
  onSelectProject?: (id: string) => void;
  className?: string;
}

export const ProjectArchive: React.FC<ProjectArchiveProps> = ({
  eyebrow = 'PROJECT ARCHIVE',
  title = 'Verified Electromechanical & Infrastructure Deliveries',
  description = 'Exhaustive repository of single-source engineering handovers across UAE civic, commercial, and industrial landscapes.',
  filterOptions,
  projects,
  itemsPerPage = 6,
  onSelectProject,
  className = '',
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <Container className="space-y-10">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        {/* Filter Pills Rail */}
        <FilterControl
          options={filterOptions}
          activeId={activeCategory}
          onChange={(id) => {
            setActiveCategory(id);
            setCurrentPage(1);
          }}
          variant="pills"
        />

        {/* Image-led Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {paginatedProjects.map((project) => (
            <div key={project.id} className="cursor-pointer" onClick={() => onSelectProject?.(project.id)}>
              <ProjectLink
                title={project.title}
                category={project.category}
                location={project.location}
                metric={project.metric}
                metricLabel={project.metricLabel}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                onClick={() => onSelectProject?.(project.id)}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pt-6 border-t border-[#E5E7EB]">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </Container>
    </section>
  );
};
