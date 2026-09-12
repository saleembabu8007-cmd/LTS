import React from 'react';

export interface BreadcrumbItemProps {
  label: string;
  href?: string;
  isCurrent?: boolean;
  onClick?: () => void;
  showSeparator?: boolean;
  className?: string;
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  label,
  href,
  isCurrent = false,
  onClick,
  showSeparator = true,
  className = '',
}) => {
  return (
    <li className={`inline-flex items-center gap-2 text-xs font-mono select-none ${className}`}>
      {isCurrent ? (
        <span
          className="text-[#173C62] font-semibold uppercase tracking-wider"
          aria-current="page"
        >
          {label}
        </span>
      ) : (
        <a
          href={href || '#'}
          onClick={(e) => {
            if (onClick) {
              e.preventDefault();
              onClick();
            }
          }}
          className="text-[#64748B] hover:text-[#173C62] uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#173C62]"
        >
          {label}
        </a>
      )}

      {showSeparator && (
        <span className="text-[#CBD5E1] text-[10px]" aria-hidden="true">
          /
        </span>
      )}
    </li>
  );
};
