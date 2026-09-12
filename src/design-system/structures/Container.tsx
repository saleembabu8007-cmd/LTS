import React from 'react';

export type ContainerVariant = 'global' | 'wide' | 'standard' | 'narrow';

export interface ContainerProps {
  children: React.ReactNode;
  variant?: ContainerVariant;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer' | 'nav';
  id?: string;
}

const variantClassMap: Record<ContainerVariant, string> = {
  global: 'lts-container-global',
  wide: 'lts-container-wide',
  standard: 'lts-container-standard',
  narrow: 'lts-container-narrow',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  variant = 'wide',
  className = '',
  as: Component = 'div',
  id,
}) => {
  const containerClass = variantClassMap[variant] || 'lts-container-wide';

  return (
    <Component id={id} className={`${containerClass} ${className}`}>
      {children}
    </Component>
  );
};
