import React from 'react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center' | 'split';
  action?: React.ReactNode;
  light?: boolean;
  withDivider?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  light = false,
  withDivider = false,
  className = '',
}) => {
  const isCentered = align === 'center';
  const isSplit = align === 'split';

  if (isSplit) {
    return (
      <div
        className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 ${
          withDivider
            ? light
              ? 'border-b border-white/10 pb-8'
              : 'border-b border-[#E5E7EB] pb-8'
            : ''
        } ${className}`}
      >
        <div className="max-w-3xl space-y-3">
          {eyebrow && (
            <div className="flex items-center gap-2">
              <span className={`w-4 h-[1px] ${light ? 'bg-slate-400' : 'bg-[#173C62]'}`} />
              <span
                className={`typography-label block ${
                  light ? 'text-slate-300' : 'text-[#173C62]'
                }`}
              >
                {eyebrow}
              </span>
            </div>
          )}

          <h2
            className={`typography-h2 ${
              light ? 'text-white' : 'text-[#0B1320]'
            }`}
          >
            {title}
          </h2>
        </div>

        <div className="lg:max-w-md xl:max-w-lg space-y-4 shrink-0">
          {description && (
            <p
              className={`typography-body max-prose-editorial ${
                light ? 'text-slate-300' : 'text-[#4A5568]'
              }`}
            >
              {description}
            </p>
          )}

          {action && <div className="pt-1">{action}</div>}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${
        withDivider
          ? light
            ? 'border-b border-white/10 pb-8'
            : 'border-b border-[#E5E7EB] pb-8'
          : ''
      } ${isCentered ? 'text-center items-center' : ''} ${className}`}
    >
      <div className={`max-w-3xl space-y-3 ${isCentered ? 'mx-auto' : ''}`}>
        {eyebrow && (
          <div className={`flex items-center gap-2 ${isCentered ? 'justify-center' : ''}`}>
            <span className={`w-4 h-[1px] ${light ? 'bg-slate-400' : 'bg-[#173C62]'}`} />
            <span
              className={`typography-label block ${
                light ? 'text-slate-300' : 'text-[#173C62]'
              }`}
            >
              {eyebrow}
            </span>
          </div>
        )}

        <h2
          className={`typography-h2 ${
            light ? 'text-white' : 'text-[#0B1320]'
          }`}
        >
          {title}
        </h2>

        {description && (
          <p
            className={`typography-body-lg max-prose-editorial pt-1 ${
              light ? 'text-slate-300' : 'text-[#4A5568]'
            } ${isCentered ? 'mx-auto' : ''}`}
          >
            {description}
          </p>
        )}
      </div>

      {action && !isCentered && (
        <div className="shrink-0 pt-2 md:pt-0">{action}</div>
      )}

      {action && isCentered && (
        <div className="pt-4">{action}</div>
      )}
    </div>
  );
};
