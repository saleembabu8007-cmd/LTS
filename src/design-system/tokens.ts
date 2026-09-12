/**
 * LTSGROUP Master Architectural Design System Tokens
 * Conforms strictly to the LTSGROUP Permanent Design Rules:
 * - Established Soft-Radius System: 8–20px scale
 *   - 8px: Meta badges, chips, tags
 *   - 10–12px: Forms, controls, buttons
 *   - 16px: Content surfaces, standard cards
 *   - 18px: Standard architectural photography containers
 *   - 20px: Feature media, panoramic modules, hero banners
 *   - 9999px: Capsule buttons and pills
 * - Zero random or extreme radius values
 * - Universal box-shadow: none (Depth created via contrast, tone, overlap, whitespace, hairlines)
 * - Restrained Palette: White/near-white canvas, LTS Blue (#173C62) brand accent, midnight navy (#0B1C2F)
 * - 1360px Max Content Grid with disciplined responsive padding and spacing scale
 */

export const COLOR_TOKENS = {
  // Brand
  primary: '#173C62',         // LTS Architectural Blue (Exact Brand Specification)
  primaryHover: '#102B47',    // Deep Blue Hover
  primaryDark: '#0B1C2F',     // Midnight Navy Statement Tone
  primaryLight: '#23578C',    // Architectural Accent Tint
  primaryTint: '#EDF3F9',     // Subtle Background Tint
  primarySubtle: '#F2F6FA',   // Micro Tint

  // Editorial Ink & Typography
  ink: '#0B1320',             // Deep Architectural Black-Navy for Primary Headings
  text: '#334155',            // Primary Body Text (Optimal Editorial Contrast)
  textSecondary: '#4A5568',   // Secondary Explanatory Copy
  muted: '#64748B',           // Metadata, Labels, Numbered Indexes (WCAG AA)
  subtle: '#94A3B8',          // Subdued Supplementary Annotations
  inverse: '#FFFFFF',         // Crisp White on Dark Statements
  inverseSecondary: '#CBD5E1',// Soft Grey on Dark Statements
  inverseMuted: '#94A3B8',    // Muted Metadata on Dark Statements

  // Canvas & Surfaces
  surface: '#FFFFFF',         // Pure White Base Canvas
  surfaceSubtle: '#F8FAFC',   // Architectural Neutral Stone / Alternate Band
  surfaceWarm: '#F1F5F9',     // Warm Neutral Canvas Band
  surfaceDark: '#0B1C2F',     // Deep Midnight Navy for Selected Impact Areas
  surfaceDarkElevated: '#11253E', // Secondary Dark Tone

  // Structural Hairline Borders
  border: '#E5E7EB',          // Standard 1px Neutral Hairline Divider
  borderStrong: '#CBD5E1',    // Emphasized Structural Divider
  borderLight: '#F1F5F9',     // Ultra-subtle Boundary
  borderDark: 'rgba(255, 255, 255, 0.12)', // Hairline on Dark Backgrounds
  borderDarkStrong: 'rgba(255, 255, 255, 0.24)',

  // Semantic Status Indicators Only (Success, Warning, Error)
  status: {
    success: '#079455',
    successBg: '#ECFDF3',
    warning: '#DC6803',
    warningBg: '#FEF0C7',
    error: '#D92D20',
    errorBg: '#FEF3F2',
    info: '#173C62',          // Brand Info fallback
    infoBg: '#EDF3F9',
  },
} as const;

export const SPACING_TOKENS = {
  // Strict deliberate spacing scale (4 to 160 px)
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px',
  64: '64px',
  80: '80px',
  96: '96px',
  120: '120px',
  160: '160px',

  // Named Aliases
  xs: '4px',
  sm: '8px',
  md: '12px',
  base: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
  '5xl': '128px',
  '6xl': '160px',

  // Normalized Section & Element Rhythm Tokens
  sectionCompact: 'clamp(3.5rem, 5vw, 5rem)',       // ~56px–80px
  sectionStandard: 'clamp(5rem, 7vw, 7rem)',        // ~80px–112px
  sectionSpacious: 'clamp(6.5rem, 9vw, 10rem)',      // ~104px–160px
  componentGap: '1.5rem',                           // 24px
  cardGap: '1.25rem',                                // 20px
  headingGap: '0.875rem',                            // 14px
  paragraphGap: '1rem',                              // 16px
  buttonGap: '0.75rem',                              // 12px
} as const;

