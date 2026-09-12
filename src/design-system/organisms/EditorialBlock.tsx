import React from 'react';
import { Container } from '../structures/Container';
import { Eyebrow } from '../atoms/Eyebrow';
import { Image, AspectRatio } from '../atoms/Image';
import { Caption } from '../atoms/Caption';
import { TextLink } from '../atoms/TextLink';

export interface EditorialBlockProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  body: string[];
  specs?: { label: string; value: string }[];
  actionLabel?: string;
  onAction?: () => void;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
  technicalId?: string;
  mediaPosition?: 'left' | 'right';
  aspectRatio?: AspectRatio;
  light?: boolean;
  className?: string;
}

export const EditorialBlock: React.FC<EditorialBlockProps> = ({
  eyebrow,
  title,
  lead,
  body,
  specs = [],
  actionLabel,
  onAction,
  imageSrc,
  imageAlt,
  caption,
  technicalId,
  mediaPosition = 'left',
  aspectRatio = '16/11',
  light = false,
  className = '',
}) => {
  const isLeft = mediaPosition === 'left';
  const textColor = light ? 'text-white' : 'text-[#0B1320]';
  const leadColor = light ? 'text-slate-300' : 'text-[#173C62]';
  const bodyColor = light ? 'text-slate-400' : 'text-[#4A5568]';

  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Media Rail */}
          <div className={`lg:col-span-6 ${isLeft ? 'order-1' : 'order-1 lg:order-2'} space-y-3`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              aspectRatio={aspectRatio}
              radius="image"
            />
            {caption && (
              <Caption technicalId={technicalId} light={light}>
                {caption}
              </Caption>
            )}
          </div>

          {/* Editorial Content Rail */}
          <div className={`lg:col-span-6 ${isLeft ? 'order-2' : 'order-2 lg:order-1'} space-y-6`}>
            <div className="space-y-3">
              {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
              <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold tracking-tight leading-tight ${textColor}`}>
                {title}
              </h2>
            </div>

            {lead && (
              <p className={`text-base sm:text-lg font-medium leading-relaxed ${leadColor}`}>
                {lead}
              </p>
            )}

            <div className="space-y-4">
              {body.map((p, idx) => (
                <p key={idx} className={`text-sm sm:text-base leading-relaxed ${bodyColor}`}>
                  {p}
                </p>
              ))}
            </div>

            {specs.length > 0 && (
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E7EB]">
                {specs.map((spec, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#64748B]">
                      {spec.label}
                    </span>
                    <span className={`block font-sans text-xs sm:text-sm font-semibold ${textColor}`}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {actionLabel && (
              <div className="pt-2">
                <TextLink light={light} onClick={onAction}>
                  {actionLabel}
                </TextLink>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
