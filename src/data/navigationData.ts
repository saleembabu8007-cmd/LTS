import { PrimaryNavItem } from '../types/navigation';
export type { PrimaryNavItem };

export interface MegaMenuCategory {
  title: string;
  slug: string;
  subItems?: {
    title: string;
    slug: string;
  }[];
}

export interface EditorialMegaMenuData {
  id: string;
  numeral: string;
  divisionTitle: string;
  description: string;
  overviewCta: {
    label: string;
    slug: string;
  };
  categories: MegaMenuCategory[];
  visualFeature: {
    title: string;
    subtitle: string;
    image: string;
    slug: string;
  };
}

/**
 * LTSGROUP Primary Corporate Navigation
 * Conforms strictly to the approved LTSGROUP Information Architecture:
 * - Engineering & Construction (Mega Menu)
 * - Facilities Management (Mega Menu)
 * - Trading (Mega Menu)
 * - Projects (Direct Navigation)
 * - About Us (Direct Navigation)
 * - Industries (Direct Navigation)
 * - Clients (Direct Navigation)
 * - News Center (Direct Navigation)
 */
export const BUSINESS_NAV_ITEMS: PrimaryNavItem[] = [
  {
    id: 'engineering-construction',
    label: 'Engineering & Construction',
    slug: '/engineering-construction',
    hasMegaMenu: true,
    megaMenuId: 'engineering-construction',
  },
  {
    id: 'facilities-management',
    label: 'Facilities Management',
    slug: '/facilities-management',
    hasMegaMenu: true,
    megaMenuId: 'facilities-management',
  },
  {
    id: 'trading',
    label: 'Trading',
    slug: '/trading',
    hasMegaMenu: true,
    megaMenuId: 'trading',
  },
];

export const CORPORATE_NAV_ITEMS: PrimaryNavItem[] = [
  {
    id: 'projects',
    label: 'Projects',
    slug: '/projects',
    hasMegaMenu: false,
  },
  {
    id: 'about-us',
    label: 'About Us',
    slug: '/about-us',
    hasMegaMenu: false,
  },
  {
    id: 'industries',
    label: 'Industries',
    slug: '/industries',
    hasMegaMenu: false,
  },
  {
    id: 'clients',
    label: 'Clients',
    slug: '/clients',
    hasMegaMenu: false,
  },
  {
    id: 'news',
    label: 'News Center',
    slug: '/news',
    hasMegaMenu: false,
  },
];

export const PRIMARY_NAVIGATION: PrimaryNavItem[] = [
  ...BUSINESS_NAV_ITEMS,
  ...CORPORATE_NAV_ITEMS,
];


/**
 * Editorial Mega Menu Data Structure
 * Strictly implements the approved LTSGROUP service hierarchy with approved terminology:
 * 
 * 1. Engineering & Construction:
 *    - MEP (Commercial & Residential, Infrastructure)
 *    - Solar (Applications, Segments, Approach)
 *    - Control Switchgear
 * 
 * 2. Facilities Management:
 *    - Hard Services (HVAC, Electrical, Plumbing, BMS, Civil Works)
 *    - Soft Services (Swimming Pool Maintenance)
 *    - Retrofits / Refurbishment (Design & Engineering, Project Management, Testing & Commissioning)
 * 
 * 3. Trading:
 *    - HVAC Spare Parts
 *    - Controls & VFDs
 *    - Metering & Accessories
 *    - Lights
 *    - EV Charger
 */
