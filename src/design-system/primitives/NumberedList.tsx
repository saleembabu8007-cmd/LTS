import React from 'react';
import { Container } from '../structures/Container';
import { NumberedMandateRow, NumberedMandateRowProps } from '../molecules/NumberedMandateRow';
import { SectionHeading } from '../molecules/SectionHeading';

export interface NumberedListProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: Omit<NumberedMandateRowProps, 'className'>[];
  className?: string;
}

/**
 * NumberedList: Structural primitive for editorial ledgers (mandates, workflows, key tenets).
 */
export const NumberedList: React.FC<NumberedListProps> = ({
  eyebrow = 'STRATEGIC MANDATES',
  title,
  description,
  items,
  className = '',
}) => {
  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <Container className="space-y-10">
        {(eyebrow || title) && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title || 'Core Operational Tenets'}
            description={description}
          />
        )}

        <div className="border-t border-[#E5E7EB]">
          {items.map((item, idx) => (
            <NumberedMandateRow
              key={idx}
              number={item.number ?? idx + 1}
              title={item.title}
              description={item.description}
              actionLabel={item.actionLabel}
              onAction={item.onAction}
              borderBottom={idx !== items.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
