import React from 'react';
import { Container } from '../structures/Container';

export interface MediaRailItem {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  caption?: string;
}

export interface MediaRailProps {
  eyebrow?: string;
  title?: string;
  items: MediaRailItem[];
  className?: string;
}

/**
 * MediaRail: Horizontal sequential photographic rail with 28px rounded media frames.
 */
export const MediaRail: React.FC<MediaRailProps> = ({
  eyebrow,
  title,
  items,
  className = '',
}) => {
  return (
    <section className={`py-12 sm:py-16 overflow-hidden ${className}`}>
      <Container className="space-y-8">
        {(eyebrow || title) && (
          <div className="space-y-2 max-w-2xl">
            {eyebrow && (
              <span className="font-mono text-xs text-[#173C62] uppercase tracking-[0.2em] font-semibold block">
                {eyebrow}
              </span>
            )}
            {title && (
              <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#0B1320] tracking-tight">
                {title}
              </h3>
            )}
          </div>
        )}

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[360px] lg:w-[420px] shrink-0 snap-start space-y-3"
            >
              <div className="aspect-[16/11] rounded-[28px] overflow-hidden bg-slate-100">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover object-center rounded-[28px] transition-transform duration-[400ms] ease-out hover:scale-[1.025]"
                />
              </div>

              {(item.title || item.caption) && (
                <div className="space-y-1 px-1">
                  {item.title && (
                    <h4 className="text-sm font-sans font-semibold text-[#0B1320]">
                      {item.title}
                    </h4>
                  )}
                  {item.caption && (
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
