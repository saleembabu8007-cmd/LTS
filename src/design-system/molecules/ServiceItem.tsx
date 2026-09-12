import React from 'react';
import { TextLink } from '../atoms/TextLink';
import { Tag } from '../atoms/Tag';

export interface ServiceItemProps {
  index?: string;
  title: string;
  description: string;
  capabilities?: string[];
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({
  index,
  title,
  description,
  capabilities = [],
  actionLabel = 'Explore Scope',
  onAction,
  className = '',
}) => {
  return (
    <div
      className={`group py-8 sm:py-10 border-b border-[#E5E7EB] transition-colors hover:border-[#173C62] ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        {/* Index */}
        {index && (
          <div className="lg:col-span-1">
            <span className="font-mono text-xs text-[#173C62] font-semibold tracking-wider">
              {index}
            </span>
          </div>
        )}

        {/* Title & Description */}
        <div className={index ? 'lg:col-span-5 space-y-2' : 'lg:col-span-6 space-y-2'}>
          <h3 className="typography-h3 text-[#0B1320] group-hover:text-[#173C62] transition-colors">
            {title}
          </h3>
          <p className="typography-body-sm text-[#4A5568] leading-relaxed max-prose-editorial">
            {description}
          </p>
        </div>

        {/* Capabilities Tags */}
        <div className="lg:col-span-4 flex flex-wrap gap-2 pt-1">
          {capabilities.map((cap, i) => (
            <Tag key={i} variant="neutral" shape="square">
              {cap}
            </Tag>
          ))}
        </div>

        {/* Action Link */}
        <div className="lg:col-span-2 flex lg:justify-end pt-1">
          <TextLink onClick={onAction}>
            {actionLabel}
          </TextLink>
        </div>
      </div>
    </div>
  );
};
