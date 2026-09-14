import React from 'react';

interface SplitEditorialProps {
  eyebrow?: string;
  headline: string;
  highlightWord?: string;
  leadParagraph: string;
  secondaryContent?: React.ReactNode;
  actions?: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  reverse?: boolean;
  className?: string;
}

export const SplitEditorial: React.FC<SplitEditorialProps> = ({
  eyebrow,
  headline,
  highlightWord,
  leadParagraph,
  secondaryContent,
  actions,
  imageSrc,
  imageAlt,
  imageCaption,
  reverse = false,
  className = '',
}) => {
  return (
    <section className={`editorial-section bg-white border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
            reverse ? 'lg:grid-flow-dense' : ''
          }`}
        >
          {/* Text Column (5 cols or 7 cols) */}
          <div className={`space-y-8 ${reverse ? 'lg:col-span-6 lg:col-start-7' : 'lg:col-span-6'}`}>
            <div className="space-y-4">
              {eyebrow && (
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#999999] block">
                  {eyebrow}
                </span>
              )}

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] leading-[1.12] tracking-tight">
                {headline}{' '}
                {highlightWord && (
                  <span className="font-semibold text-[#173C62] block mt-1">
                    {highlightWord}
                  </span>
                )}
              </h2>

              <p className="text-base sm:text-lg text-[#4A5568] font-light leading-relaxed pt-2">
                {leadParagraph}
              </p>
            </div>

            {secondaryContent && (
              <div className="pt-2 border-t border-[#E5E7EB]">
                {secondaryContent}
              </div>
            )}

            {actions && <div className="pt-2 flex flex-wrap items-center gap-4">{actions}</div>}
          </div>

          {/* Large Architectural Image Column (6 cols) */}
          <div className={`${reverse ? 'lg:col-span-6 lg:col-start-1' : 'lg:col-span-6'}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[#173C62] border border-[#E5E7EB] shadow-xs">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              {imageCaption && (
                <div className="absolute bottom-0 inset-x-0 bg-[#173C62]/90 p-4 text-white text-xs backdrop-blur-xs flex items-center justify-between border-t border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-[#999999]">
                    {imageCaption}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">LTS &bull; REAL ASSET</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
