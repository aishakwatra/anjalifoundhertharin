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
      {/* 1. HERO */}
      <HeroSaveTheDates />

      {/* 2. COUNTDOWN - Now includes low-opacity background photo */}
      <Countdown />

      {/* 3. DAY ONE LOCATION - The Westin */}
      <LocationBlock
        dayLabel="Day One"
        date="27 . 06 . 2026 — THE WEDDING"
        venueName="The Westin Grande Sukhumvit, Bangkok"
        venueImage="/photos/westin.png"
      />

      {/* 4. FUNCTIONS & CEREMONIES - Timeline with custom icons */}
      <FunctionsCeremonies />

      {/* 5. DAY TWO LOCATION - Royal Orchid Sheraton (Moved above Reception) */}
      <LocationBlock
        dayLabel="Day Two"
        date="28 . 06 . 2026 — THE RECEPTION"
        venueName="Royal Orchid Sheraton Riverside Hotel, Bangkok"
        venueImage="/photos/orchid.png"
      />

      {/* 6. RECEPTION BANNER - With translucent background photo */}
      <ReceptionBanner />

      {/* 7. CLOSING - Polaroid Gallery */}
      <ClosingPolaroids />

      <footer className="pb-16 text-center">
        <div className="relative w-16 h-16 mx-auto opacity-60">
          <Image src="/photos/line.png" alt="" fill className="object-contain rotate-90" />
        </div>
      </footer>
    </main>
  );
}