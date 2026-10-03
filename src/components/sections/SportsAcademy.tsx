import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Target, Crosshair, Waves, Zap, Shield, Activity, CircleDot, ChevronRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { SPORTS_DATA } from '../../data/tisData';
import type { SportItem } from '../../types/tis';

interface SportsAcademyProps {
  onOpenEnquiry: () => void;
}

export const SportsAcademy: React.FC<SportsAcademyProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSportModal, setActiveSportModal] = useState<SportItem | null>(null);

  const categories = [
    { id: 'all', label: 'All 16+ Disciplines' },
    { id: 'precision', label: 'Precision & Martial Arts' },
    { id: 'outdoor', label: 'Outdoor Fields & Equestrian' },
    { id: 'indoor', label: 'Indoor & Racquet Sports' },
  ];

  const filteredSports = selectedCategory === 'all'
    ? SPORTS_DATA
    : SPORTS_DATA.filter(s => s.category === selectedCategory);

  const getSportIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Crosshair': return <Crosshair className="w-5 h-5" />;
      case 'Waves': return <Waves className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'CircleDot': return <CircleDot className="w-5 h-5" />;
      default: return <Trophy className="w-5 h-5" />;
    }
  };

  return (
    <section id="sports" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Header with signature quote */}
      <SectionHeading
        badge="16+ Olympic Sports Disciplines"
        title="Sports? It's not just a facility."
        titleHighlight="At Tula's, it's the foundation!"
        subtitle="Curated by national selectors and Olympic champions to instill joy, resilience, tactical thinking, and lifelong physical discipline in every boarder."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
              selectedCategory === cat.id
                ? 'bg-tis-crimson text-white shadow-md shadow-tis-crimson/25 scale-105'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-tis-crimson/50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sports Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredSports.map((sport) => (
            <motion.div
              layout
              key={sport.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-850 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200/80 dark:border-slate-800 flex flex-col cursor-pointer"
              onClick={() => setActiveSportModal(sport)}
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                
                {/* Category Icon Badge */}
                <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md text-tis-crimson dark:text-tis-gold flex items-center justify-center shadow-md">
                  {getSportIcon(sport.icon)}
                </div>

                {/* Overlaid Title on Image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-tis-gold-light">
                    {sport.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white leading-tight">
                    {sport.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4">
                  {sport.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {sport.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Sports Detail Modal */}
      <AnimatePresence>
        {activeSportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative"
            >
              <div className="relative aspect-video">
                <img
                  src={activeSportModal.image}
                  alt={activeSportModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <button
                  onClick={() => setActiveSportModal(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center text-sm font-bold hover:bg-black"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <h3 className="font-serif text-2xl font-bold">{activeSportModal.name}</h3>
                  <p className="text-xs text-tis-gold-light uppercase tracking-widest font-semibold">
                    Olympic Standard Coaching Academy
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {activeSportModal.description} Every student at Tula's receives comprehensive physical assessment, sports science conditioning, and tailored tournament preparation.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeSportModal.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-tis-crimson/10 text-tis-crimson dark:bg-tis-crimson/20 dark:text-tis-crimson-light">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setActiveSportModal(null);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3 rounded-xl bg-tis-crimson text-white font-bold text-sm shadow-md hover:bg-tis-crimson-dark transition-colors flex items-center justify-center gap-2"
                >
                  <span>Enquire for Sports Academy & Admission</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
