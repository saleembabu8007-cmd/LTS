import React from 'react';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | number;
export type IconColor = 'primary' | 'secondary' | 'white' | 'inherit';

export interface BaseIconProps {
  size?: IconSize;
  color?: IconColor;
  strokeWidth?: number;
  interactive?: boolean;
  className?: string;
  'aria-label'?: string;
}

export interface LTSIconProps extends BaseIconProps {
  name:
    | 'hvac'
    | 'electrical'
    | 'plumbing'
    | 'bms'
    | 'civil'
    | 'solar'
    | 'switchgear'
    | 'controls'
    | 'lighting'
    | 'ev-charging'
    | 'facilities'
    | 'trading'
    | 'projects'
    | 'industries'
    | 'contact'
    | 'location'
    | 'phone'
    | 'email'
    | 'arrow-right'
    | 'arrow-left'
    | 'arrow-up-right'
    | 'shield-check'
    | 'check'
    | 'document'
    | 'clock';
}

const resolveSize = (size: IconSize): number => {
  if (typeof size === 'number') return size;
  switch (size) {
    case 'sm':
      return 16;
    case 'lg':
      return 24;
    case 'xl':
      return 32;
    case 'md':
    default:
      return 20;
  }
};

const resolveColorClass = (color: IconColor): string => {
  switch (color) {
    case 'secondary':
      return 'text-[#999999]';
    case 'white':
      return 'text-white';
    case 'inherit':
      return 'text-inherit';
    case 'primary':
    default:
      return 'text-[#173C62]';
  }
};

/* ==========================================================
 * 01 / CORE SERVICE ICONS (Architectural & Technical Stroke)
 * ========================================================== */

/** 01. HVAC / Central Chillers: Concentric rotor & chiller fan blades */
export const IconHVAC: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 9V3c2.5 0 4.5 1.5 4.5 3.5S14.5 9 12 9z" />
      <path d="M15 12h6c0 2.5-1.5 4.5-3.5 4.5S15 14.5 15 12z" />
      <path d="M12 15v6c-2.5 0-4.5-1.5-4.5-3.5S9.5 15 12 15z" />
      <path d="M9 12H3c0-2.5 1.5-4.5 3.5-4.5S9 9.5 9 12z" />
      <circle cx="12" cy="12" r="9" strokeDasharray="1.5 3" />
    </svg>
  );
};

/** 02. Electrical: High-voltage architectural power chevron stroke */
export const IconElectrical: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
};

/** 03. Plumbing: Hydronic piping manifold & valve junction */
export const IconPlumbing: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M3 7h6v6H3z" />
      <path d="M15 7h6v6h-6z" />
      <path d="M9 10h6" />
      <path d="M12 10v9" />
      <circle cx="12" cy="19" r="2" />
      <path d="M9 5h6" />
      <path d="M12 5V2" />
    </svg>
  );
};

/** 04. BMS: Automation controller node network & terminal points */
export const IconBMS: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <circle cx="9" cy="9" r="1.5" />
      <circle cx="15" cy="9" r="1.5" />
      <circle cx="12" cy="15" r="1.5" />
      <path d="M9 9h6" />
      <path d="M10.5 10.5L12 13.5" />
      <path d="M13.5 10.5L12 13.5" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
    </svg>
  );
};

/** 05. Civil Works: Structural frame & foundation column lines */
export const IconCivil: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-8h6v8" />
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M9 14h.01" />
      <path d="M15 14h.01" />
    </svg>
  );
};

/** 06. Solar: Precision photovoltaic module grid array with sun rays */
export const IconSolar: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <circle cx="12" cy="4" r="2" />
      <path d="M4 4h2" />
      <path d="M18 4h2" />
      <path d="M5.5 2.5l1.5 1.5" />
      <path d="M17 4l1.5-1.5" />
      <polygon points="3 19 6 10 18 10 21 19 3 19" />
      <line x1="12" y1="10" x2="12" y2="19" />
      <line x1="4.5" y1="14.5" x2="19.5" y2="14.5" />
    </svg>
  );
};

/** 07. Switchgear: Low-voltage distribution panel & busbar switch */
export const IconSwitchgear: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <circle cx="9" cy="6" r="1" />
      <circle cx="15" cy="6" r="1" />
      <circle cx="8" cy="12" r="1" />
      <line x1="9" y1="12" x2="15" y2="11" />
      <circle cx="16" cy="12" r="1" />
      <circle cx="9" cy="18" r="1" />
      <circle cx="15" cy="18" r="1" />
    </svg>
  );
};

/** 08. Controls & VFDs: Potentiometer dial & digital pulse waveform */
export const IconControls: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <circle cx="4" cy="12" r="2" />
      <circle cx="12" cy="10" r="2" />
      <circle cx="20" cy="14" r="2" />
    </svg>
  );
};

/** 09. Lighting: Industrial luminaire optics reflector beam geometry */
export const IconLighting: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M12 2v3" />
      <path d="M7 6h10l2 6H5l2-6z" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="7" y1="16" x2="5" y2="20" />
      <line x1="12" y1="16" x2="12" y2="22" />
      <line x1="17" y1="16" x2="19" y2="20" />
    </svg>
  );
};

