import React from 'react';
import { Container } from '../structures/Container';

export interface EditorialSplitSectionProps {
  eyebrow?: string;
  title?: string | React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: '7/5' | '5/7' | '8/4' | '6/6';
  align?: 'start' | 'center' | 'end';
  reverseOnMobile?: boolean;
  spacing?: 'standard' | 'spacious' | 'compact';
  tone?: 'white' | 'subtle';
  className?: string;
}

/**
 * EditorialSplitSection: Master unboxed asymmetric layout container (Rule 08)
 * - Implements approved 7/5, 5/7, and 8/4 asymmetric compositions
 * - Zero nested card boxes; content rests directly on clean canvas
 * - Responsive: re-composed for mobile without clumsy box stacking
 */
export const EditorialSplitSection: React.FC<EditorialSplitSectionProps> = ({
  eyebrow,
  title,
  left,
  right,
  ratio = '7/5',
  align = 'center',
  reverseOnMobile = false,
  spacing = 'standard',
  tone = 'white',
  className = '',
}) => {
  const ratioClasses = {
    '7/5': { left: 'lg:col-span-7', right: 'lg:col-span-5' },
    '5/7': { left: 'lg:col-span-5', right: 'lg:col-span-7' },
    '8/4': { left: 'lg:col-span-8', right: 'lg:col-span-4' },
    '6/6': { left: 'lg:col-span-6', right: 'lg:col-span-6' },
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  };

  const spacingClasses = {
    compact: 'py-10 sm:py-14',
    standard: 'py-16 sm:py-20 lg:py-24',
    spacious: 'py-20 sm:py-28 lg:py-32',
  };

  const toneClasses = {
    white: 'bg-white',
    subtle: 'bg-[#F8FAFC]',
  };

  const orderLeft = reverseOnMobile ? 'order-2 lg:order-1' : 'order-1';
  const orderRight = reverseOnMobile ? 'order-1 lg:order-2' : 'order-2';

  return (
    <section className={`${toneClasses[tone]} ${spacingClasses[spacing]} border-b border-[#E5E7EB] ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-10 sm:mb-14 space-y-2">
            {eyebrow && (
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight">
                {title}
              </h2>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 ${alignClasses[align]}`}>
          <div className={`${ratioClasses[ratio].left} ${orderLeft}`}>
            {left}
          </div>
          <div className={`${ratioClasses[ratio].right} ${orderRight}`}>
            {right}
          </div>
        </div>
      </Container>
    </section>
  );
};
