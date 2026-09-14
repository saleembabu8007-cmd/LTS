import React from 'react';
import { Container } from '../structures/Container';
import { Section, SectionSpacing, SectionTone } from '../structures/Section';

export interface CompositionMetricItem {
  id?: string;
  value: string;
  label: string;
  subtext?: string;
  statutoryReference?: string;
}

export type MetricStripItem = CompositionMetricItem;

export interface CompositionMetricStripProps {
  eyebrow?: string;
  metrics: CompositionMetricItem[];
  tone?: SectionTone;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

/**
 * COMPOSITION E: METRIC STRIP
 * Layout Structure: Horizontal band of factual engineering/statutory metrics.
 * Strictly deployed ONLY when verified corporate/statutory metrics exist.
 */
export const CompositionMetricStrip: React.FC<CompositionMetricStripProps> = ({
  eyebrow = 'VERIFIED ENGINEERING BENCHMARKS & STATUTORY ALIGNMENTS',
  metrics,
  tone = 'white',
  spacing = 'standard',
  id,
  className = '',
}) => {
  const isDark = tone === 'dark';

  return (
    <Section id={id} tone={tone} spacing={spacing} className={className}>
      <Container variant="wide">
        {eyebrow && (
          <div className="mb-8">
            <span
              className={`text-xs font-semibold uppercase tracking-[0.12em] block ${
                isDark ? 'text-[#94A3B8]' : 'text-[#173C62]'
              }`}
            >
              {eyebrow}
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {metrics.map((metric, idx) => (
            <div
              key={metric.id || idx}
              className={`space-y-2 pb-6 sm:pb-0 border-b sm:border-b-0 sm:border-l first:border-l-0 ${
                isDark ? 'border-white/10' : 'border-[#E5E7EB]'
              } sm:pl-6 lg:pl-8 first:pl-0 last:border-b-0`}
            >
              <div
                className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-none ${
                  isDark ? 'text-white' : 'text-[#173C62]'
                }`}
              >
                {metric.value}
              </div>

              <div
                className={`text-xs font-semibold uppercase tracking-[0.10em] pt-1 ${
                  isDark ? 'text-[#CBD5E1]' : 'text-[#173C62]'
                }`}
              >
                {metric.label}
              </div>

              {metric.subtext && (
                <p
                  className={`text-xs leading-relaxed font-normal ${
                    isDark ? 'text-slate-300' : 'text-[#64748B]'
                  }`}
                >
                  {metric.subtext}
                </p>
              )}

              {metric.statutoryReference && (
                <span
                  className={`inline-block text-[10.5px] font-medium px-2 py-0.5 rounded-sm uppercase tracking-wider ${
                    isDark ? 'bg-white/10 text-slate-300' : 'bg-[#EDF3F9] text-[#173C62]'
                  }`}
                >
                  {metric.statutoryReference}
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export const CompositionE = CompositionMetricStrip;
