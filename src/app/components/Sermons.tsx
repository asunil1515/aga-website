"use client"
import Link from 'next/link'
import { motion } from "framer-motion";
import React from 'react';

export const Sermons = () => {
  return (
    <section className="sermons" id="sermons">
      <motion.iframe
        initial={{ opacity: 0, y: -100 }} // Start off-screen to the left
        whileInView={{ opacity: 1, y: 0 }} // Slide into the viewport from the left
        transition={{ duration: 1.0 }} // Smooth transition
        src="https://www.youtube.com/embed/oXH9fG3F9pE?si=_xdNfbseE5ozCX9i"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen={true}
        className="sermon-iframe"
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
      ></motion.iframe>
      
      <motion.div
        className="sermon-text"
        initial={{ opacity: 0, y: 100 }} // Start off-screen to the right
        whileInView={{ opacity: 1, y: 0 }} // Slide into the viewport from the right
        transition={{ duration: 1.0 }} // Smooth transition
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
      >
        <h2>SERMONS</h2>
        <p>
          Our weekly messages are rooted in Scripture and empowered by the Holy
          Spirit. Whether you’re new to faith or growing deeper, we believe
          God’s Word has something fresh for you today.
        </p>
        <Link
          href="https://www.youtube.com/@amazinggraceassembly/streams"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Sermons
        </Link>
      </motion.div>
    </section>
  );
}

