import { memo } from "react";
import PlayStoreLogo from "../../assets/playstore logo.svg";
import AppStoreLogo from "../../assets/App_Store_(iOS).svg";
import "./StoreBtn.css";

export default memo(function StoreBtn({ platform, light }) {
  const ios = platform === "ios";
  const base = light ? "store-btn-light" : "store-btn-dark";
  return (
    <a href="#download" className={`store-btn store-btn-wrapper ${base}`}>
      <img
        src={ios ? AppStoreLogo : PlayStoreLogo}
        alt={ios ? "App Store" : "Google Play"}
        className="store-btn-icon"
      />
      <div className="store-btn-text-wrapper">
        <div className="store-btn-subtitle">{ios ? "Download on the" : "Get it on"}</div>
        <div className="store-btn-title">{ios ? "App Store" : "Google Play"}</div>
      </div>
    </a>
  );
});