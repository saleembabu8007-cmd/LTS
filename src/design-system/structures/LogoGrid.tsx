import React from 'react';

export interface LogoGridItem {
  id: string;
  name: string;
  category?: string;
  clearanceLevel?: string;
  imageUrl?: string;
}

export interface LogoGridProps {
  items: LogoGridItem[];
  columns?: 3 | 4 | 6;
  className?: string;
}

export const LogoGrid: React.FC<LogoGridProps> = ({
  items,
  columns = 4,
  className = '',
}) => {
  const colClasses = {
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
  };

  return (
    <div className={`grid ${colClasses[columns]} border-t border-l border-[#E5E7EB] bg-white ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className="p-6 sm:p-8 border-r border-b border-[#E5E7EB] flex flex-col items-center justify-center text-center space-y-2 min-h-[110px] select-none hover:bg-[#F8FAFC] transition-colors"
        >
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.name}
              className="max-h-9 max-w-[120px] object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
            />
          ) : (
            <span className="font-sans font-bold text-sm text-[#0B1320] tracking-wide">
              {item.name}
            </span>
          )}

          {item.category && (
            <span className="font-mono text-[10px] text-[#64748B] uppercase tracking-wider">
              {item.category}
            </span>
          )}

          {item.clearanceLevel && (
            <span className="font-mono text-[9px] px-1.5 py-0.2 bg-[#EDF3F9] text-[#173C62] uppercase tracking-wider">
              {item.clearanceLevel}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
