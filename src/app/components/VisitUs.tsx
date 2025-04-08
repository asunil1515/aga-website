"use client";
import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export const VisitUs = () => {
  const [showServiceTimes, setShowServiceTimes] = useState(false);
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "2.1rem",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message: " + result.error);
      }
    } catch (err) {
      console.error("Contact form error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const renderCollapsibleSection = (
    title: string,
    isShow: boolean,
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>,
    content: React.ReactNode
  ) => {
    return (
      <div>
        <motion.h2
          className="collapsible-heading"
          onClick={() => setIsShow(!isShow)}
          whileHover={{ color: "var(--hp-button-hover)" }}
          transition={{ duration: 0.1 }}
        >
          <span>{title}</span>
          <CaretDown
            size={42}
            weight="bold"
            className={isShow ? "rotate" : ""}
          />
        </motion.h2>

        <AnimatePresence>
          {isShow && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariants}
              style={{
                overflow: "hidden",
                position: "relative",
              }}
            >
              {content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="visit py-12" id="visit">
      <motion.div
        className="visit"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl text-center title">LOCATION</h2>
        <p className="text-center">
          Check out our location to plan your visit, and feel free to contact us
          for more information.
        </p>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.8446852172447!2d-95.37095492579168!3d29.550017075176267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409319798274f3%3A0x8041efadd4cefc72!2s2550%20County%20Rd%2090%2C%20Pearland%2C%20TX%2077584!5e0!3m2!1sen!2sus!4v1742343326804!5m2!1sen!2sus&style=feature:all|element:all|color:0x2a2a2a"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      <motion.div
        className="visit-content"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="service-and-upcoming-structure">
          {renderCollapsibleSection(
            "SERVICE TIMES",
            showServiceTimes,
            setShowServiceTimes,
            <div className="servicetimes">
              <p>
                <span className="service">Saturday Service: </span>{" "}
                <span className="time"> 7:00pm - 9:00 pm</span>
              </p>
              <p>
                <span className="service">Sunday School: </span>{" "}
                <span className="time"> 9:15 am - 9:55 am</span>
              </p>
              <p>
                <span className="service">Sunday Service: </span>{" "}
                <span className="time"> 10:00 am - 12:00 pm</span>
              </p>
            </div>
          )}

          {renderCollapsibleSection(
            "UPCOMING",
            showUpcoming,
            setShowUpcoming,
            <div className="upcoming">
              <p>
                <span className="date">April 26: </span>
                <Link
                  href="worshipflyer2.png"
                  className="event"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Click to view the worship flyer"
                >
                  Worship Night - 7:00 pm
                </Link>
              </p>
            </div>
          )}
        </div>

        <div className="contactus-structure">
          {renderCollapsibleSection(
            "CONTACT US",
            showContactForm,
            setShowContactForm,
            <div className="contactus">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="contact-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="contact-input message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit" className="contact-btn" disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};
