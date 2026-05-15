import Image from "next/image";

export default function FunctionsCeremonies() {
  return (
    <section className="bg-sage pb-12 md:pb-24 text-center">
      <div className="px-6 pt-7 pb-5 md:pt-16 md:pb-12">
        <div className="mb-5 md:mb-10 flex justify-center gap-5 md:gap-12">
          <div className="relative w-[150px] h-[150px] opacity-75">
            <Image 
              src="/photos/ganesh.png" 
              alt="Ganesh" 
              fill 
              sizes="150px"
              className="object-contain" 
             />
          </div>
          <div className="relative w-[150px] h-[150px] opacity-75">
            <Image 
              src="/photos/onkar.png" 
              alt="Ek Onkar" 
              fill 
              sizes="150px" 
              className="object-contain" 
             />
          </div>
        </div>
        <div className="relative mx-auto mb-8 w-[70vw] md:w-[50vw] max-w-[600px] h-[150px] md:h-[280px]">
          <Image 
            src="/photos/functions.png" 
            alt="Functions & Ceremonies" 
            fill 
            sizes="(max-width: 768px) 70vw, 600px"
            className="object-contain" 
          />
        </div>
      </div>

      <div className="px-9 md:px-24 text-left max-w-[700px] mx-auto">
        <TimelineItem
          time="14:00"
          event="Baraat Starts"
          detail="Groom's Side"
          iconPath="/photos/baraat.png"
        />
        <TimelineItem
          time="15:00"
          event="Welcome Baraat"
          detail="Bride's Side"
          iconPath="/photos/baraat.png"
        />
        <TimelineItem
          time="16:00"
          event="Varmala & Phere"
          iconPath="/photos/phere.png"
          isLast
        />
      </div>
    </section>
  );
}

function TimelineItem({
  time,
  event,
  detail,
  iconPath,
  isLast = false,
}: {
  time: string;
  event: string;
  detail?: string;
  iconPath: string;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex items-start gap-5 md:gap-8">
      {/* Line starts at bottom edge of icon (top-20 = 80px on mobile, top-28 = 112px on desktop)
          and left is half the icon width to stay centered beneath it */}
      {!isLast && (
        <span className="absolute left-10 md:left-14 top-20 md:top-28 bottom-0 w-px bg-white/30" />
      )}

      {/* Fixed-size icon column */}
      <div className="w-20 h-20 flex-shrink-0 relative md:w-28 md:h-28">
        <Image 
          src={iconPath} 
          alt="" 
          fill 
          sizes="(max-width: 768px) 80px, 112px"
          className="object-contain opacity-70" 
        />
      </div>

      {/* Text — pb creates the gap between items so the line has space to breathe */}
      <div className="pt-1.5 pb-12 md:pb-16">
        <span className="block font-serif text-white/65 mb-0.5 md:mb-2
                        text-[11px] tracking-wider
                        md:text-[18px]">
          {time}
        </span>
        <p className="font-serif font-medium uppercase text-white mb-0.5 md:mb-2
                    text-[14px] tracking-[0.2em]
                    md:text-[22px] md:tracking-[0.15em]">
          {event}
        </p>
        {detail && (
          <span className="font-serif uppercase text-white/50
                 text-[9px] tracking-[0.2em]
                 md:text-[14px] md:tracking-[0.3em]">
            {detail}
          </span> 
        )}
      </div>
    </div>
  );
}