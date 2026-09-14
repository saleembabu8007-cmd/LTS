import React from 'react';
import { Quote } from 'lucide-react';

export interface QuoteTestimonialProps {
  quote: string;
  author: string;
  designation: string;
  organization: string;
  projectContext?: string;
  accreditationBadge?: string;
  variant?: 'split' | 'card' | 'dark';
  className?: string;
}

export const QuoteTestimonial: React.FC<QuoteTestimonialProps> = ({
  quote,
  author,
  designation,
  organization,
  projectContext,
  accreditationBadge,
  variant = 'split',
  className = '',
}) => {
  const isDark = variant === 'dark';
  const isCard = variant === 'card';

  if (variant === 'split') {
    return (
      <div
        className={`py-12 lg:py-16 border-y ${
          isDark
            ? 'bg-[#173C62] text-white border-white/15'
            : 'bg-[#FAFAFA] text-[#0B1320] border-[#E5E7EB]'
        } ${className}`}
      >
        <div className="lts-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Quote Body (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <Quote
                className={`w-8 h-8 opacity-40 ${
                  isDark ? 'text-slate-400' : 'text-[#173C62]'
                }`}
                aria-hidden="true"
              />
              <blockquote className="typography-h3 font-light leading-relaxed max-prose-editorial">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </div>

            {/* Attribution Details (4 cols) */}
            <div
              className={`lg:col-span-4 space-y-3 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l ${
                isDark ? 'border-white/10' : 'border-[#E5E7EB]'
              } lg:pl-10`}
            >
              <div>
                <div className="font-semibold text-sm sm:text-base leading-snug">
                  {author}
                </div>
                <div
                  className={`text-xs mt-0.5 ${
                    isDark ? 'text-slate-400' : 'text-[#64748B]'
                  }`}
                >
                  {designation}
                </div>
                <div className="text-xs font-mono text-[#173C62] mt-0.5">
                  {organization}
                </div>
              </div>

              {projectContext && (
                <div
                  className={`text-[11px] pt-2 border-t ${
                    isDark ? 'border-white/10 text-slate-400' : 'border-[#E5E7EB] text-[#64748B]'
                  }`}
                >
                  <span className="font-mono uppercase text-[9.5px] block text-[#94A3B8]">
                    Engagement:
                  </span>
                  <span>{projectContext}</span>
                </div>
              )}

              {accreditationBadge && (
                <span
                  className={`inline-block px-2.5 py-1 text-[9.5px] font-mono uppercase tracking-wider rounded-[1px] border ${
                    isDark
                      ? 'border-white/10 bg-white/5 text-slate-300'
                      : 'border-[#E5E7EB] bg-white text-[#173C62]'
                  }`}
                >
                  {accreditationBadge}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Card Variant
  return (
    <div
      className={`p-6 sm:p-8 rounded-[16px] border ${
        isDark
          ? 'bg-[#173C62] text-white border-white/15'
          : 'bg-white text-[#0B1320] border-[#E5E7EB]'
      } space-y-5 ${className}`}
    >
      <Quote
        className={`w-6 h-6 opacity-40 ${
          isDark ? 'text-slate-400' : 'text-[#173C62]'
        }`}
        aria-hidden="true"
      />

      <blockquote className="typography-body-lg font-light leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div
        className={`pt-4 border-t ${
          isDark ? 'border-white/10' : 'border-[#E5E7EB]'
        } flex items-center justify-between gap-4`}
      >
        <div>
          <div className="font-semibold text-xs sm:text-sm">{author}</div>
          <div
            className={`text-xs ${
              isDark ? 'text-slate-400' : 'text-[#64748B]'
            }`}
          >
            {designation}, {organization}
          </div>
        </div>

        {accreditationBadge && (
          <span
            className={`px-2 py-0.5 text-[9.5px] font-mono uppercase tracking-wider rounded-[1px] border ${
              isDark
                ? 'border-white/10 bg-white/5 text-slate-300'
                : 'border-[#E5E7EB] bg-slate-50 text-[#173C62]'
            }`}
          >
            {accreditationBadge}
          </span>
        )}
      </div>
    </div>
  );
};
