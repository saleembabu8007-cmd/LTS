import React from 'react';
import { Container } from '../structures/Container';
import { LogoItem, LogoItemProps } from '../molecules/LogoItem';

export interface ClientLogoFieldProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  logos: LogoItemProps[];
  light?: boolean;
  className?: string;
}

export const ClientLogoField: React.FC<ClientLogoFieldProps> = ({
  eyebrow = 'STATUTORY AUTHORITIES & CLIENTS',
  title = 'Direct Regulatory Approvals & Enterprise Partnerships',
  description = 'Continuous compliance and delivery relationships with UAE municipal authorities and conglomerate developers.',
  logos,
  light = false,
  className = '',
}) => {
  const bgClass = light ? 'bg-[#0B1C2F] text-white' : 'bg-[#F8FAFC] text-[#0B1320]';
  const labelColor = light ? 'text-slate-400' : 'text-[#64748B]';
  const titleColor = light ? 'text-white' : 'text-[#0B1320]';

  return (
    <section className={`py-14 sm:py-20 ${bgClass} ${className}`}>
      <Container className="space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62]">
            {eyebrow}
          </span>
          <h2 className={`text-2xl sm:text-3xl font-sans font-semibold tracking-tight ${titleColor}`}>
            {title}
          </h2>
          {description && (
            <p className={`text-xs sm:text-sm ${labelColor} leading-relaxed`}>
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((logo, idx) => (
            <LogoItem
              key={idx}
              name={logo.name}
              category={logo.category}
              clearanceLevel={logo.clearanceLevel}
              logoSrc={logo.logoSrc}
              light={light}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
