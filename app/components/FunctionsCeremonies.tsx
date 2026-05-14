export default function FunctionsCeremonies() {
  return (
    <section className="bg-sage pb-12 md:pb-24 text-center">
     <span className="block border-b border-white/15 text-left font-serif uppercase text-white/65
                 px-6 py-3.5 text-[9px] tracking-[0.3em]
                 md:px-12 md:py-6 md:text-[14px] md:tracking-[0.4em]">
        The Westin Grande Sukhumvit, Bangkok
      </span>

      <div className="px-6 pt-7 pb-5 md:pt-16 md:pb-12">
        {/* Hindu + Sikh emblems */}
        <div className="mb-5 md:mb-10 flex justify-center gap-5 md:gap-12">
          <GaneshEmblem />
          <KhandaEmblem />
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
          icon={<DholIcon />}
        />
        <TimelineItem
          time="15:00"
          event="Welcome Baraat"
          detail="Bride's Side"
          icon={<DholIcon variant="filled" />}
        />
        <TimelineItem
          time="16:00"
          event="Varmala & Phere"
          icon={<VarmalaIcon />}
          isLast
        />
      </div>

      <span className="mt-2 block text-center font-serif text-[10px] font-medium uppercase tracking-[0.3em] text-terracotta">
        Day Two ↓
      </span>
    </section>
  );
}

/* ──────────── Timeline item ──────────── */
function TimelineItem({
  time,
  event,
  detail,
  icon,
  isLast = false,
}: {
  time: string;
  event: string;
  detail?: string;
  icon: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <div className="relative flex items-start gap-5">
      {/* Connector line — skip on last item */}
      {!isLast && (
        <span className="absolute left-7 top-[54px] bottom-[-8px] w-px bg-white/30" />
      )}
      <div className="w-14 flex-shrink-0 pt-0.5 text-center">{icon}</div>
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

/* ──────────── Inline SVG icons ──────────── */
function GaneshEmblem() {
  return (
    <svg viewBox="0 0 60 60" className="h-[50px] w-[50px] opacity-75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="28" rx="14" ry="18" stroke="white" strokeWidth="1.2" />
      <path d="M22 18 Q14 12 16 22" stroke="white" strokeWidth="1.2" />
      <path d="M38 18 Q46 10 43 22" stroke="white" strokeWidth="1.2" />
      <circle cx="25" cy="25" r="2" fill="white" opacity="0.7" />
      <circle cx="35" cy="25" r="2" fill="white" opacity="0.7" />
      <path d="M26 32 Q30 36 34 32" stroke="white" strokeWidth="1" />
      <path d="M30 36 Q30 44 26 46" stroke="white" strokeWidth="1.2" />
      <path d="M30 36 Q30 44 34 46" stroke="white" strokeWidth="1.2" />
      <ellipse cx="30" cy="50" rx="8" ry="3" stroke="white" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function KhandaEmblem() {
  return (
    <svg viewBox="0 0 60 60" className="h-[50px] w-[50px] opacity-75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="8" x2="30" y2="52" stroke="white" strokeWidth="1.5" />
      <path d="M20 16 L30 30 L40 16" stroke="white" strokeWidth="1.2" />
      <path d="M20 44 L30 30 L40 44" stroke="white" strokeWidth="1.2" />
      <circle cx="30" cy="30" r="9" stroke="white" strokeWidth="1.2" />
      <line x1="14" y1="18" x2="46" y2="18" stroke="white" strokeWidth="1.2" />
      <line x1="14" y1="42" x2="46" y2="42" stroke="white" strokeWidth="1.2" />
    </svg>
  );
}

function DholIcon({ variant = "open" }: { variant?: "open" | "filled" }) {
  if (variant === "filled") {
    return (
      <svg viewBox="0 0 48 48" className="mx-auto h-12 w-12 opacity-70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="18" width="28" height="14" rx="7" stroke="white" strokeWidth="1.2" />
        <line x1="24" y1="18" x2="24" y2="32" stroke="white" strokeWidth="1" />
        <line x1="10" y1="25" x2="38" y2="25" stroke="white" strokeWidth="0.8" strokeDasharray="2 2" />
        <ellipse cx="10" cy="25" rx="3" ry="7" stroke="white" strokeWidth="1.2" />
        <ellipse cx="38" cy="25" rx="3" ry="7" stroke="white" strokeWidth="1.2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" className="mx-auto h-12 w-12 opacity-70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="24" rx="12" ry="8" stroke="white" strokeWidth="1.2" />
      <line x1="12" y1="24" x2="36" y2="24" stroke="white" strokeWidth="1" />
      <ellipse cx="12" cy="24" rx="3" ry="8" stroke="white" strokeWidth="1.2" />
      <ellipse cx="36" cy="24" rx="3" ry="8" stroke="white" strokeWidth="1.2" />
      <line x1="36" y1="18" x2="44" y2="12" stroke="white" strokeWidth="1.2" />
      <circle cx="44" cy="11" r="2" fill="white" opacity="0.7" />
    </svg>
  );
}

function VarmalaIcon() {
  return (
    <svg viewBox="0 0 48 48" className="mx-auto h-12 w-12 opacity-70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="20" r="8" stroke="white" strokeWidth="1.2" />
      <path d="M16 32 Q24 26 32 32 Q28 44 24 44 Q20 44 16 32Z" stroke="white" strokeWidth="1.2" />
      <circle cx="24" cy="20" r="3" stroke="white" strokeWidth="1" />
      <path d="M24 12 Q20 8 18 12" stroke="white" strokeWidth="1" />
      <path d="M24 12 Q28 8 30 12" stroke="white" strokeWidth="1" />
      <path d="M16 20 Q12 16 14 20" stroke="white" strokeWidth="1" />
      <path d="M32 20 Q36 16 34 20" stroke="white" strokeWidth="1" />
    </svg>
  );
}