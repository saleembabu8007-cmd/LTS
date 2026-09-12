import React from 'react';
import { Container } from '../structures/Container';
import { LogoItem, LogoItemProps } from '../molecules/LogoItem';

export interface LogoFieldProps {
  logos: LogoItemProps[];
  columns?: 3 | 4 | 5 | 6;
  light?: boolean;
  className?: string;
}

/**
 * LogoField: Open, borderless field for statutory authority & client logos.
 */
export const LogoField: React.FC<LogoFieldProps> = ({
  logos,
  columns = 6,
  light = false,
  className = '',
}) => {
  const colClasses = {
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <div className={`w-full py-8 ${className}`}>
      <Container>
        <div className={`grid ${colClasses[columns]} gap-6 items-center`}>
          {logos.map((logo, idx) => (
            <LogoItem
              key={idx}
              name={logo.name}
              category={logo.category}
              clearanceLevel={logo.clearanceLevel}
              logoSrc={logo.logoSrc}
              light={light}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
