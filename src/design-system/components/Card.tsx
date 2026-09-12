import React from 'react';
import { FeatureImageCard, FeatureImageCardProps } from '../cards/FeatureImageCard';
import { StandardImageCard, StandardImageCardProps } from '../cards/StandardImageCard';
import { CompactImageCard, CompactImageCardProps } from '../cards/CompactImageCard';

export type CardVariant =
  | 'feature'
  | 'standard'
  | 'compact'
  | 'minimal'
  | 'hairline'
  | 'darkSurface'
  | 'photoTile';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  interactive?: boolean;
  tone?: 'light' | 'dark' | 'subtle';
  radius?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'standard',
  interactive = false,
  tone = 'light',
  radius,
  className = '',
  ...props
}) => {
  const baseClasses = 'transition-all duration-200 ease-out overflow-hidden';

  // Explicit soft-radius mappings
  const radiusMap = {
    none: 'rounded-none',
    sm: 'rounded-[8px]',
    md: 'rounded-[12px]',
    lg: 'rounded-[16px]',
    xl: 'rounded-[20px]',
  };

  // Canonical Card Archetypes
  const variantClasses: Record<CardVariant, string> = {
    // 1. Feature Card: Large prominence, generous breathing room, 20px radius
    feature:
      tone === 'dark'
        ? 'bg-[#0B1C2F] border border-white/10 text-white p-8 sm:p-10 rounded-[20px]'
        : 'bg-[#F8FAFC] border border-[#CBD5E1] text-[#0B1320] p-8 sm:p-10 rounded-[20px]',

    // 2. Standard Card: Structured 1px hairline card, 16px radius
    standard:
      tone === 'dark'
        ? 'bg-[#11253E] border border-white/10 text-white p-6 sm:p-8 rounded-[16px]'
        : 'bg-white border border-[#E5E7EB] text-[#0B1320] p-6 sm:p-8 rounded-[16px]',

    // 3. Compact Card: Dense metadata or quick index item, 12px radius
    compact:
      tone === 'dark'
        ? 'bg-[#0B1C2F]/80 border border-white/10 text-white p-4 sm:p-5 rounded-[12px]'
        : 'bg-[#F8FAFC] border border-[#E5E7EB] text-[#0B1320] p-4 sm:p-5 rounded-[12px]',

    // Backward-compatible aliases
    minimal: 'bg-transparent text-[#0B1320] p-0',
    hairline: 'bg-white border border-[#E5E7EB] text-[#0B1320] p-6 rounded-[16px]',
    darkSurface: 'bg-[#0B1C2F] border border-white/10 text-white p-6 rounded-[16px]',
    photoTile: 'relative overflow-hidden bg-[#0B1C2F] text-white rounded-[18px]',
  };

  const interactiveClasses = interactive
    ? tone === 'dark'
      ? 'hover:border-white/30 cursor-pointer group'
      : 'hover:border-[#173C62] cursor-pointer group'
    : '';

  const explicitRadiusClass = radius ? radiusMap[radius] : '';

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${interactiveClasses} ${explicitRadiusClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export interface MetricBlockProps {
  number: string;
  label: string;
  caption?: string;
  light?: boolean;
  className?: string;
}

export const MetricBlock: React.FC<MetricBlockProps> = ({
  number,
  label,
  caption,
  light = false,
  className = '',
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <span
        className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight block ${
          light ? 'text-white' : 'text-[#0B1320]'
        }`}
      >
        {number}
      </span>
      <span
        className={`text-xs sm:text-sm font-medium uppercase tracking-wider block ${
          light ? 'text-slate-300' : 'text-[#334155]'
        }`}
      >
        {label}
      </span>
      {caption && (
        <span
          className={`text-xs block ${
            light ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {caption}
        </span>
      )}
    </div>
  );
};

export type ImageCardVariant = 'feature' | 'standard' | 'compact';

export interface ImageCardProps {
  title: string;
  imageUrl: string;
  imageAlt?: string;
  variant?: ImageCardVariant;
  subtitle?: string;
  description?: string;
  href?: string;
  ctaText?: string;
  light?: boolean;
  onNavigate?: (href: string) => void;
  className?: string;
}

/**
 * ImageCard
 * Unified dispatcher for Feature, Standard, and Compact image cards.
 */
export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  imageUrl,
  imageAlt = '',
  variant = 'standard',
  subtitle,
  description,
  href,
  ctaText = 'Explore details',
  onNavigate,
  className = '',
}) => {
  if (variant === 'feature') {
    return (
      <FeatureImageCard
        title={title}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        eyebrow={subtitle}
        description={description}
        href={href}
        ctaText={ctaText}
        onNavigate={onNavigate}
        className={className}
      />
    );
  }

  if (variant === 'compact') {
    return (
      <CompactImageCard
        title={title}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        eyebrow={subtitle}
        description={description}
        href={href}
        onNavigate={onNavigate}
        className={className}
      />
    );
  }

  // Standard Image Card
  return (
    <StandardImageCard
      title={title}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      eyebrow={subtitle}
      description={description}
      href={href}
      ctaText={ctaText}
      onNavigate={onNavigate}
      className={className}
    />
  );
};

// Re-export core card types
export { FeatureImageCard, StandardImageCard, CompactImageCard };
export type { FeatureImageCardProps, StandardImageCardProps, CompactImageCardProps };
