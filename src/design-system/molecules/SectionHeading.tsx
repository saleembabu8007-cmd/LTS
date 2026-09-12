import React from 'react';
import { Eyebrow } from '../atoms/Eyebrow';
import { Heading, HeadingLevel } from '../atoms/Heading';
import { BodyText } from '../atoms/BodyText';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  level?: HeadingLevel;
  action?: React.ReactNode;
  light?: boolean;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  level = 'h2',
  action,
  light = false,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`space-y-4 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-4xl'
      } ${className}`}
    >
      {eyebrow && (
        <Eyebrow light={light} withLine={!isCenter} className={isCenter ? 'justify-center' : ''}>
          {eyebrow}
        </Eyebrow>
      )}

      <div className={action ? 'flex flex-col sm:flex-row sm:items-end justify-between gap-6' : ''}>
        <Heading level={level} light={light} className="leading-snug">
          {title}
        </Heading>

        {action && <div className="shrink-0 pb-1">{action}</div>}
      </div>

      {description && (
        <BodyText size="lg" light={light} editorialMeasure={!isCenter} className={isCenter ? 'mx-auto' : ''}>
          {description}
        </BodyText>
      )}
    </div>
  );
};
