import React from 'react';

export interface StatisticBlockProps {
  value: string | number;
  unit?: string;
  label: string;
  description?: string;
  variant?: 'card' | 'inline' | 'dark';
  alignment?: 'left' | 'center';
  className?: string;
}

export const StatisticBlock: React.FC<StatisticBlockProps> = ({
  value,
  unit,
  label,
  description,
  variant = 'card',
  alignment = 'left',
  className = '',
}) => {
  const isDark = variant === 'dark';
  const isCard = variant === 'card';
  const isCenter = alignment === 'center';

  const containerClasses = isCard
    ? isDark
      ? 'p-6 sm:p-7 bg-[#0B1C2F] border border-white/10 rounded-[16px]'
      : 'p-6 sm:p-7 bg-white border border-[#E5E7EB] rounded-[16px]'
    : 'py-2';

  return (
    <div
      className={`flex flex-col space-y-2 ${containerClasses} ${
        isCenter ? 'text-center items-center' : 'text-left items-start'
      } ${className}`}
    >
      {/* Metric Callout with Controlled Hierarchy */}
      <div className="flex items-baseline gap-1.5 leading-none">
        <span
          className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight font-mono ${
            isDark ? 'text-white' : 'text-[#173C62]'
          }`}
        >
          {value}
        </span>
        {unit && (
          <span
            className={`text-base sm:text-lg lg:text-xl font-normal ${
              isDark ? 'text-slate-300' : 'text-[#173C62]'
            }`}
          >
            {unit}
          </span>
        )}
      </div>

      {/* Label */}
      <div
        className={`typography-label pt-1 block leading-tight ${
          isDark ? 'text-slate-400' : 'text-[#0B1320]'
        }`}
      >
        {label}
      </div>

      {/* Operational Context Descriptor */}
      {description && (
        <p
          className={`typography-body-sm text-xs pt-1 max-prose-editorial ${
            isDark ? 'text-slate-400' : 'text-[#64748B]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export interface StatisticGridProps {
  stats: StatisticBlockProps[];
  variant?: 'card' | 'inline' | 'dark';
  columns?: 2 | 3 | 4;
  className?: string;
}

export const StatisticGrid: React.FC<StatisticGridProps> = ({
  stats,
  variant = 'card',
  columns = 4,
  className = '',
}) => {
  const colClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${colClasses} gap-6 ${className}`}>
      {stats.map((stat, idx) => (
        <StatisticBlock key={idx} {...stat} variant={variant} />
      ))}
    </div>
  );
};
