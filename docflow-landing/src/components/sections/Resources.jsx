import { useRef, useCallback } from "react";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import VideoPlaceholder from "../ui/VideoPlaceholder";
import { RESOURCES } from "../../data/data";
import "./Resources.css";

export default function Resources() {
  const trackRef = useRef(null);

  const scroll = useCallback((dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".resource-card-wrapper");
    const step = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <section className="resources-section">
      <div className="resources-container">
        {/* Featured video slot — like Cloudinary's featured guide video */}
        <Reveal>
          <div className="resources-featured">
            <div className="resources-featured-media">
              <VideoPlaceholder label="Featured video" ratio="16/9" />
            </div>
            <div className="resources-featured-text">
              <div className="resources-featured-eyebrow">Featured</div>
              <h3 className="resources-featured-title">See DocFlow in Action</h3>
              <p className="resources-featured-desc">
                A quick tour of converting, merging, and compressing documents —
                all without your files ever leaving your phone.
              </p>
              <a href="#download" className="btn-lime">Get the App</a>
            </div>
          </div>
        </Reveal>

        <Heading
          label="Resources"
          title="Learn More, Do More"
          sub="Guides, reports, and tutorials to get the most out of your documents."
        />

        <Reveal delay={1}>
          <div className="resources-carousel">
            <div ref={trackRef} className="resources-track">
              {RESOURCES.map((r) => (
                <div key={r.title} className="resource-card-wrapper">
                  <div className="resource-card">
                    <span className="resource-card-tag">{r.tag}</span>
                    <h3 className="resource-card-title">{r.title}</h3>
                    <p className="resource-card-desc">{r.desc}</p>
                    <a href="#" className="arrow-link">
                      Read More <span className="iconify" data-icon="lucide:arrow-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="resources-nav">
              <button onClick={() => scroll(-1)} className="resources-nav-btn" aria-label="Previous">
                <Icon name="lucide:arrow-left" />
              </button>
              <button onClick={() => scroll(1)} className="resources-nav-btn" aria-label="Next">
                <Icon name="lucide:arrow-right" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
