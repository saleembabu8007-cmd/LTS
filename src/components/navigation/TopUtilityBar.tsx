import React from 'react';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { CORPORATE_INFO } from '../../data/corporateData';

interface TopUtilityBarProps {
  onNavigate?: (slug: string) => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ onNavigate }) => {
  const handleRfpClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate?.('/contact?tab=rfp');
  };

  return (
    <aside
      aria-label="Corporate credentials and dispatch"
      className="hidden lg:block bg-[#0B1320] text-slate-400 text-[11.5px] py-2 border-b border-white/10 select-none shadow-none"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Jurisdiction & Governance */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#173C62] shrink-0" />
            <span className="font-normal">{CORPORATE_INFO.jurisdiction}</span>
          </div>
          <span className="h-2.5 w-px bg-white/15" aria-hidden="true" />
          <span className="text-slate-400">
            ISO 9001 &bull; 14001 &bull; 45001 Integrated Governance
          </span>
        </div>

        {/* Right: Operations Dispatch & Direct RFP */}
        <div className="flex items-center gap-5">
          <a
            href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px] px-1 py-0.5"
            aria-label={`Call operations switchboard at ${CORPORATE_INFO.contact.telephone}`}
          >
            <Phone className="w-3 h-3 text-slate-400" aria-hidden="true" />
            <span className="font-medium tracking-wide">
              {CORPORATE_INFO.contact.telephone}
            </span>
            <span className="text-[10px] text-slate-400">
              (24/7 Operations)
            </span>
          </a>

          <span className="h-2.5 w-px bg-white/15" aria-hidden="true" />

          <a
            href={`mailto:${CORPORATE_INFO.contact.emailGeneral}`}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors tracking-wide focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px] px-1 py-0.5"
            aria-label={`Send general inquiry email to ${CORPORATE_INFO.contact.emailGeneral}`}
          >
            <Mail className="w-3 h-3 text-slate-400" aria-hidden="true" />
            <span>{CORPORATE_INFO.contact.emailGeneral}</span>
          </a>

          <span className="h-2.5 w-px bg-white/15" aria-hidden="true" />

          <a
            href="/contact?tab=rfp"
            onClick={handleRfpClick}
            className="text-white hover:text-[#CBD5E1] font-medium tracking-wider uppercase text-[10.5px] flex items-center gap-1 transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none rounded-[4px] px-1 py-0.5"
          >
            <span>Tender &amp; RFP Desk</span>
            <ArrowUpRight className="w-3 h-3 opacity-80" aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  );
};
