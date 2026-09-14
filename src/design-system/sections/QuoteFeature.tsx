import React from 'react';
import { QuoteBlock } from '../cards/QuoteBlock';

export interface QuoteFeatureProps {
  quote: string;
  author?: string;
  title?: string;
  discipline?: string;
  background?: 'stone' | 'navy' | 'white';
  className?: string;
}

/**
 * QuoteFeature (Composition 12)
 * Standalone editorial governance and trust statement.
 * Uses high-contrast editorial typography and generous architectural vertical rhythm.
 */
export const QuoteFeature: React.FC<QuoteFeatureProps> = ({
  quote,
  author,
  title,
  discipline,
  background = 'navy',
  className = '',
}) => {
  const bgStyles = {
    stone: 'bg-[#F8FAFC] text-[#0B1320]',
    navy: 'bg-[#173C62] text-white',
    white: 'bg-white text-[#0B1320]',
  }[background];

  const isDark = background === 'navy';

  return (
    <section className={`py-20 sm:py-28 md:py-36 ${bgStyles} ${className}`}>
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 md:px-12 text-left">
        <blockquote className={`text-[24px] sm:text-[32px] md:text-[42px] font-light leading-[1.2] tracking-[-0.02em] ${isDark ? 'text-white' : 'text-[#0B1320]'}`}>
          &ldquo;{quote}&rdquo;
        </blockquote>

        {(author || title) && (
          <div className="mt-8 flex items-center gap-4">
            <div className={`w-8 h-[2px] ${isDark ? 'bg-white/40' : 'bg-[#173C62]'}`} aria-hidden="true" />
            <div>
              {author && (
                <div className={`text-[15px] font-medium ${isDark ? 'text-white' : 'text-[#0B1320]'}`}>
                  {author}
                </div>
              )}
              {title && (
                <div className={`text-[13px] ${isDark ? 'text-[#CBD5E1]' : 'text-[#64748B]'}`}>
                  {title}
                </div>
              )}
              {discipline && (
                <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#CBD5E1] mt-0.5">
                  {discipline}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
