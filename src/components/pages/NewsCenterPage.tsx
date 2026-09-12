import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { NEWS_DATA, NewsArticleData } from '../../data/newsData';

interface NewsCenterPageProps {
  onNavigate: (slug: string) => void;
}

export const NewsCenterPage: React.FC<NewsCenterPageProps> = ({ onNavigate }) => {
  const featuredArticle: NewsArticleData = NEWS_DATA[0];
  const editorialArticles: NewsArticleData[] = NEWS_DATA.slice(1);

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — HEADER & LARGE FEATURED ARTICLE
          Title: News Center
          Short description.
          Immediately introduces the large featured article image.
      ========================================================================= */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-14 sm:pb-20 border-b border-[#E5E7EB]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Header Title & Short Description */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 pb-8 md:pb-12 border-b border-[#E5E7EB]">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block mb-2 font-semibold">
                Technical Publication &bull; Engineering Bulletins
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#0B1320] tracking-tight leading-[0.95]">
                News Center
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#4A5568] max-w-xl font-normal leading-relaxed">
              Practitioner briefings on DEWA utility standards, district cooling hydronics, switchgear arc containment, and built-environment compliance authored by the LTSGROUP engineering desk.
            </p>
          </div>

          {/* Large Featured Article Feature */}
          {featuredArticle && (
            <a
              href={`/news/${featuredArticle.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(`/news/${featuredArticle.slug}`);
              }}
              className="mt-10 sm:mt-14 group block select-none space-y-6 sm:space-y-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[24px]"
              aria-label={`Read featured article: ${featuredArticle.title}`}
            >
              {/* Large Featured Image (20-24px radius, NO border) */}
              <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden rounded-[20px] sm:rounded-[28px] bg-[#0B1C2F]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  loading="eager"
                  className="w-full h-full object-cover filter brightness-[0.94] transition-transform duration-[600ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1920&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Featured Article Typography */}
              <div className="max-w-4xl space-y-3 sm:space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                  {featuredArticle.category} &bull; Lead Briefing
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] leading-[1.15] tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                  {featuredArticle.title}
                </h2>

                <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal pt-1">
                  {featuredArticle.summary}
                </p>

                {/* Read article action */}
                <div className="pt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5">
                  <span>Read article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          )}
        </div>
      </section>

      {/* =========================================================================
          02 — ARTICLE INDEX
          Vertical editorial rows.
          Each row: image + title + short description + arrow.
          No bordered cards.
      ========================================================================= */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl pb-10 sm:pb-14">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block mb-2 font-semibold">
              Archive &bull; Technical Monographs
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#0B1320] tracking-tight">
              Engineering Bulletins &amp; Compliance Notes
            </h2>
          </div>

          {/* Vertical Editorial Rows */}
          <div className="divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
            {editorialArticles.map((art) => (
              <a
                key={art.id}
                href={`/news/${art.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/news/${art.slug}`);
                }}
                className="py-10 sm:py-12 md:py-14 group block select-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[18px]"
                aria-label={`Read article: ${art.title}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                  {/* Left: Article Image (Soft 16-18px radius, NO borders) */}
                  <div className="md:col-span-4 lg:col-span-4">
                    <div className="relative overflow-hidden rounded-[16px] sm:rounded-[18px] bg-[#0B1C2F] aspect-[16/10]">
                      <img
                        src={art.image}
                        alt={art.title}
                        loading="lazy"
                        className="w-full h-full object-cover filter brightness-[0.94] transition-transform duration-[450ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.025]"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80';
                        }}
                      />
                    </div>
                  </div>

                  {/* Right: Article Details (Title, Description, Arrow) */}
                  <div className="md:col-span-8 lg:col-span-8 space-y-3 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#64748B] block font-medium">
                      {art.category}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                      {art.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal line-clamp-2 max-w-3xl">
                      {art.summary}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173C62] group-hover:text-[#11253E] transition-colors">
                        <span>Read technical analysis</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1.5">&rarr;</span>
                      </span>

                      <div
                        className="text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5"
                        aria-hidden="true"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
