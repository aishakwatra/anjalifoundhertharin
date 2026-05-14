export default function ClosingPolaroids() {
  return (
    <section className="bg-cream text-center
                        px-7 pt-12 pb-16
                        md:px-12 md:pt-24 md:pb-32">
      <div className="relative mx-auto
                      h-[230px] w-[200px] mb-10
                      md:h-[400px] md:w-[400px] md:mb-20">
        <div className="absolute z-10 bg-white shadow-[0_2px_14px_rgba(0,0,0,0.12)]
                        w-[170px] p-2.5 pb-7 -rotate-6 -translate-x-[30px] translate-y-[10px]
                        md:w-[300px] md:p-4 md:pb-12 md:-translate-x-[60px] md:translate-y-[20px]">
          <div className="aspect-square w-full bg-gradient-to-br from-stone-400 to-stone-500" />
        </div>
        <div className="absolute z-20 bg-white shadow-[0_2px_14px_rgba(0,0,0,0.12)]
                        w-[170px] p-2.5 pb-7 rotate-3 translate-x-[20px]
                        md:w-[300px] md:p-4 md:pb-12 md:translate-x-[40px]">
          <div className="aspect-square w-full bg-gradient-to-br from-stone-400 to-stone-500" />
        </div>
        <div className="absolute z-30 bg-white shadow-[0_2px_14px_rgba(0,0,0,0.12)]
                        w-[170px] p-2.5 pb-7 -rotate-1 -translate-x-[5px] translate-y-[5px]
                        md:w-[300px] md:p-4 md:pb-12 md:-translate-x-[10px] md:translate-y-[10px]">
          <div className="aspect-square w-full bg-gradient-to-br from-stone-400 to-stone-500" />
        </div>
      </div>

      <div className="mx-auto font-body italic text-text-mid
                      max-w-[340px] text-[12px] leading-[1.9]
                      md:max-w-[700px] md:text-[20px] md:leading-[1.8]">
        <p>
          With full hearts and so much love, we are so excited to begin this new chapter together. It would truly mean the world to us to have you by our side as we celebrate our wedding.
        </p>
        <p className="mt-4 md:mt-8">
          Your presence would make our day all the more special, and we cannot imagine this moment without the people we love most.
          <br />
          We can&apos;t wait to celebrate together.
        </p>
      </div>
     
    </section>
  );
}