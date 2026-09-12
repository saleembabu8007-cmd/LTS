import React, { useState, useEffect } from 'react';
import { TopUtilityBar } from './components/navigation/TopUtilityBar';
import { Navbar } from './components/navigation/Navbar';
import { Breadcrumb } from './design-system/molecules/Breadcrumb';
import { SectionSubNav } from './components/navigation/SectionSubNav';
import { Footer } from './components/navigation/Footer';
import { HomePage } from './components/home/HomePage';
import { EngineeringConstructionPage } from './components/pages/EngineeringConstructionPage';
import { FacilitiesManagementPage } from './components/pages/FacilitiesManagementPage';
import { TradingPage } from './components/pages/TradingPage';
import { AboutUsPage } from './components/pages/AboutUsPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { IndustriesPage } from './components/pages/IndustriesPage';
import { ClientsPage } from './components/pages/ClientsPage';
import { NewsCenterPage } from './components/pages/NewsCenterPage';
import { ContactPage } from './components/pages/ContactPage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';
import { NewsDetailPage } from './components/pages/NewsDetailPage';
import { ServiceDetailTemplate } from './components/service-template/ServiceDetailTemplate';
import { DesignSystemShowcase } from './components/pages/DesignSystemShowcase';
import { getServiceBySlug } from './data/serviceTemplateData';
import { getProjectBySlug } from './data/projectsData';
import { getArticleBySlug } from './data/newsData';
import { BreadcrumbItem } from './types/navigation';

export const cleanPath = (rawPath: string): string => {
  const pathOnly = rawPath.split('?')[0].split('#')[0];
  const normalized = pathOnly.replace(/\/+$/, '');
  return normalized === '' ? '/' : normalized;
};

