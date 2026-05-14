import Image from "next/image";

export default function FunctionsCeremonies() {
  return (
    <section className="bg-sage pb-12 md:pb-24 text-center">

      <div className="px-6 pt-7 pb-5 md:pt-16 md:pb-12">
        <div className="mb-5 md:mb-10 flex justify-center gap-5 md:gap-12">
          <div className="relative w-[500px] h-[500px] opacity-75">
            <Image src="/photos/ganesh.png" alt="Ganesh" fill className="object-contain" />
          </div>
          <div className="relative w-[500px] h-[500px] opacity-75">
            <Image src="/photos/onkar.png" alt="Onkar" fill className="object-contain" />
          </div>
        </div>

        <h2 className="font-script text-white leading-[1.1] text-[clamp(42px,11vw,140px)]">
            Functions
        </h2>
        <p className="font-script text-white/85 leading-[1.1] mb-8 md:mb-20
                    text-[clamp(32px,9vw,100px)]">
        &amp; Ceremonies
        </p>
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

      <span className="mt-2 block text-center font-serif text-[10px] font-medium uppercase tracking-[0.3em] text-terracotta">
        Day Two ↓
      </span>
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
    <div className="relative flex items-start gap-5">
      {!isLast && (
        <span className="absolute left-7 top-[54px] bottom-[-8px] w-px bg-white/30" />
      )}
      {/* Icon container using custom images */}
      <div className="w-14 h-14 flex-shrink-0 pt-0.5 relative">
        <Image src={iconPath} alt="" fill className="object-contain opacity-70" />
      </div>
      <div className="pt-1.5 pb-7">
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