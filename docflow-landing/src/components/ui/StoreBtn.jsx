import { memo } from "react";
import PlayStoreLogo from "../../assets/playstore logo.svg";
import AppStoreLogo from "../../assets/App_Store_(iOS).svg";

export default memo(function StoreBtn({ platform, light }) {
  const ios = platform === "ios";
  const base = light ? "bg-white hover:bg-slate-50 text-slate-900" : "bg-slate-900 hover:bg-slate-800 text-white";
  return (
    <a href="#download" className={`store-btn inline-flex items-center gap-5 ${base} pl-6 pr-10 py-5 rounded-2xl`}>
      <img
        src={ios ? AppStoreLogo : PlayStoreLogo}
        alt={ios ? "App Store" : "Google Play"}
        className="w-10 h-10 object-contain"
      />
      <div className="text-left">
        <div className="text-xs font-medium text-slate-400 leading-none mb-1">{ios ? "Download on the" : "Get it on"}</div>
        <div className="text-lg font-semibold leading-tight">{ios ? "App Store" : "Google Play"}</div>
      </div>
    </a>
  );
});