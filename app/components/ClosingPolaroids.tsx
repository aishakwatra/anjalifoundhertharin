'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

interface PolaroidState {
  startX: number;
  startY: number;
  startRotate: number;
  endX: number;
  endY: number;
  endRotate: number;
  src: string;
  alt: string;
}

export default function ClosingPolaroids() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let rafId: number;

    const update = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const p = clamp01(scrolled / scrollable);
      setProgress(p);
      if (p > 0.02) setHasScrolled(true);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const photos = [
    { src: "/photos/couple1.jpg", alt: "Anjali & Tharin" },
    { src: "/photos/couple2.jpg", alt: "Anjali & Tharin" },
    { src: "/photos/couple3.jpg", alt: "Anjali & Tharin" },
    { src: "/photos/couple4.jpg", alt: "Anjali & Tharin" },
  ];

  const desktopPolaroids: Omit<PolaroidState, "src" | "alt">[] = [
    { startX: -40, startY: -500, startRotate: -22, endX: -80, endY: 30,  endRotate: -7 },
    { startX:  30, startY: -450, startRotate:  18, endX:  50, endY: -10, endRotate:  4 },
    { startX: -20, startY: -480, startRotate: -14, endX: -20, endY: 15,  endRotate: -2 },
    { startX:  15, startY: -460, startRotate:  20, endX:  60, endY: 5,   endRotate:  6 },
  ];

  const mobilePolaroids: Omit<PolaroidState, "src" | "alt">[] = [
    { startX: -40, startY: -500, startRotate: -22, endX: -40, endY: 15,  endRotate: -7 },
    { startX:  30, startY: -450, startRotate:  18, endX:  25, endY: -5,  endRotate:  4 },
    { startX: -20, startY: -480, startRotate: -14, endX: -10, endY: 10,  endRotate: -2 },
    { startX:  15, startY: -460, startRotate:  20, endX:  35, endY: 3,   endRotate:  6 },
  ];

  const base = isDesktop ? desktopPolaroids : mobilePolaroids;
  const polaroids: PolaroidState[] = base.map((p, i) => ({ ...p, ...photos[i] }));

  // First polaroid triggers very early (0→0.15), rest follow
  const getPolaroidProgress = (index: number) => {
    const windows = [
      { start: 0,    end: 0.15 }, // first one shows up almost immediately
      { start: 0.2,  end: 0.45 },
      { start: 0.45, end: 0.65 },
      { start: 0.65, end: 0.82 },
    ];
    const { start, end } = windows[index];
    return easeOut(clamp01((progress - start) / (end - start)));
  };

  return (
    <section
      ref={sectionRef}
      className="bg-cream relative md:pb-32"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-7 md:px-12">

        {/* Keep scrolling hint — fades out once they start scrolling */}
        <div
          className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2"
          style={{
            opacity: hasScrolled ? 0 : 1,
            transition: "opacity 0.6s ease",
            pointerEvents: "none",
          }}
        >
          <p className="font-body italic text-text-mid text-[15px] md:text-[25px] tracking-widest">
            keep scrolling
          </p>
          {/* Animated chevron */}
          <svg
            width="20" height="20" viewBox="0 0 20 20"
            className="text-text-mid opacity-60"
            style={{ animation: "bounce 1.5s ease-in-out infinite" }}
          >
            <path
              d="M4 7 L10 13 L16 7"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Polaroid stack */}
        <div className="relative mx-auto mt-16 md:mt-24
                        h-[230px] w-[200px]
                        md:h-[400px] md:w-[400px]">
          {polaroids.map((p, i) => {
            const t = getPolaroidProgress(i);
            const x = lerp(p.startX, p.endX, t);
            const y = lerp(p.startY, p.endY, t);
            const rotate = lerp(p.startRotate, p.endRotate, t);
            const opacity = clamp01(t * 2);

            return (
              <div
                key={i}
                className="absolute bg-white shadow-[0_2px_14px_rgba(0,0,0,0.12)]
                           w-[150px] p-2 pb-6
                           md:w-[280px] md:p-4 md:pb-12"
                style={{
                  zIndex: 10 + i * 10,
                  transform: `translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                  opacity,
                  willChange: "transform, opacity",
                }}
              >
                <div className="aspect-square w-full relative overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 150px, 280px"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing text */}
          <div className="mx-auto font-body italic text-text-mid text-center
                          max-w-[340px] text-[15px] leading-[1.9] mt-8
                          md:max-w-[700px] md:text-[25px] md:leading-[1.8] md:mt-16">
            <p>
              With full hearts and so much love, we are so excited to begin this new chapter together. It would truly mean the world to us to have you by our side as we celebrate our wedding.
            </p>
            <p className="mt-4 md:mt-8">
              Your presence would make our day all the more special, and we cannot imagine this moment without the people we love most.
              <br />
              We can&apos;t wait to celebrate together.
            </p>
          </div>

      </div>

      {/* Bounce keyframe */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </section>
  );
}