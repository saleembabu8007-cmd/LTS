import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  onClick?: () => void;
  external?: boolean;
  arrow?: boolean;
  light?: boolean;
  size?: 'sm' | 'base';
}

export const TextLink: React.FC<TextLinkProps> = ({
  children,
  href,
  onClick,
  external = false,
  arrow = true,
  light = false,
  size = 'base',
  className = '',
  ...props
}) => {
  const baseColor = light
    ? 'text-white hover:text-slate-200'
    : 'text-[#173C62] hover:text-[#102B47]';
  const sizeClass = size === 'sm' ? 'text-xs' : 'text-xs sm:text-[13px]';

  const content = (
    <>
      <span className="font-semibold uppercase tracking-[0.08em] underline-offset-4 group-hover:underline">
        {children}
      </span>
      {arrow && !external && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1 shrink-0" />
      )}
      {arrow && external && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
      )}
    </>
  );

  const sharedClasses = `group inline-flex items-center gap-1.5 font-sans transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#173C62] ${baseColor} ${sizeClass} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={sharedClasses}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={sharedClasses}>
      {content}
    </button>
  );
};
