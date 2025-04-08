"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function OurPastor() {
  return (
    <section className="lead-pastor">
      {/* Title with smoother animation */}
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2, // Increased duration for smoother animation
          ease: "easeOut", // Smooth ease-out transition
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        LEAD PASTOR
      </motion.h2>

      {/* Subtitle with smoother animation */}
      <motion.p
        className="pastor-text-subtitle"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2, // Increased duration for smoother animation
          ease: "easeOut", // Smooth ease-out transition
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Get to know our leader
      </motion.p>

      {/* Main content (Image and Text) */}
      <div className="lead-pastor-content flex items-center space-x-8">
        {/* Static Pastor Image on the Left */}
        <motion.img
          src="/pastor.jpg"
          alt="Lead Pastor"
          className="pastor-img shadow"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2, // Smooth fade-in effect for image
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Text on the Right with smoother animation */}
        <motion.div
          className="pastor-text"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2, // Increased duration for smoother animation
            ease: "easeOut", // Smooth ease-out transition
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="pastor-name">REV. THOMAS ABRAHAM</h3>
          <p className="pastor-bio">
            Pastor Thomas Abraham, born and raised in Kerala, India, dedicated his life to ministry in 1974 at age 17. He studied at Shalom Bible College and Southern Asia Bible College before serving in ministry for over 40 years, establishing churches in Kerala, Mumbai, Bangalore, New York City, and Houston. In 1980, he joined the Assemblies of God in Mumbai, pioneering churches. He later founded Queens Indian Assembly of God in 1994 and Ebenezer Assembly of God in Houston in 2000. Since 2014, he has pastored Amazing Grace Assembly Houston. His wife, Mary, has been a strong support, and they have three children—Amy, Denny, and Jemi.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
