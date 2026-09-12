export type ServiceArchetype =
  | 'engineering-infrastructure'
  | 'specialized-solar'
  | 'fm-operations'
  | 'trading-supply';

export interface ServiceMetric {
  value: string;
  label: string;
  subtext?: string;
}

export interface ServiceCapabilityItem {
  title: string;
  description: string;
  specs?: { key: string; value: string }[];
  badge?: string;
  tags?: string[];
}

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  deliverable?: string;
}

export interface ApplicationSectorItem {
  sector: string;
  description: string;
  useCase: string;
  standards?: string;
}

export interface StrengthItem {
  title: string;
  description: string;
  highlight?: string;
}

export interface ServiceProjectItem {
  name: string;
  location: string;
  category: string;
  scopeSummary: string;
  metrics?: string;
  image: string;
}

export interface RelatedServiceItem {
  name: string;
  pillar: string;
  slug: string;
  relationReason: string;
}

export interface ServicePageData {
  id: string;
  slug: string;
  pillar: 'Engineering & Construction' | 'Facilities Management' | 'Trading';
  pillarSlug: string;
  parentCategory?: string;
  parentCategorySlug?: string;
  title: string;
  tagline: string;
  archetype: ServiceArchetype;
  compositionVariant?:
    | 'architectural-engineering'
    | 'renewable-epc'
    | 'operations-lifecycle'
    | 'equipment-supply';
  breadcrumb?: { label: string; slug: string }[];
  hero: {
    eyebrow: string;
    heading: string;
    summary: string;
    metrics?: ServiceMetric[];
    primaryCta: { label: string; slug: string };
    secondaryCta?: { label: string; slug: string };
    image: string;
    imageCaption?: string;
    technicalBadges?: string[];
  };
  introduction: {
    leadText: string;
    bodyParagraphs: string[];
    scopeInclusion: string[];
    scopeBoundaries?: string[];
    standards?: string[];
  };
  capabilities: {
    sectionTitle?: string;
    sectionSubtitle?: string;
    layoutVariant?: 'cards' | 'specs-table' | 'interactive-tabs' | 'two-column-list';
    items: ServiceCapabilityItem[];
  };
  supportingVisual?: {
    title: string;
    description?: string;
    image: string;
    caption?: string;
    dataPoints?: { label: string; value: string }[];
  };
  methodology?: {
    title: string;
    subtitle?: string;
    type: 'lifecycle' | 'sla-tiers' | 'procurement-cycle' | 'engineering-phases';
    steps: MethodologyStep[];
  };
  applications?: {
    title: string;
    subtitle?: string;
    items: ApplicationSectorItem[];
  };
  strengths?: {
    title: string;
    items: StrengthItem[];
  };
  projectProof?: {
    title?: string;
    projects: ServiceProjectItem[];
  };
  relatedServices?: {
    title?: string;
    services: RelatedServiceItem[];
  };
  cta: {
    headline: string;
    subheadline: string;
    primaryButtonText: string;
    servicePreselectKey?: string;
    contactHotline?: string;
    contactEmail?: string;
    turnaroundCommitment?: string;
  };
}
