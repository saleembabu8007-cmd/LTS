import React from 'react';
import { Container } from '../structures/Container';
import { Eyebrow } from '../atoms/Eyebrow';
import { Tag } from '../atoms/Tag';
import { Image } from '../atoms/Image';
import { TextLink } from '../atoms/TextLink';

export interface IndustryFeatureProps {
  industryTitle: string;
  scopeSummary: string;
  challenges: string[];
  deliverables: string[];
  imageSrc: string;
  imageAlt: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const IndustryFeature: React.FC<IndustryFeatureProps> = ({
  industryTitle,
  scopeSummary,
  challenges,
  deliverables,
  imageSrc,
  imageAlt,
  actionLabel = 'Explore Sector Capability',
  onAction,
  className = '',
}) => {
  return (
    <div className={`py-12 border-b border-[#E5E7EB] ${className}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <Eyebrow>SPECIALIZED SECTOR</Eyebrow>
            <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#0B1320] tracking-tight">
              {industryTitle}
            </h3>
            <p className="text-sm text-[#4A5568] leading-relaxed">
              {scopeSummary}
            </p>
            {actionLabel && (
              <div className="pt-2">
                <TextLink onClick={onAction}>
                  {actionLabel}
                </TextLink>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#64748B]">
                Operating Demands
              </span>
              <ul className="space-y-2 text-xs text-[#0B1320] list-disc list-inside">
                {challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <span className="block text-xs font-mono uppercase tracking-wider text-[#64748B]">
                Key Deliverables
              </span>
              <div className="flex flex-wrap gap-1.5">
                {deliverables.map((d, i) => (
                  <Tag key={i} variant="neutral" shape="pill">
                    {d}
                  </Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <Image
              src={imageSrc}
              alt={imageAlt}
              aspectRatio="4/3"
              radius="image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
