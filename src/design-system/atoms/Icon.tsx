import React from 'react';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';
export type IconColor = 'default' | 'brand' | 'muted' | 'inverse' | 'inherit';

export interface IconProps {
  icon: React.ComponentType<{ className?: string; size?: number | string; strokeWidth?: number | string }>;
  size?: IconSize;
  color?: IconColor;
  className?: string;
  'aria-label'?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'md',
  color = 'default',
  className = '',
  'aria-label': ariaLabel,
}) => {
  const sizeMap: Record<IconSize, number> = {
    sm: 14,
    md: 18,
    lg: 22,
    xl: 26,
  };

  const colorClasses: Record<IconColor, string> = {
    default: 'text-[#173C62]',
    brand: 'text-[#173C62]',
    muted: 'text-[#999999]',
    inverse: 'text-white',
    inherit: 'text-inherit',
  };

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${colorClasses[color]} ${className}`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <IconComponent
        size={sizeMap[size]}
        strokeWidth={1.5}
        className="transition-colors"
      />
    </span>
  );
};
