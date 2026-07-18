import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import pdfLogo from "../../assets/pdf.png";
import wordLogo from "../../assets/word.png";
import excelLogo from "../../assets/excel.png";
import powerpointLogo from "../../assets/powerpoint.png";
import "./LogoCarousel.css";

const ICONS = [
  { img: pdfLogo, label: "PDF" },
  { img: wordLogo, label: "Word" },
  { img: excelLogo, label: "Excel" },
  { name: "lucide:image", color: "text-pink-400", label: "Images" },
  { img: powerpointLogo, label: "Powerpoint" },
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
              {icon.img ? (
                <img src={icon.img} alt={icon.label} className="logo-carousel-img" />
              ) : (
                <Icon name={icon.name} size="text-4xl" className={icon.color} />
              )}
              <span className="logo-carousel-label">{icon.label}</span>
            </div>
          ))}
        </div>
        <div className="logo-carousel-track" aria-hidden="true">
          {ICONS.map((icon, i) => (
            <div key={`second-${i}`} className="logo-carousel-item">
              {icon.img ? (
                <img src={icon.img} alt="" className="logo-carousel-img" />
              ) : (
                <Icon name={icon.name} size="text-4xl" className={icon.color} />
              )}
              <span className="logo-carousel-label">{icon.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