export const TYPOGRAPHY_TOKENS = {
  fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontFamilyMono: "'JetBrains Mono', 'Fira Code', monospace",
  scale: {
    displayXXL: {
      fontSize: 'clamp(3rem, 6vw, 5.5rem)',        // 48px – 88px
      lineHeight: '1.04',
      fontWeight: '300',
      letterSpacing: '-0.035em',
    },
    displayXL: {
      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',      // 40px – 72px
      lineHeight: '1.06',
      fontWeight: '300',
      letterSpacing: '-0.03em',
    },
    displayL: {
      fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',    // 40px – 60px
      lineHeight: '1.10',
      fontWeight: '350',
      letterSpacing: '-0.025em',
    },
    displayM: {
      fontSize: 'clamp(2rem, 3.5vw, 3rem)',         // 32px – 48px
      lineHeight: '1.14',
      fontWeight: '400',
      letterSpacing: '-0.02em',
    },
    display: {
      fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)',   // Backward compatible alias
      lineHeight: '1.12',
      fontWeight: '400',
      letterSpacing: '-0.025em',
    },
    h1: {
      fontSize: 'clamp(1.75rem, 2.8vw, 2.5rem)',    // 28px – 40px
      lineHeight: '1.18',
      fontWeight: '500',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: 'clamp(1.35rem, 2vw, 1.875rem)',    // 22px – 30px
      lineHeight: '1.25',
      fontWeight: '600',
      letterSpacing: '-0.015em',
    },
    h3: {
      fontSize: 'clamp(1.125rem, 1.5vw, 1.35rem)',  // 18px – 22px
      lineHeight: '1.35',
      fontWeight: '600',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1rem',                             // 16px
      lineHeight: '1.45',
      fontWeight: '600',
      letterSpacing: '-0.005em',
    },
    bodyLarge: {
      fontSize: '1.0625rem',                        // 17px
      lineHeight: '1.65',
      fontWeight: '400',
    },
    body: {
      fontSize: '0.9375rem',                        // 15px
      lineHeight: '1.6',
      fontWeight: '400',
    },
    bodySmall: {
      fontSize: '0.8125rem',                        // 13px
      lineHeight: '1.55',
      fontWeight: '400',
    },
    metadata: {
      fontSize: '0.75rem',                          // 12px
      lineHeight: '1.5',
      fontWeight: '400',
      letterSpacing: '0.02em',
    },
    eyebrow: {
      fontSize: '0.6875rem',                        // 11px
      lineHeight: '1.4',
      fontWeight: '600',
      letterSpacing: '0.18em',
      textTransform: 'uppercase' as const,
      color: '#173C62',
    },
    navigation: {
      fontSize: '0.8125rem',                        // 13px
      lineHeight: '1.4',
      fontWeight: '500',
      letterSpacing: '0.01em',
    },
    button: {
      fontSize: '0.75rem',                          // 12px
      lineHeight: '1.4',
      fontWeight: '600',
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
    },
    caption: {
      fontSize: '0.75rem',                          // 12px
      lineHeight: '1.5',
      fontWeight: '400',
      color: '#64748B',
    },
  },
} as const;

export const RADIUS_TOKENS = {
  none: '0px',
  sm: '8px',                   // Small meta badges, compact chips
  md: '12px',                  // Forms, secondary buttons, controls
  lg: '16px',                  // Selected content surfaces, prominent visual cards
  image: '18px',               // Standard architectural photography containers
  xl: '20px',                  // Feature media, large image modules, hero banners
  form: '11px',                // Clean form input radius
  control: '12px',             // Buttons, interactive inputs
  surface: '16px',             // Content surfaces, editorial panels
  pill: '9999px',              // Intentionally pill-shaped buttons and tags only
  default: '12px',
} as const;

