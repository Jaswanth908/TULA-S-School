import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Medal, Crown } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { GUESTS_DATA } from '../../data/tisData';

export const InfluentialGuests: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'sports' | 'leader'>('all');

  const filteredGuests = filter === 'all'
    ? GUESTS_DATA
    : GUESTS_DATA.filter(g => g.category === filter);

  return (
    <section id="dignitaries" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-tis-crimson/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-tis-gold/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeading
          badge="Inspiration On Campus"
          title="Influential Personalities &"
          titleHighlight="Olympic Legends"
          subtitle="From Olympic medalists and Arjuna awardees to Union Education Ministers, renowned stalwarts regularly grace our campus to inspire our students."
          className="text-white"
        />

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-tis-crimson text-white shadow-lg shadow-tis-crimson/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            All Dignitaries
          </button>
          <button
            onClick={() => setFilter('sports')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              filter === 'sports'
                ? 'bg-tis-crimson text-white shadow-lg shadow-tis-crimson/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Olympic & Sports Champions
          </button>
          <button
            onClick={() => setFilter('leader')}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              filter === 'leader'
                ? 'bg-tis-crimson text-white shadow-lg shadow-tis-crimson/30'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            National Leaders & Ministers
          </button>
        </div>

        {/* Guests Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGuests.map((guest, idx) => (
            <motion.div
              key={guest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-slate-800/80 border border-slate-700/80 p-6 flex flex-col justify-between shadow-xl backdrop-blur-md group hover:border-tis-gold/50 transition-all duration-300"
            >
              <div>
                {/* Guest Photo & Crest */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-tis-gold-light border border-white/10 backdrop-blur-md flex items-center gap-1.5">
                    {guest.category === 'sports' ? (
                      <Medal className="w-3.5 h-3.5 text-tis-gold" />
                    ) : (
                      <Crown className="w-3.5 h-3.5 text-tis-crimson-light" />
                    )}
                    <span>{guest.category === 'sports' ? 'Olympian / Champion' : 'National Dignitary'}</span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-tis-gold-light transition-colors">
                  {guest.name}
                </h3>
                <p className="text-xs text-tis-gold font-semibold uppercase tracking-wider mb-3">
                  {guest.title}
                </p>
              </div>

              {/* Achievement / Citation */}
              <div className="pt-3 border-t border-slate-700/60 text-xs text-slate-300 italic leading-relaxed">
                "{guest.quoteOrAchievement}"
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
