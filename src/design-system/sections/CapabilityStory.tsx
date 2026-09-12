import React from 'react';

export interface LifecyclePhase {
  phase: string;
  numeral: string;
  title: string;
  description: string;
  metrics?: string;
}

export interface CapabilityStoryProps {
  eyebrow?: string;
  title: string;
  description?: string;
  phases?: LifecyclePhase[];
  className?: string;
}

const DEFAULT_LIFECYCLE: LifecyclePhase[] = [
  {
    numeral: '01',
    phase: 'Design & Pre-Construction',
    title: 'Value Engineering & BIM Modeling',
    description: 'Constructability reviews, thermal load calculations, and clash-detection to eliminate site rework before physical deployment.',
    metrics: 'LOD 400 BIM',
  },
  {
    numeral: '02',
    phase: 'Procurement & Fabrication',
    title: 'Tier-1 Sourcing & Panel Assembly',
    description: 'Factory testing of ASTA-certified switchgear, high-efficiency chillers, and tier-1 solar photovoltaic modules.',
    metrics: 'OEM Direct',
  },
  {
    numeral: '03',
    phase: 'Site Installation & Commissioning',
    title: 'Multidisciplinary Site Execution',
    description: 'DEWA-compliant electrical integration, ductwork fabrication, hydronic balancing, and automated BMS commissioning.',
    metrics: 'NFPA & IEC',
  },
  {
    numeral: '04',
    phase: 'Long-term Facility Operations',
    title: 'Asset Lifecycle & SLA Maintenance',
    description: 'Predictive vibration analysis, continuous thermal audits, 24/7 reactive response, and energy optimization retrofits.',
    metrics: '99.8% Uptime',
  },
];

/**
 * CapabilityStory (Composition 9)
 * Full engineering asset lifecycle narrative.
 * Uses an unboxed horizontal cadence with architectural numerals and verified milestones.
 */
export const CapabilityStory: React.FC<CapabilityStoryProps> = ({
  eyebrow = 'Asset Lifecycle Governance',
  title = 'From Initial Design to Decade-Long Asset Reliability',
  description = 'How LTSGROUP delivers seamless continuity from pre-construction engineering through operational maintenance.',
  phases = DEFAULT_LIFECYCLE,
  className = '',
}) => {
  return (
    <section className={`py-16 sm:py-24 md:py-32 bg-white text-left ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mb-14">
          {eyebrow && (
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#173C62] font-semibold">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 text-[26px] sm:text-[34px] md:text-[40px] font-medium text-[#0B1320] leading-[1.12] tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* 4-step Horizontal Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {phases.map((phase) => (
            <div key={phase.numeral} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#CBD5E1]">
                  <span className="font-mono text-[14px] font-semibold text-[#173C62]">
                    {phase.numeral}
                  </span>
                  {phase.metrics && (
                    <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                      {phase.metrics}
                    </span>
                  )}
                </div>

                <div className="mt-4 text-[11px] font-mono uppercase tracking-[0.14em] text-[#64748B]">
                  {phase.phase}
                </div>

                <h3 className="mt-1.5 text-[18px] font-medium text-[#0B1320] leading-snug">
                  {phase.title}
                </h3>

                <p className="mt-2.5 text-[14px] text-[#4A5568] leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
