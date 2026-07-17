import { useState, useCallback } from "react";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import Accordion from "../ui/Accordion";
import { FAQS } from "../../data/data";
import faqImg from "../../assets/FAQ.png";
import "./FAQ.css";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = useCallback((i) => setOpen((p) => (p === i ? null : i)), []);

  return (
    <section id="faq" className="faq-section">
      {/* Decorative gradients */}
      <div className="faq-bg-1" />
      <div className="faq-bg-2" />
      
      <div className="faq-container">
        <div className="faq-grid">
          
          {/* Left Column: FAQ Content */}
          <div>
            <Heading 
              label="FAQ" 
              title="Common questions" 
              sub="Everything you need to know before downloading." 
              align="left" 
            />
            <Reveal delay={2}>
              <div className="faq-accordion-list">
                {FAQS.map((item, i) => (
                  <Accordion key={i} item={item} open={open === i} onToggle={() => toggle(i)} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: FAQ Image */}
          <Reveal delay={3}>
            <div className="faq-img-wrapper">
              {/* Optional soft background glow for the image to blend it nicely */}
              <div className="faq-img-glow" />
              <img 
                src={faqImg} 
                alt="Frequently Asked Questions" 
                className="faq-img" 
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}