import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Play, Eye, Video, MapPin } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface VirtualTourSectionProps {
  onOpenEnquiry: () => void;
}

export const VirtualTourSection: React.FC<VirtualTourSectionProps> = ({ onOpenEnquiry }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const campusHotspots = [
    { id: 1, name: "Academic Hub & Smart Classrooms", x: "25%", y: "45%", description: "Interactive digital classrooms and STEM laboratories." },
    { id: 2, name: "Olympic Archery & Shooting Range", x: "65%", y: "30%", description: "10M electronic range and outdoor target arenas." },
    { id: 3, name: "Equestrian Stables & Riding Arena", x: "80%", y: "65%", description: "Certified stables with full-time equine trainers." },
    { id: 4, name: "Residential Dorms & Medical Wing", x: "40%", y: "70%", description: "Air-conditioned secure hostels with 24/7 infirmary." },
  ];

  return (
    <section id="campus-life" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <SectionHeading
        badge="360° Interactive Campus Experience"
        title="Dive Into Our State-of-the-Art"
        titleHighlight="Virtual Campus Tour"
        subtitle="Experience our 22-acre lush Dehradun campus from anywhere in the world. Explore smart classrooms, sports arenas, boarding hostels, and dining facilities."
      />

      {/* Main Interactive Virtual Tour Window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-900 text-white relative min-h-[460px] sm:min-h-[520px] flex flex-col justify-between p-6 sm:p-10 group"
      >
        {/* Background Drone Aerial Image */}
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80"
          alt="Tula's International School Drone Aerial View"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />

        {/* Top Header Strip inside Card */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 backdrop-blur-md text-tis-gold-light border border-white/20">
            <Compass className="w-4 h-4 text-tis-gold animate-spin" style={{ animationDuration: '10s' }} />
            <span>360° Virtual Campus Experience</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs text-emerald-300 font-semibold">Live Interactive Mode</span>
          </div>
        </div>

        {/* Interactive Hotspot Pins on Campus Map */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {campusHotspots.map((spot) => (
            <div
              key={spot.id}
              style={{ left: spot.x, top: spot.y }}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            >
              <button
                onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                className="relative group/pin focus:outline-none"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-tis-crimson text-white flex items-center justify-center shadow-lg border-2 border-white hover:scale-125 transition-transform">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tis-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-tis-gold"></span>
                </span>
              </button>

              {/* Hotspot Popup Card */}
              <AnimatePresence>
                {activeHotspot === spot.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-tis-gold/40 text-left shadow-2xl z-30"
                  >
                    <h4 className="font-serif text-sm font-bold text-white mb-1">{spot.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-2">{spot.description}</p>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="text-[10px] text-tis-gold uppercase font-bold hover:underline"
                    >
                      Close Pin
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Center Play Virtual Tour Button */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center py-12">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsVideoModalOpen(true)}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-tis-crimson hover:bg-tis-crimson-dark text-white flex items-center justify-center shadow-2xl shadow-tis-crimson/50 border-4 border-white/40 mb-4 transition-all"
          >
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
          </motion.button>
          <span className="text-base sm:text-lg font-bold text-white tracking-wide">
            Watch Full Campus Video Walkthrough
          </span>
          <span className="text-xs text-tis-gold-light mt-1">
            Click hot pins to inspect specific infrastructure zones
          </span>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-tis-crimson-light" />
            <span>Dhoolkot, Chakrata Road, Dehradun, Uttarakhand, India</span>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold transition-all"
          >
            Book An In-Person Campus Visit
          </button>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-slate-900 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-700 relative"
            >
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-tis-gold" />
                  <span className="font-serif font-bold text-white">Tula's International School — Campus Tour</span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-700"
                >
                  ✕
                </button>
              </div>

              {/* Video Embed */}
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Campus Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-slate-950 flex justify-between items-center text-xs text-slate-400">
                <span>Experience our 22-Acre Dehradun Campus</span>
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onOpenEnquiry();
                  }}
                  className="px-4 py-1.5 rounded-lg bg-tis-crimson text-white font-bold"
                >
                  Schedule Campus Visit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
