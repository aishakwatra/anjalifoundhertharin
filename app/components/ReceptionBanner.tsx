import Image from "next/image";

export default function ReceptionBanner() {
  return (
    <div className="relative overflow-hidden bg-burgundy text-center px-6 py-12 md:py-32">
      {/* Translucent background image */}
      <div className="absolute inset-0 z-0 opacity-20 saturate-0">
        <Image src="/photos/hero-sides.png" alt="" fill className="object-cover" />
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
        {/* Glasses icon and time text... */}
      </div>
    </div>
  );
}