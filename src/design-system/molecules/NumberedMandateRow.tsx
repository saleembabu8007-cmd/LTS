import React from 'react';
import { Arrow } from '../atoms/Arrow';

export interface NumberedMandateRowProps {
  number: string | number;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  borderBottom?: boolean;
  className?: string;
}

/**
 * Numbered Mandate Row
 * Directly inspired by Reference 2 (UzOman 01-06 mandate structure).
 * Replaces repetitive 3-column boxed cards with an elegant typographic editorial layout.
 */
export const NumberedMandateRow: React.FC<NumberedMandateRowProps> = ({
  number,
  title,
  description,
  actionLabel,
  onAction,
  borderBottom = true,
  className = '',
}) => {
  const formattedNumber =
    typeof number === 'number' && number < 10 ? `0${number}` : `${number}`;

  return (
    <div
      className={`py-8 sm:py-10 ${borderBottom ? 'border-b border-[#E5E7EB]' : ''} transition-colors group ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Large Light Typographic Numeral */}
        <div className="md:col-span-2">
          <span className="font-mono text-3xl sm:text-4xl font-light text-[#94A3B8] tracking-tight group-hover:text-[#173C62] transition-colors">
            {formattedNumber}
          </span>
        </div>

        {/* Title */}
        <div className="md:col-span-4">
          <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#0B1320] tracking-tight group-hover:text-[#173C62] transition-colors leading-snug">
            {title}
          </h3>
        </div>

        {/* Description & Action */}
        <div className="md:col-span-6 space-y-4">
          <p className="text-sm sm:text-[15px] text-[#4A5568] leading-relaxed">
            {description}
          </p>

          {actionLabel && (
            <div>
              <button
                type="button"
                onClick={onAction}
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#173C62] hover:text-[#102B47] cursor-pointer group/link"
              >
                <span>{actionLabel}</span>
                <span className="transition-transform group-hover/link:translate-x-1">
                  <Arrow direction="right" size="sm" />
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
