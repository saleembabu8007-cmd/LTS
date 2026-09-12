import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  iconLeading?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  iconLeading,
  id,
  className = '',
  disabled,
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className={`block typography-label ${
            error ? 'text-red-700' : 'text-[#0B1320]'
          }`}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {iconLeading && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            {iconLeading}
          </div>
        )}
        <input
          id={inputId}
          disabled={disabled}
          className={`w-full typography-body-sm rounded-[2px] border transition-colors py-2.5 px-3 bg-white text-[#0B1320] placeholder:text-[#999999] focus:outline-none ${
            iconLeading ? 'pl-9' : ''
          } ${
            error
              ? 'border-red-400 focus:border-red-600'
              : 'border-[#E5E7EB] hover:border-slate-400 focus:border-[#173C62]'
          } ${
            disabled ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : ''
          } ${className}`}
          {...props}
        />
      </div>

      {error ? (
        <p className="typography-caption text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="typography-caption text-[#999999]">{helperText}</p>
      ) : null}
    </div>
  );
};

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  helperText,
  error,
  options,
  id,
  className = '',
  disabled,
  ...props
}) => {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={selectId}
          className={`block typography-label ${
            error ? 'text-red-700' : 'text-[#0B1320]'
          }`}
        >
          {label}
        </label>
      )}

      <select
        id={selectId}
        disabled={disabled}
        className={`w-full typography-body-sm rounded-[2px] border transition-colors py-2.5 px-3 bg-white text-[#0B1320] focus:outline-none ${
          error
            ? 'border-red-400 focus:border-red-600'
            : 'border-[#E5E7EB] hover:border-slate-400 focus:border-[#173C62]'
        } ${
          disabled ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : ''
        } ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error ? (
        <p className="typography-caption text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="typography-caption text-[#999999]">{helperText}</p>
      ) : null}
    </div>
  );
};

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  helperText,
  error,
  id,
  className = '',
  disabled,
  rows = 4,
  ...props
}) => {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label
          htmlFor={textareaId}
          className={`block typography-label ${
            error ? 'text-red-700' : 'text-[#0B1320]'
          }`}
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        rows={rows}
        disabled={disabled}
        className={`w-full typography-body-sm rounded-[2px] border transition-colors p-3 bg-white text-[#0B1320] placeholder:text-[#999999] focus:outline-none ${
          error
            ? 'border-red-400 focus:border-red-600'
            : 'border-[#E5E7EB] hover:border-slate-400 focus:border-[#173C62]'
        } ${
          disabled ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : ''
        } ${className}`}
        {...props}
      />

      {error ? (
        <p className="typography-caption text-red-600 font-medium">{error}</p>
      ) : helperText ? (
        <p className="typography-caption text-[#999999]">{helperText}</p>
      ) : null}
    </div>
  );
};

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  description,
  id,
  className = '',
  ...props
}) => {
  const checkboxId = id || label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex items-start gap-2.5">
      <input
        type="checkbox"
        id={checkboxId}
        className={`mt-0.5 h-4 w-4 rounded-[2px] border-[#E5E7EB] text-[#173C62] focus:ring-0 transition-colors ${className}`}
        {...props}
      />
      <label htmlFor={checkboxId} className="select-none cursor-pointer">
        <span className="typography-body-sm font-medium text-[#0B1320] block">
          {label}
        </span>
        {description && (
          <span className="typography-caption text-[#999999] block leading-tight mt-0.5">
            {description}
          </span>
        )}
      </label>
    </div>
  );
};

