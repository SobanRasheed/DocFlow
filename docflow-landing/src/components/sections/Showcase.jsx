import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import VideoPlaceholder from "../ui/VideoPlaceholder";
import { SHOWCASE } from "../../data/data";
import "./Showcase.css";

export default function Showcase() {
  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <Heading
          label="The Platform"
          title="One App. Every Document."
          sub="Purpose-built tools that work together, so your documents always ship in their best form."
        />

        <div className="showcase-list">
          {SHOWCASE.map((item, i) => (
            <Reveal key={item.name} delay={1}>
              <div className={`showcase-row ${i % 2 === 1 ? "reverse" : ""}`}>
                <div className="showcase-text">
                  <div className="showcase-name">{item.name}</div>
                  <h3 className="showcase-title">{item.title}</h3>
                  <p className="showcase-desc">{item.desc}</p>
                  <a href="#tools" className="arrow-link">
                    Learn More <span className="iconify" data-icon="lucide:arrow-right" />
                  </a>
                </div>
                {/* Product video slot — drop your <video> here later */}
                <div className="showcase-media">
                  <VideoPlaceholder label={`${item.name} in action`} ratio="16/9" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
