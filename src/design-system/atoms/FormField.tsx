import React from 'react';

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
  id: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, hint, id, required, className = '', disabled, ...props }, ref) => {
    return (
      <div className="space-y-1.5 w-full">
        <label
          htmlFor={id}
          className="block text-xs font-sans font-semibold uppercase tracking-[0.08em] text-[#0B1320]"
        >
          {label} {required && <span className="text-red-600 ml-0.5">*</span>}
        </label>

        <input
          ref={ref}
          id={id}
          required={required}
          disabled={disabled}
          className={`w-full typography-body-sm rounded-[11px] border transition-colors py-2.5 px-3 bg-white text-[#0B1320] placeholder:text-[#999999] shadow-none focus:outline-none disabled:bg-slate-50 disabled:cursor-not-allowed ${
            error
              ? 'border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600'
              : 'border-[#E5E7EB] hover:border-[#CBD5E1] focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62]'
          } ${className}`}
          {...props}
        />

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

FormField.displayName = 'FormField';
