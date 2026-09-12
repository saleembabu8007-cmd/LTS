import React from 'react';

export interface FeatureCardProps {
  numeral?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
  className?: string;
}

/**
 * FeatureCard
 * Conforms to Rule 05, 06 & 13: Capability module on soft 16px surface.
 * Minimal architectural surface (`#F8FAFC`), 16px radius, no loud borders or heavy SaaS elevation.
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  numeral,
  icon,
  title,
  description,
  tag,
  className = '',
}) => {
  return (
    <div
      className={`rounded-[16px] bg-[#F8FAFC] p-6 md:p-8 transition-colors duration-200 hover:bg-[#F1F5F9] text-left ${className}`}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        {numeral && (
          <span className="font-mono text-[12px] text-[#64748B] font-medium tracking-wider">
            {numeral}
          </span>
        )}
        {icon && <div className="text-[#173C62]">{icon}</div>}
        {tag && (
          <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-[6px]">
            {tag}
          </span>
        )}
      </div>

      <h3 className="text-[18px] font-medium text-[#0B1320] leading-snug tracking-tight">
        {title}
      </h3>

      <p className="mt-2 text-[14px] text-[#4A5568] leading-relaxed">
        {description}
      </p>
    </div>
  );
};
