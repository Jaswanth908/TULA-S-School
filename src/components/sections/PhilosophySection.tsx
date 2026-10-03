import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Flame, Compass, Globe, Sparkles, Check } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { PHILOSOPHY_PILLARS } from '../../data/tisData';

export const PhilosophySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillarsDetail = [
    {
      ...PHILOSOPHY_PILLARS[0],
      quote: "We feel supported in what we do and nudged further to do more.",
      author: "TIS Academic Scholar",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "CBSE curriculum enriched with advanced experiential STEM modules",
        "Personalized remedial coaching for JEE, NEET, SAT & CLAT aspirants",
        "State-of-the-art Innovation, Robotics, and Language Laboratories"
      ]
    },
    {
      ...PHILOSOPHY_PILLARS[1],
      quote: "Sports? It’s not just a facility. At Tula's it’s the foundation!",
      author: "National Archery & Equestrian Mentor",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "16+ Olympic sports arenas guided by national selectors and master coaches",
        "Mandatory daily fitness, yoga, and mental endurance sessions",
        "Regular inter-school, zonal, and national championship participation"
      ]
    },
    {
      ...PHILOSOPHY_PILLARS[2],
      quote: "Tulas helped me thrive and become the best version of myself.",
      author: "TIS Alumnus (Class of 2024)",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "Modern Gurukul tradition emphasizing humility, resilience, and empathy",
        "Dedicated pastoral care with resident housemasters in every dormitory",
        "Organic dining, nutritious vegetarian meals, and mindful living"
      ]
    },
    {
      ...PHILOSOPHY_PILLARS[3],
      quote: "Shaping responsible global leaders ready for world-class universities.",
      author: "Directorate of International Affairs",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      bullets: [
        "12+ International university partnerships & global exchange programs",
        "Model United Nations (MUN), public speaking, and youth diplomacy summits",
        "Trinity College London speech & drama certifications"
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="philosophy" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Section Header */}
      <SectionHeading
        badge="The Modern Gurukul Ethos"
        title="Nurturing the Four Pillars of"
        titleHighlight="Holistic Excellence"
        subtitle="At Tula's, we believe in bringing out the best in every student—whether it’s academics, music, art, sports, or leadership. With the right guidance and inspiration, creativity finds its way."
      />

      {/* Interactive Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 max-w-4xl mx-auto">
        {pillarsDetail.map((pillar, idx) => (
          <button
            key={pillar.title}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 border ${
              activeTab === idx
                ? 'bg-tis-crimson text-white border-tis-crimson shadow-lg shadow-tis-crimson/25 scale-105'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-tis-crimson/40 hover:bg-slate-50'
            }`}
          >
            {getIcon(pillar.icon)}
            <span>{pillar.title.split('—')[0]}</span>
          </button>
        ))}
      </div>

      {/* Tab Content Display Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-white dark:bg-slate-850 p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/80 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left: Detail Copy & Highlights (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-tis-crimson dark:text-tis-gold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Pillar {activeTab + 1} of 4</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
                {pillarsDetail[activeTab].title}
              </h3>
              
              {/* Highlight Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border-l-4 border-tis-crimson mb-6">
                <p className="font-serif italic text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-relaxed">
                  “{pillarsDetail[activeTab].quote}”
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-tis-crimson dark:text-tis-gold mt-2">
                  — {pillarsDetail[activeTab].author}
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                {pillarsDetail[activeTab].bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-tis-teal/20 text-tis-teal-dark dark:text-tis-teal flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span>Modern Gurukul Framework</span>
              <span>•</span>
              <span>Rishabh Educational Trust</span>
            </div>
          </div>

          {/* Right: Immersive Visual (5 cols) */}
          <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={pillarsDetail[activeTab].image}
              alt={pillarsDetail[activeTab].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs uppercase font-bold tracking-widest text-tis-gold-light">
                TIS Campus Experience
              </span>
              <p className="text-sm font-semibold truncate">
                Holistic Residential Education in Dehradun
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

    </section>
  );
};
