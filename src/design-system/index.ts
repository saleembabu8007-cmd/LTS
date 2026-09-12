/**
 * LTSGROUP Master Architectural Design System
 * Strictly token-driven, built on the LTSGROUP Complete Visual Reset Constitution:
 * - Editorial typography + photography + generous whitespace + structural grid + subtle UI
 * - Intentionally rounded image containers: 24–32px; feature media: 28–36px; content surfaces: 20–28px
 * - Restrained rounded capsule or 12–16px radius for buttons; 9999px pills for tags and filters
 * - Universal box-shadow: none (Zero SaaS floating shadows)
 * - 1280–1380px Max Content Grid with 48–72px Desktop Gutters
 * - NO generic 3-column / 4-column card grids; use editorial rows, split layouts, mosaics, and mandate rows
 */

// 1. Tokens (Level 01)
export * from './tokens';

// 2. Atoms (Level 02: 23 Core Atoms)
export * from './atoms';

// 3. Molecules (Level 03: 16 Core Molecules)
export * from './molecules';

// 4. Organisms (Level 04: 13 Core Organisms)
export * from './organisms';

// 5. Section Primitives (Level 05: 14 Structural Primitives)
export * from './primitives';

// 6. First-Principles Cards (Section 13: 9 Reusable Card Families)
export * from './cards';

// 7. First-Principles Layout Archetypes (Section 8: 13 Layout Archetypes)
export * from './layouts';

// 8. Editorial Section Compositions (Compositions A through J)
export * from './compositions';

// 8. First-Principles Section Compositions (Section 14: 13 Section Compositions)
export { HeroImageSection, type HeroImageSectionProps, type HeroDatum } from './sections/HeroImageSection';
export { EditorialIntro, type EditorialIntroProps } from './sections/EditorialIntro';
export { ProjectFeature, type ProjectFeatureProps } from './sections/ProjectFeature';
export { ProjectRail, type ProjectRailProps } from './sections/ProjectRail';
export { ImageTextStory, type ImageTextStoryProps, type StoryPoint } from './sections/ImageTextStory';
export { VisualIndex, type VisualIndexProps } from './sections/VisualIndex';
export { ServiceExplorer, type ServiceExplorerProps } from './sections/ServiceExplorer';
export { IndustryExplorer, type IndustryExplorerProps } from './sections/IndustryExplorer';
export { CapabilityStory, type CapabilityStoryProps, type LifecyclePhase } from './sections/CapabilityStory';
export { PeopleFeature, type PeopleFeatureProps } from './sections/PeopleFeature';
export { NewsFeature as NewsFeatureSection, type NewsFeatureProps as NewsFeatureSectionProps } from './sections/NewsFeature';
export { QuoteFeature as EditorialQuoteFeature, type QuoteFeatureProps as EditorialQuoteFeatureProps } from './sections/QuoteFeature';
export { ContactFeature, type ContactFeatureProps } from './sections/ContactFeature';

export { Container } from './structures/Container';
export type { ContainerProps, ContainerVariant } from './structures/Container';
export { Section } from './structures/Section';
export type { SectionProps, SectionSpacing, SectionTone } from './structures/Section';
export { SplitSection } from './structures/SplitSection';
export type { SplitSectionProps } from './structures/SplitSection';
export { MediaTextSection } from './structures/MediaTextSection';
export type { MediaTextSectionProps } from './structures/MediaTextSection';
export { ListSection } from './structures/ListSection';
export type { ListSectionProps } from './structures/ListSection';
export { LogoGrid } from './structures/LogoGrid';
export type { LogoGridProps, LogoGridItem } from './structures/LogoGrid';
export { ProjectGrid } from './structures/ProjectGrid';
export type { ProjectGridProps } from './structures/ProjectGrid';
export { NewsGrid } from './structures/NewsGrid';
export type { NewsGridProps, NewsItemData } from './structures/NewsGrid';
export { AsymmetricMediaMosaic } from './structures/AsymmetricMediaMosaic';
export type { AsymmetricMediaMosaicProps, MosaicItem } from './structures/AsymmetricMediaMosaic';
export { EditorialGrid } from './structures/EditorialGrid';
export type { EditorialGridProps, GridCols } from './structures/EditorialGrid';
export { MediaGrid } from './structures/MediaGrid';
export type { MediaGridProps, MediaGridItem } from './structures/MediaGrid';

// Reusable Media System
export { Media } from './components/Media';
export type { MediaProps, MediaVariant, MediaAspectRatio, MediaRadius } from './components/Media';

// Canonical Cards & Modules
export { Card, MetricBlock, ImageCard } from './components/Card';
export type { CardProps, CardVariant, MetricBlockProps, ImageCardProps, ImageCardVariant } from './components/Card';
export { Accordion } from './components/Accordion';
export type { AccordionProps, AccordionItem } from './components/Accordion';

export { Tabs } from './components/Tabs';
export type { TabsProps, TabItem } from './components/Tabs';

export { Filter } from './components/Filter';
export type { FilterProps } from './components/Filter';

export { ClientLogoBlock } from './components/ClientLogoBlock';
export type { ClientLogoBlockProps, ClientLogoItem } from './components/ClientLogoBlock';
export { LogoGroup } from './components/LogoGroup';

export { StatisticBlock, StatisticGrid } from './components/StatisticBlock';
export { QuoteTestimonial } from './components/QuoteTestimonial';
export { Badge } from './components/Badge';

export { SectionHeader } from './components/SectionHeader';
export type { SectionHeaderProps } from './components/SectionHeader';

export { ContactForm } from './components/ContactForm';
export type { ContactFormProps } from './components/ContactForm';
export { Form } from './components/Form';
export type { FormProps } from './components/Form';
export { Input, Checkbox } from './components/FormControls';
