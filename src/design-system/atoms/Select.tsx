import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  hint?: string;
  id: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, hint, id, required, className = '', disabled, ...props }, ref) => {
    return (
      <div className="space-y-1.5 w-full">
        <label
          htmlFor={id}
          className="block text-xs font-sans font-semibold uppercase tracking-[0.08em] text-[#0B1320]"
        >
          {label} {required && <span className="text-red-600 ml-0.5">*</span>}
        </label>

        <div className="relative">
          <select
            ref={ref}
            id={id}
            required={required}
            disabled={disabled}
            className={`w-full typography-body-sm rounded-[11px] border transition-colors py-2.5 pl-3 pr-10 bg-white text-[#0B1320] appearance-none cursor-pointer shadow-none focus:outline-none disabled:bg-slate-50 disabled:cursor-not-allowed ${
              error
                ? 'border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600'
                : 'border-[#E5E7EB] hover:border-[#CBD5E1] focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62]'
            } ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-[#64748B]">
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>

        {hint && !error && (
          <p className="text-[11px] text-[#64748B] font-sans">{hint}</p>
        )}

        {error && (
          <p className="text-[11px] text-red-600 font-sans font-medium" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
