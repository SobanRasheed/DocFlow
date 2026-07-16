import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import StoreBtn from "../ui/StoreBtn";

export default function CTA() {
  return (
    <section id="download" className="py-12 relative overflow-hidden">
      <div className="cta-bg absolute inset-0 -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-brand-300 text-xs font-medium px-4 py-1.5 rounded-full mb-8 glass">
            <Icon name="lucide:download" size="text-sm" /> Available now on iOS & Android
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
            Stop uploading your files<br className="hidden sm:block" /> to random websites.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="text-lg text-brand-200/80 leading-relaxed max-w-xl mx-auto mb-10">
            Download DocFlow and convert documents privately on your device. Free forever, no account needed.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <StoreBtn platform="ios" light />
            <StoreBtn platform="android" light />
          </div>
        </Reveal>

        <Reveal delay={4}>
          <p className="text-xs text-brand-300/50 mt-8">No sign-up required · No credit card · No strings attached</p>
        </Reveal>
      </div>
    </section>
  );
}