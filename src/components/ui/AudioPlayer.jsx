"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleAudioStarted = () => setIsPlaying(true);
    window.addEventListener("audioStarted", handleAudioStarted);
    return () => window.removeEventListener("audioStarted", handleAudioStarted);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed bottom-28 right-6 z-50" // Dipindah ke atas agar tidak menabrak navbar bawah
    >
      <audio id="bgm" ref={audioRef} loop src="/audio/bgm.mp3" preload="auto" />
      
      <button
        onClick={togglePlay}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--background)] border border-[var(--accent-gold)] text-[var(--accent-gold)] shadow-[0_0_15px_rgba(201,148,80,0.3)] hover:bg-[var(--accent-gold)] hover:text-black transition-all duration-300"
      >
        {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} className="ml-1" />}
      </button>
    </motion.div>
  );
}
