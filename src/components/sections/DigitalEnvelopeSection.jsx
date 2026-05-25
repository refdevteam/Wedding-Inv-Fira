"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

export default function DigitalEnvelopeSection() {
  const [copiedRek1, setCopiedRek1] = useState(false);
  const [copiedRek2, setCopiedRek2] = useState(false);

  const handleCopy = (text, setCopied) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-[var(--background)] to-[#181818] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-12 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-[var(--accent-gold)] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Wedding Gift
        </h2>
        <p className="text-[var(--foreground)]/70 font-light leading-relaxed">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless melalui:
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center gap-6">
        
        {/* Rekening 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 bg-[#1A1A1A] border border-[#333] rounded-xl p-8 text-center shadow-lg"
        >
          <div className="text-xl font-bold tracking-widest text-[#0066AE] mb-4 bg-white/10 py-2 rounded">BCA</div>
          <div className="text-2xl font-light text-[var(--foreground)] mb-2 tracking-widest">
            1401 6149 11
          </div>
          <p className="text-[var(--foreground)]/60 text-sm uppercase tracking-wider mb-6">
            a.n Luqman Ariffudin
          </p>
          <button 
            onClick={() => handleCopy('1401614911', setCopiedRek1)}
            className="w-full flex items-center justify-center gap-2 bg-transparent border border-[var(--accent-gold)]/50 text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition-all py-2 rounded-md text-sm uppercase tracking-widest"
          >
            {copiedRek1 ? <><FaCheck /> Disalin</> : <><FaCopy /> Salin No. Rekening</>}
          </button>
        </motion.div>

        {/* Rekening 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 bg-[#1A1A1A] border border-[#333] rounded-xl p-8 text-center shadow-lg"
        >
          <div className="text-xl font-bold tracking-widest text-[#0066AE] mb-4 bg-white/10 py-2 rounded">BCA</div>
          <div className="text-2xl font-light text-[var(--foreground)] mb-2 tracking-widest">
            1401 1122 81
          </div>
          <p className="text-[var(--foreground)]/60 text-sm uppercase tracking-wider mb-6">
            a.n Maghfirah Gusfaniarty Sukoco
          </p>
          <button 
            onClick={() => handleCopy('1401112281', setCopiedRek2)}
            className="w-full flex items-center justify-center gap-2 bg-transparent border border-[var(--accent-gold)]/50 text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-black transition-all py-2 rounded-md text-sm uppercase tracking-widest"
          >
            {copiedRek2 ? <><FaCheck /> Disalin</> : <><FaCopy /> Salin No. Rekening</>}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
