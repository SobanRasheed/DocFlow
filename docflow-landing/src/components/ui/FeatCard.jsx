import { memo } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default memo(function FeatCard({ feat, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="feat-card h-full flex flex-col bg-white rounded-2xl border border-slate-200 p-7">
        <div className={`w-11 h-11 ${feat.bg} rounded-xl flex items-center justify-center mb-5 transition-colors`}>
          <Icon name={feat.icon} size="text-xl" className={feat.color} />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{feat.title}</h3>
        <p className="text-[15px] text-slate-600 leading-relaxed flex-grow">{feat.desc}</p>
      </div>
    </Reveal>
  );
});