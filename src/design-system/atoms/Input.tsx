import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error = false,
      fullWidth = true,
      leadingIcon,
      trailingIcon,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const borderClass = error
      ? 'border-[#D92D20] focus:border-[#D92D20] focus:ring-1 focus:ring-[#D92D20]'
      : 'border-[#CBD5E1] hover:border-[#94A3B8] focus:border-[#173C62] focus:ring-2 focus:ring-[#173C62]/20';

    return (
      <div className={`relative ${fullWidth ? 'w-full' : 'inline-block'}`}>
        {leadingIcon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none">
            {leadingIcon}
          </div>
        )}

        <input
          ref={ref}
          disabled={disabled}
          className={`h-11 ${
            leadingIcon ? 'pl-10' : 'pl-4'
          } ${trailingIcon ? 'pr-10' : 'pr-4'} py-2 text-sm text-[#0B1320] bg-white border ${borderClass} rounded-[12px] shadow-none outline-none transition-all placeholder:text-[#94A3B8] disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed ${
            fullWidth ? 'w-full' : ''
          } ${className}`}
          {...props}
        />

        {trailingIcon && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B]">
            {trailingIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
