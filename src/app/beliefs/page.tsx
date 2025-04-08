"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

// Beliefs data array
const beliefs = [
  {
    title: "God and Salvation",
    text: "We believe the Scriptures are divinely inspired, revealing God&apos;s plan for mankind. We affirm the existence of one true God in three persons&mdash;the Father, Son, and Holy Spirit&mdash;and the deity of Jesus Christ. We believe that through faith in Christ, salvation is available, restoring fellowship with God.",
  },
  {
    title: "Ordinances and the Holy Spirit",
    text: "We practice two ordinances: Water Baptism by Immersion and Holy Communion. We also believe in the baptism of the Holy Spirit, which empowers believers for service and witness, evidenced by speaking in tongues as in the New Testament.",
  },
  {
    title: "Sanctification and Church Mission",
    text: "Sanctification is both an initial and ongoing process, where believers grow in holiness and Christ-likeness. The Church&apos;s mission is to seek and save the lost, with leadership committed to worship, service, and meeting human needs.",
  },
  {
    title: "Healing and the Blessed Hope",
    text: "Divine healing is a privilege for Christians today, provided through Christ&apos;s atonement. We eagerly await the return of Jesus, when He will rapture His church, and believers will be with Him forever in glory.",
  },
  {
    title: "Eternal Destiny and Christ's Reign",// eslint-disable-next-line react/no-unescaped-entities
    text: "We believe in the Millennial Reign of Christ, His rule over earth for 1,000 years. Ultimately, those who reject Christ will face judgment, while believers will dwell forever with Him in the new heavens and earth.",
  },
];
//

const OurBeliefs = () => {
  const [showBeliefs, setShowBeliefs] = useState(false);
  const [contentAnimated, setContentAnimated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLearnMoreClick = () => {
    setContentAnimated(true);
    setTimeout(() => {
      setShowBeliefs(true);
    }, 100); // Delay before showing the beliefs
  };

  // If not client-side, return null
  if (!isClient) {
    return null;
  }

  return (
    <>
      <Head>
        {/* Preload the background image */}
        <link rel="preload" href="/BG1.jpg" as="image" />
      </Head>
      <Navbar />
      <div className="beliefs-page">
        {/* Static background image */}
        <div className="beliefs-background">
          <Image
            alt="Beliefs Background"
            src="/BG1.jpg"
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <motion.div
          className="beliefs-content"
          initial={{ opacity: 0, y: 180 }}
          animate={{
            opacity: contentAnimated ? 1 : 1,
            y: contentAnimated ? 0 : 0,
          }}
          transition={{
            opacity: { duration: 1.4, ease: "easeInOut" },
            y: {
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1], // Smooth easing curve
            },
          }}
          layout
        >
          <section className={`beliefs-section ${showBeliefs ? "expanded" : ""}`}>
            <h1>OUR BELIEFS.</h1>
            <h2>BIBLE-BASED FAITH</h2>
            <p>Explore the heart of our faith, shaped by God's Word.</p>

            {/* Learn More Button */}
            {!showBeliefs && (
              <motion.button
                className="learn-more-button"
                onClick={handleLearnMoreClick}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }} // Slow down the button transition
              >
                Learn More
              </motion.button>
            )}

            {/* Smoothly Expanding Beliefs Section */}
            {showBeliefs && (
              <motion.div
                className="beliefs-details expanded"
                initial={{ opacity: 0, maxHeight: 0 }}
                animate={{
                  opacity: 1,
                  maxHeight: 2000, // Adjust to a larger value for smooth transition
                }}
                exit={{ opacity: 0, maxHeight: 0 }}
                transition={{
                  opacity: { duration: 0.7, ease: "easeOut" },
                  maxHeight: { duration: 3.0, ease: [0.25, 0.1, 0.25, 1] },
                }}
              >
                {beliefs.map((belief, index) => (
                  <motion.div
                    className="belief-item"
                    key={index}
                    initial={{ opacity: 0, y: 50 }} // Start from below
                    animate={{ opacity: 1, y: 0 }} // Move to original position
                    transition={{
                      delay: 0.4 + index * 0.3, // Slightly longer delay for items
                      duration: 1.0, // Slower animation for items
                      ease: "easeOut",
                    }}
                  >
                    <h3>{belief.title}</h3>
                    <p>{belief.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </section>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default OurBeliefs;