export const SHADOW_TOKENS = {
  none: 'none',
  subtle: '0 8px 30px rgba(0, 0, 0, 0.06)',     // Subtle floating navigation & interactive cards
  elevated: '0 16px 50px rgba(0, 0, 0, 0.08)',  // Mega menu, dropdowns, selected floating surfaces
} as const;

export const BORDER_TOKENS = {
  hairline: '1px solid #E5E7EB',
  strong: '1px solid #CBD5E1',
  dark: '1px solid rgba(255, 255, 255, 0.12)',
  active: '1px solid #173C62',
} as const;

export const CONTAINER_TOKENS = {
  // 4 Standard Architectural Container Variants
  global: {
    maxWidth: '1440px',
    padding: 'px-4 sm:px-6 lg:px-8',
    className: 'w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8',
  },
  wide: {
    maxWidth: '1360px',
    padding: 'px-6 sm:px-8 md:px-12 lg:px-16',
    className: 'w-full max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16',
  },
  standard: {
    maxWidth: '1140px',
    padding: 'px-6 sm:px-8 md:px-10',
    className: 'w-full max-w-[1140px] mx-auto px-6 sm:px-8 md:px-10',
  },
  narrow: {
    maxWidth: '760px',
    padding: 'px-4 sm:px-6',
    className: 'w-full max-w-[760px] mx-auto px-4 sm:px-6',
  },
  // Backward compatibility alias
  maxWidth: '1360px',
  padding: 'px-6 sm:px-8 md:px-12 lg:px-16',
} as const;

export const GRID_TOKENS = {
  maxContentWidth: '1360px',
  columns: {
    desktop: 12,
    tablet: 8,
    mobile: 4,
  },
  gap: {
    desktop: '2rem',           // 32px
    tablet: '1.5rem',          // 24px
    mobile: '1.25rem',         // 20px
  },
} as const;

export const MOTION_TOKENS = {
  // Exact Durations: 150–250ms for UI; 300–500ms for editorial media
  durationFast: '150ms',
  durationUiFast: '150ms',
  durationUi: '180ms',
  durationNormal: '220ms',
  durationUiSlow: '250ms',
  durationMedia: '400ms',
  durationMediaSlow: '500ms',

  // Architectural Ease-Out Curves
  easingDefault: 'cubic-bezier(0.16, 1, 0.3, 1)',   // Smooth architectural ease-out
  easingEaseOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easingAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
  easingDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',

  // Numerical parameters for Motion / Framer Motion
  numeric: {
    uiDuration: 0.18,                              // 180ms
    uiDurationFast: 0.15,                          // 150ms
    uiDurationNormal: 0.22,                        // 220ms
    mediaDuration: 0.40,                           // 400ms
    mediaDurationSlow: 0.50,                       // 500ms
    easeEditorial: [0.16, 1, 0.3, 1] as const,     // Ease-out
    imageScaleHover: 1.025,                        // Strictly 1.02–1.04
    arrowTranslationPx: 3,                         // 3px micro-translation
  },

  // Coordinated Motion Variants (Hierarchical, Never Element-by-Element Dominoes)
  variants: {
    sectionEntrance: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
    menuReveal: {
      initial: { opacity: 0, y: -4 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -4 },
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
    },
    drawerReveal: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '100%' },
      transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
    },
    fadeTransition: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.18, ease: 'easeOut' },
    },
  },
} as const;

export const BREAKPOINT_TOKENS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const Z_INDEX_TOKENS = {
  dropdown: 100,
  sticky: 200,
  header: 300,
  megaNav: 400,
  modal: 500,
  toast: 600,
} as const;

export const INTERACTIVE_TOKENS = {
  focusRing: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] focus-visible:ring-offset-2',
  focusRingDark: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1C2F]',
  disabled: 'disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed',
  transition: 'transition-all duration-200 ease-out',
} as const;

