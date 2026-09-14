import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from './Button';

export interface CTAProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryActionLabel?: string;
  onPrimaryAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  directPhone?: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export const CTA: React.FC<CTAProps> = ({
  eyebrow = 'COMMERCIAL ENGAGEMENT',
  title = 'Ready to commission electromechanical precision for your assets?',
  description = 'Direct access to senior engineering principals, detailed technical RFPs, and SLA-backed maintenance proposals.',
  primaryActionLabel = 'Submit Tender / RFP',
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  directPhone = '+971 4 267 1212',
  variant = 'dark',
  className = '',
}) => {
  const isDark = variant === 'dark';

  return (
    <section
      className={`editorial-section ${
        isDark
          ? 'bg-[#173C62] text-white border-y border-white/15'
          : 'bg-[#FAFAFA] text-[#0B1320] border-y border-[#E5E7EB]'
      } ${className}`}
    >
      <div className="lts-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-16">
          {/* Narrative Block */}
          <div className="max-w-3xl space-y-4">
            {eyebrow && (
              <span
                className={`typography-label block ${
                  isDark ? 'text-slate-400' : 'text-[#999999]'
                }`}
              >
                {eyebrow}
              </span>
            )}

            <h2
              className={`typography-h2 ${
                isDark ? 'text-white' : 'text-[#0B1320]'
              }`}
            >
              {title}
            </h2>

            {description && (
              <p
                className={`typography-body-lg max-w-2xl pt-1 ${
                  isDark ? 'text-slate-300' : 'text-[#4A5568]'
                }`}
              >
                {description}
              </p>
            )}
          </div>

          {/* Action Cluster */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {primaryActionLabel && (
              <Button
                variant={isDark ? 'darkPrimary' : 'primary'}
                size="lg"
                onClick={onPrimaryAction}
                iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}
              >
                {primaryActionLabel}
              </Button>
            )}

            {secondaryActionLabel && onSecondaryAction && (
              <Button
                variant={isDark ? 'darkSecondary' : 'secondary'}
                size="lg"
                onClick={onSecondaryAction}
              >
                {secondaryActionLabel}
              </Button>
            )}

            {!secondaryActionLabel && directPhone && (
              <a
                href={`tel:${directPhone.replace(/\s+/g, '')}`}
                className={`inline-flex items-center gap-2 typography-btn rounded-[12px] min-h-[44px] text-xs sm:text-[13px] px-6 py-2.5 tracking-[0.14em] transition-colors border ${
                  isDark
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-[#CBD5E1] text-[#173C62] hover:bg-slate-100 hover:border-[#173C62]'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-[#999999]" />
                <span>Call {directPhone}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
