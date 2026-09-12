import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EDITORIAL_MEGA_MENU_DATA, EditorialMegaMenuData } from '../../data/navigationData';
import { ArrowRight } from 'lucide-react';

export interface MegaMenuProps {
  divisionId?: string;
  onClose: () => void;
  onNavigate: (slug: string) => void;
  activePath?: string;
}

/**
 * Editorial Structured Dropdown Menu
 * Conforms to the LTSGROUP Dropdown Principle:
 * - business area & numeral
 * - short descriptor
 * - key sub-services with multi-signal active indicators
 * - view all CTA with micro interaction
 * - compact featured capability proof (16px soft radius)
 */
export const MegaMenu: React.FC<MegaMenuProps> = ({
  divisionId = 'engineering-construction',
  onClose,
  onNavigate,
  activePath = '',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

  const data: EditorialMegaMenuData =
    EDITORIAL_MEGA_MENU_DATA[divisionId] ||
    EDITORIAL_MEGA_MENU_DATA['engineering-construction'];

  // Keyboard accessibility: Escape key dismisses
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSelect = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    onNavigate(slug);
    onClose();
  };

  return (
    <>
      {/* Calm ambient backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={onClose}
        className="fixed inset-0 top-[68px] bg-[#0B1C2F]/20 backdrop-blur-[1px] z-40"
        aria-hidden="true"
      />

      {/* Structured Editorial Dropdown Panel */}
      <motion.div
        ref={menuRef}
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-full left-0 w-full bg-white border-b border-[#E5E7EB] z-50 overflow-hidden shadow-[0_20px_40px_-15px_rgba(11,28,47,0.08)]"
        role="region"
        aria-label={`${data.divisionTitle} Capability Directory`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* =====================================================================
                1. LEFT: Division Identity, Short Descriptor & View All CTA (4 Cols)
            ===================================================================== */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-6 text-left pr-0 lg:pr-6">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#173C62] uppercase tracking-[0.18em] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#173C62]" />
                  <span>DIVISION {data.numeral}</span>
                </div>

                <h3 className="mt-2 text-[24px] sm:text-[28px] font-light text-[#0B1320] leading-[1.12] tracking-tight">
                  {data.divisionTitle}
                </h3>

                <p className="mt-3 text-[13.5px] text-[#4A5568] leading-relaxed max-w-[36ch] font-normal">
                  {data.description}
                </p>
              </div>

              <div className="pt-1">
                <a
                  href={data.overviewCta.slug}
                  onClick={(e) => handleSelect(e, data.overviewCta.slug)}
                  className="group inline-flex items-center gap-2 text-[12px] text-[#173C62] hover:text-[#0B1C2F] font-semibold tracking-[0.08em] uppercase cursor-pointer focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none rounded-[4px] py-1 px-1 -ml-1 transition-colors"
                >
                  <span>{data.overviewCta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-180 ease-out group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* =====================================================================
                2. CENTER: Key Sub-Services with Multi-Signal Active States (4 Cols)
            ===================================================================== */}
            <div className="lg:col-span-4 text-left space-y-5">
              <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-[0.16em] block">
                Core Capabilities &amp; Scope
              </span>

              <div className="space-y-4">
                {data.categories.map((category) => {
                  const isCatActive = activePath === category.slug || activePath.startsWith(category.slug + '/');

                  return (
                    <div key={category.title} className="group/item">
                      {/* Primary Sub-Service Link */}
                      <a
                        href={category.slug}
                        onClick={(e) => handleSelect(e, category.slug)}
                        aria-current={isCatActive ? 'page' : undefined}
                        className={`w-full text-left flex items-center justify-between py-1 px-1.5 -mx-1.5 text-[14.5px] transition-colors rounded-[6px] focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none ${
                          isCatActive
                            ? 'text-[#173C62] font-semibold bg-[#F8FAFC]'
                            : 'text-[#0B1320] font-medium hover:text-[#173C62] hover:bg-[#F8FAFC]'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {isCatActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#173C62] shrink-0" aria-hidden="true" />
                          )}
                          <span>{category.title}</span>
                        </span>
                        <ArrowRight className="w-3 h-3 text-[#173C62] opacity-0 group-hover/item:opacity-100 transition-all duration-180 group-hover/item:translate-x-0.5" />
                      </a>

                      {/* Sub-items / Segments */}
                      {category.subItems && category.subItems.length > 0 && (
                        <div className="mt-1 pl-3.5 space-y-1 border-l border-[#E5E7EB]">
                          {category.subItems.map((sub) => {
                            const isSubActive = activePath === sub.slug;
                            return (
                              <a
                                key={sub.title}
                                href={sub.slug}
                                onClick={(e) => handleSelect(e, sub.slug)}
                                aria-current={isSubActive ? 'page' : undefined}
                                className={`block w-full text-left py-0.5 px-1 text-[13px] transition-colors rounded-[4px] focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none ${
                                  isSubActive
                                    ? 'text-[#173C62] font-semibold'
                                    : 'text-[#64748B] hover:text-[#173C62]'
                                }`}
                              >
                                {sub.title}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =====================================================================
                3. RIGHT: Featured Capability Proof (4 Cols, 16px soft radius)
            ===================================================================== */}
            <div className="lg:col-span-4 text-left">
              <a
                href={data.visualFeature.slug}
                onClick={(e) => handleSelect(e, data.visualFeature.slug)}
                className="group block w-full text-left focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:outline-none rounded-[16px] cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-[#0B1C2F]">
                  <img
                    src={data.visualFeature.image}
                    alt={data.visualFeature.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/90 via-[#0B1C2F]/30 to-transparent" />

                  <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                    <span className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#CBD5E1] block">
                      FEATURED CAPABILITY
                    </span>
                    <h4 className="mt-1 text-[15px] font-medium text-white leading-snug group-hover:text-[#93C5FD] transition-colors">
                      {data.visualFeature.title}
                    </h4>
                    <p className="mt-1 text-[12px] text-white/80 line-clamp-1 font-normal">
                      {data.visualFeature.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
