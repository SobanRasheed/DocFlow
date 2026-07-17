import { memo } from "react";
import Icon from "./Icon";
import "./Accordion.css";

export default memo(function Accordion({ item, open, onToggle }) {
  return (
    <div className={`accordion-wrapper group ${open ? "open" : "closed"}`}>
      <button 
        onClick={onToggle} 
        className="accordion-btn" 
        aria-expanded={open}
      >
        <span className={`accordion-title ${open ? "open" : "closed"}`}>
          {item.q}
        </span>
        <div className={`accordion-icon-wrapper ${open ? "open" : "closed"}`}>
          <Icon name="lucide:chevron-down" size="text-lg" className={`faq-chev ${open ? "open" : ""}`} />
        </div>
      </button>
      <div className={`faq-body ${open ? "open" : ""} px-6`}>
        <p className="accordion-content">{item.a}</p>
      </div>
    </div>
  );
});