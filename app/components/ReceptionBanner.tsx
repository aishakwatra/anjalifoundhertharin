import Image from "next/image";

export default function ReceptionBanner() {
  return (
    <div className="relative overflow-hidden bg-burgundy text-center px-6 py-12 md:py-52">
      {/* Translucent background image */}
      <div className="absolute inset-0 z-0 opacity-17 saturate-0">
        <Image src="/photos/couple5.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="relative z-10">
        <div className="relative mx-auto mb-6 w-[60vw] md:w-[40vw] h-[80px] md:h-[150px]">
          <Image
            src="/photos/reception.png"
            alt="Reception"
            fill
            sizes="(max-width: 768px) 60vw, 40vw"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center gap-8 md:gap-14">
          <div className="relative w-[80px] h-[110px] md:w-[120px] md:h-[160px] opacity-90">
            <Image
              src="/photos/glasses.png"
              alt="Champagne glasses"
              fill
              sizes="(max-width: 768px) 80px, 120px"
              className="object-contain"
            />
          </div>

          <div className="text-left">
            <p className="font-display uppercase text-white
                          text-[13px] tracking-[0.3em] mb-1
                          md:text-[22px] md:tracking-[0.25em] md:mb-2">
              19:30 Onwards
            </p>
            <p className="font-serif uppercase text-white/90
                          text-[10px] tracking-[0.35em]
                          md:text-[20px] md:tracking-[0.4em]">
              Royal Orchid Ballroom
            </p>
            <p className="font-serif uppercase text-white/90
                          text-[9px] tracking-[0.28em] mt-2
                          md:text-[17px] md:tracking-[0.32em] md:mt-3">
              Followed by the After Party at <strong>Midnight</strong>
            </p>
          </div>


        </div>

         <div className="mt-10 md:mt-16 text-center">
        <span className="block font-serif uppercase text-white/90
                         text-[13px] tracking-[0.35em]
                         md:text-[22px] md:tracking-[0.5em]">
          DRESSCODE
        </span>
        <span className="block font-serif uppercase text-white/90
                         text-[10px] tracking-[0.3em] mt-5
                         md:text-[17px] md:tracking-[0.4em] md:mt-7">
          Reception
        </span>
        <span className="block font-serif uppercase text-white
                         text-[13px] tracking-[0.3em] mt-1
                         md:text-[25px] md:tracking-[0.4em] md:mt-2">
          Elegant Indian Attire
        </span>
        <span className="block font-serif uppercase text-white/90
                         text-[10px] tracking-[0.3em] mt-6
                         md:text-[17px] md:tracking-[0.4em] md:mt-8">
          After Party
        </span>
        <span className="block font-serif uppercase text-white
                         text-[13px] tracking-[0.3em] mt-1
                         md:text-[25px] md:tracking-[0.4em] md:mt-2">
          World Cup Jersey / Sports Attire
        </span>
      </div>
      </div>
    </div>
  );
}
