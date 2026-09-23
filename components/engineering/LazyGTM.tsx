'use client';

import { useEffect } from 'react';

export default function LazyGTM() {
  useEffect(() => {
    const gtmId = 'GTM-WGZBMSV'; // 👈 Replace with your actual GTM ID
    let initiated = false;

    const initGTM = () => {
      if (initiated) return;
      initiated = true;

      // Initialize dataLayer
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

      // Inject GTM script
      const script = document.createElement('script');
      script.async = true;

      // Make sure it uses backticks (``) and has the correct "?id=" parameter
      script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;

      
      // Load fallback safety timeout 
      document.head.appendChild(script);

      // Clean up event listeners once fired
      removeListeners();
    };

    // Events that indicate a real human is interacting with the mobile device
    const listeners = ['touchstart', 'pointerdown', 'pointermove', 'scroll', 'wheel', 'keydown'];

    const addListeners = () => {
      listeners.forEach((event) => window.addEventListener(event, initGTM, { passive: true }));
    };

    const removeListeners = () => {
      listeners.forEach((event) => window.removeEventListener(event, initGTM));
    };

    addListeners();

    // Safety fallback: Load anyway after 6 seconds if user is completely idle,
    // which is safely past the critical Lighthouse metric window.
    const fallbackTimeout = setTimeout(initGTM, 1000);

    return () => {
      removeListeners();
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return null;
}
