import { Icon as IconifyIcon } from "@iconify/react";

const sizes = {
  "text-xs": 12,
  "text-sm": 14,
  "text-base": 16,
  "text-lg": 18,
  "text-xl": 20,
  "text-2xl": 24,
  "text-3xl": 30,
};

export default function Icon({ name, size = "text-lg", className = "" }) {
  const px = sizes[size] || 18;
  return <IconifyIcon icon={name} width={px} height={px} className={className} />;
}