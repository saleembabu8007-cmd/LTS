import React from 'react';

export type NumberedBadgeVariant = 'brand' | 'muted' | 'inverse';
export type NumberedBadgeSize = 'sm' | 'md' | 'lg';

export interface NumberedBadgeProps {
  number: string | number;
  variant?: NumberedBadgeVariant;
  size?: NumberedBadgeSize;
  className?: string;
}

export const NumberedBadge: React.FC<NumberedBadgeProps> = ({
  number,
  variant = 'brand',
  size = 'md',
  className = '',
}) => {
  const formattedNumber =
    typeof number === 'number' && number < 10 ? `0${number}` : `${number}`;

  const sizeClasses: Record<NumberedBadgeSize, string> = {
    sm: 'text-xs tracking-wider',
    md: 'text-sm tracking-wider font-semibold',
    lg: 'text-lg sm:text-xl font-bold tracking-tight',
  };

  const variantClasses: Record<NumberedBadgeVariant, string> = {
    brand: 'text-[#173C62]',
    muted: 'text-[#94A3B8]',
    inverse: 'text-white/80',
  };

  return (
    <span
      className={`font-mono inline-block select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    >
      {formattedNumber}
    </span>
  );
};
