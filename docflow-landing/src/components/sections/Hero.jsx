import Reveal from "../ui/Reveal";
import heroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <section 
      className="relative pt-20 pb-20 lg:pt-28 lg:pb-36 overflow-hidden hero-bg bg-no-repeat bg-right lg:bg-[length:auto_100%] xl:bg-[length:auto_110%] 2xl:bg-cover"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'max(1000px,100vw)',
      }}
    >
      {/* Decorative gradients */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-100/30 rounded-full blur-3xl -z-10" />

      {/* Overlay to ensure text readability on smaller screens if the image bleeds under text */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:via-white/70 lg:to-transparent -z-10" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="max-w-xl text-center lg:text-left">
          
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-800 text-xs font-medium px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600" />
              </span>
              Free for everyone — No sign-up required
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6 text-slate-900">
              Convert your documents{" "}
              <br className="hidden lg:block" />
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-700">in seconds</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 C50 2, 150 2, 198 8" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10 font-medium">
              PDF to Word, Excel to PDF, merge, split, compress
              all the tools you need in one beautiful app. Keeps your files private.
            </p>
          </Reveal>


          
        </div>
      </div>
    </section>
  );
}