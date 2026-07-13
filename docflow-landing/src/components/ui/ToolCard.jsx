import { memo } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default memo(function ToolCard({ tool, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="tool-card h-full flex flex-col bg-white rounded-2xl border border-slate-200 p-6 cursor-default group">
        <div className={`w-12 h-12 ${tool.bg} ${tool.hover} rounded-xl flex items-center justify-center mb-4 transition-colors`}>
          <Icon name={tool.icon} size="text-2xl" className={tool.color} />
        </div>
        <h3 className="text-base font-semibold text-slate-900 mb-1">{tool.title}</h3>
        <p className="text-[13px] text-slate-600 leading-relaxed flex-grow">{tool.desc}</p>
        <div className={`mt-auto pt-4 flex items-center gap-1.5 text-[10px] font-semibold tracking-wide uppercase ${tool.tag}`}>
          <span>{tool.from}</span>
          <Icon name={tool.twoWay ? "lucide:arrow-left-right" : "lucide:arrow-right"} size="text-xs" />
          <span>{tool.to}</span>
        </div>
      </div>
    </Reveal>
  );
});