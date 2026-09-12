import React from 'react';
import { ArrowRight, ArrowUpRight, ArrowLeft, ChevronDown } from 'lucide-react';

export type ArrowDirection = 'right' | 'up-right' | 'left' | 'down';
export type ArrowSize = 'sm' | 'md' | 'lg';

export interface ArrowProps {
  direction?: ArrowDirection;
  size?: ArrowSize;
  className?: string;
}

export const Arrow: React.FC<ArrowProps> = ({
  direction = 'right',
  size = 'md',
  className = '',
}) => {
  const sizeClasses: Record<ArrowSize, string> = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4',
  };

  const currentSize = sizeClasses[size];

  switch (direction) {
    case 'up-right':
      return <ArrowUpRight className={`${currentSize} shrink-0 ${className}`} aria-hidden="true" />;
    case 'left':
      return <ArrowLeft className={`${currentSize} shrink-0 ${className}`} aria-hidden="true" />;
    case 'down':
      return <ChevronDown className={`${currentSize} shrink-0 ${className}`} aria-hidden="true" />;
    case 'right':
    default:
      return <ArrowRight className={`${currentSize} shrink-0 ${className}`} aria-hidden="true" />;
  }
};
