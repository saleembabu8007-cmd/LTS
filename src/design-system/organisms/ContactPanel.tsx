import React, { useState } from 'react';
import { Container } from '../structures/Container';
import { Eyebrow } from '../atoms/Eyebrow';
import { FormField } from '../atoms/FormField';
import { Select } from '../atoms/Select';
import { Textarea } from '../atoms/Textarea';
import { FileUpload } from '../atoms/FileUpload';
import { Button } from '../atoms/Button';

export interface ContactPanelProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  directPhone?: string;
  directEmail?: string;
  onSubmit?: (data: any) => void;
  className?: string;
}

export const ContactPanel: React.FC<ContactPanelProps> = ({
  eyebrow = 'DIRECT COMMERCIAL ENGAGEMENT',
  title = 'Initiate Engineering Tender Review',
  description = 'Direct transmission of mechanical, electrical, and plumbing project specifications to our estimation directorate.',
  directPhone = '+971 4 267 1212',
  directEmail = 'commercial@ltsgroup.ae',
  onSubmit,
  className = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [division, setDivision] = useState('mep');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubmit?.({ name, email, division, message });
    }, 600);
  };

  return (
    <section className={`py-16 sm:py-20 bg-[#F8FAFC] border-t border-b border-[#E5E7EB] ${className}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact Directives & Direct Lines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <Eyebrow>{eyebrow}</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-semibold text-[#0B1320] tracking-tight">
                {title}
              </h2>
            </div>

            <p className="text-sm text-[#4A5568] leading-relaxed">
              {description}
            </p>

            <div className="space-y-4 pt-4 border-t border-[#E5E7EB]">
              <div>
                <span className="block text-[11px] font-mono uppercase text-[#64748B]">
                  Direct Estimating Telephone
                </span>
                <a
                  href={`tel:${directPhone.replace(/\s+/g, '')}`}
                  className="text-base font-sans font-semibold text-[#173C62] hover:underline"
                >
                  {directPhone}
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono uppercase text-[#64748B]">
                  Engineering RFP Transmission
                </span>
                <a
                  href={`mailto:${directEmail}`}
                  className="text-base font-sans font-semibold text-[#173C62] hover:underline"
                >
                  {directEmail}
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono uppercase text-[#64748B]">
                  Headquarters
                </span>
                <span className="text-xs text-[#0B1320]">
                  Dubai Investment Park &bull; Al Gurg Tower, Deira, Dubai, UAE
                </span>
              </div>
            </div>
          </div>

          {/* Right: Technical Tender Submission Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[24px] border border-[#E5E7EB] shadow-none">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#ECFDF3] text-[#079455] flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-xl font-sans font-semibold text-[#0B1320]">
                  Tender Specification Transmitted
                </h4>
                <p className="text-xs text-[#4A5568] max-w-md mx-auto">
                  Our estimation engineering department has received your scope documentation. A lead engineer will confirm receipt within 4 business hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  shape="capsule"
                  onClick={() => setIsSuccess(false)}
                >
                  Submit Additional Documentation
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    id="contact-name"
                    label="Representative Name"
                    placeholder="Eng. Ahmed Al Mansoor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <FormField
                    id="contact-email"
                    label="Corporate Email"
                    type="email"
                    placeholder="a.mansoor@developer.ae"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Select
                  id="contact-division"
                  label="Target Engineering Division"
                  value={division}
                  onChange={(e) => setDivision(e.target.value)}
                  options={[
                    { value: 'mep', label: '1. Engineering: Turnkey MEP Contracting' },
                    { value: 'solar', label: '2. Engineering: Commercial Solar PV EPC' },
                    { value: 'switchgear', label: '3. Engineering: Form-4 Control Switchgear' },
                    { value: 'fm', label: '4. Facilities Management: Asset Care' },
                    { value: 'trading', label: '5. Trading: Components & Infrastructure' },
                  ]}
                />

                <Textarea
                  id="contact-message"
                  label="Project Technical Scope / BOQ Details"
                  placeholder="Outline cooling requirements (TR), electrical load (MW), site location, and tender deadline..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <FileUpload
                  id="contact-drawing"
                  label="Attach Tender Package (DWG, PDF, XLSX up to 50MB)"
                />

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    shape="capsule"
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Transmitting Tender Package...' : 'Transmit Engineering Package'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
