import React from 'react';

export type SectionSpacing = 'compact' | 'standard' | 'spacious' | 'none';
export type SectionTone = 'white' | 'subtle' | 'offwhite' | 'dark';

export interface SectionProps {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  tone?: SectionTone;
  hairlineTop?: boolean;
  hairlineBottom?: boolean;
  id?: string;
  className?: string;
  as?: 'section' | 'div' | 'article';
}

export const Section: React.FC<SectionProps> = ({
  children,
  spacing = 'standard',
  tone = 'white',
  hairlineTop = false,
  hairlineBottom = true,
  id,
  className = '',
  as: Component = 'section',
}) => {
  const spacingClasses: Record<SectionSpacing, string> = {
    none: 'py-0',
    compact: 'editorial-section-tight',
    standard: 'editorial-section',
    spacious: 'editorial-section-spacious',
  };

  const toneClasses: Record<SectionTone, string> = {
    white: 'bg-white text-[#0B1320]',
    subtle: 'bg-[#F8FAFC] text-[#0B1320]',
    offwhite: 'bg-[#FAFAFA] text-[#0B1320]',
    dark: 'bg-[#0B1C2F] text-white',
  };

  const isDark = tone === 'dark';
  const topBorderClass = hairlineTop ? (isDark ? 'border-t border-white/10' : 'border-t border-[#E5E7EB]') : '';
  const bottomBorderClass = hairlineBottom ? (isDark ? 'border-b border-white/10' : 'border-b border-[#E5E7EB]') : '';

  return (
    <Component
      id={id}
      className={`relative w-full ${spacingClasses[spacing]} ${toneClasses[tone]} ${topBorderClass} ${bottomBorderClass} ${className}`}
    >
      {children}
    </Component>
  );
};
