import HeroSaveTheDates from "./components/HeroSaveTheDates";
import FunctionsCeremonies from "./components/FunctionsCeremonies";
import LocationBlock from "./components/LocationBlock";
import Countdown from "./components/Countdown";
import ReceptionBanner from "./components/ReceptionBanner";
import ClosingPolaroids from "./components/ClosingPolaroids";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* 1. HERO - Cursive Title + Triptych Photos */}
      <HeroSaveTheDates />

      {/* 2. COUNTDOWN - Timer with decorative line separators */}
      <Countdown />

      {/* 3. DAY ONE LOCATION - Westin Sketch */}
      <LocationBlock
        dayLabel="Day One"
        date="27 . 06 . 2026"
        venueName="The Westin Grande Sukhumvit, Bangkok"
      />

      {/* 4. FUNCTIONS & CEREMONIES - Timeline with Baraat/Phere icons */}
      <FunctionsCeremonies />

      {/* TRANSITION - Elegant Orchid Divider */}
      <div className="relative w-full h-32 md:h-64 my-10">
        <Image 
          src="/photos/orchid.png" 
          alt="" 
          fill 
          className="object-contain opacity-40"
        />
      </div>

      {/* 5. RECEPTION - Burgundy Banner with glasses icon */}
      <ReceptionBanner />
      
      {/* 6. DAY TWO LOCATION - Reusing LocationBlock for Reception */}
      <LocationBlock
        dayLabel="Day Two"
        date="28 . 06 . 2026"
        venueName="The Westin Grande Sukhumvit, Bangkok"
        className="pt-0 md:pt-0" 
      />

      {/* 7. CLOSING - Polaroid Gallery */}
      <ClosingPolaroids />

      {/* FOOTER DECORATION */}
      <footer className="pb-16 text-center">
        <div className="relative w-16 h-16 mx-auto opacity-60">
          <Image 
            src="/photos/line.png" 
            alt="" 
            fill 
            className="object-contain rotate-90"
          />
        </div>
      </footer>
    </main>
  );
}