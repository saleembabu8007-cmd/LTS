import React, { useState } from 'react';
import {
  COLOR_TOKENS,
  SPACING_TOKENS,
  TYPOGRAPHY_TOKENS,
  RADIUS_TOKENS,
  SHADOW_TOKENS,
  BORDER_TOKENS,
  CONTAINER_TOKENS,
  GRID_TOKENS,
  MOTION_TOKENS,
  BREAKPOINT_TOKENS,
  Z_INDEX_TOKENS,
  INTERACTIVE_TOKENS,
  // Atoms (23)
  BrandLogo,
  NavText,
  Eyebrow,
  Heading,
  BodyText,
  Metadata,
  Caption,
  Arrow,
  Icon,
  Divider,
  Button,
  TextLink,
  Tag,
  BreadcrumbItem,
  Image,
  Video,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  StatusIndicator,
  NumberedBadge,
  FormField,
  FileUpload,
  // Molecules (16)
  NavigationItem,
  CTAGroup,
  SectionHeading,
  MediaCaption,
  MetricItem,
  QuoteAttribution,
  ProjectMeta,
  ServiceMeta,
  SearchField,
  FilterControl,
  Pagination,
  NewsMeta,
  LogoItem,
  MediaBannerStats,
  EditorialAccordionItem,
  NumberedMandateRow,
  Breadcrumb,
  // Organisms (13)
  Header,
  MegaNavigation,
  EditorialHero,
  EditorialBlock,
  ServiceIndex,
  ProjectFeatureOrganism,
  ProjectArchive,
  IndustryFeature,
  ClientLogoField,
  TestimonialOrganism,
  NewsFeature,
  ContactPanel,
  // Primitives (14)
  EditorialSplit,
  EditorialStack,
  MediaFeature,
  MediaRail,
  AsymmetricGrid,
  FeatureRow,
  NumberedList,
  LogoField,
  QuoteFeature,
  MetricBand,
  ImageMosaic,
  CTASection,
  Container,
  Section,
  SectionEntrance,
} from '../../design-system';
import {
  Shield,
  Zap,
  Compass,
  Check,
  Search,
  ExternalLink,
  ChevronRight,
  Sun,
  Moon,
  Layers,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

interface DesignSystemShowcaseProps {
  onNavigate?: (slug: string) => void;
}

export const DesignSystemShowcase: React.FC<DesignSystemShowcaseProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'atoms' | 'molecules' | 'organisms' | 'primitives' | 'motion'>('tokens');
  const [canvasTone, setCanvasTone] = useState<'white' | 'warm' | 'dark'>('white');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [checkboxVal, setCheckboxVal] = useState<boolean>(true);
  const [radioVal, setRadioVal] = useState<string>('mep');
  const [searchValue, setSearchValue] = useState<string>('');
  const [megaMenuOpen, setMegaMenuOpen] = useState<boolean>(false);

  const isDark = canvasTone === 'dark';
  const isWarm = canvasTone === 'warm';

  const canvasBackground = isDark
    ? 'bg-[#0B1C2F] text-white'
    : isWarm
    ? 'bg-[#F8FAFC] text-[#0B1320]'
    : 'bg-white text-[#0B1320]';

  const panelBg = isDark
    ? 'bg-[#11253E] border-white/10'
    : isWarm
    ? 'bg-white border-[#E2E8F0]'
    : 'bg-[#F8FAFC] border-[#E5E7EB]';

  const textPrimary = isDark ? 'text-white' : 'text-[#0B1320]';
  const textSecondary = isDark ? 'text-slate-300' : 'text-[#4A5568]';
  const textMuted = isDark ? 'text-slate-400' : 'text-[#64748B]';

  return (
    <div className={`min-h-screen ${canvasBackground} transition-colors duration-300 antialiased selection:bg-[#173C62] selection:text-white`}>
      {/* =========================================================================
          TEST LABORATORY HEADER & CANVAS TONE SWITCHER
      ========================================================================= */}
      <header className="border-b border-[#E5E7EB] bg-[#0B1C2F] text-white py-10 lg:py-14">
        <Container>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-white/60" />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-300">
                  LTSGROUP &bull; ATOMIC DESIGN SYSTEM SPECIFICATION
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  shape="capsule"
                  onClick={() => onNavigate?.('/')}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  &larr; Exit to Corporate Site
                </Button>
              </div>
            </div>

            <div className="max-w-4xl space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-light tracking-tight text-white leading-tight">
                Architectural Token &amp; Component Verification Laboratory
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                Five-level atomic architecture verifying the <strong>LTSGROUP Complete Visual Reset Constitution</strong>: centralized tokens, 24–36px soft intentional radiuses, restrained capsule controls, universal zero shadows (`box-shadow: none`), and open editorial layouts.
              </p>
            </div>

            {/* Canvas Material Switcher Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'tokens', label: '1. Tokens' },
                  { id: 'atoms', label: '2. Atoms (23)' },
                  { id: 'molecules', label: '3. Molecules (16)' },
                  { id: 'organisms', label: '4. Organisms (13)' },
                  { id: 'primitives', label: '5. Section Primitives (14)' },
                  { id: 'motion', label: '6. Restrained Motion' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer border rounded-full ${
                      activeTab === tab.id
                        ? 'bg-white text-[#0B1C2F] border-white'
                        : 'bg-transparent text-slate-300 border-white/20 hover:border-white hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Background Context Switcher (White / Warm / Dark) */}
              <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-full border border-white/15">
                <span className="text-[10.5px] font-mono text-slate-300 px-2 uppercase tracking-wider hidden sm:inline">
                  Canvas:
                </span>
                <button
                  type="button"
                  onClick={() => setCanvasTone('white')}
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-colors cursor-pointer ${
                    canvasTone === 'white' ? 'bg-white text-[#0B1C2F] font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  White
                </button>
                <button
                  type="button"
                  onClick={() => setCanvasTone('warm')}
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-colors cursor-pointer ${
                    canvasTone === 'warm' ? 'bg-[#F8FAFC] text-[#0B1320] font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Warm Neutral
                </button>
                <button
                  type="button"
                  onClick={() => setCanvasTone('dark')}
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-colors cursor-pointer ${
                    canvasTone === 'dark' ? 'bg-[#173C62] text-white font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Dark
                </button>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* =========================================================================
          LEVEL 01: TOKENS MATRIX
      ========================================================================= */}
      {activeTab === 'tokens' && (
        <section className="py-14 sm:py-20">
          <Container className="space-y-16">
            <SectionHeading
              eyebrow="LEVEL 01 — FOUNDATION"
              title="Centralized Design Tokens"
              description="Mathematical design tokens governing the entire LTSGROUP visual language. Every component consumes these tokens; no random values permitted."
            />

            {/* Colors */}
            <div className="space-y-4">
              <div className="border-b border-[#CBD5E1] pb-2 flex items-center justify-between">
                <h3 className={`text-xl font-sans font-semibold ${textPrimary}`}>Color Palette Tokens</h3>
                <span className="font-mono text-xs text-[#173C62]">Single Source of Truth</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: 'primary', hex: COLOR_TOKENS.primary, desc: 'LTS Architectural Blue' },
                  { name: 'primaryHover', hex: COLOR_TOKENS.primaryHover, desc: 'Deep Blue Hover' },
                  { name: 'primaryDark', hex: COLOR_TOKENS.primaryDark, desc: 'Midnight Statement' },
                  { name: 'ink', hex: COLOR_TOKENS.ink, desc: 'Headings Contrast' },
                  { name: 'surface', hex: COLOR_TOKENS.surface, desc: 'Base Canvas' },
                  { name: 'surfaceSubtle', hex: COLOR_TOKENS.surfaceSubtle, desc: 'Warm Neutral Stone' },
                  { name: 'border', hex: COLOR_TOKENS.border, desc: '1px Structural Hairline' },
                  { name: 'borderStrong', hex: COLOR_TOKENS.borderStrong, desc: 'Emphasized Hairline' },
                  { name: 'status.success', hex: COLOR_TOKENS.status.success, desc: 'Statutory Approval' },
                  { name: 'status.warning', hex: COLOR_TOKENS.status.warning, desc: 'Active Tender' },
                  { name: 'status.error', hex: COLOR_TOKENS.status.error, desc: 'Critical Alert' },
                  { name: 'primaryTint', hex: COLOR_TOKENS.primaryTint, desc: 'Atmospheric Tint' },
                ].map((color) => (
                  <div key={color.name} className={`p-3 space-y-2 rounded-[16px] border ${panelBg}`}>
                    <div
                      className="h-16 w-full rounded-[10px] border border-black/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="space-y-0.5">
                      <p className={`font-mono text-xs font-semibold ${textPrimary} truncate`}>{color.name}</p>
                      <p className={`font-mono text-[11px] ${textMuted} uppercase`}>{color.hex}</p>
                      <p className={`text-[10.5px] ${textSecondary}`}>{color.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Radius Tokens Matrix */}
            <div className="space-y-4">
              <div className="border-b border-[#CBD5E1] pb-2 flex items-center justify-between">
                <h3 className={`text-xl font-sans font-semibold ${textPrimary}`}>Corner Radius Scale (Intentional Soft Corners)</h3>
                <span className="font-mono text-xs text-[#173C62]">No Sharp Cards</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className={`p-6 rounded-[24px] border ${panelBg} space-y-3`}>
                  <span className="font-mono text-xs text-[#173C62] font-bold block">LARGE FEATURE MEDIA</span>
                  <div className="h-14 rounded-[32px] border border-[#CBD5E1] flex items-center justify-center font-mono text-xs text-[#173C62] bg-white">
                    32px – 36px
                  </div>
                  <p className={`text-xs ${textSecondary}`}>Panoramic heroes, cinematic facility video frames, landmark project banners.</p>
                </div>

                <div className={`p-6 rounded-[24px] border ${panelBg} space-y-3`}>
                  <span className="font-mono text-xs text-[#173C62] font-bold block">STANDARD IMAGES</span>
                  <div className="h-14 rounded-[28px] border border-[#CBD5E1] flex items-center justify-center font-mono text-xs text-[#173C62] bg-white">
                    28px
                  </div>
                  <p className={`text-xs ${textSecondary}`}>Split layout photography, photo mosaics, project archive imagery.</p>
                </div>

                <div className={`p-6 rounded-[24px] border ${panelBg} space-y-3`}>
                  <span className="font-mono text-xs text-[#173C62] font-bold block">CONTENT SURFACES</span>
                  <div className="h-14 rounded-[24px] border border-[#CBD5E1] flex items-center justify-center font-mono text-xs text-[#173C62] bg-white">
                    24px
                  </div>
                  <p className={`text-xs ${textSecondary}`}>Selected editorial quote enclosures, tender submission panels, forms.</p>
                </div>

                <div className={`p-6 rounded-[24px] border ${panelBg} space-y-3`}>
                  <span className="font-mono text-xs text-[#173C62] font-bold block">BUTTONS &amp; SMALL UI</span>
                  <div className="h-14 rounded-full border border-[#CBD5E1] flex items-center justify-center font-mono text-xs text-[#173C62] bg-white">
                    Capsule / 12–16px
                  </div>
                  <p className={`text-xs ${textSecondary}`}>Restrained rounded capsule buttons, 12px form inputs, 9999px filter chips.</p>
                </div>
              </div>
            </div>

            {/* Universal Zero Shadows */}
            <div className={`p-8 rounded-[24px] border ${panelBg} space-y-3`}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#079455]">
                <Check size={16} />
                <span>UNIVERSAL box-shadow: none CONFIRMED</span>
              </div>
              <p className={`text-xs sm:text-sm ${textSecondary} max-w-3xl leading-relaxed`}>
                All artificial drop shadows (floating SaaS shadows, elevation cards, neumorphic blurs) are completely decommissioned. Depth is established through authentic photography contrast, background tone shifts, deliberate whitespace, and hairline boundaries.
              </p>
            </div>
          </Container>
        </section>
      )}

      {/* =========================================================================
          LEVEL 02: ATOMS (23 ATOMS)
      ========================================================================= */}
      {activeTab === 'atoms' && (
        <section className="py-14 sm:py-20">
          <Container className="space-y-16">
            <SectionHeading
              eyebrow="LEVEL 02 — ATOMS"
              title="Atomic Primitives (23 Total)"
              description="Each primitive possesses complete default, hover, active, focus, disabled, and mobile states."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Atom 01: BrandLogo */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atom 01: BrandLogo</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Dark / Light / Monogram</span>
                </div>
                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <div className="p-3 bg-white border border-[#E5E7EB] rounded-[14px]">
                    <BrandLogo variant="dark" withTagline />
                  </div>
                  <div className="p-3 bg-[#0B1C2F] rounded-[14px] flex items-center gap-4">
                    <BrandLogo variant="light" />
                    <BrandLogo variant="monogram" />
                  </div>
                </div>
              </div>

              {/* Atom 02: NavText */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atom 02: NavText</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Interactive Navigation Anchor</span>
                </div>
                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <NavText href="#default">Default Link</NavText>
                  <NavText href="#active" active>Active State</NavText>
                  <NavText href="#dropdown" hasDropdown>Dropdown Item</NavText>
                </div>
              </div>

              {/* Atom 03: Eyebrow */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atom 03: Eyebrow</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Uppercase Category Datum</span>
                </div>
                <div className="space-y-3 pt-2">
                  <Eyebrow withLine>ELECTROMECHANICAL CONTRACTING</Eyebrow>
                  <Eyebrow withLine={false}>STANDALONE SCOPE</Eyebrow>
                </div>
              </div>

              {/* Atom 04 & 05: Heading & BodyText */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atoms 04 &amp; 05: Heading &amp; BodyText</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Fluid Scale &bull; Editorial Measure</span>
                </div>
                <div className="space-y-2 pt-2">
                  <Heading level="h3">Commercial High-Rise MEP Engineering</Heading>
                  <BodyText size="base">
                    Turnkey chilled water risers, Form-4 MDB switchboards, and statutory authority clearances managed under single-source accountability.
                  </BodyText>
                </div>
              </div>

              {/* Atom 06 & 07: Metadata & Caption */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atoms 06 &amp; 07: Metadata &amp; Caption</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Structured Figure Context</span>
                </div>
                <div className="space-y-3 pt-2">
                  <Metadata mono>PROJECT CODE: MEP-2026-DXB</Metadata>
                  <Caption technicalId="DC-PUMP-48" location="Business Bay, Dubai">
                    Primary variable-speed chilled water secondary pump header delivering 3,200 TR capacity.
                  </Caption>
                </div>
              </div>

              {/* Atom 08 & 09: Arrow & Icon */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atoms 08 &amp; 09: Arrow &amp; Icon</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Standardized Stroke &bull; Directional</span>
                </div>
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-2"><Arrow direction="right" /> <span className="text-xs font-mono">right</span></div>
                  <div className="flex items-center gap-2"><Arrow direction="up-right" /> <span className="text-xs font-mono">up-right</span></div>
                  <Icon icon={Shield} color="brand" size="md" />
                  <Icon icon={Zap} color="brand" size="md" />
                  <Icon icon={Compass} color="default" size="md" />
                </div>
              </div>

              {/* Atom 10: Divider */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atom 10: Divider</span>
                  <span className="text-[11px] font-mono text-[#64748B]">1px Structural Hairlines</span>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="space-y-1"><span className="text-[10.5px] font-mono text-[#64748B]">Hairline</span><Divider tone="hairline" /></div>
                  <div className="space-y-1"><span className="text-[10.5px] font-mono text-[#64748B]">Brand Accent</span><Divider tone="brand" /></div>
                </div>
              </div>

              {/* Atom 11: Button */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atom 11: Button</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Capsule / 14px &bull; Zero Shadow</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button variant="primary" size="md" shape="capsule">Primary Capsule</Button>
                  <Button variant="secondary" size="md" shape="rounded">Secondary 14px</Button>
                  <Button variant="outline" size="md" shape="capsule">Outline</Button>
                  <Button variant="text">Text Link</Button>
                  <Button variant="primary" size="sm" shape="capsule" disabled>Disabled</Button>
                </div>
              </div>

              {/* Atom 12 & 13: TextLink & Tag */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atoms 12 &amp; 13: TextLink &amp; Tag</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Directional Action &bull; Pill Chips</span>
                </div>
                <div className="space-y-4 pt-2">
                  <TextLink arrow>Inspect Technical Specifications</TextLink>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="brand" shape="pill">Turnkey MEP</Tag>
                    <Tag variant="neutral" shape="pill">DEWA Class 1</Tag>
                    <Tag variant="success" shape="pill">Commissioned</Tag>
                    <Tag variant="warning" shape="pill">Tender Active</Tag>
                  </div>
                </div>
              </div>

              {/* Atom 14: BreadcrumbItem */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atom 14: BreadcrumbItem</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Hierarchical Trail Atom</span>
                </div>
                <ol className="flex items-center gap-2 pt-2">
                  <BreadcrumbItem label="Home" href="/" />
                  <BreadcrumbItem label="Engineering" href="/engineering-construction" />
                  <BreadcrumbItem label="MEP" isCurrent />
                </ol>
              </div>

              {/* Atom 15: Image (28px Radius) */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atom 15: Image</span>
                  <span className="text-[11px] font-mono text-[#64748B]">28px Intentional Radius</span>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Dubai commercial tower"
                  aspectRatio="16/10"
                  radius="image"
                />
              </div>

              {/* Atom 16: Video (32px Radius) */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atom 16: Video</span>
                  <span className="text-[11px] font-mono text-[#64748B]">32px Radius &bull; Controlled Play</span>
                </div>
                <Video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  poster="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=800&q=80"
                  aspectRatio="16/10"
                  radius="imageLarge"
                />
              </div>

              {/* Atom 17: Input */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atom 17: Input</span>
                  <span className="text-[11px] font-mono text-[#64748B]">12px Radius &bull; Focus Ring</span>
                </div>
                <div className="space-y-3 pt-2">
                  <Input placeholder="Standard Input..." />
                  <Input placeholder="Search scope..." leadingIcon={<Search size={16} />} />
                  <Input placeholder="Error State..." error defaultValue="Invalid specification format" />
                </div>
              </div>

              {/* Atom 18 & 19: Select & Textarea */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atoms 18 &amp; 19: Select &amp; Textarea</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Form Controls</span>
                </div>
                <div className="space-y-3 pt-2">
                  <Select
                    options={[
                      { value: 'mep', label: 'Electromechanical Contracting' },
                      { value: 'solar', label: 'Solar PV EPC' },
                      { value: 'switchgear', label: 'Form-4 Control Switchgear' },
                    ]}
                  />
                  <Textarea placeholder="Outline engineering load specifications..." rows={2} />
                </div>
              </div>

              {/* Atom 20 & 21: Checkbox & Radio */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atoms 20 &amp; 21: Checkbox &amp; Radio</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Engineered Form Toggles</span>
                </div>
                <div className="space-y-4 pt-2">
                  <Checkbox
                    label="DEWA Statutory Compliance Required"
                    description="Requires Class 1 electrical engineer stamping"
                    checked={checkboxVal}
                    onChange={(e) => setCheckboxVal(e.target.checked)}
                  />
                  <div className="flex items-center gap-6">
                    <Radio
                      id="r-mep"
                      label="MEP Scope"
                      checked={radioVal === 'mep'}
                      onChange={() => setRadioVal('mep')}
                    />
                    <Radio
                      id="r-solar"
                      label="Solar EPC"
                      checked={radioVal === 'solar'}
                      onChange={() => setRadioVal('solar')}
                    />
                  </div>
                </div>
              </div>

              {/* Atom 22 & 23: StatusIndicator & NumberedBadge */}
              <div className={`p-6 rounded-[24px] border ${panelBg} space-y-4`}>
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
                  <span className="font-mono text-xs font-bold text-[#173C62]">Atoms 22 &amp; 23: StatusIndicator &amp; NumberedBadge</span>
                  <span className="text-[11px] font-mono text-[#64748B]">Statutory Compliance &bull; Numerals</span>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap items-center gap-4">
                    <StatusIndicator label="DEWA Class 1 Verified" tone="success" variant="pill" />
                    <StatusIndicator label="Active Tender" tone="warning" variant="dot" pulsing />
                    <StatusIndicator label="Critical Inspection" tone="error" variant="dot" />
                  </div>
                  <div className="flex items-baseline gap-6 pt-2 border-t border-[#CBD5E1]">
                    <NumberedBadge number={1} variant="brand" size="lg" />
                    <NumberedBadge number={2} variant="muted" size="lg" />
                    <span className="text-xs font-mono text-[#64748B]">Typographic Numeral Indices</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* =========================================================================
          LEVEL 03: MOLECULES (16 MOLECULES)
      ========================================================================= */}
      {activeTab === 'molecules' && (
        <section className="py-14 sm:py-20">
          <Container className="space-y-16">
            <SectionHeading
              eyebrow="LEVEL 03 — MOLECULES"
              title="Composite Molecular Units (16 Total)"
              description="Functional composite modules assembled from atomic primitives. No boxes merely for the sake of boxes."
            />

            {/* Molecule 01 & 02: SectionHeading & CTAGroup */}
            <div className={`p-8 rounded-[28px] border ${panelBg} space-y-6`}>
              <span className="font-mono text-xs font-bold text-[#173C62] block">Molecules 01 &amp; 02: SectionHeading &amp; CTAGroup</span>
              <SectionHeading
                eyebrow="DIVISION SCOPE"
                title="Integrated MEP Engineering &amp; Statutory Clearances"
                description="Direct single-source accountability for mechanical, electrical, and plumbing engineering across commercial high-rises and infrastructure assets."
              />
              <CTAGroup
                primaryLabel="Submit Tender Drawing Package"
                secondaryLabel="Schedule Technical Consultation"
                directPhone="+971 4 267 1212"
              />
            </div>

            {/* Molecule 03: MediaBannerStats */}
            <div className={`p-8 rounded-[28px] border ${panelBg} space-y-4`}>
              <span className="font-mono text-xs font-bold text-[#173C62] block">Molecule 03: MediaBannerStats (Feature Hero Media)</span>
              <MediaBannerStats
                imageSrc="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1400&q=80"
                imageAlt="Major construction and infrastructure site"
                title="Turnkey Infrastructure &amp; Utility Plants"
                stats={[
                  { value: '3,200', suffix: 'TR', label: 'District Cooling Capacity' },
                  { value: '13', label: 'Mega Deliveries' },
                  { value: '100%', label: 'Authority Pass Rate' },
                ]}
                actionLabel="Inspect Engineering Portfolio"
              />
            </div>

            {/* Molecule 04: EditorialAccordionItem */}
            <div className={`p-8 rounded-[28px] border ${panelBg} space-y-4`}>
              <span className="font-mono text-xs font-bold text-[#173C62] block">Molecule 04: EditorialAccordionItem (Verden-Style Drawer)</span>
              <div className="border-t border-[#E5E7EB]">
                <EditorialAccordionItem
                  index={1}
                  category="Mechanical Engineering"
                  title="District Cooling Hydronics &amp; Variable Speed Manifolds"
                  description="Complete secondary pumping networks, 48-inch carbon steel headers, ultrasonic BTU billing sub-meters, and high-differential pressure control valves."
                  details={['48" Carbon Steel Headers', 'Ultrasonic BTU Sub-meters', 'Differential Pressure Valves', 'Variable Primary Pumps']}
                  actionLabel="Inspect Hydronic Specifications &rarr;"
                />
              </div>
            </div>

            {/* Molecule 05: NumberedMandateRow */}
            <div className={`p-8 rounded-[28px] border ${panelBg} space-y-4`}>
              <span className="font-mono text-xs font-bold text-[#173C62] block">Molecule 05: NumberedMandateRow (UzOman 01–06 Ledger)</span>
              <div className="border-t border-[#E5E7EB]">
                <NumberedMandateRow
                  number={1}
                  title="Single-Source Electromechanical Contracting"
                  description="Complete turnkey delivery spanning design engineering, statutory approvals with DEWA and DCD, precision site installation, and comprehensive testing and commissioning."
                  actionLabel="Explore Contracting Division"
                />
              </div>
            </div>

            {/* Molecule 06 & 07: SearchField & FilterControl (Pills Mode) */}
            <div className={`p-8 rounded-[28px] border ${panelBg} space-y-6`}>
              <span className="font-mono text-xs font-bold text-[#173C62] block">Molecules 06 &amp; 07: SearchField &amp; FilterControl</span>
              <SearchField
                value={searchValue}
                onChange={setSearchValue}
                placeholder="Search across 18 approved engineering deliveries..."
              />
              <FilterControl
                options={[
                  { id: 'all', label: 'All Disciplines', count: 18 },
                  { id: 'mep', label: 'MEP Contracting', count: 8 },
                  { id: 'solar', label: 'Solar EPC', count: 4 },
                  { id: 'switchgear', label: 'Control Switchgear', count: 6 },
                ]}
                activeId={activeFilter}
                onChange={setActiveFilter}
                variant="pills"
              />
            </div>

            {/* Molecule 08: QuoteAttribution */}
            <div className={`p-8 rounded-[28px] border ${panelBg} space-y-4`}>
              <span className="font-mono text-xs font-bold text-[#173C62] block">Molecule 08: QuoteAttribution</span>
              <QuoteAttribution
                quote="Our single-source delivery framework eliminated three subcontractor handover interfaces, resulting in zero statutory inspection delays."
                authorName="Eng. Tariq Al Nuaimi"
                authorTitle="Project Directorate"
                divisionOrCompany="Commercial Tower Asset Care"
              />
            </div>

            {/* Molecule 09: ServiceMeta */}
            <div className={`p-8 rounded-[28px] border ${panelBg} space-y-4`}>
              <span className="font-mono text-xs font-bold text-[#173C62] block">Molecule 09: ServiceMeta</span>
              <ServiceMeta
                division="Engineering &amp; Construction"
                disciplineCode="DIV-MEP-01"
                clearanceLevel="DEWA Class 1 / DCD Class A"
                standards={['BS 7671', 'ASHRAE 90.1', 'NFPA 13', 'SMACNA']}
                specs={[
                  { label: 'Cooling Capacity', value: 'Up to 5,000 TR' },
                  { label: 'Electrical Amperage', value: 'Up to 5,000A Busbar' },
                  { label: 'HV Clearance', value: '11kV / 33kV Substations' },
                  { label: 'Commissioning', value: 'BSRIA Certified' },
                ]}
              />
            </div>

            {/* Molecule 10: Pagination */}
            <div className={`p-8 rounded-[28px] border ${panelBg} space-y-4`}>
              <span className="font-mono text-xs font-bold text-[#173C62] block">Molecule 10: Pagination</span>
              <Pagination
                currentPage={currentPage}
                totalPages={5}
                onPageChange={setCurrentPage}
              />
            </div>
          </Container>
        </section>
      )}

      {/* =========================================================================
          LEVEL 04: ORGANISMS (13 ORGANISMS)
      ========================================================================= */}
      {activeTab === 'organisms' && (
        <div className="space-y-20 py-14">
          <Container>
            <SectionHeading
              eyebrow="LEVEL 04 — ORGANISMS"
              title="Full Organism Compositions (13 Total)"
              description="High-level structured corporate modules ready for page composition."
            />
          </Container>

          {/* Organism 01: Header */}
          <div className="space-y-4 border-t border-b border-[#E5E7EB] py-8">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-4">Organism 01: Header (Sticky Navigation)</span>
            </Container>
            <Header
              activeId="engineering"
              openMegaMenuId={megaMenuOpen ? 'engineering' : null}
              onMegaMenuToggle={() => setMegaMenuOpen(!megaMenuOpen)}
            />
          </div>

          {/* Organism 02: MegaNavigation */}
          {megaMenuOpen && (
            <div className="space-y-4">
              <Container>
                <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Organism 02: MegaNavigation</span>
              </Container>
              <MegaNavigation
                divisionTitle="Engineering &amp; Construction"
                description="Single-source electromechanical contracting, commercial solar photovoltaic turnkey EPC, and custom ASTA-certified Form-4 control switchgear assembly."
                groups={[
                  {
                    title: 'MEP Contracting',
                    links: [
                      { label: 'Commercial & Residential High-Rise', href: '/mep/commercial', code: 'MEP-01' },
                      { label: 'Heavy Infrastructure & District Cooling', href: '/mep/infrastructure', code: 'MEP-02' },
                    ],
                  },
                  {
                    title: 'Solar PV EPC',
                    links: [
                      { label: 'Rooftop & Industrial Solar Arrays', href: '/solar/applications', code: 'SLR-01' },
                      { label: 'Commercial Segments & Grid Intertie', href: '/solar/segments', code: 'SLR-02' },
                    ],
                  },
                  {
                    title: 'Switchgear Engineering',
                    links: [
                      { label: 'Form-4 Main Distribution Boards', href: '/switchgear/mdb', code: 'SWG-01' },
                      { label: 'Motor Control Centers (MCC)', href: '/switchgear/mcc', code: 'SWG-02' },
                    ],
                  },
                ]}
                featuredProject={{
                  title: 'High-Rise Commercial MEP Installation',
                  category: '3,200 TR District Cooling',
                  metric: 'Verified Handover',
                  imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
                  href: '/projects',
                }}
                onClose={() => setMegaMenuOpen(false)}
              />
            </div>
          )}

          {/* Organism 03: EditorialHero */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Organism 03: EditorialHero</span>
            </Container>
            <EditorialHero
              headline="Electromechanical Contracting &amp; Critical Infrastructure"
              lead="Delivering single-source MEP engineering, commercial solar EPC, and Form-4 switchgear assembly backed by the stability of the Easa Saleh Al Gurg Group."
              mediaSrc="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1400&q=80"
              mediaAlt="Infrastructure site"
              bannerTitle="Turnkey Electromechanical Infrastructure"
              stats={[
                { value: '3,200', suffix: 'TR', label: 'Cooling Capacity' },
                { value: '13', label: 'Mega Deliveries' },
              ]}
            />
          </div>

          {/* Organism 04: EditorialBlock */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Organism 04: EditorialBlock</span>
            </Container>
            <EditorialBlock
              eyebrow="HIGH-VOLTAGE POWER"
              title="11kV / 33kV Substation Infrastructure &amp; Busbar Systems"
              lead="Direct technical coordination with DEWA transmission divisions for private and municipal substations."
              body={[
                'We engineer and commission high-amperage cast-resin transformer rooms, low-impedance sandwich copper busways up to 5,000A, and SCADA-integrated remote telemetry units.',
              ]}
              specs={[
                { label: 'Voltage Class', value: '11kV / 400V Cast Resin' },
                { label: 'Authority Pass', value: 'DEWA Approved ED-4' },
              ]}
              imageSrc="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80"
              imageAlt="High voltage switchgear"
              caption="Factory-assembled Form-4 MDB panels under secondary injection test protocols."
            />
          </div>

          {/* Organism 05: ProjectFeatureOrganism */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Organism 05: ProjectFeatureOrganism</span>
            </Container>
            <ProjectFeatureOrganism
              category="High-Rise Electromechanical"
              title="Commercial High-Rise MEP Installation"
              client="Commercial Developer LLC"
              location="Business Bay, Dubai"
              scopeSummary="Turnkey electromechanical contracting including dual variable primary chilled water pumps, Form-4 MDB sandwich busbar risers, and life safety smoke extract fans."
              metricValue="3,200 TR"
              metricLabel="Primary Cooling Load"
              specs={[
                { label: 'Electrical Amperage', value: '3,200A Busway' },
                { label: 'Life Safety', value: 'DCD Class A Pass' },
              ]}
              imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              imageAlt="Commercial tower"
            />
          </div>

          {/* Organism 06: ClientLogoField */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Organism 06: ClientLogoField</span>
            </Container>
            <ClientLogoField
              logos={[
                { name: 'DEWA', category: 'Utility Authority', clearanceLevel: 'Class 1 Approved' },
                { name: 'Dubai Civil Defense', category: 'Life Safety', clearanceLevel: 'Class A Certified' },
                { name: 'Dubai Municipality', category: 'Civic Authority', clearanceLevel: 'G+Unlimited' },
                { name: 'Easa Saleh Al Gurg', category: 'Parent Group', clearanceLevel: 'Conglomerate' },
                { name: 'Empower', category: 'District Cooling', clearanceLevel: 'PHE Verified' },
                { name: 'Tabreed', category: 'Thermal Energy', clearanceLevel: 'Network Approved' },
              ]}
            />
          </div>

          {/* Organism 07: ContactPanel */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Organism 07: ContactPanel</span>
            </Container>
            <ContactPanel />
          </div>
        </div>
      )}

      {/* =========================================================================
          LEVEL 05: SECTION PRIMITIVES (14 PRIMITIVES)
      ========================================================================= */}
      {activeTab === 'primitives' && (
        <div className="space-y-16 py-14">
          <Container>
            <SectionHeading
              eyebrow="LEVEL 05 — SECTION PRIMITIVES"
              title="Pure Structural Layout Primitives (14 Total)"
              description="Flexible layout structures for editorial storytelling. Not cards, but open, responsive compositions."
            />
          </Container>

          {/* Primitive 01: EditorialSplit */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Primitive 01: EditorialSplit (5/7 Ratio)</span>
            </Container>
            <EditorialSplit
              ratio="5/7"
              left={
                <div className="space-y-4">
                  <Eyebrow>STRUCTURAL SPLIT</Eyebrow>
                  <h3 className="text-3xl font-sans font-semibold text-[#0B1320] tracking-tight">
                    Engineered precision replacing template cards.
                  </h3>
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    By composing sections through deliberate column ratios rather than repeating boxes, the layout breathes like a bespoke publication.
                  </p>
                  <Button variant="primary" size="sm" shape="capsule">
                    Explore Scope
                  </Button>
                </div>
              }
              right={
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Split media"
                  aspectRatio="16/10"
                  radius="image"
                />
              }
            />
          </div>

          {/* Primitive 02: ImageMosaic */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Primitive 02: ImageMosaic (Greenova 3-Part Mosaic)</span>
            </Container>
            <ImageMosaic
              eyebrow="ASSET PHOTOGRAPHY"
              title="Site Verification &amp; Plant Manifolds"
              items={[
                {
                  imageSrc: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1200&q=80',
                  imageAlt: 'Turnkey site execution',
                  label: 'Commissioning',
                  caption: 'Turnkey electromechanical site installation and district cooling distribution.',
                },
                {
                  imageSrc: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
                  imageAlt: 'Hydronic manifold',
                  label: 'Hydronics',
                  caption: '3,200 TR secondary chilled water pumping headers.',
                },
                {
                  imageSrc: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
                  imageAlt: 'Solar PV installation',
                  label: 'Solar PV',
                  caption: '2.4 MWp commercial rooftop solar array.',
                },
              ]}
            />
          </div>

          {/* Primitive 03: MetricBand */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Primitive 03: MetricBand (Open Typographic Metrics)</span>
            </Container>
            <MetricBand
              tone={isDark ? 'dark' : 'subtle'}
              metrics={[
                { value: '3,200', suffix: 'TR', label: 'Cooling Capacity', description: 'Peak thermal load' },
                { value: '2.4', suffix: 'MWp', label: 'Solar Generation', description: 'Clean power grid intertie' },
                { value: '13', label: 'Mega Deliveries', description: 'Certified statutory handovers' },
                { value: '100%', label: 'Authority Pass', description: 'DEWA & DCD initial submission pass rate' },
              ]}
            />
          </div>

          {/* Primitive 04: NumberedList */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Primitive 04: NumberedList (Mandate Ledger)</span>
            </Container>
            <NumberedList
              eyebrow="OPERATIONAL MANDATES"
              title="Core Engineering Accountability Principles"
              items={[
                {
                  number: 1,
                  title: 'Single-Source Authority Interface',
                  description: 'Direct management of DEWA transmission approvals, Dubai Civil Defense life safety clearances, and Dubai Municipality structural inspections under unified engineering accountability.',
                  actionLabel: 'Inspect Clearance Record',
                },
                {
                  number: 2,
                  title: 'Factory-Assembled ASTA Type-Testing',
                  description: 'Every main distribution board and motor control center is assembled in controlled UAE facility environments with verified Form-4 separation and secondary injection testing.',
                  actionLabel: 'Inspect Switchgear Facilities',
                },
              ]}
            />
          </div>

          {/* Primitive 05: QuoteFeature */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Primitive 05: QuoteFeature</span>
            </Container>
            <QuoteFeature
              quote="True engineering excellence is measured by operational longevity, statutory compliance, and zero unplanned downtime."
              authorName="Easa Saleh Al Gurg Directorate"
              authorTitle="Parent Group Governance"
              tone={isDark ? 'dark' : 'subtle'}
            />
          </div>

          {/* Primitive 06: CTASection */}
          <div className="space-y-4">
            <Container>
              <span className="font-mono text-xs font-bold text-[#173C62] block mb-2">Primitive 06: CTASection</span>
            </Container>
            <CTASection
              eyebrow="COMMERCIAL ESTIMATING"
              title="Initiate Project Tender Review with Senior Estimators"
              description="Upload mechanical, electrical, or plumbing tender drawing packages for rapid BOQ analysis and certified cost estimation."
              primaryActionLabel="Submit Tender Package"
              onPrimaryAction={() => {}}
              secondaryActionLabel="Review Past Deliveries"
              onSecondaryAction={() => {}}
            />
          </div>
        </div>
      )}

      {/* =========================================================================
          6. RESTRAINED MOTION SYSTEM LABORATORY
          Strict adherence to user specifications:
          - Image scale: 1.02–1.04
          - Small arrow translation (3px)
          - Opacity transitions
          - Subtle section entrance (never animate every element independently)
          - Navigation & menu transitions (150–250ms UI, 300–500ms media)
          - Universal prefers-reduced-motion support
      ========================================================================= */}
      {activeTab === 'motion' && (
        <div className="py-12 space-y-16">
          {/* Header Banner */}
          <Container>
            <div className="border-b border-[#E5E7EB] pb-8 space-y-4">
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#173C62] uppercase block">
                LTSGROUP MASTER MOTION SYSTEM
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
                Restrained Architectural Motion
              </h2>
              <p className="text-sm sm:text-base text-[#4A5568] max-w-3xl leading-relaxed">
                A disciplined, non-distracting motion language designed exclusively to reinforce hierarchy, visual clarity, and editorial presence. No excessive animations, no scroll-jacking, and zero parallax.
              </p>

              {/* Core Parameters Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                <div className="p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-1">
                  <span className="text-[10.5px] font-mono text-slate-500 uppercase">UI Durations</span>
                  <p className="text-sm font-semibold text-[#0B1320]">150ms – 250ms</p>
                  <p className="text-xs text-[#64748B]">Buttons, tabs, dropdowns, menu reveal</p>
                </div>

                <div className="p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-1">
                  <span className="text-[10.5px] font-mono text-slate-500 uppercase">Editorial Media</span>
                  <p className="text-sm font-semibold text-[#0B1320]">300ms – 500ms</p>
                  <p className="text-xs text-[#64748B]">Image zoom, section entrances, page shifts</p>
                </div>

                <div className="p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-1">
                  <span className="text-[10.5px] font-mono text-slate-500 uppercase">Image Scale Limit</span>
                  <p className="text-sm font-semibold text-[#0B1320]">1.02 &ndash; 1.04 Max</p>
                  <p className="text-xs text-[#64748B]">Calibrated at 1.025x gentle presence</p>
                </div>

                <div className="p-4 rounded-[16px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-1">
                  <span className="text-[10.5px] font-mono text-slate-500 uppercase">Curve &amp; Accessibility</span>
                  <p className="text-sm font-semibold text-[#0B1320]">Ease-Out &bull; WCAG AAA</p>
                  <p className="text-xs text-[#64748B]">prefers-reduced-motion respected</p>
                </div>
              </div>
            </div>
          </Container>

          {/* Test Laboratory 01: Image Hover Scale (1.02–1.04) */}
          <Container>
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase">
                  Lab 01 &bull; Editorial Media Scale (Strict 1.02–1.04 Limit)
                </span>
                <p className="text-xs sm:text-sm text-[#4A5568]">
                  Hover over the authentic photography containers below to inspect the restrained 1.025x zoom curve (400ms ease-out). No jarring 1.1x jumps.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 1.025x Scale Frame */}
                <div className="group cursor-pointer space-y-3">
                  <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden bg-[#0B1C2F]">
                    <img
                      src="/assets/images/hero-building.jpg"
                      alt="1.025x Scale Test"
                      className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-[1.025] transition-transform duration-[400ms] ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1C2F]/80 text-white text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10">
                      Hover: scale-[1.025] • 400ms ease-out
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0B1320]">Primary Editorial Container (28px Radius)</span>
                    <span className="font-mono text-[#173C62] font-medium">+2.5% Scale</span>
                  </div>
                </div>

                {/* 1.03x Scale Feature Frame */}
                <div className="group cursor-pointer space-y-3">
                  <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden bg-[#0B1C2F]">
                    <img
                      src="/assets/images/project-chiller.jpg"
                      alt="1.03x Scale Test"
                      className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-[1.03] transition-transform duration-[400ms] ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1C2F]/80 text-white text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10">
                      Hover: scale-[1.03] • 400ms ease-out
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0B1320]">Large Feature Media (32px Radius)</span>
                    <span className="font-mono text-[#173C62] font-medium">+3.0% Scale</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          {/* Test Laboratory 02: Small Arrow Micro-Translations (3px) */}
          <Container>
            <div className="space-y-6 border-t border-[#E5E7EB] pt-12">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase">
                  Lab 02 &bull; Directional Micro-Translations (3px &bull; 180ms)
                </span>
                <p className="text-xs sm:text-sm text-[#4A5568]">
                  Hover over these link and button triggers. Arrow movement is restrained to 3px to communicate interactive affordance without distracting the reader.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-[20px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-4">
                  <span className="text-[10.5px] font-mono text-slate-500 uppercase block">Horizontal Arrow Link</span>
                  <div className="group inline-flex items-center gap-2 text-xs font-semibold text-[#173C62] cursor-pointer">
                    <span>Inspect Engineering Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-[180ms] ease-out group-hover:translate-x-[3px]" />
                  </div>
                  <p className="text-[11px] font-mono text-slate-500">translateX: 3px • duration: 180ms</p>
                </div>

                <div className="p-6 rounded-[20px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-4">
                  <span className="text-[10.5px] font-mono text-slate-500 uppercase block">Diagonal External Link</span>
                  <div className="group inline-flex items-center gap-2 text-xs font-semibold text-[#173C62] cursor-pointer">
                    <span>Download Statutory Certificate</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-[180ms] ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
                  </div>
                  <p className="text-[11px] font-mono text-slate-500">translateX/Y: 2px • duration: 180ms</p>
                </div>

                <div className="p-6 rounded-[20px] bg-[#F8FAFC] border border-[#E5E7EB] space-y-4">
                  <span className="text-[10.5px] font-mono text-slate-500 uppercase block">Capsule Button Action</span>
                  <Button variant="primary" size="sm" shape="capsule" iconTrailing={<ArrowRight className="w-3.5 h-3.5 transition-transform duration-[180ms] ease-out group-hover:translate-x-[3px]" />}>
                    Primary Action
                  </Button>
                  <p className="text-[11px] font-mono text-slate-500">Integrated trailing icon</p>
                </div>
              </div>
            </div>
          </Container>

          {/* Test Laboratory 03: SectionEntrance Primitive (Unified Hierarchy) */}
          <Container>
            <div className="space-y-6 border-t border-[#E5E7EB] pt-12">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase">
                  Lab 03 &bull; SectionEntrance Primitive (Never Animate Atoms Independently)
                </span>
                <p className="text-xs sm:text-sm text-[#4A5568]">
                  Demonstrating the &lt;SectionEntrance /&gt; component. The entire editorial section animates as a single cohesive unit (opacity 0&rarr;1, y: 8px&rarr;0, 400ms ease-out) without element-by-element domino cascades.
                </p>
              </div>

              <SectionEntrance className="p-8 sm:p-10 rounded-[28px] bg-white border border-[#E5E7EB] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#173C62] uppercase tracking-wider">
                    UNIFIED EDITORIAL UNIT
                  </span>
                  <span className="text-xs font-mono text-slate-400">400ms architectural ease-out</span>
                </div>
                <h3 className="text-2xl font-light text-[#0B1320] leading-snug">
                  Integrated Engineering, Lifecycle Stewardship &amp; Component Logistics
                </h3>
                <p className="text-sm text-[#4A5568] max-w-2xl leading-relaxed">
                  Notice how this section enters smoothly into the viewport as one unified story. No text flying in from the left while cards bounce from the right.
                </p>
              </SectionEntrance>
            </div>
          </Container>

          {/* Test Laboratory 04: Accessibility & Reduced Motion */}
          <Container>
            <div className="space-y-4 border-t border-[#E5E7EB] pt-12">
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase">
                  Lab 04 &bull; Universal Accessibility (prefers-reduced-motion: reduce)
                </span>
                <p className="text-xs sm:text-sm text-[#4A5568]">
                  When users enable reduced motion in their operating system (macOS, Windows, iOS, Android), all spatial transitions, image zooms, and displacement transforms instantly clamp to 0.
                </p>
              </div>

              <div className="p-6 rounded-[20px] bg-[#0B1C2F] text-white space-y-3 font-mono text-xs">
                <div className="text-[#94A3B8] uppercase tracking-wider text-[11px]">
                  ACTIVE CSS SPECIFICATION IN `src/index.css`
                </div>
                <pre className="text-slate-300 overflow-x-auto p-4 rounded-[12px] bg-black/40 leading-relaxed">
{`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .editorial-image-frame img,
  .editorial-feature-media img {
    transform: none !important;
  }
  .group:hover .group-hover-arrow {
    transform: none !important;
  }
}`}
                </pre>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};
