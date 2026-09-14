import React, { useState, useEffect } from 'react';
import {
  IconPhone,
  IconEmail,
  IconLocation,
  IconClock,
  IconArrow,
  IconCheck,
  IconShieldCheck,
} from '../../design-system/icons';
import { CORPORATE_INFO } from '../../data/corporateData';

interface ContactPageProps {
  onNavigate?: (slug: string) => void;
  initialTab?: string;
  initialScopeKey?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  initialTab,
  initialScopeKey,
}) => {
  // Business Area Options
  const businessAreas = [
    'Engineering & Construction (MEP, Solar EPC, Switchgear)',
    'Facilities Management (Hard Services, Retrofits, Pool Care)',
    'Trading (HVAC Spare Parts, Controls, VFDs, BTU Meters)',
    'General Corporate / Tender Prequalification',
  ];

  // Resolve starting business area if initialScopeKey or initialTab provided
  const getInitialBusinessArea = () => {
    if (initialScopeKey) {
      const lower = initialScopeKey.toLowerCase();
      if (lower.includes('solar') || lower.includes('mep') || lower.includes('switchgear') || lower.includes('engineering')) {
        return businessAreas[0];
      }
      if (lower.includes('facility') || lower.includes('chiller') || lower.includes('pool') || lower.includes('hvac')) {
        return businessAreas[1];
      }
      if (lower.includes('trading') || lower.includes('meter') || lower.includes('part') || lower.includes('vfd')) {
        return businessAreas[2];
      }
    }
    return businessAreas[0];
  };

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessArea: getInitialBusinessArea(),
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [submissionReference, setSubmissionReference] = useState('');

  useEffect(() => {
    if (initialScopeKey) {
      setForm((prev) => ({ ...prev, businessArea: getInitialBusinessArea() }));
    }
  }, [initialScopeKey]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!form.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!form.email.trim()) {
      errs.email = 'Corporate email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Please provide a valid corporate email address.';
    }

    if (!form.phone.trim()) {
      errs.phone = 'Direct telephone number is required.';
    }

    if (!form.company.trim()) {
      errs.company = 'Company or organization name is required.';
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      errs.message = 'Please provide details regarding your project or inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    const ref = `LTS-${new Date().getFullYear()}-ENQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionReference(ref);

    setTimeout(() => {
      setStatus('success');
    }, 500);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      businessArea: businessAreas[0],
      message: '',
    });
    setErrors({});
    setStatus('idle');
  };

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — SHORT HEADING
          Minimal architectural heading — no oversized 72vh hero or essay padding.
      ========================================================================= */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-14 border-b border-[#E5E7EB] bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-left">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#173C62] font-semibold block mb-2">
              CONTACT &bull; DUBAI CORPORATE DESK
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#173C62] tracking-tight leading-[1.05]">
              Let&apos;s discuss your project.
            </h1>

            <p className="text-base sm:text-lg text-[#999999] leading-relaxed pt-1 max-w-2xl font-normal">
              Direct dialogue with LTSGROUP estimating engineers, facilities directors, and technical equipment advisors in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — CONTACT DETAILS & ARCHITECTURAL ENQUIRY DESK
          Open editorial composition without heavy boxed card containers.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
            
            {/* Left Column: Architectural Intake Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[20px]">
              {status === 'success' ? (
                <div className="space-y-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[12px] bg-[#173C62] text-white flex items-center justify-center shrink-0">
                      <IconCheck size="lg" color="white" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-xs text-[#173C62] uppercase tracking-wider font-semibold">
                        TRANSMISSION LOGGED &bull; DUBAI DESK
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320]">
                        Thank you. Your enquiry has been received.
                      </h3>
                      <p className="text-sm text-[#4A5568] leading-relaxed pt-1">
                        Our technical estimating team has registered your requirements under official transmission reference:
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#F8FAFC] rounded-[12px] p-6 border border-[#E5E7EB] space-y-3 font-mono text-xs">
                    <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#E5E7EB] gap-1">
                      <span className="text-[#64748B]">Reference:</span>
                      <span className="font-bold text-[#173C62] text-sm">{submissionReference}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#E5E7EB] gap-1">
                      <span className="text-[#64748B]">Business Area:</span>
                      <span className="text-[#0B1320]">{form.businessArea}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#E5E7EB] gap-1">
                      <span className="text-[#64748B]">Primary Contact:</span>
                      <span className="text-[#0B1320]">{form.email}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-1 gap-1">
                      <span className="text-[#64748B]">Response SLA:</span>
                      <span className="text-[#0B1320]">Within one business day (GST hours)</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:underline cursor-pointer"
                    >
                      <span>Submit another enquiry</span>
                      <IconArrow size="sm" color="primary" interactive />
                    </button>

                    <div className="flex items-center gap-2 text-xs text-[#64748B]">
                      <IconShieldCheck size="sm" color="primary" />
                      <span>Transmitted under LTSGROUP Commercial NDA Protocols</span>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="space-y-1 pb-4 border-b border-[#E5E7EB]">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                      Enquiry Form
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320]">
                      Project &amp; Service Intake
                    </h3>
                  </div>

                  {/* Business Area Selection */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="businessArea"
                      className="block text-xs font-semibold text-[#0B1320] uppercase tracking-wider"
                    >
                      Business Area Selection <span className="text-[#173C62]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="businessArea"
                        name="businessArea"
                        value={form.businessArea}
                        onChange={handleChange}
                        className="w-full min-h-[44px] px-4 py-3 text-base sm:text-sm text-[#0B1320] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none cursor-pointer"
                      >
                        {businessAreas.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-[#0B1320] uppercase tracking-wider"
                      >
                        Full Name <span className="text-[#173C62]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Al Mansoori"
                        className={`w-full min-h-[44px] px-4 py-3 text-base sm:text-sm text-[#0B1320] placeholder:text-[#94A3B8] bg-[#F8FAFC] border ${
                          errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#CBD5E1]'
                        } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-600 pt-0.5">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#0B1320] uppercase tracking-wider"
                      >
                        Corporate Email <span className="text-[#173C62]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="name@company.ae"
                        className={`w-full min-h-[44px] px-4 py-3 text-base sm:text-sm text-[#0B1320] placeholder:text-[#94A3B8] bg-[#F8FAFC] border ${
                          errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#CBD5E1]'
                        } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 pt-0.5">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-[#0B1320] uppercase tracking-wider"
                      >
                        Telephone Number <span className="text-[#173C62]">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+971 50 000 0000"
                        className={`w-full min-h-[44px] px-4 py-3 text-base sm:text-sm text-[#0B1320] placeholder:text-[#94A3B8] bg-[#F8FAFC] border ${
                          errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#CBD5E1]'
                        } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 pt-0.5">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="company"
                        className="block text-xs font-semibold text-[#0B1320] uppercase tracking-wider"
                      >
                        Company / Organization <span className="text-[#173C62]">*</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="e.g. Real Estate Development"
                        className={`w-full min-h-[44px] px-4 py-3 text-base sm:text-sm text-[#0B1320] placeholder:text-[#94A3B8] bg-[#F8FAFC] border ${
                          errors.company ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#CBD5E1]'
                        } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                      />
                      {errors.company && (
                        <p className="text-xs text-rose-600 pt-0.5">
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[#0B1320] uppercase tracking-wider"
                    >
                      Project / Scope Details <span className="text-[#173C62]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your requirements, project location, scope of work, or equipment inquiry..."
                      className={`w-full px-4 py-3 text-base sm:text-sm text-[#0B1320] placeholder:text-[#94A3B8] bg-[#F8FAFC] border ${
                        errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#CBD5E1]'
                      } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none resize-y`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 pt-0.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] rounded-[12px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#173C62]/90 disabled:opacity-50 transition-colors cursor-pointer w-full sm:w-auto"
                    >
                      {status === 'loading' ? (
                        <span>Transmitting Enquiry...</span>
                      ) : (
                        <>
                          <span>Transmit Project Scope</span>
                          <IconArrow size="sm" color="white" interactive />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                      <IconShieldCheck size="sm" color="primary" />
                      <span>Commercial NDA Protected</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details Directory (Architectural Hairlines) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 sm:p-10 rounded-[20px] space-y-8 border-t-2 border-[#173C62]">
                
                {/* 01 Head Office */}
                <div className="space-y-2 pb-6 border-b border-[#E5E7EB]">
                  <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-[0.18em] block">
                    01 &bull; Corporate Headquarters
                  </span>
                  <h4 className="text-lg font-light text-[#0B1320] leading-snug">
                    {CORPORATE_INFO.contact.address.line1}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {CORPORATE_INFO.contact.address.line2} &bull; {CORPORATE_INFO.contact.address.country}
                  </p>
                </div>

                {/* 02 Direct Telephone */}
                <div className="space-y-2 pb-6 border-b border-[#E5E7EB]">
                  <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-[0.18em] block">
                    02 &bull; Direct Telephone
                  </span>
                  <h4 className="text-lg font-light text-[#0B1320]">
                    <a
                      href={`tel:${CORPORATE_INFO.contact.telephone}`}
                      className="hover:text-[#173C62] transition-colors"
                    >
                      {CORPORATE_INFO.contact.telephone}
                    </a>
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Central estimating switchboard (GST working hours)
                  </p>
                </div>

                {/* 03 Departmental Inquiries */}
                <div className="space-y-2 pb-6 border-b border-[#E5E7EB]">
                  <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-[0.18em] block">
                    03 &bull; Division Email Desks
                  </span>
                  <div className="space-y-2.5 text-xs pt-1">
                    <div className="flex justify-between items-center py-0.5">
                      <span className="text-[#64748B]">Engineering Tenders:</span>
                      <a
                        href={`mailto:${CORPORATE_INFO.contact.emailTenders}`}
                        className="font-mono text-[#173C62] hover:underline"
                      >
                        {CORPORATE_INFO.contact.emailTenders}
                      </a>
                    </div>
                    <div className="flex justify-between items-center py-0.5">
                      <span className="text-[#64748B]">Facilities Management:</span>
                      <a
                        href={`mailto:${CORPORATE_INFO.contact.emailFM}`}
                        className="font-mono text-[#173C62] hover:underline"
                      >
                        {CORPORATE_INFO.contact.emailFM}
                      </a>
                    </div>
                    <div className="flex justify-between items-center py-0.5">
                      <span className="text-[#64748B]">Trading &amp; Equipment:</span>
                      <a
                        href={`mailto:${CORPORATE_INFO.contact.emailTrading}`}
                        className="font-mono text-[#173C62] hover:underline"
                      >
                        {CORPORATE_INFO.contact.emailTrading}
                      </a>
                    </div>
                  </div>
                </div>

                {/* 04 Hours & Emergency Dispatch */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <IconClock size="sm" color="primary" />
                    <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-wider">
                      Operating Schedule
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-[#0B1320]">
                    {CORPORATE_INFO.contact.hours} (GST)
                  </h4>
                  <p className="text-[11px] font-mono text-[#173C62] font-semibold pt-1">
                    24/7 EMERGENCY DISPATCH FOR CONTRACTED PROPERTIES
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — ARCHITECTURAL FINISH PLATE
          Full-width engineering photography plate with quiet coordinate caption.
      ========================================================================= */}
      <section className="relative w-full h-[320px] sm:h-[400px] bg-[#173C62] overflow-hidden">
        <img
          src="/assets/images/engineering-intro.jpg"
          alt="LTSGROUP Plant and Electromechanical Infrastructure"
          className="w-full h-full object-cover filter brightness-[0.80]"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/85 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#93C5FD] block font-semibold">
                LTSGROUP &bull; Built Environment Excellence
              </span>
              <p className="text-sm sm:text-base font-light text-white">
                Engineering environments built to perform across commercial, industrial, and infrastructure sectors.
              </p>
            </div>
            <span className="font-mono text-xs text-white/70">
              Dubai, United Arab Emirates
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
