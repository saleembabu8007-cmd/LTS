import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { ServicePageData } from '../../types/serviceTemplate';
import { Button } from '../../design-system/atoms/Button';
import { CORPORATE_INFO } from '../../data/corporateData';

interface ServiceCtaModuleProps {
  data: ServicePageData;
  onNavigate: (slug: string) => void;
}

/**
 * Section 08 — Quiet Image-Led Closing CTA
 * Conforms strictly to LTSGROUP Service Detail Rules:
 * - Quiet image-led closing section
 * - Replaces old commercial estimation desk completely
 * - Simple statement, clean CTA, direct contact channels
 */
export const ServiceCtaModule: React.FC<ServiceCtaModuleProps> = ({ data, onNavigate }) => {
  const { cta, pillar, title } = data;

  const contactEmail = cta.contactEmail || CORPORATE_INFO.contact.emailTenders;
  const contactPhone = cta.contactHotline || CORPORATE_INFO.contact.telephone;

  return (
    <section
      aria-label="Service Consultation Closing"
      className="relative py-20 lg:py-28 bg-[#0B1C2F] text-white overflow-hidden text-left"
    >
      {/* Quiet Architectural Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-building.jpg"
          alt="LTS Consultation Desk"
          className="w-full h-full object-cover object-center opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/85 to-[#0B1C2F]/70" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono text-slate-300 uppercase tracking-[0.24em] font-semibold block mb-2">
            CONSULTATION &bull; {pillar.toUpperCase()}
          </span>

          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight leading-tight">
            {cta.headline || `Initiate a consultation on ${title}.`}
          </h2>

          <p className="mt-4 text-sm text-slate-300 leading-relaxed font-normal">
            {cta.subheadline ||
              'Connect directly with our senior engineering team to review project specifications, equipment schedules, or authority submittal parameters.'}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="white"
              size="md"
              shape="capsule"
              onClick={() => onNavigate('/contact')}
              className="text-[12px] tracking-[0.06em]"
            >
              {cta.primaryButtonText || 'Start a consultation'} →
            </Button>
          </div>

          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap gap-6 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="hover:text-white">
                {contactPhone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <a href={`mailto:${contactEmail}`} className="hover:text-white">
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
