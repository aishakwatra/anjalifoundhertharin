import Image from "next/image";

interface LocationBlockProps {
  dayLabel: string;
  date: string;
  venueName: string;
  venueImage: string; 
  className?: string;
}

export default function LocationBlock({
  dayLabel,
  date,
  venueName,
  venueImage,
  className = "",
}: LocationBlockProps) {
  return (
    <div className={`bg-cream text-center px-7 pt-10 pb-10 md:px-12 md:pt-20 md:pb-16 ${className}`}>
      {/* Day Label */}
      <span className="block font-serif font-bold uppercase text-terracotta text-[20px] tracking-[0.35em] mb-1 md:text-[35px] md:tracking-[0.4em] md:mb-2">
        {dayLabel}
      </span>
      
      {/* Date */}
      <p className="font-serif uppercase text-[13px] tracking-[0.25em] mb-2 md:text-[26px] md:tracking-[0.2em] md:mb-4">
        {date}
      </p>

      <div className="mx-auto mb-6 md:mb-10 w-40 md:w-44 opacity-80">
        <Image 
          src="/photos/line.png" 
          alt="" 
          width={500}
          height={60}
          className="w-full h-auto"
        />
      </div>

      {/* Location script */}
      <div className="mx-auto mb-8 md:mb-12 w-64 md:w-[380px]">
        <Image 
          src="/photos/location.png" 
          alt="Location" 
          width={1463}
          height={580}
          priority
          className="w-full h-auto"
        />
      </div>

      {/* 3. Venue Sketch — Balanced size with the enlarged headers */}
      <div className="relative mx-auto mb-4 aspect-[4/3] w-[90%] max-w-[400px] md:max-w-[850px]">
        <Image 
          src={venueImage} 
          alt={venueName} 
          fill 
          sizes="(max-width: 768px) 90vw, 850px" 
          className="object-contain" 
        />
      </div>

      {/* Venue Name */}
      <p className="font-serif uppercase text-text-mid mt-2 text-[11px] tracking-[0.3em] leading-relaxed md:text-[20px] md:tracking-[0.4em] md:mt-6">
        {venueName}
      </p>
    </div>
  );
}