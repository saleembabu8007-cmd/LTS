import React from 'react';
import { Button } from '../atoms/Button';

export interface HeroDatum {
  label: string;
  value: string;
}

export interface HeroImageSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  data?: HeroDatum[];
  alignment?: 'left' | 'bottom-left' | 'bottom-split';
  height?: 'standard' | 'tall' | 'screen';
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * HeroImageSection (Composition 1)
 * Conforms strictly to Rule 04: Major page hero with full-bleed photographic background.
 * Never a generic two-column left-text/right-image box. Text positioned intentionally with scrims.
 */
export const HeroImageSection: React.FC<HeroImageSectionProps> = ({
  eyebrow,
  title,
  subtitle,
  imageUrl,
  imageAlt = 'LTSGROUP Engineering & Construction',
  primaryCta,
  secondaryCta,
  data = [],
  alignment = 'bottom-split',
  height = 'standard',
  onNavigate,
  className = '',
}) => {
  const heightStyles = {
    standard: 'min-h-[580px] sm:min-h-[640px] md:min-h-[720px]',
    tall: 'min-h-[680px] sm:min-h-[780px] md:min-h-[840px]',
    screen: 'min-h-[85vh] sm:min-h-[90vh]',
  }[height];

  const handleLink = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <header className={`relative w-full overflow-hidden bg-[#0B1C2F] text-white flex items-end ${heightStyles} ${className}`}>
      {/* Background Photography */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out"
        loading="eager"
      />

      {/* Cinematic Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2F] via-[#0B1C2F]/65 to-[#0B1C2F]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2F]/80 via-[#0B1C2F]/40 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 pt-36">
        {alignment === 'bottom-split' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8 text-left">
              {eyebrow && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-white/10 backdrop-blur-sm text-[11px] font-mono uppercase tracking-[0.18em] text-[#CBD5E1] mb-4">
                  <span>{eyebrow}</span>
                </div>
              )}
              <h1 className="text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-light text-white tracking-[-0.03em] leading-[1.05]">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-5 text-[16px] sm:text-[18px] text-[#CBD5E1] font-normal leading-relaxed max-w-[56ch]">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-end gap-4">
              {primaryCta && (
                <Button
                  variant="white"
                  size="md"
                  shape="rounded"
                  light
                  iconTrailing="→"
                  onClick={handleLink(primaryCta.href)}
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="secondary"
                  size="md"
                  shape="rounded"
                  light
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white"
                  onClick={handleLink(secondaryCta.href)}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-3xl text-left">
            {eyebrow && (
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#CBD5E1] block mb-3">
                {eyebrow}
              </span>
            )}
            <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-light text-white tracking-[-0.03em] leading-[1.06]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-[16px] sm:text-[18px] text-[#CBD5E1] leading-relaxed max-w-[58ch]">
                {subtitle}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {primaryCta && (
                  <Button
                    variant="white"
                    size="md"
                    shape="rounded"
                    light
                    iconTrailing="→"
                    onClick={handleLink(primaryCta.href)}
                  >
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    variant="secondary"
                    size="md"
                    shape="rounded"
                    light
                    className="border-white/40 text-white hover:bg-white/10 hover:border-white"
                    onClick={handleLink(secondaryCta.href)}
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Optional Verified Datum Strip at Base */}
        {data.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {data.map((item, idx) => (
              <div key={idx}>
                <div className="font-mono text-[20px] sm:text-[24px] font-medium text-white tracking-tight">
                  {item.value}
                </div>
                <div className="mt-1 text-[11px] font-mono text-[#CBD5E1] uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
