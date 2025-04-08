"use client";
import React, { useState } from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoLogoVenmo } from "react-icons/io5";
import { SiZelle } from "react-icons/si";
/*import { FaCcApplePay } from "react-icons/fa6";*/
import Head from "next/head";

const DonatePage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [contentAnimated, setContentAnimated] = useState(false);

  const handleDonateClick = () => {
    setContentAnimated(true);
    setTimeout(() => {
      setShowOptions(true);
    }, 100);
  };

  return (
    <>
      <Head>
        {/* Preload the background image */}
        <link rel="preload" href="/BG1.jpg" as="image" />
      </Head>
      <Navbar />
      <div className="donate-page">
        <Image
          alt="Donation Background"
          src="/BG1.jpg"
          layout="fill"
          quality={100}
          objectFit="cover"
        />
        <motion.div
          className="donate-content"
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
          <section className="donate-section">
            <h1>DONATE.</h1>
            <h2>SUPPORT OUR MISSION</h2>
            <p>
              Your generosity helps us serve our community and spread the love
              of Christ.
            </p>

            {!showOptions ? (
              <motion.button
                className="donate-button"
                onClick={handleDonateClick}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Donate Now
              </motion.button>
            ) : (
              <motion.div
                className="donation-options"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <a
                  href="https://account.venmo.com/u/Amazing-Grace-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <motion.button
                    className="option-button venmo"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  >
                    <span className="button-text">Venmo</span>
                    <IoLogoVenmo className="icon" />
                  </motion.button>
                </a>
                <a
                  href="https://account.venmo.com/u/Amazing-Grace-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <motion.button
                    className="option-button zelle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  >
                    <span className="button-text">Zelle</span>
                    <SiZelle className="icon" />
                  </motion.button>
                </a>
                <a
                  href="https://account.venmo.com/u/Amazing-Grace-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
               
               {/*   <motion.button
                    className="option-button applepay"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                  >
                    <span className="button-text">Apple Pay</span>
                    <FaCcApplePay className="icon" />
                  </motion.button>*/}
                </a>
              </motion.div>
            )}
          </section>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default DonatePage;



/*"use client";
import React, { useState } from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoVenmo, IoLogoPaypal, IoClose, IoInformationCircleOutline } from "react-icons/io5";
import { SiZelle } from "react-icons/si";
import { FaCcApplePay, FaCopy } from "react-icons/fa6";
import Head from "next/head";

const DonatePage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [contentAnimated, setContentAnimated] = useState(false);
  const [showZelleModal, setShowZelleModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleDonateClick = () => {
    setContentAnimated(true);
    setTimeout(() => {
      setShowOptions(true);
    }, 100);
  };

  const handleZelleClick = () => {
    setShowZelleModal(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aga.assembly.1@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000);
  };

  return (
    <>
      <Head>
        <link rel="preload" href="/BG1.jpg" as="image" />
      </Head>
      <Navbar />
      <div className="donate-page">
        <Image
          alt="Donation Background"
          src="/BG1.jpg"
          layout="fill"
          quality={100}
          objectFit="cover"
        />
        <motion.div
          className="donate-content"
          initial={{ opacity: 0, y: 180 }}
          animate={{
            opacity: contentAnimated ? 1 : 1,
            y: contentAnimated ? 0 : 0,
          }}
          transition={{
            opacity: { duration: 1.4, ease: "easeInOut" },
            y: {
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            },
          }}
          layout
        >
          <section className="donate-section">
            <h1>DONATE.</h1>
            <h2>SUPPORT OUR MISSION</h2>
            <p>
              Your generosity helps us serve our community and spread the love
              of Christ.
            </p>

            {!showOptions ? (
              <motion.button
                className="donate-button"
                onClick={handleDonateClick}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Donate Now
              </motion.button>
            ) : (
              <motion.div
                className="donation-options"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <a
                  href="https://account.venmo.com/u/Amazing-Grace-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <motion.button
                    className="option-button venmo"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  >
                    <span className="button-text">Venmo</span>
                    <IoLogoVenmo className="icon" />
                  </motion.button>
                </a>
                <motion.button
                  className="option-button zelle"
                  onClick={handleZelleClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  <span className="button-text">Zelle</span>
                  <SiZelle className="icon" />
                </motion.button>
              </motion.div>
            )}
          </section>
        </motion.div>
      </div>

      <AnimatePresence>
        {showZelleModal && (
          <motion.div
            className="zelle-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowZelleModal(false)}
          >
            <motion.div
              className="zelle-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-modal" 
                onClick={() => setShowZelleModal(false)}
              >
                <IoClose />
              </button>
              <h2>Zelle Donation</h2>
              <div className="zelle-details">
                <p>Send your donation via Zelle to:</p>
                <div className="email-container">
                  <span>aga.assembly.1@gmail.com</span>
                  <div className="copy-section">
                    <button 
                      onClick={handleCopyEmail}
                      className="copy-button"
                    >
                      <FaCopy /> Copy
                    </button>
                    {showTooltip && (
                      <motion.div 
                        className="tooltip"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        Copied!
                      </motion.div>
                    )}
                  </div>
                </div>
                <div className="zelle-info">
                  <IoInformationCircleOutline className="info-icon" />
                  <p>Ensure the email matches exactly when sending your Zelle donation.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default DonatePage;*/