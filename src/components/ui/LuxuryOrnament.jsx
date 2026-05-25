export default function LuxuryOrnament() {
  return (
    <div className="flex justify-center w-full mb-6">
      <svg viewBox="0 0 100 80" className="w-12 md:w-24 opacity-90 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Gunungan / Lotus Silhouette */}
        <path d="M50,5 Q75,35 85,70 L15,70 Q25,35 50,5 Z" fill="rgba(201,148,80,0.05)" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Inner Floral / Tree of Life (Pohon Hayat) */}
        <path d="M50,70 L50,30" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M50,60 Q65,55 70,40" fill="none" stroke="var(--accent-gold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M50,60 Q35,55 30,40" fill="none" stroke="var(--accent-gold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M50,45 Q60,40 60,25" fill="none" stroke="var(--accent-gold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M50,45 Q40,40 40,25" fill="none" stroke="var(--accent-gold)" strokeWidth="1" strokeLinecap="round" />
        
        {/* Flower buds */}
        <circle cx="70" cy="40" r="2" fill="var(--accent-gold)" />
        <circle cx="30" cy="40" r="2" fill="var(--accent-gold)" />
        <circle cx="60" cy="25" r="1.5" fill="var(--accent-gold)" />
        <circle cx="40" cy="25" r="1.5" fill="var(--accent-gold)" />
        
        {/* Central Diamond/Bud */}
        <path d="M50,20 L53,25 L50,30 L47,25 Z" fill="var(--accent-gold)" />
        
        {/* Base line */}
        <line x1="5" y1="70" x2="95" y2="70" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="75" x2="85" y2="75" stroke="var(--accent-gold)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </svg>
    </div>
  );
}
