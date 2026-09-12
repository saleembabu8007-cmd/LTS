import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Building2,
  AlertCircle,
} from 'lucide-react';
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
      if (initialScopeKey.toLowerCase().includes('solar') || initialScopeKey.toLowerCase().includes('mep') || initialScopeKey.toLowerCase().includes('switchgear')) {
        return businessAreas[0];
      }
      if (initialScopeKey.toLowerCase().includes('facility') || initialScopeKey.toLowerCase().includes('chiller') || initialScopeKey.toLowerCase().includes('pool')) {
        return businessAreas[1];
      }
      if (initialScopeKey.toLowerCase().includes('trading') || initialScopeKey.toLowerCase().includes('meter') || initialScopeKey.toLowerCase().includes('part')) {
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
    }, 600);
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
          01 — HERO
          Full-screen architectural photography (~72vh).
          Intentional lower-left typography.
      ========================================================================= */}
      <section className="relative w-full h-[72vh] min-h-[520px] max-h-[780px] bg-[#0B1C2F] overflow-hidden">
        <img
          src="/assets/images/hero-building.jpg"
          alt="LTSGROUP Built Environment Architecture and Engineering"
          className="w-full h-full object-cover filter brightness-[0.82] transition-transform duration-[1200ms] ease-out hover:scale-[1.01]"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80';
          }}
        />

        {/* Directional scrim for editorial legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/90 via-[#0B1320]/35 to-transparent pointer-events-none" />

        {/* Hero Content Lower-Left */}
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                Commercial &amp; Technical Engagement
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[0.98]">
                Let&apos;s discuss your project.
              </h1>

              <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl pt-1">
                Direct dialogue with LTSGROUP engineering directors, estimating teams, and technical advisors across the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — CLEAR ENQUIRY MESSAGE
          High-contrast editorial statement.
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                01 &bull; Direct Access
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Single Point of Contact for All Business Areas
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-[#4A5568] leading-relaxed">
              <p className="text-xl sm:text-2xl font-light text-[#0B1320] leading-snug tracking-tight">
                Whether you are submitting an electromechanical tender dossier, scheduling plant chiller diagnostics, or sourcing factory-direct components, your request is routed immediately to the responsible discipline lead.
              </p>
              <p>
                All communications and tender drawings are handled under strict commercial confidentiality and UAE non-disclosure protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — ENQUIRY FORM & CONTACT DETAILS
          Simple, responsive two-column layout:
          Left: Simple enquiry form (Business area, Name, Email, Phone, Company, Message, CTA)
          Right: Contact details directory.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Simple Enquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 lg:p-12 rounded-[20px] sm:rounded-[24px] border border-[#E5E7EB] shadow-xs">
              {status === 'success' ? (
                <div className="space-y-6 animate-fadeIn py-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[12px] bg-[#173C62] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-xs text-[#173C62] uppercase tracking-wider font-semibold">
                        Transmission Logged &bull; Dubai Engineering Desk
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320]">
                        Thank you. Your enquiry has been received.
                      </h3>
                      <p className="text-sm text-[#4A5568] leading-relaxed pt-1">
                        Our technical estimating team has registered your requirements under official transmission reference:
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-[12px] p-6 border border-slate-200 space-y-3 font-mono text-xs">
                    <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200 gap-1">
                      <span className="text-[#64748B]">Reference:</span>
                      <span className="font-bold text-[#173C62] text-sm">{submissionReference}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200 gap-1">
                      <span className="text-[#64748B]">Business Area:</span>
                      <span className="text-[#0B1320]">{form.businessArea}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200 gap-1">
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
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2 text-xs text-[#64748B]">
                      <ShieldCheck className="w-4 h-4 text-[#173C62]" />
                      <span>Transmitted under LTSGROUP Commercial NDA Protocols</span>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="space-y-1 pb-2 border-b border-[#E5E7EB]">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                      02 &bull; Enquiry Form
                    </span>
                    <h3 className="text-2xl font-light text-[#0B1320]">
                      Project &amp; Service Enquiry
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
                    <select
                      id="businessArea"
                      name="businessArea"
                      value={form.businessArea}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 text-sm text-[#0B1320] bg-white border border-[#CBD5E1] rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none"
                    >
                      {businessAreas.map((area, idx) => (
                        <option key={idx} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
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
                        className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#94A3B8] bg-white border ${
                          errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#CBD5E1]'
                        } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-600 flex items-center gap-1 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
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
                        className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#94A3B8] bg-white border ${
                          errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#CBD5E1]'
                        } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 flex items-center gap-1 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
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
                        className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#94A3B8] bg-white border ${
                          errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#CBD5E1]'
                        } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 flex items-center gap-1 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
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
                        placeholder="e.g. Al Futtaim Real Estate"
                        className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#94A3B8] bg-white border ${
                          errors.company ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#CBD5E1]'
                        } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                      />
                      {errors.company && (
                        <p className="text-xs text-rose-600 flex items-center gap-1 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.company}</span>
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
                      Project / Enquiry Message <span className="text-[#173C62]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your requirements, project location, scope of work, or equipment inquiry..."
                      className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#94A3B8] bg-white border ${
                        errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-[#CBD5E1]'
                      } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none resize-y`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-600 flex items-center gap-1 pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* CTA Action */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[12px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#11253E] disabled:opacity-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 text-xs text-[#64748B]">
                      <ShieldCheck className="w-4 h-4 text-[#173C62]" />
                      <span>Commercial confidentiality guaranteed</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details Directory */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                  03 &bull; Contact Details
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                  Dubai Operational Desks
                </h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  Direct communication channels for tenders, facility emergencies, and trade orders.
                </p>
              </div>

              <div className="space-y-6 divide-y divide-[#E5E7EB]">
                {/* 01 Headquarters */}
                <div className="pt-6 first:pt-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#173C62]" />
                    <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-wider">
                      Headquarters
                    </span>
                  </div>
                  <h4 className="text-base font-medium text-[#0B1320]">
                    Dubai Operational Center
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                    {CORPORATE_INFO.contact.address.line1}, {CORPORATE_INFO.contact.address.line2}, {CORPORATE_INFO.contact.address.emirate}, {CORPORATE_INFO.contact.address.country}
                  </p>
                </div>

                {/* 02 Tenders & Estimating */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#173C62]" />
                    <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-wider">
                      Tenders &amp; Estimating
                    </span>
                  </div>
                  <h4 className="text-base font-medium text-[#0B1320]">
                    Direct Submittals Desk
                  </h4>
                  <div className="text-xs sm:text-sm text-[#4A5568] space-y-1">
                    <p>
                      Email:{' '}
                      <a
                        href={`mailto:${CORPORATE_INFO.contact.emailTenders}`}
                        className="font-mono text-[#173C62] font-semibold hover:underline"
                      >
                        {CORPORATE_INFO.contact.emailTenders}
                      </a>
                    </p>
                    <p>
                      Phone:{' '}
                      <a
                        href={`tel:${CORPORATE_INFO.contact.telephone}`}
                        className="text-[#0B1320] hover:underline"
                      >
                        {CORPORATE_INFO.contact.telephone}
                      </a>
                    </p>
                  </div>
                </div>

                {/* 03 Commercial Desks */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#173C62]" />
                    <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-wider">
                      Commercial Desks
                    </span>
                  </div>
                  <h4 className="text-base font-medium text-[#0B1320]">
                    Divisional Contacts
                  </h4>
                  <div className="text-xs sm:text-sm text-[#4A5568] space-y-1.5 pt-1">
                    <div className="flex justify-between items-center py-0.5">
                      <span className="text-[#64748B]">General Inquiries:</span>
                      <a
                        href={`mailto:${CORPORATE_INFO.contact.emailGeneral}`}
                        className="font-mono text-[#173C62] hover:underline"
                      >
                        {CORPORATE_INFO.contact.emailGeneral}
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
                <div className="pt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#173C62]" />
                    <span className="font-mono text-xs font-semibold text-[#173C62] uppercase tracking-wider">
                      Operating Schedule
                    </span>
                  </div>
                  <h4 className="text-base font-medium text-[#0B1320]">
                    Standard Hours &amp; 24/7 Dispatch
                  </h4>
                  <div className="text-xs sm:text-sm text-[#4A5568] space-y-1">
                    <p>{CORPORATE_INFO.contact.hours} (GST)</p>
                    <p className="text-[11px] font-mono text-[#173C62] font-semibold pt-1">
                      24/7 EMERGENCY DISPATCH FOR CONTRACTED PROPERTIES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — SUPPORTING ARCHITECTURAL FINISH
          Full-width engineering photography plate with quiet caption.
      ========================================================================= */}
      <section className="relative w-full h-[380px] sm:h-[460px] bg-[#0B1C2F] overflow-hidden">
        <img
          src="/assets/images/engineering-intro.jpg"
          alt="LTSGROUP Plant and Electromechanical Infrastructure"
          className="w-full h-full object-cover filter brightness-[0.80] transition-transform duration-[1200ms] ease-out hover:scale-[1.01]"
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80';
          }}
        />

        {/* Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-transparent to-transparent pointer-events-none" />

        {/* Caption */}
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
