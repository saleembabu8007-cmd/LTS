import React from 'react';
import { NavText } from '../atoms/NavText';

export interface NavigationItemProps {
  label: string;
  href?: string;
  active?: boolean;
  hasDropdown?: boolean;
  isOpen?: boolean;
  light?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  label,
  href,
  active = false,
  hasDropdown = false,
  isOpen = false,
  light = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = '',
}) => {
  return (
    <div
      className={`relative inline-flex items-center group ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <NavText
        href={href}
        active={active || isOpen}
        light={light}
        hasDropdown={hasDropdown}
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
      >
        {label}
      </NavText>

      {/* Active Baseline Datum */}
      {(active || isOpen) && (
        <span
          className={`absolute -bottom-1 left-1.5 right-1.5 h-[2px] rounded-full transition-all ${
            light ? 'bg-white' : 'bg-[#173C62]'
          }`}
          aria-hidden="true"
        />
      )}
    </div>
  );
};
