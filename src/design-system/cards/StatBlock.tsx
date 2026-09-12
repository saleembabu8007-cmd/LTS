import React from 'react';

export interface StatBlockProps {
  value: string;
  label: string;
  context?: string;
  className?: string;
}

/**
 * StatBlock
 * Conforms to Rule 10, 11 & 13: Minimal typographic engineering datum block.
 * Uses official verified engineering specifications only (no fabricated marketing stats).
 * Displays: prominent figure + quiet label + optional engineering context.
 */
export const StatBlock: React.FC<StatBlockProps> = ({
  value,
  label,
  context,
  className = '',
}) => {
  return (
    <div className={`text-left ${className}`}>
      <div className="font-mono text-[28px] sm:text-[34px] md:text-[40px] font-medium text-[#173C62] tracking-tight leading-none">
        {value}
      </div>
      <div className="mt-2 text-[13px] font-medium text-[#0B1320] uppercase tracking-[0.08em]">
        {label}
      </div>
      {context && (
        <div className="mt-1 text-[12px] text-[#64748B] leading-relaxed">
          {context}
        </div>
      )}
    </div>
  );
};
