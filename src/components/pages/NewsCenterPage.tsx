import React, { useState, useMemo } from 'react';
import { IconArrow, IconArrowLeft, IconArrowUpRight } from '../../design-system/icons/LTSIcons';
import { NEWS_DATA, NewsArticleData } from '../../data/newsData';

interface NewsCenterPageProps {
  onNavigate: (slug: string) => void;
}

const ITEMS_PER_PAGE = 3;

export const NewsCenterPage: React.FC<NewsCenterPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Categories list
  const categories = [
    'All',
    'Solar Engineering',
    'Facilities & Retrofit',
    'Electrical Distribution',
    'Mechanical Engineering',
    'Metering & Controls',
    'Aquatic Systems',
  ];

  // Lead featured article
  const featuredArticle: NewsArticleData = NEWS_DATA[0];

  // Filtered remaining articles (excluding featured article if viewing "All", or filtering appropriately)
  const filteredArticles = useMemo(() => {
    let list = NEWS_DATA.slice(1);
    if (selectedCategory !== 'All') {
      list = NEWS_DATA.filter((art) => {
        if (selectedCategory === 'Metering & Controls') {
          return (
            art.category.includes('Metering') ||
            art.category.includes('Controls') ||
            art.category.includes('VFD')
          );
        }
        if (selectedCategory === 'Aquatic Systems') {
          return art.category.includes('Aquatic') || art.category.includes('Soft Services');
        }
        return art.category.toLowerCase().includes(selectedCategory.toLowerCase());
      });
    }
    return list;
  }, [selectedCategory]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE) || 1;
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white text-[#0B1320] selection:bg-[#173C62] selection:text-white antialiased">
      {/* =========================================================================
          01 — HERO
          Full-bleed architectural / engineering image (~76vh).
          LTS Brand Blue authority: #173C62
      ========================================================================= */}
      <section className="relative w-full h-[76vh] min-h-[540px] max-h-[860px] bg-[#173C62] overflow-hidden">
        <img
          src="/assets/images/engineering-intro.jpg"
          alt="LTSGROUP Engineering Publications and Technical Bulletins"
          className="w-full h-full object-cover filter brightness-[0.85] transition-transform duration-[800ms] ease-out hover:scale-[1.01]"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80';
          }}
        />

        {/* Directional gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173C62] via-[#173C62]/65 to-[#173C62]/25 pointer-events-none" />

        {/* Hero Content Positioned Lower-Left */}
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-0 right-0 z-10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs uppercase tracking-[0.12em] text-[#CBD5E1] block font-semibold">
                Technical Publications &bull; Engineering Bulletins
              </span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[0.98]">
                News Center
              </h1>

              <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-xl pt-1">
                Engineering intelligence, statutory utility updates, and built-environment technical briefings from LTSGROUP practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — FEATURED STORY
          Large-format editorial prominence for the lead technical bulletin.
      ========================================================================= */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              Lead Technical Briefing
            </span>
            <span className="font-mono text-xs text-[#64748B]">
              {featuredArticle.date} &bull; {featuredArticle.readTime}
            </span>
          </div>

          <a
            href={`/news/${featuredArticle.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(`/news/${featuredArticle.slug}`);
            }}
            className="group block select-none space-y-6 sm:space-y-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] rounded-[8px]"
            aria-label={`Read featured article: ${featuredArticle.title}`}
          >
            {/* Large Featured Image (Restrained 8px architectural radius, zero borders) */}
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden rounded-[8px] bg-[#173C62]">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#173C62]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Featured Article Content */}
            <div className="max-w-4xl space-y-3 sm:space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#173C62] block font-semibold">
                {featuredArticle.category}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#0B1320] leading-[1.15] tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                {featuredArticle.title}
              </h2>

              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed font-normal pt-1">
                {featuredArticle.summary}
              </p>

              {/* Action */}
              <div className="pt-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5">
                <span>Read Full Technical Bulletin</span>
                <IconArrow className="w-4 h-4" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* =========================================================================
          03 — MINIMAL LISTING & ARCHIVE (WITH CATEGORY FILTERS & EDITORIAL ROWS)
          Combined streamlined listing with category filter pills and editorial rows.
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 space-y-10">
          {/* Header & Segmented Text Filter Controls */}
          <div className="space-y-6 pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
                  Engineering Monographs Archive
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0B1320] tracking-tight">
                  Bulletins &amp; Compliance Notes
                </h3>
              </div>

              <span className="font-mono text-xs text-[#64748B]">
                Showing {filteredArticles.length} Technical {filteredArticles.length === 1 ? 'Record' : 'Records'}
              </span>
            </div>

            {/* Architectural Segmented Text Filter Controls (Arup / Skanska Standard) */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2 overflow-x-auto scrollbar-none pb-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategorySelect(cat)}
                    className={`relative py-2 text-xs sm:text-sm tracking-wider uppercase transition-colors cursor-pointer shrink-0 ${
                      isActive
                        ? 'text-[#173C62] font-semibold'
                        : 'text-[#64748B] hover:text-[#0B1320] font-medium'
                    }`}
                  >
                    <span>{cat}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#173C62]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Open Architectural Editorial Rows — Zero boxed card containers */}
          {paginatedArticles.length > 0 ? (
            <div className="divide-y divide-[#E5E7EB] border-t border-[#E5E7EB]">
              {paginatedArticles.map((art) => (
                <a
                  key={art.id}
                  href={`/news/${art.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/news/${art.slug}`);
                  }}
                  className="py-8 sm:py-12 group block select-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62]"
                  aria-label={`Read article: ${art.title}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
                    {/* Left: Article Image (8px architectural radius, zero box borders) */}
                    <div className="md:col-span-4 lg:col-span-5">
                      <div className="relative overflow-hidden rounded-[8px] bg-[#173C62] aspect-[16/10]">
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

                    {/* Right: Article Details */}
                    <div className="md:col-span-8 lg:col-span-7 space-y-3 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 text-left">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#173C62] font-semibold">
                          {art.category}
                        </span>
                        <span className="text-[#CBD5E1]">&bull;</span>
                        <span className="font-mono text-xs text-[#64748B]">
                          {art.date} &bull; {art.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-[#0B1320] leading-snug tracking-tight group-hover:text-[#173C62] transition-colors duration-200">
                        {art.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed font-normal line-clamp-2 max-w-3xl">
                        {art.summary}
                      </p>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#173C62] group-hover:text-[#12304F] transition-colors">
                          <span className="border-b border-transparent group-hover:border-[#12304F]">Read technical analysis</span>
                          <span className="transition-transform duration-200 group-hover:translate-x-1.5">&rarr;</span>
                        </span>

                        <div
                          className="text-[#173C62] transition-transform duration-200 ease-out group-hover:translate-x-1.5"
                          aria-hidden="true"
                        >
                          <IconArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center text-[#64748B] text-sm py-20 border-y border-[#E5E7EB]">
              No technical bulletins match this category selection.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pt-6 flex items-center justify-between">
              <span className="font-mono text-xs text-[#64748B]">
                Page {currentPage} of {totalPages}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="p-2.5 rounded-[8px] border border-[#E5E7EB] bg-white text-[#0B1320] hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  aria-label="Previous Page"
                >
                  <IconArrowLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 rounded-[8px] text-xs font-mono font-medium transition-colors cursor-pointer ${
                        currentPage === pageNum
                          ? 'bg-[#173C62] text-white'
                          : 'border border-[#E5E7EB] bg-white text-[#0B1320] hover:bg-slate-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="p-2.5 rounded-[8px] border border-[#E5E7EB] bg-white text-[#0B1320] hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  aria-label="Next Page"
                >
                  <IconArrow className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          04 — CTA
          Technical advisory & practitioner enquiry block.
      ========================================================================= */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#173C62] block font-semibold">
              Technical Advisory &bull; Practitioner Desk
            </span>

            <h2 className="text-3xl sm:text-5xl font-light text-[#0B1320] tracking-tight leading-[1.08]">
              Consult with Our Engineering Desk
            </h2>

            <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed">
              Our technical engineering teams author verified guidance on DEWA grid interconnections, live-building plant modernizations, and harmonic distortion control for developers, consultants, and plant managers across the UAE.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="min-h-[44px] inline-flex items-center gap-2 px-7 py-3.5 rounded-[8px] bg-[#173C62] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#12304F] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer"
              >
                <span>Submit Technical Query</span>
                <IconArrow className="w-3.5 h-3.5" />
              </a>

              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
                className="min-h-[44px] inline-flex items-center gap-2 px-7 py-3.5 rounded-[8px] border border-[#CBD5E1] text-[#0B1320] text-xs font-semibold uppercase tracking-wider hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173C62] cursor-pointer"
              >
                <span>Inspect Delivered Works</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
