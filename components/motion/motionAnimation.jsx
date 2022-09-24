import React from 'react';
import { props } from '.././sections/TalentSection';

// ===== FADE ANIMATION =========
const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.5, delay: 0.5 },
};

// ===== SLIDER ANIMATION =========
const sliderAnimation = {
  initial: { opacity: 0.25, x: `-200%`, y: 0 },
  animate: { opacity: 1, x: `0%`, y: 0, delay: 0.25 },
  exit: { opacity: 0, x: `-100%`, y: 0, duration: 0.001 },
  transition: { duration: 1, ease: 'linear' },
};

// ===== ROTATE ANIMATION =========
const rotateAnimation = {
  initial: { opacity: 0, rotateY: -180, y: 100 },
  animate: { opacity: 1, rotateY: 0, y: 0 },
  exit: { opacity: 0, rotateY: 180, y: 200 },
  transition: { duration: 0.75, ease: 'linear' },
};

export { fadeAnimation, sliderAnimation, rotateAnimation };
