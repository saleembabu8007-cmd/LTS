import React from 'react';

export type BodyTextSize = 'lg' | 'base' | 'sm';

export interface BodyTextProps {
  children: React.ReactNode;
  size?: BodyTextSize;
  light?: boolean;
  editorialMeasure?: boolean;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export const BodyText: React.FC<BodyTextProps> = ({
  children,
  size = 'base',
  light = false,
  editorialMeasure = true,
  className = '',
  as = 'p',
}) => {
  const Component = as;

  const sizeClasses: Record<BodyTextSize, string> = {
    lg: 'typography-body-lg',
    base: 'typography-body',
    sm: 'typography-body-sm',
  };

  const colorClasses: Record<BodyTextSize, string> = {
    lg: light ? 'text-slate-200' : 'text-[#334155]',
    base: light ? 'text-slate-300' : 'text-[#334155]',
    sm: light ? 'text-slate-400' : 'text-[#4A5568]',
  };

  const measureClass = editorialMeasure ? 'max-prose-editorial' : '';

  return (
    <Component
      className={`${sizeClasses[size]} ${colorClasses[size]} ${measureClass} ${className}`}
    >
      {children}
    </Component>
  );
};
