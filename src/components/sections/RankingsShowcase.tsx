import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { RANKINGS_DATA } from '../../data/tisData';

export const RankingsShowcase: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-tis-light-surface via-white to-tis-light-surface dark:from-tis-dark-card dark:via-tis-dark-bg dark:to-tis-dark-card border-y border-slate-200/60 dark:border-slate-800/80 relative overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-72 h-72 rounded-full border border-tis-gold/10 pointer-events-none" />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-96 h-96 rounded-full border border-tis-crimson/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Prestigious Accolades & Rankings"
          title="Recognized as India's Foremost"
          titleHighlight="Boarding School"
          subtitle="Independent educational surveys by Education Today and Outlook consistently position Tula's International School as the benchmark for co-educational boarding."
        />

        {/* 4 Ranking Badge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RANKINGS_DATA.map((item, index) => (
            <motion.div
              key={item.location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl p-6 bg-white dark:bg-slate-850 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/80 dark:border-slate-800 flex flex-col items-center text-center relative group"
            >
              {/* Crown Emblem */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tis-crimson to-tis-crimson-dark text-white flex flex-col items-center justify-center shadow-lg shadow-tis-crimson/30 mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="font-serif font-black text-2xl leading-none">{item.rank}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-tis-gold-light">Rank</span>
              </div>

              {/* Title & Location */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {item.location}
              </h3>

              {/* Source & Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 flex-1">
                {item.source}
              </p>

              {/* Highlight Tag */}
              <div className="w-full pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-1.5 text-xs font-semibold text-tis-crimson dark:text-tis-gold">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{item.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Verification Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-tis-gold/20 text-tis-gold flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-white">
                "We believe in celebrating the hard work and perseverance of the best!"
              </h4>
              <p className="text-xs text-slate-400">
                Excellence across academics, sportsmanship, and student leadership since 2012.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-tis-gold-light border border-white/20">
              CBSE Affiliated 3530364
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
