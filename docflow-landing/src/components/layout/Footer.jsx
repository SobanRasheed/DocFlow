import Icon from "../ui/Icon";
import { FOOTER_TOOLS, COMPANY, SOCIALS } from "../../data/data";
import Logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <img src={Logo} alt="DocFlow" className="h-12 w-auto brightness-0 invert opacity-90" />
            </a>
            <p className="text-sm leading-relaxed text-slate-500 max-w-sm mb-6">
              The privacy-first document converter. Convert, merge, split, and compress your files directly on your device — no uploads, no accounts, no cost.
            </p>
            <div className="flex items-center gap-3 mb-6">
              {SOCIALS.map((s) => (
                <a key={s.label} href="#" className="w-9 h-9 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors" aria-label={s.label}>
                  <Icon name={s.icon} size="text-base" className="text-slate-400" />
                </a>
              ))}
            </div>

          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Tools</h4>
            <ul className="space-y-2.5">
              {FOOTER_TOOLS.map((t) => <li key={t}><a href="#tools" className="text-sm hover:text-white transition-colors">{t}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2.5">
              {COMPANY.map((c) => <li key={c}><a href="#" className="text-sm hover:text-white transition-colors">{c}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2026 DocFlow. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}