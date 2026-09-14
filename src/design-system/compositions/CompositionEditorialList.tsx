import React from 'react';
import { Container } from '../structures/Container';
import { Section, SectionSpacing, SectionTone } from '../structures/Section';
import { IconArrow } from '../icons';

export interface EditorialListRowItem {
  id: string;
  index: string;
  category?: string;
  title: string;
  description: string;
  tags?: string[];
  meta?: string;
  href?: string;
  onClick?: () => void;
}

export interface CompositionEditorialListProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: EditorialListRowItem[];
  actionLabel?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

/**
 * COMPOSITION D: EDITORIAL LIST
 * Layout Structure: Large section heading + open horizontal rows separated by hairline dividers.
 * Avoids boxing content into cards, creating an airy, prestigious editorial narrative.
 */
export const CompositionEditorialList: React.FC<CompositionEditorialListProps> = ({
  eyebrow,
  title,
  description,
  items,
  actionLabel = 'Explore Scope',
  tone = 'white',
  spacing = 'standard',
  id,
  className = '',
}) => {
  return (
    <Section id={id} tone={tone} spacing={spacing} className={className}>
      <Container variant="wide">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          {eyebrow && (
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.15]">
            {title}
          </h2>
          {description && (
            <p className="text-base sm:text-lg text-[#4A5568] font-light leading-relaxed pt-1">
              {description}
            </p>
          )}
        </div>

        {/* Horizontal Editorial Rows */}
        <div className="border-t border-[#E5E7EB] divide-y divide-[#E5E7EB]">
          {items.map((item) => {
            const ContentWrapper = item.href ? 'a' : 'div';
            const interactiveProps = item.href
              ? { href: item.href }
              : item.onClick
              ? { onClick: item.onClick, role: 'button', tabIndex: 0 }
              : {};

            return (
              <ContentWrapper
                key={item.id}
                {...interactiveProps}
                className="py-5 sm:py-7 lg:py-9 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-baseline group hover:bg-[#FAFAFA]/70 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-[12px] cursor-pointer"
              >
                {/* 1. Index Numerals (Desktop only) */}
                <div className="hidden lg:block lg:col-span-1">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#94A3B8] group-hover:text-[#173C62] transition-colors">
                    {item.index}
                  </span>
                </div>

                {/* 2. Category & Title */}
                <div className="lg:col-span-4 space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="lg:hidden font-mono text-xs font-semibold text-[#173C62]">
                      {item.index}
                    </span>
                    {item.category && (
                      <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#64748B] block font-medium">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-[#0B1320] group-hover:text-[#173C62] transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  {item.meta && (
                    <span className="text-xs text-[#64748B] font-mono block pt-0.5">
                      {item.meta}
                    </span>
                  )}
                </div>

                {/* 3. Description & Tags */}
                <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 bg-[#F1F5F9] text-[#173C62] text-[10.5px] sm:text-[11px] font-mono rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* 4. Action Chevron */}
                <div className="lg:col-span-2 flex justify-start lg:justify-end items-center pt-1 lg:pt-0 min-h-[44px]">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#173C62] group-hover:text-[#0B1320] transition-colors">
                    <span>{actionLabel}</span>
                    <IconArrow size="sm" color="inherit" interactive />
                  </div>
                </div>
              </ContentWrapper>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export const CompositionD = CompositionEditorialList;
