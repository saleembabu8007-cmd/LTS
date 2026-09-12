import React from 'react';
import { Container } from '../structures/Container';
import { Section, SectionSpacing, SectionTone } from '../structures/Section';
import { SectionHeading } from '../molecules/SectionHeading';
import { ShieldCheck } from 'lucide-react';

export interface CompositionLogoItem {
  id?: string;
  name: string;
  sublabel?: string;
  clearanceCode?: string;
  logoSrc?: string;
}

export type AuthorityLogoItem = CompositionLogoItem;

export interface CompositionLogoGridProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  logos: CompositionLogoItem[];
  columns?: 3 | 4 | 6;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

/**
 * COMPOSITION F: LOGO GRID
 * Layout Structure: Restrained, disciplined grid for approved statutory authorities and standards bodies.
 * Strictly deployed ONLY when verified client/partner/authority relationships exist.
 */
export const CompositionLogoGrid: React.FC<CompositionLogoGridProps> = ({
  eyebrow = 'STATUTORY CLEARANCES & REGULATORY BODIES',
  title = 'Authority Approvals & Standards Compliance',
  description,
  logos,
  columns = 4,
  tone = 'white',
  spacing = 'standard',
  id,
  className = '',
}) => {
  const colClass = {
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  }[columns];

  return (
    <Section id={id} tone={tone} spacing={spacing} className={className}>
      <Container variant="wide">
        {(title || eyebrow) && (
          <div className="mb-10 lg:mb-12">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
          </div>
        )}

        <div className={`grid ${colClass} gap-4 sm:gap-6`}>
          {logos.map((logo, idx) => (
            <div
              key={logo.id || idx}
              className="p-6 rounded-[14px] border border-[#E5E7EB] bg-[#FAFAFA]/50 hover:bg-white hover:border-[#173C62]/30 transition-all flex flex-col justify-between min-h-[110px] group"
            >
              <div className="flex items-center justify-between gap-2">
                {logo.clearanceCode ? (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#64748B] font-semibold bg-[#EDF3F9] px-2 py-0.5 rounded-sm">
                    {logo.clearanceCode}
                  </span>
                ) : (
                  <span className="w-2 h-2 rounded-full bg-[#173C62]/30" />
                )}
                <ShieldCheck className="w-3.5 h-3.5 text-[#173C62]/60 group-hover:text-[#173C62] transition-colors" />
              </div>

              <div className="pt-3">
                <span className="text-base font-semibold text-[#0B1320] block tracking-tight group-hover:text-[#173C62] transition-colors">
                  {logo.name}
                </span>
                {logo.sublabel && (
                  <span className="text-xs text-[#64748B] block pt-0.5 font-normal">
                    {logo.sublabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export const CompositionF = CompositionLogoGrid;
