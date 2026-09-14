import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { TextLink } from './Button';

export interface IndustryCardProps {
  id?: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  scopeHighlights?: string[];
  projectCount?: number;
  complianceTags?: string[];
  href?: string;
  onSelect?: () => void;
  className?: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  scopeHighlights,
  projectCount,
  complianceTags,
  href,
  onSelect,
  className = '',
}) => {
  return (
    <article
      className={`group flex flex-col justify-between bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden transition-all duration-300 hover:border-[#173C62] hover:shadow-xs ${className}`}
    >
      <div>
        {/* Sector Engineering Frame (16:10) */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />

          {projectCount !== undefined && (
            <div className="absolute top-3 left-3 bg-[#173C62]/90 backdrop-blur-xs px-2.5 py-1 text-[9.5px] uppercase font-mono tracking-[0.14em] text-white rounded-[1px] border border-white/10">
              {projectCount} Projects Delivered
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-7 space-y-3.5">
          {/* Industry Title */}
          <h3 className="typography-h4 text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
            {title}
          </h3>

          {/* Sector Narrative */}
          <p className="typography-body-sm text-[#4A5568] line-clamp-2 leading-relaxed">
            {description}
          </p>

          {/* Key Engineering Scope Highlights */}
          {scopeHighlights && scopeHighlights.length > 0 && (
            <div className="pt-2 space-y-1.5 border-t border-[#E5E7EB]/70">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#64748B] block">
                Engineering Mandate:
              </span>
              <ul className="space-y-1">
                {scopeHighlights.slice(0, 3).map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                    <Check className="w-3.5 h-3.5 text-[#173C62] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Compliance & Standards Tags */}
          {complianceTags && complianceTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {complianceTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 text-[9.5px] font-mono uppercase tracking-wider text-[#173C62] bg-[#EDF3F9] rounded-[1px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Link */}
      <div className="px-6 sm:p-7 pb-6 sm:pb-7 pt-2 border-t border-[#E5E7EB]/50">
        <TextLink href={href} onClick={onSelect} arrow>
          Inspect Sector Capabilities
        </TextLink>
      </div>
    </article>
  );
};
