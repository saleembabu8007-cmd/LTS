import React from 'react';

export type TagVariant = 'neutral' | 'brand' | 'dark' | 'success' | 'warning' | 'error';
export type TagShape = 'square' | 'pill';

export interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  shape?: TagShape;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'neutral',
  shape = 'pill',
  className = '',
}) => {
  const shapeClass = shape === 'pill' ? 'rounded-full' : 'rounded-[2px]';

  const variantClasses: Record<TagVariant, string> = {
    neutral: 'bg-[#F8FAFC] text-[#4A5568] border border-[#E5E7EB]',
    brand: 'bg-[#EDF3F9] text-[#173C62] border border-[#CBD5E1]',
    dark: 'bg-[#0B1C2F] text-white border border-white/10',
    success: 'bg-[#ECFDF3] text-[#079455] border border-[#A6F4C5]',
    warning: 'bg-[#FEF0C7] text-[#DC6803] border border-[#FEDF89]',
    error: 'bg-[#FEF3F2] text-[#D92D20] border border-[#FECDCA]',
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[10px] sm:text-[10.5px] font-mono font-medium uppercase tracking-[0.06em] select-none ${shapeClass} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
