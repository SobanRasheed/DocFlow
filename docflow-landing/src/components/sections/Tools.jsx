import Heading from "../ui/Heading";
import ToolCard from "../ui/ToolCard";
import { TOOLS } from "../../data/data";

export default function Tools() {
  return (
    <section id="tools" className="py-16 bg-slate-50/50 relative">
      <div className="absolute inset-0 grid-bg opacity-40 -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <Heading label="All Tools" title="Every conversion you need" sub="Eight powerful tools, one simple interface. No subscriptions, no limits on file size." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOOLS.map((t, i) => <ToolCard key={t.title} tool={t} delay={i + 1} />)}
        </div>
      </div>
    </section>
  );
}