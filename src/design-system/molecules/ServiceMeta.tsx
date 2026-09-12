import React from 'react';
import { Tag } from '../atoms/Tag';

export interface ServiceMetaItem {
  label: string;
  value: string;
}

export interface ServiceMetaProps {
  division: string;
  disciplineCode?: string;
  clearanceLevel?: string;
  standards?: string[];
  specs?: ServiceMetaItem[];
  light?: boolean;
  className?: string;
}

export const ServiceMeta: React.FC<ServiceMetaProps> = ({
  division,
  disciplineCode,
  clearanceLevel,
  standards = [],
  specs = [],
  light = false,
  className = '',
}) => {
  const textColor = light ? 'text-white' : 'text-[#0B1320]';
  const labelColor = light ? 'text-slate-400' : 'text-[#64748B]';
  const borderColor = light ? 'border-white/15' : 'border-[#E5E7EB]';

  return (
    <div className={`space-y-4 py-4 border-t border-b ${borderColor} ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-mono uppercase tracking-wider font-semibold ${textColor}`}>
            {division}
          </span>
          {disciplineCode && (
            <Tag variant="brand" shape="pill">
              {disciplineCode}
            </Tag>
          )}
        </div>

        {clearanceLevel && (
          <span className={`text-xs font-mono tracking-wider ${labelColor}`}>
            CLEARANCE: <strong className={textColor}>{clearanceLevel}</strong>
          </span>
        )}
      </div>

      {standards.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5">
          <span className={`text-[11px] font-mono mr-1 uppercase ${labelColor}`}>
            Compliant Standards:
          </span>
          {standards.map((std, idx) => (
            <Tag key={idx} variant="neutral" shape="pill">
              {std}
            </Tag>
          ))}
        </div>
      )}

      {specs.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          {specs.map((spec, i) => (
            <div key={i} className="space-y-0.5">
              <span className={`block text-[10.5px] font-mono uppercase tracking-wider ${labelColor}`}>
                {spec.label}
              </span>
              <span className={`block text-xs font-semibold ${textColor}`}>
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
