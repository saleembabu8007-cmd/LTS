import React from 'react';

export interface ProjectMetaItem {
  label: string;
  value: string;
}

export interface ProjectMetaProps {
  items: ProjectMetaItem[];
  light?: boolean;
  className?: string;
}

export const ProjectMeta: React.FC<ProjectMetaProps> = ({
  items,
  light = false,
  className = '',
}) => {
  const borderColor = light ? 'border-white/10' : 'border-[#E5E7EB]';
  const labelColor = light ? 'text-slate-400' : 'text-[#64748B]';
  const valueColor = light ? 'text-white' : 'text-[#0B1320]';

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y ${borderColor} ${className}`}>
      {items.map((item, idx) => (
        <div key={idx} className="space-y-1">
          <span className={`block font-mono text-[10.5px] uppercase tracking-wider ${labelColor}`}>
            {item.label}
          </span>
          <span className={`block font-sans text-xs sm:text-[13px] font-semibold ${valueColor}`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};
