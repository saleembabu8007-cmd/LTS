import React from 'react';
import { Container } from '../structures/Container';
import { MetricItem, MetricItemProps } from '../molecules/MetricItem';

export interface MetricBandProps {
  metrics: MetricItemProps[];
  tone?: 'white' | 'subtle' | 'dark';
  borderTop?: boolean;
  borderBottom?: boolean;
  className?: string;
}

/**
 * MetricBand: Open horizontal typographic statistics strip integrated into the canvas.
 * Replaces boxed statistic cards with fluid editorial figures.
 */
export const MetricBand: React.FC<MetricBandProps> = ({
  metrics,
  tone = 'white',
  borderTop = true,
  borderBottom = true,
  className = '',
}) => {
  const toneClasses = {
    white: 'bg-white text-[#0B1320]',
    subtle: 'bg-[#F8FAFC] text-[#0B1320]',
    dark: 'bg-[#0B1C2F] text-white',
  };

  const isDark = tone === 'dark';
  const borderColor = isDark ? 'border-white/10' : 'border-[#E5E7EB]';

  return (
    <section
      className={`py-12 sm:py-16 ${toneClasses[tone]} ${
        borderTop ? `border-t ${borderColor}` : ''
      } ${borderBottom ? `border-b ${borderColor}` : ''} ${className}`}
    >
      <Container>
        <div className={`grid grid-cols-2 md:grid-cols-${Math.min(metrics.length, 4)} gap-8 lg:gap-12 items-start`}>
          {metrics.map((m, idx) => (
            <MetricItem
              key={idx}
              value={m.value}
              suffix={m.suffix}
              prefix={m.prefix}
              label={m.label}
              description={m.description}
              size={m.size || 'display'}
              light={isDark}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
