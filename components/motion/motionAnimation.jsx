import React from 'react';
import { props } from '.././sections/TalentSection';

// ===== FADE ANIMATION =========
const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 1.25, delay: 0.5, easeIn: 'linear' },
};

// ===== SLIDER ANIMATION =========
const sliderAnimation = {
  initial: { opacity: 0.25, x: `-200%`, y: 0 },
  animate: { opacity: 1, x: `0%`, y: 0, delay: 0 },
  exit: { opacity: 0, x: `200%`, y: 0 },
  transition: { duration: 1.5, delay: 0 },
};

export { fadeAnimation, sliderAnimation };
