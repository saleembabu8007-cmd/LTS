import React from 'react';

export interface QuoteBlockProps {
  quote: string;
  author?: string;
  title?: string;
  discipline?: string;
  className?: string;
}

/**
 * QuoteBlock
 * Conforms to Rule 10, 11 & 13: Editorial governance & trust statement.
 * Editorial typography, unboxed, generous vertical rhythm.
 */
export const QuoteBlock: React.FC<QuoteBlockProps> = ({
  quote,
  author,
  title,
  discipline,
  className = '',
}) => {
  return (
    <figure className={`text-left ${className}`}>
      <blockquote className="text-[20px] sm:text-[24px] md:text-[28px] font-light text-[#0B1320] leading-[1.3] tracking-tight">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {(author || title) && (
        <figcaption className="mt-4 flex items-center gap-3">
          <div className="w-6 h-[1.5px] bg-[#173C62]" aria-hidden="true" />
          <div className="text-[13px]">
            {author && <span className="font-semibold text-[#0B1320]">{author}</span>}
            {title && <span className="text-[#64748B] ml-2 font-normal">— {title}</span>}
            {discipline && (
              <span className="block text-[11px] font-mono uppercase tracking-[0.14em] text-[#173C62] mt-0.5">
                {discipline}
              </span>
            )}
          </div>
        </figcaption>
      )}
    </figure>
  );
};
