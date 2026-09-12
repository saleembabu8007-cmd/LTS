import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { CORPORATE_INFO } from '../../data/corporateData';

export interface FooterProps {
  onNavigate: (slug: string) => void;
  hidePreFooter?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, hidePreFooter = false }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    onNavigate(slug);
  };

  return (
    <footer className="bg-[#0B1C2F] text-slate-300 border-t border-white/10 selection:bg-[#173C62] selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* =====================================================================
            TIER 1 — ONE STRONG CTA
            Spacious, uncluttered commercial invitation before navigation
        ===================================================================== */}
        {!hidePreFooter && (
          <div className="py-16 sm:py-20 lg:py-24 border-b border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
              <div className="max-w-2xl space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#93C5FD] block font-semibold">
                  COMMERCIAL &amp; TENDER ENGAGEMENT
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.08]">
                  Ready to engineer your next facility or submit a tender?
                </h2>
                <p className="text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                  Connect directly with LTSGROUP directors, estimating engineers, and facilities advisors in Dubai.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
                <a
                  href="/contact?tab=rfp"
                  onClick={(e) => handleLinkClick(e, '/contact?tab=rfp')}
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#0B1320] text-xs font-semibold uppercase tracking-wider rounded-[10px] sm:rounded-[12px] transition-colors focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none min-h-[48px]"
                >
                  <span>Initiate Tender / Project Discussion</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 border border-white/20 hover:border-white/40 text-white text-xs font-semibold uppercase tracking-wider rounded-[10px] sm:rounded-[12px] transition-colors focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none min-h-[48px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#93C5FD]" />
                  <span>{CORPORATE_INFO.contact.telephone}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TIER 2 — MAIN DIRECTORY (SPACIOUS, NO DENSE 4-COLUMN WALL)
            Left: Large LTSGROUP identity & verified statement (5 cols)
            Right: Business Areas, Corporate, Contact (7 cols)
        ===================================================================== */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* -----------------------------------------------------------------
                LARGE LTSGROUP IDENTITY & VERIFIED COMPANY STATEMENT (5 COLS)
            ----------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6 lg:pr-8">
              <div className="space-y-3">
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="inline-block group focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[4px]"
                  aria-label="LTSGROUP Home"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[8px] bg-white flex items-center justify-center text-[#0B1C2F] font-bold text-sm tracking-wider">
                      LTS
                    </div>
                    <span className="text-2xl sm:text-3xl font-light tracking-wider text-white">
                      LTSGROUP
                    </span>
                  </div>
                </a>

                <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
                  {CORPORATE_INFO.tagline}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-md">
                Integrated electromechanical contracting, life-cycle facility engineering, and specialized technical supply across the United Arab Emirates.
              </p>

              <div className="pt-2 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]" />
                  <span>ISO 9001 &bull; 14001 &bull; 45001 Integrated Standards</span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">
                  Dubai Department of Economy &amp; Tourism Commercial License No: {CORPORATE_INFO.legal.licenseNumber}
                </p>
              </div>
            </div>

            {/* -----------------------------------------------------------------
                SPACIOUS NAVIGATION DIRECTORY (7 COLS)
                3 clean, generous columns: Business Areas | Corporate | Contact
            ----------------------------------------------------------------- */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-10">
              {/* Column 1: Business Areas */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  01 / BUSINESS AREAS
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300" role="list">
                  <li>
                    <a
                      href="/engineering-construction"
                      onClick={(e) => handleLinkClick(e, '/engineering-construction')}
                      className="hover:text-white transition-colors block py-0.5 font-medium text-white focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      Engineering &amp; Construction
                    </a>
                  </li>
                  <li className="pl-2 border-l border-white/15 space-y-2">
                    <a
                      href="/engineering-construction/mep"
                      onClick={(e) => handleLinkClick(e, '/engineering-construction/mep')}
                      className="hover:text-white transition-colors block py-0.5 text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      MEP Contracting
                    </a>
                    <a
                      href="/engineering-construction/solar"
                      onClick={(e) => handleLinkClick(e, '/engineering-construction/solar')}
                      className="hover:text-white transition-colors block py-0.5 text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      Solar Solutions (EPC)
                    </a>
                    <a
                      href="/engineering-construction/control-switchgear"
                      onClick={(e) => handleLinkClick(e, '/engineering-construction/control-switchgear')}
                      className="hover:text-white transition-colors block py-0.5 text-slate-400 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      Control Switchgear
                    </a>
                  </li>
                  <li className="pt-1">
                    <a
                      href="/facilities-management"
                      onClick={(e) => handleLinkClick(e, '/facilities-management')}
                      className="hover:text-white transition-colors block py-0.5 font-medium text-white focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      Facilities Management
                    </a>
                  </li>
                  <li>
                    <a
                      href="/trading"
                      onClick={(e) => handleLinkClick(e, '/trading')}
                      className="hover:text-white transition-colors block py-0.5 font-medium text-white focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      Trading &amp; Component Supply
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Corporate */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  02 / CORPORATE
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300" role="list">
                  <li>
                    <a
                      href="/projects"
                      onClick={(e) => handleLinkClick(e, '/projects')}
                      className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      Projects Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industries"
                      onClick={(e) => handleLinkClick(e, '/industries')}
                      className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      Industries &amp; Sectors
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us"
                      onClick={(e) => handleLinkClick(e, '/about-us')}
                      className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      About Us &amp; Governance
                    </a>
                  </li>
                  <li>
                    <a
                      href="/clients"
                      onClick={(e) => handleLinkClick(e, '/clients')}
                      className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      Credentials &amp; Clearances
                    </a>
                  </li>
                  <li>
                    <a
                      href="/news"
                      onClick={(e) => handleLinkClick(e, '/news')}
                      className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      News Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      onClick={(e) => handleLinkClick(e, '/contact')}
                      className="hover:text-white transition-colors block py-0.5 focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      Contact &amp; RFP Desk
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Contact & Operations */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  03 / CONTACT
                </h3>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="space-y-1">
                    <span className="block font-mono text-[10px] uppercase text-slate-400">
                      Tenders &amp; Estimating Desk
                    </span>
                    <a
                      href={`mailto:${CORPORATE_INFO.contact.emailTenders}`}
                      className="font-mono text-white hover:text-[#93C5FD] transition-colors block font-medium focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      {CORPORATE_INFO.contact.emailTenders}
                    </a>
                  </div>

                  <div className="space-y-1">
                    <span className="block font-mono text-[10px] uppercase text-slate-400">
                      Central Switchboard
                    </span>
                    <a
                      href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                      className="font-mono text-white hover:text-[#93C5FD] transition-colors block font-medium focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
                    >
                      {CORPORATE_INFO.contact.telephone}
                    </a>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="block font-mono text-[10px] uppercase text-slate-400">
                      Operational Headquarters
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {CORPORATE_INFO.address.street}, {CORPORATE_INFO.address.city}, UAE
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono">
                      Mon–Fri: 08:00 – 18:00 GST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            TIER 3 — STATUTORY LEGAL BAR
        ===================================================================== */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {CORPORATE_INFO.legalName}. Commercial Registration CN-1094821. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px]">
            <a
              href="/about-us"
              onClick={(e) => handleLinkClick(e, '/about-us')}
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
            >
              Corporate Governance
            </a>
            <a
              href="/clients"
              onClick={(e) => handleLinkClick(e, '/clients')}
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
            >
              Statutory Clearances
            </a>
            <a
              href="/contact?tab=rfp"
              onClick={(e) => handleLinkClick(e, '/contact?tab=rfp')}
              className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:outline-none rounded-[2px]"
            >
              Direct RFP Submittal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
