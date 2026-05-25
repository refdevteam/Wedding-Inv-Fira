import HeroSection from "@/components/sections/HeroSection";
import CountdownSection from "@/components/sections/CountdownSection";
import CoupleProfileSection from "@/components/sections/CoupleProfileSection";
import EventItinerarySection from "@/components/sections/EventItinerarySection";
import DigitalEnvelopeSection from "@/components/sections/DigitalEnvelopeSection";
import PhotoGallerySection from "@/components/sections/PhotoGallerySection";
import RsvpSection from "@/components/sections/RsvpSection";
import FooterSection from "@/components/sections/FooterSection";
import AudioPlayer from "@/components/ui/AudioPlayer";
import WelcomeOverlay from "@/components/ui/WelcomeOverlay";
import BottomNavbar from "@/components/ui/BottomNavbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <WelcomeOverlay />
      <AudioPlayer />
      <BottomNavbar />
      
      <div id="hero" className="w-full"><HeroSection /></div>
      <CountdownSection />
      <div id="couple" className="w-full"><CoupleProfileSection /></div>
      <div id="itinerary" className="w-full"><EventItinerarySection /></div>
      <div id="gallery" className="w-full"><PhotoGallerySection /></div>
      <div id="rsvp" className="w-full"><RsvpSection /></div>
      <div id="gift" className="w-full"><DigitalEnvelopeSection /></div>
      
      <FooterSection />
    </main>
  );
}
