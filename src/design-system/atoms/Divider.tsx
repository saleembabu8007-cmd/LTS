import React from 'react';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  tone?: 'hairline' | 'strong' | 'dark' | 'brand';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  tone = 'hairline',
  className = '',
}) => {
  const toneClasses: Record<string, string> = {
    hairline: 'border-[#E5E7EB]',
    strong: 'border-[#CBD5E1]',
    dark: 'border-white/12',
    brand: 'border-[#173C62]',
  };

  if (orientation === 'vertical') {
    return (
      <div
        className={`inline-block h-full border-r ${toneClasses[tone]} shrink-0 ${className}`}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  return (
    <hr
      className={`w-full border-0 border-t ${toneClasses[tone]} my-0 shrink-0 ${className}`}
      role="separator"
      aria-orientation="horizontal"
    />
  );
};
