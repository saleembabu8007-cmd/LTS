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
  LTSIcon,
  IconHVAC,
  IconElectrical,
  IconPlumbing,
  IconBMS,
  IconCivil,
  IconSolar,
  IconSwitchgear,
  IconControls,
  IconLighting,
  IconEVCharging,
  IconFacilities,
  IconTrading,
  IconProjects,
  IconIndustries,
  IconContact,
  IconLocation,
  IconPhone,
  IconEmail,
  IconArrow,
  IconArrowUpRight,
  IconShieldCheck,
  IconCheck,
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
  Media,
  Card,
  // 7 Core Image Card Types
  FeatureImageCard,
  StandardImageCard,
  CompactImageCard,
  ProjectCard,
  ServiceImageCard,
  IndustryImageCard,
  EditorialStoryCard,
  // 10 Editorial Section Compositions (A through J)
  CompositionA,
  CompositionB,
  CompositionC,
  CompositionD,
  CompositionE,
  CompositionF,
  CompositionG,
  CompositionH,
  CompositionI,
  CompositionJ,
} from '../../design-system';
import {
  FeatureImage,
  ProjectImage,
  ServiceImage,
  EditorialImage,
  FullWidthImage,
  ImageMosaic as VisualPatternMosaic,
} from '../../design-system/visual-patterns';
import {
  ProofStrip,
  ProofSplit,
  ProofDominant,
} from '../../design-system/proof';
import {
  Shield,
  Zap,
  Compass,
  Check,
  Search,
  ExternalLink,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

interface DesignSystemShowcaseProps {
  onNavigate?: (slug: string) => void;
}

export const DesignSystemShowcase: React.FC<DesignSystemShowcaseProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'tokens' | 'atoms' | 'molecules' | 'organisms' | 'primitives' | 'motion' | 'cards-media' | 'compositions'>('tokens');
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
    ? 'bg-[#173C62] text-white'
    : isWarm
    ? 'bg-[#F8FAFC] text-[#0B1320]'
    : 'bg-white text-[#0B1320]';

  const panelBg = isDark
    ? 'bg-[#143353] border-white/15'
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
      <header className="border-b border-[#E5E7EB] bg-[#173C62] text-white py-10 lg:py-14">
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
                  { id: 'cards-media', label: '7. Cards & Media System' },
                  { id: 'compositions', label: '8. Compositions (A–J)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer border rounded-full ${
                      activeTab === tab.id
                        ? 'bg-white text-[#173C62] border-white'
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
                    canvasTone === 'white' ? 'bg-white text-[#173C62] font-bold' : 'text-slate-300 hover:text-white'
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
                <div className={`p-6 rounded-[16px] border ${panelBg} space-y-3`}>
                  <span className="font-mono text-xs text-[#173C62] font-bold block">FEATURE MEDIA (20px)</span>
                  <div className="h-14 rounded-[20px] border border-[#CBD5E1] flex items-center justify-center font-mono text-xs text-[#173C62] bg-white">
                    20px
                  </div>
                  <p className={`text-xs ${textSecondary}`}>Panoramic heroes, cinematic facility video frames, landmark project banners.</p>
                </div>

                <div className={`p-6 rounded-[16px] border ${panelBg} space-y-3`}>
                  <span className="font-mono text-xs text-[#173C62] font-bold block">STANDARD IMAGES (18px)</span>
                  <div className="h-14 rounded-[18px] border border-[#CBD5E1] flex items-center justify-center font-mono text-xs text-[#173C62] bg-white">
                    18px
                  </div>
                  <p className={`text-xs ${textSecondary}`}>Split layout photography, photo mosaics, project archive imagery.</p>
                </div>

                <div className={`p-6 rounded-[16px] border ${panelBg} space-y-3`}>
                  <span className="font-mono text-xs text-[#173C62] font-bold block">CONTENT SURFACES (16px)</span>
                  <div className="h-14 rounded-[16px] border border-[#CBD5E1] flex items-center justify-center font-mono text-xs text-[#173C62] bg-white">
                    16px
                  </div>
                  <p className={`text-xs ${textSecondary}`}>Standard cards, editorial quote enclosures, tender submission panels, forms.</p>
                </div>

                <div className={`p-6 rounded-[16px] border ${panelBg} space-y-3`}>
                  <span className="font-mono text-xs text-[#173C62] font-bold block">BUTTONS &amp; CONTROLS</span>
                  <div className="h-14 rounded-full border border-[#CBD5E1] flex items-center justify-center font-mono text-xs text-[#173C62] bg-white">
                    Capsule / 11–12px / 8px
                  </div>
                  <p className={`text-xs ${textSecondary}`}>Capsule / 12px buttons, 11px form inputs, 8px badges, 9999px filter chips.</p>
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
                  <div className="p-3 bg-[#173C62] rounded-[14px] flex items-center gap-4">
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

              {/* Atom 08 & 09: Master LTS Iconography System */}
              <div className={`p-6 sm:p-8 rounded-[24px] border ${panelBg} space-y-6 col-span-full`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#CBD5E1] pb-3 gap-2">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#173C62]">Atoms 08 &amp; 09: Master LTS Iconography System</span>
                    <p className="text-xs text-[#64748B] mt-0.5">1.5px Hairline Stroke &bull; Architectural Precision &bull; Monochrome &bull; Subtle 3–5px Micro-interaction</p>
                  </div>
                  <span className="text-[11px] font-mono text-[#173C62] px-2.5 py-1 rounded-full bg-[#173C62]/5 font-semibold">
                    10 Service Mappings + 12 Utilities
                  </span>
                </div>

                {/* 10 Core Service Icons */}
                <div className="space-y-3">
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#999999] block">
                    01 / Core Electromechanical &amp; Facility Service Mappings
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3">
                    {[
                      { name: 'hvac', label: 'HVAC', comp: <IconHVAC /> },
                      { name: 'electrical', label: 'Electrical', comp: <IconElectrical /> },
                      { name: 'plumbing', label: 'Plumbing', comp: <IconPlumbing /> },
                      { name: 'bms', label: 'BMS', comp: <IconBMS /> },
                      { name: 'civil', label: 'Civil Works', comp: <IconCivil /> },
                      { name: 'solar', label: 'Solar EPC', comp: <IconSolar /> },
                      { name: 'switchgear', label: 'Switchgear', comp: <IconSwitchgear /> },
                      { name: 'controls', label: 'Controls', comp: <IconControls /> },
                      { name: 'lighting', label: 'Lighting', comp: <IconLighting /> },
                      { name: 'ev-charging', label: 'EV Charging', comp: <IconEVCharging /> },
                    ].map((item) => (
                      <div key={item.name} className="flex flex-col items-center justify-center p-3 rounded-xl border border-[#E5E7EB] bg-white text-center hover:border-[#173C62] transition-colors group">
                        <div className="p-2.5 rounded-lg bg-[#173C62]/5 mb-1.5 text-[#173C62] group-hover:scale-110 transition-transform duration-200">
                          {item.comp}
                        </div>
                        <span className="text-[11px] font-medium text-[#173C62] leading-tight">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Functional & Utility Icons */}
                <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#999999] block">
                    02 / Functional Navigation &amp; Authority Utilities
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                    {[
                      { label: 'Facilities', comp: <IconFacilities /> },
                      { label: 'Trading', comp: <IconTrading /> },
                      { label: 'Projects', comp: <IconProjects /> },
                      { label: 'Industries', comp: <IconIndustries /> },
                      { label: 'Location', comp: <IconLocation /> },
                      { label: 'Phone', comp: <IconPhone /> },
                      { label: 'Email', comp: <IconEmail /> },
                      { label: 'Governance', comp: <IconShieldCheck /> },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#173C62] transition-colors">
                        <div className="text-[#173C62] shrink-0">{item.comp}</div>
                        <span className="text-xs font-medium text-[#173C62] truncate">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Directional Arrows (Subtle 3-5px hover movement) */}
                <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
                  <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#999999] block">
                    03 / Interaction &amp; Color Variants (Subtle 3–5px Motion)
                  </span>
                  <div className="flex flex-wrap items-center gap-4">
                    <button className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#173C62]/20 bg-white text-xs font-medium text-[#173C62] hover:border-[#173C62] transition-all">
                      <span>Interactive Link Action</span>
                      <IconArrow interactive className="w-3.5 h-3.5 text-[#173C62]" />
                    </button>
                    <button className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#173C62]/20 bg-white text-xs font-medium text-[#173C62] hover:border-[#173C62] transition-all">
                      <span>External Case Record</span>
                      <IconArrowUpRight interactive className="w-3.5 h-3.5 text-[#173C62]" />
                    </button>
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#173C62] text-white text-xs font-medium">
                      <span>Monochrome White on Dark</span>
                      <IconArrow color="white" className="w-3.5 h-3.5" />
                    </div>
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] text-[#999999] text-xs font-medium">
                      <span>Secondary Brand Grey</span>
                      <IconHVAC color="secondary" size="sm" />
                    </div>
                  </div>
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
              lead="Delivering single-source MEP engineering, commercial solar EPC, and Form-4 switchgear assembly backed by comprehensive statutory governance across the UAE."
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
                { name: 'Roads & Transport Authority', category: 'Infrastructure', clearanceLevel: 'RTA Approved' },
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
              authorName="LTSGROUP Engineering Council"
              authorTitle="Technical Governance Board"
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
                  <div className="relative aspect-[16/10] rounded-[28px] overflow-hidden bg-[#173C62]">
                    <img
                      src="/assets/images/hero-building.jpg"
                      alt="1.025x Scale Test"
                      className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-[1.025] transition-transform duration-[400ms] ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#173C62]/85 text-white text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10">
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
                  <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden bg-[#173C62]">
                    <img
                      src="/assets/images/project-chiller.jpg"
                      alt="1.03x Scale Test"
                      className="w-full h-full object-cover filter brightness-[0.9] group-hover:scale-[1.03] transition-transform duration-[400ms] ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-[#173C62]/85 text-white text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10">
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

              <div className="p-6 rounded-[20px] bg-[#173C62] text-white space-y-3 font-mono text-xs">
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

      {/* =========================================================================
          TAB 07 — NORMALIZED CARDS, MEDIA SYSTEM & CONTAINERS
      ========================================================================= */}
      {activeTab === 'cards-media' && (
        <div className="py-14 sm:py-20 space-y-20">
          {/* Section 1: Normalized Containers */}
          <section className="space-y-6">
            <Container variant="wide">
              <SectionHeading
                eyebrow="LEVEL 01 — LAYOUT FOUNDATIONS"
                title="Normalized Container Architecture"
                description="Four deliberate container boundaries standardizing horizontal margins and readable prose widths across all pages."
              />
            </Container>

            <div className="space-y-4 pt-4">
              <Container variant="global" className="bg-[#173C62]/10 border border-[#173C62]/30 py-4 rounded-[12px] text-center">
                <span className="font-mono text-xs font-semibold text-[#173C62]">
                  Container: Global Canvas — Max Width: 1440px (`variant="global"`) &bull; Site Header, Global Utility &amp; Footer
                </span>
              </Container>

              <Container variant="wide" className="bg-[#173C62]/15 border border-[#173C62]/40 py-4 rounded-[12px] text-center">
                <span className="font-mono text-xs font-semibold text-[#173C62]">
                  Container: Wide Editorial — Max Width: 1360px (`variant="wide"`) &bull; Primary Landing Pages &amp; Division Splits
                </span>
              </Container>

              <Container variant="standard" className="bg-[#173C62]/20 border border-[#173C62]/50 py-4 rounded-[12px] text-center">
                <span className="font-mono text-xs font-semibold text-[#173C62]">
                  Container: Standard Focused — Max Width: 1140px (`variant="standard"`) &bull; Focused Service Sections &amp; Specifications
                </span>
              </Container>

              <Container variant="narrow" className="bg-[#173C62]/25 border border-[#173C62]/60 py-4 rounded-[12px] text-center">
                <span className="font-mono text-xs font-semibold text-[#173C62]">
                  Container: Narrow Reading — Max Width: 760px (`variant="narrow"`) &bull; Editorial Articles &amp; Prose
                </span>
              </Container>
            </div>
          </section>

          {/* Section 2: Standardized Buttons & States */}
          <section className="space-y-6">
            <Container variant="wide">
              <SectionHeading
                eyebrow="LEVEL 02 — INTERACTIVE CONTROLS"
                title="Normalized Button System &amp; States"
                description="Strictly standardized button heights (38px, 44px, 48px), 12px soft radius or capsule, zero arbitrary drop shadows, and accessible focus rings."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {/* Variant: Primary */}
                <div className={`p-6 rounded-[16px] border ${panelBg} space-y-4`}>
                  <div className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span className="font-mono text-xs font-bold text-[#173C62]">VARIANT: PRIMARY</span>
                    <span className="text-[11px] font-mono text-[#64748B]">Main Action</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="primary" size="sm">Small (38px)</Button>
                    <Button variant="primary" size="md">Medium (44px)</Button>
                    <Button variant="primary" size="lg">Large (48px)</Button>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Button variant="primary" size="sm" disabled>Disabled State</Button>
                    <Button variant="primary" size="sm" iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}>With Icon</Button>
                  </div>
                </div>

                {/* Variant: Secondary */}
                <div className={`p-6 rounded-[16px] border ${panelBg} space-y-4`}>
                  <div className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span className="font-mono text-xs font-bold text-[#173C62]">VARIANT: SECONDARY</span>
                    <span className="text-[11px] font-mono text-[#64748B]">Supporting</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="secondary" size="sm">Small (38px)</Button>
                    <Button variant="secondary" size="md">Medium (44px)</Button>
                    <Button variant="secondary" size="lg">Large (48px)</Button>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Button variant="secondary" size="sm" disabled>Disabled State</Button>
                    <Button variant="secondary" size="sm" shape="rounded">12px Rounded</Button>
                  </div>
                </div>

                {/* Variant: Outline & Icon */}
                <div className={`p-6 rounded-[16px] border ${panelBg} space-y-4`}>
                  <div className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span className="font-mono text-xs font-bold text-[#173C62]">VARIANT: OUTLINE &amp; ICON</span>
                    <span className="text-[11px] font-mono text-[#64748B]">Controls</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button variant="outline" size="md">Outline Action</Button>
                    <Button variant="text" size="md">Text Link</Button>
                    <Button variant="icon" size="md" aria-label="Next item">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Button variant="white" size="sm" className="bg-slate-200">White on Light</Button>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Section 3: Canonical Cards System */}
          <section className="space-y-6">
            <Container variant="wide">
              <SectionHeading
                eyebrow="LEVEL 03 — ARCHITECTURAL SURFACES"
                title="Canonical Card Archetypes"
                description="Feature (20px radius), Standard (16px radius), and Compact (12px radius) surfaces with disciplined 1px hairlines and zero heavy SaaS shadows."
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
                {/* 1. Feature Card (7 Cols) */}
                <div className="lg:col-span-7">
                  <Card variant="feature" interactive className="h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#173C62] font-semibold">
                          FEATURE ARCHETYPE &bull; RADIUS 20PX
                        </span>
                        <span className="px-2.5 py-1 bg-[#EDF3F9] text-[#173C62] text-[11px] font-mono rounded-full font-semibold">
                          Turnkey EPC
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight leading-snug">
                        Commercial Rooftop Solar Photovoltaic EPC
                      </h3>
                      <p className="text-sm text-[#4A5568] leading-relaxed max-w-xl">
                        Comprehensive Shams Dubai engineering submittals, bifacial Tier-1 module layouts, and live-grid grid synchronization under single-source accountability.
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E5E7EB] flex items-center justify-between">
                      <span className="font-mono text-xs text-[#64748B]">DEWA Shams Dubai Certified</span>
                      <Button variant="primary" size="sm" iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}>
                        Explore Scope
                      </Button>
                    </div>
                  </Card>
                </div>

                {/* 2. Standard Card (5 Cols) */}
                <div className="lg:col-span-5 space-y-4">
                  <Card variant="standard" interactive>
                    <div className="space-y-3">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#64748B]">
                        STANDARD ARCHETYPE &bull; RADIUS 16PX
                      </span>
                      <h4 className="text-lg font-semibold text-[#0B1320] tracking-tight">
                        Chilled Water Plant Modernization
                      </h4>
                      <p className="text-xs text-[#4A5568] leading-relaxed">
                        Phased live chiller overhauls and VFD retrofits maintaining continuous building climate control.
                      </p>
                    </div>
                  </Card>

                  {/* 3. Compact Card */}
                  <Card variant="compact" interactive>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-[#64748B] block">COMPACT &bull; 12PX</span>
                        <span className="text-xs font-semibold text-[#0B1320]">Form-4 Switchgear Testing</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#173C62]" />
                    </div>
                  </Card>
                </div>
              </div>
            </Container>
          </section>

          {/* Section 4: Reusable Media System */}
          <section className="space-y-6">
            <Container variant="wide">
              <SectionHeading
                eyebrow="LEVEL 04 — REUSABLE MEDIA SYSTEM"
                title="Architectural Media &amp; Normalized Ratios"
                description="Normalized aspect ratios (16:9, 16:10, 4:3, 1:1, 21:9), directional scrim overlays, technical captions, and accessible video placeholders."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {/* Media 1: Image with Overlay */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#173C62] block">1. IMAGE WITH OVERLAY</span>
                  <Media
                    variant="image-overlay"
                    src="/assets/images/hero-building.jpg"
                    alt="Corporate high-rise architecture"
                    aspectRatio="16/10"
                    radius="image"
                    overlayBadge="CIVIL INFRASTRUCTURE"
                    overlayTitle="Commercial High-Rise MEP"
                    overlaySubtitle="48-story integrated electromechanical installation in Dubai."
                    interactive
                  />
                </div>

                {/* Media 2: Image Feature with Caption */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#173C62] block">2. IMAGE WITH CAPTION</span>
                  <Media
                    variant="image-caption"
                    src="/assets/images/project-solar.jpg"
                    alt="Logistics solar rooftop installation"
                    aspectRatio="16/10"
                    radius="image"
                    caption="2.4 MWp turnkey grid-tied solar photovoltaic installation on warehouse roofing."
                    attribution="DUBAI INDUSTRIAL CITY &bull; SHAMS DUBAI"
                  />
                </div>

                {/* Media 3: Video Placeholder */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-[#173C62] block">3. VIDEO PLACEHOLDER</span>
                  <Media
                    variant="video-placeholder"
                    src="/assets/images/mep-construction.jpg"
                    alt="Engineering site installation walk-through"
                    aspectRatio="16/10"
                    radius="image"
                    videoDuration="02:45 MIN"
                    caption="Technical site walk-through documenting primary mechanical pumping installation."
                    onPlayClick={() => alert('Video preview modal trigger')}
                  />
                </div>
              </div>
            </Container>
          </section>

          {/* Section 5: The 7 Core Image Card Types */}
          <section className="space-y-8 pt-8 border-t border-black/10">
            <Container variant="wide">
              <SectionHeading
                eyebrow="LEVEL 05 — REFINED IMAGE CARD SYSTEM"
                title="The 7 Core Image Card Archetypes"
                description="Engineered for high architectural clarity: normalized aspect ratios (21:9, 16:9, 16:10, 4/5), subtle hover transitions (scale 1.025), contextual gradient scrims only when text overlays photos, and zero floating SaaS drop shadows."
              />

              <div className="space-y-10 pt-6">
                {/* 1. Feature Image Card */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      01 · Feature Image Card (Large Architectural Focal Point)
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">Aspect Ratio 21:9 · 20–24px Radius · Text Overlay Scrim</span>
                  </div>
                  <FeatureImageCard
                    imageSrc="/assets/images/solar-epc.jpg"
                    imageAlt="Logistics Solar Rooftop EPC"
                    aspectRatio="21/9"
                    eyebrow="ENGINEERING & CONSTRUCTION · SOLAR EPC"
                    title="Commercial Rooftop Photovoltaic EPC & Grid Synchronization"
                    description="Full turnkey EPC execution adhering to DEWA Shams Dubai standards, bifacial Tier-1 modules, and integrated medium-voltage substation connection."
                    meta="DEWA Shams Dubai Certified · 2.4 MWp Capacity"
                    ctaText="View EPC Project Scope"
                    onClick={() => alert('Feature card clicked')}
                  />
                </div>

                {/* 2 & 3. Standard Image Card + Compact Image Cards (7/5 Split) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      02 &amp; 03 · Standard Image Card (7 Cols) &amp; Compact Image Cards (5 Cols)
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">Clean Photo (Zero Dark Overlay) &bull; 16px &amp; 12px Radii</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Standard Image Card (7 Cols) */}
                    <div className="lg:col-span-7">
                      <StandardImageCard
                        imageSrc="/assets/images/project-chiller.jpg"
                        imageAlt="Chilled Water Plant Modernization"
                        aspectRatio="16/10"
                        eyebrow="FACILITIES MANAGEMENT · HARD SERVICES"
                        title="Chilled Water Plant Overhauls & District Cooling Integration"
                        description="Phased mechanical overhauls, primary/secondary pumping retrofits, and VFD speed control to optimize continuous chilled water distribution."
                        meta="HVAC Engineering &amp; Modernization"
                        tags={['District Cooling', 'Chiller Retrofit', 'Energy Optimization']}
                        ctaText="Explore Service Scope"
                        onClick={() => alert('Standard card clicked')}
                      />
                    </div>

                    {/* Compact Image Cards (5 Cols) */}
                    <div className="lg:col-span-5 space-y-4">
                      <CompactImageCard
                        imageSrc="/assets/images/mep-construction.jpg"
                        imageAlt="Form-4 Switchgear Testing"
                        eyebrow="ENGINEERING &amp; CONSTRUCTION"
                        title="Form-4 Switchgear &amp; LV Distribution Panels"
                        meta="Substations &amp; Distribution"
                        badge="Certified"
                        onClick={() => alert('Compact card 1 clicked')}
                      />
                      <CompactImageCard
                        imageSrc="/assets/images/hero-building.jpg"
                        imageAlt="BMS Automation System"
                        eyebrow="FACILITIES MANAGEMENT"
                        title="Building Management Systems (BMS) Automation"
                        meta="Automated Climate &amp; Lighting"
                        badge="Active 24/7"
                        onClick={() => alert('Compact card 2 clicked')}
                      />
                      <CompactImageCard
                        imageSrc="/assets/images/engineering-intro.jpg"
                        imageAlt="Testing and Commissioning"
                        eyebrow="RETROFITS &amp; REFURBISHMENT"
                        title="Testing, Balancing &amp; Commissioning Operations"
                        meta="Single-Source Accountability"
                        badge="Standardized"
                        onClick={() => alert('Compact card 3 clicked')}
                      />
                    </div>
                  </div>
                </div>

                {/* 4 & 5. Project Card + Service Image Card (6/6 Split) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      04 &amp; 05 · Project Card &amp; Service Image Card
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">Project Specs &bull; Verified Subservices &bull; 18px Radius</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {/* 04 Project Card */}
                    <ProjectCard
                      title="Commercial High-Rise Electromechanical Infrastructure"
                      category="Engineering & Construction"
                      imageSrc="/assets/images/project-highrise.jpg"
                      imageAlt="Commercial High-Rise MEP"
                      location="Downtown Dubai, UAE"
                      sector="Commercial High-Rise"
                      specPills={['48 Floors', 'Turnkey MEP', '11kV Substation']}
                      aspectRatio="landscape"
                      onClick={() => alert('Project card clicked')}
                    />

                    {/* 05 Service Image Card */}
                    <ServiceImageCard
                      title="MEP Commercial & Residential Engineering"
                      division="Engineering & Construction"
                      imageSrc="/assets/images/engineering-intro.jpg"
                      imageAlt="MEP Engineering Systems"
                      description="Integrated HVAC, electrical distribution, fire protection, and plumbing engineering designed for mission-critical reliability across high-density developments."
                      subservices={[
                        'HVAC & Air Distribution',
                        'Power & LV Distribution',
                        'Fire Alarm & Life Safety',
                        'Potable & Drainage Plumbing',
                      ]}
                      onClick={() => alert('Service card clicked')}
                    />
                  </div>
                </div>

                {/* 6 & 7. Industry Image Card + Editorial Story Card (6/6 Split) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      06 &amp; 07 · Industry Image Card &amp; Editorial Story Card
                    </span>
                    <span className="text-[11px] font-mono text-[#64748B]">Sector Code &bull; Editorial News &bull; 18px Radius</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    {/* 06 Industry Image Card */}
                    <IndustryImageCard
                      title="Logistics, Warehousing & Cold Storage"
                      sector="Industrial Sector"
                      imageSrc="/assets/images/industry-logistics.jpg"
                      imageAlt="Logistics and Warehousing Facility"
                      description="Specialized high-bay climate control, heavy-duty electrical distribution, and rooftop solar installations tailored for modern logistics parks."
                      capabilitiesCount={5}
                      aspectRatio="16/10"
                      variant="text-below"
                      onClick={() => alert('Industry card clicked')}
                    />

                    {/* 07 Editorial Story Card */}
                    <EditorialStoryCard
                      title="LTSGROUP Completes 2.4 MWp Industrial Solar Commissioning"
                      category="Corporate News"
                      date="September 2026"
                      readTime="3 min read"
                      summary="Commissioning milestone achieved for turnkey rooftop photovoltaic array in Dubai Industrial City, supporting long-term decarbonization targets."
                      imageSrc="/assets/images/project-solar.jpg"
                      imageAlt="Solar PV System Commissioning"
                      aspectRatio="16/10"
                      layout="stacked"
                      onClick={() => alert('Editorial story card clicked')}
                    />
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Section 6: The 6 Standard Image-First Visual Patterns */}
          <section className="space-y-8 pt-8 border-t border-black/10">
            <Container variant="wide">
              <SectionHeading
                eyebrow="LEVEL 06 — IMAGE-FIRST VISUAL SYSTEM"
                title="The 6 Standard Visual Patterns"
                description="Strictly standardized image patterns where imagery carries the visual and emotional weight: Feature Image, Project Image, Service Image, Editorial Image, Full-width Image, and Image Mosaic. All feature 1.02 hover zoom and 3–5px arrow translation."
              />

              <div className="space-y-12 pt-8">
                
                {/* 1. Feature Image */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      Pattern 01 · Feature Image (Large Rounded Focal Point)
                    </span>
                    <span className="text-[11px] font-mono text-[#999999]">20px Radius &bull; Minimal Text &bull; Optional Metadata</span>
                  </div>
                  <FeatureImage
                    title="Utility-Grade Shams Dubai Solar PV EPC & Substation Synchronization"
                    imageSrc="/assets/images/solar-epc.jpg"
                    imageAlt="Solar PV Substation Synchronization"
                    eyebrow="DIVISION 01 &bull; SOLAR EPC"
                    description="Turnkey rooftop and carport solar photovoltaic systems engineered for peak continuous generation under intense ambient temperatures."
                    metadata="DEWA Shams Dubai Certified &bull; 2.4 MWp"
                    badge="COMMISSIONED"
                    ctaText="Explore Solar Scope"
                    aspectRatio="21/9"
                  />
                </div>

                {/* 2 & 3. Project Image (70-80% weight) & Service Image (1 short line max) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Pattern 02: Project Image */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                        Pattern 02 · Project Image (70–80% Image Weight)
                      </span>
                      <span className="text-[11px] font-mono text-[#999999]">75% Visual Weight &bull; 25% Metadata</span>
                    </div>
                    <ProjectImage
                      id="proj-highrise"
                      title="Commercial High-Rise Electromechanical Infrastructure"
                      category="MEP CONTRACTING"
                      location="Downtown Dubai, UAE"
                      descriptor="Turnkey chilled water risers, vertical busway reticulation, and certified smoke extract."
                      imageSrc="/assets/images/project-highrise.jpg"
                      aspectRatio="landscape"
                    />
                  </div>

                  {/* Pattern 03: Service Image */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                        Pattern 03 · Service Image (Image + Title + Arrow)
                      </span>
                      <span className="text-[11px] font-mono text-[#999999]">1 Short Line Maximum</span>
                    </div>
                    <div className="space-y-4">
                      <ServiceImage
                        id="srv-chiller"
                        numeral="01"
                        title="Central Chiller Plant Reliability"
                        shortLine="Continuous delta-T optimization, vibration diagnostics, and tube eddy-current testing."
                        imageSrc="/assets/images/project-chiller.jpg"
                        href="/facilities-management/hvac"
                      />
                      <ServiceImage
                        id="srv-switchgear"
                        numeral="02"
                        title="Low-Voltage Switchgear Assembly"
                        shortLine="Form-4 type-tested assemblies up to 65kA fault level with integrated ATS."
                        imageSrc="/assets/images/industry-logistics.jpg"
                        href="/engineering-construction/control-switchgear"
                      />
                    </div>
                  </div>

                </div>

                {/* 4. Editorial Image */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      Pattern 04 · Editorial Image (Architectural Storytelling)
                    </span>
                    <span className="text-[11px] font-mono text-[#999999]">Standalone Visual &bull; Technical Figure Annotation</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <EditorialImage
                      imageSrc="/assets/images/mep-construction.jpg"
                      caption="Primary high-density vertical busbar riser shaft in 52-story commercial tower."
                      figureNumber="FIG. 01"
                      location="Business Bay, Dubai"
                      aspectRatio="16/10"
                    />
                    <EditorialImage
                      imageSrc="/assets/images/trading-components.jpg"
                      caption="Variable frequency drive test bench and MID Class-2 ultrasonic heat meter telemetry."
                      figureNumber="FIG. 02"
                      location="Dubai Logistics City"
                      aspectRatio="16/10"
                    />
                  </div>
                </div>

                {/* 5. Full-Width Image */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      Pattern 05 · Full-Width Image (Panoramic Viewport)
                    </span>
                    <span className="text-[11px] font-mono text-[#999999]">21:9 Presence &bull; Quiet Lower Anchors</span>
                  </div>
                  <FullWidthImage
                    imageSrc="/assets/images/hero-building.jpg"
                    subtitle="BUILT ASSET STEWARDSHIP"
                    title="Mission-Critical Electromechanical Reliability Across the UAE"
                    statusBadge="ACTIVE STATUTORY MONITORING"
                    metaRight="DUBAI &bull; UAE &bull; DEWA CLASS 1"
                    ctaText="Review Verified Capabilities"
                    ctaHref="/about-us"
                  />
                </div>

                {/* 6. Image Mosaic */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      Pattern 06 · Image Mosaic (1 Large + 2 Smaller Supporting Images)
                    </span>
                    <span className="text-[11px] font-mono text-[#999999]">Asymmetric 7/5 Composition &bull; 18–20px Radii</span>
                  </div>
                  <VisualPatternMosaic
                    primaryImage={{
                      src: '/assets/images/mep-construction.jpg',
                      alt: 'Turnkey Electromechanical Infrastructure',
                      tag: 'CAPITAL EXECUTION',
                      caption: 'Turnkey 11kV substation coordination and central district cooling hydronics.',
                    }}
                    supportingImages={[
                      {
                        src: '/assets/images/project-solar.jpg',
                        alt: 'Commercial Solar PV Arrays',
                        tag: 'SHAMS DUBAI EPC',
                        caption: '2.4 MWp rooftop photovoltaic generation synchronized to utility grid.',
                      },
                      {
                        src: '/assets/images/project-chiller.jpg',
                        alt: 'Thermodynamic Plant Stewardship',
                        tag: 'CONTINUOUS RELIABILITY',
                        caption: 'Precision central chiller overhauls and water hygiene compliance.',
                      },
                    ]}
                  />
                </div>

              </div>
            </Container>
          </section>

          {/* Section 7: Numbers & Proof Architecture (Options A, B, C) */}
          <section className="space-y-8 pt-8 border-t border-black/10">
            <Container variant="wide">
              <SectionHeading
                eyebrow="LEVEL 07 — NUMBERS &amp; PROOF ARCHITECTURE"
                title="Verified Numerical Evidence Systems"
                description="Forensic editorial evidence replacing repetitive card boxes. Employs large font-mono numerals, delicate hairlines, and generous negative space with zero invented statistics."
              />

              <div className="space-y-16 pt-8">
                
                {/* 1. Option A: ProofStrip */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      Option A · ProofStrip (Horizontal Editorial Evidence Strip)
                    </span>
                    <span className="text-[11px] font-mono text-[#999999]">
                      2–4 Verified Items &bull; Delicate Hairlines &bull; Zero Boxed Cards
                    </span>
                  </div>
                  <ProofStrip
                    eyebrow="AUDITED OPERATIONAL DATA"
                    title="UAE Engineering &amp; Contracting Metrics"
                    tone="subtle"
                    separators="vertical"
                    items={[
                      {
                        index: '01',
                        value: '03',
                        label: 'Business Divisions',
                        subtext: 'Engineering & Construction, Facilities Management, Wholesale Trading',
                      },
                      {
                        index: '02',
                        value: '09',
                        label: 'Specialized Disciplines',
                        subtext: 'Single-source electromechanical accountability across the built lifecycle',
                      },
                      {
                        index: '03',
                        value: '24/7',
                        label: 'Operational Dispatch',
                        subtext: 'Continuous facilities response and emergency escalation center in Dubai',
                      },
                      {
                        index: '04',
                        value: '100%',
                        label: 'Statutory Clearances',
                        subtext: 'Verified compliance across DEWA, Dubai Civil Defense, and Dubai Municipality',
                      },
                    ]}
                  />
                </div>

                {/* 2. Option B: ProofSplit */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      Option B · ProofSplit (Asymmetric Number on Left + Editorial Right)
                    </span>
                    <span className="text-[11px] font-mono text-[#999999]">
                      5/7 Asymmetric Split &bull; Monumental Typography &bull; Single-Source Context
                    </span>
                  </div>
                  <ProofSplit
                    eyebrow="MISSION-CRITICAL AVAILABILITY"
                    primaryNumber={{
                      index: '01',
                      value: '24/7',
                      label: 'Emergency Technical Dispatch',
                      subtext: 'Dubai Operations Command Center',
                    }}
                    editorial={{
                      headline: 'Uninterrupted operational continuity for UAE built assets.',
                      explanation: 'LTSGROUP maintains continuous 24/7 emergency dispatch and computerized maintenance tracking, safeguarding central chiller plants, high-voltage busways, and critical plumbing networks against unpredicted downtime.',
                      citation: 'CAFM Telemetry &bull; 15-Minute Critical Response SLA',
                      ctaText: 'Review Facilities Scope',
                      ctaHref: '/facilities-management',
                    }}
                    tone="white"
                  />
                </div>

                {/* 3. Option C: ProofDominant */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                      Option C · ProofDominant (1 Huge Anchor + 2 Supporting Metrics)
                    </span>
                    <span className="text-[11px] font-mono text-[#999999]">
                      Monumental Scale &bull; Strict Factual Integrity &bull; Zero Synthetic Padding
                    </span>
                  </div>
                  <ProofDominant
                    eyebrow="ENTERPRISE BENCHMARKS"
                    title="Single-Source Electromechanical Accountability"
                    tone="subtle"
                    dominantItem={{
                      index: '01',
                      value: '03',
                      label: 'Core Operating Pillars',
                      subtext: 'Capital Engineering & Construction, Facilities Stewardship, and Wholesale Trading unified under single-source institutional governance.',
                    }}
                    supportingItems={[
                      {
                        index: '02',
                        value: '03',
                        label: 'Certified Management Systems',
                        subtext: 'ISO 9001:2015 Quality, ISO 14001:2015 Environmental, and ISO 45001:2018 Safety.',
                      },
                      {
                        index: '03',
                        value: '100%',
                        label: 'Statutory Clearances',
                        subtext: 'Unconditional utility approvals across DEWA Shams Dubai, Civil Defense, and Municipality.',
                      },
                    ]}
                  />
                </div>

              </div>
            </Container>
          </section>
        </div>
      )}

      {/* TAB 8: SECTION COMPOSITIONS (A–J) */}
      {activeTab === 'compositions' && (
        <div className="space-y-16 py-12">
          {/* Header Banner */}
          <section>
            <Container variant="wide">
              <div className="p-8 sm:p-10 rounded-[20px] bg-[#173C62] text-white space-y-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-[#173C62] text-xs font-semibold rounded-full uppercase tracking-wider text-[#CBD5E1]">
                    ARCHITECTURAL RHYTHM CONSTITUTION
                  </span>
                  <span className="text-xs text-slate-300">Level 06 &bull; Compositions A through J</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white">
                  Controlled Page Section Compositions
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                  Enforces the permanent design rule: <strong>&ldquo;Do not use card grid, card grid, card grid throughout the website.&rdquo;</strong> Every page must combine open editorial layouts, asymmetric focal features, disciplined metric strips, and authoritative dark statements.
                </p>
              </div>
            </Container>
          </section>

          {/* 01. COMPOSITION A: TEXT + IMAGE (40% / 60%) */}
          <div className="space-y-4">
            <Container variant="wide">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                  01 &bull; COMPOSITION A: TEXT + IMAGE (TEXT 40% / IMAGE 60%)
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">Asymmetric 5/7 Ratio &bull; Soft Radius &bull; Technical Attribution</span>
              </div>
            </Container>
            <CompositionA
              eyebrow="ENGINEERING &amp; CONSTRUCTION &bull; MEP INFRASTRUCTURE"
              title="Single-Source Electromechanical Contracting Across the UAE"
              description="LTSGROUP integrates complex MEP engineering, solar photovoltaic generation, and low-voltage control switchgear under unified engineering accountability."
              secondaryText="Adhering to rigorous DEWA, Dubai Civil Defense, and Dubai Municipality statutory frameworks."
              highlights={[
                'Integrated 3D BIM coordination preventing on-site clashes',
                'High-ambient psychrometric HVAC calculations for UAE conditions',
                'DEWA-approved substation and medium-voltage interconnection',
              ]}
              actions={
                <Button variant="primary" size="md" iconTrailing={<ArrowRight className="w-4 h-4" />}>
                  Explore Engineering Scope
                </Button>
              }
              imageSrc="/assets/images/engineering-intro.jpg"
              imageAlt="Mechanical Pumping Infrastructure"
              imageCaption="Chilled water pumping headers and variable speed hydronics."
              attribution="LTSGROUP ASSET"
            />
          </div>

          {/* 02. COMPOSITION B: IMAGE + TEXT (60% / 40%) */}
          <div className="space-y-4">
            <Container variant="wide">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                  02 &bull; COMPOSITION B: IMAGE + TEXT (IMAGE 60% / TEXT 40%)
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">Asymmetric 7/5 Ratio &bull; Visual-First Narrative</span>
              </div>
            </Container>
            <CompositionB
              eyebrow="FACILITIES MANAGEMENT &bull; HARD SERVICES"
              title="Lifecycle Facilities Management &amp; Asset Stewardship"
              description="Continuous preventive maintenance, 24/7 central plant monitoring, and rapid emergency response teams preserving real estate asset value."
              highlights={[
                'Bespoke CAFM maintenance regimes with computerized scheduling',
                'Specialized chilled water hydronic balancing and IAQ testing',
                'Statutory life safety compliance and emergency power standby',
              ]}
              actions={
                <Button variant="secondary" size="md" iconTrailing={<ArrowRight className="w-4 h-4" />}>
                  View FM Capabilities
                </Button>
              }
              imageSrc="/assets/images/hero-building.jpg"
              imageAlt="Commercial Facility High-Rise"
              imageCaption="Commercial high-rise facility maintained under long-term hard services agreements."
              attribution="DUBAI PORTFOLIO"
            />
          </div>

          {/* 03. COMPOSITION C: LARGE FEATURE + SMALL SUPPORTING CARDS */}
          <div className="space-y-4">
            <Container variant="wide">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                  03 &bull; COMPOSITION C: LARGE FEATURE + SMALL SUPPORTING CARDS
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">1 Large Feature (7 cols) + 2 Smaller Items (5 cols) &bull; Anti-Formula Grid</span>
              </div>
            </Container>
            <CompositionC
              sectionEyebrow="SOLAR PHOTOVOLTAIC GENERATION &bull; DISTRIBUTED ASSETS"
              sectionTitle="Flagship Turnkey EPC Deployments"
              sectionDescription="One dominant 7-column feature module paired with two 5-column supporting cards, eliminating predictable 3-equal-card layouts."
              featureImageSrc="/assets/images/solar-epc.jpg"
              featureImageAlt="Logistics Solar Rooftop"
              featureEyebrow="TURNKEY EPC &bull; 2.4 MWp"
              featureTitle="Industrial Logistics Solar Photovoltaic Plant"
              featureDescription="Turnkey bifacial solar PV system designed for high-dust desert environments under DEWA Shams Dubai interconnection regulations."
              featureMeta="Dubai Industrial City &bull; Tier-1 Modules"
              featureCtaText="View Plant Dossier"
              supportingItems={[
                {
                  imageSrc: '/assets/images/mep-construction.jpg',
                  eyebrow: 'SWITCHGEAR',
                  title: 'Form-4 Substation Distribution Panels',
                  meta: '11kV / 415V Transformation',
                  badge: 'IEC 61439',
                },
                {
                  imageSrc: '/assets/images/project-chiller.jpg',
                  eyebrow: 'HVAC',
                  title: 'Central Chilled Water Pumping Stations',
                  meta: 'Variable Speed Hydronics',
                  badge: 'Continuous Care',
                },
              ]}
            />
          </div>

          {/* 04. COMPOSITION D: EDITORIAL LIST */}
          <div className="space-y-4">
            <Container variant="wide">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                  04 &bull; COMPOSITION D: EDITORIAL LIST
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">Large Heading + Horizontal Hairline Rows &bull; Zero Card Containers</span>
              </div>
            </Container>
            <CompositionD
              eyebrow="CAPABILITY TAXONOMY &bull; SCOPE MATRIX"
              title="Comprehensive Engineering &amp; Maintenance Disciplines"
              description="Open horizontal rows with hairline dividers replacing card boxes for an airy, prestigious editorial narrative."
              items={[
                {
                  id: 'd-1',
                  index: '01',
                  category: 'MEP Contracting',
                  title: 'Mechanical, Electrical & Plumbing EPC',
                  description: 'Turnkey electromechanical contracting for commercial high-rises and mission-critical infrastructure under single-source accountability.',
                  tags: ['HVAC Hydronics', 'Electrical Distribution', 'Fire Life Safety', 'Sanitary Systems'],
                },
                {
                  id: 'd-2',
                  index: '02',
                  category: 'Solar Energy',
                  title: 'Rooftop & Ground-Mounted Solar Photovoltaic EPC',
                  description: 'Full turnkey solar PV execution adhering to DEWA Shams Dubai standards with high-yield Tier-1 bifacial panels.',
                  tags: ['EPC Delivery', 'Shams Dubai Certified', 'Medium Voltage Sync'],
                },
                {
                  id: 'd-3',
                  index: '03',
                  category: 'Facilities Management',
                  title: 'Hard & Soft Facility Stewardship',
                  description: 'Preventive, predictive, and corrective maintenance regimes keeping building assets operational 24/7 with computerized CAFM regimes.',
                  tags: ['HVAC Stewardship', 'BMS Automation', 'Civil Works'],
                },
                {
                  id: 'd-4',
                  index: '04',
                  category: 'Trading & Component Supply',
                  title: 'Wholesale Equipment & Critical Spare Parts',
                  description: 'Authorized direct distribution of genuine HVAC spare parts, variable frequency drives, and smart EV charging stations.',
                  tags: ['VFD Controls', 'BTU Metering', 'EV Chargers'],
                },
              ]}
            />
          </div>

          {/* 05. COMPOSITION E: METRIC STRIP */}
          <div className="space-y-4">
            <Container variant="wide">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                  05 &bull; COMPOSITION E: METRIC STRIP
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">Verified Corporate Benchmarks &bull; Strict Factual Alignment</span>
              </div>
            </Container>
            <CompositionE
              eyebrow="VERIFIED ENGINEERING BENCHMARKS &bull; STATUTORY ALIGNMENT"
              metrics={[
                {
                  value: '100%',
                  label: 'DEWA Shams Dubai',
                  subtext: 'Utility grid compliance and statutory solar PV certification.',
                  statutoryReference: 'DEWA Approved',
                },
                {
                  value: '24/7',
                  label: 'Hard Services Response',
                  subtext: 'Rapid-response emergency maintenance across critical UAE assets.',
                  statutoryReference: 'Continuous FM',
                },
                {
                  value: 'Form-4',
                  label: 'Switchgear Segregation',
                  subtext: 'Internal compartmentalization meeting international IEC standards.',
                  statutoryReference: 'IEC 61439',
                },
                {
                  value: '0',
                  label: 'Lost-Time Incidents',
                  subtext: 'Uncompromising HSE site protocols and rigorous safety management.',
                  statutoryReference: 'HSE Protocol',
                },
              ]}
            />
          </div>

          {/* 06. COMPOSITION F: LOGO GRID */}
          <div className="space-y-4">
            <Container variant="wide">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                  06 &bull; COMPOSITION F: LOGO GRID
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">Approved Regulatory Authorities &amp; Standards &bull; Monochromatic Dignity</span>
              </div>
            </Container>
            <CompositionF
              eyebrow="STATUTORY CLEARANCES &bull; REGULATORY BODIES"
              title="Authority Approvals &amp; Standards Compliance"
              description="Restrained, disciplined corporate grid displaying verified statutory clearance frameworks and international engineering standards."
              columns={4}
              logos={[
                {
                  name: 'DEWA',
                  sublabel: 'Dubai Electricity & Water Authority',
                  clearanceCode: 'Statutory Grid',
                },
                {
                  name: 'Dubai Civil Defense',
                  sublabel: 'Fire & Life Safety Standards',
                  clearanceCode: 'Life Safety NOC',
                },
                {
                  name: 'Dubai Municipality',
                  sublabel: 'Building Regulations & Specifications',
                  clearanceCode: 'Code Compliance',
                },
                {
                  name: 'ASHRAE 90.1',
                  sublabel: 'Energy & Environmental Design',
                  clearanceCode: 'Building Energy',
                },
                {
                  name: 'IEC 61439',
                  sublabel: 'Low-Voltage Switchgear Assemblies',
                  clearanceCode: 'Global Standard',
                },
                {
                  name: 'HTM 03-01',
                  sublabel: 'Specialized Healthcare Ventilation',
                  clearanceCode: 'Clinical Air',
                },
                {
                  name: 'AHRI Certified',
                  sublabel: 'Performance Rating of Equipment',
                  clearanceCode: 'Equipment Standard',
                },
                {
                  name: 'NFPA Standards',
                  sublabel: 'National Fire Protection Compliance',
                  clearanceCode: 'Fire Safety',
                },
              ]}
            />
          </div>

          {/* 07. COMPOSITION G: FEATURED STORY */}
          <div className="space-y-4">
            <Container variant="wide">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                  07 &bull; COMPOSITION G: FEATURED STORY
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">Large Architectural Image + Editorial Headline &bull; Publication Layout</span>
              </div>
            </Container>
            <CompositionG
              sectionEyebrow="FEATURED TECHNICAL BRIEFING"
              category="Solar PV Interconnection"
              date="September 2026"
              readTime="4 min read"
              headline="DEWA Shams Dubai: Technical Standards for Commercial Rooftop Solar Interconnection"
              leadParagraph="An engineering briefing examining medium-voltage inverter synchronization, bifacial yield optimization in high-ambient Middle Eastern conditions, and mandatory protection relay schemes."
              imageSrc="/assets/images/project-solar.jpg"
              imageCaption="Commissioned commercial rooftop solar installation in Dubai Industrial City."
              attribution="SHAMS DUBAI"
              layout="split"
              onClick={() => alert('Featured story briefing clicked')}
            />
          </div>

          {/* 08. COMPOSITION H: SERVICE MATRIX */}
          <div className="space-y-4">
            <Container variant="wide">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                  08 &bull; COMPOSITION H: SERVICE MATRIX
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">Grouped Taxonomy &bull; Minimal Lines &bull; Zero Heavy Card Boxes</span>
              </div>
            </Container>
            <CompositionH
              eyebrow="DISCIPLINE TAXONOMY &bull; CAPABILITY MATRIX"
              title="Grouped Service Taxonomy &amp; Operating Matrix"
              description="Grouped services presented with minimal visual treatment and clean columns, eliminating heavy card containers."
              columns={3}
              groups={[
                {
                  id: 'h-1',
                  index: '01 / ENGINEERING & CONSTRUCTION',
                  title: 'Electromechanical Contracting',
                  description: 'Turnkey electromechanical infrastructure delivery.',
                  services: [
                    { name: 'Commercial & Residential MEP', code: 'MEP-01' },
                    { name: 'Civil & Transport Infrastructure', code: 'INF-02' },
                    { name: 'Solar PV EPC & Grid Interconnection', code: 'SOL-03' },
                    { name: 'Form-4 Control Switchgear Assembly', code: 'SWG-04' },
                  ],
                },
                {
                  id: 'h-2',
                  index: '02 / FACILITIES MANAGEMENT',
                  title: 'Hard & Soft Services',
                  description: 'Lifecycle building stewardship and operations.',
                  services: [
                    { name: 'HVAC & Chiller Plant Maintenance', code: 'FM-01' },
                    { name: 'Electrical Distribution Stewardship', code: 'FM-02' },
                    { name: 'Plumbing & Drainage Engineering', code: 'FM-03' },
                    { name: 'Centralized BMS Automation', code: 'FM-04' },
                  ],
                },
                {
                  id: 'h-3',
                  index: '03 / RETROFITS & REFURBISHMENT',
                  title: 'Single-Source Modernization',
                  description: 'Upgrades and performance commissioning.',
                  services: [
                    { name: 'Electromechanical Design & Engineering', code: 'RET-01' },
                    { name: 'Turnkey Phased Project Management', code: 'RET-02' },
                    { name: 'Third-Party Testing & Commissioning', code: 'RET-03' },
                    { name: 'Air & Hydronic Balancing Validation', code: 'RET-04' },
                  ],
                },
              ]}
            />
          </div>

          {/* 09. COMPOSITION I: FULL-WIDTH MEDIA */}
          <div className="space-y-4">
            <Container variant="wide">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                  09 &bull; COMPOSITION I: FULL-WIDTH MEDIA
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">Large Photography &bull; Minimal Overlay &bull; Narrative Pacing</span>
              </div>
            </Container>
            <CompositionI
              imageSrc="/assets/images/hero-building.jpg"
              aspectRatio="panoramic"
              bleed={false}
              overlayEyebrow="ARCHITECTURAL SCALE"
              overlayTitle="Engineering the Built Environment with Precision"
              overlaySubtitle="High-performance electromechanical systems delivering operational continuity across the United Arab Emirates."
              caption="Downtown Dubai Commercial District infrastructure."
              location="DUBAI, UAE"
              attribution="LTSGROUP ASSET"
            />
          </div>

          {/* 10. COMPOSITION J: DARK STATEMENT SECTION */}
          <div className="space-y-4">
            <Container variant="wide">
              <div className="flex items-center justify-between border-b border-black/10 pb-2">
                <span className="font-mono text-xs font-bold text-[#173C62] uppercase tracking-wider">
                  10 &bull; COMPOSITION J: DARK STATEMENT SECTION
                </span>
                <span className="text-[11px] font-mono text-[#64748B]">Deep Navy &bull; Authoritative Statement &bull; Direct CTA</span>
              </div>
            </Container>
            <CompositionJ
              eyebrow="INSTITUTIONAL ACCOUNTABILITY &bull; RIGOROUS STANDARDS"
              statement="Single-source electromechanical accountability delivered through rigorous statutory compliance and technical precision."
              supportingText="From initial capital contracting through lifetime facility stewardship and component supply, LTSGROUP preserves the operational continuity of mission-critical built environments."
              primaryActionLabel="Initiate Technical Consultation"
              onPrimaryActionClick={() => alert('Consultation initiated')}
              secondaryActionLabel="Explore Delivered Projects"
              onSecondaryActionClick={() => alert('Explore projects')}
              footnote="DEWA Shams Dubai Certified &bull; Dubai Civil Defense Approved &bull; Operating Across the UAE"
            />
          </div>
        </div>
      )}
    </div>
  );
};
