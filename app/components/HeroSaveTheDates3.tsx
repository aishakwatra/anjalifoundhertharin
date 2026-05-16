import Image from "next/image";

interface HeroProps {
  animate: boolean;
}

export default function HeroSaveTheDates3({ animate }: HeroProps) {
  return (
    <section className="bg-cream px-0 md:px-6 pt-14 pb-4 text-center md:pt-24 md:pb-8 overflow-hidden">
      
      <h1 className="relative mx-auto mb-8 w-[80vw] md:w-[60vw] max-w-[600px] h-[150px] md:h-[200px]">
        <span className="sr-only">You're Invited</span>
        <Image 
          src="/photos/youre-invited.png" 
          alt="Save the Dates"
          fill 
          sizes="(max-width: 768px) 80vw, 600px"
          className="object-contain" 
          priority
        />
      </h1>
      
      <div className="relative mx-auto mb-8 md:mb-20
                w-[95vw] md:w-[75vw]
                aspect-square">
        
        {/* Layer 1: Sides */}
        <div className="absolute inset-0">
          <Image
            src="/photos/hero-sides.png"
            alt=""
            fill
            sizes="(max-width: 768px) 95vw, 75vw"
            className="object-contain"
            style={animate ? { animation: "fadeSlideDown 1.2s ease forwards" } : { opacity: 0 }}
            priority
          />
        </div>

        {/* Layer 2: Middle */}
        <div className="absolute inset-0">
          <Image
            src="/photos/hero-middle.png"
            alt=""
            fill
            sizes="(max-width: 768px) 95vw, 75vw"
            className="object-contain"
            style={animate ? { animation: "fadeSlideUp 1.2s ease forwards" } : { opacity: 0 }}
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
                    text-[13px] tracking-[0.15em]
                    md:text-[64px] md:font-normal md:tracking-[0.05em]">
        We&apos;re getting married!
      </p>
 
      {/* ── MEHENDI ── */}
       <div className="flex items-center justify-center gap-0 md:gap-12 mb-7 md:mb-16">
        <div className="relative w-[130px] h-[160px] md:w-[180px] md:h-[240px] flex-shrink-0">
          <Image
            src="/photos/mehendi.png"
            alt="Mehndi hands illustration"
            fill
            sizes="(max-width: 768px) 130px, 260px"
            className="object-contain opacity-80"
          />
        </div>
        <div className="text-left">
          <span className="block font-display text-terracotta mb-1 md:mb-3
                           text-[14px] tracking-[0.15em]
                           md:text-[48px] md:tracking-[0.08em]">
            26 . 06 . 2026
          </span>
          <span className="block font-serif font-medium uppercase text-text-mid
                           text-[15px] tracking-[0.25em]
                           md:text-[25px] md:tracking-[0.4em]">
            Mehendi
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto mb-7 md:mb-16 w-40 md:w-56 opacity-60">
        <Image
          src="/photos/line.png"
          alt=""
          width={500}
          height={60}
          className="w-full h-auto"
        />
      </div>

      {/* ── WEDDING + RECEPTION ── */}
      <div className="flex justify-center mb-7 md:mb-16
                      gap-10 md:gap-40">
        <div className="text-center">
          <span className="block font-display text-terracotta mb-1 md:mb-3
                           text-[14px] tracking-[0.15em]
                           md:text-[48px] md:tracking-[0.08em]">
            27 . 06 . 2026
          </span>
          <span className="block font-serif font-medium uppercase text-text-mid
                           text-[15px] tracking-[0.25em]
                           md:text-[25px] md:tracking-[0.4em]">
            Wedding
          </span>
        </div>
        <div className="text-center">
          <span className="block font-display text-terracotta mb-1 md:mb-3
                           text-[14px] tracking-[0.15em]
                           md:text-[48px] md:tracking-[0.08em]">
            28 . 06 . 2026
          </span>
          <span className="block font-serif font-medium uppercase text-text-mid
                           text-[15px] tracking-[0.25em]
                           md:text-[25px] md:tracking-[0.4em]">
            Reception
          </span>
        </div>
      </div>

    </section>
  );
}