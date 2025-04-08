"use client";
import Image from "next/image";
import Link from "next/link";
import { easeInOut, easeOut, motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-bg"
        initial={{ opacity: 0, scale: 1.6, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 25, // Adjusted stiffness for smoother motion
          damping: 19, // Reduced damping for a more natural stop
          duration: 3.2,
          ease: "easeOut", // Smooth at the end of transition
          delay: 0.1,
        }}
      >
        <Image
          src="/BG1.jpg"
          alt="Church background"
          priority
          quality={100}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="hero-image"
        />
      </motion.div>

      <div className="content">
        <motion.h1
          initial={{ y: 220, opacity: 0 }} // Increased offset to make it more visible
          animate={{ y: 0, opacity: 1 }} // Moves to normal position
          transition={{
            type: "spring",
            stiffness: 35, // Adjusted stiffness for smoother motion
            damping: 19, // Reduced damping for a more natural stop
            duration: 1.4,
            ease: "easeOut", // Smooth at the end of transition
            delay: 0.4,
          }}
          style={{
            position: "relative",
            display: "block",
            textAlign: "center",
          }}
        >
          AMAZING GRACE <br /> ASSEMBLY
          <motion.span
            className="minus-icon"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2, // Keep the longer duration for the slow deceleration
              ease: [0.68, -0.55, 0.27, 1.55], // Fast start and slow deceleration
              delay: 0.1, // Delay to synchronize with the h1 animation
            }}
          ></motion.span>
        </motion.h1>

        {/* Wrap p and button in the same motion.div to move together */}
        <motion.div
          initial={{ opacity: 0, y: 60 }} // Start lower
          animate={{ opacity: 1, y: 0 }} // Rise up into place
          transition={{
            type: "spring",
            stiffness: 35, // Adjusted stiffness for smoother motion
            damping: 19, // Reduced damping for a more natural stop
            duration: 1.3,
            ease: "easeOut", // Smooth at the end of transition
            delay: 1.2, // Delayed to come after h1 and minus icon
          }}
        >
          <motion.p>
            Discover hope, find community, and grow in faith. <br /> Join us
            every Sunday.
          </motion.p>

          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 40 }} // Lower + slightly smaller
            animate={{ scale: 1, opacity: 1, y: 0 }} // Grows & rises into place
            transition={{
              type: "spring",
              stiffness: 35, // Adjusted stiffness for smoother motion
              damping: 28, // Reduced damping for a more natural stop
              duration: 1.1,
              delay: 0.2, // Keep in sync with paragraph's delay
              ease: "easeOut", // Smooth deceleration at the end
            }}
          >
            <Link href="#visit" className="hero-button">
              Join Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
