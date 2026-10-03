import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../../data/tisData';

interface FloatingActionsProps {
  onOpenEnquiry: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEnquiry }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/919837983791?text=${encodeURIComponent(
    "Hello Tula's International School, I am interested in admission for Academic Year 2026-27."
  )}`;

  return (
    <>
      {/* Bottom Sticky Floating Buttons (Mobile + Desktop) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-3 rounded-full bg-slate-900/80 dark:bg-slate-700/80 text-white backdrop-blur-md hover:bg-slate-900 shadow-lg border border-white/20 transition-all hover:-translate-y-1"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Quick Enquiry Pill (Desktop Floating) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenEnquiry}
          className="hidden sm:flex items-center gap-2 px-5 py-3 rounded-full bg-tis-crimson text-white font-bold text-sm shadow-xl shadow-tis-crimson/30 hover:bg-tis-crimson-dark border border-white/20 transition-all"
        >
          <FileText className="w-4 h-4 text-tis-gold-light" />
          <span>Quick Enquiry 2026-27</span>
        </motion.button>

        {/* WhatsApp Chat Floating Pill */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white shadow-xl shadow-green-500/30 hover:bg-[#20ba59] transition-all flex items-center justify-center group"
        >
          <MessageCircle className="w-6 h-6 fill-white text-white group-hover:scale-110 transition-transform" />
          <span className="sr-only">WhatsApp Chat</span>
        </motion.a>
      </div>

      {/* Mobile Sticky Quick Action Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 dark:bg-tis-dark-bg/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 text-center"
        >
          <Phone className="w-4 h-4 text-tis-crimson" />
          <span>Call Helpline</span>
        </a>
        <button
          onClick={onOpenEnquiry}
          className="flex-1 py-3 px-3 rounded-xl bg-tis-crimson text-white font-bold text-xs flex items-center justify-center gap-2 text-center shadow-md shadow-tis-crimson/25"
        >
          <FileText className="w-4 h-4 text-tis-gold-light" />
          <span>Enquire Now</span>
        </button>
      </div>
    </>
  );
};
