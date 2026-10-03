import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'button' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect if device has touch capability (mobile/tablet)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const mouseMoveHandler = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeaveHandler = () => {
      setIsVisible(false);
    };

    const mouseEnterHandler = () => {
      setIsVisible(true);
    };

    // Global listener for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea, .interactive-hover');
      const card = target.closest('.card-hover, [data-cursor="card"]');
      const text = target.closest('h1, h2, h3, p, span, .text-hover');

      if (interactive) {
        setCursorVariant('button');
      } else if (card) {
        setCursorVariant('hover');
      } else if (text && target.tagName !== 'DIV') {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'transparent',
      borderColor: 'rgba(185, 1, 36, 0.75)',
      borderWidth: '2px',
      mixBlendMode: 'normal' as const,
    },
    button: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      height: 56,
      width: 56,
      scale: 1.15,
      backgroundColor: 'rgba(185, 1, 36, 0.15)',
      borderColor: 'rgba(185, 1, 36, 0.9)',
      borderWidth: '2px',
      mixBlendMode: 'normal' as const,
    },
    hover: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      height: 72,
      width: 72,
      scale: 1.25,
      backgroundColor: 'rgba(192, 157, 89, 0.15)',
      borderColor: '#c09d59',
      borderWidth: '2px',
      mixBlendMode: 'normal' as const,
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      scale: 0.8,
      backgroundColor: 'rgba(96, 186, 177, 0.3)',
      borderColor: '#60bab1',
      borderWidth: '1.5px',
      mixBlendMode: 'normal' as const,
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
      backgroundColor: '#b90124',
    },
    button: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.8,
      backgroundColor: '#b90124',
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.5,
      backgroundColor: '#c09d59',
    },
    text: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      scale: 0.6,
      backgroundColor: '#60bab1',
    }
  };

  return (
    <>
      {/* Outer Ring with spring delay */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border hidden md:block"
        style={{
          width: 32,
          height: 32,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.5,
        }}
      />
      {/* Inner Pinpoint Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] rounded-full hidden md:block"
        style={{
          width: 8,
          height: 8,
        }}
        variants={dotVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 800,
          mass: 0.1,
        }}
      />
    </>
  );
};
