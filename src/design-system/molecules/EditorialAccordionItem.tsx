import React, { useState } from 'react';
import { NumberedBadge } from '../atoms/NumberedBadge';
import { TextLink } from '../atoms/TextLink';
import { Tag } from '../atoms/Tag';

export interface EditorialAccordionItemProps {
  index?: string | number;
  title: string;
  category?: string;
  description: string;
  details?: string[];
  actionLabel?: string;
  onAction?: () => void;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

/**
 * Editorial Accordion Item
 * Designed for horizontal capability exploration without box cards (inspired by Verden reference).
 * Uses subtle hairline dividers, strong typography, expandable drawer, and clean '+' toggle.
 */
export const EditorialAccordionItem: React.FC<EditorialAccordionItemProps> = ({
  index,
  title,
  category,
  description,
  details = [],
  actionLabel,
  onAction,
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
  className = '',
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (isControlled && controlledOnToggle) {
      controlledOnToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div
      className={`border-b border-[#E5E7EB] transition-colors ${
        isOpen ? 'bg-[#F8FAFC]/50' : 'hover:bg-[#F8FAFC]/30'
      } ${className}`}
    >
      <button
        type="button"
        onClick={handleToggle}
        className="w-full py-6 sm:py-8 flex items-center justify-between gap-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
        aria-expanded={isOpen}
      >
        <div className="flex items-baseline gap-4 sm:gap-8 min-w-0">
          {index !== undefined && (
            <NumberedBadge number={index} variant="brand" size="md" />
          )}

          <div className="space-y-1 min-w-0">
            {category && (
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
                {category}
              </span>
            )}
            <h3 className="text-xl sm:text-2xl font-sans font-semibold text-[#0B1320] tracking-tight truncate">
              {title}
            </h3>
          </div>
        </div>

        {/* Minimalist toggle (+ / -) in restrained pill/circle */}
        <div
          className={`w-9 h-9 shrink-0 rounded-full border border-[#CBD5E1] flex items-center justify-center transition-colors ${
            isOpen ? 'bg-[#173C62] border-[#173C62] text-white' : 'text-[#173C62] hover:border-[#173C62]'
          }`}
          aria-hidden="true"
        >
          <span className="text-lg font-light leading-none">
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </button>

      {/* Expanded Content Drawer */}
      {isOpen && (
        <div className="pb-8 sm:pb-10 pl-0 sm:pl-14 pr-4 space-y-6 animate-fadeIn">
          <p className="typography-body text-[#4A5568] max-w-3xl leading-relaxed">
            {description}
          </p>

          {details.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {details.map((detail, idx) => (
                <Tag key={idx} variant="brand" shape="pill">
                  {detail}
                </Tag>
              ))}
            </div>
          )}

          {actionLabel && (
            <div className="pt-2">
              <TextLink onClick={onAction}>
                {actionLabel}
              </TextLink>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
