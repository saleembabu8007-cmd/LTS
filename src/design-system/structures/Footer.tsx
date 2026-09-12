import React from 'react';
import { Container } from './Container';
import { BrandLogo } from '../atoms/BrandLogo';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export interface FooterProps {
  onNavigate: (slug: string) => void;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  className = '',
}) => {
  return (
    <footer className={`bg-[#0B1C2F] text-white border-t border-white/10 select-none ${className}`}>
      {/* Upper Architectural Narrative & Global Pillar Directory */}
      <div className="py-14 sm:py-16 lg:py-20 border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Column 1: Brand & Al Gurg Group Credential (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              <BrandLogo variant="light" withTagline onClick={() => onNavigate('/')} />

              <p className="text-xs sm:text-[13px] leading-relaxed text-slate-300 max-w-sm">
                LTSGROUP is a premier multi-division electromechanical contracting, facilities asset care, and component trading conglomerate operating across the United Arab Emirates.
              </p>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  Group Affiliation
                </span>
                <p className="text-xs font-medium text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#173C62] inline-block shrink-0" />
                  A Proud Member of Easa Saleh Al Gurg Group
                </p>
              </div>

              {/* Statutory Authority Clearances */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['DEWA Approved', 'DCD Certified', 'ISO 9001:2015'].map((badge, i) => (
                  <span
                    key={i}
                    className="font-mono text-[9.5px] px-2 py-0.5 border border-white/15 text-slate-300 uppercase tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Engineering & Construction (2 Cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white font-semibold border-b border-white/10 pb-2">
                Engineering
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/engineering-construction')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/engineering-construction/mep')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    MEP Contracting
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/engineering-construction/solar')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Solar EPC Solutions
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/engineering-construction/control-switchgear')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Control Switchgear
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Facilities Management (2 Cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white font-semibold border-b border-white/10 pb-2">
                Facilities Mgmt
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/facilities-management')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    FM Overview
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/facilities-management/hard-services')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Hard Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/facilities-management/soft-services')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Soft Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/facilities-management/retrofits')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Retrofits &amp; Upgrades
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Trading & Component Supply (2 Cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white font-semibold border-b border-white/10 pb-2">
                Trading
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/trading')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Trading Division
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/trading/hvac-spare-parts')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    HVAC Spare Parts
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/trading/controls-vfds')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Controls &amp; VFDs
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/trading/metering')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Metering Solutions
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 5: Corporate & Contacts (2 Cols) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white font-semibold border-b border-white/10 pb-2">
                Corporate
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/about')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    About LTSGROUP
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/projects')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Project Registry
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/industries')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Industries Served
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/news')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    News &amp; Media
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('/contact')}
                    className="hover:text-white transition-colors cursor-pointer text-left font-medium text-white"
                  >
                    Contact &amp; Tenders &rarr;
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Legal & Operational Bar */}
      <div className="py-6 text-xs text-slate-400">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[11px]">
              &copy; {new Date().getFullYear()} LTSGROUP &bull; Easa Saleh Al Gurg Group LLC. All rights reserved.
            </p>

            <div className="flex items-center gap-6 font-mono text-[11px]">
              <span>ISO 9001:2015</span>
              <span>&bull;</span>
              <span>DEWA Certified</span>
              <span>&bull;</span>
              <span>Dubai, UAE</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
