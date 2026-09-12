import React from 'react';

export interface EyebrowProps {
  children: React.ReactNode;
  withLine?: boolean;
  light?: boolean;
  className?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  withLine = true,
  light = false,
  className = '',
}) => {
  const textColor = light ? 'text-slate-300' : 'text-[#173C62]';
  const lineColor = light ? 'bg-slate-400' : 'bg-[#173C62]';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {withLine && <span className={`w-5 h-[1px] ${lineColor} shrink-0`} aria-hidden="true" />}
      <span className={`typography-eyebrow ${textColor}`}>
        {children}
      </span>
    </div>
  );
};
