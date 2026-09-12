import React from 'react';
import { Container } from '../structures/Container';
import { Tag } from '../atoms/Tag';
import { Arrow } from '../atoms/Arrow';

export interface MegaMenuSubLink {
  label: string;
  href: string;
  code?: string;
}

export interface MegaMenuGroup {
  title: string;
  links: MegaMenuSubLink[];
}

export interface MegaNavigationProps {
  divisionTitle: string;
  description: string;
  groups: MegaMenuGroup[];
  featuredProject?: {
    title: string;
    category: string;
    metric?: string;
    imageSrc: string;
    href: string;
  };
  onClose?: () => void;
  onNavigate?: (href: string) => void;
  className?: string;
}

export const MegaNavigation: React.FC<MegaNavigationProps> = ({
  divisionTitle,
  description,
  groups,
  featuredProject,
  onClose,
  onNavigate,
  className = '',
}) => {
  return (
    <div
      className={`w-full bg-white border-b border-[#E5E7EB] py-10 shadow-none animate-fadeIn ${className}`}
      role="region"
      aria-label={`${divisionTitle} Capability Menu`}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Rail: Division Title & Strategic Narrative */}
          <div className="lg:col-span-3 space-y-3 pr-4 border-r border-[#E5E7EB]/80">
            <span className="font-mono text-[11px] text-[#173C62] uppercase tracking-[0.2em] font-semibold">
              Division Scope
            </span>
            <h3 className="text-2xl font-sans font-semibold text-[#0B1320] tracking-tight">
              {divisionTitle}
            </h3>
            <p className="text-xs text-[#4A5568] leading-relaxed">
              {description}
            </p>
          </div>

          {/* Center: Grouped Capability Columns */}
          <div className={`lg:col-span-${featuredProject ? '6' : '9'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8`}>
            {groups.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0B1320] border-b border-[#E5E7EB] pb-2">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (onNavigate) {
                            e.preventDefault();
                            onNavigate(link.href);
                            onClose?.();
                          }
                        }}
                        className="group flex items-center justify-between text-xs text-[#4A5568] hover:text-[#173C62] transition-colors py-1 cursor-pointer"
                      >
                        <span className="font-sans font-medium group-hover:underline underline-offset-2">
                          {link.label}
                        </span>
                        {link.code && (
                          <Tag variant="neutral" shape="pill" className="text-[9.5px]">
                            {link.code}
                          </Tag>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Rail: Featured Project Proof */}
          {featuredProject && (
            <div className="lg:col-span-3 space-y-3 pl-4 border-l border-[#E5E7EB]/80">
              <span className="font-mono text-[11px] text-[#64748B] uppercase tracking-[0.2em] font-medium block">
                Featured Verification
              </span>
              <div
                onClick={() => {
                  if (onNavigate) onNavigate(featuredProject.href);
                  onClose?.();
                }}
                className="group block cursor-pointer space-y-2.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-slate-100">
                  <img
                    src={featuredProject.imageSrc}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover object-center rounded-[20px] transition-transform duration-[400ms] ease-out group-hover:scale-[1.025]"
                  />
                  {featuredProject.metric && (
                    <div className="absolute bottom-2.5 left-2.5 bg-[#0B1C2F]/90 text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
                      {featuredProject.metric}
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <span className="text-[10.5px] font-mono text-[#173C62] uppercase tracking-wider block">
                    {featuredProject.category}
                  </span>
                  <h5 className="text-xs sm:text-sm font-sans font-semibold text-[#0B1320] group-hover:text-[#173C62] transition-colors flex items-center justify-between">
                    <span>{featuredProject.title}</span>
                    <Arrow direction="right" size="sm" />
                  </h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
