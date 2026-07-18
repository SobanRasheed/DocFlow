import { memo } from "react";
import Icon from "./Icon";
import "./VideoPlaceholder.css";

/**
 * Placeholder slot for a video. Swap the inner content for a
 * <video> tag later — the wrapper keeps the same frame/aspect ratio.
 *
 * <VideoPlaceholder label="Product demo" ratio="16/9" />
 */
export default memo(function VideoPlaceholder({ label = "Video coming soon", ratio = "16/9", className = "" }) {
  return (
    <div className={`video-ph ${className}`} style={{ aspectRatio: ratio }}>
      <div className="video-ph-grid grid-bg" />
      <div className="video-ph-glow" />
      <div className="video-ph-inner">
        <div className="video-ph-play">
          <Icon name="lucide:play" size="text-2xl" className="video-ph-play-icon" />
        </div>
        <span className="video-ph-label">{label}</span>
      </div>
      {/* fake player chrome */}
      <div className="video-ph-bar">
        <span className="video-ph-bar-dot" />
        <span className="video-ph-bar-track">
          <span className="video-ph-bar-progress" />
        </span>
        <Icon name="lucide:volume-2" size="text-xs" className="video-ph-bar-icon" />
        <Icon name="lucide:maximize" size="text-xs" className="video-ph-bar-icon" />
      </div>
    </div>
  );
});
