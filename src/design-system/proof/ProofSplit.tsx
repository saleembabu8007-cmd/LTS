import React from 'react';
import { Container } from '../structures/Container';
import { ProofItem } from './ProofItem';

export interface ProofSplitProps {
  /** Optional section eyebrow, e.g. '04 / STATUTORY ASSURANCE' */
  eyebrow?: string;
  /** Large dominant number on the left */
  primaryNumber: {
    index?: string;
    value: string | number;
    unit?: string;
    label: string;
    subtext?: string;
  };
  /** Editorial explanation on the right */
  editorial: {
    headline: string;
    explanation: string;
    citation?: string;
    ctaText?: string;
    ctaHref?: string;
    onNavigate?: (slug: string) => void;
  };
  /** Visual tone */
  tone?: 'white' | 'subtle' | 'dark';
  className?: string;
}

/**
 * ProofSplit (Option B) — Asymmetric composition pairing a monumental number on the left
 * with authoritative editorial explanation on the right.
 * Conforms strictly to LTS Numbers & Proof design rules:
 * - Left: Monumental typography with index and tracking label.
 * - Right: High-contrast architectural statement and single-source explanation.
 * - Generous negative space without boxed card containers.
 */
export const ProofSplit: React.FC<ProofSplitProps> = ({
  eyebrow,
  primaryNumber,
  editorial,
  tone = 'white',
  className = '',
}) => {
  const isDark = tone === 'dark';

  const toneBg = {
    white: 'bg-white text-[#0B1320]',
    subtle: 'bg-[#F8FAFC] text-[#0B1320]',
    dark: 'bg-[#173C62] text-white',
  }[tone];

  const borderColor = isDark ? 'border-white/15' : 'border-[#E5E7EB]';

  const handleCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (editorial.onNavigate && editorial.ctaHref) {
      e.preventDefault();
      editorial.onNavigate(editorial.ctaHref);
    }
  };

  return (
    <section
      aria-label={editorial.headline}
      className={`py-20 sm:py-28 lg:py-32 border-b ${borderColor} ${toneBg} ${className}`}
    >
      <Container variant="wide">
        {eyebrow && (
          <div className="mb-10 sm:mb-14 text-left">
            <span
              className={`text-[11px] font-mono font-semibold uppercase tracking-[0.22em] block ${
                isDark ? 'text-white/70' : 'text-[#173C62]'
              }`}
            >
              {eyebrow}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Monumental Numeral (5 Columns) */}
          <div className="lg:col-span-5 text-left">
            <ProofItem
              index={primaryNumber.index || '01'}
              value={primaryNumber.value}
              unit={primaryNumber.unit}
              label={primaryNumber.label}
              subtext={primaryNumber.subtext}
              size="large"
              tone={isDark ? 'dark' : 'brand'}
            />
          </div>

          {/* Vertical Dividing Hairline (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-1 h-36 border-r border-[#E5E7EB]" />

          {/* Right Column: Editorial Explanation (6 Columns) */}
          <div className="lg:col-span-6 text-left space-y-4">
            <h3
              className={`text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-snug ${
                isDark ? 'text-white' : 'text-[#0B1320]'
              }`}
            >
              {editorial.headline}
            </h3>

            <p
              className={`text-sm sm:text-base font-normal leading-relaxed max-w-xl ${
                isDark ? 'text-white/80' : 'text-[#4A5568]'
              }`}
            >
              {editorial.explanation}
            </p>

            {editorial.citation && (
              <div className="pt-2">
                <span
                  className={`inline-block text-[11px] font-mono uppercase tracking-widest ${
                    isDark ? 'text-white/60' : 'text-[#999999]'
                  }`}
                >
                  {editorial.citation}
                </span>
              </div>
            )}

            {editorial.ctaText && editorial.ctaHref && (
              <div className="pt-4">
                <a
                  href={editorial.ctaHref}
                  onClick={handleCta}
                  className={`group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isDark ? 'text-white hover:text-white/80' : 'text-[#173C62] hover:text-[#0B1320]'
                  }`}
                >
                  <span className="border-b border-current pb-0.5">
                    {editorial.ctaText}
                  </span>
                  <span className="transform transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
