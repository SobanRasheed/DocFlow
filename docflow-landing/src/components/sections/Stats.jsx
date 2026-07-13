import Reveal from "../ui/Reveal";
import { STATS } from "../../data/data";

export default function Stats() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i + 1}>
              <div>
                <div className="grad-text text-3xl sm:text-4xl font-bold mb-1">{s.val}</div>
                <div className="text-sm text-slate-400 font-medium">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}