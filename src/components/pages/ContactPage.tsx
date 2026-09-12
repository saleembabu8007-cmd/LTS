import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Loader2,
  FileText,
  UploadCloud,
  X,
  ShieldCheck,
  Building2,
  FileCheck,
  Briefcase,
  AlertCircle
} from 'lucide-react';
import { Button } from '../../design-system/components/Button';
import { CORPORATE_INFO } from '../../data/corporateData';

interface ContactPageProps {
  onNavigate?: (slug: string) => void;
  initialTab?: 'rfp' | 'general' | 'business';
  initialScopeKey?: string;
}

type ContactIntent = 'general' | 'rfp' | 'business';

interface StagedFile {
  id: string;
  name: string;
  size: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  initialTab = 'general',
  initialScopeKey,
}) => {
  // Determine starting intention
  const getStartingIntent = (): ContactIntent => {
    if (initialTab === 'rfp') return 'rfp';
    if (initialTab === 'business') return 'business';
    return 'general';
  };

  const [activeIntent, setActiveIntent] = useState<ContactIntent>(getStartingIntent);

  // General Form State
  const [generalForm, setGeneralForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    discipline: initialScopeKey || 'Turnkey MEP Contracting',
    message: '',
  });

  // RFP Form State
  const [rfpForm, setRfpForm] = useState({
    projectName: '',
    location: 'Dubai',
    discipline: initialScopeKey || 'Turnkey MEP Contracting',
    targetDate: '',
    scopeSummary: '',
    specialConditions: '',
    representativeName: '',
    email: '',
    phone: '',
    company: '',
    role: 'Main Contractor',
  });

  // Business Enquiry Form State
  const [businessForm, setBusinessForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    category: 'Vendor Prequalification',
    proposal: '',
  });

  // Staged Files for RFP
  const [stagedFiles, setStagedFiles] = useState<StagedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission Status
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [submissionReference, setSubmissionReference] = useState('');

  // Sync incoming props
  useEffect(() => {
    if (initialTab === 'rfp') {
      setActiveIntent('rfp');
    } else if (initialTab === 'business') {
      setActiveIntent('business');
    } else {
      setActiveIntent('general');
    }
    if (initialScopeKey) {
      setGeneralForm((prev) => ({ ...prev, discipline: initialScopeKey }));
      setRfpForm((prev) => ({ ...prev, discipline: initialScopeKey }));
    }
  }, [initialTab, initialScopeKey]);

  // Handle Intent Switching
  const handleIntentChange = (intent: ContactIntent) => {
    setActiveIntent(intent);
    setErrors({});
    setStatus('idle');
  };

  // General input handlers
  const handleGeneralChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setGeneralForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // RFP input handlers
  const handleRfpChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRfpForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Business input handlers
  const handleBusinessChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBusinessForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // File Staging Handlers (Rule 11 Honest UX)
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: StagedFile[] = (Array.from(e.target.files) as File[]).map((f) => ({
        id: `${f.name}-${Date.now()}-${Math.random()}`,
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`,
      }));
      setStagedFiles((prev) => [...prev, ...newFiles]);
      if (errors.files) {
        setErrors((prev) => ({ ...prev, files: '' }));
      }
    }
  };

  const handleRemoveFile = (id: string) => {
    setStagedFiles((prev) => prev.filter((f) => f.id !== id));
  };

  // Validation
  const validateForm = (): boolean => {
    const errs: Record<string, string> = {};

    if (activeIntent === 'general') {
      if (!generalForm.name.trim()) errs.name = 'Please provide your full name.';
      if (!generalForm.email.trim()) {
        errs.email = 'Corporate email is required for correspondence.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(generalForm.email.trim())) {
        errs.email = 'Please provide a valid corporate email address.';
      }
      if (!generalForm.phone.trim()) errs.phone = 'Direct telephone number is required.';
      if (!generalForm.company.trim()) errs.company = 'Company or organization name is required.';
      if (!generalForm.message.trim() || generalForm.message.trim().length < 10) {
        errs.message = 'Please provide sufficient project context or inquiry details.';
      }
    } else if (activeIntent === 'rfp') {
      if (!rfpForm.projectName.trim()) errs.projectName = 'Project name or tender title is required.';
      if (!rfpForm.scopeSummary.trim() || rfpForm.scopeSummary.trim().length < 15) {
        errs.scopeSummary = 'Please provide an outline of the tender scope or BOQ specifications.';
      }
      if (!rfpForm.representativeName.trim()) {
        errs.representativeName = 'Commercial coordinator or estimator name is required.';
      }
      if (!rfpForm.email.trim()) {
        errs.email = 'Official corporate email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rfpForm.email.trim())) {
        errs.email = 'Please provide a valid corporate email address.';
      }
      if (!rfpForm.phone.trim()) errs.phone = 'Direct coordination telephone number is required.';
      if (!rfpForm.company.trim()) errs.company = 'Company or entity name is required.';
    } else if (activeIntent === 'business') {
      if (!businessForm.name.trim()) errs.name = 'Please provide your full name.';
      if (!businessForm.email.trim()) {
        errs.email = 'Corporate email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessForm.email.trim())) {
        errs.email = 'Please provide a valid corporate email address.';
      }
      if (!businessForm.phone.trim()) errs.phone = 'Telephone number is required.';
      if (!businessForm.company.trim()) errs.company = 'Company or institutional name is required.';
      if (!businessForm.proposal.trim() || businessForm.proposal.trim().length < 15) {
        errs.proposal = 'Please summarize your commercial proposal or partnership scope.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');
    // Generate simulated reference code (e.g. LTS-2026-TND-492)
    const prefix = activeIntent === 'rfp' ? 'RFP' : activeIntent === 'business' ? 'BIZ' : 'ENQ';
    const ref = `LTS-${new Date().getFullYear()}-${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionReference(ref);

    setTimeout(() => {
      setStatus('success');
    }, 750);
  };

  const handleReset = () => {
    setGeneralForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      discipline: 'Turnkey MEP Contracting',
      message: '',
    });
    setRfpForm({
      projectName: '',
      location: 'Dubai',
      discipline: 'Turnkey MEP Contracting',
      targetDate: '',
      scopeSummary: '',
      specialConditions: '',
      representativeName: '',
      email: '',
      phone: '',
      company: '',
      role: 'Main Contractor',
    });
    setBusinessForm({
      name: '',
      email: '',
      phone: '',
      company: '',
      category: 'Vendor Prequalification',
      proposal: '',
    });
    setStagedFiles([]);
    setErrors({});
    setStatus('idle');
  };

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          SECTION 01 — FULL-WIDTH IMAGE HERO
          Minimal heading: Let's discuss your project.
          Short supporting line.
          Content positioned intentionally lower-left over architectural photography.
      ========================================================================= */}
      <section className="relative w-full h-[72vh] min-h-[520px] max-h-[720px] bg-[#0B1C2F] overflow-hidden">
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

        {/* Hero Content Positioned Intentionally in Lower-Left */}
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                COMMERCIAL &amp; TECHNICAL ENGAGEMENT
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
          SECTION 02 — CONTACT PATHS (EDITORIAL SELECTOR)
          Clean editorial selector presenting 3 intentions:
          - General enquiry
          - RFP / Tender
          - Business enquiry
      ========================================================================= */}
      <section className="pt-16 sm:pt-20 pb-8 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center sm:text-left space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748B] block font-semibold">
                PRIMARY ENGAGEMENT ROUTE
              </span>
              <p className="text-sm text-[#4A5568]">
                Select your intended contact path to route your requirements directly to the responsible engineering desk.
              </p>
            </div>

            {/* Clean Editorial 3-way Segmented Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-1.5 bg-slate-100 rounded-[14px] sm:rounded-[16px] border border-slate-200">
              {/* Option 1: General Enquiry */}
              <button
                type="button"
                onClick={() => handleIntentChange('general')}
                className={`text-left p-4 sm:p-5 rounded-[12px] transition-all cursor-pointer ${
                  activeIntent === 'general'
                    ? 'bg-white text-[#0B1320] shadow-sm ring-1 ring-black/5'
                    : 'text-[#64748B] hover:text-[#0B1320] hover:bg-white/60'
                }`}
                aria-pressed={activeIntent === 'general'}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#173C62]">
                    01 / GENERAL
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activeIntent === 'general' ? 'bg-[#173C62]' : 'bg-transparent'
                    }`}
                  />
                </div>
                <h3 className="text-base font-medium text-[#0B1320] leading-snug">
                  General enquiry
                </h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Service inquiries, plant maintenance advisory, and component supply.
                </p>
              </button>

              {/* Option 2: RFP / Tender */}
              <button
                type="button"
                onClick={() => handleIntentChange('rfp')}
                className={`text-left p-4 sm:p-5 rounded-[12px] transition-all cursor-pointer ${
                  activeIntent === 'rfp'
                    ? 'bg-white text-[#0B1320] shadow-sm ring-1 ring-black/5'
                    : 'text-[#64748B] hover:text-[#0B1320] hover:bg-white/60'
                }`}
                aria-pressed={activeIntent === 'rfp'}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#173C62]">
                    02 / TENDER
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activeIntent === 'rfp' ? 'bg-[#173C62]' : 'bg-transparent'
                    }`}
                  />
                </div>
                <h3 className="text-base font-medium text-[#0B1320] leading-snug">
                  RFP / Tender
                </h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Formal tender dossiers, BOQ evaluation, and turnkey contracting bids.
                </p>
              </button>

              {/* Option 3: Business Enquiry */}
              <button
                type="button"
                onClick={() => handleIntentChange('business')}
                className={`text-left p-4 sm:p-5 rounded-[12px] transition-all cursor-pointer ${
                  activeIntent === 'business'
                    ? 'bg-white text-[#0B1320] shadow-sm ring-1 ring-black/5'
                    : 'text-[#64748B] hover:text-[#0B1320] hover:bg-white/60'
                }`}
                aria-pressed={activeIntent === 'business'}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#173C62]">
                    03 / COMMERCIAL
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activeIntent === 'business' ? 'bg-[#173C62]' : 'bg-transparent'
                    }`}
                  />
                </div>
                <h3 className="text-base font-medium text-[#0B1320] leading-snug">
                  Business enquiry
                </h3>
                <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                  Vendor prequalification, manufacturer representation, and partnerships.
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 — CLEAN LIGHT FORM SURFACE & DYNAMIC TENDER JOURNEY
          Natural canvas layout. Zero giant floating card. Inputs 10-12px radius.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFBFD]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* SUCCESS CONFIRMATION STATE */}
            {status === 'success' ? (
              <div className="bg-white rounded-[16px] sm:rounded-[20px] p-8 sm:p-12 border border-slate-200 space-y-8 animate-fadeIn">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-[12px] bg-[#173C62] text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-[#173C62] uppercase tracking-wider font-semibold">
                      SUBMISSION CONFIRMED &bull; DUBAI ENGINEERING DESK
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320]">
                      Thank you. Your dossier has been logged.
                    </h2>
                    <p className="text-sm text-[#4A5568] leading-relaxed pt-1">
                      Our commercial estimating team has registered your requirements under official transmission reference:
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-[12px] p-6 border border-slate-200 space-y-3 font-mono text-xs">
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200 gap-1">
                    <span className="text-[#64748B]">Reference Number:</span>
                    <span className="font-bold text-[#173C62] text-sm">{submissionReference}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200 gap-1">
                    <span className="text-[#64748B]">Transmission Route:</span>
                    <span className="text-[#0B1320] uppercase font-semibold">{activeIntent} path</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-slate-200 gap-1">
                    <span className="text-[#64748B]">Primary Contact:</span>
                    <span className="text-[#0B1320]">
                      {activeIntent === 'rfp'
                        ? rfpForm.email
                        : activeIntent === 'business'
                        ? businessForm.email
                        : generalForm.email}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between py-1 gap-1">
                    <span className="text-[#64748B]">Standard Response SLA:</span>
                    <span className="text-[#0B1320]">Within one business day (GST hours)</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] hover:underline cursor-pointer"
                  >
                    <span>Submit another inquiry or tender</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2 text-xs text-[#64748B]">
                    <ShieldCheck className="w-4 h-4 text-[#173C62]" />
                    <span>Transmitted under LTSGROUP Commercial NDA Protocols</span>
                  </div>
                </div>
              </div>
            ) : (
              /* FORM WORKFLOW SURFACE */
              <form onSubmit={handleSubmit} noValidate className="space-y-12">
                {/* -----------------------------------------------------------------
                    RFP / TENDER WORKFLOW (4 OBVIOUS STAGES)
                ----------------------------------------------------------------- */}
                {activeIntent === 'rfp' && (
                  <div className="space-y-12">
                    {/* Tender Journey Visual Stepper */}
                    <div className="border-b border-slate-200 pb-8">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="space-y-1 border-l-2 border-[#173C62] pl-3">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#173C62] font-semibold">
                            STAGE 01
                          </span>
                          <p className="text-xs font-medium text-[#0B1320]">Project Information</p>
                        </div>
                        <div className="space-y-1 border-l-2 border-[#173C62] pl-3">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#173C62] font-semibold">
                            STAGE 02
                          </span>
                          <p className="text-xs font-medium text-[#0B1320]">Tender Documents</p>
                        </div>
                        <div className="space-y-1 border-l-2 border-[#173C62] pl-3">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#173C62] font-semibold">
                            STAGE 03
                          </span>
                          <p className="text-xs font-medium text-[#0B1320]">Scope &amp; Conditions</p>
                        </div>
                        <div className="space-y-1 border-l-2 border-[#173C62] pl-3">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#173C62] font-semibold">
                            STAGE 04
                          </span>
                          <p className="text-xs font-medium text-[#0B1320]">Verification &amp; Submit</p>
                        </div>
                      </div>
                    </div>

                    {/* Stage 1: Project Information */}
                    <div className="space-y-6">
                      <div className="border-b border-slate-200 pb-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-semibold block">
                          STAGE 01 &bull; PROJECT INFORMATION
                        </span>
                        <h3 className="text-lg font-medium text-[#0B1320] mt-0.5">
                          Tender Identification &amp; Project Classification
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5 sm:col-span-2">
                          <label
                            htmlFor="rfp-projectName"
                            className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                          >
                            Project Name / Tender Package Identifier <span className="text-[#173C62]">*</span>
                          </label>
                          <input
                            id="rfp-projectName"
                            name="projectName"
                            type="text"
                            value={rfpForm.projectName}
                            onChange={handleRfpChange}
                            placeholder="e.g. Commercial High-Rise Tower MEP Package Phase 2"
                            className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                              errors.projectName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                            } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                          />
                          {errors.projectName && (
                            <p className="text-xs text-rose-600 pt-0.5">{errors.projectName}</p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="rfp-location"
                            className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                          >
                            Project Location / Emirate <span className="text-[#173C62]">*</span>
                          </label>
                          <select
                            id="rfp-location"
                            name="location"
                            value={rfpForm.location}
                            onChange={handleRfpChange}
                            className="w-full px-4 py-3.5 text-sm text-[#0B1320] bg-white border border-slate-200 rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none"
                          >
                            <option value="Dubai">Dubai, UAE</option>
                            <option value="Abu Dhabi">Abu Dhabi, UAE</option>
                            <option value="Sharjah">Sharjah, UAE</option>
                            <option value="Northern Emirates">Northern Emirates (Ajman, RAK, Fujairah)</option>
                            <option value="Regional GCC">Other GCC Regional Location</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="rfp-discipline"
                            className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                          >
                            Primary Engineering Discipline <span className="text-[#173C62]">*</span>
                          </label>
                          <select
                            id="rfp-discipline"
                            name="discipline"
                            value={rfpForm.discipline}
                            onChange={handleRfpChange}
                            className="w-full px-4 py-3.5 text-sm text-[#0B1320] bg-white border border-slate-200 rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none"
                          >
                            <option value="Turnkey MEP Contracting">Turnkey MEP Contracting (Full Services)</option>
                            <option value="Commercial Solar PV EPC">Commercial Solar PV EPC (Shams Dubai)</option>
                            <option value="Low-Voltage Control Switchgear">Low-Voltage Form-4 Switchgear</option>
                            <option value="Central Chiller & Hydronic Retrofit">Central Chiller &amp; Hydronic Retrofit</option>
                            <option value="Facilities Management Hard Services">Hard Facilities Management Contract</option>
                            <option value="Aquatic & Pool Water Treatment">Aquatic &amp; Swimming Pool Systems</option>
                            <option value="Wholesale Technical Equipment">Wholesale Technical Component Supply</option>
                          </select>
                        </div>

                        <div className="space-y-1.5 sm:col-span-2">
                          <label
                            htmlFor="rfp-targetDate"
                            className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                          >
                            Tender Return Deadline / Target Site Commencement
                          </label>
                          <input
                            id="rfp-targetDate"
                            name="targetDate"
                            type="text"
                            value={rfpForm.targetDate}
                            onChange={handleRfpChange}
                            placeholder="e.g. Tender return by 28th of next month / Site handover Q3"
                            className="w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border border-slate-200 rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stage 2: Tender Documents */}
                    <div className="space-y-6">
                      <div className="border-b border-slate-200 pb-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-semibold block">
                          STAGE 02 &bull; TENDER DOCUMENTS
                        </span>
                        <h3 className="text-lg font-medium text-[#0B1320] mt-0.5">
                          Drawings, BOQ Schedules &amp; Engineering Specifications
                        </h3>
                      </div>

                      {/* Dropzone Staging UI (Ready for API integration) */}
                      <div className="bg-white border-2 border-dashed border-slate-300 hover:border-[#173C62] transition-colors rounded-[12px] sm:rounded-[14px] p-6 sm:p-8 text-center space-y-3">
                        <div className="w-12 h-12 mx-auto rounded-[12px] bg-slate-50 border border-slate-200 flex items-center justify-center text-[#173C62]">
                          <UploadCloud className="w-6 h-6" />
                        </div>

                        <div className="space-y-1">
                          <p className="text-sm font-medium text-[#0B1320]">
                            Stage tender drawings, BOQ spreadsheets, or specification packages
                          </p>
                          <p className="text-xs text-[#64748B]">
                            Supports PDF, DWG, RVT, XLSX, ZIP dossiers. Click to browse or drop files here.
                          </p>
                        </div>

                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          onChange={handleFileSelect}
                          className="hidden"
                          id="tender-file-input"
                        />

                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-[#0B1320] rounded-[8px] transition-colors cursor-pointer"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Select Files to Attach</span>
                          </button>
                        </div>

                        {/* Explicit Honesty & Backend Notice (Rule 11) */}
                        <div className="pt-4 border-t border-slate-100 mt-4 max-w-xl mx-auto">
                          <p className="text-[11px] text-[#64748B] leading-relaxed">
                            <span className="font-semibold text-[#0B1320]">Note:</span> Attached files stage in your browser session for this review inquiry. For large multi-gigabyte BIM/CAD archives or confidential packages, direct encrypted transmission to{' '}
                            <a
                              href={`mailto:${CORPORATE_INFO.contact.emailTenders}`}
                              className="font-mono text-[#173C62] underline font-medium"
                            >
                              {CORPORATE_INFO.contact.emailTenders}
                            </a>{' '}
                            under Mutual NDA is actively supported.
                          </p>
                        </div>
                      </div>

                      {/* Staged Files List */}
                      {stagedFiles.length > 0 && (
                        <div className="space-y-2 pt-2">
                          <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-wider block">
                            STAGED FILES ({stagedFiles.length})
                          </span>
                          <div className="space-y-2">
                            {stagedFiles.map((file) => (
                              <div
                                key={file.id}
                                className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-[10px] text-xs"
                              >
                                <div className="flex items-center gap-2.5 truncate pr-2">
                                  <FileText className="w-4 h-4 text-[#173C62] shrink-0" />
                                  <span className="font-mono text-[#0B1320] truncate">{file.name}</span>
                                  <span className="text-[#64748B] text-[10px]">({file.size})</span>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFile(file.id)}
                                  className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                                  aria-label={`Remove file ${file.name}`}
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Stage 3: Scope & Conditions */}
                    <div className="space-y-6">
                      <div className="border-b border-slate-200 pb-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-semibold block">
                          STAGE 03 &bull; SCOPE &amp; MESSAGE
                        </span>
                        <h3 className="text-lg font-medium text-[#0B1320] mt-0.5">
                          Tender Scope Summary &amp; Statutory Authority Requirements
                        </h3>
                      </div>

                      <div className="space-y-5">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="rfp-scopeSummary"
                            className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                          >
                            Scope Overview &bull; Key Quantities &amp; Equipment <span className="text-[#173C62]">*</span>
                          </label>
                          <textarea
                            id="rfp-scopeSummary"
                            name="scopeSummary"
                            rows={4}
                            value={rfpForm.scopeSummary}
                            onChange={handleRfpChange}
                            placeholder="Please summarize primary scope elements (e.g. cooling tonnage, transformer capacity, number of risers, Shams Dubai rooftop area, or Form-4 switchboard ratings)..."
                            className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                              errors.scopeSummary ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                            } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none resize-y`}
                          />
                          {errors.scopeSummary && (
                            <p className="text-xs text-rose-600 pt-0.5">{errors.scopeSummary}</p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="rfp-specialConditions"
                            className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                          >
                            Statutory Clearances or Specific Project Conditions
                          </label>
                          <input
                            id="rfp-specialConditions"
                            name="specialConditions"
                            type="text"
                            value={rfpForm.specialConditions}
                            onChange={handleRfpChange}
                            placeholder="e.g. DEWA NOC required, DCD Class-A smoke extract verification, fast-track night works"
                            className="w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border border-slate-200 rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stage 4: Commercial Representative & Submission */}
                    <div className="space-y-6">
                      <div className="border-b border-slate-200 pb-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-semibold block">
                          STAGE 04 &bull; COMMERCIAL REPRESENTATIVE &amp; SUBMISSION
                        </span>
                        <h3 className="text-lg font-medium text-[#0B1320] mt-0.5">
                          Estimator / Project Coordinator Contact Details
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label
                            htmlFor="rfp-representativeName"
                            className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                          >
                            Contact Name <span className="text-[#173C62]">*</span>
                          </label>
                          <input
                            id="rfp-representativeName"
                            name="representativeName"
                            type="text"
                            value={rfpForm.representativeName}
                            onChange={handleRfpChange}
                            placeholder="e.g. Tariq Al Mansoori"
                            className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                              errors.representativeName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                            } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                          />
                          {errors.representativeName && (
                            <p className="text-xs text-rose-600 pt-0.5">{errors.representativeName}</p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="rfp-email"
                            className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                          >
                            Corporate Email <span className="text-[#173C62]">*</span>
                          </label>
                          <input
                            id="rfp-email"
                            name="email"
                            type="email"
                            value={rfpForm.email}
                            onChange={handleRfpChange}
                            placeholder="name@company.com"
                            className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                              errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                            } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                          />
                          {errors.email && (
                            <p className="text-xs text-rose-600 pt-0.5">{errors.email}</p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="rfp-phone"
                            className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                          >
                            Telephone <span className="text-[#173C62]">*</span>
                          </label>
                          <input
                            id="rfp-phone"
                            name="phone"
                            type="tel"
                            value={rfpForm.phone}
                            onChange={handleRfpChange}
                            placeholder="+971 50 000 0000"
                            className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                              errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                            } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                          />
                          {errors.phone && (
                            <p className="text-xs text-rose-600 pt-0.5">{errors.phone}</p>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="rfp-company"
                            className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                          >
                            Company / Employer <span className="text-[#173C62]">*</span>
                          </label>
                          <input
                            id="rfp-company"
                            name="company"
                            type="text"
                            value={rfpForm.company}
                            onChange={handleRfpChange}
                            placeholder="e.g. Al Naboodah Construction Group"
                            className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                              errors.company ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                            } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                          />
                          {errors.company && (
                            <p className="text-xs text-rose-600 pt-0.5">{errors.company}</p>
                          )}
                        </div>
                      </div>

                      {/* Submit RFP Action */}
                      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={status === 'loading'}
                          iconTrailing={
                            status === 'loading' ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <ArrowRight className="w-4 h-4" />
                            )
                          }
                          className="w-full sm:w-auto min-h-[50px] justify-center"
                        >
                          {status === 'loading' ? 'Transmitting Dossier...' : 'Submit Tender Dossier'}
                        </Button>

                        <div className="flex items-center gap-2 text-xs text-[#64748B]">
                          <ShieldCheck className="w-4 h-4 text-[#173C62]" />
                          <span>Direct routing to Dubai Estimating &amp; Tenders Desk</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* -----------------------------------------------------------------
                    GENERAL ENQUIRY WORKFLOW (CLEAN LIGHT SURFACE)
                ----------------------------------------------------------------- */}
                {activeIntent === 'general' && (
                  <div className="space-y-8">
                    <div className="border-b border-slate-200 pb-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-semibold block">
                        GENERAL PROJECT &amp; SERVICE INQUIRY
                      </span>
                      <h3 className="text-lg font-medium text-[#0B1320] mt-0.5">
                        Consultation with LTSGROUP Engineering &amp; Operations
                      </h3>
                      <p className="text-xs text-[#64748B] pt-1">
                        Please outline your requirements. Technical inquiries receive response from relevant division heads.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="gen-name"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Full Name <span className="text-[#173C62]">*</span>
                        </label>
                        <input
                          id="gen-name"
                          name="name"
                          type="text"
                          value={generalForm.name}
                          onChange={handleGeneralChange}
                          placeholder="e.g. Tariq Al Mansoori"
                          className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                            errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                          } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                        />
                        {errors.name && <p className="text-xs text-rose-600 pt-0.5">{errors.name}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="gen-email"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Corporate Email <span className="text-[#173C62]">*</span>
                        </label>
                        <input
                          id="gen-email"
                          name="email"
                          type="email"
                          value={generalForm.email}
                          onChange={handleGeneralChange}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                            errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                          } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                        />
                        {errors.email && <p className="text-xs text-rose-600 pt-0.5">{errors.email}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="gen-phone"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Telephone <span className="text-[#173C62]">*</span>
                        </label>
                        <input
                          id="gen-phone"
                          name="phone"
                          type="tel"
                          value={generalForm.phone}
                          onChange={handleGeneralChange}
                          placeholder="+971 50 000 0000"
                          className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                            errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                          } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                        />
                        {errors.phone && <p className="text-xs text-rose-600 pt-0.5">{errors.phone}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="gen-company"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Company / Organization <span className="text-[#173C62]">*</span>
                        </label>
                        <input
                          id="gen-company"
                          name="company"
                          type="text"
                          value={generalForm.company}
                          onChange={handleGeneralChange}
                          placeholder="e.g. Al Futtaim Real Estate"
                          className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                            errors.company ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                          } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                        />
                        {errors.company && (
                          <p className="text-xs text-rose-600 pt-0.5">{errors.company}</p>
                        )}
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label
                          htmlFor="gen-discipline"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Service Discipline of Interest
                        </label>
                        <select
                          id="gen-discipline"
                          name="discipline"
                          value={generalForm.discipline}
                          onChange={handleGeneralChange}
                          className="w-full px-4 py-3.5 text-sm text-[#0B1320] bg-white border border-slate-200 rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none"
                        >
                          <option value="Turnkey MEP Contracting">Turnkey MEP Contracting (Commercial / Residential)</option>
                          <option value="Commercial Solar PV EPC">Commercial Solar PV EPC (Shams Dubai)</option>
                          <option value="Low-Voltage Control Switchgear">Low-Voltage Form-4 Switchgear</option>
                          <option value="Facilities Management & Hard Services">Facilities Management &amp; Plant Care</option>
                          <option value="Central Chiller & Hydronic Retrofit">Central Chiller &amp; Hydronic Retrofits</option>
                          <option value="Swimming Pool Maintenance">Swimming Pool &amp; Aquatic Systems</option>
                          <option value="Technical Component Trading">Wholesale Technical Component Supply</option>
                          <option value="General Commercial Advisory">General Commercial Advisory</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label
                          htmlFor="gen-message"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Message &bull; Project Scope <span className="text-[#173C62]">*</span>
                        </label>
                        <textarea
                          id="gen-message"
                          name="message"
                          rows={5}
                          value={generalForm.message}
                          onChange={handleGeneralChange}
                          placeholder="Please describe your facility location, scope of work, technical requirements, or timeline..."
                          className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                            errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                          } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none resize-y`}
                        />
                        {errors.message && (
                          <p className="text-xs text-rose-600 pt-0.5">{errors.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={status === 'loading'}
                        iconTrailing={
                          status === 'loading' ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <ArrowRight className="w-4 h-4" />
                          )
                        }
                        className="w-full sm:w-auto min-h-[50px] justify-center"
                      >
                        {status === 'loading' ? 'Submitting Inquiry...' : 'Submit Project Inquiry'}
                      </Button>

                      <div className="flex items-center gap-2 text-xs text-[#64748B]">
                        <Clock className="w-4 h-4 text-[#173C62]" />
                        <span>Average response time within one business day</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* -----------------------------------------------------------------
                    BUSINESS ENQUIRY WORKFLOW (PARTNERSHIPS / PREQUALIFICATION)
                ----------------------------------------------------------------- */}
                {activeIntent === 'business' && (
                  <div className="space-y-8">
                    <div className="border-b border-slate-200 pb-3">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-semibold block">
                        COMMERCIAL &amp; INSTITUTIONAL ENGAGEMENT
                      </span>
                      <h3 className="text-lg font-medium text-[#0B1320] mt-0.5">
                        Vendor Prequalification, Manufacturer Agency &amp; Corporate Affairs
                      </h3>
                      <p className="text-xs text-[#64748B] pt-1">
                        Direct communication with LTSGROUP corporate governance and procurement leadership.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="biz-name"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Representative Name <span className="text-[#173C62]">*</span>
                        </label>
                        <input
                          id="biz-name"
                          name="name"
                          type="text"
                          value={businessForm.name}
                          onChange={handleBusinessChange}
                          placeholder="e.g. Tariq Al Mansoori"
                          className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                            errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                          } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                        />
                        {errors.name && <p className="text-xs text-rose-600 pt-0.5">{errors.name}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="biz-email"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Corporate Email <span className="text-[#173C62]">*</span>
                        </label>
                        <input
                          id="biz-email"
                          name="email"
                          type="email"
                          value={businessForm.email}
                          onChange={handleBusinessChange}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                            errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                          } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                        />
                        {errors.email && <p className="text-xs text-rose-600 pt-0.5">{errors.email}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="biz-phone"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Telephone <span className="text-[#173C62]">*</span>
                        </label>
                        <input
                          id="biz-phone"
                          name="phone"
                          type="tel"
                          value={businessForm.phone}
                          onChange={handleBusinessChange}
                          placeholder="+971 50 000 0000"
                          className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                            errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                          } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                        />
                        {errors.phone && <p className="text-xs text-rose-600 pt-0.5">{errors.phone}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="biz-company"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Organization / Principal <span className="text-[#173C62]">*</span>
                        </label>
                        <input
                          id="biz-company"
                          name="company"
                          type="text"
                          value={businessForm.company}
                          onChange={handleBusinessChange}
                          placeholder="e.g. Siemens Building Technologies"
                          className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                            errors.company ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                          } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none`}
                        />
                        {errors.company && (
                          <p className="text-xs text-rose-600 pt-0.5">{errors.company}</p>
                        )}
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label
                          htmlFor="biz-category"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Enquiry Classification
                        </label>
                        <select
                          id="biz-category"
                          name="category"
                          value={businessForm.category}
                          onChange={handleBusinessChange}
                          className="w-full px-4 py-3.5 text-sm text-[#0B1320] bg-white border border-slate-200 rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none"
                        >
                          <option value="Vendor Prequalification">Vendor &amp; Subcontractor Prequalification</option>
                          <option value="Manufacturer Agency">Original Equipment Manufacturer (OEM) Representation</option>
                          <option value="Technology Partnership">Technical or Sustainability Technology Alliance</option>
                          <option value="Institutional Affairs">Corporate Governance &amp; Regulatory Affairs</option>
                        </select>
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label
                          htmlFor="biz-proposal"
                          className="block text-xs font-medium text-[#0B1320] uppercase tracking-wider"
                        >
                          Proposal Summary &bull; Collaboration Scope <span className="text-[#173C62]">*</span>
                        </label>
                        <textarea
                          id="biz-proposal"
                          name="proposal"
                          rows={5}
                          value={businessForm.proposal}
                          onChange={handleBusinessChange}
                          placeholder="Please provide details regarding your firm's technical portfolio, licensing credentials, or proposed partnership scope..."
                          className={`w-full px-4 py-3.5 text-sm text-[#0B1320] placeholder:text-[#999999] bg-white border ${
                            errors.proposal ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200'
                          } rounded-[10px] sm:rounded-[12px] transition-colors focus:border-[#173C62] focus:ring-1 focus:ring-[#173C62] outline-none resize-y`}
                        />
                        {errors.proposal && (
                          <p className="text-xs text-rose-600 pt-0.5">{errors.proposal}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={status === 'loading'}
                        iconTrailing={
                          status === 'loading' ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <ArrowRight className="w-4 h-4" />
                          )
                        }
                        className="w-full sm:w-auto min-h-[50px] justify-center"
                      >
                        {status === 'loading' ? 'Submitting Proposal...' : 'Submit Commercial Proposal'}
                      </Button>

                      <div className="flex items-center gap-2 text-xs text-[#64748B]">
                        <Briefcase className="w-4 h-4 text-[#173C62]" />
                        <span>Corporate engagement under strict commercial confidentiality</span>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — MINIMAL CONTACT INFORMATION BLOCKS
          No giant table. No repeated CTA.
          Editorial 4-block horizontal ledger with quiet architectural typography.
      ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-16">
          {/* Section Header */}
          <div className="border-b border-[#0B1320] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748B] block font-semibold">
                OFFICIAL DIRECTORY &bull; DUBAI OPERATIONAL DESKS
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] mt-1">
                Direct Contact Information
              </h2>
            </div>
            <span className="text-xs font-mono text-[#64748B]">
              LTS Electromechanical Equipment Installation L.L.C.
            </span>
          </div>

          {/* Minimal 4-Block Editorial Rail */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Block 1: Headquarters */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-semibold block">
                01 / HEADQUARTERS
              </span>
              <p className="text-sm font-semibold text-[#0B1320]">
                Dubai Operational Center
              </p>
              <div className="text-xs text-[#4A5568] space-y-1 leading-relaxed">
                <p>{CORPORATE_INFO.contact.address.line1}</p>
                <p>{CORPORATE_INFO.contact.address.line2}</p>
                <p>{CORPORATE_INFO.contact.address.emirate}, {CORPORATE_INFO.contact.address.country}</p>
                <p className="font-mono pt-1 text-[#64748B]">Jurisdiction: United Arab Emirates</p>
              </div>
            </div>

            {/* Block 2: Direct Estimating & Tenders */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-semibold block">
                02 / TENDERS &amp; ESTIMATING
              </span>
              <p className="text-sm font-semibold text-[#0B1320]">
                Tender Dossiers &amp; BOQ Desk
              </p>
              <div className="text-xs text-[#4A5568] space-y-1.5 leading-relaxed">
                <p>Direct submittals and CAD/BIM drawing packs:</p>
                <a
                  href={`mailto:${CORPORATE_INFO.contact.emailTenders}`}
                  className="font-mono text-[#173C62] hover:underline font-semibold block"
                >
                  {CORPORATE_INFO.contact.emailTenders}
                </a>
                <p className="pt-1 text-[#64748B]">
                  Tel: <a href={`tel:${CORPORATE_INFO.contact.telephone}`} className="text-[#0B1320] hover:underline">{CORPORATE_INFO.contact.telephone}</a>
                </p>
              </div>
            </div>

            {/* Block 3: General Commercial & FM */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-semibold block">
                03 / GENERAL &amp; FM DESKS
              </span>
              <p className="text-sm font-semibold text-[#0B1320]">
                Commercial Desks
              </p>
              <div className="text-xs text-[#4A5568] space-y-1 leading-relaxed">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-[#64748B]">General:</span>
                  <a href={`mailto:${CORPORATE_INFO.contact.emailGeneral}`} className="font-mono text-[#173C62] hover:underline">
                    {CORPORATE_INFO.contact.emailGeneral}
                  </a>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-[#64748B]">Facilities:</span>
                  <a href={`mailto:${CORPORATE_INFO.contact.emailFM}`} className="font-mono text-[#173C62] hover:underline">
                    {CORPORATE_INFO.contact.emailFM}
                  </a>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#64748B]">Trading:</span>
                  <a href={`mailto:${CORPORATE_INFO.contact.emailTrading}`} className="font-mono text-[#173C62] hover:underline">
                    {CORPORATE_INFO.contact.emailTrading}
                  </a>
                </div>
              </div>
            </div>

            {/* Block 4: Operating Hours & Emergency Dispatch */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#173C62] font-semibold block">
                04 / OPERATING HOURS
              </span>
              <p className="text-sm font-semibold text-[#0B1320]">
                Commercial Schedule
              </p>
              <div className="text-xs text-[#4A5568] space-y-1 leading-relaxed">
                <p className="font-medium text-[#0B1320]">{CORPORATE_INFO.contact.hours} (GST)</p>
                <p className="text-[#64748B]">Excluding official UAE public holidays.</p>
                <div className="pt-2 border-t border-slate-100">
                  <span className="inline-block font-mono text-[10px] text-[#173C62] font-semibold uppercase">
                    24/7 EMERGENCY DISPATCH
                  </span>
                  <p className="text-[11px] text-[#64748B] pt-0.5">
                    Active on-call plant engineering for contracted FM properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — CLOSING ARCHITECTURAL / ENGINEERING IMAGE
          Use an architectural / engineering image to finish the page.
      ========================================================================= */}
      <section className="relative w-full h-[420px] sm:h-[500px] bg-[#0B1C2F] overflow-hidden">
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

        {/* Minimal scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-transparent to-transparent pointer-events-none" />

        {/* Quiet caption in corner */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#93C5FD] block font-semibold">
                LTSGROUP &bull; BUILT ENVIRONMENT EXCELLENCE
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
