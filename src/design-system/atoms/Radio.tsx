import React from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  description?: string;
  error?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      description,
      error = false,
      disabled = false,
      className = '',
      id,
      checked,
      ...props
    },
    ref
  ) => {
    const generatedId = id || (label ? `radio-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);

    return (
      <label
        htmlFor={generatedId}
        className={`inline-flex items-start gap-3 cursor-pointer select-none group ${
          disabled ? 'opacity-40 pointer-events-none cursor-not-allowed' : ''
        } ${className}`}
      >
        <div className="relative flex items-center justify-center mt-0.5">
          <input
            ref={ref}
            type="radio"
            id={generatedId}
            checked={checked}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div
            className={`w-5 h-5 rounded-full border transition-all flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-[#173C62] peer-focus-visible:ring-offset-1 ${
              error
                ? 'border-[#D92D20]'
                : 'border-[#CBD5E1] group-hover:border-[#173C62]'
            } peer-checked:border-[#173C62] bg-white`}
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#173C62] opacity-0 peer-checked:opacity-100 transition-opacity" />
          </div>
        </div>

        {(label || description) && (
          <div className="space-y-0.5">
            {label && (
              <span className="block text-sm font-sans text-[#0B1320] leading-tight">
                {label}
              </span>
            )}
            {description && (
              <span className="block text-xs text-[#64748B] leading-relaxed">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
