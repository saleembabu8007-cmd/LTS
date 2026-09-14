import React from 'react';
import { Container } from '../structures/Container';
import { Eyebrow } from '../atoms/Eyebrow';
import { Button } from '../atoms/Button';
import { MediaBannerStats, StatItem } from '../molecules/MediaBannerStats';

export interface EditorialHeroProps {
  eyebrow?: string;
  headline: string;
  lead: string;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  mediaSrc: string;
  mediaAlt: string;
  stats?: StatItem[];
  bannerTitle?: string;
  lightCanvas?: boolean;
  className?: string;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  eyebrow = 'ELECTROMECHANICAL CONTRACTING & INFRASTRUCTURE',
  headline,
  lead,
  primaryActionLabel = 'Explore Capabilities',
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  mediaSrc,
  mediaAlt,
  stats = [],
  bannerTitle,
  lightCanvas = true,
  className = '',
}) => {
  const bgClass = lightCanvas ? 'bg-white text-[#0B1320]' : 'bg-[#173C62] text-white';
  const textClass = lightCanvas ? 'text-[#0B1320]' : 'text-white';
  const leadClass = lightCanvas ? 'text-[#4A5568]' : 'text-slate-300';

  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${bgClass} ${className}`}>
      <Container>
        <div className="space-y-12 lg:space-y-16">
          {/* Typographic Statement Block */}
          <div className="max-w-4xl space-y-6">
            {eyebrow && <Eyebrow light={!lightCanvas}>{eyebrow}</Eyebrow>}

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-sans font-light tracking-tight leading-[1.08] ${textClass}`}>
              {headline}
            </h1>

            <p className={`text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl ${leadClass}`}>
              {lead}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {primaryActionLabel && (
                <Button
                  variant="primary"
                  size="md"
                  shape="capsule"
                  onClick={onPrimaryAction}
                >
                  {primaryActionLabel}
                </Button>
              )}

              {secondaryActionLabel && (
                <Button
                  variant={lightCanvas ? 'secondary' : 'white'}
                  size="md"
                  shape="capsule"
                  onClick={onSecondaryAction}
                >
                  {secondaryActionLabel}
                </Button>
              )}
            </div>
          </div>

          {/* Feature Media Banner with 32-36px Radius & Integrated Stats */}
          {mediaSrc && (
            <MediaBannerStats
              imageSrc={mediaSrc}
              imageAlt={mediaAlt}
              stats={stats}
              title={bannerTitle}
              aspectRatio="21/9"
              radius="feature"
            />
          )}
        </div>
      </Container>
    </section>
  );
};
