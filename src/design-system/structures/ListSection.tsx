import React from 'react';
import { SectionHeading } from '../molecules/SectionHeading';
import { ServiceItem, ServiceItemProps } from '../molecules/ServiceItem';

export interface ListSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ServiceItemProps[];
  action?: React.ReactNode;
  className?: string;
}

export const ListSection: React.FC<ListSectionProps> = ({
  eyebrow,
  title,
  description,
  items,
  action,
  className = '',
}) => {
  return (
    <div className={`space-y-8 sm:space-y-12 ${className}`}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        action={action}
      />

      <div className="border-t border-[#E5E7EB]">
        {items.map((item, idx) => (
          <ServiceItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};
