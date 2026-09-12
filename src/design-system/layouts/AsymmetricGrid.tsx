import React from 'react';

interface AsymmetricGridProps {
  primarySlot: React.ReactNode;
  secondarySlot: React.ReactNode;
  ratio?: '7-5' | '8-4' | '5-7';
  className?: string;
}

export const AsymmetricGrid: React.FC<AsymmetricGridProps> = ({
  primarySlot,
  secondarySlot,
  ratio = '7-5',
  className = '',
}) => {
  const ratioClasses = {
    '7-5': {
      primary: 'lg:col-span-7',
      secondary: 'lg:col-span-5',
    },
    '8-4': {
      primary: 'lg:col-span-8',
      secondary: 'lg:col-span-4',
    },
    '5-7': {
      primary: 'lg:col-span-5',
      secondary: 'lg:col-span-7',
    },
  };

  const currentRatio = ratioClasses[ratio];

  return (
    <section className={`editorial-section bg-white border-b border-[#E5E7EB] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className={`${currentRatio.primary} flex flex-col justify-between`}>
            {primarySlot}
          </div>
          <div className={`${currentRatio.secondary} flex flex-col justify-between`}>
            {secondarySlot}
          </div>
        </div>
      </div>
    </section>
  );
};
