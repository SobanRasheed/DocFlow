import { useState, useCallback } from "react";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import Accordion from "../ui/Accordion";
import { FAQS } from "../../data/data";
import faqImg from "../../assets/FAQ.png";

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = useCallback((i) => setOpen((p) => (p === i ? null : i)), []);

  return (
    <section id="faq" className="py-16 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-100/40 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-200/20 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: FAQ Content */}
          <div>
            <Heading 
              label="FAQ" 
              title="Common questions" 
              sub="Everything you need to know before downloading." 
              align="left" 
            />
            <Reveal delay={2}>
              <div className="space-y-3">
                {FAQS.map((item, i) => (
                  <Accordion key={i} item={item} open={open === i} onToggle={() => toggle(i)} />
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column: FAQ Image */}
          <Reveal delay={3}>
            <div className="relative hidden lg:block">
              {/* Optional soft background glow for the image to blend it nicely */}
              <div className="absolute inset-0 bg-brand-500/10 rounded-[3rem] blur-2xl transform rotate-3 scale-105 -z-10" />
              <img 
                src={faqImg} 
                alt="Frequently Asked Questions" 
                className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]" 
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}