import React from 'react';

export interface StatementMetric {
  value: string;
  label: string;
  subtext?: string;
}

interface DarkStatementSectionProps {
  eyebrow?: string;
  headline: string;
  statementParagraph: string;
  metrics?: StatementMetric[];
  actions?: React.ReactNode;
  className?: string;
}

export const DarkStatementSection: React.FC<DarkStatementSectionProps> = ({
  eyebrow = 'INSTITUTIONAL GOVERNANCE & SCALE',
  headline,
  statementParagraph,
  metrics,
  actions,
  className = '',
}) => {
  return (
    <section className={`py-24 lg:py-36 bg-[#173C62] text-white border-b border-white/15 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-4xl space-y-6">
          {eyebrow && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#999999] block">
              {eyebrow}
            </span>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white">
            {headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-3xl pt-2">
            {statementParagraph}
          </p>

          {actions && <div className="pt-4 flex flex-wrap gap-4">{actions}</div>}
        </div>

        {metrics && metrics.length > 0 && (
          <div className="pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight block">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#999999] block pt-1">
                  {metric.label}
                </span>
                {metric.subtext && (
                  <span className="text-xs text-slate-400 block font-light">
                    {metric.subtext}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
