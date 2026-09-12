import React from 'react';
import { NumberedBadge } from '../atoms/NumberedBadge';
import { TextLink } from '../atoms/TextLink';

export interface FeatureRowProps {
  index?: string | number;
  title: string;
  category?: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  borderBottom?: boolean;
  className?: string;
}

/**
 * FeatureRow: Open horizontal editorial row replacing cards.
 */
export const FeatureRow: React.FC<FeatureRowProps> = ({
  index,
  title,
  category,
  description,
  actionLabel,
  onAction,
  borderBottom = true,
  className = '',
}) => {
  return (
    <div
      className={`py-8 sm:py-10 ${
        borderBottom ? 'border-b border-[#E5E7EB]' : ''
      } transition-colors hover:border-[#173C62] group ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
        {/* Index */}
        {index !== undefined && (
          <div className="md:col-span-1">
            <NumberedBadge number={index} variant="brand" size="md" />
          </div>
        )}

        {/* Title */}
        <div className={index !== undefined ? 'md:col-span-5 space-y-1' : 'md:col-span-6 space-y-1'}>
          {category && (
            <span className="block text-[10.5px] font-mono uppercase tracking-wider text-[#64748B]">
              {category}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
            {title}
          </h3>
        </div>

        {/* Description */}
        <div className="md:col-span-4">
          <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Action */}
        <div className="md:col-span-2 flex md:justify-end">
          {actionLabel && (
            <TextLink arrow onClick={onAction}>
              {actionLabel}
            </TextLink>
          )}
        </div>
      </div>
    </div>
  );
};
