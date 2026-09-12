import React from 'react';
import { ShieldCheck } from 'lucide-react';

export interface LogoFieldItem {
  id: string;
  name: string;
  category: string;
  detail: string;
}

interface MinimalLogoFieldProps {
  eyebrow?: string;
  headline?: string;
  items: LogoFieldItem[];
  className?: string;
}

export const MinimalLogoField: React.FC<MinimalLogoFieldProps> = ({
  eyebrow = 'STATUTORY CLEARANCES & ACCREDITATIONS',
  headline,
  items,
  className = '',
}) => {
  return (
    <section className={`py-16 lg:py-24 bg-white border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#999999] block">
            {eyebrow}
          </span>
          {headline && (
            <h3 className="text-xl sm:text-2xl font-light text-[#0B1320]">
              {headline}
            </h3>
          )}
        </div>

        {/* Minimal Monochrome Grid with Generous Whitespace */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-6 border border-[#E5E7EB] bg-[#FAFAFA] space-y-2 text-center hover:border-[#173C62] transition-colors"
            >
              <div className="flex justify-center text-[#173C62] mb-1">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-[#0B1320] block">
                {item.name}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#999999] block">
                {item.category}
              </span>
              <p className="text-xs text-[#4A5568] leading-tight pt-1">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
