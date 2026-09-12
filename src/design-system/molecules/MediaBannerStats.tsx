import React from 'react';
import { AspectRatio, ImageRadius } from '../atoms/Image';
import { Arrow } from '../atoms/Arrow';

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface MediaBannerStatsProps {
  imageSrc: string;
  imageAlt: string;
  stats: StatItem[];
  aspectRatio?: AspectRatio;
  radius?: ImageRadius;
  title?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

/**
 * Editorial Feature Media Banner with Integrated Metric Bar
 * Directly inspired by premium engineering editorial layouts (e.g. UzOman hero feature).
 * Features soft 28-36px radius, authentic photography, and an embedded stats strip.
 */
export const MediaBannerStats: React.FC<MediaBannerStatsProps> = ({
  imageSrc,
  imageAlt,
  stats,
  aspectRatio = '21/9',
  radius = 'feature',
  title,
  actionLabel,
  onAction,
  className = '',
}) => {
  const aspectClasses: Record<AspectRatio, string> = {
    '16/9': 'aspect-[16/9]',
    '16/10': 'aspect-[16/10]',
    '4/3': 'aspect-[4/3]',
    '3/2': 'aspect-[3/2]',
    '1/1': 'aspect-square',
    '21/9': 'aspect-[16/9] md:aspect-[21/9]',
    'auto': 'aspect-auto',
  };

  const radiusClasses: Record<ImageRadius, string> = {
    none: 'rounded-none',
    surface: 'rounded-[24px]',
    image: 'rounded-[28px]',
    imageLarge: 'rounded-[32px]',
    feature: 'rounded-[32px] lg:rounded-[36px]',
    pill: 'rounded-full',
  };

  const currentRadius = radiusClasses[radius];

  return (
    <div
      className={`relative w-full overflow-hidden ${currentRadius} ${aspectClasses[aspectRatio]} ${className}`}
    >
      {/* Editorial Photography */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`w-full h-full object-cover object-center ${currentRadius} transition-transform duration-700 hover:scale-[1.02]`}
      />

      {/* Controlled Readability Gradient (Photography treatment only) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/90 via-[#0B1320]/30 to-transparent pointer-events-none" />

      {/* Bottom Integrated Metric Bar & Optional Action */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Statistics Strip */}
        <div className="flex flex-wrap items-end gap-8 sm:gap-12 lg:gap-16">
          {title && (
            <div className="max-w-md hidden lg:block">
              <span className="text-white/70 text-xs font-mono uppercase tracking-wider block mb-1">
                Capability Scope
              </span>
              <h4 className="text-white text-lg font-semibold tracking-tight leading-snug">
                {title}
              </h4>
            </div>
          )}

          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="flex items-baseline gap-1 text-white font-sans font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                <span>{stat.value}</span>
                {stat.suffix && (
                  <span className="text-white/70 text-lg sm:text-xl font-normal">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <span className="text-white/75 text-[11px] sm:text-xs font-sans tracking-wide uppercase font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Directional Action (Restrained text link with subtle hover movement) */}
        {actionLabel && (
          <button
            type="button"
            onClick={onAction}
            className="inline-flex items-center gap-2.5 text-white hover:text-white/90 font-sans text-xs sm:text-[13px] font-semibold tracking-wider uppercase group cursor-pointer"
          >
            <span>{actionLabel}</span>
            <div className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <Arrow direction="right" size="sm" className="text-white" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
