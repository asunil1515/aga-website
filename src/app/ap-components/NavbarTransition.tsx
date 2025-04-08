// NavbarTransition.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

interface NavbarTransitionProps {
  initialDelay?: number;
  transitionDuration?: number;
}

export default function NavbarTransition({ 
  initialDelay = 900, 
  transitionDuration = 800 
}: NavbarTransitionProps) {
  const [navbarState, setNavbarState] = useState<'initial' | 'transitioning' | 'visible'>('initial');
  const [variant, setVariant] = useState<'transparent' | 'opaque'>('transparent');

  useEffect(() => {
    // Start transition after initial delay
    const transitionTimer = setTimeout(() => {
      setNavbarState('transitioning');
      
      // Change variant slightly after initial transition begins
      const variantTimer = setTimeout(() => {
        setVariant('opaque');
      }, transitionDuration / 2);

      // Complete transition
      const completeTimer = setTimeout(() => {
        setNavbarState('visible');
      }, transitionDuration);

      return () => {
        clearTimeout(variantTimer);
        clearTimeout(completeTimer);
      };
    }, initialDelay);

    return () => clearTimeout(transitionTimer);
  }, [initialDelay, transitionDuration]);

  return (
    <Navbar 
      variant={variant}
      className={`
        navbar-transition 
        navbar-${navbarState}
      `}
      showBagIcon={false}
    />
  );
}
