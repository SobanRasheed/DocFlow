import { useState, useCallback } from "react";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { TESTIMONIALS } from "../../data/data";
import "./Testimonials.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const prev = useCallback(() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), []);
  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), []);
  const t = TESTIMONIALS[index];

  return (
    <section className="testi-section">
      <div className="testi-blob" />
      <div className="testi-container">
        <Heading
          label="Loved by Users"
          title="A Companion at Every Step"
          sub="People trust DocFlow to deliver results, not just features."
        />

        <Reveal>
          <div className="testi-card">
            <Icon name="lucide:quote" size="text-4xl" className="testi-quote-icon" />
            <blockquote className="testi-quote">“{t.quote}”</blockquote>
            <div className="testi-author">
              <div className="testi-avatar">{t.name.charAt(0)}</div>
              <div className="testi-author-info">
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>

            <div className="testi-nav">
              <button onClick={prev} className="testi-nav-btn" aria-label="Previous testimonial">
                <Icon name="lucide:arrow-left" />
              </button>
              <div className="testi-dots">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`testi-dot ${i === index ? "active" : ""}`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={next} className="testi-nav-btn" aria-label="Next testimonial">
                <Icon name="lucide:arrow-right" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
