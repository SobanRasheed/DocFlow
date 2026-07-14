export const NAV = [
  { label: "Tools", href: "#tools" },
  { label: "How It Works", href: "#steps" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export const TOOLS = [
  { icon: "lucide:file-text", title: "PDF to Word", desc: "Convert PDF documents to editable .docx files", from: "PDF", to: "DOCX", bg: "bg-red-50", hover: "hover:bg-red-100", color: "text-red-500", tag: "text-red-500" },
  { icon: "lucide:file-type", title: "Word to PDF", desc: "Turn your Word documents into universal PDFs", from: "DOCX", to: "PDF", bg: "bg-blue-50", hover: "hover:bg-blue-100", color: "text-blue-500", tag: "text-blue-500" },
  { icon: "lucide:table-2", title: "PDF to Excel", desc: "Extract tables and data into .xlsx spreadsheets", from: "PDF", to: "XLSX", bg: "bg-emerald-50", hover: "hover:bg-emerald-100", color: "text-emerald-500", tag: "text-emerald-500" },
  { icon: "lucide:file-spreadsheet", title: "Excel to PDF", desc: "Convert spreadsheets to shareable PDF format", from: "XLSX", to: "PDF", bg: "bg-green-50", hover: "hover:bg-green-100", color: "text-green-500", tag: "text-green-500" },
  { icon: "lucide:combine", title: "Merge PDF", desc: "Combine multiple PDFs into a single document", from: "PDF+PDF", to: "PDF", bg: "bg-violet-50", hover: "hover:bg-violet-100", color: "text-violet-500", tag: "text-violet-500" },
  { icon: "lucide:scissors", title: "Split PDF", desc: "Extract specific pages from any PDF file", from: "PDF", to: "Pages", bg: "bg-orange-50", hover: "hover:bg-orange-100", color: "text-orange-500", tag: "text-orange-500" },
  { icon: "lucide:minimize-2", title: "Compress PDF", desc: "Reduce file size without losing quality", from: "PDF", to: "Smaller PDF", bg: "bg-amber-50", hover: "hover:bg-amber-100", color: "text-amber-500", tag: "text-amber-500" },
  { icon: "lucide:image", title: "Image ↔ PDF", desc: "Convert images to PDF or extract pages as images", from: "JPG/PNG", to: "PDF", bg: "bg-pink-50", hover: "hover:bg-pink-100", color: "text-pink-500", tag: "text-pink-500", twoWay: true },
];

export const FEATS = [
  { icon: "lucide:shield-check", title: "100% Private", desc: "Files never leave your device. All processing happens locally — we don't upload anything to any server.", bg: "bg-brand-50", color: "text-brand-600" },
  { icon: "lucide:zap", title: "Blazing Fast", desc: "Native performance powered by Flutter. Conversions finish in seconds, not minutes.", bg: "bg-amber-50", color: "text-amber-500" },
  { icon: "lucide:check-circle-2", title: "Highly Accurate", desc: "Advanced conversion algorithms ensure your formatting and layouts remain perfectly intact.", bg: "bg-blue-50", color: "text-blue-500" },
  { icon: "lucide:smartphone", title: "Beautiful Design", desc: "Clean, intuitive interface that follows platform conventions. Feels like it was made by Apple or Google.", bg: "bg-violet-50", color: "text-violet-500" },
  { icon: "lucide:infinity", title: "No Limits", desc: "No file size caps, no daily conversion limits, no watermarks. Use it as much as you want.", bg: "bg-rose-50", color: "text-rose-500" },
  { icon: "lucide:globe", title: "Cross-Platform", desc: "Built with Flutter for pixel-perfect consistency on both iOS and Android from a single codebase.", bg: "bg-cyan-50", color: "text-cyan-500" },
];

export const FAQS = [
  { q: "Is DocFlow really free?", a: "Yes, completely free with no hidden costs, no premium tiers, and no in-app purchases. All 8 tools are available to everyone at no charge." },
  { q: "Are my files uploaded to a server?", a: "No. All conversions happen locally on your device. Your files never leave your phone. This is one of our core principles — your documents, your privacy." },

  { q: "Is there a file size limit?", a: "There are no artificial file size limits. The only constraint is your device's available memory. Most phones can handle files well over 100MB without any issues." },
  { q: "Will more tools be added in the future?", a: "Yes! We're actively developing new tools including PDF to PowerPoint, OCR (text recognition), e-signature, and password protection. Updates are free for all users." },
  { q: "Which platforms are supported?", a: "DocFlow is built with Flutter and supports both iOS (iPhone & iPad) and Android devices. A web version is also being considered for future releases." },
];

export const STATS = [
  { val: "8", label: "Conversion Tools" },
  { val: "0s", label: "Upload to Server" },
  { val: "100%", label: "Secure" },
  { val: "$0", label: "Forever Free" },
];

export const FOOTER_TOOLS = ["PDF to Word", "Word to PDF", "PDF to Excel", "Excel to PDF", "Merge PDF", "Split PDF", "Compress PDF", "Image to PDF"];
export const COMPANY = ["About", "Blog", "Privacy Policy", "Terms of Service", "Contact"];
export const SOCIALS = [
  { icon: "lucide:twitter", label: "Twitter" },
  { icon: "lucide:github", label: "GitHub" },
  { icon: "lucide:instagram", label: "Instagram" },
  { icon: "lucide:linkedin", label: "LinkedIn" },
];