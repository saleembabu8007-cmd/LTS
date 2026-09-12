import React from 'react';

export interface NavTextProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
  light?: boolean;
  hasDropdown?: boolean;
  className?: string;
}

export const NavText = React.forwardRef<HTMLAnchorElement, NavTextProps>(
  (
    {
      children,
      active = false,
      light = false,
      hasDropdown = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseColor = light
      ? active
        ? 'text-white font-semibold'
        : 'text-slate-300 hover:text-white'
      : active
      ? 'text-[#173C62] font-semibold'
      : 'text-[#0B1320] hover:text-[#173C62]';

    return (
      <a
        ref={ref}
        className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-sans tracking-[0.02em] transition-colors cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px] py-1 px-1.5 ${baseColor} ${className}`}
        aria-current={active ? 'page' : undefined}
        {...props}
      >
        <span>{children}</span>
        {hasDropdown && (
          <span className="text-[10px] opacity-70 transition-transform group-hover:rotate-180">
            ▾
          </span>
        )}
      </a>
    );
  }
);

NavText.displayName = 'NavText';
