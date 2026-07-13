import Heading from "../ui/Heading";
import FeatCard from "../ui/FeatCard";
import { FEATS } from "../../data/data";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Heading label="Why DocFlow" title="Built different. Built for you." sub="We obsessed over the details so you don't have to think about them." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATS.map((f, i) => <FeatCard key={f.title} feat={f} delay={i + 1} />)}
        </div>
      </div>
    </section>
  );
}