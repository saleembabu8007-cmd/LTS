import React from 'react';

interface TextOversizedWhitespaceProps {
  eyebrow?: string;
  headline: string;
  supportingText: string;
  actions?: React.ReactNode;
  className?: string;
}

export const TextOversizedWhitespace: React.FC<TextOversizedWhitespaceProps> = ({
  eyebrow,
  headline,
  supportingText,
  actions,
  className = '',
}) => {
  return (
    <section className={`py-28 lg:py-40 bg-white border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-6">
          {eyebrow && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#999999] block">
              {eyebrow}
            </span>
          )}

          <h2 className="editorial-display-headline text-[#0B1320] leading-[1.04] max-w-5xl">
            {headline}
          </h2>

          <p className="editorial-lead max-w-3xl pt-2">
            {supportingText}
          </p>
        </div>

        {actions && (
          <div className="pt-4 flex flex-wrap items-center gap-6">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
};
