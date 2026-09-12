import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { TextLink } from './Button';

export interface ServiceCardProps {
  id?: string;
  indexNumber?: string;
  division?: string;
  title: string;
  description: string;
  capabilities?: string[];
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  onSelect?: () => void;
  variant?: 'standard' | 'detailed' | 'minimal';
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  indexNumber,
  division,
  title,
  description,
  capabilities,
  imageSrc,
  imageAlt,
  href,
  onSelect,
  variant = 'standard',
  className = '',
}) => {
  return (
    <article
      className={`group flex flex-col justify-between bg-white border border-[#E5E7EB] rounded-[2px] overflow-hidden transition-all duration-300 hover:border-[#173C62] hover:shadow-xs ${className}`}
    >
      <div>
        {/* Optional Authentic Engineering Thumbnail */}
        {imageSrc && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-[#E5E7EB]">
            <img
              src={imageSrc}
              alt={imageAlt || title}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
            {division && (
              <div className="absolute top-3 left-3 bg-[#0B1C2F]/90 backdrop-blur-xs px-2.5 py-1 text-[9.5px] uppercase font-mono tracking-[0.14em] text-white rounded-[1px]">
                {division}
              </div>
            )}
            {indexNumber && (
              <div className="absolute bottom-3 right-3 bg-[#173C62]/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-mono font-medium text-white rounded-[1px]">
                {indexNumber}
              </div>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 sm:p-7 space-y-4">
          {/* Header Row without Image */}
          {!imageSrc && (division || indexNumber) && (
            <div className="flex items-center justify-between gap-4 border-b border-[#E5E7EB] pb-3">
              {division && (
                <span className="typography-label text-[#173C62] text-[10px] tracking-[0.18em]">
                  {division}
                </span>
              )}
              {indexNumber && (
                <span className="text-xs font-mono text-[#94A3B8] font-medium">
                  {indexNumber}
                </span>
              )}
            </div>
          )}

          {/* Service Title */}
          <h3 className="typography-h3 text-[#0B1320] group-hover:text-[#173C62] transition-colors leading-snug">
            {title}
          </h3>

          {/* Scope Description */}
          <p className="typography-body-sm text-[#4A5568] line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Technical Deliverables / Capabilities List */}
          {capabilities && capabilities.length > 0 && (
            <div className="pt-2 space-y-2 border-t border-[#E5E7EB]/70">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#64748B] block">
                Technical Scope:
              </span>
              <ul className="space-y-1.5">
                {capabilities.slice(0, 4).map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                    <Check className="w-3.5 h-3.5 text-[#173C62] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Card Action Link */}
      <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-[#E5E7EB]/50">
        <TextLink href={href} onClick={onSelect} arrow>
          Inspect Service Scope
        </TextLink>
      </div>
    </article>
  );
};
