"use client";

import { motion } from "framer-motion";
import JanurKuning from "@/components/ui/JanurKuning";

export default function CoupleProfileSection() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[var(--background)] to-[var(--accent-green)]/20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-xs tracking-[0.3em] uppercase text-[var(--accent-gold)] mb-2 font-light">
          Sang Mempelai
        </h2>
        <h3 className="text-3xl md:text-5xl font-serif text-[var(--foreground)]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Dua Hati Menjadi Satu
        </h3>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        
        {/* Bride Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center text-center md:w-2/5"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[var(--accent-gold)]/40 p-1">
            <div 
              className="w-full h-full rounded-full bg-black bg-no-repeat" 
              style={{ 
                backgroundImage: "url('/images/hero-1.jpeg')",
                backgroundSize: "300%", /* Ubah persentase ini untuk me-zoom (crop lebih dekat) */
                backgroundPosition: "30% 30%" /* Wajah Wanita di kiri, digeser agak ke tengah */
              }}
            ></div>
          </div>
          <h3 className="text-2xl font-serif text-[var(--foreground)] mb-2 leading-snug">Maghfirah Gusfaniarty Sukoco</h3>
          <p className="text-sm text-[var(--foreground)]/70 mb-4 font-light italic">
            Putri dari Bapak Agus Sukoco (Alm) & Ibu Ulfa Ahmad
          </p>
          <a href="#" className="text-[var(--accent-gold)] text-sm tracking-widest uppercase hover:underline">@maghfirah</a>
        </motion.div>

        {/* '&' Separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl md:text-7xl font-serif text-[var(--accent-gold)]/50 shrink-0"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          &
        </motion.div>

        {/* Groom Profile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center text-center md:w-2/5"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-[var(--accent-gold)]/40 p-1">
            <div 
              className="w-full h-full rounded-full bg-black bg-no-repeat" 
              style={{ 
                backgroundImage: "url('/images/hero-1.jpeg')",
                backgroundSize: "300%", /* Ubah persentase ini untuk me-zoom (crop lebih dekat) */
                backgroundPosition: "70% 30%" /* Wajah Pria di kanan, digeser agak ke tengah */
              }}
            ></div>
          </div>
          <h3 className="text-2xl font-serif text-[var(--foreground)] mb-2">Luqman Ariffudin</h3>
          <p className="text-sm text-[var(--foreground)]/70 mb-4 font-light italic">
            Putra dari Bapak Sutrisno & Ibu Siti Khomariyah
          </p>
          <a href="#" className="text-[var(--accent-gold)] text-sm tracking-widest uppercase hover:underline">@luqman</a>
        </motion.div>

      </div>

      <JanurKuning position="left" type="melengkung" mobileTop={true} />
      <JanurKuning position="right" type="melengkung" mobileTop={true} />
    </section>
  );
}
