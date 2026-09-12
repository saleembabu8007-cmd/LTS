import React from 'react';

export interface ContactFieldGroupProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
  className?: string;
}

export const ContactFieldGroup: React.FC<ContactFieldGroupProps> = ({
  title,
  description,
  children,
  columns = 2,
  className = '',
}) => {
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {(title || description) && (
        <div className="space-y-1 pb-2 border-b border-[#E5E7EB]">
          {title && (
            <h4 className="text-xs font-sans font-bold uppercase tracking-[0.1em] text-[#0B1320]">
              {title}
            </h4>
          )}
          {description && (
            <p className="text-xs text-[#64748B]">{description}</p>
          )}
        </div>
      )}

      <div className={`grid ${colClasses[columns]} gap-5`}>
        {children}
      </div>
    </div>
  );
};
