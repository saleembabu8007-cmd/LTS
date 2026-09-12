import React, { useState } from 'react';
import { ArrowRight, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { Input, Select, Textarea, Checkbox } from './FormControls';
import { Button } from './Button';

export interface ContactFormProps {
  initialType?: string;
  onSubmit?: (data: Record<string, any>) => void;
  successMessage?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  className?: string;
}

const INQUIRY_TYPES = [
  { value: 'rfp', label: 'Tender / RFP Submission (Contracting)' },
  { value: 'fm-amc', label: 'Facilities Operations & AMC SLA' },
  { value: 'solar', label: 'Commercial & Industrial Solar PV' },
  { value: 'trading', label: 'Wholesale Trading & Equipment Order' },
  { value: 'general', label: 'General Corporate Consultation' },
];

const ESTIMATED_TIMELINES = [
  { value: 'immediate', label: 'Immediate Execution (< 30 Days)' },
  { value: 'quarter', label: 'Current Financial Quarter' },
  { value: 'planning', label: 'Tendering & Budgetary Stage' },
  { value: 'annual', label: 'Annual AMC Renewal' },
];

export const ContactForm: React.FC<ContactFormProps> = ({
  initialType = 'rfp',
  onSubmit,
  successMessage,
  title = 'Commercial Engagement Desk',
  eyebrow = 'TENDER SUBMISSION & ENGINEERING CONSULTATION',
  description = 'Direct routing to senior technical directors, contract estimators, and authorized SLA operations teams.',
  className = '',
}) => {
  const [formData, setFormData] = useState({
    inquiryType: initialType,
    fullName: '',
    corporateEmail: '',
    telephone: '',
    organization: '',
    projectTimeline: 'immediate',
    projectScope: '',
    requiresNda: false,
    fileAttachment: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Validation
    if (!formData.fullName.trim() || !formData.corporateEmail.trim() || !formData.projectScope.trim()) {
      setErrorMessage('Please complete all required engineering fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable corporate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSubmit) {
        onSubmit(formData);
      }
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white border border-[#E5E7EB] rounded-[2px] p-8 sm:p-12 text-center space-y-4 ${className}`}>
        <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 text-emerald-600 rounded-[2px] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="typography-h3 text-[#0B1320]">
          Inquiry Successfully Logged
        </h3>
        <p className="typography-body text-[#4A5568] max-w-md mx-auto">
          {successMessage ||
            'Your engineering dossier has been dispatched directly to the LTSGROUP commercial operations department. An authorized lead engineer will respond within 4 business hours.'}
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                inquiryType: initialType,
                fullName: '',
                corporateEmail: '',
                telephone: '',
                organization: '',
                projectTimeline: 'immediate',
                projectScope: '',
                requiresNda: false,
                fileAttachment: null,
              });
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white border border-[#E5E7EB] rounded-[2px] p-6 sm:p-8 lg:p-10 space-y-8 ${className}`}
      noValidate
    >
      {/* Header Block */}
      {(eyebrow || title || description) && (
        <div className="space-y-2 border-b border-[#E5E7EB] pb-6">
          {eyebrow && (
            <div className="flex items-center gap-2">
              <span className="w-4 h-[1px] bg-[#173C62]" />
              <span className="typography-label text-[#173C62] text-[10px] tracking-[0.18em]">
                {eyebrow}
              </span>
            </div>
          )}
          {title && (
            <h3 className="typography-h3 text-[#0B1320]">
              {title}
            </h3>
          )}
          {description && (
            <p className="typography-body text-[#4A5568] max-prose-editorial">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Error Alert */}
      {errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-[2px] flex items-center gap-3 typography-body-sm">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Field Groups */}
      <div className="space-y-6">
        {/* Row 1: Inquiry Type & Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Engagement Classification *"
            value={formData.inquiryType}
            onChange={(e) => handleChange('inquiryType', e.target.value)}
            options={INQUIRY_TYPES}
          />
          <Select
            label="Target Implementation Window *"
            value={formData.projectTimeline}
            onChange={(e) => handleChange('projectTimeline', e.target.value)}
            options={ESTIMATED_TIMELINES}
          />
        </div>

        {/* Row 2: Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Authorized Representative Name *"
            type="text"
            required
            placeholder="e.g. Tariq Al Mansoori"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
          />
          <Input
            label="Corporate / Entity Email *"
            type="email"
            required
            placeholder="e.g. name@corporation.ae"
            value={formData.corporateEmail}
            onChange={(e) => handleChange('corporateEmail', e.target.value)}
          />
        </div>

        {/* Row 3: Entity Name & Telephone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company / Project Entity Name *"
            type="text"
            required
            placeholder="e.g. Emaar Properties / Dubai South"
            value={formData.organization}
            onChange={(e) => handleChange('organization', e.target.value)}
          />
          <Input
            label="Direct Contact Number *"
            type="tel"
            required
            placeholder="+971 4 000 0000"
            value={formData.telephone}
            onChange={(e) => handleChange('telephone', e.target.value)}
          />
        </div>

        {/* Row 4: Technical Scope / Specification */}
        <Textarea
          label="Project Scope / Technical Specifications / Tender Reference *"
          required
          rows={4}
          placeholder="Please describe mechanical, electrical, solar, or maintenance specifications (e.g. 2,000 TR district cooling interface, 11kV substation load, or preventive AMC coverage scope)."
          value={formData.projectScope}
          onChange={(e) => handleChange('projectScope', e.target.value)}
        />

        {/* Row 5: BOQ / Tender File Upload Trigger */}
        <div className="border border-dashed border-[#E5E7EB] rounded-[2px] p-4 sm:p-5 text-center bg-slate-50/50 hover:bg-slate-50 transition-colors">
          <div className="flex flex-col items-center justify-center space-y-2">
            <Upload className="w-5 h-5 text-[#173C62]" />
            <div className="typography-body-sm text-[#0B1320] font-medium">
              Attach Tender Documents / BOQ / Drawings
            </div>
            <p className="typography-caption text-[#64748B] text-xs">
              PDF, DWG, XLSX or ZIP archive (Maximum file size: 25MB)
            </p>
            <label className="cursor-pointer inline-flex items-center text-xs font-medium text-[#173C62] hover:underline pt-1">
              <span>Browse Files</span>
              <input
                type="file"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleChange('fileAttachment', e.target.files[0]);
                  }
                }}
              />
            </label>
            {formData.fileAttachment && (
              <span className="text-xs text-emerald-700 font-mono">
                Selected: {formData.fileAttachment.name}
              </span>
            )}
          </div>
        </div>

        {/* NDA and Confidentiality Checkbox */}
        <Checkbox
          label="Require execution of Mutual Non-Disclosure Agreement (MNDA) prior to technical dossier exchange"
          checked={formData.requiresNda}
          onChange={(e) => handleChange('requiresNda', e.target.checked)}
        />
      </div>

      {/* Action Zone */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E5E7EB]">
        <span className="typography-caption text-[#64748B] text-xs">
          ISO 9001:2015 accredited confidentiality standard.
        </span>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}
        >
          Submit Commercial Inquiry
        </Button>
      </div>
    </form>
  );
};
