import React from 'react';

export type BadgeVariant =
  | 'tag'
  | 'neutral'
  | 'outline'
  | 'dark'
  | 'success'
  | 'navy';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'tag',
  size = 'md',
  icon,
  className = '',
}) => {
  const sizeClasses =
    size === 'sm'
      ? 'text-[10px] px-2 py-0.5 gap-1 tracking-wider'
      : 'text-[11px] px-2.5 py-1 gap-1.5 tracking-widest';

  const variantClasses: Record<BadgeVariant, string> = {
    // Understated architectural tag
    tag: 'bg-slate-100 text-slate-800 border border-slate-200 font-medium uppercase',
    // Muted slate
    neutral: 'bg-transparent text-slate-600 border border-slate-200 font-medium uppercase',
    // Clean outline
    outline: 'bg-transparent text-slate-700 border border-slate-300 font-medium uppercase',
    // Dark mode subtle badge
    dark: 'bg-white/10 text-white border border-white/15 font-medium uppercase',
    // Verified compliance / success
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-medium uppercase',
    // Navy brand
    navy: 'bg-[#173C62] text-white border border-[#173C62] font-medium uppercase',
  };

  return (
    <span
      className={`inline-flex items-center rounded-none select-none leading-none ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
};
