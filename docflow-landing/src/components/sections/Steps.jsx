import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import "./Steps.css";

const steps = [
  { icon: "lucide:upload",   n: "01", title: "Upload your file",  desc: "Pick a file from your device, cloud storage, or drag and drop it in." },
  { icon: "lucide:zap",      n: "02", title: "We convert it",    desc: "Our engine processes your file instantly — right on your device." },
  { icon: "lucide:download", n: "03", title: "Download result",  desc: "Get your converted file in seconds. Share it, save it, or open it directly." },
];

export default function Steps() {
  return (
    <section id="steps" className="steps-section">
      <div className="steps-container">
        <Heading label="How It Works" title="Three Steps. That's It." sub="No learning curve, no complicated settings. Just pick a tool and go." />
        <div className="steps-grid">
          <div className="steps-line" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 2 + 1}>
              <div className="steps-item">
                <div className="steps-icon-wrapper">
                  <Icon name={s.icon} size="text-2xl" className="steps-icon" />
                </div>
                <div className="steps-number">Step {s.n}</div>
                <h3 className="steps-title">{s.title}</h3>
                <p className="steps-desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}