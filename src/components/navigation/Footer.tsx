import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { BrandLogo } from '../../design-system/atoms/BrandLogo';
import { CORPORATE_INFO } from '../../data/corporateData';

export interface FooterProps {
  onNavigate: (slug: string) => void;
  hidePreFooter?: boolean;
}

/**
 * Corporate Footer Component
 * Conforms strictly to LTSGROUP specifications:
 * - Compact, architectural vertical rhythm
 * - Tier 1: Commercial pre-footer invitation (optional)
 * - Tier 2: 4-Column structured directory (Identity, Business Areas, Corporate, Contact)
 * - Tier 3: Statutory legal bar with commercial registration & governance links
 * - Semantic <a> tags with accessible focus states
 */
export const Footer: React.FC<FooterProps> = ({ onNavigate, hidePreFooter = false }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    onNavigate(slug);
  };

  return (
    <footer className="bg-[#173C62] text-slate-300 border-t border-white/10 selection:bg-white selection:text-[#173C62]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* =====================================================================
            TIER 1 — COMPACT COMMERCIAL PRE-FOOTER INVITATION
        ===================================================================== */}
        {!hidePreFooter && (
          <div className="py-12 sm:py-14 lg:py-16 border-b border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
              <div className="max-w-2xl space-y-3">
                <span className="text-xs uppercase tracking-[0.12em] text-[#CBD5E1] block font-semibold">
                  COMMERCIAL &amp; TENDER ENGAGEMENT
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight leading-[1.1]">
                  Ready to engineer your next facility or submit a tender?
                </h2>
                <p className="text-sm text-slate-300 font-normal leading-relaxed max-w-xl">
                  Connect directly with LTSGROUP estimating engineers, technical directors, and facilities advisors in Dubai.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <a
                  href="/contact?tab=rfp"
                  onClick={(e) => handleLinkClick(e, '/contact?tab=rfp')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-[#173C62] text-xs font-semibold uppercase tracking-wider rounded-[8px] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none min-h-[44px]"
                >
                  <span>Initiate Tender / Project Discussion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-white/20 hover:border-white/40 text-white text-xs font-semibold uppercase tracking-wider rounded-[8px] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-300" />
                  <span>{CORPORATE_INFO.contact.telephone}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TIER 2 — COMPACT STRUCTURED DIRECTORY (4 BALANCED COLUMNS)
        ===================================================================== */}
        <div className="py-12 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 items-start">
            {/* -----------------------------------------------------------------
                1. BRAND IDENTITY & STATEMENT (4 COLS)
            ----------------------------------------------------------------- */}
            <div className="lg:col-span-4 space-y-5 lg:pr-6">
              <BrandLogo
                variant="light"
                withTagline={false}
                onClick={() => onNavigate('/')}
              />

              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                {CORPORATE_INFO.tagline}
              </p>

              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-normal max-w-sm">
                Integrated electromechanical contracting, life-cycle facility engineering, and specialized technical component distribution across the United Arab Emirates.
              </p>

              <div className="pt-1 space-y-1.5">
                <p className="text-[11px] uppercase tracking-wider text-slate-300 font-medium">
                  DEWA &bull; DCD &bull; DM Statutory Governance
                </p>
                <p className="text-[11px] text-slate-400 font-medium">
                  Dubai Commercial License: {CORPORATE_INFO.legal.licenseNumber}
                </p>
              </div>
            </div>

            {/* -----------------------------------------------------------------
                2. BUSINESS AREAS (3 COLS)
            ----------------------------------------------------------------- */}
            <div className="lg:col-span-3 space-y-3.5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                01 &bull; BUSINESS AREAS
              </h3>
              <ul className="space-y-2 text-xs text-slate-300" role="list">
                <li>
                  <a
                    href="/engineering-construction"
                    onClick={(e) => handleLinkClick(e, '/engineering-construction')}
                    className="hover:text-white transition-colors block py-0.5 font-medium text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Engineering &amp; Construction
                  </a>
                </li>
                <li className="pl-2.5 border-l border-white/15 space-y-1.5 py-0.5">
                  <a
                    href="/engineering-construction/mep"
                    onClick={(e) => handleLinkClick(e, '/engineering-construction/mep')}
                    className="hover:text-white transition-colors block py-0.5 text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    MEP Contracting
                  </a>
                  <a
                    href="/engineering-construction/solar"
                    onClick={(e) => handleLinkClick(e, '/engineering-construction/solar')}
                    className="hover:text-white transition-colors block py-0.5 text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Solar Solutions (EPC)
                  </a>
                  <a
                    href="/engineering-construction/control-switchgear"
                    onClick={(e) => handleLinkClick(e, '/engineering-construction/control-switchgear')}
                    className="hover:text-white transition-colors block py-0.5 text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Control Switchgear
                  </a>
                </li>
                <li className="pt-1">
                  <a
                    href="/facilities-management"
                    onClick={(e) => handleLinkClick(e, '/facilities-management')}
                    className="hover:text-white transition-colors block py-0.5 font-medium text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Facilities Management
                  </a>
                </li>
                <li className="pl-2.5 border-l border-white/15 space-y-1.5 py-0.5">
                  <a
                    href="/facilities-management/hard-services"
                    onClick={(e) => handleLinkClick(e, '/facilities-management/hard-services')}
                    className="hover:text-white transition-colors block py-0.5 text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Hard Services
                  </a>
                  <a
                    href="/facilities-management/soft-services"
                    onClick={(e) => handleLinkClick(e, '/facilities-management/soft-services')}
                    className="hover:text-white transition-colors block py-0.5 text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Soft Services
                  </a>
                  <a
                    href="/facilities-management/retrofits"
                    onClick={(e) => handleLinkClick(e, '/facilities-management/retrofits')}
                    className="hover:text-white transition-colors block py-0.5 text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Retrofits / Refurbishment
                  </a>
                </li>
                <li className="pt-1">
                  <a
                    href="/trading"
                    onClick={(e) => handleLinkClick(e, '/trading')}
                    className="hover:text-white transition-colors block py-0.5 font-medium text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Trading &amp; Component Supply
                  </a>
                </li>
              </ul>
            </div>

            {/* -----------------------------------------------------------------
                3. CORPORATE (2.5 COLS)
            ----------------------------------------------------------------- */}
            <div className="lg:col-span-2 space-y-3.5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                02 &bull; CORPORATE
              </h3>
              <ul className="space-y-2 text-xs text-slate-300" role="list">
                <li>
                  <a
                    href="/projects"
                    onClick={(e) => handleLinkClick(e, '/projects')}
                    className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Projects Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/industries"
                    onClick={(e) => handleLinkClick(e, '/industries')}
                    className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Industries &amp; Sectors
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    onClick={(e) => handleLinkClick(e, '/about-us')}
                    className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    About Us &amp; Governance
                  </a>
                </li>
                <li>
                  <a
                    href="/clients"
                    onClick={(e) => handleLinkClick(e, '/clients')}
                    className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Credentials &amp; Clearances
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    onClick={(e) => handleLinkClick(e, '/news')}
                    className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    News Center
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    onClick={(e) => handleLinkClick(e, '/contact')}
                    className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    Contact &amp; RFP Desk
                  </a>
                </li>
              </ul>
            </div>

            {/* -----------------------------------------------------------------
                4. CONTACT & DISPATCH (3 COLS)
            ----------------------------------------------------------------- */}
            <div className="lg:col-span-3 space-y-3.5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-white">
                03 &bull; CONTACT
              </h3>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="space-y-0.5">
                  <span className="block text-[10.5px] uppercase tracking-wider text-slate-400 font-semibold">
                    Tenders &amp; Estimating Desk
                  </span>
                  <a
                    href={`mailto:${CORPORATE_INFO.contact.emailTenders}`}
                    className="text-white hover:text-[#CBD5E1] transition-colors block font-medium focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    {CORPORATE_INFO.contact.emailTenders}
                  </a>
                </div>

                <div className="space-y-0.5">
                  <span className="block text-[10.5px] uppercase tracking-wider text-slate-400 font-semibold">
                    Central Switchboard
                  </span>
                  <a
                    href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                    className="text-white hover:text-[#CBD5E1] transition-colors block font-medium focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
                  >
                    {CORPORATE_INFO.contact.telephone}
                  </a>
                </div>

                <div className="space-y-0.5 pt-0.5">
                  <span className="block text-[10.5px] uppercase tracking-wider text-slate-400 font-semibold">
                    Operational Headquarters
                  </span>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {CORPORATE_INFO.address.street}, {CORPORATE_INFO.address.city}, UAE
                  </p>
                  <p className="text-[10.5px] text-slate-400 font-medium">
                    Mon–Fri: 08:00 – 18:00 GST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            TIER 3 — COMPACT STATUTORY LEGAL BAR
        ===================================================================== */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p className="text-center md:text-left text-[11.5px]">
            &copy; {new Date().getFullYear()} {CORPORATE_INFO.legalName}. CR No: {CORPORATE_INFO.legal.commercialRegistration}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-[11px]">
            <a
              href="/about-us"
              onClick={(e) => handleLinkClick(e, '/about-us')}
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
            >
              Corporate Governance
            </a>
            <a
              href="/clients"
              onClick={(e) => handleLinkClick(e, '/clients')}
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
            >
              Statutory Clearances
            </a>
            <a
              href="/contact?tab=rfp"
              onClick={(e) => handleLinkClick(e, '/contact?tab=rfp')}
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px]"
            >
              Direct RFP Submittal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
