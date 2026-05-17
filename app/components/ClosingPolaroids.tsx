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
    { src: "/photos/couple8.jpg", alt: "Anjali & Tharin" },
    { src: "/photos/couple5.jpg", alt: "Anjali & Tharin" },
    { src: "/photos/couple6.jpg", alt: "Anjali & Tharin" },
    { src: "/photos/couple7.jpg", alt: "Anjali & Tharin" },
   
  ];

  const desktopPolaroids: Omit<PolaroidState, "src" | "alt">[] = [
    { startX: -40,  startY: -520, startRotate: -22, endX: -170, endY:  30,  endRotate: -12 },
    { startX:  30,  startY: -470, startRotate:  10, endX:   85, endY: -40,  endRotate:   3 },
    { startX:  20,  startY: -500, startRotate:  18, endX:  340, endY:  20,  endRotate:  11 },
    { startX: -30,  startY: -510, startRotate: -16, endX: -130, endY:  55,  endRotate:  -8 },
    { startX:  10,  startY: -480, startRotate:   6, endX:  105, endY:  10,  endRotate:  -2 },
    { startX:  25,  startY: -460, startRotate:  20, endX:  370, endY: -10,  endRotate:  14 },
    { startX: -20,  startY: -490, startRotate: -12, endX: -150, endY: -20,  endRotate:  -6 },
    { startX:  15,  startY: -455, startRotate:   8, endX:  110, endY:  50,  endRotate:   4 },
  ];

  const mobilePolaroids: Omit<PolaroidState, "src" | "alt">[] = [
    { startX: -40,  startY: -520, startRotate: -22, endX:  -50, endY:  20,  endRotate: -12 },
    { startX:  30,  startY: -470, startRotate:  10, endX:   50, endY: -15,  endRotate:   3 },
    { startX:  20,  startY: -500, startRotate:  18, endX:  145, endY:  15,  endRotate:  11 },
    { startX: -30,  startY: -510, startRotate: -16, endX:  -35, endY:  30,  endRotate:  -8 },
    { startX:  10,  startY: -480, startRotate:   6, endX:   58, endY:   5,  endRotate:  -2 },
    { startX:  25,  startY: -460, startRotate:  20, endX:  155, endY:  -8,  endRotate:  14 },
    { startX: -20,  startY: -490, startRotate: -12, endX:  -40, endY: -10,  endRotate:  -6 },
    { startX:  15,  startY: -455, startRotate:   8, endX:   55, endY:  25,  endRotate:   4 },
  ];

  const base = isDesktop ? desktopPolaroids : mobilePolaroids;
  const polaroids: PolaroidState[] = base.map((p, i) => ({ ...p, ...photos[i] }));

  // Spread 8 polaroids evenly across the scroll window
  const getPolaroidProgress = (index: number) => {
    const windowSize = 0.14;
    const gap = (1 - windowSize) / (polaroids.length - 1);
    const start = index * gap;
    const end = start + windowSize;
    return easeOut(clamp01((progress - start) / (end - start)));
  };

  return (
    <section
      ref={sectionRef}
      className="bg-cream relative md:pb-32"
      style={{ height: "400vh" }}
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
                        h-[260px] w-[230px]
                        md:h-[460px] md:w-[460px]">
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
                           w-[170px] p-2.5 pb-7
                           md:w-[310px] md:p-4 md:pb-14"
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
                    sizes="(max-width: 768px) 170px, 310px"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing text */}
        <div className="mx-auto font-body italic text-text-mid text-center
                        max-w-[340px] text-[15px] leading-[1.9] mt-8
                        md:max-w-[700px] md:text-[19px] md:leading-[1.8] md:mt-32">
          <p>
            With full hearts and so much love, we are so excited to begin this new chapter together. It would truly mean the world to us to have you by our side as we celebrate our wedding.
          </p>
          <p className="mt-4 md:mt-8">
            Your presence would make our day all the more special, and we cannot imagine this moment without the people we love most.
            <br />
            We can&apos;t wait to celebrate together.
          </p>

          <p className="mt-4 md:mt-8 font-medium"> 
     
            #SoJuforlife
          </p>
        </div>

      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
      `}</style>
    </section>
  );
}
