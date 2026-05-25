"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaHeart, FaCalendarAlt, FaImages, FaEnvelope, FaGift } from "react-icons/fa";

export default function BottomNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  // Munculkan navbar hanya setelah tamu membuka undangan (Welcome Overlay hilang)
  useEffect(() => {
    const handleAudioStarted = () => setIsVisible(true);
    window.addEventListener("audioStarted", handleAudioStarted);
    return () => window.removeEventListener("audioStarted", handleAudioStarted);
  }, []);

  const navItems = [
    { icon: <FaHome size={20} />, href: "#hero", label: "Home" },
    { icon: <FaHeart size={20} />, href: "#couple", label: "Couple" },
    { icon: <FaCalendarAlt size={20} />, href: "#itinerary", label: "Acara" },
    { icon: <FaImages size={20} />, href: "#gallery", label: "Galeri" },
    { icon: <FaEnvelope size={20} />, href: "#rsvp", label: "RSVP" },
    { icon: <FaGift size={20} />, href: "#gift", label: "Gift" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] w-[90%] max-w-sm"
        >
          <div className="bg-black/70 backdrop-blur-md border border-[var(--accent-gold)]/40 rounded-full flex justify-between items-center px-6 py-4 shadow-[0_0_20px_rgba(201,148,80,0.25)]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="flex flex-col items-center text-[var(--accent-gold)]/60 hover:text-[var(--accent-gold)] transition-colors duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
