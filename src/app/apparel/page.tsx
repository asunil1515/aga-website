"use client";
import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import MainContent from "../ap-components/MainContent";
import IntroScreen from "../ap-components/Intropg";

function useScrollLock() {
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
}

export default function ApparelPage() {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Set a timeout to transition away the intro screen after 3 seconds
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 900); // Change to a reasonable delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);



  return (
    <>
        
      <div className="apparel-page">
        {/* Show Navbar only when main content is visible */}
        {showMainContent && <Navbar variant="opaque" showBagIcon={false} />}
        
        {/* Import and render the IntroScreen component */}
        <IntroScreen className={showMainContent ? "shrink" : ""} />
        
        {/* Render MainContent */}
        <MainContent showMainContent={showMainContent} />
      </div>
      <Footer />
    </>
  );
}
    function setIsLoading(arg0: boolean) {
      throw new Error("Function not implemented.");
    }

