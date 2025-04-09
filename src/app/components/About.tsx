"use client";
import React from 'react';
import Link from 'next/link';
import { CaretDoubleRight } from "@phosphor-icons/react/dist/ssr";
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about-what-to-expect" id="about">
      <div className="about-container">
        {/* Left Column - About */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            type: "tween",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/jona.jpg"
            alt="Church"
            className="about-image"
            width={500}
            height={300}
            priority
          />
          <h3>ABOUT OUR CHURCH</h3>
          <p>
            Amazing Grace Assembly is a Bible-based church located in Pearland,
            Texas. We provide a combined South Indian (Malayalam) and English
            service each Sunday morning along with various other services
            throughout the week. Our church’s goal is to see individuals
            experience the Amazing Grace that saves lost and broken people
            through a personal encounter with Jesus.
          </p>
          <Link href="/beliefs" className="about-button">
            Our Beliefs <CaretDoubleRight size={20} weight="bold" />
          </Link>
        </motion.div>

        {/* Right Column - What to Expect */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            type: "tween",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>WHAT TO EXPECT</h3>
          <p>
            We are a multi-generational, Spirit-filled church where people from
            all walks of life come together to encounter God. Expect heartfelt
            worship, inspiring biblical teaching, and a supportive community
            that encourages growth and connection. Whether you're new to the
            faith or have walked with Jesus for years, you'll find a place to
            belong.
          </p>
          <Link href="/#visit" className="about-button">
            Visit Us <CaretDoubleRight size={20} weight="bold" />
          </Link>
          <Image
            src="/cross.jpg"
            alt="Cross"
            className="about-image"
            width={500} // Add width
            height={300} // Add height
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
