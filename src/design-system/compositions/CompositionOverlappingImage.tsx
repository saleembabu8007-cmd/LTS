import React from 'react';

export interface CompositionOverlappingImageProps {
  eyebrow?: string;
  title: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  insetPlateImage: string;
  insetPlateAlt: string;
  insetCaption?: string;
  parameterTag?: string;
  className?: string;
}

/**
 * Composition 13 — Overlapping Image Composition
 * Architectural layered visual where an inset technical plate softly overlaps
 * a broader architectural field. Creates editorial depth without SaaS card clutter.
 */
export const CompositionOverlappingImage: React.FC<CompositionOverlappingImageProps> = ({
  eyebrow,
  title,
  description,
  mainImage,
  mainImageAlt,
  insetPlateImage,
  insetPlateAlt,
  insetCaption,
  parameterTag,
  className = '',
}) => {
  return (
    <section className={`py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Layered Architectural Media (7 cols) */}
          <div className="lg:col-span-7 relative">
            {/* Primary Main Visual (20px radius) */}
            <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden bg-[#173C62] shadow-[0_20px_50px_-20px_rgba(23,60,98,0.25)]">
              <img
                src={mainImage}
                alt={mainImageAlt}
                className="w-full h-full object-cover filter brightness-[0.93] transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Inset Overlapping Technical Plate (~40% width, overlapping bottom-right) */}
            <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-8 w-1/2 max-w-[320px] aspect-[4/3] rounded-[16px] overflow-hidden bg-white p-2 sm:p-2.5 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.22)] border border-[#E5E7EB] hidden sm:block">
              <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-[#173C62]">
                <img
                  src={insetPlateImage}
                  alt={insetPlateAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {insetCaption && (
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded bg-[#173C62]/90 backdrop-blur-xs text-[10px] font-mono text-white/95 uppercase tracking-wider truncate">
                    {insetCaption}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Editorial Content (5 cols) */}
          <div className="lg:col-span-5 space-y-5 text-left">
            {eyebrow && (
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                {eyebrow}
              </span>
            )}

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.08]">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
              {description}
            </p>

            {parameterTag && (
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] bg-white border border-[#CBD5E1] text-[11px] font-mono text-[#173C62] uppercase tracking-wider font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#173C62]" />
                  {parameterTag}
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
