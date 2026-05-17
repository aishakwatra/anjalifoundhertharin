import Image from "next/image";

type ParentGroup = "bride" | "groom";

const familyGroups: Record<ParentGroup, string[]> = {
  groom: [
    "Son of Mr. Gursharansingh Sethi and Mrs. Lovinder Kaur",
    "G/S of Late Sardarni and Sardar Avtar Singh Sethi",
    "Sardarni and Late Sardar Gursharan Singh Manchanda",
  ],
  bride: [
    "Daughter of Late Mr. Arun Upadhya & Mrs. Geeta Upadhya",
    "G/D of Late Ram Asre Upadhya and Usha Devi Upadhya",
    "Late Ganga Prasad Pathak and Ram Kumari Pathak",
  ],
};

export default function FamilyInvite({
  firstParentGroup = "groom",
}: {
  firstParentGroup?: ParentGroup;
}) {
  const secondParentGroup = firstParentGroup === "groom" ? "bride" : "groom";

  return (
    <section className="bg-cream text-center px-8 py-16 md:px-12 md:py-24">
      <div className="mx-auto mb-10 md:mb-16 w-40 md:w-56 opacity-60">
        <Image
          src="/photos/line.png"
          alt=""
          width={500}
          height={60}
          className="w-full h-auto"
        />
      </div>

      <p className="font-body italic text-text-mid mx-auto
                    max-w-[300px] text-[12px] leading-[1.9]
                    md:max-w-[600px] md:text-[20px] md:leading-[1.8]
                    mb-6 md:mb-10">
        With joyful hearts, the families invite you to share in this beautiful celebration.
      </p>

      <FamilyGroupLines lines={familyGroups[firstParentGroup]} />

      <p className="font-serif text-text-mid mx-auto mb-6 md:mb-10
                    text-[13px] leading-[2]
                    md:text-[22px] md:leading-[2]">
        and
      </p>

      <FamilyGroupLines lines={familyGroups[secondParentGroup]} />

      <p className="font-serif uppercase text-terracotta tracking-[0.3em]
                    text-[18px]
                    md:text-[42px] md:tracking-[0.25em]
                    mb-6 md:mb-10">
        Tharin & Anjali
      </p>

      <p className="font-body italic text-text-mid mx-auto
                    max-w-[300px] text-[12px] leading-[1.9]
                    md:max-w-[600px] md:text-[20px] md:leading-[1.8]">
        warmly invite you to join them In the beginning of their journey of marriage together. Your presence and blessings will make this occasion even more meaningful for our families.
      </p>

      <div className="mx-auto mt-10 md:mt-16 w-40 md:w-56 opacity-60">
        <Image
          src="/photos/line.png"
          alt=""
          width={500}
          height={60}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}

function FamilyGroupLines({ lines }: { lines: string[] }) {
  return (
    <div className="mx-auto mb-6 md:mb-10
                    max-w-[320px] md:max-w-[650px]">
      {lines.map((line) => (
        <p
          key={line}
          className="font-serif text-text-mid
                     text-[13px] leading-[2]
                     md:text-[22px] md:leading-[2]"
        >
          {line}
        </p>
      ))}
    </div>
  );
}
