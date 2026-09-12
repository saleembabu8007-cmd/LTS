import React from 'react';

export type SplitRatio = '50/50' | '60/40' | '40/60' | '5/7' | '7/5';

export interface SplitSectionProps {
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: SplitRatio;
  align?: 'start' | 'center' | 'end';
  reverseOnMobile?: boolean;
  gap?: 'default' | 'spacious';
  className?: string;
}

export const SplitSection: React.FC<SplitSectionProps> = ({
  left,
  right,
  ratio = '5/7',
  align = 'start',
  reverseOnMobile = false,
  gap = 'default',
  className = '',
}) => {
  const ratioClasses: Record<SplitRatio, { left: string; right: string }> = {
    '50/50': { left: 'lg:col-span-6', right: 'lg:col-span-6' },
    '60/40': { left: 'lg:col-span-7', right: 'lg:col-span-5' },
    '40/60': { left: 'lg:col-span-5', right: 'lg:col-span-7' },
    '5/7': { left: 'lg:col-span-5', right: 'lg:col-span-7' },
    '7/5': { left: 'lg:col-span-7', right: 'lg:col-span-5' },
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  };

  const gapClasses = {
    default: 'gap-10 lg:gap-16',
    spacious: 'gap-12 lg:gap-24',
  };

  const orderClassLeft = reverseOnMobile ? 'order-2 lg:order-1' : '';
  const orderClassRight = reverseOnMobile ? 'order-1 lg:order-2' : '';

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 ${gapClasses[gap]} ${alignClasses[align]} ${className}`}>
      <div className={`${ratioClasses[ratio].left} ${orderClassLeft}`}>
        {left}
      </div>
      <div className={`${ratioClasses[ratio].right} ${orderClassRight}`}>
        {right}
      </div>
    </div>
  );
};