/** 10. EV Charging: High-speed EV charging post & connector cable schematic */
export const IconEVCharging: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <rect x="3" y="3" width="11" height="18" rx="2" />
      <line x1="3" y1="9" x2="14" y2="9" />
      <path d="M8.5 13l-1.5 2.5h3L8.5 18" />
      <path d="M14 7h3a2 2 0 0 1 2 2v6a2 2 0 0 0 2 2v0a1 1 0 0 0 1-1V9l-2-2" />
    </svg>
  );
};

/* ==========================================================
 * 02 / FUNCTIONAL & UTILITY ICONS (Precise Stroke System)
 * ========================================================== */

/** Facilities: Asset stewardship shield outline */
export const IconFacilities: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </svg>
  );
};

/** Trading: Factory OEM component supply crate & logistics */
export const IconTrading: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
};

/** Projects: Architectural drafting compass & structural monolith */
export const IconProjects: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <polygon points="12 2 2 22 22 22 12 2" />
      <line x1="12" y1="6" x2="12" y2="18" />
      <circle cx="12" cy="18" r="1.5" />
    </svg>
  );
};

/** Industries: Industrial processing plant silhouette & sector layers */
export const IconIndustries: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M2 20h20" />
      <path d="M4 20V10l5 3V7l5 3v10" />
      <path d="M19 20V4h-5v16" />
    </svg>
  );
};

/** Contact: Technical project inquiry dossier */
export const IconContact: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="13" y2="13" />
    </svg>
  );
};

/** Location: Architectural coordinate pinpoint */
export const IconLocation: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
};

/** Phone: Minimal telephone handset stroke */
export const IconPhone: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
};

/** Email: Precision correspondence envelope */
export const IconEmail: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
};

/** Arrow Right: Directional arrow with subtle 3–5px hover shift */
export const IconArrow: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  interactive = false,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  const interactionClass = interactive ? 'group-hover:translate-x-1 transition-transform duration-200' : '';
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${interactionClass} ${className} shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
};

/** Arrow Left: Directional return navigation arrow */
export const IconArrowLeft: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  interactive = false,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  const interactionClass = interactive ? 'group-hover:-translate-x-1 transition-transform duration-200' : '';
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${interactionClass} ${className} shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
};

/** Arrow Up-Right: Diagonal case record / external link trigger */
export const IconArrowUpRight: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  interactive = false,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  const interactionClass = interactive ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200' : '';
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${interactionClass} ${className} shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
};

/** Shield Check: Statutory authority governance & compliance mark */
export const IconShieldCheck: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
};

/** Check: Minimal checkmark mark */
export const IconCheck: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

/** Document: Architectural drawing sheet, BOQ schedule, or technical specification */
export const IconDocument: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
};

/** Document: Architectural drawing sheet, BOQ schedule, or technical specification */
export const IconClock: React.FC<BaseIconProps> = ({
  size = 'md',
  color = 'primary',
  strokeWidth = 1.5,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const px = resolveSize(size);
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${resolveColorClass(color)} ${className} transition-colors shrink-0`}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

/* ==========================================================
 * 03 / MASTER UNIFIED ATOM (<LTSIcon name="..." />)
 * ========================================================== */

export const LTSIcon: React.FC<LTSIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'hvac':
      return <IconHVAC {...props} />;
    case 'electrical':
      return <IconElectrical {...props} />;
    case 'plumbing':
      return <IconPlumbing {...props} />;
    case 'bms':
      return <IconBMS {...props} />;
    case 'civil':
      return <IconCivil {...props} />;
    case 'solar':
      return <IconSolar {...props} />;
    case 'switchgear':
      return <IconSwitchgear {...props} />;
    case 'controls':
      return <IconControls {...props} />;
    case 'lighting':
      return <IconLighting {...props} />;
    case 'ev-charging':
      return <IconEVCharging {...props} />;
    case 'facilities':
      return <IconFacilities {...props} />;
    case 'trading':
      return <IconTrading {...props} />;
    case 'projects':
      return <IconProjects {...props} />;
    case 'industries':
      return <IconIndustries {...props} />;
    case 'contact':
      return <IconContact {...props} />;
    case 'location':
      return <IconLocation {...props} />;
    case 'phone':
      return <IconPhone {...props} />;
    case 'email':
      return <IconEmail {...props} />;
    case 'arrow-right':
      return <IconArrow {...props} />;
    case 'arrow-left':
      return <IconArrowLeft {...props} />;
    case 'arrow-up-right':
      return <IconArrowUpRight {...props} />;
    case 'shield-check':
      return <IconShieldCheck {...props} />;
    case 'check':
      return <IconCheck {...props} />;
    case 'document':
      return <IconDocument {...props} />;
    case 'clock':
      return <IconClock {...props} />;
    default:
      return <IconArrow {...props} />;
  }
};
