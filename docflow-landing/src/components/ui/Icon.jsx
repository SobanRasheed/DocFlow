export default function Icon({ name, size = "text-lg", className = "" }) {
  return <span className={`iconify ${size} ${className}`} data-icon={name} />;
}