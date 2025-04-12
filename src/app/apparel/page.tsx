"use client";
import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import MainContent from "../ap-components/MainContent";
import IntroScreen from "../ap-components/Intropg";
import TopStart from "../components/TopStart";

/*function useScrollLock() {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (isLocked) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }
  }, [isLocked]);
}*/

export default function ApparelPage() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
      window.scrollTo({ top: 0, behavior: 'auto' }); // 👈 scroll here
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="apparel-page">
        {showMainContent && <Navbar variant="opaque" showBagIcon={false} />}
        <IntroScreen className={showMainContent ? "shrink" : ""} />
        <MainContent showMainContent={showMainContent} />
      </div>
      <Footer />
    </>
  );
}

