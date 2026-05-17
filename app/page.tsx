'use client';

import { useState } from "react";
import HeroSaveTheDates2 from "./components/HeroSaveTheDates2";
import FunctionsCeremonies from "./components/FunctionsCeremonies";
import LocationBlock from "./components/LocationBlock";
import Countdown from "./components/Countdown";
import ReceptionBanner from "./components/ReceptionBanner";
import ClosingPolaroids from "./components/ClosingPolaroids";
import EnvelopeGate from "./components/EnvelopeGate";
import FamilyInvite from "./components/FamilyInvite";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen bg-cream">
      {!opened && <EnvelopeGate onOpen={() => setOpened(true)} />}

      {/* Pass opened state to hero so it only animates after gate dismissal */}
      <HeroSaveTheDates2 animate={opened} />
      <FamilyInvite/>
      <Countdown />
      <LocationBlock
        dayLabel="Day One"
        date="27 . 06 . 2026 — THE WEDDING"
        venueName="The Westin Grande Sukhumvit, Bangkok"
        venueImage="/photos/westin.png"
      />
      <FunctionsCeremonies />
      <LocationBlock
        dayLabel="Day Two"
        date="28 . 06 . 2026 — THE RECEPTION"
        venueName="Royal Orchid Sheraton Riverside Hotel, Bangkok"
        venueImage="/photos/orchid.png"
      />
      <ReceptionBanner />
      <ClosingPolaroids />

    </main>
  );
}