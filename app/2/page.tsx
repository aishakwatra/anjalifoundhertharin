'use client';

import { useState } from "react";
import HeroSaveTheDates from "../components/HeroSaveTheDates";
import FunctionsCeremonies from "../components/FunctionsCeremonies";
import LocationBlock from "../components/LocationBlock";
import Countdown from "../components/Countdown";
import ReceptionBanner from "../components/ReceptionBanner";
import ClosingPolaroids from "../components/ClosingPolaroids";
import EnvelopeGate from "../components/EnvelopeGate";
import FamilyInvite from "../components/FamilyInvite";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen bg-cream">
      {!opened && <EnvelopeGate onOpen={() => setOpened(true)} />}

      {/* Pass opened state to hero so it only animates after gate dismissal */}
      <HeroSaveTheDates animate={opened} dateSet="27-28" />
      <FamilyInvite firstParentGroup="groom" />
      <Countdown />
      <LocationBlock
        dayLabel="Day One"
        date="27 . 06 . 2026 — THE WEDDING"
        venueName="The Westin Grande Sukhumvit, Bangkok"
        venueImage="/photos/westin.png"
      />
      <FunctionsCeremonies topIcon="onkar" />
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
