'use client';

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-06-27T00:00:00+07:00");

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setT(getTimeLeft());
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-sage-bg text-center px-6 pt-8 pb-7 md:px-12 md:pt-24 md:pb-24">
      
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(0,0,0,0.08) 0%, transparent 50%)",
        }}
      />

      <h2 className="relative font-script text-white mb-1.5 md:mb-4
                     text-[clamp(38px,10vw,110px)]">
        Countdown
      </h2>
      <p className="relative font-serif uppercase text-white/75
                    text-[9px] tracking-[0.3em] mb-5
                    md:text-[18px] md:tracking-[0.4em] md:mb-20">
        To the most special day of our lives
      </p>

      <div className="relative flex justify-center items-start
                      max-w-[1100px] mx-auto">
        <TimerUnit value={pad(t.days)} label="Days" />
        <Colon />
        <TimerUnit value={pad(t.hours)} label="Hours" />
        <Colon />
        <TimerUnit value={pad(t.minutes)} label="Minutes" />
        <Colon />
        <TimerUnit value={pad(t.seconds)} label="Seconds" />
      </div>
    </section>
  );
}

function TimerUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center
                    min-w-[64px]
                    md:flex-1">
      <span className="block font-serif font-light text-white leading-none
                       text-[clamp(30px,8vw,120px)]">
        {value}
      </span>
      <span className="block font-serif uppercase text-white/65
                       text-[8px] tracking-[0.25em] mt-1
                       md:text-[16px] md:tracking-[0.4em] md:mt-6">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span className="font-serif font-light text-white/70 leading-none
                     text-3xl mt-0.5 px-0.5
                     md:text-[80px] md:mt-2 md:px-4">
      :
    </span>
  );
}