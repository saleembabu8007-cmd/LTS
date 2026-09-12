import React from 'react';
import { Container } from '../structures/Container';

export interface EditorialStackProps {
  children: React.ReactNode;
  align?: 'left' | 'center';
  maxWidth?: 'prose' | 'medium' | 'wide' | 'full';
  spacing?: 'compact' | 'standard' | 'spacious';
  className?: string;
}

/**
 * EditorialStack: Vertical rhythm primitive with strict optical character limits (55–75 chars).
 */
export const EditorialStack: React.FC<EditorialStackProps> = ({
  children,
  align = 'left',
  maxWidth = 'medium',
  spacing = 'standard',
  className = '',
}) => {
  const maxWidthClasses = {
    prose: 'max-w-2xl',        // ~65ch
    medium: 'max-w-3xl',
    wide: 'max-w-5xl',
    full: 'max-w-full',
  };

  const alignClasses = {
    left: 'text-left mr-auto',
    center: 'text-center mx-auto items-center',
  };

  const spacingClasses = {
    compact: 'py-8 sm:py-12 space-y-6',
    standard: 'py-14 sm:py-20 lg:py-24 space-y-8',
    spacious: 'py-20 sm:py-28 lg:py-36 space-y-12',
  };

  return (
    <section className={spacingClasses[spacing]}>
      <Container>
        <div className={`flex flex-col ${alignClasses[align]} ${maxWidthClasses[maxWidth]} ${className}`}>
          {children}
        </div>
      </Container>
    </section>
  );
};
