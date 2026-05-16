import Image from "next/image";

export default function HeroSaveTheDates3() {
  return (
    <section className="bg-cream px-0 md:px-6 pt-14 pb-10 text-center md:pt-24 md:pb-20 overflow-hidden">

      <h1 className="relative mx-auto mb-8 w-[60vw] md:w-[40vw] max-w-[450px] h-[100px] md:h-[180px]">
        <span className="sr-only">Save the Dates</span>
        <Image
          src="/photos/save-the-date.png"
          alt="Save the Dates"
          fill
          sizes="(max-width: 768px) 60vw, 450px"
          className="object-contain"
          priority
        />
      </h1>

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

      {/* "We're getting married!" */}
      <p className="font-serif uppercase mb-6 md:mb-20
                    text-[13px] font-medium tracking-[0.15em]
                    md:text-[64px] md:font-normal md:tracking-[0.05em]">
        We&apos;re getting married!
      </p>

      {/* ── MEHENDI ROW ── */}
      <div className="flex flex-col items-center mb-8 md:mb-14">
        {/* Henna hands illustration */}
        <div className="relative w-[120px] h-[100px] md:w-[200px] md:h-[160px] mb-3 md:mb-5">
          <Image
            src="/photos/mehendi-hands-placeholder.png"
            alt="Mehndi hands illustration"
            fill
            sizes="(max-width: 768px) 120px, 200px"
            className="object-contain opacity-80"
          />
        </div>

        <span className="block font-serif font-medium text-terracotta mb-1 md:mb-3
                         text-[14px] tracking-[0.15em]
                         md:text-[48px] md:tracking-[0.08em]">
          26 . 06 . 2026
        </span>
        <span className="block font-serif uppercase text-text-mid
                         text-[15px] tracking-[0.25em]
                         md:text-[25px] md:tracking-[0.4em]">
          Mehendi
        </span>
      </div>

      <div className="mx-auto mb-8 md:mb-14 w-40 md:w-56 opacity-60">
            <Image
                src="/photos/line.png"
                alt=""
                width={500}
                height={60}
                className="w-full h-auto"
            />
            </div>

      {/* ── WEDDING + RECEPTION ROW ── */}
      <div className="flex justify-center mb-7 md:mb-16
                      gap-10 md:gap-40">
        <div className="text-center">
          <span className="block font-serif font-medium text-terracotta mb-1 md:mb-3
                           text-[14px] tracking-[0.15em]
                           md:text-[48px] md:tracking-[0.08em]">
            27 . 06 . 2026
          </span>
          <span className="block font-serif uppercase text-text-mid
                           text-[15px] tracking-[0.25em]
                           md:text-[25px] md:tracking-[0.4em]">
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
                           text-[15px] tracking-[0.25em]
                           md:text-[25px] md:tracking-[0.4em]">
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