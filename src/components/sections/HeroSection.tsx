import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Shield, Award, CheckCircle2, ChevronDown } from 'lucide-react';
import { HERO_DATA } from '../../data/tisData';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onOpenVirtualTour: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onOpenVirtualTour }) => {
  const bubbles = HERO_DATA.bubbles;

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none opacity-80 dark:opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-tis-crimson/10 dark:bg-tis-crimson/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-tis-teal/15 dark:bg-tis-teal/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-tis-gold/10 dark:bg-tis-gold/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Hero Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Admission Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-tis-crimson dark:text-tis-gold-light border border-tis-crimson/20 dark:border-tis-gold/20 shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-tis-gold animate-spin" style={{ animationDuration: '6s' }} />
              <span>{HERO_DATA.badge}</span>
            </motion.div>

            {/* Signature Slogan: "LET'S DO IT with Tula's" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mb-2"
            >
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-tis-crimson dark:text-tis-crimson-light font-sans">
                Affiliated to CBSE, New Delhi (Est. 2012)
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.05] mt-1">
                LET'S DO <span className="italic font-normal font-serif text-tis-gold">it</span>{' '}
                <span className="relative inline-block text-tis-crimson dark:text-tis-crimson-light">
                  with Tula's
                  {/* Scribble Stroke under Tula's */}
                  <svg
                    className="absolute -bottom-3 sm:-bottom-4 left-0 w-full h-4 sm:h-5 text-tis-gold"
                    viewBox="0 0 268 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 10C50.8 6.5 113.6 9.9 155.1 6.8C196.6 3.7 265 6.2 265 6.2C265 6.2 68.4 8.5 25 11.5C110.1 16.7 236.3 11.5 236.3 11.5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              Tula's International School was established under the aegis of <strong className="font-semibold text-slate-900 dark:text-white">Rishabh Educational Trust</strong> to impart holistic education through <span className="font-semibold text-tis-crimson dark:text-tis-gold">seamless opportunities</span>, fusing ancient Gurukul wisdom with cutting-edge global innovation.
            </motion.p>

            {/* Core Accolade Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-tis-teal/10 text-tis-teal-dark dark:text-tis-teal font-medium border border-tis-teal/20">
                <CheckCircle2 className="w-4 h-4 text-tis-teal" />
                <span>#1 Co-Ed Boarding School in Dehradun</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-tis-gold/10 text-tis-gold-dark dark:text-tis-gold font-medium border border-tis-gold/20">
                <Award className="w-4 h-4 text-tis-gold" />
                <span>#1 in North India by Outlook</span>
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenEnquiry}
                className="relative group overflow-hidden px-8 py-4 rounded-full font-bold text-base text-white bg-tis-crimson hover:bg-tis-crimson-dark shadow-xl shadow-tis-crimson/30 hover:shadow-glow-crimson transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <span>Apply for Admission 2026-27</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
              </button>

              <button
                onClick={onOpenVirtualTour}
                className="px-6 py-4 rounded-full font-bold text-sm sm:text-base text-slate-800 dark:text-white bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 w-full sm:w-auto"
              >
                <div className="w-6 h-6 rounded-full bg-tis-crimson/10 text-tis-crimson flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-tis-crimson ml-0.5" />
                </div>
                <span>Virtual Campus Tour</span>
              </button>
            </motion.div>

            {/* Quick Hero Numbers Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 pt-8 border-t border-slate-200/60 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full"
            >
              {HERO_DATA.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-tis-crimson dark:text-tis-gold">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Signature Interactive Sports & Activity Showcase (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Centerpiece Hero Card with Floating Orbiting Sports Pills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl p-4 bg-gradient-to-b from-white/90 to-white/40 dark:from-slate-800/90 dark:to-slate-900/40 backdrop-blur-xl border border-white/60 dark:border-slate-700/60 shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden group"
            >
              {/* Main Feature Image (Campus & Student Activity) */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                  alt="Tula's International School Campus & Students"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Overlaid Banner at bottom */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-tis-crimson uppercase tracking-wide">
                      Modern Gurukul
                    </span>
                    <span className="text-xs text-tis-gold-light font-medium">
                      Class IV to XII CBSE
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                    "We feel supported in what we do & nudged to do more."
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Holistic excellence across Academics, Arts, Sports, and Leadership.
                  </p>
                </div>
              </div>

              {/* Floating Orbiting Bubble 1: Archery */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xl border border-slate-200/80 dark:border-slate-700 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl overflow-hidden shrink-0 border border-tis-crimson/30">
                  <img src={bubbles[2].image} alt="Archery" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold leading-tight">Archery Range</span>
                  <span className="text-[10px] text-tis-crimson dark:text-tis-gold font-medium">National Standard</span>
                </div>
              </motion.div>

              {/* Floating Orbiting Bubble 2: Horse Riding */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/3 -right-4 sm:-right-8 px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xl border border-slate-200/80 dark:border-slate-700 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl overflow-hidden shrink-0 border border-tis-gold/30">
                  <img src={bubbles[1].image} alt="Horse Riding" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold leading-tight">Equestrian Academy</span>
                  <span className="text-[10px] text-tis-gold-dark dark:text-tis-gold font-medium">Certified Stables</span>
                </div>
              </motion.div>

              {/* Floating Orbiting Bubble 3: 24x7 Medical */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-2 sm:-left-4 px-3.5 py-2 rounded-2xl bg-tis-crimson text-white shadow-xl border border-white/20 flex items-center gap-2.5"
              >
                <Shield className="w-5 h-5 text-tis-gold-light shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold leading-tight">24*7 Residential Care</span>
                  <span className="text-[10px] text-white/80">Infirmary & Pastoral Mentors</span>
                </div>
              </motion.div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 text-xs font-medium"
      >
        <span>Explore Experience</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-tis-crimson" />
        </motion.div>
      </motion.div>
    </section>
  );
};
