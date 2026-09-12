import React from 'react';

export interface VisualTextSplitProps {
  visual: React.ReactNode;
  eyebrow?: string;
  title: string;
  description: string | React.ReactNode;
  supportingContent?: React.ReactNode;
  cta?: React.ReactNode;
  reverse?: boolean;
  visualRatio?: '7/5' | '8/4';
  className?: string;
}

/**
 * VisualTextSplit Layout Archetype (F: Large visual + narrow text)
 * Prioritizes architectural visual dominance while preserving high-legibility editorial text.
 */
export const VisualTextSplit: React.FC<VisualTextSplitProps> = ({
  visual,
  eyebrow,
  title,
  description,
  supportingContent,
  cta,
  reverse = false,
  visualRatio = '8/4',
  className = '',
}) => {
  const spans = visualRatio === '8/4' 
    ? { visual: 'lg:col-span-8', text: 'lg:col-span-4' }
    : { visual: 'lg:col-span-7', text: 'lg:col-span-5' };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center text-left ${className}`}>
      <div className={`${spans.visual} ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        {visual}
      </div>

      <div className={`${spans.text} ${reverse ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
        {eyebrow && (
          <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold mb-3">
            {eyebrow}
          </span>
        )}

        <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-medium text-[#0B1320] leading-[1.12] tracking-tight">
          {title}
        </h2>

        <div className="mt-4 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed max-w-[54ch]">
          {description}
        </div>

        {supportingContent && <div className="mt-6">{supportingContent}</div>}
        {cta && <div className="mt-6">{cta}</div>}
      </div>
    </div>
  );
};
