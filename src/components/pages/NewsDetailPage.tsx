import React from 'react';
import { IconArrow, IconArrowLeft, IconArrowUpRight, IconShieldCheck, IconCheck } from '../../design-system/icons/LTSIcons';
import { getArticleBySlug, NEWS_DATA, NewsArticleData } from '../../data/newsData';

interface NewsDetailPageProps {
  slug: string;
  onNavigate: (slug: string) => void;
}

export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ slug, onNavigate }) => {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-24 px-6 text-center bg-white text-[#0B1320]">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#64748B] block mb-3">
          Publication Archive
        </span>
        <h1 className="text-3xl sm:text-4xl font-light text-[#0B1320] mb-4 tracking-tight">
          Technical Briefing Not Found
        </h1>
        <p className="text-sm text-[#4A5568] mb-8 max-w-md leading-relaxed">
          The requested engineering bulletin or technical monograph could not be retrieved from the archive.
        </p>
        <a
          href="/news"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/news');
          }}
          className="min-h-[44px] inline-flex items-center gap-2 px-6 py-3.5 rounded-[12px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#12304F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer"
        >
          <IconArrowLeft className="w-4 h-4" />
          <span>Return to News Center</span>
        </a>
      </div>
    );
  }

  // Related articles (excluding current one)
  const relatedArticles: NewsArticleData[] = NEWS_DATA.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* Return Navigation Bar */}
      <div className="border-b border-[#E5E7EB] bg-[#FAFAFA] py-2">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          <a
            href="/news"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/news');
            }}
            className="min-h-[44px] inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#173C62] uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px] cursor-pointer"
          >
            <IconArrowLeft className="w-3.5 h-3.5" />
            <span>News Center Archive</span>
          </a>

          <span className="font-mono text-[11px] text-[#94A3B8] uppercase tracking-wider">
            {article.category}
          </span>
        </div>
      </div>

      {/* =========================================================================
          01 — ARTICLE HEADER & SHORT INTRODUCTION
          Article title, short introduction, category.
          Generous editorial typography.
      ========================================================================= */}
      <section className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl space-y-5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              Technical Briefing &bull; {article.category}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#0B1320] leading-[1.08] tracking-tight">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#334155] font-normal leading-relaxed pt-2">
              {article.summary}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — LARGE HERO IMAGE
          Commanding high-resolution photograph (20-28px radius, pure photography)
      ========================================================================= */}
      <section className="pb-14 sm:pb-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden rounded-[20px] sm:rounded-[28px] bg-[#173C62]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1920&q=80';
              }}
            />
            <div className="absolute bottom-4 left-4 font-mono text-xs text-white/90 bg-[#173C62]/85 backdrop-blur-xs px-3.5 py-1.5 rounded-[8px] border border-white/10">
              Technical Briefing &bull; Field Verification
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — ARTICLE BODY: EXCELLENT TYPOGRAPHY & TECHNICAL COPY
          Preserves 100% of verified technical analysis, background, and key takeaways.
      ========================================================================= */}
      <section className="pb-20 sm:pb-28 bg-white border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
            {/* Technical Executive Summary — Unboxed Editorial Callout */}
            <div className="border-l-2 border-[#173C62] pl-6 sm:pl-8 py-2 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                Technical Executive Summary
              </span>
              <div className="space-y-3">
                {article.keyPoints.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-base text-[#0B1320] font-normal leading-relaxed"
                  >
                    <IconCheck className="w-4 h-4 text-[#173C62] shrink-0 mt-1" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Context & Background Narrative */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                01 &bull; Operational Context
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Industry Background &amp; Challenges
              </h2>
              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
                {article.background}
              </p>
            </div>

            {/* Supporting Imagery (Field Installation Monograph Plate) */}
            <div className="relative overflow-hidden rounded-[20px] bg-[#173C62] aspect-[16/10]">
              <img
                src={article.image}
                alt={`${article.title} technical execution`}
                loading="lazy"
                className="w-full h-full object-cover filter brightness-[0.92]"
              />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-white/90 bg-[#173C62]/85 backdrop-blur-xs px-3.5 py-1.5 rounded-[8px] border border-white/10">
                Plate Monograph &bull; Electromechanical Installation
              </div>
            </div>

            {/* Deep Technical Analysis */}
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                02 &bull; Engineering Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                Technical Specifications &amp; Methodology
              </h2>
              <div className="space-y-5 text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal">
                {article.technicalAnalysis.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Key Practitioner Takeaways */}
            <div className="space-y-4 bg-[#F8FAFC] p-6 sm:p-8 rounded-[20px]">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                Key Practitioner Takeaways
              </span>
              <div className="space-y-3 pt-2">
                {article.takeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-[#173C62] mt-1 shrink-0">
                      0{tIdx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-[#0B1320] leading-relaxed font-medium">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Governing Engineering Standards */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                Governing Technical Standards
              </span>
              <div className="flex flex-wrap gap-2">
                {article.governingStandards.map((std, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0B1320] bg-[#F8FAFC] border border-[#E5E7EB] px-3.5 py-2 rounded-[8px]"
                  >
                    <IconShieldCheck className="w-3.5 h-3.5 text-[#173C62]" />
                    <span>{std}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Related Service Capability Bridge */}
            {article.relatedService && (
              <div className="pt-6 border-t border-[#E5E7EB]">
                <div className="p-6 sm:p-8 rounded-[20px] bg-white border border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="space-y-1 max-w-xl">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] font-semibold block">
                      Delivering Discipline
                    </span>
                    <h3 className="text-xl font-light text-[#0B1320] tracking-tight">
                      {article.relatedService.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                      {article.relatedService.description}
                    </p>
                  </div>

                  <a
                    href={article.relatedService.slug}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(article.relatedService.slug);
                    }}
                    className="min-h-[44px] inline-flex items-center gap-2 px-5 py-3 rounded-[10px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#12304F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer shrink-0 whitespace-nowrap"
                  >
                    <span>Inspect Scope</span>
                    <IconArrow className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 — RELATED ARTICLES
          Curated 2-article editorial monograph section.
      ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block mb-2 font-semibold">
                  Technical Briefings Archive
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
                  Related Publications
                </h2>
              </div>

              <a
                href="/news"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/news');
                }}
                className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-[#173C62] uppercase tracking-wider hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[4px] cursor-pointer"
              >
                <span>View All Technical Dispatches</span>
                <IconArrow className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 2 Related Article Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {relatedArticles.map((rel) => (
                <a
                  key={rel.id}
                  href={`/news/${rel.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/news/${rel.slug}`);
                  }}
                  className="group block select-none space-y-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[20px]"
                  aria-label={`Read article: ${rel.title}`}
                >
                  <div className="relative overflow-hidden rounded-[18px] sm:rounded-[20px] bg-[#173C62] aspect-[16/10]">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-[0.94] transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                    />
                  </div>

                  <div className="space-y-2 pt-1 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#64748B] block font-medium">
                      {rel.category}
                    </span>

                    <h3 className="text-lg sm:text-xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                      {rel.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed line-clamp-2">
                      {rel.summary}
                    </p>

                    <div className="pt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#173C62]">
                      <span>Read briefing</span>
                      <IconArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
