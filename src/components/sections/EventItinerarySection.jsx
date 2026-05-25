"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import LuxuryOrnament from "@/components/ui/LuxuryOrnament";

export default function EventItinerarySection() {
  const mapUrl = "https://goo.gl/maps/rTJSHUmCyt6SBKUp6?g_st=aw";
  
  return (
    <section className="relative w-full py-24 bg-[var(--background)] px-4">
      {/* Decorative floral/batik element could go here */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <LuxuryOrnament />
        <h2 className="text-xs tracking-[0.3em] uppercase text-[var(--accent-gold)] mb-2 font-light">
          Rangkaian Acara
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif text-[var(--foreground)]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Momen Bahagia Kami
        </h3>
      </motion.div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-8 md:gap-12">
        
        {/* Akad Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 bg-[var(--accent-green)]/10 border border-[var(--accent-gold)]/20 rounded-xl p-8 text-center backdrop-blur-sm shadow-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-50"></div>
          
          <h4 className="text-2xl font-serif text-[var(--accent-gold)] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Akad Nikah
          </h4>
          
          <div className="flex flex-col gap-4 text-[var(--foreground)]/80 font-light mb-8">
            <div className="flex items-center justify-center gap-3">
              <FaCalendarAlt className="text-[var(--accent-gold)]/70" />
              <span>Sabtu, 30 Mei 2026</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaClock className="text-[var(--accent-gold)]/70" />
              <span>08.00 WIB</span>
            </div>
            <div className="flex items-start justify-center gap-3 mt-2">
              <FaMapMarkerAlt className="text-[var(--accent-gold)]/70 mt-1" />
              <div className="text-left leading-relaxed">
                <span className="block font-medium text-[var(--foreground)]">Kediaman Mempelai Pria</span>
                <span className="text-sm">DSN. Sukorejo rt.033 RW. 008<br/>ds. Kepung kec. Kepung</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resepsi Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 bg-[var(--accent-green)]/10 border border-[var(--accent-gold)]/20 rounded-xl p-8 text-center backdrop-blur-sm shadow-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent opacity-50"></div>
          
          <h4 className="text-2xl font-serif text-[var(--accent-gold)] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Resepsi
          </h4>
          
          <div className="flex flex-col gap-4 text-[var(--foreground)]/80 font-light mb-8">
            <div className="flex items-center justify-center gap-3">
              <FaCalendarAlt className="text-[var(--accent-gold)]/70" />
              <span>Sabtu, 30 Mei 2026</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaClock className="text-[var(--accent-gold)]/70" />
              <span>10.00 WIB - Selesai</span>
            </div>
            <div className="flex items-start justify-center gap-3 mt-2">
              <FaMapMarkerAlt className="text-[var(--accent-gold)]/70 mt-1" />
              <div className="text-left leading-relaxed">
                <span className="block font-medium text-[var(--foreground)]">Kediaman Mempelai Pria</span>
                <span className="text-sm">DSN. Sukorejo rt.033 RW. 008<br/>ds. Kepung kec. Kepung</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-4xl mx-auto mt-16"
      >
        <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-[var(--accent-gold)]/30">
          <iframe 
            width="100%" 
            height="100%" 
            style={{ 
              border: 0, 
              filter: "invert(90%) hue-rotate(180deg) contrast(85%) brightness(80%) sepia(10%)" 
            }} 
            loading="lazy" 
            allowFullScreen 
            src="https://maps.google.com/maps?q=DSN.+Sukorejo+rt.033+RW.+008+ds.+Kepung+kec.+Kepung&t=m&z=16&ie=UTF8&iwloc=B&output=embed"
          ></iframe>
        </div>
        <div className="text-center mt-8">
          <a 
            href={mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-[var(--accent-gold)] text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition-colors duration-300 px-8 py-3 rounded-full tracking-widest text-sm uppercase"
          >
            <FaMapMarkerAlt />
            <span>Buka di Aplikasi Google Maps</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
