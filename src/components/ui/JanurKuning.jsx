"use client";
import { motion } from "framer-motion";

export default function JanurKuning({ position = "left", type = "kembar-mayang", mobileTop = false }) {
  const isRight = position === "right";
  
  let widthClass = "w-16 md:w-36";
  if (type === "melengkung" || type === "gantung") widthClass = "w-24 md:w-48";
  if (type === "mayang-sari") widthClass = "w-20 md:w-40";

  let verticalClasses = "bottom-0";
  let transformClasses = isRight ? "scale-x-[-1]" : "";

  if (mobileTop) {
    verticalClasses = "top-0 md:top-auto md:bottom-0";
    transformClasses = isRight ? "scale-x-[-1]" : "";
  }

  if (type === "gantung") {
    verticalClasses = "top-0";
    transformClasses = isRight ? "scale-x-[-1]" : "";
  }
  
  const renderKembarMayang = () => (
    <svg viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      <line x1="60" y1="50" x2="60" y2="280" stroke="var(--accent-gold)" strokeWidth="2" />
      {[...Array(6)].map((_, i) => (
        <g key={i} transform={`translate(0, ${220 - i * 35})`}>
          <path d="M60,0 L75,17.5 L60,35 L45,17.5 Z" fill="rgba(201,148,80,0.15)" stroke="var(--accent-gold)" strokeWidth="1.5"/>
          <path d="M60,0 L75,17.5 L60,35" fill="none" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.6"/>
        </g>
      ))}
      <path d="M60,50 Q30,20 15,60 Q25,75 45,55" fill="rgba(201,148,80,0.25)" stroke="var(--accent-gold)" strokeWidth="1.5"/>
      <path d="M60,50 Q90,20 105,60 Q95,75 75,55" fill="rgba(201,148,80,0.25)" stroke="var(--accent-gold)" strokeWidth="1.5"/>
      <path d="M60,40 Q20,0 5,65 Q15,85 40,50" fill="rgba(201,148,80,0.15)" stroke="var(--accent-gold)" strokeWidth="1.5"/>
      <path d="M60,40 Q100,0 115,65 Q105,85 80,50" fill="rgba(201,148,80,0.15)" stroke="var(--accent-gold)" strokeWidth="1.5"/>
      <path d="M60,25 Q10,-10 -5,75 Q5,100 35,45" fill="rgba(201,148,80,0.1)" stroke="var(--accent-gold)" strokeWidth="1.5"/>
      <path d="M60,25 Q110,-10 125,75 Q115,100 85,45" fill="rgba(201,148,80,0.1)" stroke="var(--accent-gold)" strokeWidth="1.5"/>
      <path d="M60,5 L45,25 L75,25 Z" fill="var(--accent-gold)"/>
      <path d="M20,60 Q10,110 25,140 Q15,160 30,190" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 2"/>
      <path d="M100,60 Q110,110 95,140 Q105,160 90,190" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 2"/>
      <path d="M45,280 L75,280 L85,300 L35,300 Z" fill="rgba(201,148,80,0.3)" stroke="var(--accent-gold)" strokeWidth="1.5"/>
      <path d="M35,300 Q60,290 85,300" fill="none" stroke="var(--accent-gold)" strokeWidth="1"/>
      <line x1="45" y1="280" x2="35" y2="300" stroke="var(--accent-gold)" strokeWidth="1.5"/>
      <line x1="75" y1="280" x2="85" y2="300" stroke="var(--accent-gold)" strokeWidth="1.5"/>
    </svg>
  );

  const renderMelengkung = () => (
    <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg overflow-visible">
      <path d="M20,400 Q10,150 120,40 T180,160" fill="none" stroke="var(--accent-gold)" strokeWidth="4" strokeLinecap="round" />
      <path d="M20,350 Q50,370 45,390" fill="none" stroke="var(--accent-gold)" strokeWidth="2" />
      <path d="M22,300 Q65,320 55,360" fill="rgba(201,148,80,0.1)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M25,250 Q85,270 70,320" fill="rgba(201,148,80,0.15)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M30,200 Q100,220 85,280" fill="rgba(201,148,80,0.15)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M45,150 Q120,160 100,230" fill="rgba(201,148,80,0.2)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M70,95 Q150,105 125,180" fill="rgba(201,148,80,0.25)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M105,55 Q180,70 155,140" fill="rgba(201,148,80,0.25)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <g transform="translate(180, 160)">
        <path d="M-10,-20 L0,0 L10,-20 Z" fill="var(--accent-gold)" />
        <path d="M0,0 L-25,45 L0,90 L25,45 Z" fill="rgba(201,148,80,0.25)" stroke="var(--accent-gold)" strokeWidth="1.5" />
        <path d="M-12.5,22.5 L12.5,67.5 M12.5,22.5 L-12.5,67.5" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.5"/>
        <path d="M-15,60 Q-40,110 0,160" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4"/>
        <path d="M15,60 Q40,110 0,160" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 4"/>
        <path d="M0,90 Q0,130 0,170" fill="none" stroke="var(--accent-gold)" strokeWidth="2" />
        <circle cx="0" cy="170" r="4" fill="var(--accent-gold)" />
        <path d="M-5,174 L0,190 L5,174 Z" fill="var(--accent-gold)" />
      </g>
    </svg>
  );

  const renderMayangSari = () => (
    <svg viewBox="0 0 160 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg overflow-visible">
      <path d="M50,280 L110,280 L120,300 L40,300 Z" fill="rgba(201,148,80,0.3)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M40,300 Q80,290 120,300" fill="none" stroke="var(--accent-gold)" strokeWidth="1" />
      <line x1="80" y1="200" x2="80" y2="280" stroke="var(--accent-gold)" strokeWidth="4" />
      <path d="M80,80 Q20,120 40,220 Q80,250 120,220 Q140,120 80,80 Z" fill="rgba(201,148,80,0.15)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M80,100 Q40,140 50,210 Q80,230 110,210 Q120,140 80,100 Z" fill="rgba(201,148,80,0.2)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M80,120 Q55,160 60,200 Q80,215 100,200 Q105,160 80,120 Z" fill="rgba(201,148,80,0.25)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M60,140 L100,180 M100,140 L60,180 M50,170 L90,210 M110,170 L70,210 M65,120 L95,150 M95,120 L65,150 M70,195 L90,215 M90,195 L70,215" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.4" />
      <path d="M80,80 Q75,40 80,20" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
      <circle cx="80" cy="20" r="3" fill="rgba(255,255,255,0.8)" />
      <circle cx="78" cy="40" r="2.5" fill="rgba(255,255,255,0.8)" />
      <circle cx="82" cy="60" r="2.5" fill="rgba(255,255,255,0.8)" />
      <path d="M50,100 Q30,60 10,40" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
      <circle cx="10" cy="40" r="2.5" fill="rgba(255,255,255,0.8)" />
      <circle cx="30" cy="70" r="2" fill="rgba(255,255,255,0.8)" />
      <path d="M110,100 Q130,60 150,40" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
      <circle cx="150" cy="40" r="2.5" fill="rgba(255,255,255,0.8)" />
      <circle cx="130" cy="70" r="2" fill="rgba(255,255,255,0.8)" />
      <path d="M40,160 Q10,180 20,230" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 2" />
      <path d="M120,160 Q150,180 140,230" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="4 2" />
    </svg>
  );

  const renderGantung = () => (
    <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg overflow-visible">
      {/* Top horizontal woven band (Bleketepe style) */}
      <path d="M0,0 L160,0 L160,30 L0,30 Z" fill="rgba(201,148,80,0.2)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M0,15 L160,15 M20,0 L20,30 M60,0 L60,30 M100,0 L100,30 M140,0 L140,30" stroke="var(--accent-gold)" strokeWidth="1" opacity="0.5" />
      
      {/* Dangling strips (Zigzag Pala Gantung) */}
      {[20, 60, 100, 140].map((x, i) => {
        const length = 100 + (i % 2) * 40; // alternating lengths
        return (
          <g key={i} transform={`translate(${x}, 30)`}>
             <path d={`M0,0 L10,20 L-5,40 L10,60 L-5,80 L5,${length}`} fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 2" />
             <path d={`M5,${length} L10,${length+10} L5,${length+20} L0,${length+10} Z`} fill="rgba(201,148,80,0.3)" stroke="var(--accent-gold)" strokeWidth="1" />
          </g>
        )
      })}

      {/* Hanging curved leaf (melengkung) from corner */}
      <path d="M0,30 Q40,100 0,180" fill="rgba(201,148,80,0.15)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M0,30 Q80,100 10,160" fill="rgba(201,148,80,0.1)" stroke="var(--accent-gold)" strokeWidth="1.5" />
      <path d="M0,30 Q120,100 30,130" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="2 4"/>
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`absolute ${verticalClasses} ${isRight ? 'right-0' : 'left-0'} ${widthClass} opacity-40 z-0 pointer-events-none transform ${transformClasses}`}
    >
      {type === "melengkung" ? renderMelengkung() : 
       type === "mayang-sari" ? renderMayangSari() : 
       type === "gantung" ? renderGantung() : 
       renderKembarMayang()}
    </motion.div>
  );
}
