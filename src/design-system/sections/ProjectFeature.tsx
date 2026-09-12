import React from 'react';

export interface ProjectFeatureProps {
  id: string;
  title: string;
  category: string;
  location?: string;
  scopeSummary: string;
  imageUrl: string;
  metrics?: Array<{ label: string; value: string }>;
  reverse?: boolean;
  onNavigate?: (slug: string) => void;
  className?: string;
}

/**
 * ProjectFeature (Composition 3)
 * Full monograph highlight of an official verified project.
 * Uses asymmetric 7/5 or 8/4 layout with dominant 18px-radius imagery and engineering specifications.
 */
export const ProjectFeature: React.FC<ProjectFeatureProps> = ({
  id,
  title,
  category,
  location,
  scopeSummary,
  imageUrl,
  metrics = [],
  reverse = false,
  onNavigate,
  className = '',
}) => {
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(`/projects/${id}`);
    }
  };

  return (
    <section className={`py-16 sm:py-24 md:py-32 bg-white text-left ${className}`}>
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Dominant Architectural Image (7 cols) */}
          <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <a
              href={`/projects/${id}`}
              onClick={handleNavigate}
              className="group block relative aspect-[16/11] overflow-hidden rounded-[18px] bg-[#0B1C2F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
            >
              <img
                src={imageUrl}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
              />
            </a>
          </div>

          {/* Narrative & Specifications (5 cols) */}
          <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
            <div className="flex items-center gap-3 text-[11px] font-mono text-[#173C62] uppercase tracking-[0.16em] font-semibold">
              <span>{category}</span>
              {location && (
                <>
                  <span className="w-1 h-1 rounded-full bg-[#CBD5E1]" />
                  <span className="text-[#64748B]">{location}</span>
                </>
              )}
            </div>

            <h2 className="mt-3 text-[26px] sm:text-[34px] md:text-[40px] font-medium text-[#0B1320] leading-[1.12] tracking-tight">
              {title}
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] text-[#4A5568] leading-relaxed">
              {scopeSummary}
            </p>

            {metrics.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-[#E5E7EB]">
                {metrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="font-mono text-[22px] sm:text-[26px] font-medium text-[#173C62]">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8">
              <a
                href={`/projects/${id}`}
                onClick={handleNavigate}
                className="group inline-flex items-center min-h-[44px] px-6 rounded-[12px] bg-[#173C62] text-white hover:bg-[#102B47] text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors"
              >
                <span>View project dossier</span>
                <span className="ml-2 group-hover:translate-x-[3px] transition-transform duration-180">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
