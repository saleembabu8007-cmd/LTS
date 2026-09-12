import React from 'react';
import { Container } from '../structures/Container';
import { Section, SectionSpacing, SectionTone } from '../structures/Section';
import { SectionHeading } from '../molecules/SectionHeading';
import { FeatureImageCard } from '../cards/FeatureImageCard';
import { CompactImageCard } from '../cards/CompactImageCard';

export interface SupportingCardItem {
  id?: string;
  imageSrc: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  meta?: string;
  badge?: string;
  href?: string;
  onClick?: () => void;
}

export interface CompositionFeatureWithSupportingProps {
  sectionEyebrow?: string;
  sectionTitle?: string;
  sectionDescription?: string;
  // Large Feature (7 cols)
  featureImageSrc: string;
  featureImageAlt?: string;
  featureEyebrow?: string;
  featureTitle: string;
  featureDescription?: string;
  featureMeta?: string;
  featureCtaText?: string;
  featureHref?: string;
  onFeatureClick?: () => void;
  // 2 Smaller Supporting Items (5 cols)
  supportingItems: [SupportingCardItem, SupportingCardItem];
  tone?: SectionTone;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

/**
 * COMPOSITION C: LARGE FEATURE + SMALL SUPPORTING CARDS
 * Layout Structure: One large focal feature (7 cols) + two stacked supporting items (5 cols)
 * Directly breaks the generic 3-equal-card pattern by introducing asymmetric visual weight.
 */
export const CompositionFeatureWithSupporting: React.FC<CompositionFeatureWithSupportingProps> = ({
  sectionEyebrow,
  sectionTitle,
  sectionDescription,
  featureImageSrc,
  featureImageAlt = '',
  featureEyebrow,
  featureTitle,
  featureDescription,
  featureMeta,
  featureCtaText,
  featureHref,
  onFeatureClick,
  supportingItems,
  tone = 'white',
  spacing = 'standard',
  id,
  className = '',
}) => {
  return (
    <Section id={id} tone={tone} spacing={spacing} className={className}>
      <Container variant="wide">
        {(sectionTitle || sectionEyebrow) && (
          <div className="mb-10 lg:mb-12">
            <SectionHeading
              eyebrow={sectionEyebrow}
              title={sectionTitle || ''}
              description={sectionDescription}
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Large Feature Column (7 of 12 cols) */}
          <div className="lg:col-span-7 flex">
            <FeatureImageCard
              imageSrc={featureImageSrc}
              imageAlt={featureImageAlt}
              aspectRatio="16/10"
              eyebrow={featureEyebrow}
              title={featureTitle}
              description={featureDescription}
              meta={featureMeta}
              ctaText={featureCtaText}
              href={featureHref}
              onClick={onFeatureClick}
              className="w-full h-full min-h-[360px]"
            />
          </div>

          {/* Supporting Items Column (5 of 12 cols): Two Stacked Items */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-5">
            {supportingItems.map((item, idx) => (
              <CompactImageCard
                key={item.id || idx}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                eyebrow={item.eyebrow}
                title={item.title}
                meta={item.meta}
                badge={item.badge}
                href={item.href}
                onClick={item.onClick}
                className="flex-1 bg-white border border-[#E5E7EB]"
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const CompositionC = CompositionFeatureWithSupporting;
