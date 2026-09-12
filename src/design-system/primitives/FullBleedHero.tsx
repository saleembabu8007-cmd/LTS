import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../atoms/Button';

export interface FullBleedHeroProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  image: string;
  imageAlt?: string;
  imageFocalPoint?: 'center' | 'top' | 'bottom';
  scrimVariant?: 'cinematic' | 'lateral' | 'dual';
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
  datumStrip?: {
    leftText?: string;
    rightText?: string;
  };
  minHeight?: string;
  className?: string;
}

/**
 * FullBleedHero: Constitutional Master Hero Component (Rule 04)
 * - Full-bleed authentic engineering imagery background
 * - Multi-stop contrast gradient scrim ensuring WCAG AAA text legibility
 * - Art-directed editorial hierarchy: Eyebrow -> Display XXL Title -> Positioning Copy -> Action Pair -> Datum Strip
 * - Soft-radius compliance (8–20px scale on badges, zero 2px sharp corners)
 * - Respects prefers-reduced-motion
 */
export const FullBleedHero: React.FC<FullBleedHeroProps> = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt = 'LTSGROUP Infrastructure',
  imageFocalPoint = 'center',
  scrimVariant = 'cinematic',
  primaryCta,
  secondaryCta,
  technicalBadges,
  datumStrip,
  minHeight = 'min-h-[72vh] lg:min-h-[80vh]',
  className = '',
}) => {
  const focalClasses = {
    center: 'object-center',
    top: 'object-top',
    bottom: 'object-bottom',
  };

  return (
    <section
      className={`relative ${minHeight} flex flex-col justify-between bg-[#0B1C2F] text-white overflow-hidden ${className}`}
    >
      {/* 1. Full-Bleed Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className={`w-full h-full object-cover ${focalClasses[imageFocalPoint]} filter brightness-[0.72] contrast-[1.08] transition-transform duration-700 motion-safe:hover:scale-[1.02]`}
          loading="eager"
        />

        {/* Contrast Scrims */}
        {scrimVariant === 'cinematic' && (
          <div className="absolute inset-0 full-bleed-scrim-cinematic" />
        )}
        {scrimVariant === 'lateral' && (
          <div className="absolute inset-0 full-bleed-scrim-lateral" />
        )}
        {scrimVariant === 'dual' && (
          <>
            <div className="absolute inset-0 full-bleed-scrim-lateral" />
            <div className="absolute inset-0 full-bleed-scrim-cinematic opacity-80" />
          </>
        )}
      </div>

      {/* 2. Top Breathing Space for Navigation */}
      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28" />

      {/* 3. Main Narrative Core (Commanding Editorial Typography) */}
      <div className="lts-container relative z-10 py-12 sm:py-16 lg:py-20 my-auto">
        <div className="max-w-3xl lg:max-w-4xl space-y-6 sm:space-y-7">
          {eyebrow && (
            <div className="flex items-center gap-3">
              <span className="w-6 sm:w-8 h-[1px] bg-white/70" />
              <span className="font-mono text-[10.5px] sm:text-[11px] font-semibold tracking-[0.24em] text-slate-200 uppercase">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="typography-display-xxl text-white tracking-tight drop-shadow-xs">
            {title}
          </h1>

          {description && (
            <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 leading-relaxed font-normal max-w-2xl">
              {description}
            </p>
          )}

          {/* Technical Clearance & Standard Badges */}
          {technicalBadges && technicalBadges.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {technicalBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 text-[11px] font-mono font-medium tracking-wider text-white bg-white/10 backdrop-blur-md rounded-[10px] border border-white/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Action Pair: Primary Capsule Action + Secondary Editorial Link */}
          {(primaryCta || secondaryCta) && (
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-5 sm:gap-7">
              {primaryCta && (
                <Button
                  variant="primary"
                  size="lg"
                  shape="capsule"
                  onClick={primaryCta.onClick}
                  className="bg-white text-[#173C62] hover:bg-[#F8FAFC] border-white text-xs px-6 py-3"
                  iconTrailing={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  {primaryCta.label}
                </Button>
              )}

              {secondaryCta && (
                <button
                  type="button"
                  onClick={secondaryCta.onClick}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-white/90 hover:text-white uppercase transition-colors group cursor-pointer"
                >
                  <span>{secondaryCta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 4. Bottom Architectural Statutory Datum Strip */}
      {datumStrip && (
        <div className="relative z-10 border-t border-white/15 py-3.5 sm:py-4 bg-[#0B1C2F]/80 backdrop-blur-sm">
          <div className="lts-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 font-mono text-[10.5px] sm:text-[11px] text-slate-300">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>{datumStrip.leftText}</span>
            </div>
            {datumStrip.rightText && (
              <div className="text-slate-400">
                {datumStrip.rightText}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
