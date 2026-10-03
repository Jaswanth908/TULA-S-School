import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] pointer-events-none bg-slate-200/20 dark:bg-slate-800/20">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-tis-crimson via-tis-gold to-tis-teal shadow-glow-crimson"
        style={{ scaleX }}
      />
    </div>
  );
};
