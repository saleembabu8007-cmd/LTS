import React from 'react';
import { Container } from '../structures/Container';
import { Section, SectionSpacing, SectionTone } from '../structures/Section';
import { SectionHeading } from '../molecules/SectionHeading';
import { ArrowRight, ChevronRight } from 'lucide-react';

export interface ServiceMatrixItem {
  id?: string;
  name: string;
  href?: string;
  code?: string;
}

export interface ServiceMatrixGroup {
  id: string;
  index: string;
  title: string;
  description?: string;
  services: ServiceMatrixItem[];
  actionLabel?: string;
  actionHref?: string;
}

export interface CompositionServiceMatrixProps {
  eyebrow?: string;
  title: string;
  description?: string;
  groups: ServiceMatrixGroup[];
  columns?: 2 | 3 | 4;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

/**
 * COMPOSITION H: SERVICE MATRIX
 * Layout Structure: Grouped service disciplines with minimal visual treatment.
 * Replaces repetitive card grids with a clean architectural taxonomy matrix.
 */
export const CompositionServiceMatrix: React.FC<CompositionServiceMatrixProps> = ({
  eyebrow = 'DISCIPLINE TAXONOMY & CAPABILITY MATRIX',
  title,
  description,
  groups,
  columns = 3,
  tone = 'white',
  spacing = 'standard',
  id,
  className = '',
}) => {
  const colClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <Section id={id} tone={tone} spacing={spacing} className={className}>
      <Container variant="wide">
        {(title || eyebrow) && (
          <div className="mb-12">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
          </div>
        )}

        {/* Minimal Architectural Grid with Thin Hairlines */}
        <div className={`grid ${colClass} gap-8 lg:gap-12 border-t border-[#E5E7EB] pt-10`}>
          {groups.map((group) => (
            <div key={group.id} className="space-y-5">
              {/* Group Header */}
              <div className="space-y-1.5 pb-3 border-b border-[#E5E7EB]">
                <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-[0.2em]">
                  {group.index}
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] tracking-tight">
                  {group.title}
                </h3>
                {group.description && (
                  <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                    {group.description}
                  </p>
                )}
              </div>

              {/* Minimal Service Items List */}
              <ul className="space-y-2.5">
                {group.services.map((service, sIdx) => (
                  <li key={service.id || sIdx}>
                    {service.href ? (
                      <a
                        href={service.href}
                        className="group flex items-center justify-between text-sm text-[#334155] hover:text-[#173C62] py-1 transition-colors"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform">
                          {service.name}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#173C62] transition-colors" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-between text-sm text-[#334155] py-1">
                        <span>{service.name}</span>
                        {service.code && (
                          <span className="font-mono text-[10px] text-[#94A3B8] uppercase">
                            {service.code}
                          </span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Optional Group Action */}
              {group.actionHref && (
                <div className="pt-2">
                  <a
                    href={group.actionHref}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] transition-colors group"
                  >
                    <span>{group.actionLabel || 'View Discipline'}</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export const CompositionH = CompositionServiceMatrix;
