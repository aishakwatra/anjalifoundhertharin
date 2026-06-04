import Image from "next/image";

interface LocationBlockProps {
  dayLabel: string;
  date: string;
  venueName: string;
  venueImage: string; 
  details?: string[];
  showLocationLabel?: boolean;
  venueImageSize?: "default" | "small";
  detailsSize?: "default" | "large";
  className?: string;
}

export default function LocationBlock({
  dayLabel,
  date,
  venueName,
  venueImage,
  details = [],
  showLocationLabel = true,
  venueImageSize = "default",
  detailsSize = "default",
  className = "",
}: LocationBlockProps) {
  const venueImageSizeClass =
    venueImageSize === "small"
      ? "max-w-[200px] md:max-w-[425px]"
      : "max-w-[400px] md:max-w-[850px]";
  const detailTextClass =
    detailsSize === "large"
      ? "text-[15px] tracking-[0.25em] md:text-[24px] md:tracking-[0.35em]"
      : "text-[11px] tracking-[0.22em] md:text-[18px] md:tracking-[0.3em]";

  return (
    <div className={`bg-cream text-center px-7 pt-10 pb-10 md:px-12 md:pt-20 md:pb-16 ${className}`}>
      {/* Day Label */}
      <span className="block font-serif font-bold uppercase text-terracotta text-[20px] tracking-[0.35em] mb-1 md:text-[35px] md:tracking-[0.4em] md:mb-2">
        {dayLabel}
      </span>
      
      {/* Date */}
      <p className="font-display uppercase text-[13px] tracking-[0.25em] mb-4 md:text-[26px] md:tracking-[0.2em] md:mb-8">
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
      {showLocationLabel && (
        <div className="mx-auto mb-2 md:mb-2 w-45 md:w-[320px]">
          <Image 
            src="/photos/location.png" 
            alt="Location" 
            width={1463}
            height={580}
            priority
            className="w-full h-auto"
          />
        </div>
      )}

      {/* 3. Venue Sketch — Balanced size with the enlarged headers */}
      <div className={`relative mx-auto mb-4 aspect-[4/3] w-[90%] ${venueImageSizeClass}`}>
        <Image 
          src={venueImage} 
          alt={venueName} 
          fill 
          sizes="(max-width: 768px) 90vw, 850px" 
          className="object-contain" 
        />
      </div>

      {/* Venue Name */}
      <p className="font-display uppercase text-text-mid mt-2 text-[11px] tracking-[0.3em] leading-relaxed md:text-[20px] md:tracking-[0.4em] md:mt-6">
        {venueName}
      </p>

      {details.length > 0 && (
        <div className="mt-2 md:mt-4">
          {details.map((detail) => (
            <p
              key={detail}
              className={`font-serif uppercase text-text-mid leading-relaxed ${detailTextClass}`}
            >
              {detail}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
