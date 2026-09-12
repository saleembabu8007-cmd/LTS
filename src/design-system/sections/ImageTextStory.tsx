import React from 'react';
import { Button } from '../atoms/Button';

export interface StoryPoint {
  title: string;
  detail: string;
}

export interface ImageTextStoryProps {
  eyebrow?: string;
  title: string;
  lead: string;
  imageUrl: string;
  imageAlt?: string;
  points?: StoryPoint[];
  cta?: {
    label: string;
    href: string;
  };
  reverse?: boolean;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * ImageTextStory (Composition 5)
 * Narrative engineering story pairing high-detail technical photography with verified execution discipline.
 * 18px image radius, clean unboxed points, zero generic cards.
 */
export const ImageTextStory: React.FC<ImageTextStoryProps> = ({
  eyebrow,
  title,
  lead,
  imageUrl,
  imageAlt = '',
  points = [],
  cta,
  reverse = false,
  onNavigate,
  className = '',
}) => {
  const handleCta = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && href) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <section className={`py-16 sm:py-24 md:py-32 bg-white text-left ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Dominant Image (7 cols) */}
          <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#0B1C2F]">
              <img
                src={imageUrl}
                alt={imageAlt || title}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Narrative Prose and Verified Points (5 cols) */}
          <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
            {eyebrow && (
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold mb-3">
                {eyebrow}
              </span>
            )}

            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] font-medium text-[#0B1320] leading-[1.14] tracking-tight">
              {title}
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed">
              {lead}
            </p>

            {points.length > 0 && (
              <div className="mt-8 space-y-4 pt-6 border-t border-[#E5E7EB]">
                {points.map((pt, i) => (
                  <div key={i} className="flex items-baseline gap-3">
                    <span className="font-mono text-[12px] text-[#173C62] font-semibold shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-[15px] font-medium text-[#0B1320]">
                        {pt.title}
                      </h4>
                      <p className="text-[13px] text-[#64748B] mt-0.5 leading-normal">
                        {pt.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cta && (
              <div className="mt-8">
                <Button
                  variant="primary"
                  size="md"
                  shape="rounded"
                  iconTrailing="→"
                  onClick={handleCta(cta.href)}
                >
                  {cta.label}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
