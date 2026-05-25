"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LuxuryOrnament from "@/components/ui/LuxuryOrnament";

export default function CountdownSection() {
  const targetDate = new Date("2026-05-30T08:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBox = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-[var(--accent-green)]/30 backdrop-blur-sm border border-[var(--accent-gold)]/30 p-4 rounded-lg min-w-[80px] md:min-w-[100px]">
      <span className="text-3xl md:text-4xl font-serif text-[var(--accent-gold)]">{value}</span>
      <span className="text-xs md:text-sm uppercase tracking-widest text-[var(--foreground)] mt-2">{label}</span>
    </div>
  );

  return (
    <section className="relative w-full py-24 flex flex-col items-center justify-center bg-[var(--background)] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <LuxuryOrnament />
        <h2 className="text-3xl md:text-4xl font-serif text-[var(--accent-gold)] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          Menuju Hari Bahagia
        </h2>
        <p className="text-[var(--foreground)]/70 font-light tracking-wide max-w-lg mx-auto">
          Tidak sabar rasanya menanti hari dimana kami akan mengikat janji suci.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 md:gap-6"
      >
        <TimeBox value={timeLeft.days} label="Hari" />
        <TimeBox value={timeLeft.hours} label="Jam" />
        <TimeBox value={timeLeft.minutes} label="Menit" />
        <TimeBox value={timeLeft.seconds} label="Detik" />
      </motion.div>
    </section>
  );
}
