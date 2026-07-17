import "./Icon.css";

export default function Icon({ name, size = "text-lg", className = "" }) {
  return <span className={`iconify icon-base ${size} ${className}`} data-icon={name} />;
}