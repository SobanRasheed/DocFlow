import Reveal from "./Reveal";

export default function Heading({ label, title, sub, align = "center" }) {
  const isCenter = align === "center";
  
  return (
    <div className={`max-w-2xl mb-16 ${isCenter ? "text-center mx-auto" : "text-left"}`}>
      <Reveal>
        <div className={`inline-flex items-center gap-2 text-brand-700 text-xs font-medium uppercase tracking-widest mb-4`}>
          {isCenter && <span className="w-8 h-px bg-brand-300" />}
          {label}
          <span className="w-8 h-px bg-brand-300" />
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">{title}</h2>
      </Reveal>
      {sub && <Reveal delay={2}><p className="text-slate-500 text-lg leading-relaxed">{sub}</p></Reveal>}
    </div>
  );
}