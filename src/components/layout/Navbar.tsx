import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { CONTACT_INFO } from '../../data/tisData';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenVirtualTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenVirtualTour }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About TIS', href: '#about' },
    { name: 'Awards Book', href: '#awards-book' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Sports Academy', href: '#sports' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Dignitaries', href: '#dignitaries' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Admissions & Contact Banner */}
      <div className="bg-gradient-to-r from-tis-crimson-dark via-tis-crimson to-tis-crimson-dark text-white text-xs sm:text-sm py-2 px-4 relative z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-tis-gold-light transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-tis-gold-light animate-bounce" />
              <span>Admissions Helpline: <strong className="font-bold">{CONTACT_INFO.phone}</strong></span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-tis-gold-light transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-tis-gold-light" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenVirtualTour}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/15 hover:bg-white/25 transition-all text-tis-gold-light border border-white/20"
            >
              <span>360° Virtual Tour</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
            <span className="hidden lg:inline text-xs text-white/80">
              CBSE Co-Ed Boarding (Class IV - XII)
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'top-0 py-2.5 bg-white/85 dark:bg-tis-dark-bg/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-slate-200/50 dark:border-slate-800/60'
            : 'top-8 md:top-9 py-4 bg-white/40 dark:bg-tis-dark-bg/40 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-800/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Crest */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-tis-crimson flex items-center justify-center text-white shadow-md shadow-tis-crimson/30 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-tis-gold-light" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-lg sm:text-2xl leading-none tracking-tight text-slate-900 dark:text-white">
                TULA'S
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-tis-crimson dark:text-tis-gold">
                International School
              </span>
              <span className="text-[9px] text-slate-500 dark:text-slate-400 hidden sm:block">
                The Modern Gurukul • Dehradun
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-tis-crimson dark:hover:text-tis-gold rounded-lg hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Switcher & Apply Button */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <ThemeToggle />

            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-tis-crimson hover:bg-tis-crimson-dark shadow-md shadow-tis-crimson/25 hover:shadow-glow-crimson transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-tis-crimson via-tis-gold to-tis-crimson transition-transform duration-500 opacity-30" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] left-0 right-0 z-40 lg:hidden bg-white dark:bg-tis-dark-bg border-b border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-4 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-tis-crimson hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVirtualTour();
                  }}
                  className="w-full py-3 rounded-xl border border-tis-gold/40 text-tis-gold-dark dark:text-tis-gold font-bold text-sm flex items-center justify-center gap-2 bg-tis-gold/5"
                >
                  <span>Explore 360° Virtual Tour</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3 rounded-xl bg-tis-crimson text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <span>Admissions Application Form</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
