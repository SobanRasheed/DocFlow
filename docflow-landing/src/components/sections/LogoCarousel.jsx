import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import "./LogoCarousel.css";

const ICONS = [
  { name: "lucide:file-text", color: "text-blue-400", label: "PDF" },
  { name: "lucide:file-type", color: "text-red-400", label: "Word" },
  { name: "lucide:table-2", color: "text-emerald-400", label: "Excel" },
  { name: "lucide:image", color: "text-pink-400", label: "Images" },
  { name: "lucide:presentation", color: "text-orange-400", label: "Slides" },
  { name: "lucide:file-audio", color: "text-purple-400", label: "Audio" },
  { name: "lucide:file-video", color: "text-indigo-400", label: "Video" },
  { name: "lucide:archive", color: "text-yellow-400", label: "Archives" },
  { name: "lucide:file-json", color: "text-green-400", label: "JSON" },
  { name: "lucide:file-code", color: "text-cyan-400", label: "Code" }
];

export default function LogoCarousel() {
  return (
    <div className="logo-carousel-section">
      <Reveal>
        <div className="logo-carousel-heading">
          <h2 className="logo-carousel-title">Works With Every Format You Use</h2>
          <p className="logo-carousel-sub">
            PDFs, Office documents, images, and more — DocFlow speaks them all.
          </p>
        </div>
      </Reveal>
      <div className="logo-carousel-container">
        <div className="logo-carousel-track">
          {ICONS.map((icon, i) => (
            <div key={`first-${i}`} className="logo-carousel-item">
              <Icon name={icon.name} size="text-4xl" className={icon.color} />
              <span className="logo-carousel-label">{icon.label}</span>
            </div>
          ))}
        </div>
        <div className="logo-carousel-track" aria-hidden="true">
          {ICONS.map((icon, i) => (
            <div key={`second-${i}`} className="logo-carousel-item">
              <Icon name={icon.name} size="text-4xl" className={icon.color} />
              <span className="logo-carousel-label">{icon.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
