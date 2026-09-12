import React from 'react';

export type HeadingLevel = 'display' | 'h1' | 'h2' | 'h3' | 'h4';
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';

export interface HeadingProps {
  level: HeadingLevel;
  as?: HeadingTag;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
  id?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  as,
  children,
  light = false,
  className = '',
  id,
}) => {
  const defaultTags: Record<HeadingLevel, HeadingTag> = {
    display: 'h1',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
  };

  const Component = as || defaultTags[level];

  const levelClasses: Record<HeadingLevel, string> = {
    display: 'typography-display',
    h1: 'typography-h1',
    h2: 'typography-h2',
    h3: 'typography-h3',
    h4: 'typography-h4',
  };

  const colorClass = light ? 'text-white' : 'text-[#0B1320]';

  return (
    <Component
      id={id}
      className={`${levelClasses[level]} ${colorClass} ${className}`}
    >
      {children}
    </Component>
  );
};
