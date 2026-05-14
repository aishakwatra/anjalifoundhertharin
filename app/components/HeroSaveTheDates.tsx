import Image from "next/image";

export default function HeroSaveTheDates() {
  return (
    <section className="bg-cream px-0 md:px-6 pt-14 pb-10 text-center md:pt-24 md:pb-20 overflow-hidden">
      
      {/* Title needs its own padding since section padding is now 0 */}
      <h1 className="font-script text-terracotta leading-[1.1] mb-8 md:mb-16
                     text-[clamp(52px,14vw,180px)] px-6">
        Save
        <br />
        the Dates
      </h1>

      {/* 1. Increased width to 95vw (almost edge to edge)
        2. Increased height significantly (min-h-[70vh] or a taller aspect ratio)
        3. Removed max-width restriction for now so you can see it grow
      */}
      <div className="relative mx-auto mb-8 md:mb-20 w-[95vw] md:w-[90vw] aspect-[3/4] md:aspect-[16/10] min-h-[600px]">
        
        {/* Layer 1: Sides */}
        <div className="absolute inset-0">
          <Image
            src="/photos/hero-sides.png"
            alt=""
            fill
            sizes="95vw"
            className="object-cover md:object-contain" 
            style={{ animation: "fadeSlideDown 1.2s ease forwards" }}
            priority
          />
        </div>

        {/* Layer 2: Middle */}
        <div className="absolute inset-0">
          <Image
            src="/photos/hero-middle.png"
            alt=""
            fill
            sizes="95vw"
            className="object-cover md:object-contain"
            style={{ animation: "fadeSlideUp 1.2s ease forwards" }}
            priority
          />
        </div>

        {/* Layer 3: Names */}
        <div className="pointer-events-none absolute inset-0 z-20">
          <Image
            src="/photos/hero-names.png"
            alt="Anjali & Tharin"
            fill
            sizes="95vw"
            className="object-contain" 
            priority
          />
        </div>
      </div>
      

      {/* "We're getting married!" — scales from tiny mobile to display-size desktop */}
      <p className="font-serif uppercase mb-6 md:mb-20
                    text-[13px] font-medium tracking-[0.15em]
                    md:text-[64px] md:font-normal md:tracking-[0.05em]">
        We&apos;re getting married!
      </p>

      <div className="flex justify-center mb-7 md:mb-16
                      gap-10 md:gap-40">
        <div className="text-center">
          <span className="block font-serif font-medium text-terracotta mb-1 md:mb-3
                           text-[14px] tracking-[0.15em]
                           md:text-[48px] md:tracking-[0.08em]">
            27 . 06 . 2026
          </span>
          <span className="block font-serif uppercase text-text-mid
                           text-[9px] tracking-[0.25em]
                           md:text-[16px] md:tracking-[0.4em]">
            Wedding
          </span>
        </div>
        <div className="text-center">
          <span className="block font-serif font-medium text-terracotta mb-1 md:mb-3
                           text-[14px] tracking-[0.15em]
                           md:text-[48px] md:tracking-[0.08em]">
            28 . 06 . 2026
          </span>
          <span className="block font-serif uppercase text-text-mid
                           text-[9px] tracking-[0.25em]
                           md:text-[16px] md:tracking-[0.4em]">
            Reception
          </span>
        </div>
      </div>

      <div className="text-terracotta tracking-[0.3em] opacity-70
                      text-[18px] md:text-[28px]">
        ❧ ⸻ ❧
      </div>
    </section>
  );
}