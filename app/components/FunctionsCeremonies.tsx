import Image from "next/image";

export default function FunctionsCeremonies() {
  return (
    <section className="bg-sage pb-12 md:pb-24 text-center">
      <div className="px-6 pt-7 pb-5 md:pt-16 md:pb-12">
        <div className="mb-5 md:mb-10 flex justify-center gap-5 md:gap-12">
          <div className="relative mb-6 w-[80px] h-[80px] md:w-[200px] md:h-[200px] opacity-75">
            <Image 
              src="/photos/ganesh.png" 
              alt="Ganesh" 
              fill 
              sizes="(max-width: 768px) 80px, 200px"
              className="object-contain" 
            />
          </div>
          <div className="relative mb-6 w-[80px] h-[80px] md:w-[200px] md:h-[200px] opacity-75">
            <Image 
              src="/photos/onkar.png" 
              alt="Ek Onkar" 
              fill 
              sizes="(max-width: 768px) 80px, 200px"
              className="object-contain" 
            />
          </div>
        </div>
        <div className="relative mx-auto mb-2 w-[70vw] md:w-[50vw] max-w-[600px] h-[150px] md:h-[280px]">
          <Image 
            src="/photos/functions.png" 
            alt="Functions & Ceremonies" 
            fill 
            sizes="(max-width: 768px) 70vw, 600px"
            className="object-contain" 
          />
        </div>
      </div>

      <div className="px-9 md:px-24 text-left max-w-[900px] mx-auto">
        <TimelineItem
          time="15:00"
          event="Baraat Starts"
          detail="Groom's Side"
          location="Lower Lobby (G Floor)"
          iconPath="/photos/baraat.png"
        />
        <TimelineItem
          time="16:00"
          event="Welcome Baraat"
          detail="Bride's Side"
          location="Foyer Grand Ballroom (7th Floor)"
          iconPath="/photos/baraat.png"
        />
        <TimelineItem
          time="17:00"
          event="Varmala"
          location="Grand Ballroom (7th Floor)"
          iconPath="/photos/varmala.png"
          className="h-44 md:h-64"
        />
        <TimelineItem
          time="18:00"
          event="Phere"
          location="Grand Ballroom (7th Floor)"
          iconPath="/photos/phere.png"
          className="h-44 md:h-64"
          isLast
        />
      </div>

      <div className="mt-10 md:mt-16 text-center">
        <span className="block font-serif uppercase text-white/90
                         text-[13px] tracking-[0.35em]
                         md:text-[22px] md:tracking-[0.5em]">
          Dresscode
        </span>
        <span className="block font-serif uppercase text-white
                         text-[20px] tracking-[0.3em] mt-1
                         md:text-[32px] md:tracking-[0.4em] md:mt-2">
          Traditional Indian Attire
        </span>
      </div>
    </section>
  );
}

function TimelineItem({
  time,
  event,
  detail,
  location,
  iconPath,
  isLast = false,
  lineOffset = "left-9 md:left-20",
  className = "",
}: {
  time: string;
  event: string;
  detail?: string;
  location?: string;
  iconPath: string;
  isLast?: boolean;
  lineOffset?: string;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center gap-5 md:gap-12 h-36 md:h-56 ${className}`}>
      {!isLast && (
        <span className={`absolute ${lineOffset} top-[80%] bottom-[-20%] w-px bg-white/30`} />
      )}

      {/* Icon */}
      <div className="w-20 h-20 flex-shrink-0 relative md:w-36 md:h-36">
        <Image
          src={iconPath}
          alt=""
          fill
          sizes="(max-width: 768px) 80px, 144px"
          className="object-contain opacity-70"
        />
      </div>

      {/* Text */}
      <div>
        <span className="block font-display text-white/85 mb-0.5 md:mb-3
                         text-[13px] tracking-wider
                         md:text-[24px] md:tracking-[0.15em]">
          {time}
        </span>
        <p className="font-serif font-medium uppercase text-white mb-0.5 md:mb-3
                      text-[16px] tracking-[0.2em]
                      md:text-[32px] md:tracking-[0.15em]">
          {event}
        </p>
        {detail && (
          <span className="block font-serif uppercase text-white/70
                           text-[11px] tracking-[0.2em]
                           md:text-[18px] md:tracking-[0.3em]">
            {detail}
          </span>
        )}
        {location && (
          <span className="block font-serif italic text-white/80 mt-0.5
                           text-[15px] tracking-[0.15em]
                           md:text-[20px] md:tracking-[0.2em] md:mt-1">
            {location}
          </span>
        )}
      </div>
    </div>
  );
}