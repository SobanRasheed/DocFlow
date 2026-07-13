import { memo } from "react";
import Icon from "./Icon";

export default memo(function Accordion({ item, open, onToggle }) {
  return (
    <div 
      className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
        open ? "border-brand-200 shadow-lg shadow-brand-900/5" : "border-slate-200 hover:border-brand-200/50 hover:shadow-md"
      }`}
    >
      <button 
        onClick={onToggle} 
        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none" 
        aria-expanded={open}
      >
        <span className={`text-base font-semibold pr-4 transition-colors duration-300 ${open ? "text-brand-700" : "text-slate-800 group-hover:text-brand-600"}`}>
          {item.q}
        </span>
        <div className={`w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${open ? "bg-brand-100 text-brand-600" : "bg-slate-100 text-slate-400 group-hover:bg-brand-50 group-hover:text-brand-500"}`}>
          <Icon name="lucide:chevron-down" size="text-lg" className={`faq-chev ${open ? "open" : ""}`} />
        </div>
      </button>
      <div className={`faq-body ${open ? "open" : ""} px-6`}>
        <p className="text-[15px] text-slate-600 leading-relaxed pb-6 pt-1 border-t border-slate-100/0">{item.a}</p>
      </div>
    </div>
  );
});