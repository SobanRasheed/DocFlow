import Heading from "../ui/Heading";
import FeatCard from "../ui/FeatCard";
import { FEATS } from "../../data/data";
import "./Features.css";

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <Heading label="Why DocFlow" title="The DocFlow Difference" sub="We obsessed over the details so you don't have to think about them." />
        <div className="features-grid">
          {FEATS.map((f, i) => <FeatCard key={f.title} feat={f} delay={i + 1} />)}
        </div>
      </div>
    </section>
  );
}