import React from 'react';
import { BreadcrumbItem } from '../../types/navigation';

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate?: (slug: string) => void;
  variant?: 'inline' | 'overlay';
  className?: string;
}

/**
 * LTSGROUP Canonical Breadcrumb System
 * Single authoritative implementation across the platform.
 * Conforms strictly to LTSGROUP Permanent Design Rules:
 * - Small, quiet, non-invasive
 * - Semantic HTML (<nav>, <ol>, <li>, <a>)
 * - Accessible with visible keyboard focus states and aria-current="page"
 * - Supports inline and overlay (on image hero) modes
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  onNavigate,
  variant = 'inline',
  className = '',
}) => {
  if (!items || items.length === 0) return null;

  const isOverlay = variant === 'overlay';

  const linkColor = isOverlay
    ? 'text-white/70 hover:text-white focus-visible:ring-[#93C5FD]'
    : 'text-slate-500 hover:text-[#0B1320] focus-visible:ring-[#173C62]';

  const activeColor = isOverlay ? 'text-white font-medium' : 'text-[#0B1320] font-medium';
  const dividerColor = isOverlay ? 'text-white/40' : 'text-slate-300';

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    onNavigate?.(slug);
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`select-none ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2 text-xs">
        {/* Root Home */}
        <li className="flex items-center">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className={`transition-colors py-0.5 focus-visible:ring-2 focus-visible:outline-none rounded-[2px] ${linkColor}`}
          >
            Home
          </a>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.slug}-${index}`} className="flex items-center gap-2">
              <span className={`text-[11px] select-none ${dividerColor}`} aria-hidden="true">
                /
              </span>
              {isLast ? (
                <span
                  className={`truncate max-w-[240px] sm:max-w-md ${activeColor}`}
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.slug}
                  onClick={(e) => handleLinkClick(e, item.slug)}
                  className={`transition-colors py-0.5 truncate max-w-[200px] sm:max-w-xs focus-visible:ring-2 focus-visible:outline-none rounded-[2px] ${linkColor}`}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
