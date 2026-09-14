import React from 'react';

interface LargeImageSmallTextProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  headline: string;
  description: string;
  metadata?: { label: string; value: string }[];
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const LargeImageSmallText: React.FC<LargeImageSmallTextProps> = ({
  imageSrc,
  imageAlt,
  eyebrow,
  headline,
  description,
  metadata,
  actionLabel,
  onAction,
  className = '',
}) => {
  return (
    <section className={`editorial-section bg-[#FAFAFA] border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Dominant Monumental Image */}
        <div className="relative aspect-[16/9] lg:aspect-[21/10] overflow-hidden bg-[#173C62] border border-[#E5E7EB]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Razor-Sharp Concise Text Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          <div className="lg:col-span-8 space-y-3">
            {eyebrow && (
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999999] block">
                {eyebrow}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] leading-snug">
              {headline}
            </h3>
            <p className="text-sm sm:text-base text-[#4A5568] max-w-3xl leading-relaxed font-normal">
              {description}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:items-end">
            {metadata && (
              <div className="flex flex-wrap gap-4 text-xs lg:text-right">
                {metadata.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#999999] block">
                      {item.label}
                    </span>
                    <span className="font-medium text-[#0B1320] block">{item.value}</span>
                  </div>
                ))}
              </div>
            )}

            {actionLabel && onAction && (
              <button
                onClick={onAction}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#173C62] text-white hover:bg-[#12304F] rounded-[10px] transition-colors"
              >
                {actionLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
