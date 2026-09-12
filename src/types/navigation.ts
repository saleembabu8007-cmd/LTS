export interface SubService {
  name: string;
  slug: string;
  description?: string;
  badge?: string;
}

export interface ServiceGroup {
  name: string;
  slug: string;
  description?: string;
  services: SubService[];
}

export interface VisualCue {
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  slug: string;
}

export interface NavGroupService {
  title: string;
  slug: string;
  description?: string;
  badge?: string;
}

export interface NavGroup {
  groupTitle: string;
  slug?: string;
  services: NavGroupService[];
}

export interface DivisionMegaMenuData {
  id: string;
  divisionTitle: string;
  eyebrow: string;
  overviewSlug: string;
  description: string;
  primaryCta: {
    label: string;
    slug: string;
  };
  visualCue: VisualCue;
  groups: NavGroup[];
}

export interface PrimaryNavItem {
  id: string;
  label: string;
  slug: string;
  hasMegaMenu: boolean;
  megaMenuId?: string;
}

export interface BusinessAreaDivision {
  id: string;
  title: string;
  slug: string;
  description?: string;
  subItems: {
    title: string;
    slug: string;
    badge?: string;
  }[];
}

export interface BusinessAreasMegaMenuData {
  title: string;
  eyebrow: string;
  description: string;
  overviewLink: {
    label: string;
    slug: string;
  };
  divisions: BusinessAreaDivision[];
  featuredVisual: {
    title: string;
    subtitle: string;
    badge: string;
    image: string;
    slug: string;
    actionLabel?: string;
  };
}

export interface BreadcrumbItem {
  label: string;
  slug: string;
}

