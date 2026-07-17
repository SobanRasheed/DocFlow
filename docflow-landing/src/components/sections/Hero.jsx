import Reveal from "../ui/Reveal";
import heroImg from "../../assets/hero.png";
import heroMobileImg from "../../assets/hero-mobile.png";
import   hero from "../../assets/hero.mp4";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Hero video — hidden on mobile, visible on lg+ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src={hero} type="video/mp4" />
      </video>

      {/* Decorative gradients (visible on ALL screen sizes) */}
      <div className="hero-bg-1" />
      <div className="hero-bg-2" />

      {/* Overlay gradient for text readability over the image on desktop */}
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          
          <Reveal>
            <div className="hero-badge">
              <span className="hero-badge-pulse-container">
                <span className="hero-badge-pulse" />
                <span className="hero-badge-dot" />
              </span>
              Free for everyone — No sign-up required
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="hero-heading">
              Convert your documents{" "}
              <br className="hero-heading-break" />
              <span className="hero-highlight-wrapper">
                <span className="hero-highlight-text">in seconds</span>
                <svg className="hero-highlight-svg" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 C50 2, 150 2, 198 8" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="hero-desc">
              PDF to Word, Excel to PDF, merge, split, compress
              all the tools you need in one app. Keeps your files private.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="hero-mobile-img-wrapper">
              <img 
                src={heroMobileImg} 
                alt="Document conversion illustration" 
                className="hero-mobile-img"
              />
            </div>
          </Reveal>
          
        </div>
      </div>
    </section>
  );
}