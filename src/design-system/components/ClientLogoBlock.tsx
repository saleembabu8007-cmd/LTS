import React from 'react';

export interface ClientLogoItem {
  name: string;
  category?: string;
  logoSrc?: string;
  accreditationId?: string;
}

export interface ClientLogoBlockProps {
  eyebrow?: string;
  title?: string;
  items: ClientLogoItem[];
  variant?: 'light' | 'dark' | 'minimal';
  columns?: 4 | 5 | 6;
  className?: string;
}

export const ClientLogoBlock: React.FC<ClientLogoBlockProps> = ({
  eyebrow = 'STATUTORY ACCREDITATIONS & INSTITUTIONAL CLEARANCES',
  title,
  items,
  variant = 'light',
  columns = 5,
  className = '',
}) => {
  const isDark = variant === 'dark';
  const isMinimal = variant === 'minimal';

  const colClasses = {
    4: 'grid-cols-2 sm:grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6',
  }[columns];

  return (
    <section
      className={`py-12 sm:py-16 ${
        isDark
          ? 'bg-[#0B1C2F] text-white border-y border-white/10'
          : isMinimal
          ? 'bg-transparent text-[#0B1320]'
          : 'bg-[#FAFAFA] text-[#0B1320] border-y border-[#E5E7EB]'
      } ${className}`}
      aria-label="Client accreditations and logos"
    >
      <div className="lts-container space-y-8">
        {(eyebrow || title) && (
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            {eyebrow && (
              <span
                className={`typography-label block ${
                  isDark ? 'text-slate-400' : 'text-[#173C62]'
                }`}
              >
                {eyebrow}
              </span>
            )}
            {title && (
              <h3
                className={`typography-h3 ${
                  isDark ? 'text-white' : 'text-[#0B1320]'
                }`}
              >
                {title}
              </h3>
            )}
          </div>
        )}

        {/* Restrained Monochrome Grid with 2px Standard Radius */}
        <div className={`grid ${colClasses} gap-4 sm:gap-6 items-center justify-items-center`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`w-full py-5 px-5 text-center flex flex-col items-center justify-center transition-all duration-200 border rounded-[12px] min-h-[90px] ${
                isDark
                  ? 'border-white/10 bg-white/[0.02] hover:border-white/20'
                  : 'border-[#E5E7EB] bg-white hover:border-[#173C62]/40 shadow-none'
              }`}
            >
              {item.logoSrc ? (
                <img
                  src={item.logoSrc}
                  alt={item.name}
                  className="h-9 w-auto max-w-[130px] object-contain filter grayscale opacity-75 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              ) : (
                <div className="space-y-1">
                  <span
                    className={`typography-btn block leading-tight ${
                      isDark ? 'text-white' : 'text-[#0B1320]'
                    }`}
                  >
                    {item.name}
                  </span>
                  {item.category && (
                    <span className="typography-caption text-[#64748B] block text-[10px]">
                      {item.category}
                    </span>
                  )}
                  {item.accreditationId && (
                    <span className="text-[10px] text-[#173C62] font-mono block">
                      {item.accreditationId}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
