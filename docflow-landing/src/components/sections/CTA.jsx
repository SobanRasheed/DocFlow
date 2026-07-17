import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import StoreBtn from "../ui/StoreBtn";
import "./CTA.css";

export default function CTA() {
  return (
    <section id="download" className="cta-section">
      <div className="cta-bg cta-background" />
      <div className="cta-blob-1" />
      <div className="cta-blob-2" />

      <div className="cta-container">
        <Reveal>
          <div className="cta-badge glass">
            <Icon name="lucide:download" className="text-sm" /> Available now on iOS & Android
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="cta-heading">
            Stop uploading your files<br className="hidden sm:block" /> to random websites.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="cta-desc">
            Download DocFlow and convert documents privately on your device. Free forever, no account needed.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="cta-buttons">
            <StoreBtn platform="ios" light />
            <StoreBtn platform="android" light />
          </div>
        </Reveal>

        <Reveal delay={4}>
          <p className="cta-footer">No sign-up required · No credit card · No strings attached</p>
        </Reveal>
      </div>
    </section>
  );
}