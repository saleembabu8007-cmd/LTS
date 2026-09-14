import React from 'react';

export type IconButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'light';
export type IconButtonSize = 'sm' | 'md' | 'lg';
export type IconButtonShape = 'rounded' | 'capsule';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  shape?: IconButtonShape;
  light?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  variant = 'default',
  size = 'md',
  shape = 'rounded',
  light = false,
  className = '',
  disabled,
  ...props
}) => {
  // Standardized Heights: 38px (sm), 44px (md), 48px (lg)
  const sizeStyles: Record<IconButtonSize, string> = {
    sm: 'w-[38px] h-[38px] p-2',
    md: 'w-[44px] h-[44px] p-2.5',
    lg: 'w-[48px] h-[48px] p-3',
  };

  const shapeStyles: Record<IconButtonShape, string> = {
    rounded: 'rounded-[12px]',
    capsule: 'rounded-full',
  };

  const focusRing = light
    ? 'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#173C62]'
    : 'focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2';

  const variantStyles: Record<IconButtonVariant, string> = {
    default:
      'bg-white text-[#0B1320] border border-[#E5E7EB] hover:border-[#173C62] hover:text-[#173C62] active:bg-[#F8FAFC]',
    primary:
      'bg-[#173C62] text-white border border-[#173C62] hover:bg-[#12304F] active:bg-[#0F263E]',
    secondary:
      'bg-transparent text-[#0B1320] border border-[#CBD5E1] hover:border-[#173C62] hover:bg-[#F8FAFC] active:bg-[#EDF3F9]',
    outline:
      'bg-transparent text-[#173C62] border border-[#173C62] hover:bg-[#EDF3F9] active:bg-[#DCE7F2]',
    ghost:
      'bg-transparent text-[#4A5568] border-0 hover:bg-[#F1F5F9] hover:text-[#0B1320]',
    light:
      'bg-white/10 text-white border border-white/20 hover:bg-white/20 active:bg-white/30',
  };

  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      className={`inline-flex items-center justify-center shadow-none transition-colors duration-[180ms] ease-out cursor-pointer select-none focus:outline-none ${focusRing} disabled:opacity-30 disabled:pointer-events-none ${shapeStyles[shape]} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};
