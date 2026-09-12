/**
 * LTSGROUP Editorial Section Composition System
 * A controlled library of 10 page section compositions (A through J).
 * Enforces architectural visual rhythm and prevents formulaic card-grid repetition.
 */

// Composition A: Text + Image (40% Text / 60% Image)
export * from './CompositionTextImage';

// Composition B: Image + Text (60% Image / 40% Text)
export * from './CompositionImageText';

// Composition C: Large Feature + Small Supporting Cards
export * from './CompositionFeatureWithSupporting';

// Composition D: Editorial List (Heading + Horizontal Rows)
export * from './CompositionEditorialList';

// Composition E: Metric Strip (Verified Benchmarks)
export * from './CompositionMetricStrip';

// Composition F: Logo Grid (Approved Authorities & Standards)
export * from './CompositionLogoGrid';

// Composition G: Featured Story (Large Image + Editorial Headline)
export * from './CompositionFeaturedStory';

// Composition H: Service Matrix (Grouped Services with Minimal Treatment)
export * from './CompositionServiceMatrix';

// Composition I: Full-Width Media (Large Photography with Minimal Overlay)
export * from './CompositionFullWidthMedia';

// Composition J: Dark Statement Section (Dark Navy + Large Statement + CTA)
export * from './CompositionDarkStatement';
