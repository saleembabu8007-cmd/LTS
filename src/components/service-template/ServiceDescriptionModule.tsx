import React from 'react';
import { ServicePageData } from '../../types/serviceTemplate';

interface ServiceDescriptionModuleProps {
  data: ServicePageData;
}

/**
 * Section 02 — What This Service Does
 * Conforms strictly to LTSGROUP Service Detail Rules:
 * - Large editorial statement
 * - One strong paragraph
 * - No giant text wall
 * - No card
 * - Generous architectural whitespace
 */
export const ServiceDescriptionModule: React.FC<ServiceDescriptionModuleProps> = ({ data }) => {
  const { introduction, tagline } = data;

  // Use the lead paragraph or primary body paragraph
  const mainParagraph =
    (introduction.bodyParagraphs && introduction.bodyParagraphs[0]) ||
    introduction.leadText;

  return (
    <section
      aria-label="Service Overview"
      className="py-20 lg:py-28 bg-white text-left"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left: Small Section Label (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-[11px] font-mono text-[#173C62] uppercase tracking-[0.22em] font-semibold block">
              SCOPE &bull; OVERVIEW
            </span>
            <span className="text-xs text-[#64748B] mt-1 block font-sans">
              Operational Scope
            </span>
          </div>

          {/* Right: Large Editorial Statement + One Strong Paragraph (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] tracking-tight leading-[1.22]">
              {tagline || introduction.leadText}
            </h2>

            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal max-w-3xl">
              {mainParagraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
