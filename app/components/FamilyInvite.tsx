import Image from "next/image";

export default function FamilyInvite() {
  return (
    <section className="bg-cream text-center px-8 py-16 md:px-12 md:py-24">

      {/* Divider top */}
      <div className="mx-auto mb-10 md:mb-16 w-40 md:w-56 opacity-60">
        <Image
          src="/photos/line.png"
          alt=""
          width={500}
          height={60}
          className="w-full h-auto"
        />
      </div>

      {/* Opening line */}
      <p className="font-body italic text-text-mid mx-auto
                    max-w-[300px] text-[12px] leading-[1.9]
                    md:max-w-[600px] md:text-[20px] md:leading-[1.8]
                    mb-6 md:mb-10">
        With joyful hearts, the families invite you to share in this beautiful celebration.
      </p>

      {/* Family names */}
      <div className="mx-auto mb-6 md:mb-10
                      max-w-[320px] md:max-w-[650px]">
        <p className="font-serif text-text-mid
                      text-[13px] leading-[2]
                      md:text-[22px] md:leading-[2]">
          Mrs. Geeta Upadhya & Late Mr. Arun Upadhya
        </p>
        <p className="font-serif text-text-mid
                      text-[13px] leading-[2]
                      md:text-[22px] md:leading-[2]">
          and
        </p>
        <p className="font-serif text-text-mid
                      text-[13px] leading-[2]
                      md:text-[22px] md:leading-[2]">
          Mrs. Lovely Sethi & Mr. Gursharan Sethi
        </p>
      </div>

      {/* Invite line */}
      <p className="font-body italic text-text-mid mx-auto
                    max-w-[280px] text-[12px] leading-[1.9]
                    md:max-w-[550px] md:text-[20px] md:leading-[1.8]
                    mb-6 md:mb-10">
        warmly invite you to join them as their children
      </p>

      {/* Names — prominent */}
      <p className="font-serif uppercase text-terracotta tracking-[0.3em]
                    text-[18px]
                    md:text-[42px] md:tracking-[0.25em]
                    mb-6 md:mb-10">
        Anjali & Tharin
      </p>

      {/* Closing line */}
      <p className="font-body italic text-text-mid mx-auto
                    max-w-[300px] text-[12px] leading-[1.9]
                    md:max-w-[600px] md:text-[20px] md:leading-[1.8]">
        begin their journey of marriage together. Your presence and blessings will make this occasion even more meaningful for our families.
      </p>

      {/* Divider bottom */}
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