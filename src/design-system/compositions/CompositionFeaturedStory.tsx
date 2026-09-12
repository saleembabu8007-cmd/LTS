import React from 'react';
import { Container } from '../structures/Container';
import { Section, SectionSpacing, SectionTone } from '../structures/Section';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export interface CompositionFeaturedStoryProps {
  sectionEyebrow?: string;
  category?: string;
  date?: string;
  readTime?: string;
  headline: string;
  leadParagraph: string;
  secondaryText?: string;
  imageSrc: string;
  imageAlt?: string;
  imageCaption?: string;
  attribution?: string;
  ctaText?: string;
  href?: string;
  onClick?: () => void;
  layout?: 'split' | 'stacked';
  tone?: SectionTone;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

/**
 * COMPOSITION G: FEATURED STORY
 * Layout Structure: Large architectural image + prominent editorial headline.
 * Art-directed publication layout for major corporate milestones and engineering briefings.
 */
export const CompositionFeaturedStory: React.FC<CompositionFeaturedStoryProps> = ({
  sectionEyebrow = 'FEATURED ENGINEERING BRIEFING',
  category = 'Technical Publication',
  date,
  readTime,
  headline,
  leadParagraph,
  secondaryText,
  imageSrc,
  imageAlt = '',
  imageCaption,
  attribution,
  ctaText = 'Read Full Briefing',
  href,
  onClick,
  layout = 'split',
  tone = 'white',
  spacing = 'standard',
  id,
  className = '',
}) => {
  const isStacked = layout === 'stacked';

  const ActionWrapper = href ? 'a' : 'div';
  const actionProps = href
    ? { href }
    : onClick
    ? { onClick, role: 'button', tabIndex: 0 }
    : {};

  return (
    <Section id={id} tone={tone} spacing={spacing} className={className}>
      <Container variant="wide">
        {sectionEyebrow && (
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
              {sectionEyebrow}
            </span>
          </div>
        )}

        {isStacked ? (
          /* Stacked Layout: Large full-width image followed by editorial story headline */
          <div className="space-y-8">
            <div className="relative aspect-[21/9] sm:aspect-[2.2/1] overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#E5E7EB] bg-[#0B1320] group">
              <img
                src={imageSrc}
                alt={imageAlt || headline}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
              />
              {(imageCaption || attribution) && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 text-white flex items-center justify-between text-xs font-mono">
                  <span>{imageCaption}</span>
                  {attribution && <span className="uppercase tracking-wider text-[#93C5FD]">{attribution}</span>}
                </div>
              )}
            </div>

            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#64748B]">
                <span className="px-2.5 py-0.5 bg-[#EDF3F9] text-[#173C62] font-semibold rounded-full uppercase tracking-wider">
                  {category}
                </span>
                {date && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{date}</span>
                  </span>
                )}
                {readTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{readTime}</span>
                  </span>
                )}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.12]">
                {headline}
              </h2>

              <p className="text-base sm:text-lg text-[#4A5568] font-light leading-relaxed max-w-3xl">
                {leadParagraph}
              </p>

              {(href || onClick) && (
                <div className="pt-2">
                  <ActionWrapper
                    {...actionProps}
                    className="inline-flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] transition-colors cursor-pointer group"
                  >
                    <span>{ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </ActionWrapper>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Split Layout: 7 cols image + 5 cols editorial story */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Image (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#E5E7EB] bg-[#0B1320] group">
                <img
                  src={imageSrc}
                  alt={imageAlt || headline}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>
              {(imageCaption || attribution) && (
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#64748B] px-1">
                  <span>{imageCaption}</span>
                  {attribution && <span className="uppercase tracking-wider text-[#173C62]">{attribution}</span>}
                </div>
              )}
            </div>

            {/* Editorial Story (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#64748B]">
                <span className="px-2.5 py-0.5 bg-[#EDF3F9] text-[#173C62] font-semibold rounded-full uppercase tracking-wider">
                  {category}
                </span>
                {date && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{date}</span>
                  </span>
                )}
                {readTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{readTime}</span>
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-snug">
                {headline}
              </h2>

              <p className="text-sm sm:text-base text-[#4A5568] font-light leading-relaxed">
                {leadParagraph}
              </p>

              {secondaryText && (
                <p className="text-xs text-[#64748B] leading-relaxed pt-1">
                  {secondaryText}
                </p>
              )}

              {(href || onClick) && (
                <div className="pt-2">
                  <ActionWrapper
                    {...actionProps}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#0B1320] transition-colors cursor-pointer group"
                  >
                    <span>{ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </ActionWrapper>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export const CompositionG = CompositionFeaturedStory;
