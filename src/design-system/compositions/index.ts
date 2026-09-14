/**
 * LTSGROUP Master Composition Library
 * 14 controlled page section compositions (Compositions 01 through 14).
 * Enforces architectural visual rhythm, ensures page-by-page art direction,
 * and eliminates formulaic card-grid repetition.
 */

// Composition 01: Full-Width Image
export * from './CompositionFullWidthMedia';

// Composition 02: Large Image + Small Text (60/40 or 65/35)
export * from './CompositionImageText';

// Composition 03: Small Text + Large Image (35/65 or 40/60)
export * from './CompositionTextImage';

// Composition 04: Asymmetric Image Mosaic (re-exported from visual-patterns)
export { ImageMosaic } from '../visual-patterns/ImageMosaic';
export type { ImageMosaicProps, ImageMosaicItem } from '../visual-patterns/ImageMosaic';

// Composition 05: Horizontal Service List / Rows
export * from './CompositionEditorialList';

// Composition 06: Large-Number Editorial Strip (re-exported from proof)
export { ProofStrip, ProofDominant, ProofSplit, ProofItem } from '../proof';
export type { ProofStripProps, ProofDominantProps, ProofSplitProps, ProofItemProps } from '../proof';

// Composition 07: Full-Width Project Image Showcase
export * from './CompositionFullWidthProject';

// Composition 08: Split Editorial Section (5/7 or 6/6)
export * from './CompositionSplitEditorial';

// Composition 09: Logo Field / Authority Field
export * from './CompositionLogoGrid';

// Composition 10: Large Statement Section
export * from './CompositionDarkStatement';

// Composition 11: Minimal Accordion
export { EditorialAccordionItem } from '../molecules/EditorialAccordionItem';
export type { EditorialAccordionItemProps } from '../molecules/EditorialAccordionItem';

// Composition 12: Image-Led Grid / Feature With Supporting
export * from './CompositionFeatureWithSupporting';

// Composition 13: Overlapping Image Composition
export * from './CompositionOverlappingImage';

// Composition 14: Large Typography Section
export * from './CompositionLargeTypography';

// Additional Supporting Compositions & Classic Aliases (A through J)
export * from './CompositionMetricStrip';
export * from './CompositionFeaturedStory';
export * from './CompositionServiceMatrix';
