"use client";

import { motion } from "framer-motion";
import LuxuryOrnament from "@/components/ui/LuxuryOrnament";
import JanurKuning from "@/components/ui/JanurKuning";

export default function PhotoGallerySection() {
  const photos = [
    "/images/hero-1.jpeg",
    "/images/hero-2.jpeg",
    "/images/Gemini_Generated_Image_ukvfg3ukvfg3ukvf.png",
    "/images/Gemini_Generated_Image_y9oiz7y9oiz7y9oi.png",
  ];

  return (
    <section className="relative w-full py-24 bg-[var(--background)] px-4">
      
      <JanurKuning position="left" type="gantung" />
      <JanurKuning position="right" type="gantung" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <LuxuryOrnament />
        <h2 className="text-xs tracking-[0.3em] uppercase text-[var(--accent-gold)] mb-2 font-light">
          Kepingan Memori
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif text-[var(--foreground)] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Galeri Foto
        </h3>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {photos.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="overflow-hidden rounded-lg group aspect-[3/4]"
          >
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${src}')` }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
