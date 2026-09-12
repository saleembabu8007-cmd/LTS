import React from 'react';
import { Image, AspectRatio } from '../atoms/Image';
import { Eyebrow } from '../atoms/Eyebrow';
import { Heading } from '../atoms/Heading';
import { BodyText } from '../atoms/BodyText';
import { MediaCaption } from '../molecules/MediaCaption';

export interface MediaTextSectionProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  paragraphs?: string[];
  specs?: { label: string; value: string }[];
  action?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  aspectRatio?: AspectRatio;
  mediaCaption?: string;
  technicalId?: string;
  mediaPosition?: 'left' | 'right';
  className?: string;
}

export const MediaTextSection: React.FC<MediaTextSectionProps> = ({
  eyebrow,
  title,
  lead,
  paragraphs = [],
  specs = [],
  action,
  imageSrc,
  imageAlt,
  aspectRatio = '16/10',
  mediaCaption,
  technicalId,
  mediaPosition = 'left',
  className = '',
}) => {
  const isLeft = mediaPosition === 'left';

  const mediaBlock = (
    <div className="space-y-2">
      <Image
        src={imageSrc}
        alt={imageAlt}
        aspectRatio={aspectRatio}
        withBorder
      />
      {mediaCaption && (
        <MediaCaption
          caption={mediaCaption}
          technicalId={technicalId}
        />
      )}
    </div>
  );

  const textBlock = (
    <div className="space-y-6">
      <div className="space-y-3">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Heading level="h2" className="leading-snug">
          {title}
        </Heading>
      </div>

      {lead && (
        <BodyText size="lg" className="font-normal text-[#173C62]">
          {lead}
        </BodyText>
      )}

      {paragraphs.map((p, idx) => (
        <BodyText key={idx} size="base">
          {p}
        </BodyText>
      ))}

      {specs.length > 0 && (
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E7EB]">
          {specs.map((spec, i) => (
            <div key={i} className="space-y-1">
              <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#64748B]">
                {spec.label}
              </span>
              <span className="block font-sans text-xs sm:text-sm font-semibold text-[#0B1320]">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {action && <div className="pt-2">{action}</div>}
    </div>
  );

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${className}`}>
      <div className={`lg:col-span-7 ${isLeft ? 'order-1' : 'order-1 lg:order-2'}`}>
        {mediaBlock}
      </div>
      <div className={`lg:col-span-5 ${isLeft ? 'order-2' : 'order-2 lg:order-1'}`}>
        {textBlock}
      </div>
    </div>
  );
};
