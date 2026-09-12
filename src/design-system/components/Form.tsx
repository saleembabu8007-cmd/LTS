import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './Button';

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title?: string;
  eyebrow?: string;
  description?: string;
  submitLabel?: string;
  isSubmitting?: boolean;
  successMessage?: string;
  errorMessage?: string;
  secondaryAction?: React.ReactNode;
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({
  title,
  eyebrow,
  description,
  submitLabel = 'Submit Information',
  isSubmitting = false,
  successMessage,
  errorMessage,
  secondaryAction,
  children,
  className = '',
  onSubmit,
  ...props
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`bg-white border border-[#E5E7EB] rounded-[16px] p-6 sm:p-8 lg:p-10 space-y-8 ${className}`}
      {...props}
    >
      {(eyebrow || title || description) && (
        <div className="space-y-2 border-b border-[#E5E7EB] pb-6">
          {eyebrow && (
            <span className="typography-label text-[#999999] block">
              {eyebrow}
            </span>
          )}
          {title && (
            <h3 className="typography-h3 text-[#0B1320]">
              {title}
            </h3>
          )}
          {description && (
            <p className="typography-body text-[#4A5568] max-w-2xl">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Success Notification */}
      {successMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[8px] flex items-center gap-3 typography-body-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Error Notification */}
      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-[8px] flex items-center gap-3 typography-body-sm">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Form Fields Fieldset */}
      <div className="space-y-6">
        {children}
      </div>

      {/* Action Zone */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E5E7EB]">
        <div className="flex items-center gap-3">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}
          >
            {submitLabel}
          </Button>

          {secondaryAction}
        </div>

        <span className="typography-caption text-[#999999]">
          SLA-governed response within 24 business hours
        </span>
      </div>
    </form>
  );
};
