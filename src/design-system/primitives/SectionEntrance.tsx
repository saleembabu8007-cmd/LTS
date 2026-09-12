import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MOTION_TOKENS } from '../tokens';

export interface SectionEntranceProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article';
  delay?: number;
}

/**
 * SectionEntrance
 * 
 * LTSGROUP Restrained Motion System:
 * - Subtle, unified section entrance (opacity 0 -> 1, gentle 8px upward drift)
 * - Duration: 400ms with architectural ease-out [0.16, 1, 0.3, 1]
 * - Animates the entire section as one cohesive hierarchy — NEVER element-by-element domino cascades
 * - Strictly respects prefers-reduced-motion
 */
export const SectionEntrance: React.FC<SectionEntranceProps> = ({
  children,
  className = '',
  id,
  as = 'section',
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const MotionComponent = as === 'article' 
    ? motion.article 
    : as === 'div' 
    ? motion.div 
    : motion.section;

  // Reduced motion: instant, no translation
  if (shouldReduceMotion) {
    return (
      <MotionComponent
        id={id}
        className={className}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {children}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      id={id}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: MOTION_TOKENS.numeric.mediaDuration, // 400ms
        ease: MOTION_TOKENS.numeric.easeEditorial,     // [0.16, 1, 0.3, 1]
        delay: Math.min(delay, 0.1),                   // Cap any delay to 100ms max
      }}
    >
      {children}
    </MotionComponent>
  );
};
