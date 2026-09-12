import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { BrandLogo } from '../../design-system/atoms/BrandLogo';
import { Button } from '../../design-system/atoms/Button';
import { MegaMenu } from './MegaMenu';
import { MobileNavDrawer } from './MobileNavDrawer';
import { AnimatePresence, motion } from 'motion/react';
import { PRIMARY_NAVIGATION } from '../../data/navigationData';

export interface HeaderProps {
  currentPath: string;
  onNavigate: (slug: string) => void;
}

/**
 * Navbar Component
 * Conforms to LTSGROUP Architectural Navigation specifications:
 * - Logo on left
 * - Primary navigation in center/right
 * - Engineering & Construction (mega menu)
 * - Facilities Management (mega menu)
 * - Trading (mega menu)
 * - Projects, About Us, Industries, Clients, News Center (direct links)
 * - One strong conversion action (Contact / Enquire)
 * - Integrated website feel with smooth state transitions
 */
export const Navbar: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [activeMegaMenuId, setActiveMegaMenuId] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Monitor scroll for clean height adjustment (68px -> 60px)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility & outside click dismissal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMegaMenuId(null);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMegaMenuId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (megaMenuId?: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (megaMenuId) {
      setActiveMegaMenuId(megaMenuId);
    } else {
      setActiveMegaMenuId(null);
    }
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenuId(null);
    }, 180);
  };

  const handleItemClick = (slug: string) => {
    setActiveMegaMenuId(null);
    onNavigate(slug);
  };

  // Helper to determine if a route is currently active
  const isItemActive = (slug: string, id: string) => {
    if (id === 'engineering-construction') {
      return currentPath.startsWith('/engineering-construction') || currentPath.startsWith('/mep');
    }
    if (id === 'facilities-management') {
      return currentPath.startsWith('/facilities-management');
    }
    if (id === 'trading') {
      return currentPath.startsWith('/trading');
    }
    if (id === 'about-us') {
      return currentPath === '/about' || currentPath === '/about-us';
    }
    return currentPath === slug || (slug !== '/' && currentPath.startsWith(slug));
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB] transition-colors select-none shadow-none"
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar: 68px at rest, reducing smoothly to 60px when scrolled */}
        <div
          className={`flex items-center justify-between gap-2 xl:gap-4 transition-all duration-200 ease-out ${
            isScrolled ? 'h-[60px]' : 'h-[68px]'
          }`}
        >
          {/* =====================================================================
              1. LEFT: LTSGROUP Brand Logo
          ===================================================================== */}
          <div className="shrink-0 flex items-center">
            <BrandLogo
              variant="dark"
              withTagline={!isScrolled}
              onClick={() => handleItemClick('/')}
            />
          </div>

          {/* =====================================================================
              2. CENTER / RIGHT: Primary Navigation Items
                 - Engineering & Construction (Mega Menu)
                 - Facilities Management (Mega Menu)
                 - Trading (Mega Menu)
                 - Projects (Direct)
                 - About Us (Direct)
                 - Industries (Direct)
                 - Clients (Direct)
                 - News Center (Direct)
          ===================================================================== */}
          <nav
            aria-label="Main Corporate Navigation"
            className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 2xl:space-x-1.5 shrink min-w-0"
          >
            {PRIMARY_NAVIGATION.map((item) => {
              const isActive = isItemActive(item.slug, item.id);
              const isMegaOpen = activeMegaMenuId === item.megaMenuId;

              return (
                <div
                  key={item.id}
                  className="relative group py-1 shrink-0"
                  onMouseEnter={() => handleMouseEnter(item.megaMenuId)}
                >
                  <button
                    onClick={() => {
                      if (item.hasMegaMenu) {
                        setActiveMegaMenuId(isMegaOpen ? null : item.megaMenuId || null);
                      } else {
                        handleItemClick(item.slug);
                      }
                    }}
                    aria-expanded={item.hasMegaMenu ? isMegaOpen : undefined}
                    aria-haspopup={item.hasMegaMenu ? 'true' : undefined}
                    className={`px-2 xl:px-2.5 2xl:px-3 py-1.5 xl:py-2 text-[12px] xl:text-[13px] 2xl:text-[13.5px] font-medium tracking-normal whitespace-nowrap shrink-0 transition-colors duration-150 flex items-center gap-1 xl:gap-1.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2 rounded-[6px] ${
                      isActive
                        ? 'text-[#173C62] font-semibold'
                        : isMegaOpen
                        ? 'text-[#173C62]'
                        : 'text-[#334155] hover:text-[#173C62]'
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* Micro-chevron on mega menu triggers */}
                    {item.hasMegaMenu && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ease-out ${
                          isMegaOpen
                            ? 'rotate-180 text-[#173C62]'
                            : 'text-[#94A3B8] group-hover:text-[#173C62]'
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </button>

                  {/* Minimalist 2px Active Baseline Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={`absolute left-2 xl:left-2.5 right-2 xl:right-2.5 h-[2px] bg-[#173C62] hidden lg:block ${
                        isScrolled ? 'bottom-[-10px]' : 'bottom-[-14px]'
                      }`}
                      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* =====================================================================
              3. RIGHT: One High-Priority Contact Action
                 Capsule shape, restrained height, non-oversized, non-wrapping
          ===================================================================== */}
          <div className="hidden lg:flex items-center shrink-0 pl-1 xl:pl-2">
            <Button
              variant="primary"
              size="sm"
              shape="capsule"
              onClick={() => handleItemClick('/contact')}
              className="whitespace-nowrap shrink-0 text-[11px] xl:text-[11.5px] tracking-[0.06em] px-3.5 xl:px-4 py-2 min-h-[36px]"
            >
              <span className="hidden xl:inline">Contact / Enquire</span>
              <span className="xl:hidden">Contact Us</span>
            </Button>
          </div>

          {/* =====================================================================
              4. MOBILE & TABLET CONTROLS
                 Contact shortcut + accessible 44px menu button
          ===================================================================== */}
          <div className="flex items-center space-x-2.5 lg:hidden">
            <Button
              variant="primary"
              size="sm"
              shape="capsule"
              onClick={() => handleItemClick('/contact')}
              className="whitespace-nowrap shrink-0 text-[11px] px-4 py-2 min-h-[44px]"
            >
              Enquire
            </Button>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="w-11 h-11 flex items-center justify-center rounded-[10px] border border-[#E5E7EB] text-[#334155] hover:text-[#173C62] hover:bg-[#F8FAFC] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] shadow-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================================
          5. EDITORIAL MEGA MENU PANEL
             Dynamically switches between Engineering, FM, and Trading
      ===================================================================== */}
      <AnimatePresence>
        {activeMegaMenuId && (
          <div
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <MegaMenu
              divisionId={activeMegaMenuId}
              onClose={() => setActiveMegaMenuId(null)}
              onNavigate={handleItemClick}
              activePath={currentPath}
            />
          </div>
        )}
      </AnimatePresence>

      {/* =====================================================================
          6. MOBILE FULL-SCREEN NAVIGATION DRAWER
      ===================================================================== */}
      <MobileNavDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onNavigate={onNavigate}
        currentPath={currentPath}
      />
    </header>
  );
};