export const EDITORIAL_MEGA_MENU_DATA: Record<string, EditorialMegaMenuData> = {
  'engineering-construction': {
    id: 'engineering-construction',
    numeral: '01',
    divisionTitle: 'Engineering & Construction',
    description:
      'Turnkey electromechanical contracting, utility-grade commercial solar PV EPC under DEWA Shams Dubai, and type-tested low-voltage control switchgear manufacturing.',
    overviewCta: {
      label: 'Explore Engineering Division',
      slug: '/engineering-construction',
    },
    visualFeature: {
      title: 'Commercial High-Rise MEP & Power',
      subtitle: 'DEWA Class 1 & DCD Class A Certified Turnkey Execution',
      image: '/assets/images/mep-construction.jpg',
      slug: '/projects/commercial-high-rise-mep',
    },
    categories: [
      {
        title: 'MEP Contracting',
        slug: '/engineering-construction/mep',
        subItems: [
          {
            title: 'Commercial & Residential',
            slug: '/engineering-construction/mep/commercial-residential',
          },
          {
            title: 'Infrastructure',
            slug: '/engineering-construction/mep/infrastructure',
          },
        ],
      },
      {
        title: 'Solar Solutions',
        slug: '/engineering-construction/solar',
        subItems: [
          {
            title: 'Applications',
            slug: '/engineering-construction/solar/applications',
          },
          {
            title: 'Segments',
            slug: '/engineering-construction/solar/segments',
          },
          {
            title: 'Approach',
            slug: '/engineering-construction/solar/approach',
          },
        ],
      },
      {
        title: 'Control Switchgear',
        slug: '/engineering-construction/control-switchgear',
        subItems: [],
      },
    ],
  },
  'facilities-management': {
    id: 'facilities-management',
    numeral: '02',
    divisionTitle: 'Facilities Management',
    description:
      'Continuous hard and soft facility engineering, predictive central chiller plant maintenance, commercial aquatic hygiene, and live-plant zero-downtime equipment retrofits.',
    overviewCta: {
      label: 'Explore Facilities Management',
      slug: '/facilities-management',
    },
    visualFeature: {
      title: '24/7 Hard & Soft Asset Stewardship',
      subtitle: 'Continuous Chiller Plant Reliability & Statutory Compliance',
      image: '/assets/images/hvac-hero.jpg',
      slug: '/facilities-management',
    },
    categories: [
      {
        title: 'Hard Services',
        slug: '/facilities-management/hard-services',
        subItems: [
          {
            title: 'HVAC',
            slug: '/facilities-management/hvac',
          },
          {
            title: 'Electrical',
            slug: '/facilities-management/electrical',
          },
          {
            title: 'Plumbing',
            slug: '/facilities-management/plumbing',
          },
          {
            title: 'BMS',
            slug: '/facilities-management/bms',
          },
          {
            title: 'Civil Works',
            slug: '/facilities-management/civil',
          },
        ],
      },
      {
        title: 'Soft Services',
        slug: '/facilities-management/soft-services',
        subItems: [
          {
            title: 'Swimming Pool Maintenance',
            slug: '/facilities-management/swimming-pool',
          },
        ],
      },
      {
        title: 'Retrofits / Refurbishment',
        slug: '/facilities-management/retrofits',
        subItems: [
          {
            title: 'Design & Engineering',
            slug: '/facilities-management/retrofits/design-engineering',
          },
          {
            title: 'Project Management',
            slug: '/facilities-management/retrofits/project-management',
          },
          {
            title: 'Testing & Commissioning',
            slug: '/facilities-management/retrofits/testing-commissioning',
          },
        ],
      },
    ],
  },
  'trading': {
    id: 'trading',
    numeral: '03',
    divisionTitle: 'Trading & Component Supply',
    description:
      'Authorized factory distribution of certified OEM HVAC spare parts, variable frequency drives, precision ultrasonic BTU thermal energy meters, industrial lights, and EV chargers.',
    overviewCta: {
      label: 'Explore Trading Division',
      slug: '/trading',
    },
    visualFeature: {
      title: 'Direct OEM Supply & Regional Inventory',
      subtitle: 'Original Manufacturer Parts with Certified Technical Support',
      image: '/assets/images/vfd-panel.jpg',
      slug: '/trading',
    },
    categories: [
      {
        title: 'HVAC Spare Parts',
        slug: '/trading/hvac',
        subItems: [],
      },
      {
        title: 'Controls & VFDs',
        slug: '/trading/controls-vfds',
        subItems: [],
      },
      {
        title: 'Metering & Accessories',
        slug: '/trading/metering',
        subItems: [],
      },
      {
        title: 'Lights',
        slug: '/trading/lights',
        subItems: [],
      },
      {
        title: 'EV Charger',
        slug: '/trading/ev',
        subItems: [],
      },
    ],
  },
};

// Corporate & Subsidiary Links
export const CORPORATE_LINKS = [
  { label: 'Projects', slug: '/projects' },
  { label: 'About Us', slug: '/about-us' },
  { label: 'Clients', slug: '/clients' },
  { label: 'Industries', slug: '/industries' },
  { label: 'News Center', slug: '/news' },
  { label: 'Contact', slug: '/contact' },
];

export const INDUSTRIES_SERVED = [
  'Commercial Towers & Corporate Offices',
  'Residential Communities & Master Developments',
  'Healthcare & Specialized Medical Facilities',
  'Industrial Facilities & Logistics Hubs',
  'Retail & Hospitality Destinations',
  'Government & Public Infrastructure',
];

// Backwards compatibility aliases
export const NAVIGATION_DATA = PRIMARY_NAVIGATION;
export const MEGA_MENU_DATA = EDITORIAL_MEGA_MENU_DATA;
export const BUSINESS_AREAS_MEGA_MENU_DATA = EDITORIAL_MEGA_MENU_DATA['engineering-construction'];
