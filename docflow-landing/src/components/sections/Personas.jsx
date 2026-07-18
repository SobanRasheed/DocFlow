import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import { PERSONAS } from "../../data/data";
import "./Personas.css";

export default function Personas() {
  return (
    <section className="personas-section">
      <div className="personas-container">
        <Heading
          label="Who It's For"
          title="Built for Students, Professionals, and Teams"
          sub="One app that adapts to how you work with documents — wherever you are."
        />
        <div className="personas-grid">
          {PERSONAS.map((p, i) => (
            <Reveal key={p.title} delay={i + 1} className="h-full">
              <div className="persona-card">
                <div className="persona-icon-wrapper">
                  <Icon name={p.icon} size="text-xl" className="persona-icon" />
                </div>
                <h3 className="persona-title">{p.title}</h3>
                <p className="persona-desc">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
