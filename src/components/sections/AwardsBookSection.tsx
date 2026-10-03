import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Crown, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  RotateCcw,
  GraduationCap
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { BOOK_AWARDS_DATA } from '../../data/tisData';

export const AwardsBookSection: React.FC = () => {
  // pageState: 0 = Front Cover, 1..6 = Award Pages 1 to 6
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const totalPages = BOOK_AWARDS_DATA.length; // 6 awards

  const handleNextPage = () => {
    if (currentPage < totalPages && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      setCurrentPage((prev) => prev + 1);
      setTimeout(() => setIsFlipping(false), 500);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection('prev');
      setIsFlipping(true);
      setCurrentPage((prev) => prev - 1);
      setTimeout(() => setIsFlipping(false), 500);
    }
  };

  const handleJumpToPage = (pageNum: number) => {
    if (pageNum !== currentPage && !isFlipping) {
      setFlipDirection(pageNum > currentPage ? 'next' : 'prev');
      setIsFlipping(true);
      setCurrentPage(pageNum);
      setTimeout(() => setIsFlipping(false), 500);
    }
  };

  const activeAward = currentPage > 0 ? BOOK_AWARDS_DATA[currentPage - 1] : null;

  return (
    <section id="awards-book" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-tis-crimson/10 dark:bg-tis-crimson/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-tis-gold/15 dark:bg-tis-gold/20 blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <SectionHeading
        badge="Accolades & Distinctions"
        title="The Hall of Excellence:"
        titleHighlight="TIS Awards Book"
        subtitle="Open our interactive book of honors to explore the 6 prestigious state, regional, and national awards conferred upon Tula's International School."
      />

      {/* Book Interactive Stage / Desk */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* Book Navigation Bar Controls (Top of Book) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white/70 dark:bg-slate-850/70 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-tis-crimson text-white flex items-center justify-center shadow-md">
              <BookOpen className="w-5 h-5 text-tis-gold-light" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Current View
              </span>
              <p className="text-sm font-serif font-bold text-slate-900 dark:text-white">
                {currentPage === 0 ? 'Front Cover: Accolades Directory' : `Award ${currentPage} of 6: ${activeAward?.title.slice(0, 32)}...`}
              </p>
            </div>
          </div>

          {/* Quick Page Jump Tabs (Cover + 1 to 6) */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => handleJumpToPage(0)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentPage === 0
                  ? 'bg-tis-crimson text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Cover
            </button>
            {BOOK_AWARDS_DATA.map((award) => (
              <button
                key={award.id}
                onClick={() => handleJumpToPage(award.pageNumber)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                  currentPage === award.pageNumber
                    ? 'bg-tis-gold text-slate-950 font-extrabold shadow-md scale-105'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <span>Award {award.pageNumber}</span>
              </button>
            ))}
          </div>

        </div>

        {/* 3D BOOK CONTAINER */}
        <div className="perspective-1000 relative min-h-[580px] sm:min-h-[540px] flex items-center justify-center">
          
          {/* ========================================================= */}
          {/* STATE A: FRONT COVER (Page 0) — Handsome Embossed Tiles */}
          {/* ========================================================= */}
          {currentPage === 0 && (
            <motion.div
              key="front-cover"
              initial={{ opacity: 0, rotateY: flipDirection === 'prev' ? -25 : 25, scale: 0.95 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -70, scale: 0.9 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#5c0312] via-[#85031b] to-[#40010c] text-white shadow-[0_25px_60px_-15px_rgba(185,1,36,0.4)] border-4 border-tis-gold/40 relative p-6 sm:p-10 lg:p-12"
            >
              {/* Leather Grain & Gold Spine Accents */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-black/50 via-black/20 to-transparent border-r-2 border-tis-gold/30" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-tis-gold/10 rounded-full blur-3xl pointer-events-none" />

              {/* Decorative Corner Filigrees */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-tis-gold/60 rounded-tr-xl pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-tis-gold/60 rounded-br-xl pointer-events-none" />

              <div className="relative z-10 pl-6 sm:pl-10">
                {/* Header Crest */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-tis-gold/20 border border-tis-gold text-tis-gold-light flex items-center justify-center shadow-md">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-tis-gold-light">
                      Official Book of Accolades
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                      TULA'S INTERNATIONAL SCHOOL
                    </h3>
                  </div>
                </div>

                {/* Main Title & Ribbon */}
                <div className="mb-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-tis-gold text-slate-950 mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>6 Landmark Honors</span>
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    Celebrating A Decade of Leadership, Accolades & Integrity
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-white/80 max-w-2xl">
                    Click any award tile below or turn the page to open the book and inspect the official jury citations, rankings, and certificates.
                  </p>
                </div>

                {/* 6 AWARDS TILES DIRECTORY ON FRONT COVER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-8">
                  {BOOK_AWARDS_DATA.map((award) => (
                    <motion.div
                      key={award.id}
                      whileHover={{ scale: 1.03, y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleJumpToPage(award.pageNumber)}
                      className="cursor-pointer rounded-2xl bg-black/30 hover:bg-black/50 border border-tis-gold/30 hover:border-tis-gold p-4 transition-all flex items-start gap-3.5 group backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tis-gold to-amber-600 text-slate-950 font-serif font-black text-sm flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        {award.rankBadge}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-tis-gold-light block">
                          Page {award.pageNumber} • {award.category}
                        </span>
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-white truncate group-hover:text-tis-gold-light transition-colors">
                          {award.title}
                        </h4>
                        <p className="text-[11px] text-white/70 truncate mt-0.5">
                          {award.source}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Open Book Call to Action */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleNextPage}
                    className="px-8 py-3.5 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-tis-gold via-amber-300 to-tis-gold hover:opacity-95 shadow-lg shadow-tis-gold/20 flex items-center gap-2 group transition-all"
                  >
                    <span>Open Book & Turn to Page 1</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-xs text-tis-gold-light italic">
                    Tap page edges or buttons to flip through all 6 awards
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================= */}
          {/* STATE B: OPEN BOOK SPREAD (Pages 1 to 6) */}
          {/* ========================================================= */}
          {currentPage > 0 && activeAward && (
            <AnimatePresence mode="wait">
              <motion.div
                key={`page-${activeAward.pageNumber}`}
                initial={{ opacity: 0, rotateY: flipDirection === 'next' ? 30 : -30, scale: 0.96 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: flipDirection === 'next' ? -30 : 30, scale: 0.96 }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                className="w-full rounded-3xl bg-white dark:bg-slate-850 shadow-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 overflow-hidden relative"
              >
                {/* Center Spine Binding Shadow */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/10 via-black/25 to-black/10 z-20 pointer-events-none" />

                {/* ========================================== */}
                {/* LEFT SPREAD (5.5 cols): Image & Trophy Seal */}
                {/* ========================================== */}
                <div className="lg:col-span-6 p-6 sm:p-10 bg-gradient-to-br from-tis-light-surface to-white dark:from-slate-900 dark:to-slate-850 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 relative">
                  
                  {/* Top Bar on Left Page */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-tis-crimson text-white text-xs font-bold flex items-center justify-center">
                        {activeAward.pageNumber}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-tis-crimson dark:text-tis-gold">
                        TIS Accolade #{activeAward.pageNumber} of {totalPages}
                      </span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-tis-gold/20 text-tis-gold-dark dark:text-tis-gold border border-tis-gold/30">
                      {activeAward.year}
                    </span>
                  </div>

                  {/* Featured Award Media Card */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 my-auto group">
                    <img
                      src={activeAward.image}
                      alt={activeAward.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Gold Seal Trophy Emblem */}
                    <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-tis-gold text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg">
                      <Trophy className="w-4 h-4 text-slate-950" />
                      <span>{activeAward.rankBadge} Award</span>
                    </div>

                    {/* Image Caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-[11px] uppercase tracking-wider text-tis-gold-light font-bold">
                        {activeAward.source}
                      </p>
                      <h4 className="font-serif text-lg font-bold leading-tight">
                        {activeAward.highlight}
                      </h4>
                    </div>
                  </div>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                    {activeAward.metrics.map((m, i) => (
                      <div key={i} className="text-center p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate font-medium">
                          {m.label}
                        </span>
                        <strong className="font-serif text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {m.value}
                        </strong>
                      </div>
                    ))}
                  </div>

                </div>

                {/* ========================================== */}
                {/* RIGHT SPREAD (6 cols): Official Jury Citation */}
                {/* ========================================== */}
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-white dark:bg-slate-850">
                  
                  <div>
                    {/* Category & Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-tis-crimson/10 text-tis-crimson dark:bg-tis-crimson/20 dark:text-tis-crimson-light mb-3">
                      <Crown className="w-3.5 h-3.5" />
                      <span>{activeAward.category}</span>
                    </div>

                    {/* Award Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
                      {activeAward.title}
                    </h3>
                    <p className="text-xs font-semibold text-tis-gold-dark dark:text-tis-gold uppercase tracking-wider mb-5">
                      Conferred by: {activeAward.source}
                    </p>

                    {/* Official Jury Citation Callout */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-slate-800 border-l-4 border-tis-gold mb-5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide mb-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>Official Citation</span>
                      </div>
                      <p className="font-serif italic text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                        “{activeAward.citation}”
                      </p>
                    </div>

                    {/* Full Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {activeAward.description}
                    </p>

                    {/* Trust stamp */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Certified & Authenticated CBSE Residential Record</span>
                    </div>
                  </div>

                  {/* BOTTOM BOOK TURNING CONTROLS */}
                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                    <button
                      onClick={handlePrevPage}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-100 flex items-center gap-1.5 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>{currentPage === 1 ? 'Back to Cover' : 'Previous Award'}</span>
                    </button>

                    <div className="text-xs text-slate-400 font-medium">
                      Page {activeAward.pageNumber} of {totalPages}
                    </div>

                    {currentPage < totalPages ? (
                      <button
                        onClick={handleNextPage}
                        className="px-5 py-2.5 rounded-xl bg-tis-crimson hover:bg-tis-crimson-dark text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition-all"
                      >
                        <span>Turn to Award {currentPage + 1}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleJumpToPage(0)}
                        className="px-5 py-2.5 rounded-xl bg-tis-gold text-slate-950 text-xs font-extrabold shadow-md flex items-center gap-1.5 transition-all"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Close Book</span>
                      </button>
                    )}
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          )}

        </div>

        {/* Bottom Pagination Dots & Guide */}
        <div className="mt-6 flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleJumpToPage(0)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === 0 ? 'bg-tis-crimson w-6' : 'bg-slate-300 dark:bg-slate-700'
              }`}
              aria-label="Cover"
            />
            {BOOK_AWARDS_DATA.map((award) => (
              <button
                key={award.id}
                onClick={() => handleJumpToPage(award.pageNumber)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPage === award.pageNumber ? 'bg-tis-gold w-6' : 'bg-slate-300 dark:bg-slate-700'
                }`}
                aria-label={`Award Page ${award.pageNumber}`}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Use navigation arrows or click direct award tiles to turn the book pages.
          </span>
        </div>

      </div>

    </section>
  );
};
