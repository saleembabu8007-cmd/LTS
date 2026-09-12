import React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  description?: string;
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
    const generatedId = id || (label ? `cb-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);

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
            type="checkbox"
            id={generatedId}
            checked={checked}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div
            className={`w-5 h-5 rounded-[6px] border transition-all flex items-center justify-center peer-focus-visible:ring-2 peer-focus-visible:ring-[#173C62] peer-focus-visible:ring-offset-1 ${
              error
                ? 'border-[#D92D20]'
                : 'border-[#CBD5E1] group-hover:border-[#173C62]'
            } peer-checked:bg-[#173C62] peer-checked:border-[#173C62] bg-white`}
          >
            <svg
              className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
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

Checkbox.displayName = 'Checkbox';
