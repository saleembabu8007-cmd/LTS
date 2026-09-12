import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../components/Button';
import { CORPORATE_INFO } from '../../data/corporateData';

interface LargeCtaSectionProps {
  eyebrow?: string;
  headline: string;
  subhead: string;
  primaryActionLabel?: string;
  onPrimaryAction: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  className?: string;
}

export const LargeCtaSection: React.FC<LargeCtaSectionProps> = ({
  eyebrow = 'COMMERCIAL ENGAGEMENT',
  headline,
  subhead,
  primaryActionLabel = 'Submit Tender / RFP Package',
  onPrimaryAction,
  secondaryActionLabel = 'Contact Operations Desk',
  onSecondaryAction,
  className = '',
}) => {
  return (
    <section className={`py-24 lg:py-36 bg-[#173C62] text-white border-b border-white/10 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300 block">
              {eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white">
              {headline}
            </h2>
            <p className="text-base sm:text-lg text-slate-200 font-light max-w-2xl leading-relaxed pt-1">
              {subhead}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <Button
              variant="darkPrimary"
              size="lg"
              onClick={onPrimaryAction}
              className="w-full justify-center text-xs font-semibold tracking-wider uppercase py-4"
              iconTrailing={<ArrowRight className="w-4 h-4 text-[#173C62]" />}
            >
              {primaryActionLabel}
            </Button>

            {onSecondaryAction && (
              <Button
                variant="darkOutline"
                size="lg"
                onClick={onSecondaryAction}
                className="w-full justify-center text-xs font-semibold tracking-wider uppercase py-4"
              >
                {secondaryActionLabel}
              </Button>
            )}
          </div>
        </div>

        {/* Quiet Direct Metadata Strip */}
        <div className="pt-12 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 border border-white/15">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-semibold text-white block">Headquarters</span>
              <span>{CORPORATE_INFO.address.street}, {CORPORATE_INFO.address.city}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 border border-white/15">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-semibold text-white block">Operations Dispatch</span>
              <span>{CORPORATE_INFO.contact.telephone} (24/7)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 border border-white/15">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-semibold text-white block">Commercial Inquiries</span>
              <span>{CORPORATE_INFO.contact.emailTenders}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
