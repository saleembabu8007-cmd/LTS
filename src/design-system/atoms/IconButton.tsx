import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  variant?: 'default' | 'primary' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  variant = 'default',
  size = 'md',
  className = '',
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-2.5',
  };

  const variantStyles = {
    default:
      'bg-white text-[#0B1320] border border-[#E5E7EB] hover:border-[#173C62] hover:text-[#173C62] active:bg-[#F8FAFC]',
    primary:
      'bg-[#173C62] text-white border border-[#173C62] hover:bg-[#102B47] active:bg-[#0B1C2F]',
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
      className={`inline-flex items-center justify-center rounded-[12px] shadow-none transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2 disabled:opacity-30 disabled:pointer-events-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};
