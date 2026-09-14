import { IconShieldCheck, IconArrow, IconDocument } from '../../design-system/icons';

interface ClientsPageProps {
  onNavigate: (slug: string) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate }) => {
  // Verified UAE Statutory Authorities & Standards
  const statutoryAuthorities = [
    {
      code: 'DEWA',
      name: 'Dubai Electricity & Water Authority',
      role: 'Approved Electrical Contractor & Shams Dubai Solar PV EPC',
      scope: '11kV substation coordination, busduct risers, Form-4 switchboards, and Shams Dubai net-metered solar PV grid synchronization.',
    },
    {
      code: 'DCD',
      name: 'Dubai Civil Defense',
      role: 'Approved Fire Life-Safety & Smoke Management',
      scope: 'Stairwell smoke pressurization, extract ventilation, fire-rated ductwork, and certified life-safety compliance inspections.',
    },
    {
      code: 'DM',
      name: 'Dubai Municipality',
      role: 'Public Health, Building Drainage & Water Hydraulics',
      scope: 'Potable water booster skids, stormwater lift infrastructure, building drainage, and commercial aquatic hygiene certification.',
    },
    {
      code: 'ISO / IEC',
      name: 'International Management & Engineering Standards',
      role: 'ISO 9001, 14001, 45001 & IEC 61439-1/2 Compliance',
      scope: 'Type-tested switchboards up to 65kA withstand, ASHRAE 90.1 energy guidelines, and ISO certified quality & safety management.',
    },
  ];

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — HERO
          Full-bleed architectural image (~76vh).
          H1: Clients & Clearances
          LTS Brand Blue authority: #173C62
      ========================================================================= */}
      <section className="relative w-full h-[72vh] sm:h-[76vh] min-h-[520px] max-h-[820px] bg-[#173C62] overflow-hidden">
        <img
          src="/assets/images/project-highrise.jpg"
          alt="LTSGROUP Built Asset Infrastructure and Institutional Trust"
          className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-[800ms] ease-out hover:scale-[1.01]"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80';
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/65 to-[#173C62]/25 pointer-events-none" />

        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-[0.14em] text-[#CBD5E1] block font-medium">
                Trust &amp; Verification
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[0.98]">
                Clients &amp; Clearances
              </h1>

              <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl pt-1">
                Institutional trust built on statutory authority licensing, audited commissioning dossiers, and strict commercial confidentiality across the UAE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — LOGO WALL & STATUTORY AUTHORITY CLEARANCES
          Clean architectural grid of governing utility and regulatory bodies.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-12 sm:space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] block font-semibold">
              01 &bull; Statutory Authority Licensure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0B1320] tracking-tight">
              Regulator &amp; Code Clearances
            </h2>
            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              Operating under formal pre-qualification frameworks governed by Dubai utility directors, municipal civil defense authorities, and international engineering bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {statutoryAuthorities.map((auth, aIdx) => (
              <div
                key={aIdx}
                className="border-t-2 border-[#173C62] pt-6 flex flex-col justify-between space-y-6 text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-[#173C62] tracking-tight">
                      {auth.code}
                    </span>
                    <IconShieldCheck size="sm" color="primary" />
                  </div>

                  <h3 className="text-base font-medium text-[#0B1320] leading-snug">
                    {auth.name}
                  </h3>

                  <p className="text-xs font-medium text-[#173C62] leading-snug">
                    {auth.role}
                  </p>

                  <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-normal pt-1">
                    {auth.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] text-[11px] uppercase tracking-[0.12em] font-medium text-[#64748B]">
                  STATUTORY CLEARANCE &bull; VERIFIED
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — OPTIONAL SHORT STATEMENT (CONFIDENTIALITY & PREQUALIFICATION)
          Concise institutional statement with 50% content reduction.
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-4 border-l-2 border-[#173C62] pl-6 sm:pl-8">
              <span className="text-xs uppercase tracking-[0.14em] text-[#173C62] block mb-2 font-semibold">
                02 &bull; Commercial Governance
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Institutional Confidentiality
              </h3>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-lg sm:text-xl font-light text-[#0B1320] leading-snug">
                LTSGROUP operates under strict commercial non-disclosure agreements. Complete prequalification dossiers, trade licenses, and references are provided directly for verified tenders.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <IconDocument size="sm" color="secondary" />
                <span>NDA PROTECTED &bull; OFFICIAL PRE-QUALIFICATION PACKS SHARED UPON INQUIRY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — PREQUALIFICATION CTA
          Direct action consultation and vendor enrollment intake.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="bg-[#173C62] text-white rounded-[8px] p-8 sm:p-14 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="text-xs uppercase tracking-[0.14em] text-white/80 block font-medium">
                03 &bull; VENDOR ENROLLMENT &amp; PRE-QUALIFICATION
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.08]">
                Request Complete Statutory Pre-Qualification Dossier
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl font-normal">
                Direct dispatch of verified commercial trade licensing, DEWA electrical contractor registrations, Dubai Civil Defense permits, and ISO management systems accreditation.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                  className="min-h-[44px] inline-flex items-center gap-2 px-8 py-4 rounded-[8px] bg-white text-[#173C62] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-white/95 transition-colors"
                >
                  <span>Request Pre-Qualification Pack</span>
                  <IconArrow size="sm" color="primary" interactive />
                </a>

                <a
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/projects');
                  }}
                  className="min-h-[44px] inline-flex items-center gap-2 px-7 py-4 rounded-[8px] border border-white/20 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  <span>Inspect Projects Archive</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
