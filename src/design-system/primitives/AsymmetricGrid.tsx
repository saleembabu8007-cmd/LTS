import React from 'react';
import { Container } from '../structures/Container';

export interface AsymmetricGridProps {
  primary: React.ReactNode;
  secondaryTop: React.ReactNode;
  secondaryBottom: React.ReactNode;
  primaryPosition?: 'left' | 'right';
  className?: string;
}

/**
 * AsymmetricGrid: Non-uniform 7/5 column composition for dynamic editorial rhythm.
 */
export const AsymmetricGrid: React.FC<AsymmetricGridProps> = ({
  primary,
  secondaryTop,
  secondaryBottom,
  primaryPosition = 'left',
  className = '',
}) => {
  const isLeft = primaryPosition === 'left';

  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Primary Feature (7 cols) */}
          <div className={`lg:col-span-7 ${isLeft ? 'order-1' : 'order-1 lg:order-2'}`}>
            {primary}
          </div>

          {/* Secondary Stack (5 cols) */}
          <div className={`lg:col-span-5 flex flex-col justify-between gap-8 ${isLeft ? 'order-2' : 'order-2 lg:order-1'}`}>
            <div className="flex-1">{secondaryTop}</div>
            <div className="flex-1">{secondaryBottom}</div>
          </div>
        </div>
      </Container>
    </section>
  );
};
