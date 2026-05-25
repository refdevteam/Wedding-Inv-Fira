"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import JanurKuning from "@/components/ui/JanurKuning";

export default function RsvpSection() {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "Hadir",
    guestCount: "1",
    message: ""
  });
  const [messages, setMessages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "rsvps"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "rsvps"), {
        ...formData,
        guestCount: parseInt(formData.guestCount),
        timestamp: serverTimestamp()
      });
      setSubmitSuccess(true);
      setFormData({ name: "", attendance: "Hadir", guestCount: "1", message: "" });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Terjadi kesalahan koneksi. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-24 bg-[var(--background)] px-4 border-t border-[var(--accent-gold)]/20">
      
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-full flex justify-center opacity-30 pointer-events-none mt-10">
         <svg viewBox="0 0 100 20" className="w-32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,0 Q60,10 70,10 T90,10 M50,0 Q40,10 30,10 T10,10" stroke="var(--accent-gold)" strokeWidth="1" />
            <circle cx="50" cy="0" r="2" fill="var(--accent-gold)" />
            <circle cx="50" cy="15" r="2" fill="var(--accent-gold)" />
            <path d="M50,0 L50,15" stroke="var(--accent-gold)" strokeWidth="1" />
         </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-12 max-w-2xl mx-auto"
      >
        <h2 className="text-xs tracking-[0.3em] uppercase text-[var(--accent-gold)] mb-2 font-light mt-8">
          Kehadiran & Doa
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif text-[var(--foreground)] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Buku Tamu (RSVP)
        </h3>
        <p className="text-[var(--foreground)]/70 font-light leading-relaxed">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* RSVP FORM */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="bg-[#111111] p-8 rounded-xl border border-[var(--accent-gold)]/30 shadow-[0_0_15px_rgba(201,148,80,0.1)] relative">
            <h4 className="text-xl font-serif text-[var(--accent-gold)] mb-6 border-b border-[var(--accent-gold)]/20 pb-4">Konfirmasi Kehadiran</h4>
            
            {submitSuccess && (
              <div className="bg-green-900/30 border border-green-500/50 text-green-300 px-4 py-3 rounded mb-6 text-sm">
                Terima kasih! Konfirmasi dan doa Anda telah tersimpan.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-[var(--foreground)]/80 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-[var(--accent-gold)]/40 rounded px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[var(--foreground)]/80 mb-2">Kehadiran</label>
                  <select 
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleChange}
                    className="w-full bg-black border border-[var(--accent-gold)]/40 rounded px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors appearance-none"
                  >
                    <option value="Hadir">Hadir</option>
                    <option value="Tidak Hadir">Tidak Hadir</option>
                    <option value="Ragu-ragu">Ragu-ragu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-[var(--foreground)]/80 mb-2">Jumlah Tamu</label>
                  <select 
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    disabled={formData.attendance === "Tidak Hadir"}
                    className="w-full bg-black border border-[var(--accent-gold)]/40 rounded px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors appearance-none disabled:opacity-50"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[var(--foreground)]/80 mb-2">Pesan & Doa Restu</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-black border border-[var(--accent-gold)]/40 rounded px-4 py-3 text-[var(--foreground)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors resize-none"
                  placeholder="Tuliskan ucapan dan doa untuk kedua mempelai..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[var(--accent-gold)] text-black font-semibold py-3 rounded hover:bg-[#b07d3f] transition-colors disabled:opacity-70 tracking-wide mt-2"
              >
                {isSubmitting ? "MENGIRIM..." : "KIRIM KONFIRMASI"}
              </button>
            </form>
          </div>
        </motion.div>

        {/* GUESTBOOK DISPLAY */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="bg-[#111111] p-8 rounded-xl border border-[var(--accent-gold)]/30 shadow-[0_0_15px_rgba(201,148,80,0.1)] h-full flex flex-col">
            <h4 className="text-xl font-serif text-[var(--accent-gold)] mb-6 border-b border-[var(--accent-gold)]/20 pb-4">
              Ucapan dari Sahabat & Kerabat
              <span className="ml-2 text-xs bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] px-2 py-1 rounded-full font-sans">
                {messages.length} Pesan
              </span>
            </h4>
            
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 max-h-[500px] custom-scrollbar">
              {messages.length === 0 ? (
                <div className="text-center text-[var(--foreground)]/40 italic py-10">
                  Belum ada pesan. Jadilah yang pertama memberikan doa restu!
                </div>
              ) : (
                messages.map((msg) => (
                  <div key={msg.id} className="bg-black/50 p-4 rounded border border-[var(--accent-gold)]/10">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-[var(--accent-gold)]">{msg.name}</h5>
                      <span className={`text-[10px] uppercase px-2 py-0.5 rounded border ${
                        msg.attendance === 'Hadir' ? 'border-green-500/50 text-green-400' : 
                        msg.attendance === 'Tidak Hadir' ? 'border-red-500/50 text-red-400' : 
                        'border-yellow-500/50 text-yellow-400'
                      }`}>
                        {msg.attendance}
                      </span>
                    </div>
                    <p className="text-[var(--foreground)]/80 text-sm font-light leading-relaxed">
                      "{msg.message}"
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>

      </div>

      <JanurKuning position="left" type="melengkung" />
      <JanurKuning position="right" type="melengkung" />
    </section>
  );
}
