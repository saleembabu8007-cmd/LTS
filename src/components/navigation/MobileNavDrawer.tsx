import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, ChevronDown, ArrowRight, Phone, Mail } from 'lucide-react';
import { BrandLogo } from '../../design-system/atoms/BrandLogo';
import { CORPORATE_INFO } from '../../data/corporateData';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (slug: string) => void;
  currentPath: string;
}

/**
 * MobileNavDrawer Component
 * Conforms strictly to the LTSGROUP Mobile Responsive Architecture:
 * - Full-screen expandable menu on mobile (w-full max-w-full sm:max-w-md)
 * - 44px minimum touch targets across all interactive elements
 * - No horizontal overflow or nested scrolling traps
 * - Semantic <a> navigation links with visible keyboard focus states
 * - Clear expandable division hierarchy:
 *   - Engineering & Construction
 *   - Facilities Management
 *   - Trading
 *   - Direct corporate items: Projects, About Us, Industries, Clients, News Center, Contact
 */
export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  currentPath,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [expandedSection, setExpandedSection] = useState<string | null>('engineering-construction');

  const handleSelect = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    onNavigate(slug);
    onClose();
  };

  const toggleSection = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  const divisions = [
    {
      id: 'engineering-construction',
      numeral: '01',
      title: 'Engineering & Construction',
      slug: '/engineering-construction',
      subItems: [
        { label: 'Division Overview', slug: '/engineering-construction' },
        { label: 'MEP Contracting', slug: '/engineering-construction/mep' },
        { label: 'Solar Solutions (EPC)', slug: '/engineering-construction/solar' },
        { label: 'Control Switchgear Assembly', slug: '/engineering-construction/control-switchgear' },
      ],
    },
    {
      id: 'facilities-management',
      numeral: '02',
      title: 'Facilities Management',
      slug: '/facilities-management',
      subItems: [
        { label: 'Division Overview', slug: '/facilities-management' },
        { label: 'Hard Services (HVAC, Electrical, BMS)', slug: '/facilities-management/hard-services' },
        { label: 'Soft Services (Swimming Pool Maintenance)', slug: '/facilities-management/soft-services' },
        { label: 'Retrofits / Refurbishment', slug: '/facilities-management/retrofits' },
      ],
    },
    {
      id: 'trading',
      numeral: '03',
      title: 'Trading & Components',
      slug: '/trading',
      subItems: [
        { label: 'Division Overview', slug: '/trading' },
        { label: 'HVAC Spare Parts', slug: '/trading/hvac' },
        { label: 'Controls & VFDs', slug: '/trading/controls-vfds' },
        { label: 'Metering & Accessories', slug: '/trading/metering' },
        { label: 'Lights', slug: '/trading/lights' },
        { label: 'EV Charger', slug: '/trading/ev' },
      ],
    },
  ];

  const directLinks = [
    { label: 'Projects', slug: '/projects' },
    { label: 'About Us', slug: '/about-us' },
    { label: 'Industries', slug: '/industries' },
    { label: 'Clients', slug: '/clients' },
    { label: 'News Center', slug: '/news' },
    { label: 'Contact & RFP Desk', slug: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Calm Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0B1C2F]/50"
            aria-hidden="true"
          />

          {/* Full-Screen Mobile Drawer Panel */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
            animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { x: '100%' }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-full sm:max-w-md bg-white h-full border-l border-[#E5E7EB] flex flex-col z-10 overflow-hidden shadow-none"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Bar: Brand Logo & 44px Accessible Close Control */}
            <div className="px-6 py-4 border-b border-[#E5E7EB] flex items-center justify-between bg-white shrink-0 min-h-[68px]">
              <a
                href="/"
                onClick={(e) => handleSelect(e, '/')}
                className="focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none rounded-[4px]"
                aria-label="LTSGROUP Home"
              >
                <BrandLogo
                  variant="dark"
                  withTagline={false}
                />
              </a>
              <button
                onClick={onClose}
                className="w-11 h-11 flex items-center justify-center rounded-[10px] border border-[#E5E7EB] text-[#334155] hover:text-[#0B1320] hover:bg-[#F8FAFC] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] shadow-none"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 text-left overscroll-contain">
              {/* Expandable Core Divisions */}
              <div className="space-y-3 pb-6 border-b border-[#E5E7EB]">
                <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-[0.16em] block mb-2">
                  Operating Divisions
                </span>

                {divisions.map((div) => {
                  const isExpanded = expandedSection === div.id;
                  const isActive = currentPath.startsWith(div.slug);

                  return (
                    <div key={div.id} className="border-b border-[#F1F5F9] pb-3 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => toggleSection(div.id)}
                        className="w-full flex items-center justify-between py-2 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px] min-h-[48px]"
                        aria-expanded={isExpanded}
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-[11px] text-[#173C62] font-semibold">
                            {div.numeral}
                          </span>
                          <span className={`text-[17px] font-medium transition-colors ${
                            isActive ? 'text-[#173C62]' : 'text-[#0B1320]'
                          }`}>
                            {div.title}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-[#94A3B8] transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#173C62]' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="mt-1 pl-6 space-y-1 pb-2 border-l border-[#E5E7EB]">
                          {div.subItems.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.slug}
                              onClick={(e) => handleSelect(e, sub.slug)}
                              className={`w-full text-left py-2.5 px-3 text-[14px] transition-colors rounded-[8px] min-h-[44px] flex items-center focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none ${
                                currentPath === sub.slug
                                  ? 'text-[#173C62] font-semibold bg-[#F8FAFC]'
                                  : 'text-[#4A5568] hover:text-[#173C62] hover:bg-[#F8FAFC]'
                              }`}
                            >
                              <span>{sub.label}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Direct Navigation Links */}
              <div className="space-y-1 pb-6 border-b border-[#E5E7EB]">
                <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-[0.16em] block mb-2">
                  Corporate &amp; Portfolio
                </span>

                {directLinks.map((link) => {
                  const isActive = currentPath === link.slug || (link.slug !== '/' && currentPath.startsWith(link.slug));
                  return (
                    <a
                      key={link.label}
                      href={link.slug}
                      onClick={(e) => handleSelect(e, link.slug)}
                      className={`w-full flex items-center justify-between py-3 px-1 text-left text-[16px] transition-colors min-h-[48px] focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none rounded-[4px] ${
                        isActive
                          ? 'text-[#173C62] font-semibold'
                          : 'text-[#0B1320] hover:text-[#173C62]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#94A3B8]" />
                    </a>
                  );
                })}
              </div>

              {/* Contact Information & Dispatch */}
              <div className="space-y-3 pt-2">
                <a
                  href="/contact"
                  onClick={(e) => handleSelect(e, '/contact')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#173C62] hover:bg-[#102B47] text-white text-xs font-semibold uppercase tracking-wider rounded-[12px] min-h-[48px] transition-colors focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none text-center"
                >
                  <span>Initiate Consultation / RFP</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="pt-3 text-[12px] text-[#64748B] space-y-2 font-mono">
                  <div className="flex items-center gap-2.5 min-h-[44px]">
                    <Phone className="w-4 h-4 text-[#173C62] shrink-0" />
                    <a
                      href={`tel:${CORPORATE_INFO.contact.telephone.replace(/\s+/g, '')}`}
                      className="text-[#0B1320] hover:underline"
                    >
                      {CORPORATE_INFO.contact.telephone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 min-h-[44px]">
                    <Mail className="w-4 h-4 text-[#173C62] shrink-0" />
                    <a
                      href={`mailto:${CORPORATE_INFO.contact.emailGeneral}`}
                      className="text-[#0B1320] hover:underline"
                    >
                      {CORPORATE_INFO.contact.emailGeneral}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
