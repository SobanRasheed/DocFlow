import { useRef, useCallback } from "react";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { STATS, CASE_STUDIES } from "../../data/data";
import "./CaseStudies.css";

export default function CaseStudies() {
  const trackRef = useRef(null);

  const scroll = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".case-card-wrapper");
    const step = card ? card.offsetWidth + 20 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section className="cases-section">
      <div className="cases-container">
        <Heading
          label="Trusted Everywhere"
          title="Trusted at Every Scale"
          sub="From a single homework PDF to thousands of business documents — DocFlow delivers."
        />

        <Reveal>
          <div className="cases-stats">
            {STATS.map((s) => (
              <div key={s.label} className="cases-stat">
                <div className="cases-stat-val grad-text">{s.val}</div>
                <div className="cases-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Case study carousel */}
        <Reveal delay={1}>
          <div className="cases-carousel">
            <div ref={trackRef} className="cases-track">
              {CASE_STUDIES.map((c) => (
                <div key={c.title} className="case-card-wrapper">
                  <div className="case-card">
                    <span className="case-card-tag">{c.tag}</span>
                    <div className="case-card-stat">{c.stat}</div>
                    <div className="case-card-stat-desc">{c.statDesc}</div>
                    <h3 className="case-card-title">{c.title}</h3>
                    <a href="#tools" className="arrow-link">
                      Learn More <span className="iconify" data-icon="lucide:arrow-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="cases-nav">
              <button onClick={() => scroll(-1)} className="cases-nav-btn" aria-label="Previous">
                <Icon name="lucide:arrow-left" />
              </button>
              <button onClick={() => scroll(1)} className="cases-nav-btn" aria-label="Next">
                <Icon name="lucide:arrow-right" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
