"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="relative w-full py-24 bg-[#080808] flex flex-col items-center justify-center overflow-hidden border-t border-[var(--accent-gold)]/20">
      
      {/* Background Watermark (Line Art) */}
      <div 
        className="absolute inset-0 z-0 bg-contain bg-center bg-no-repeat opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('/images/Gemini_Generated_Image_g8mjbtg8mjbtg8mj.png')" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4 max-w-2xl"
      >
        <p className="text-[var(--foreground)]/80 text-sm md:text-base font-light leading-relaxed mb-6">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada pernikahan kami.
        </p>
        <p className="text-[var(--accent-gold)] text-sm md:text-base italic mb-10">
          Wassalamu'alaikum Warahmatullahi Wabarakatuh
        </p>
        
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--foreground)]/60 mb-4 font-light">Kami yang berbahagia</p>
        <h2 className="text-4xl md:text-6xl font-serif text-[var(--accent-gold)] mb-16 drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
          Fira & Luqman
        </h2>
      </motion.div>

      {/* Credit Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10 mt-12 flex flex-col items-center justify-center pt-8 border-t border-[var(--foreground)]/10 w-full max-w-xs"
      >
        <p className="text-[10px] text-[var(--foreground)]/40 tracking-[0.2em] uppercase mb-3 font-light">
          Created By
        </p>
        <a 
          href="https://instagram.com/rifky,ref" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--foreground)]/60 hover:text-[var(--accent-gold)] transition-colors duration-300 group"
        >
          <FaInstagram className="text-xl group-hover:scale-110 transition-transform duration-300" />
          <span className="text-sm font-light tracking-wider">@rifky,ref</span>
        </a>
      </motion.div>
    </footer>
  );
}
