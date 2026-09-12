import React from 'react';
import { Container } from '../structures/Container';
import { SectionHeading } from '../molecules/SectionHeading';
import { EditorialAccordionItem, EditorialAccordionItemProps } from '../molecules/EditorialAccordionItem';

export interface ServiceIndexProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  services: EditorialAccordionItemProps[];
  className?: string;
}

export const ServiceIndex: React.FC<ServiceIndexProps> = ({
  eyebrow = 'CORE CAPABILITIES',
  title,
  description,
  action,
  services,
  className = '',
}) => {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <Container className="space-y-10">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          action={action}
        />

        <div className="border-t border-[#E5E7EB]">
          {services.map((service, idx) => (
            <EditorialAccordionItem
              key={idx}
              index={service.index ?? idx + 1}
              title={service.title}
              category={service.category}
              description={service.description}
              details={service.details}
              actionLabel={service.actionLabel}
              onAction={service.onAction}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
