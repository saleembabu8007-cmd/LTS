import React from 'react';

export type StatusTone = 'success' | 'warning' | 'error' | 'info' | 'neutral';

export interface StatusIndicatorProps {
  label: string;
  tone?: StatusTone;
  variant?: 'pill' | 'dot';
  pulsing?: boolean;
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  label,
  tone = 'success',
  variant = 'pill',
  pulsing = false,
  className = '',
}) => {
  const toneClasses: Record<StatusTone, { dot: string; pill: string; ping: string }> = {
    success: {
      dot: 'bg-[#079455]',
      pill: 'bg-[#ECFDF3] text-[#079455] border-[#A6F4C5]',
      ping: 'bg-[#079455]/40',
    },
    warning: {
      dot: 'bg-[#DC6803]',
      pill: 'bg-[#FEF0C7] text-[#DC6803] border-[#FEDF89]',
      ping: 'bg-[#DC6803]/40',
    },
    error: {
      dot: 'bg-[#D92D20]',
      pill: 'bg-[#FEF3F2] text-[#D92D20] border-[#FECDCA]',
      ping: 'bg-[#D92D20]/40',
    },
    info: {
      dot: 'bg-[#173C62]',
      pill: 'bg-[#EDF3F9] text-[#173C62] border-[#CBD5E1]',
      ping: 'bg-[#173C62]/40',
    },
    neutral: {
      dot: 'bg-[#64748B]',
      pill: 'bg-[#F8FAFC] text-[#4A5568] border-[#E5E7EB]',
      ping: 'bg-[#64748B]/40',
    },
  };

  const currentTone = toneClasses[tone];

  if (variant === 'dot') {
    return (
      <span className={`inline-flex items-center gap-2 select-none ${className}`}>
        <span className="relative flex h-2 w-2">
          {pulsing && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentTone.ping}`}
            />
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${currentTone.dot}`} />
        </span>
        <span className="text-xs font-mono uppercase tracking-wider text-[#4A5568]">
          {label}
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium uppercase tracking-wider select-none ${currentTone.pill} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${currentTone.dot}`} />
      <span>{label}</span>
    </span>
  );
};
