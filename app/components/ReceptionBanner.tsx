import Image from "next/image";

export default function ReceptionBanner() {
  return (
    <div className="relative overflow-hidden bg-burgundy text-center
                    px-6 py-7 mt-7
                    md:px-12 md:py-24 md:mt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy to-[#4a0a0d] opacity-25 saturate-50" />

      <h2 className="relative z-10 mb-3 md:mb-8 font-script text-white
                     text-[clamp(40px,11vw,140px)]">
        Reception
      </h2>

      <div className="relative z-10 mx-auto mb-2.5 md:mb-6 opacity-75
                   h-12 w-12 md:h-20 md:w-20">
        <Image 
          src="/photos/glasses.png" 
          alt="Celebration" 
          fill 
          className="object-contain" 
        />
      </div>

      <p className="relative z-10 font-serif uppercase text-white/85
                    text-[11px] tracking-[0.3em] leading-[1.8]
                    md:text-[22px] md:tracking-[0.4em] md:leading-[2]">
        19:30 Onwards
        <br />
        Reception
      </p>
    </div>
  );
}