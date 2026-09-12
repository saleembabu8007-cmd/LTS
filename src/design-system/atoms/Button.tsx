import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'white';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape = 'capsule' | 'rounded' | 'sharp';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      shape = 'capsule',
      iconLeading,
      iconTrailing,
      fullWidth = false,
      className = '',
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    // Restrained rounded capsule (rounded-full) or 10-12px soft radius; zero shadows
    const shapeStyles: Record<ButtonShape, string> = {
      capsule: 'rounded-full',
      rounded: 'rounded-[12px]',
      sharp: 'rounded-[10px]',
    };

    const baseStyles =
      'group inline-flex items-center justify-center font-sans font-semibold uppercase transition-colors duration-[180ms] ease-out cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed shadow-none whitespace-nowrap';

    // Size Scale: Standardized heights (38px, 44px, 48px)
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'text-[11px] px-4 py-1.5 gap-2 tracking-[0.08em] min-h-[38px]',
      md: 'text-[12px] px-5 py-2 gap-2.5 tracking-[0.08em] min-h-[44px]',
      lg: 'text-[13px] px-6 py-2.5 gap-3 tracking-[0.10em] min-h-[48px]',
    };

    // Variant Palette (No drop shadows, 1px structural borders)
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-[#173C62] text-white hover:bg-[#102B47] active:bg-[#0B1C2F] border border-[#173C62]',
      secondary:
        'bg-transparent text-[#0B1320] hover:bg-[#F8FAFC] active:bg-[#EDF3F9] border border-[#CBD5E1] hover:border-[#173C62]',
      outline:
        'bg-transparent text-[#173C62] hover:bg-[#EDF3F9] active:bg-[#DCE7F2] border border-[#173C62]',
      text:
        'bg-transparent text-[#173C62] hover:text-[#102B47] border-0 p-0 hover:underline underline-offset-4 rounded-none min-h-0',
      white:
        'bg-white text-[#173C62] hover:bg-[#F8FAFC] active:bg-[#EDF3F9] border border-white',
    };

    const widthStyle = fullWidth ? 'w-full' : '';
    const actualShapeClass = variant === 'text' ? 'rounded-none' : shapeStyles[shape];

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`${baseStyles} ${actualShapeClass} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
        {...props}
      >
        {iconLeading && <span className="shrink-0">{iconLeading}</span>}
        <span>{children}</span>
        {iconTrailing && (
          <span className="shrink-0 transition-transform duration-[180ms] ease-out group-hover:translate-x-[3px]">
            {iconTrailing}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