const getInitialPath = (): string => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname || '/';
    const search = window.location.search || '';
    const hash = window.location.hash || '';
    return (pathname === '' ? '/' : pathname) + search + hash;
  }
  return '/';
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [activeSectionTab, setActiveSectionTab] = useState<string>('overview');

  useEffect(() => {
    const onPopState = () => {
      const pathname = window.location.pathname || '/';
      const search = window.location.search || '';
      const hash = window.location.hash || '';
      setCurrentPath((pathname === '' ? '/' : pathname) + search + hash);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Breadcrumb generator based on current route
  const getBreadcrumbs = (rawPath: string): BreadcrumbItem[] => {
    const path = cleanPath(rawPath);
    if (path === '/') return [];

    if (path === '/engineering-construction/mep') {
      return [
        { label: 'Engineering & Construction', slug: '/engineering-construction' },
        { label: 'MEP', slug: '/engineering-construction/mep' },
      ];
    }

    // Check if path is in registered service template pages
    const registeredService = getServiceBySlug(path);
    if (registeredService) {
      if (registeredService.breadcrumb && registeredService.breadcrumb.length > 0) {
        return registeredService.breadcrumb;
      }
      const crumbs: BreadcrumbItem[] = [
        { label: registeredService.pillar, slug: registeredService.pillarSlug },
      ];
      if (registeredService.parentCategory && registeredService.parentCategorySlug) {
        crumbs.push({ label: registeredService.parentCategory, slug: registeredService.parentCategorySlug });
      }
      crumbs.push({ label: registeredService.title, slug: registeredService.slug });
      return crumbs;
    }

    if (path === '/engineering-construction') {
      return [{ label: 'Engineering & Construction', slug: '/engineering-construction' }];
    }
    if (path.startsWith('/engineering-construction/mep/commercial-residential')) {
      return [
        { label: 'Engineering & Construction', slug: '/engineering-construction' },
        { label: 'MEP Services', slug: '/engineering-construction#section-mep' },
        { label: 'Commercial & Residential', slug: '/engineering-construction/mep/commercial-residential' },
      ];
    }
    if (path.startsWith('/engineering-construction/mep')) {
      return [
        { label: 'Engineering & Construction', slug: '/engineering-construction' },
        { label: 'MEP Services', slug: '/engineering-construction#section-mep' },
      ];
    }
    if (path.startsWith('/engineering-construction/solar')) {
      return [
        { label: 'Engineering & Construction', slug: '/engineering-construction' },
        { label: 'Solar Solutions', slug: '/engineering-construction#section-solar' },
        { label: 'Applications & EPC', slug: '/engineering-construction/solar/applications' },
      ];
    }
    if (path.startsWith('/engineering-construction/control-switchgear')) {
      return [
        { label: 'Engineering & Construction', slug: '/engineering-construction' },
        { label: 'Control Switchgear', slug: '/engineering-construction#section-switchgear' },
      ];
    }
    if (path === '/facilities-management') {
      return [{ label: 'Facilities Management', slug: '/facilities-management' }];
    }
    if (path.startsWith('/facilities-management/hvac')) {
      return [
        { label: 'Facilities Management', slug: '/facilities-management' },
        { label: 'Hard Services', slug: '/facilities-management#section-hard-services' },
        { label: 'HVAC Maintenance', slug: '/facilities-management/hvac' },
      ];
    }
    if (path.startsWith('/facilities-management/electrical')) {
      return [
        { label: 'Facilities Management', slug: '/facilities-management' },
        { label: 'Hard Services', slug: '/facilities-management#section-hard-services' },
        { label: 'Electrical Infrastructure', slug: '/facilities-management/electrical' },
      ];
    }
    if (path.startsWith('/facilities-management/plumbing')) {
      return [
        { label: 'Facilities Management', slug: '/facilities-management' },
        { label: 'Hard Services', slug: '/facilities-management#section-hard-services' },
        { label: 'Plumbing & Drainage', slug: '/facilities-management/plumbing' },
      ];
    }
    if (path.startsWith('/facilities-management/bms')) {
      return [
        { label: 'Facilities Management', slug: '/facilities-management' },
        { label: 'Hard Services', slug: '/facilities-management#section-hard-services' },
        { label: 'Building Management Systems (BMS)', slug: '/facilities-management/bms' },
      ];
    }
    if (path.startsWith('/facilities-management/civil')) {
      return [
        { label: 'Facilities Management', slug: '/facilities-management' },
        { label: 'Hard Services', slug: '/facilities-management#section-hard-services' },
        { label: 'Civil Works', slug: '/facilities-management/civil' },
      ];
    }
    if (path.startsWith('/facilities-management/swimming-pool') || path.startsWith('/facilities-management/soft-services')) {
      return [
        { label: 'Facilities Management', slug: '/facilities-management' },
        { label: 'Soft Services', slug: '/facilities-management#section-soft-services' },
        { label: 'Swimming Pool Maintenance', slug: '/facilities-management/swimming-pool' },
      ];
    }
    if (path.startsWith('/facilities-management/retrofits')) {
      return [
        { label: 'Facilities Management', slug: '/facilities-management' },
        { label: 'Retrofits / Refurbishment', slug: '/facilities-management#section-retrofits' },
      ];
    }
    if (path.startsWith('/facilities-management/hard-services')) {
      return [
        { label: 'Facilities Management', slug: '/facilities-management' },
        { label: 'Hard Services', slug: '/facilities-management#section-hard-services' },
      ];
    }
    if (path === '/trading') {
      return [{ label: 'Trading & Component Supply', slug: '/trading' }];
    }
    if (path.startsWith('/trading/hvac')) {
      return [
        { label: 'Trading & Supply', slug: '/trading' },
        { label: 'HVAC Spare Parts', slug: '/trading#section-hvac' },
      ];
    }
    if (path.startsWith('/trading/controls-vfds')) {
      return [
        { label: 'Trading & Supply', slug: '/trading' },
        { label: 'Controls & VFDs', slug: '/trading#section-controls' },
      ];
    }
    if (path.startsWith('/trading/metering')) {
      return [
        { label: 'Trading & Supply', slug: '/trading' },
        { label: 'Metering & Accessories', slug: '/trading#section-metering' },
      ];
    }
    if (path.startsWith('/trading/lights')) {
      return [
        { label: 'Trading & Supply', slug: '/trading' },
        { label: 'Commercial & Industrial Lights', slug: '/trading#section-lights' },
      ];
    }
    if (path.startsWith('/trading/ev')) {
      return [
        { label: 'Trading & Supply', slug: '/trading' },
        { label: 'EV Charger', slug: '/trading#section-ev' },
      ];
    }
    if (path === '/projects') {
      return [{ label: 'Projects', slug: '/projects' }];
    }
    if (path.startsWith('/projects/')) {
      const proj = getProjectBySlug(path);
      return [
        { label: 'Projects', slug: '/projects' },
        { label: proj ? proj.title : 'Project Detail', slug: path },
      ];
    }
    if (path === '/about' || path === '/about-us') {
      return [{ label: 'About', slug: '/about-us' }];
    }
    if (path === '/industries') {
      return [{ label: 'Industries', slug: '/industries' }];
    }
    if (path === '/clients' || path === '/clients-clearances') {
      return [{ label: 'Clients & Clearances', slug: '/clients' }];
    }
    if (path === '/news') {
      return [{ label: 'News', slug: '/news' }];
    }
    if (path.startsWith('/news/')) {
      const article = getArticleBySlug(path);
      return [
        { label: 'News', slug: '/news' },
        { label: article ? article.title : 'Technical Update', slug: path },
      ];
    }
    if (path.startsWith('/contact')) {
      return [{ label: 'Contact', slug: '/contact' }];
    }
    return [{ label: path.replace('/', '').replace(/-/g, ' '), slug: path }];
  };

  const handleNavigate = (slug: string) => {
    if (!slug) return;

    if (slug.startsWith('#')) {
      const id = slug.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', slug);
      }
      return;
    }

    setCurrentPath(slug);

    if (typeof window !== 'undefined') {
      const fullCurrent = window.location.pathname + window.location.search + window.location.hash;
      if (fullCurrent !== slug) {
        window.history.pushState({}, '', slug);
      }
    }

    const [pathPart, hashPart] = slug.split('#');
    if (hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const normalizedPath = cleanPath(currentPath);

  const handleSectionTabChange = (tabId: string) => {
    setActiveSectionTab(tabId);
    if (normalizedPath === '/engineering-construction/mep') {
      if (tabId === 'overview') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tabId === 'mep-capability') {
        document.getElementById('section-mep-capability')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'commercial-residential') {
        document.getElementById('commercial-residential')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'infrastructure') {
        document.getElementById('infrastructure')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'systems') {
        document.getElementById('section-systems')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'projects') {
        document.getElementById('section-projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (normalizedPath.startsWith('/engineering-construction')) {
      if (tabId === 'overview') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tabId === 'mep') {
        document.getElementById('section-mep')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'solar') {
        document.getElementById('section-solar')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'switchgear') {
        document.getElementById('section-switchgear')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'projects') {
        document.getElementById('section-projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (normalizedPath.startsWith('/facilities-management')) {
      if (tabId === 'overview') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tabId === 'hard') {
        document.getElementById('section-hard-services')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'soft') {
        document.getElementById('section-soft-services')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'retrofits') {
        document.getElementById('section-retrofits')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'sla') {
        document.getElementById('section-operations')?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (normalizedPath.startsWith('/trading')) {
      if (tabId === 'overview') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tabId === 'discovery') {
        document.getElementById('section-discovery')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'hvac') {
        document.getElementById('section-hvac')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'controls') {
        document.getElementById('section-controls')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'metering') {
        document.getElementById('section-metering')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'lights') {
        document.getElementById('section-lights')?.scrollIntoView({ behavior: 'smooth' });
      } else if (tabId === 'ev') {
        document.getElementById('section-ev')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentBreadcrumbs = getBreadcrumbs(normalizedPath);

  // Section tabs for in-page contextual subnav
  const getSectionTabs = (rawPath: string) => {
    const path = cleanPath(rawPath);
    if (path === '/engineering-construction') {
      return {
        title: 'Engineering & Construction',
        tabs: [
          { id: 'overview', label: 'Division Overview' },
          { id: 'mep', label: 'MEP Services' },
          { id: 'solar', label: 'Solar Solutions' },
          { id: 'switchgear', label: 'Control Switchgear' },
        ],
      };
    }
    if (path === '/engineering-construction/mep') {
      return {
        title: 'MEP Engineering',
        tabs: [
          { id: 'overview', label: 'Overview' },
          { id: 'mep-capability', label: 'Capability' },
          { id: 'commercial-residential', label: 'Commercial & Residential' },
          { id: 'infrastructure', label: 'Infrastructure' },
          { id: 'systems', label: 'Systems Matrix' },
          { id: 'projects', label: 'Projects' },
        ],
      };
    }
    if (path === '/facilities-management') {
      return {
        title: 'Facilities Management',
        tabs: [
          { id: 'overview', label: 'FM Overview' },
          { id: 'hard', label: 'Hard Services' },
          { id: 'soft', label: 'Soft Services' },
          { id: 'retrofits', label: 'Retrofits / Refurb' },
        ],
      };
    }
    if (path === '/trading') {
      return {
        title: 'Trading & Component Supply',
        tabs: [
          { id: 'overview', label: 'Trading Division' },
          { id: 'hvac', label: 'HVAC Parts' },
          { id: 'controls', label: 'Controls & VFDs' },
          { id: 'metering', label: 'Metering' },
          { id: 'lights', label: 'Lights' },
          { id: 'ev', label: 'EV Charger' },
        ],
      };
    }
    return null;
  };

  const isServiceDetailPage = !!getServiceBySlug(normalizedPath);
  const sectionNavData = !isServiceDetailPage && normalizedPath !== '/' ? getSectionTabs(normalizedPath) : null;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-[#11253E] selection:text-white">
      {/* 1. Top Utility Bar */}
      <TopUtilityBar onNavigate={handleNavigate} />

      {/* 2. Primary Desktop & Mobile Navigation Header */}
      <Navbar currentPath={normalizedPath} onNavigate={handleNavigate} />

      {/* 3. Section-Level Sub-Navigation (if on business unit landing) */}
      {sectionNavData && (
        <SectionSubNav
          title={sectionNavData.title}
          tabs={sectionNavData.tabs}
          activeTab={activeSectionTab}
          onTabChange={handleSectionTabChange}
          actionLabel="Request Information"
          onActionClick={() => handleNavigate('/contact')}
        />
      )}

      {/* 4. Main Content Viewport */}
      <main className="flex-1">
        {normalizedPath === '/' ? (
          <HomePage onNavigate={handleNavigate} />
        ) : normalizedPath === '/design-system' ? (
          <DesignSystemShowcase onNavigate={handleNavigate} />
        ) : normalizedPath === '/about' || normalizedPath === '/about-us' ? (
          <AboutUsPage onNavigate={handleNavigate} />
        ) : normalizedPath === '/projects' ? (
          <ProjectsPage onNavigate={handleNavigate} />
        ) : normalizedPath.startsWith('/projects/') ? (
          <ProjectDetailPage slug={normalizedPath} onNavigate={handleNavigate} />
        ) : normalizedPath === '/industries' ? (
          <IndustriesPage onNavigate={handleNavigate} />
        ) : normalizedPath === '/clients' || normalizedPath === '/clients-clearances' ? (
          <ClientsPage onNavigate={handleNavigate} />
        ) : normalizedPath === '/news' ? (
          <NewsCenterPage onNavigate={handleNavigate} />
        ) : normalizedPath.startsWith('/news/') ? (
          <NewsDetailPage slug={normalizedPath} onNavigate={handleNavigate} />
        ) : normalizedPath.startsWith('/contact') ? (
          <ContactPage
            onNavigate={handleNavigate}
            initialTab={currentPath.includes('rfp') ? 'rfp' : 'general'}
            initialScopeKey={(() => {
              const match = currentPath.match(/[?&](?:service|sector)=([^&]+)/);
              return match ? decodeURIComponent(match[1]) : undefined;
            })()}
          />
        ) : normalizedPath === '/engineering-construction' ? (
          <EngineeringConstructionPage onNavigate={handleNavigate} />
        ) : normalizedPath === '/facilities-management' ? (
          <FacilitiesManagementPage onNavigate={handleNavigate} />
        ) : normalizedPath === '/trading' ? (
          <TradingPage onNavigate={handleNavigate} currentPath={currentPath} />
        ) : getServiceBySlug(normalizedPath) ? (
          <ServiceDetailTemplate
            data={getServiceBySlug(normalizedPath)!}
            onNavigate={handleNavigate}
          />
        ) : normalizedPath.startsWith('/engineering-construction') ? (
          <EngineeringConstructionPage onNavigate={handleNavigate} />
        ) : normalizedPath.startsWith('/facilities-management') ? (
          <FacilitiesManagementPage onNavigate={handleNavigate} />
        ) : normalizedPath.startsWith('/trading') ? (
          <TradingPage onNavigate={handleNavigate} currentPath={currentPath} />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        )}
      </main>

      {/* 6. Complete Corporate Footer */}
      <Footer onNavigate={handleNavigate} hidePreFooter={normalizedPath === '/' || normalizedPath.startsWith('/contact')} />
    </div>

  );
}
