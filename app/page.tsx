import HeroSaveTheDates from "./components/HeroSaveTheDates";
import Countdown from "./components/Countdown";
import LocationBlock from "./components/LocationBlock";
import FunctionsCeremonies from "./components/FunctionsCeremonies";
import ReceptionBanner from "./components/ReceptionBanner";
import ClosingPolaroids from "./components/ClosingPolaroids";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="w-full overflow-x-hidden bg-cream">
        <HeroSaveTheDates />

        <Countdown />

        <LocationBlock
          dayLabel="Day One"
          date="27 . 06 . 2026 — The Wedding"
          venueName="The Westin Grande Sukhumvit, Bangkok"
          sketch={<WestinSketch />}
        />

        <FunctionsCeremonies />

        <LocationBlock
          dayLabel="Day Two"
          date="28 . 06 . 2026 — The Reception"
          venueName="Royal Orchid Sheraton Riverside Hotel, Bangkok"
          sketch={<SheratonSketch />}
          className="border-t-[3px] border-sage"
        />

        <ReceptionBanner />

        <ClosingPolaroids />
      </div>
    </div>
  );
}

/* ─── Inline venue sketches — replace with <Image> when you have real art ─── */
function WestinSketch() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <svg width="100" height="80" viewBox="0 0 100 80" fill="none" className="opacity-35" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="60" height="40" stroke="#555" strokeWidth="1.5" />
        <rect x="35" y="45" width="12" height="25" stroke="#555" strokeWidth="1" />
        <rect x="53" y="45" width="12" height="25" stroke="#555" strokeWidth="1" />
        <polygon points="15,30 50,5 85,30" stroke="#555" strokeWidth="1.5" fill="none" />
        <rect x="42" y="10" width="16" height="20" stroke="#555" strokeWidth="1" />
        <line x1="0" y1="70" x2="100" y2="70" stroke="#555" strokeWidth="1" opacity="0.4" />
      </svg>
      <span className="text-[9px] uppercase tracking-widest text-stone-500/60">
        Venue Illustration
      </span>
    </div>
  );
}

function SheratonSketch() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <svg width="120" height="70" viewBox="0 0 120 70" fill="none" className="opacity-35" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="20" width="110" height="40" stroke="#555" strokeWidth="1.5" />
        <rect x="15" y="30" width="14" height="30" stroke="#555" strokeWidth="1" />
        <rect x="35" y="30" width="14" height="30" stroke="#555" strokeWidth="1" />
        <rect x="55" y="25" width="20" height="35" stroke="#555" strokeWidth="1.2" />
        <rect x="82" y="30" width="14" height="30" stroke="#555" strokeWidth="1" />
        <rect x="100" y="30" width="14" height="30" stroke="#555" strokeWidth="1" />
        <path d="M0 60 Q30 55 60 58 Q90 55 120 60" stroke="#555" strokeWidth="1" opacity="0.5" />
        <path d="M0 65 Q60 62 120 65" stroke="#555" strokeWidth="0.8" opacity="0.35" />
      </svg>
      <span className="text-[9px] uppercase tracking-widest text-stone-500/60">
        Venue Illustration
      </span>
    </div>
  );
}