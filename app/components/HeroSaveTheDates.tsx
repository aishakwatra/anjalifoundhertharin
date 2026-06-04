import Image from "next/image";

type DateSet = "27" | "27-28" | "26-27-28";
type DateKey = "26" | "27" | "28";
type IntroIcon = "ganesh" | "ganesh2";

interface HeroProps {
  animate: boolean;
  dateSet?: DateSet;
  introIcon?: IntroIcon;
  compactIntroLayout?: boolean;
}

const dateSets: Record<DateSet, DateKey[]> = {
  "27": ["27"],
  "27-28": ["27", "28"],
  "26-27-28": ["26", "27", "28"],
};

const introIcons: Record<IntroIcon, { src: string; alt: string }> = {
  ganesh: {
    src: "/photos/ganesh.png",
    alt: "Ganesh prayer artwork",
  },
  ganesh2: {
    src: "/photos/ganesh2.png",
    alt: "Ganesh prayer artwork",
  },
};

const events: Record<
  DateKey,
  {
    date: string;
    label: string;
  }
> = {
  "26": {
    date: "26 . 06 . 2026",
    label: "Mehendi",
  },
  "27": {
    date: "27 . 06 . 2026",
    label: "Wedding",
  },
  "28": {
    date: "28 . 06 . 2026",
    label: "Reception",
  },
};

export default function HeroSaveTheDates({
  animate,
  dateSet = "27-28",
  introIcon,
  compactIntroLayout = false,
}: HeroProps) {
  const selectedDates = dateSets[dateSet];
  const includesMehendi = selectedDates.includes("26");
  const primaryDates = selectedDates.filter((date) => date !== "26");
  const selectedIntroIcon = introIcon ? introIcons[introIcon] : null;
  const invitedMarginClass = compactIntroLayout ? "mb-0 md:mb-1" : "mb-8";

  return (
    <section className="bg-cream px-0 md:px-6 pt-14 pb-4 text-center md:pt-24 md:pb-8 overflow-hidden">
      {selectedIntroIcon && (
        <div className="relative mx-auto mb-2 w-[95px] max-w-[58vw] md:mb-3 md:w-[220px] aspect-[1700/3000]">
          <Image
            src={selectedIntroIcon.src}
            alt={selectedIntroIcon.alt}
            fill
            sizes="(max-width: 768px) 120px, 220px"
            className="object-contain"
            priority
            unoptimized
          />
        </div>
      )}

      <h1 className={`relative mx-auto ${invitedMarginClass} w-[80vw] md:w-[60vw] max-w-[600px] h-[150px] md:h-[200px]`}>
        <span className="sr-only">You&apos;re Invited</span>
        <Image
          src="/photos/youre-invited.png"
          alt="Save the Dates"
          fill
          sizes="(max-width: 768px) 80vw, 600px"
          className="object-contain"
          priority
        />
      </h1>

      <div className="relative mx-auto mb-8 md:mb-20
                w-[95vw] md:w-[75vw]
                aspect-square">
        <div className="absolute inset-0">
          <Image
            src="/photos/hero-sides.png"
            alt=""
            fill
            sizes="(max-width: 768px) 95vw, 75vw"
            className="object-contain"
            style={animate ? { animation: "fadeSlideDown 1.2s ease forwards" } : { opacity: 0 }}
            priority
          />
        </div>

        <div className="absolute inset-0">
          <Image
            src="/photos/hero-middle.png"
            alt=""
            fill
            sizes="(max-width: 768px) 95vw, 75vw"
            className="object-contain"
            style={animate ? { animation: "fadeSlideUp 1.2s ease forwards" } : { opacity: 0 }}
            priority
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-20">
          <Image
            src="/photos/hero-names.png"
            alt="Anjali & Tharin"
            fill
            sizes="95vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      <p className="font-serif uppercase mb-6 md:mb-20
                    text-[13px] tracking-[0.15em]
                    md:text-[64px] md:font-normal md:tracking-[0.05em]">
        We&apos;re getting married!
      </p>

      {includesMehendi && (
        <div className="mx-auto mb-7 md:mb-14">
          <DateDetails dateKey="26" />
        </div>
      )}

      <div className="flex justify-center mb-7 md:mb-16
                      gap-10 md:gap-40">
        {primaryDates.map((dateKey) => (
          <DateDetails key={dateKey} dateKey={dateKey} />
        ))}
      </div>
    </section>
  );
}

function DateDetails({
  dateKey,
}: {
  dateKey: DateKey;
}) {
  const event = events[dateKey];

  return (
    <div className="text-center">
      <span className="block font-display text-terracotta mb-1 md:mb-3
                       text-[14px] tracking-[0.15em]
                       md:text-[48px] md:tracking-[0.08em]">
        {event.date}
      </span>
      <span className="block font-serif font-medium uppercase text-text-mid
                       text-[15px] tracking-[0.25em]
                       md:text-[25px] md:tracking-[0.4em]">
        {event.label}
      </span>
    </div>
  );
}
