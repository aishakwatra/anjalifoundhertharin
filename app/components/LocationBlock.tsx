import Image from "next/image";

interface LocationBlockProps {
  dayLabel: string;
  date: string;
  venueName: string;
  className?: string;
}

export default function LocationBlock({
  dayLabel,
  date,
  venueName,
  className = "",
}: LocationBlockProps) {
  return (
    <div className={`bg-cream text-center
                     px-7 pt-9 pb-7
                     md:px-12 md:pt-24 md:pb-20 ${className}`}>
      <span className="block font-serif font-medium uppercase text-terracotta
                       text-[10px] tracking-[0.3em] mb-1.5
                       md:text-[16px] md:tracking-[0.4em] md:mb-4">
        {dayLabel}
      </span>
      <p className="font-serif uppercase
                    text-[12px] tracking-[0.25em] mb-4
                    md:text-[24px] md:tracking-[0.2em] md:mb-10">
        {date}
      </p>

      <div className="text-terracotta tracking-[0.3em] opacity-70
                      text-[14px] mb-2 md:text-[22px] md:mb-6">
        ❧ ⸻ ❧
      </div>

      <span className="block font-script text-terracotta my-4 md:my-10
                       text-[clamp(38px,10vw,110px)]">
        Location
      </span>

      {/* Replaced placeholder sketch with the actual Westin image */}
      <div className="relative mx-auto mb-3 aspect-[4/3] w-[90%] max-w-[340px] md:mb-6 md:max-w-[700px]">
        <Image 
          src="/photos/westin.png" 
          alt="The Westin Bangkok" 
          fill 
          className="object-contain" 
        />
      </div>

      <p className="font-serif uppercase text-text-mid mt-2.5
                    text-[9px] tracking-[0.3em]
                    md:text-[18px] md:tracking-[0.4em] md:mt-8">
        {venueName}
      </p>
    </div>
  );
}