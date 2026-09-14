import React from 'react';
import { Container } from '../structures/Container';
import { ProofItem, ProofItemProps } from './ProofItem';

export interface ProofDominantProps {
  /** Optional section eyebrow, e.g. '02 / ENTERPRISE SCALE' */
  eyebrow?: string;
  /** Section title */
  title?: string;
  /** Primary dominant figure (massive typography) */
  dominantItem: ProofItemProps;
  /** Exactly two verified supporting metrics */
  supportingItems: [ProofItemProps, ProofItemProps];
  /** Visual canvas tone */
  tone?: 'white' | 'subtle' | 'dark';
  className?: string;
}

/**
 * ProofDominant (Option C) — Asymmetric composition featuring one massive anchor number
 * paired with two smaller supporting verified metrics.
 * Conforms strictly to LTS Numbers & Proof design rules:
 * - One huge commanding figure (text-8xl to text-[10rem]).
 * - Two supporting figures stacked with subtle hairlines.
 * - Negative space provides elevation rather than SaaS card boxes.
 * - Monospace indexes ('01', '02', '03') and uppercase tracking labels.
 */
export const ProofDominant: React.FC<ProofDominantProps> = ({
  eyebrow,
  title,
  dominantItem,
  supportingItems,
  tone = 'subtle',
  className = '',
}) => {
  const isDark = tone === 'dark';

  const toneBg = {
    white: 'bg-white text-[#0B1320]',
    subtle: 'bg-[#F8FAFC] text-[#0B1320]',
    dark: 'bg-[#173C62] text-white',
  }[tone];

  const borderColor = isDark ? 'border-white/15' : 'border-[#E5E7EB]';
  const itemTone = isDark ? 'dark' : 'brand';

  return (
    <section
      aria-label={title || 'Verified Enterprise Metrics'}
      className={`py-20 sm:py-28 lg:py-32 border-b ${borderColor} ${toneBg} ${className}`}
    >
      <Container variant="wide">
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
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Dominant Large Numeral (7 Columns) */}
          <div className="lg:col-span-7 text-left">
            <ProofItem
              index={dominantItem.index || '01'}
              value={dominantItem.value}
              unit={dominantItem.unit}
              label={dominantItem.label}
              subtext={dominantItem.subtext}
              size="dominant"
              tone={itemTone}
            />
          </div>

          {/* Two Supporting Figures Stacked (5 Columns) */}
          <div
            className={`lg:col-span-5 flex flex-col divide-y ${
              isDark ? 'divide-white/15' : 'divide-[#E5E7EB]'
            } pt-4 lg:pt-2`}
          >
            <div className="pb-8 text-left">
              <ProofItem
                index={supportingItems[0].index || '02'}
                value={supportingItems[0].value}
                unit={supportingItems[0].unit}
                label={supportingItems[0].label}
                subtext={supportingItems[0].subtext}
                size="standard"
                tone={itemTone}
              />
            </div>

            <div className="pt-8 text-left">
              <ProofItem
                index={supportingItems[1].index || '03'}
                value={supportingItems[1].value}
                unit={supportingItems[1].unit}
                label={supportingItems[1].label}
                subtext={supportingItems[1].subtext}
                size="standard"
                tone={itemTone}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
