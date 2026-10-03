import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { REVIEWS_DATA } from '../../data/tisData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = REVIEWS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-gradient-to-b from-tis-light-surface via-white to-tis-light-surface dark:from-slate-900 dark:via-tis-dark-bg dark:to-slate-900 border-t border-slate-200/60 dark:border-slate-800/80 relative overflow-hidden">
      
      {/* Header */}
      <SectionHeading
        badge="Google Reviews & Parent Testimonials"
        title="Trusted by Parents Across"
        titleHighlight="India & the World"
        subtitle="Hear directly from families who have entrusted Tula's International School with the education, care, and character development of their children."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Testimonial Showcase Card */}
        <div className="relative rounded-3xl bg-white dark:bg-slate-850 p-8 sm:p-12 shadow-2xl border border-slate-200/80 dark:border-slate-800">
          
          {/* Top Quote Icon */}
          <div className="absolute top-6 right-8 text-tis-crimson/15 dark:text-tis-crimson/20">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6 relative z-10"
            >
              {/* Star Rating Strip */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="ml-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  5.0 Google Rating
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="font-serif italic text-lg sm:text-2xl text-slate-800 dark:text-slate-100 leading-relaxed">
                “{current.comment}”
              </blockquote>

              {/* Parent & Student Profile */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.parentName}
                    className="w-12 h-12 rounded-full object-cover border-2 border-tis-crimson"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {current.parentName}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {current.relation} <strong className="font-semibold text-tis-crimson dark:text-tis-gold">{current.studentName}</strong>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{current.badge || 'Verified Parent'}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              {REVIEWS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-tis-crimson' : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="p-3 rounded-full bg-tis-crimson hover:bg-tis-crimson-dark text-white shadow-md shadow-tis-crimson/25 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
