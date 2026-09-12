import React from 'react';
import { Container } from '../structures/Container';

export type SplitRatio = '50/50' | '60/40' | '40/60' | '5/7' | '7/5';

export interface EditorialSplitProps {
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: SplitRatio;
  align?: 'start' | 'center' | 'end';
  reverseOnMobile?: boolean;
  spacing?: 'standard' | 'spacious' | 'compact';
  fullWidth?: boolean;
  className?: string;
}

/**
 * EditorialSplit: Foundational layout primitive for asymmetric editorial compositions.
 * Replaces repetitive card grids with composed left/right content rails.
 */
export const EditorialSplit: React.FC<EditorialSplitProps> = ({
  left,
  right,
  ratio = '5/7',
  align = 'center',
  reverseOnMobile = false,
  spacing = 'standard',
  fullWidth = false,
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

  const spacingClasses = {
    compact: 'py-8 sm:py-12 gap-8 lg:gap-12',
    standard: 'py-12 sm:py-16 lg:py-20 gap-10 lg:gap-16',
    spacious: 'py-16 sm:py-24 lg:py-32 gap-12 lg:gap-24',
  };

  const orderLeft = reverseOnMobile ? 'order-2 lg:order-1' : '';
  const orderRight = reverseOnMobile ? 'order-1 lg:order-2' : '';

  const content = (
    <div className={`grid grid-cols-1 lg:grid-cols-12 ${alignClasses[align]} ${spacingClasses[spacing]} ${className}`}>
      <div className={`${ratioClasses[ratio].left} ${orderLeft}`}>
        {left}
      </div>
      <div className={`${ratioClasses[ratio].right} ${orderRight}`}>
        {right}
      </div>
    </div>
  );

  if (fullWidth) return content;

  return <Container>{content}</Container>;
};
