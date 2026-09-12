import React from 'react';
import { Button, ButtonProps } from '../atoms/Button';
import { TextLink } from '../atoms/TextLink';
import { Phone } from 'lucide-react';

export interface CTAGroupProps {
  primaryLabel: string;
  onPrimaryClick?: () => void;
  primaryProps?: Partial<ButtonProps>;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  directPhone?: string;
  light?: boolean;
  className?: string;
}

export const CTAGroup: React.FC<CTAGroupProps> = ({
  primaryLabel,
  onPrimaryClick,
  primaryProps,
  secondaryLabel,
  onSecondaryClick,
  directPhone,
  light = false,
  className = '',
}) => {
  return (
    <div className={`flex flex-wrap items-center gap-4 sm:gap-6 ${className}`}>
      <Button
        variant={light ? 'white' : 'primary'}
        size="md"
        onClick={onPrimaryClick}
        {...primaryProps}
      >
        {primaryLabel}
      </Button>

      {secondaryLabel && (
        <TextLink onClick={onSecondaryClick} light={light}>
          {secondaryLabel}
        </TextLink>
      )}

      {directPhone && (
        <a
          href={`tel:${directPhone.replace(/\s+/g, '')}`}
          className={`inline-flex items-center gap-2 text-xs font-mono font-medium transition-colors hover:underline ${
            light ? 'text-slate-300 hover:text-white' : 'text-[#64748B] hover:text-[#173C62]'
          }`}
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>{directPhone}</span>
        </a>
      )}
    </div>
  );
};
