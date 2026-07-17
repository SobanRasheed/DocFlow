import { memo } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import "./ToolCard.css";

export default memo(function ToolCard({ tool, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="tool-card tool-card-wrapper group">
        <div className={`tool-card-icon-wrapper ${tool.bg} ${tool.hover}`}>
          <Icon name={tool.icon} size="text-2xl" className={tool.color} />
        </div>
        <h3 className="tool-card-title">{tool.title}</h3>
        <p className="tool-card-desc">{tool.desc}</p>
        <div className={`tool-card-footer ${tool.tag}`}>
          <span>{tool.from}</span>
          <Icon name={tool.twoWay ? "lucide:arrow-left-right" : "lucide:arrow-right"} size="text-xs" />
          <span>{tool.to}</span>
        </div>
      </div>
    </Reveal>
  );
});