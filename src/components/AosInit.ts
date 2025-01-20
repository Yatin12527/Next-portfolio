'use client'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
      offset: 200, 
    });
  }, []);

  return null;
};

export default AosInit;
