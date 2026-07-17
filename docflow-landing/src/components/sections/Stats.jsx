import Reveal from "../ui/Reveal";
import { STATS } from "../../data/data";
import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i + 1}>
              <div>
                <div className="stats-val grad-text">{s.val}</div>
                <div className="stats-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}