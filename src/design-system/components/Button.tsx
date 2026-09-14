import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'textLink'
  | 'darkPrimary'
  | 'darkSecondary';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  isLoading?: boolean;
  href?: string;
  external?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  iconLeading,
  iconTrailing,
  isLoading = false,
  disabled = false,
  href,
  external = false,
  className = '',
  onClick,
  ...props
}) => {
  const isTextLink = variant === 'textLink';

  // Standard soft-radius 12px, never sharp 2px
  const baseClasses = isTextLink
    ? 'inline-flex items-center gap-1.5 font-semibold typography-btn text-[#173C62] hover:text-[#12304F] transition-colors select-none group focus:outline-none'
    : 'inline-flex items-center justify-center font-semibold typography-btn rounded-[12px] transition-colors duration-[180ms] ease-out select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2 shadow-none';

  const sizeClasses: Record<ButtonSize, string> = isTextLink
    ? {
        sm: 'text-[11px] tracking-[0.08em]',
        md: 'text-xs tracking-[0.08em]',
        lg: 'text-xs tracking-[0.1em]',
      }
    : {
        sm: 'text-[11px] px-4 py-1.5 gap-2 tracking-[0.08em] min-h-[38px]',
        md: 'text-xs px-5 py-2 gap-2.5 tracking-[0.08em] min-h-[44px]',
        lg: 'text-xs px-6 py-2.5 gap-3 tracking-[0.1em] min-h-[48px]',
      };

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-[#173C62] text-white hover:bg-[#12304F] active:bg-[#0F263E] border border-[#173C62] shadow-xs',
    secondary:
      'bg-[#F8FAFC] text-[#0B1320] border border-[#E5E7EB] hover:border-[#173C62] hover:text-[#173C62]',
    outline:
      'bg-transparent text-[#173C62] border border-[#173C62] hover:bg-[#173C62] hover:text-white active:bg-[#0F263E]',
    textLink:
      'bg-transparent border-0 p-0 shadow-none hover:underline underline-offset-4',
    darkPrimary:
      'bg-white text-[#173C62] hover:bg-slate-100 active:bg-slate-200 border border-white shadow-xs',
    darkSecondary:
      'bg-transparent text-white border border-white/30 hover:border-white hover:bg-white hover:text-[#173C62]',
  };

  const disabledClasses =
    disabled || isLoading ? 'opacity-40 cursor-not-allowed pointer-events-none' : '';

  const buttonContent = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-3.5 w-3.5 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        iconLeading
      )}
      <span>{children}</span>
      {!isLoading &&
        (iconTrailing ? (
          <span className="shrink-0 transition-transform duration-[180ms] ease-out group-hover:translate-x-[3px]">
            {iconTrailing}
          </span>
        ) : (
          isTextLink && (
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-[180ms] ease-out group-hover:translate-x-[3px]" />
          )
        ))}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`}
        onClick={onClick as any}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export interface TextLinkProps {
  href?: string;
  onClick?: () => void;
  external?: boolean;
  arrow?: boolean;
  light?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const TextLink: React.FC<TextLinkProps> = ({
  href,
  onClick,
  external = false,
  arrow = true,
  light = false,
  className = '',
  children,
}) => {
  const textColor = light
    ? 'text-white hover:text-slate-300'
    : 'text-[#173C62] hover:text-[#12304F]';

  const content = (
    <>
      <span className="hover:underline underline-offset-4 font-semibold">{children}</span>
      {arrow && !external && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 shrink-0" />
      )}
      {arrow && external && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
      )}
    </>
  );

  const combinedClasses = `inline-flex items-center gap-1.5 typography-btn ${textColor} transition-colors select-none group cursor-pointer ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};
