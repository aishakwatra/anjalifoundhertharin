export default function ReceptionBanner() {
  return (
    <div className="relative overflow-hidden bg-burgundy text-center
                    px-6 py-7 mt-7
                    md:px-12 md:py-24 md:mt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-burgundy to-[#4a0a0d] opacity-25 saturate-50" />

      <h2 className="relative z-10 mb-3 md:mb-8 font-script text-white
                     text-[clamp(40px,11vw,140px)]">
        Reception
      </h2>

      <svg
        viewBox="0 0 48 48"
        className="relative z-10 mx-auto mb-2.5 md:mb-6 opacity-75
                   h-12 w-12 md:h-20 md:w-20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 8 L20 28 L13 32" stroke="white" strokeWidth="1.2" />
        <path d="M16 8 Q11 14 13 28 L20 28 Q22 14 16 8Z" stroke="white" strokeWidth="1.2" />
        <line x1="9" y1="34" x2="22" y2="34" stroke="white" strokeWidth="1.2" />
        <path d="M32 8 L28 28 L35 32" stroke="white" strokeWidth="1.2" />
        <path d="M32 8 Q37 14 35 28 L28 28 Q26 14 32 8Z" stroke="white" strokeWidth="1.2" />
        <line x1="26" y1="34" x2="39" y2="34" stroke="white" strokeWidth="1.2" />
        <circle cx="17" cy="18" r="1" fill="white" opacity="0.5" />
        <circle cx="15" cy="22" r="0.8" fill="white" opacity="0.4" />
        <circle cx="31" cy="18" r="1" fill="white" opacity="0.5" />
        <circle cx="33" cy="22" r="0.8" fill="white" opacity="0.4" />
      </svg>

      <p className="relative z-10 font-serif uppercase text-white/85
                    text-[11px] tracking-[0.3em] leading-[1.8]
                    md:text-[22px] md:tracking-[0.4em] md:leading-[2]">
        19:30 Onwards
        <br />
        Reception
      </p>
    </div>
  );
}