import Reveal from "./Reveal";
import "./Heading.css";

export default function Heading({ label, title, sub, align = "center" }) {
  const isCenter = align === "center";
  
  return (
    <div className={`heading-wrapper ${isCenter ? "heading-center" : "heading-left"}`}>
      <Reveal>
        <div className={`heading-label-wrapper`}>
          {isCenter && <span className="heading-line" />}
          {label}
          <span className="heading-line" />
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="heading-title">{title}</h2>
      </Reveal>
      {sub && <Reveal delay={2}><p className="heading-sub">{sub}</p></Reveal>}
    </div>
  );
}