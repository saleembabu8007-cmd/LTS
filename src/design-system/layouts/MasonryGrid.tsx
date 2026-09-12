import React from 'react';

export interface MasonryGridProps {
  children: React.ReactNode[];
  columns?: 2 | 3;
  className?: string;
}

/**
 * MasonryGrid Archetype (I: Masonry-like composition)
 * Asymmetric, non-uniform vertical distribution that breaks the rigid 3-column equal height formula.
 */
export const MasonryGrid: React.FC<MasonryGridProps> = ({
  children,
  columns = 2,
  className = '',
}) => {
  if (columns === 2) {
    const leftItems = children.filter((_, idx) => idx % 2 === 0);
    const rightItems = children.filter((_, idx) => idx % 2 === 1);

    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 ${className}`}>
        <div className="flex flex-col gap-8 md:gap-10">{leftItems}</div>
        <div className="flex flex-col gap-8 md:gap-10 md:pt-12">{rightItems}</div>
      </div>
    );
  }

  // 3 Columns with staggered top offsets
  const col1 = children.filter((_, idx) => idx % 3 === 0);
  const col2 = children.filter((_, idx) => idx % 3 === 1);
  const col3 = children.filter((_, idx) => idx % 3 === 2);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      <div className="flex flex-col gap-8">{col1}</div>
      <div className="flex flex-col gap-8 lg:pt-10">{col2}</div>
      <div className="flex flex-col gap-8 lg:pt-20">{col3}</div>
    </div>
  );
};
