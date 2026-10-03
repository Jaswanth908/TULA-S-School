import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { COLLABORATIONS_DATA } from '../../data/tisData';

export const Collaborations: React.FC = () => {
  return (
    <section id="collaborations" className="py-20 lg:py-24 bg-tis-light-surface dark:bg-tis-dark-card border-y border-slate-200/60 dark:border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <SectionHeading
          badge="Global Academic Network"
          title="12+ Prestigious Global"
          titleHighlight="Collaborations"
          subtitle="Empowering students with international certifications, student exchange opportunities, and worldwide recognition."
        />

        {/* Collaborations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {COLLABORATIONS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center justify-center min-h-[140px] group"
            >
              <div className="w-12 h-12 rounded-xl bg-tis-crimson/10 text-tis-crimson dark:bg-tis-gold/10 dark:text-tis-gold flex items-center justify-center font-bold text-xs mb-3 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-white leading-tight mb-1">
                {item.name}
              </h4>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                {item.type}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
