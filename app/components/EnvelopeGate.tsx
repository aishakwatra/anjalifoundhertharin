'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

interface EnvelopeGateProps {
  onOpen: () => void;
}

export default function EnvelopeGate({ onOpen }: EnvelopeGateProps) {
  const [fading, setFading] = useState(false);

  // Lock scroll on mount, unlock on unmount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClick = () => {
    setFading(true);
    setTimeout(onOpen, 800);
  };

  return (
    <div
      onClick={handleClick}
      className="fixed inset-0 z-50 cursor-pointer"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.8s ease",
      }}
    >
      <div className="block md:hidden w-full h-full relative">
        <Image
          src="/photos/envelope-cover-portrait.png"
          alt="Open your invitation"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="hidden md:block w-full h-full relative">
        <Image
          src="/photos/envelope-cover-landscape.png"
          alt="Open your invitation"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="absolute bottom-30 left-0 right-0 text-center"
        style={{
          opacity: fading ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        <p className="font-serif uppercase tracking-[0.3em] text-white/80 text-[20px] md:text-[18px]"
           style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
          Tap to open
        </p>
      </div>
    </div>
  );
}