import React from 'react';
import { ServiceVisualCard, ServiceVisualCardProps } from '../cards/ServiceVisualCard';

export interface ServiceExplorerProps {
  eyebrow?: string;
  title: string;
  description?: string;
  services: ServiceVisualCardProps[];
  layout?: 'grid-2' | 'grid-3';
  className?: string;
}

/**
 * ServiceExplorer (Composition 7)
 * Unboxed discipline explorer. Uses ServiceVisualCard components without heavy card borders or shadow clutter.
 */
export const ServiceExplorer: React.FC<ServiceExplorerProps> = ({
  eyebrow = 'Core Engineering Disciplines',
  title,
  description,
  services,
  layout = 'grid-2',
  className = '',
}) => {
  const gridClass = layout === 'grid-2'
    ? 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

  return (
    <section className={`py-16 sm:py-24 md:py-32 bg-white text-left ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mb-12">
          {eyebrow && (
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-[26px] sm:text-[34px] md:text-[40px] font-medium text-[#0B1320] leading-[1.12] tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className={gridClass}>
          {services.map((srv) => (
            <ServiceVisualCard key={srv.id} {...srv} />
          ))}
        </div>
      </div>
    </section>
  );
};
