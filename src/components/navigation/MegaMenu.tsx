import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { EDITORIAL_MEGA_MENU_DATA, EditorialMegaMenuData } from '../../data/navigationData';

export interface MegaMenuProps {
  divisionId?: string;
  onClose: () => void;
  onNavigate: (slug: string) => void;
  activePath?: string;
}

/**
 * Editorial MegaMenu
 * Follows the LTSGROUP Editorial Architecture:
 * - LEFT: Large division name, numeral, concise explanation, division-level CTA.
 * - CENTER: Service categories grouped with strong typography and subtle hover states.
 * - RIGHT: Large visual image (18px radius) with capability highlight.
 * 
 * Banned:
 * - 3-column equal boxes
 * - Tiny descriptions beside every link
 * - Borders between every item
 * - Pill-shaped navigation items
 * - Badge-heavy navigation
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

  const handleSelect = (slug: string) => {
    onNavigate(slug);
    onClose();
  };

  return (
    <motion.div
      ref={menuRef}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 w-full bg-white border-b border-[#E5E7EB] z-50 overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
      role="region"
      aria-label={`${data.divisionTitle} Capability Directory`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* =====================================================================
              1. LEFT: Division Identity & Scope (~3.5 Cols)
          ===================================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 text-left pr-0 lg:pr-6">
            <div>
              <div className="flex items-center gap-2.5 text-[11px] font-mono text-[#173C62] uppercase tracking-[0.18em] font-semibold">
                <span>DIVISION {data.numeral}</span>
              </div>

              <h3 className="mt-2 text-[26px] sm:text-[30px] font-light text-[#0B1320] leading-[1.12] tracking-tight">
                {data.divisionTitle}
              </h3>

              <p className="mt-3 text-[14px] text-[#4A5568] leading-relaxed max-w-[36ch] font-normal">
                {data.description}
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleSelect(data.overviewCta.slug)}
                className="group inline-flex items-center gap-2 text-[12px] text-[#173C62] hover:text-[#102B47] font-semibold tracking-[0.08em] uppercase cursor-pointer focus:outline-none focus-visible:underline"
              >
                <span>{data.overviewCta.label}</span>
                <span className="transition-transform duration-180 ease-out group-hover:translate-x-[3px]">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* =====================================================================
              2. CENTER: Service Categories Grouping (~4.5 Cols)
                 Clear grouping with strong typography, no tiny badges or borders
          ===================================================================== */}
          <div className="lg:col-span-4 text-left space-y-6">
            <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-[0.16em] block">
              Core Capabilities
            </span>

            <div className="space-y-5">
              {data.categories.map((category) => {
                const isCatActive = activePath.startsWith(category.slug);

                return (
                  <div key={category.title} className="group">
                    {/* Primary Service Link */}
                    <button
                      onClick={() => handleSelect(category.slug)}
                      className={`w-full text-left flex items-center justify-between py-1 text-[15px] font-medium transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#173C62] rounded-[4px] ${
                        isCatActive
                          ? 'text-[#173C62] font-semibold'
                          : 'text-[#0B1320] hover:text-[#173C62]'
                      }`}
                    >
                      <span>{category.title}</span>
                      <span className="text-[#173C62] opacity-0 group-hover:opacity-100 transition-all duration-180 group-hover:translate-x-[3px]">
                        →
                      </span>
                    </button>

                    {/* Sub-services / Segments */}
                    {category.subItems && category.subItems.length > 0 && (
                      <div className="mt-1 pl-3 space-y-1 border-l border-[#E5E7EB]">
                        {category.subItems.map((sub) => {
                          const isSubActive = activePath === sub.slug;
                          return (
                            <button
                              key={sub.title}
                              onClick={() => handleSelect(sub.slug)}
                              className={`block w-full text-left py-0.5 text-[13px] transition-colors cursor-pointer ${
                                isSubActive
                                  ? 'text-[#173C62] font-medium'
                                  : 'text-[#64748B] hover:text-[#173C62]'
                              }`}
                            >
                              {sub.title}
                            </button>
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
              3. RIGHT: Large Visual Image / Featured Capability (~4 Cols)
                 18px soft radius, subtle zoom on hover, gradient scrim overlay
          ===================================================================== */}
          <div className="lg:col-span-4 text-left">
            <button
              onClick={() => handleSelect(data.visualFeature.slug)}
              className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[18px] cursor-pointer"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-[18px] bg-[#0B1C2F]">
                <img
                  src={data.visualFeature.image}
                  alt={data.visualFeature.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-[400ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F]/90 via-[#0B1C2F]/30 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-[#CBD5E1]">
                    FEATURED CAPABILITY
                  </span>
                  <h4 className="mt-1 text-[16px] font-medium text-white leading-snug group-hover:text-[#CBD5E1] transition-colors">
                    {data.visualFeature.title}
                  </h4>
                  <p className="mt-1 text-[12px] text-white/80 line-clamp-1 font-normal">
                    {data.visualFeature.subtitle}
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
