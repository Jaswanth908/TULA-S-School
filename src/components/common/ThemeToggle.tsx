import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`relative p-2.5 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-tis-crimson/50 ${
        theme === 'dark'
          ? 'bg-slate-800/80 border-slate-700 text-amber-300 hover:bg-slate-750 hover:border-amber-400/50 shadow-inner'
          : 'bg-white/90 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-tis-crimson shadow-sm'
      } ${className}`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: [0.8, 1.1, 1],
        }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 fill-amber-300/20 text-amber-300" />
        ) : (
          <Sun className="w-5 h-5 fill-amber-500/20 text-amber-600" />
        )}
      </motion.div>
    </button>
  );
};
