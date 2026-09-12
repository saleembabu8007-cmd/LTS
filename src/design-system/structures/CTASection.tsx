import React from 'react';
import { Section, SectionTone } from './Section';
import { Container } from './Container';
import { Eyebrow } from '../atoms/Eyebrow';
import { Heading } from '../atoms/Heading';
import { BodyText } from '../atoms/BodyText';
import { CTAGroup } from '../molecules/CTAGroup';

export interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryActionLabel: string;
  onPrimaryAction: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  directPhone?: string;
  directEmail?: string;
  tone?: SectionTone;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  eyebrow = 'COMMERCIAL COLLABORATION',
  title,
  description,
  primaryActionLabel,
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  directPhone = '+971 4 267 1212',
  directEmail = 'info@ltsgroup.ae',
  tone = 'dark',
  className = '',
}) => {
  const isDark = tone === 'dark';

  return (
    <Section tone={tone} spacing="standard" hairlineBottom={false} hairlineTop className={className}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Narrative (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <Eyebrow light={isDark}>{eyebrow}</Eyebrow>
              <Heading level="h2" light={isDark} className="leading-snug max-w-2xl">
                {title}
              </Heading>
            </div>

            <BodyText size="lg" light={isDark} editorialMeasure>
              {description}
            </BodyText>

            <div className="pt-2">
              <CTAGroup
                primaryLabel={primaryActionLabel}
                onPrimaryClick={onPrimaryAction}
                secondaryLabel={secondaryActionLabel}
                onSecondaryClick={onSecondaryAction}
                directPhone={directPhone}
                light={isDark}
              />
            </div>
          </div>

          {/* Right Direct Estimating Fast Track (4 Cols) */}
          <div
            className={`lg:col-span-4 p-6 sm:p-8 border rounded-none ${
              isDark ? 'border-white/10 bg-white/[0.03]' : 'border-[#E5E7EB] bg-[#F8FAFC]'
            }`}
          >
            <div className="space-y-4">
              <div>
                <span className={`block font-mono text-[10.5px] uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-[#64748B]'}`}>
                  Direct Commercial Desk
                </span>
                <p className={`text-xs sm:text-sm font-semibold mt-1 ${isDark ? 'text-white' : 'text-[#0B1320]'}`}>
                  Central Tendering &amp; Estimating
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className={isDark ? 'text-slate-400' : 'text-[#64748B]'}>Telephone:</span>
                  <a href={`tel:${directPhone.replace(/\s+/g, '')}`} className={`font-mono font-medium hover:underline ${isDark ? 'text-white' : 'text-[#173C62]'}`}>
                    {directPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className={isDark ? 'text-slate-400' : 'text-[#64748B]'}>Tenders:</span>
                  <a href={`mailto:${directEmail}`} className={`font-mono font-medium hover:underline ${isDark ? 'text-white' : 'text-[#173C62]'}`}>
                    {directEmail}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className={isDark ? 'text-slate-400' : 'text-[#64748B]'}>Location:</span>
                  <span className={`font-medium ${isDark ? 'text-slate-300' : 'text-[#0B1320]'}`}>
                    Dubai, United Arab Emirates
                  </span>
                </div>
              </div>

              <p className={`text-[11px] leading-relaxed pt-2 border-t ${isDark ? 'border-white/10 text-slate-400' : 'border-[#E5E7EB] text-[#64748B]'}`}>
                Guaranteed preliminary technical acknowledgement within 24 business hours for tender packages.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
