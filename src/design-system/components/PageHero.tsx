import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export interface PageHeroProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  variant?: 'dark' | 'light' | 'editorial';
  image?: string;
  imageAlt?: string;
  primaryCta?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryCta?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  technicalBadges?: string[];
  metadataDatum?: {
    leftText?: string;
    rightText?: string;
  };
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  variant = 'dark',
  image,
  imageAlt = 'LTSGROUP Engineering',
  primaryCta,
  secondaryCta,
  technicalBadges,
  metadataDatum,
  className = '',
}) => {
  if (variant === 'editorial') {
    return (
      <section className={`pt-20 pb-12 sm:pt-28 sm:pb-16 border-b border-[#E5E7EB] bg-white ${className}`}>
        <div className="lts-container">
          <div className="max-w-4xl space-y-4">
            {eyebrow && (
              <div className="flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[#173C62]" />
                <span className="typography-label text-[#173C62] text-[10.5px] tracking-[0.2em]">
                  {eyebrow}
                </span>
              </div>
            )}

            <h1 className="typography-display text-[#0B1320] leading-[1.1] font-light tracking-tight">
              {title}
            </h1>

            {description && (
              <p className="typography-body-lg text-[#4A5568] max-prose-editorial leading-relaxed font-normal">
                {description}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="pt-4 flex flex-wrap items-center gap-4">
                {primaryCta && (
                  <Button
                    variant="primary"
                    onClick={primaryCta.onClick}
                    href={primaryCta.href}
                    iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    variant="outline"
                    onClick={secondaryCta.onClick}
                    href={secondaryCta.href}
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Dark monumental architectural hero
  return (
    <section
      className={`relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[78vh] flex flex-col justify-between bg-[#173C62] text-white overflow-hidden ${className}`}
    >
      {/* Background Engineering Image with Contrast-Controlled Overlay */}
      {image && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08] will-change-transform"
            loading="eager"
          />
          <div className="absolute inset-0 bg-[#173C62]/50" />
        </div>
      )}

      {/* Top Spacer */}
      <div className="relative z-10 pt-10 sm:pt-14" />

      {/* Main Narrative Block */}
      <div className="lts-container relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          {eyebrow && (
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-white/60" />
              <span className="typography-label text-slate-300 text-[10.5px] tracking-[0.22em]">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="typography-display text-white leading-[1.1] font-light tracking-tight">
            {title}
          </h1>

          {description && (
            <p className="typography-body-lg text-slate-200 max-prose-editorial leading-relaxed font-light text-base sm:text-lg">
              {description}
            </p>
          )}

          {/* Technical Badges */}
          {technicalBadges && technicalBadges.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {technicalBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 text-[10.5px] font-mono font-medium uppercase tracking-wider bg-white/10 text-white rounded-[8px] border border-white/20 backdrop-blur-xs"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Action CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Button
                  variant="darkPrimary"
                  size="lg"
                  onClick={primaryCta.onClick}
                  href={primaryCta.href}
                  iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}
                  className="min-h-[48px]"
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  variant="darkSecondary"
                  size="lg"
                  onClick={secondaryCta.onClick}
                  href={secondaryCta.href}
                  className="min-h-[48px]"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Architectural Datum Footer */}
      {metadataDatum && (
        <div className="relative z-10 border-t border-white/15 py-3.5 bg-[#173C62]/90 backdrop-blur-xs">
          <div className="lts-container flex items-center justify-between gap-4 typography-caption text-slate-300 text-[11px]">
            <div>{metadataDatum.leftText}</div>
            <div>{metadataDatum.rightText}</div>
          </div>
        </div>
      )}
    </section>
  );
};
