import React from 'react';

export type AsymmetricRatio = '7/5' | '5/7' | '8/4' | '4/8' | '9/3' | '3/9' | '6/6';

export interface AsymmetricSplitProps {
  ratio?: AsymmetricRatio;
  left: React.ReactNode;
  right: React.ReactNode;
  alignItems?: 'start' | 'center' | 'end';
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * AsymmetricSplit Layout Archetype
 * Implements Rule 08: Asymmetric Grid Families (7/5, 5/7, 8/4, 4/8, 9/3, 6/6).
 * No default 3-column bordered grids. Gives intentional architectural balance.
 */
export const AsymmetricSplit: React.FC<AsymmetricSplitProps> = ({
  ratio = '7/5',
  left,
  right,
  alignItems = 'start',
  gap = 'lg',
  className = '',
}) => {
  const ratioStyles: Record<AsymmetricRatio, { left: string; right: string }> = {
    '7/5': { left: 'lg:col-span-7', right: 'lg:col-span-5' },
    '5/7': { left: 'lg:col-span-5', right: 'lg:col-span-7' },
    '8/4': { left: 'lg:col-span-8', right: 'lg:col-span-4' },
    '4/8': { left: 'lg:col-span-4', right: 'lg:col-span-8' },
    '9/3': { left: 'lg:col-span-9', right: 'lg:col-span-3' },
    '3/9': { left: 'lg:col-span-3', right: 'lg:col-span-9' },
    '6/6': { left: 'lg:col-span-6', right: 'lg:col-span-6' },
  };

  const alignStyles = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  }[alignItems];

  const gapStyles = {
    sm: 'gap-6 md:gap-8',
    md: 'gap-8 md:gap-12',
    lg: 'gap-10 md:gap-16',
    xl: 'gap-12 md:gap-20',
  }[gap];

  const { left: leftSpan, right: rightSpan } = ratioStyles[ratio];

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 ${gapStyles} ${alignStyles} ${className}`}>
      <div className={leftSpan}>{left}</div>
      <div className={rightSpan}>{right}</div>
    </div>
  );
};
