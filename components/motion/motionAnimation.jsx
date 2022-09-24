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
  animate: { opacity: 1, x: `0%`, y: 0, delay: 0, delay: 0.5 },
  exit: { opacity: 0, x: `-100%`, y: 0, duration: 0.001 },
  transition: { duration: 1.5, ease: 'linear' },
};

export { fadeAnimation, sliderAnimation };
