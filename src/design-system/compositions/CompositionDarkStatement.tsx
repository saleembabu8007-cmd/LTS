import React from 'react';
import { Container } from '../structures/Container';
import { Section, SectionSpacing } from '../structures/Section';
import { Button } from '../atoms/Button';
import { ArrowRight } from 'lucide-react';

export interface CompositionDarkStatementProps {
  eyebrow?: string;
  statement: string;
  supportingText?: string;
  primaryActionLabel?: string;
  primaryActionHref?: string;
  onPrimaryActionClick?: () => void;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  onSecondaryActionClick?: () => void;
  actions?: React.ReactNode;
  footnote?: string;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

/**
 * COMPOSITION J: DARK STATEMENT SECTION
 * Layout Structure: Dark navy background + large authoritative statement + small supporting text + CTA.
 * Provides maximum visual contrast, brand authority, and institutional gravitas.
 */
export const CompositionDarkStatement: React.FC<CompositionDarkStatementProps> = ({
  eyebrow = 'INSTITUTIONAL ACCOUNTABILITY & STANDARDS',
  statement,
  supportingText,
  primaryActionLabel,
  primaryActionHref,
  onPrimaryActionClick,
  secondaryActionLabel,
  secondaryActionHref,
  onSecondaryActionClick,
  actions,
  footnote,
  spacing = 'spacious',
  id,
  className = '',
}) => {
  return (
    <Section id={id} tone="dark" spacing={spacing} className={className}>
      <Container variant="wide">
        <div className="max-w-4xl space-y-8">
          {eyebrow && (
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#93C5FD] font-semibold block">
              {eyebrow}
            </span>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.14]">
            {statement}
          </h2>

          {supportingText && (
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl pt-1">
              {supportingText}
            </p>
          )}

          {/* Action Triggers */}
          {actions ? (
            <div className="pt-4 flex flex-wrap items-center gap-4">{actions}</div>
          ) : (primaryActionLabel || secondaryActionLabel) ? (
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {primaryActionLabel && (
                <Button
                  variant="primary"
                  size="md"
                  href={primaryActionHref}
                  onClick={onPrimaryActionClick}
                  iconTrailing={<ArrowRight className="w-4 h-4" />}
                >
                  {primaryActionLabel}
                </Button>
              )}
              {secondaryActionLabel && (
                <Button
                  variant="outline"
                  size="md"
                  href={secondaryActionHref}
                  onClick={onSecondaryActionClick}
                  className="border-white/25 text-white hover:bg-white/10 hover:border-white/40"
                >
                  {secondaryActionLabel}
                </Button>
              )}
            </div>
          ) : null}

          {footnote && (
            <div className="pt-8 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400 block tracking-wide">
                {footnote}
              </span>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export const CompositionJ = CompositionDarkStatement;
