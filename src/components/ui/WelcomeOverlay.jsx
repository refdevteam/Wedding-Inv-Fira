"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import JanurKuning from "@/components/ui/JanurKuning";

export default function WelcomeOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("Tamu Undangan");
  
  const images = [
    "/images/Gemini_Generated_Image_g8mjbtg8mjbtg8mj.png",
    "/images/Gemini_Generated_Image_ukvfg3ukvfg3ukvf.png",
    "/images/Gemini_Generated_Image_y9oiz7y9oiz7y9oi.png"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to");
      if (to) {
        // Decode URI component and replace hyphens/underscores with spaces if needed, or just use it directly
        setGuestName(to.replace(/-/g, " "));
      }
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Berganti setiap 5 detik
    return () => clearInterval(timer);
  }, []);

  const handleOpen = () => {
    const audio = document.getElementById("bgm");
    if (audio) {
      audio.play().catch(e => console.log("Audio play failed:", e));
      window.dispatchEvent(new Event("audioStarted"));
    }
    setIsOpen(true);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-4"
        >
          {/* Background Slideshow (Ken Burns Effect) */}
          <div className="absolute inset-0 z-0 bg-black">
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 2, ease: "easeInOut" },
                  scale: { duration: 7, ease: "linear" }
                }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${images[currentIndex]}')` }}
              />
            </AnimatePresence>
          </div>
          
          {/* Overlay gelap agar teks bisa dibaca, tanpa blur */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          {/* Top Floral / Gebyok Arch */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="absolute top-0 left-0 w-full flex justify-between z-0 pointer-events-none"
          >
            {/* Left Top */}
            <svg className="w-48 md:w-72 opacity-60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L100,0 C100,0 80,40 0,100 Z" fill="rgba(201,148,80,0.1)" stroke="var(--accent-gold)" strokeWidth="1"/>
              <path d="M0,0 L80,0 C80,0 60,30 0,80" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="3 3"/>
              <path d="M10,0 L10,60 M30,0 L30,45 M50,0 L50,25" stroke="var(--accent-gold)" strokeWidth="1"/>
              <circle cx="10" cy="60" r="2.5" fill="var(--accent-gold)" />
              <circle cx="30" cy="45" r="2.5" fill="var(--accent-gold)" />
              <circle cx="50" cy="25" r="2.5" fill="var(--accent-gold)" />
            </svg>
            {/* Right Top */}
            <svg className="w-48 md:w-72 opacity-60 transform scale-x-[-1]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L100,0 C100,0 80,40 0,100 Z" fill="rgba(201,148,80,0.1)" stroke="var(--accent-gold)" strokeWidth="1"/>
              <path d="M0,0 L80,0 C80,0 60,30 0,80" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="3 3"/>
              <path d="M10,0 L10,60 M30,0 L30,45 M50,0 L50,25" stroke="var(--accent-gold)" strokeWidth="1"/>
              <circle cx="10" cy="60" r="2.5" fill="var(--accent-gold)" />
              <circle cx="30" cy="45" r="2.5" fill="var(--accent-gold)" />
              <circle cx="50" cy="25" r="2.5" fill="var(--accent-gold)" />
            </svg>
          </motion.div>

          {/* Janur Kuning Melengkung (Penjor) */}
          <JanurKuning position="left" type="melengkung" />
          <JanurKuning position="right" type="melengkung" />
          
          <div className="z-10 text-center flex flex-col items-center mt-[45vh]">
            <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--accent-gold)] mb-4 font-light drop-shadow-md">
              Undangan Pernikahan
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif text-[var(--foreground)] mb-10 drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Fira & Luqman
            </h1>
            
            <p className="text-[var(--foreground)]/90 text-sm mb-12 font-light drop-shadow-md">
              Kepada Yth. Bapak/Ibu/Saudara/i<br/>
              <strong className="text-[var(--accent-gold)] text-xl md:text-2xl block mt-3 font-serif uppercase tracking-widest">{guestName}</strong>
            </p>

            <button
              onClick={handleOpen}
              className="flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300 px-8 py-4 rounded-full tracking-widest text-sm uppercase shadow-[0_0_20px_rgba(201,148,80,0.2)]"
            >
              <FaEnvelopeOpenText size={18} />
              Buka Undangan
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
