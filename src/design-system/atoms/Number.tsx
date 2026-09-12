import React from 'react';

export type NumberSize = 'display' | 'xl' | 'lg' | 'mono';

export interface NumberProps {
  value: string | number;
  suffix?: string;
  prefix?: string;
  size?: NumberSize;
  light?: boolean;
  className?: string;
}

export const Number: React.FC<NumberProps> = ({
  value,
  suffix,
  prefix,
  size = 'lg',
  light = false,
  className = '',
}) => {
  const sizeClasses: Record<NumberSize, string> = {
    display: 'text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight',
    xl: 'text-2xl sm:text-3xl lg:text-4xl font-sans font-bold tracking-tight',
    lg: 'text-xl sm:text-2xl lg:text-3xl font-sans font-semibold tracking-tight',
    mono: 'text-sm sm:text-base font-mono font-semibold tracking-wider',
  };

  const colorClass = light ? 'text-white' : 'text-[#0B1320]';
  const accentColor = light ? 'text-slate-300' : 'text-[#173C62]';

  return (
    <div className={`inline-flex items-baseline gap-0.5 select-none ${className}`}>
      {prefix && <span className={`text-base font-medium mr-0.5 ${accentColor}`}>{prefix}</span>}
      <span className={`${sizeClasses[size]} ${colorClass}`}>
        {value}
      </span>
      {suffix && <span className={`text-sm sm:text-base font-medium ml-0.5 ${accentColor}`}>{suffix}</span>}
    </div>
  );
};
