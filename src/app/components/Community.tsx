"use client";
import React from 'react';
/*import { PiDotsSixLight } from "react-icons/pi";*/
import { CaretCircleRight } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from 'framer-motion'; // Import Framer Motion
// Import Swiper styles
import "swiper/css/bundle";

// Generate dynamic image paths
const numberOfImages = 10; // Number of images in the gallery
const images = Array.from({ length: numberOfImages }, (_, index) => `/cpics/KESTER_LIVE-${(index + 1).toString().padStart(2, '0')}.jpg`);

export default function Community() {
  return (
    <section className="church-community">
      <motion.h2
        className="text-3xl mb-4"
        initial={{ opacity: 0 }}
        transition={{ duration: 1.4 }} 
        whileInView={{ opacity: 1}} // Smooth transition
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
        // Only animate once when it comes into view
      >
        CHURCH COMMUNITY
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }} // Animation when it enters the viewport
        whileInView={{ opacity: 1 }} // Smooth transition
        transition={{ duration: 1.4 }} 
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
        // Only animate once when it comes into view
      >
        Jesus said, “Go into all the world and preach the gospel.” (Mark 16:15)
        We believe the church is more than a building—it’s a movement of people
        empowered by the Holy Spirit to impact the world. We’re committed to
        sharing God’s love in word and action. Whether you give, serve, or
        simply show up—you’re a vital part of what God is doing here.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        className="action-buttons"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Animation when it enters the viewport
        transition={{ duration: 1.4 }} // Simultaneous animation
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
      >
        <a href="/donate" className="action-btn donate-btn">
          Donate <CaretCircleRight size={32} className="donate-icon" />
        </a>
        <a href="/apparel" className="action-btn apparel-btn">
          Apparel <CaretCircleRight size={32} className="apparel-icon" />
        </a>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        className="max-w-4xl mx-auto mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Animation when it enters the viewport
        transition={{ duration: 1.2 }} // Simultaneous animation// Smooth transition
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
        // Only animate once when it comes into view
      >
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3900, disableOnInteraction: false }}
          navigation={true}
          className="gallery-swiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0 }} // Animation when it enters the viewport
                transition={{ duration: 1.2 }} // Simultaneous animation
                whileInView={{ opacity: 1 }} // Smooth transition
                viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in view
                // Only animate once when it comes into view
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  layout="responsive" // Makes image responsive
                  width={1200} // Set width for aspect ratio
                  height={800} // Set height for aspect ratio
                  className="rounded-lg object-cover"
                  loading="lazy" // Lazy load images
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Decorative Icon 
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} // Animation when it enters the viewport
        transition={{ duration: 1.2 }} // Simultaneous animation
        viewport={{ once: true }} // Only animate once when it comes into view
      >
        <PiDotsSixLight size={100} strokeWidth={0.08} />
      </motion.div>*/}
    </section>
  );
}
