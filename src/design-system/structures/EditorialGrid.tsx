import React from 'react';

export type GridCols = 12 | 8 | 6 | 4 | 3 | 2 | 1;

export interface EditorialGridProps {
  children: React.ReactNode;
  cols?: GridCols;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const EditorialGrid: React.FC<EditorialGridProps> = ({
  children,
  cols = 12,
  gap = 'lg',
  className = '',
}) => {
  const gapClasses = {
    sm: 'gap-4 sm:gap-5',
    md: 'gap-5 sm:gap-6 lg:gap-8',
    lg: 'gap-6 sm:gap-8 lg:gap-10',
    xl: 'gap-8 sm:gap-10 lg:gap-12',
  };

  const colClasses: Record<GridCols, string> = {
    12: 'editorial-grid-12',
    8: 'editorial-grid-8',
    6: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6',
    4: 'editorial-grid-4',
    3: 'grid grid-cols-1 md:grid-cols-3',
    2: 'grid grid-cols-1 md:grid-cols-2',
    1: 'grid grid-cols-1',
  };

  return (
    <div className={`${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};
