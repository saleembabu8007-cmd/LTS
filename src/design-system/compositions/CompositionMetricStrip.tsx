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
              className={`font-mono text-xs uppercase tracking-[0.2em] font-semibold block ${
                isDark ? 'text-[#94A3B8]' : 'text-[#173C62]'
              }`}
            >
              {eyebrow}
            </span>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E5E7EB]/40">
          {metrics.map((metric, idx) => (
            <div
              key={metric.id || idx}
              className={`space-y-2 ${idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}
            >
              <div
                className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-none ${
                  isDark ? 'text-white' : 'text-[#0B1320]'
                }`}
              >
                {metric.value}
              </div>

              <div
                className={`font-mono text-xs uppercase tracking-wider font-semibold pt-1 ${
                  isDark ? 'text-[#93C5FD]' : 'text-[#173C62]'
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
                  className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded-sm uppercase tracking-wider ${
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
