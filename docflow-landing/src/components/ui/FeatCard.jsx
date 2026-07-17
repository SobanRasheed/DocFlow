import { memo } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";
import "./FeatCard.css";

export default memo(function FeatCard({ feat, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="feat-card feat-card-wrapper">
        <div className={`feat-card-icon-wrapper ${feat.bg}`}>
          <Icon name={feat.icon} size="text-xl" className={feat.color} />
        </div>
        <h3 className="feat-card-title">{feat.title}</h3>
        <p className="feat-card-desc">{feat.desc}</p>
      </div>
    </Reveal>
  );
});