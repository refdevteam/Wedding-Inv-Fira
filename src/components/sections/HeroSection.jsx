"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import JanurKuning from "@/components/ui/JanurKuning";

export default function HeroSection() {
  const images = ["/images/hero-1.jpeg", "/images/hero-2.jpeg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Berganti setiap 5 detik
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--background)]">
      
      {/* Background Slideshow (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.6, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 7, ease: "linear" }
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${images[currentIndex]}')` }}
          />
        </AnimatePresence>
      </div>
      
      {/* Subtle overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[var(--background)] z-0 pointer-events-none" />

      {/* Top Floral / Gebyok Arch */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute top-0 left-0 w-full flex justify-between z-0 pointer-events-none"
      >
        {/* Left Top */}
        <svg className="w-48 md:w-64 opacity-50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L100,0 C100,0 80,40 0,100 Z" fill="rgba(201,148,80,0.1)" stroke="var(--accent-gold)" strokeWidth="1"/>
          <path d="M0,0 L80,0 C80,0 60,30 0,80" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="3 3"/>
          <path d="M10,0 L10,60 M30,0 L30,45 M50,0 L50,25" stroke="var(--accent-gold)" strokeWidth="1"/>
          <circle cx="10" cy="60" r="2" fill="var(--accent-gold)" />
          <circle cx="30" cy="45" r="2" fill="var(--accent-gold)" />
          <circle cx="50" cy="25" r="2" fill="var(--accent-gold)" />
        </svg>
        {/* Right Top */}
        <svg className="w-48 md:w-64 opacity-50 transform scale-x-[-1]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L100,0 C100,0 80,40 0,100 Z" fill="rgba(201,148,80,0.1)" stroke="var(--accent-gold)" strokeWidth="1"/>
          <path d="M0,0 L80,0 C80,0 60,30 0,80" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="3 3"/>
          <path d="M10,0 L10,60 M30,0 L30,45 M50,0 L50,25" stroke="var(--accent-gold)" strokeWidth="1"/>
          <circle cx="10" cy="60" r="2" fill="var(--accent-gold)" />
          <circle cx="30" cy="45" r="2" fill="var(--accent-gold)" />
          <circle cx="50" cy="25" r="2" fill="var(--accent-gold)" />
        </svg>
      </motion.div>



      <JanurKuning position="left" type="mayang-sari" />
      <JanurKuning position="right" type="mayang-sari" />

      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center mt-20">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm md:text-lg tracking-[0.3em] uppercase text-[var(--accent-gold)] mb-4 font-light"
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--foreground)] drop-shadow-lg text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Fira & Luqman
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 flex items-center justify-center space-x-4"
        >
          <div className="h-[1px] w-12 bg-[var(--accent-gold)]" />
          <p className="text-lg md:text-xl font-light text-[var(--foreground)] tracking-widest">
            30 . 05 . 2026
          </p>
          <div className="h-[1px] w-12 bg-[var(--accent-gold)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 text-sm italic opacity-75 font-light"
        >
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri..."
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 z-10 flex flex-col items-center"
      >
        <span className="text-[var(--accent-gold)] text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--accent-gold)] to-transparent" />
      </motion.div>
    </section>
  );
}
