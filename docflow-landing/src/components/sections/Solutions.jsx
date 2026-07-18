import { useState } from "react";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import VideoPlaceholder from "../ui/VideoPlaceholder";
import { SOLUTIONS } from "../../data/data";
import "./Solutions.css";

export default function Solutions() {
  const [active, setActive] = useState(0);
  const current = SOLUTIONS[active];

  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        <Heading
          label="Use Cases"
          title="Solutions for Every Document"
          sub="From a single conversion to processing a whole library — pick a workflow and go."
        />

        <Reveal>
          <div className="solutions-tabs" role="tablist">
            {SOLUTIONS.map((s, i) => (
              <button
                key={s.key}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`solutions-tab ${active === i ? "active" : ""}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="solutions-panel">
            <div className="solutions-panel-text">
              <h3 className="solutions-panel-title">{current.title}</h3>
              <p className="solutions-panel-desc">{current.desc}</p>
              <a href="#tools" className="arrow-link">
                Learn More <span className="iconify" data-icon="lucide:arrow-right" />
              </a>
            </div>
            {/* Video slot per tab — swap for a <video> per solution later */}
            <div className="solutions-panel-media">
              <VideoPlaceholder label={`${current.label} demo`} ratio="16/9" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
