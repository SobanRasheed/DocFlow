import Heading from "../ui/Heading";
import ToolCard from "../ui/ToolCard";
import { TOOLS } from "../../data/data";
import "./Tools.css";

export default function Tools() {
  return (
    <section id="tools" className="tools-section">
      <div className="tools-bg grid-bg" />
      <div className="tools-container">
        <Heading label="All Tools" title="Every conversion you need" sub="Eight powerful tools, one simple interface. No subscriptions, no limits on file size." />
        <div className="tools-grid">
          {TOOLS.map((t, i) => <ToolCard key={t.title} tool={t} delay={i + 1} />)}
        </div>
      </div>
    </section>
  );
}