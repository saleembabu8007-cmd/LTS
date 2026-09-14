import React from 'react';
import { Container } from '../structures/Container';
import { Section, SectionSpacing, SectionTone } from '../structures/Section';
import { CheckCircle2 } from 'lucide-react';

export interface CompositionImageTextProps {
  imageSrc: string;
  imageAlt?: string;
  imageCaption?: string;
  attribution?: string;
  eyebrow?: string;
  title: string;
  description: string;
  secondaryText?: string;
  highlights?: string[];
  actions?: React.ReactNode;
  aspectRatio?: '16/10' | '4/3' | '16/9';
  tone?: SectionTone;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

/**
 * COMPOSITION B: IMAGE + TEXT
 * Layout Ratio: Image 60% (7 cols) / Text 40% (5 cols)
 * Inverted image-first layout establishing immediate visual impact before editorial narrative.
 */
export const CompositionImageText: React.FC<CompositionImageTextProps> = ({
  imageSrc,
  imageAlt = '',
  imageCaption,
  attribution,
  eyebrow,
  title,
  description,
  secondaryText,
  highlights,
  actions,
  aspectRatio = '16/10',
  tone = 'white',
  spacing = 'standard',
  id,
  className = '',
}) => {
  const aspectClass = {
    '16/10': 'aspect-[4/3] sm:aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[4/3] sm:aspect-[16/9]',
  }[aspectRatio];

  return (
    <Section id={id} tone={tone} spacing={spacing} className={className}>
      <Container variant="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Image Column: 60% (7 of 12 cols) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="group relative">
              <div
                className={`relative w-full ${aspectClass} overflow-hidden rounded-[8px] bg-[#0B1320]`}
              >
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                />
              </div>

              {(imageCaption || attribution) && (
                <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#64748B] px-1">
                  {imageCaption && <span>{imageCaption}</span>}
                  {attribution && <span className="uppercase tracking-wider text-[#173C62]">{attribution}</span>}
                </div>
              )}
            </div>
          </div>

          {/* Text Column: 40% (5 of 12 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 order-1 lg:order-2">
            <div className="space-y-2.5 sm:space-y-3">
              {eyebrow && (
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                  {eyebrow}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.18] sm:leading-[1.15]">
                {title}
              </h2>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[#4A5568] font-light leading-relaxed">
              {description}
            </p>

            {secondaryText && (
              <p className="text-sm text-[#64748B] leading-relaxed pt-1">
                {secondaryText}
              </p>
            )}

            {highlights && highlights.length > 0 && (
              <ul className="space-y-2.5 pt-2 border-t border-[#E5E7EB]">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#0B1320] font-normal">
                    <CheckCircle2 className="w-4 h-4 text-[#173C62] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {actions && (
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {actions}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const CompositionB = CompositionImageText;
