import React from 'react';
import { Container } from '../structures/Container';
import { ProofItem, ProofItemProps } from './ProofItem';

export interface ProofStripProps {
  /** Optional section eyebrow, e.g. '06 / SCALE' */
  eyebrow?: string;
  /** Section title */
  title?: string;
  /** Optional concise supporting description */
  description?: string;
  /** Verified data items (2 to 4 items max — zero invented padding) */
  items: ProofItemProps[];
  /** Visual canvas tone */
  tone?: 'white' | 'subtle' | 'dark';
  /** Separator style between numbers */
  separators?: 'none' | 'vertical' | 'subtle';
  className?: string;
}

/**
 * ProofStrip (Option A) — Horizontal sequence of verified LTS numbers.
 * Conforms strictly to LTS Numbers & Proof design rules:
 * - Generous architectural whitespace.
 * - Massive monospace typography (text-6xl to 8xl).
 * - Thin, delicate separators or open spacing (never cards).
 * - Small tracking labels and concise factual descriptors.
 */
export const ProofStrip: React.FC<ProofStripProps> = ({
  eyebrow,
  title,
  description,
  items,
  tone = 'subtle',
  separators = 'subtle',
  className = '',
}) => {
  const isDark = tone === 'dark';

  const toneBg = {
    white: 'bg-white text-[#0B1320]',
    subtle: 'bg-[#F8FAFC] text-[#0B1320]',
    dark: 'bg-[#173C62] text-white',
  }[tone];

  const borderColor = isDark ? 'border-white/15' : 'border-[#E5E7EB]';

  // Determine grid columns dynamically based on verified item count
  const count = items.length;
  const gridColClass =
    count === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : count === 3
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';

  const itemTone = isDark ? 'dark' : 'brand';

  return (
    <section
      aria-label={title || 'Verified Numbers'}
      className={`py-20 sm:py-28 lg:py-32 border-b ${borderColor} ${toneBg} ${className}`}
    >
      <Container variant="wide">
        {/* Optional Section Entrance */}
        {(eyebrow || title) && (
          <div className="max-w-2xl mb-14 lg:mb-20 text-left">
            {eyebrow && (
              <span
                className={`text-[11px] font-mono font-semibold uppercase tracking-[0.22em] block mb-2 ${
                  isDark ? 'text-white/70' : 'text-[#173C62]'
                }`}
              >
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight ${
                  isDark ? 'text-white' : 'text-[#0B1320]'
                }`}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-3 text-xs sm:text-sm font-normal leading-relaxed ${
                  isDark ? 'text-white/80' : 'text-[#64748B]'
                }`}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {/* Proof Items Grid / Strip */}
        <div
          className={`grid ${gridColClass} gap-10 sm:gap-12 lg:gap-16 items-start ${
            separators === 'vertical' && !isDark
              ? 'md:divide-x md:divide-[#E5E7EB] md:gap-0'
              : separators === 'vertical' && isDark
              ? 'md:divide-x md:divide-white/15 md:gap-0'
              : ''
          }`}
        >
          {items.map((item, idx) => (
            <div
              key={item.label || idx}
              className={`${
                separators === 'vertical' ? 'md:px-8 lg:px-12 first:pl-0 last:pr-0' : ''
              }`}
            >
              <ProofItem
                index={item.index || `0${idx + 1}`}
                value={item.value}
                unit={item.unit}
                label={item.label}
                subtext={item.subtext}
                size="standard"
                tone={itemTone}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
