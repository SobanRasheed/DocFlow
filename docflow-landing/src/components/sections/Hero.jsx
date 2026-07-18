import Reveal from "../ui/Reveal";
import "./Hero.css";

const HERO_STATS = [
  { val: "8", label: "Tools" },
  { val: "100%", label: "On-Device" },
  { val: "Free", label: "Forever" },
];

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Decorative gradients */}
      <div className="hero-bg-1" />
      <div className="hero-bg-2" />
      <div className="hero-grid grid-bg" />

      <div className="hero-container">
        <div className="hero-grid-layout">
          {/* Left: copy */}
          <div className="hero-content">
            <Reveal>
              <div className="hero-eyebrow">Document Conversion Platform</div>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="hero-heading">
                Your Documents'{" "}
                <span className="hero-highlight-text">Best Version</span>{" "}
                Starts Here
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="hero-desc">
                Privacy-first tools for converting, merging, splitting, and
                compressing every document — entirely on your device, at any scale.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="hero-actions">
                <a href="#download" className="btn-lime">Download for Free</a>
                <a href="#tools" className="btn-ghost">Explore Tools</a>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="hero-stats">
                {HERO_STATS.map((s) => (
                  <div key={s.label} className="hero-stat">
                    <span className="hero-stat-val">{s.val}</span>
                    <span className="hero-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: hero video */}
          <Reveal delay={2} className="hero-media">
            <div className="hero-media-frame float">
              <video
                className="hero-video"
                src="https://res.cloudinary.com/sxizosqy/video/upload/v1784361860/hero_vo5vzl.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
