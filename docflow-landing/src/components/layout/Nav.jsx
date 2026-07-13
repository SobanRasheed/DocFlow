import { useState, useEffect, useCallback, useMemo } from "react";
import Icon from "../ui/Icon";
import useScrollY from "../../hooks/useScrollY";
import useActiveSection from "../../hooks/useActiveSection";
import { NAV } from "../../data/data";
import Logo from "../../assets/logo.svg";

export default function Nav() {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => NAV.map((l) => l.href.slice(1)), []);
  const active = useActiveSection(ids);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 glass bg-white/80 border-b border-slate-100/80 transition-all duration-300 ${y > 10 ? "shadow-sm" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={Logo} alt="DocFlow" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors ${active === l.href.slice(1) ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#download" className="inline-flex items-center gap-2 bg-brand-700 hover:bg-brand-800 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm shadow-brand-700/25 hover:shadow-brand-700/40">
            <Icon name="lucide:download" /> Download Free
          </a>
        </div>

        <button onClick={() => setOpen((p) => !p)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors" aria-label="Menu" aria-expanded={open}>
          <Icon name={open ? "lucide:x" : "lucide:menu"} size="text-xl" className="text-slate-700" />
        </button>
      </div>

      <div className="md:hidden border-t border-slate-100 bg-white/95 glass overflow-hidden transition-all duration-300" style={{ maxHeight: open ? 400 : 0, opacity: open ? 1 : 0, paddingTop: open ? 16 : 0, paddingBottom: open ? 16 : 0 }}>
        <div className="px-6 flex flex-col gap-1">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-colors ${active === l.href.slice(1) ? "text-slate-900 bg-slate-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}>
              {l.label}
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-slate-100">
            <a href="#download" onClick={close} className="inline-flex items-center justify-center gap-2 w-full bg-brand-700 hover:bg-brand-800 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors">
              <Icon name="lucide:download" /> Download Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}