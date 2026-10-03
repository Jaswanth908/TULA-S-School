import React from 'react';
import { motion } from 'framer-motion';
import { Trees, Trophy, Users, HeartPulse } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface StatsBentoGridProps {
  onOpenEnquiry?: () => void;
}

export const StatsBentoGrid: React.FC<StatsBentoGridProps> = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <SectionHeading
        badge="World-Class Infrastructure"
        title="Designed for Transformative"
        titleHighlight="Growth & Discovery"
        subtitle="Spanning 22 verdant acres in the peaceful foothills of Dehradun, TIS integrates international sports arenas, state-of-the-art residential dorms, and nurturing faculty mentorship."
      />

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"
      >
        {/* Card 1: 22 Acre Pollution-Free Eco Campus (Lg: 7 cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 rounded-3xl overflow-hidden bg-slate-900 text-white relative min-h-[360px] p-8 flex flex-col justify-between group shadow-xl border border-slate-800"
        >
          {/* Background Photo */}
          <img
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
            alt="22 Acre Campus"
            className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 group-hover:opacity-55 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-tis-teal/20 backdrop-blur-md border border-tis-teal/40 flex items-center justify-center text-tis-teal">
              <Trees className="w-6 h-6" />
            </div>
            <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
              Dehradun Foothills
            </span>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10 pt-16">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif text-5xl sm:text-6xl font-black text-white">22</span>
              <span className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-tis-teal">Acres</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Pollution-Free Green Valley Campus
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Surrounded by mountain air and dense forestry, providing an unpolluted sanctuary where young minds rejuvenate, study, and thrive in tranquility.
            </p>
          </div>
        </motion.div>

        {/* Card 2: 16+ Olympic Sports (Lg: 5 cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-tis-crimson to-tis-crimson-dark text-white p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group"
        >
          <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-tis-gold/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
          
          <div className="flex items-center justify-between relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-tis-gold-light">
              <Trophy className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-tis-gold-light border border-white/20">
              Foundation of TIS
            </span>
          </div>

          <div className="relative z-10 pt-10">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif text-5xl sm:text-6xl font-black text-white">16+</span>
              <span className="text-lg font-bold uppercase tracking-wider text-tis-gold-light">Disciplines</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Olympic Standard Sports Academies
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Equestrian arena, 10M electronic shooting range, indoor all-weather pool, squash courts, natural turf football, and archery range.
            </p>
          </div>
        </motion.div>

        {/* Card 3: 6:1 Student-Teacher Ratio (Lg: 5 cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 rounded-3xl bg-white dark:bg-slate-850 p-8 flex flex-col justify-between shadow-lg border border-slate-200/80 dark:border-slate-800 relative group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-tis-crimson/10 text-tis-crimson flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              Bespoke Attention
            </span>
          </div>

          <div className="pt-8">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif text-5xl sm:text-6xl font-black text-slate-900 dark:text-white">6:1</span>
              <span className="text-sm font-bold uppercase tracking-wider text-tis-crimson dark:text-tis-gold">Student:Teacher</span>
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2">
              Personalized Mentorship & Care
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every learner receives customized academic pathways, regular one-on-one reviews, and dedicated competitive exam prep.
            </p>
          </div>
        </motion.div>

        {/* Card 4: 24*7 Medical Assistance & Safety (Lg: 7 cols) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 rounded-3xl bg-slate-900 text-white relative min-h-[300px] p-8 flex flex-col justify-between group shadow-xl border border-slate-800 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
            alt="Medical Care"
            className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

          <div className="relative z-10 flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Round-The-Clock Safety
            </span>
          </div>

          <div className="relative z-10 pt-10">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-serif text-5xl sm:text-6xl font-black text-white">24*7</span>
              <span className="text-lg font-bold uppercase tracking-wider text-emerald-400">Medical Assistance</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Resident Infirmary & Pastoral Housemasters
            </h3>
            <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
              Full-time qualified resident medical officers, emergency transport, and round-the-clock pastoral guardians ensuring peace of mind for parents worldwide.
            </p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};
