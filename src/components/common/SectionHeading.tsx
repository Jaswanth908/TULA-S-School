import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-4xl mb-12 md:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wider uppercase bg-tis-crimson/10 text-tis-crimson dark:bg-tis-crimson/20 dark:text-tis-crimson-light border border-tis-crimson/20 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-tis-crimson animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]"
      >
        {title}{' '}
        {titleHighlight && (
          <span className="relative inline-block text-tis-crimson dark:text-tis-crimson-light">
            {titleHighlight}
            {/* Signature TIS gold doodle scribble underline */}
            <svg
              className="absolute -bottom-2.5 left-0 w-full h-3 text-tis-gold"
              viewBox="0 0 268 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M3 10C50.8 6.5 113.6 9.9 155.1 6.8C196.6 3.7 265 6.2 265 6.2C265 6.2 68.4 8.5 25 11.5C110.1 16.7 236.3 11.5 236.3 11.5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-3xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
