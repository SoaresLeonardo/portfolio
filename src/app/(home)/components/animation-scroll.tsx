'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

const AnimationScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
};

export default AnimationScroll;
