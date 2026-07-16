import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";

const steps = [
  { icon: "lucide:upload",   n: "01", title: "Upload your file",  desc: "Pick a file from your device, cloud storage, or drag and drop it in." },
  { icon: "lucide:zap",      n: "02", title: "We convert it",    desc: "Our engine processes your file instantly — right on your device." },
  { icon: "lucide:download", n: "03", title: "Download result",  desc: "Get your converted file in seconds. Share it, save it, or open it directly." },
];

export default function Steps() {
  return (
    <section id="steps" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Heading label="How It Works" title="Three steps. That's it." sub="No learning curve, no complicated settings. Just pick a tool and go." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 2 + 1}>
              <div className="text-center relative">
                <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-brand-600/25">
                  <Icon name={s.icon} size="text-2xl" className="text-white" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-600 mb-2">Step {s.n}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}