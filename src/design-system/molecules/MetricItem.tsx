import React from 'react';
import { Number, NumberSize } from '../atoms/Number';
import { Metadata } from '../atoms/Metadata';

export interface MetricItemProps {
  value: string | number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  size?: NumberSize;
  light?: boolean;
  className?: string;
}

export const MetricItem: React.FC<MetricItemProps> = ({
  value,
  suffix,
  prefix,
  label,
  description,
  size = 'display',
  light = false,
  className = '',
}) => {
  return (
    <div className={`space-y-2 select-none ${className}`}>
      <Number
        value={value}
        suffix={suffix}
        prefix={prefix}
        size={size}
        light={light}
      />

      <div className="space-y-1">
        <div className="block">
          <Metadata light={light} mono>
            {label}
          </Metadata>
        </div>

        {description && (
          <p className={`text-xs leading-relaxed ${light ? 'text-slate-400' : 'text-[#4A5568]'}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
