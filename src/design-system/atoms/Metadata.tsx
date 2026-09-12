import React from 'react';

export interface MetadataProps {
  children: React.ReactNode;
  mono?: boolean;
  light?: boolean;
  className?: string;
}

export const Metadata: React.FC<MetadataProps> = ({
  children,
  mono = true,
  light = false,
  className = '',
}) => {
  const fontClass = mono ? 'font-mono' : 'font-sans';
  const colorClass = light ? 'text-slate-400' : 'text-[#64748B]';

  return (
    <span className={`text-[11.5px] tracking-[0.04em] uppercase ${fontClass} ${colorClass} ${className}`}>
      {children}
    </span>
  );
};
