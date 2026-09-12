import React, { useState } from 'react';
import { Button } from '../atoms/Button';

export interface ContactFeatureProps {
  eyebrow?: string;
  title?: string;
  intro?: string;
  phone?: string;
  email?: string;
  location?: string;
  className?: string;
}

/**
 * ContactFeature (Composition 13)
 * Split consultation & tender intake section.
 * LEFT: Direct engineering contact routes.
 * RIGHT: Unboxed clean enquiry form (11px soft-radius inputs, zero fake upload mocks, zero SaaS shadows).
 */
export const ContactFeature: React.FC<ContactFeatureProps> = ({
  eyebrow = 'Direct Technical Consultation',
  title = 'Initiate Your Engineering Consultation',
  intro = 'Speak directly with our engineering directors regarding MEP contracting, solar EPC feasibility, or facility management retrofits.',
  phone = '+971 4 267 8555',
  email = 'info@ltsgroup.ae',
  location = 'Dubai, United Arab Emirates',
  className = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: 'Engineering & Construction',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={`py-16 sm:py-24 md:py-32 bg-[#F8FAFC] text-left ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Direct Contact Routes (5 cols) */}
          <div className="lg:col-span-5">
            {eyebrow && (
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold">
                {eyebrow}
              </span>
            )}

            <h2 className="mt-2 text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#0B1320] leading-[1.12] tracking-tight">
              {title}
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed">
              {intro}
            </p>

            <div className="mt-10 space-y-6 pt-8 border-t border-[#CBD5E1]">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#64748B]">
                  Headquarters & Region
                </span>
                <div className="mt-1 text-[16px] font-medium text-[#0B1320]">
                  {location}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#64748B]">
                  Direct Telephone
                </span>
                <div className="mt-1">
                  <a
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="text-[16px] font-medium text-[#173C62] hover:text-[#102B47] transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#64748B]">
                  Technical Enquiries
                </span>
                <div className="mt-1">
                  <a
                    href={`mailto:${email}`}
                    className="text-[16px] font-medium text-[#173C62] hover:text-[#102B47] transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Clean Unboxed Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 md:p-12 rounded-[16px] border border-[#E5E7EB]">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-[#ECFDF3] text-[#079455] flex items-center justify-center mx-auto mb-4 font-bold">
                  ✓
                </div>
                <h3 className="text-[20px] font-medium text-[#0B1320]">
                  Enquiry Received
                </h3>
                <p className="mt-2 text-[14px] text-[#4A5568] max-w-md mx-auto">
                  Our engineering team has received your submission and will review the specifications within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-mono uppercase tracking-[0.10em] text-[#0B1320] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[11px] border border-[#CBD5E1] bg-white text-[#0B1320] placeholder-[#94A3B8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#173C62] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono uppercase tracking-[0.10em] text-[#0B1320] mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. d.miller@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[11px] border border-[#CBD5E1] bg-white text-[#0B1320] placeholder-[#94A3B8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#173C62] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[12px] font-mono uppercase tracking-[0.10em] text-[#0B1320] mb-2">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[11px] border border-[#CBD5E1] bg-white text-[#0B1320] placeholder-[#94A3B8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#173C62] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono uppercase tracking-[0.10em] text-[#0B1320] mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Al Wasl Properties"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[11px] border border-[#CBD5E1] bg-white text-[#0B1320] placeholder-[#94A3B8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#173C62] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-mono uppercase tracking-[0.10em] text-[#0B1320] mb-2">
                    Enquiry Scope
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full h-[46px] px-4 rounded-[11px] border border-[#CBD5E1] bg-white text-[#0B1320] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#173C62] focus:border-transparent transition-all"
                  >
                    <option value="Engineering & Construction">Engineering & Construction (MEP / Solar / Switchgear)</option>
                    <option value="Facilities Management">Facilities Management (Hard / Soft / Retrofit)</option>
                    <option value="Trading">Trading & Equipment (HVAC / VFDs / Meters)</option>
                    <option value="Tender / RFP">Project Tender / RFP Submission</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-mono uppercase tracking-[0.10em] text-[#0B1320] mb-2">
                    Project Scope / Specification Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide asset type, project location, technical capacity, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-[11px] border border-[#CBD5E1] bg-white text-[#0B1320] placeholder-[#94A3B8] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#173C62] focus:border-transparent transition-all resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  shape="rounded"
                  fullWidth
                  iconTrailing="→"
                >
                  Submit Engineering Consultation
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
