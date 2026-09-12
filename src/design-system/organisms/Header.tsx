import React, { useState, useEffect } from 'react';
import { BrandLogo } from '../atoms/BrandLogo';
import { Button } from '../atoms/Button';
import { NavigationItem } from '../molecules/NavigationItem';
import { Container } from '../structures/Container';

export interface NavItemConfig {
  id: string;
  label: string;
  href?: string;
  hasMegaMenu?: boolean;
}

export interface HeaderProps {
  navItems?: NavItemConfig[];
  activeId?: string;
  onNavigate?: (href: string) => void;
  onMegaMenuToggle?: (id: string | null) => void;
  openMegaMenuId?: string | null;
  onContactClick?: () => void;
  className?: string;
}

const DEFAULT_NAV_ITEMS: NavItemConfig[] = [
  { id: 'business-areas', label: 'Business Areas', href: '/engineering-construction', hasMegaMenu: true },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'industries', label: 'Industries', href: '/industries' },
  { id: 'about', label: 'About', href: '/about-us' },
  { id: 'news', label: 'News', href: '/news' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const Header: React.FC<HeaderProps> = ({
  navItems = DEFAULT_NAV_ITEMS,
  activeId,
  onNavigate,
  onMegaMenuToggle,
  openMegaMenuId = null,
  onContactClick,
  className = '',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[300] w-full bg-white border-b border-[#E5E7EB] transition-all duration-200 shadow-none ${
        isScrolled ? 'h-[60px]' : 'h-[68px]'
      } flex items-center ${className}`}
    >
      <Container>
        <div className="flex items-center justify-between gap-6">
          {/* Left: Brand Logo */}
          <div className="shrink-0">
            <BrandLogo
              variant="dark"
              withTagline={!isScrolled}
              onClick={() => onNavigate?.('/')}
            />
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav
            className="hidden xl:flex items-center gap-6"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              const isMegaOpen = openMegaMenuId === item.id;

              return (
                <NavigationItem
                  key={item.id}
                  label={item.label}
                  href={item.href}
                  active={isActive}
                  hasDropdown={item.hasMegaMenu}
                  isOpen={isMegaOpen}
                  onClick={() => {
                    if (item.hasMegaMenu && onMegaMenuToggle) {
                      onMegaMenuToggle(isMegaOpen ? null : item.id);
                    } else if (item.href && onNavigate) {
                      onNavigate(item.href);
                    }
                  }}
                />
              );
            })}
          </nav>

          {/* Right: Primary Contact Action */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              shape="capsule"
              onClick={onContactClick || (() => onNavigate?.('/contact'))}
              className="hidden sm:inline-flex"
            >
              Contact / Enquire
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#0B1320] hover:text-[#173C62] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`h-0.5 w-full bg-current ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full bg-current transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 pt-4 border-t border-[#E5E7EB] space-y-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href || '#'}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (item.href && onNavigate) onNavigate(item.href);
                }}
                className="block py-2 text-sm font-sans font-medium text-[#0B1320] hover:text-[#173C62]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                shape="capsule"
                fullWidth
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick ? onContactClick() : onNavigate?.('/contact');
                }}
              >
                Contact / Enquire
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
