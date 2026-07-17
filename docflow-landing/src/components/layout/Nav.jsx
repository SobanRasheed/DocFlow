import { useState, useEffect, useCallback, useMemo } from "react";
import Icon from "../ui/Icon";
import useScrollY from "../../hooks/useScrollY";
import useActiveSection from "../../hooks/useActiveSection";
import { NAV } from "../../data/data";
import Logo from "../../assets/logo.svg";
import "./Nav.css";

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
    <nav className={`nav-base glass ${y > 10 ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo-link group">
          <img src={Logo} alt="DocFlow" className="nav-logo-img" />
        </a>

        <div className="nav-desktop-links">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} className={`nav-link ${active === l.href.slice(1) ? "active" : ""}`}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="nav-desktop-download">
          <a href="#download" className="nav-download-btn">
            <Icon name="lucide:download" /> Download Free
          </a>
        </div>

        <button onClick={() => setOpen((p) => !p)} className="nav-mobile-toggle" aria-label="Menu" aria-expanded={open}>
          <Icon name={open ? "lucide:x" : "lucide:menu"} size="text-xl" className="nav-mobile-icon" />
        </button>
      </div>

      <div className="nav-mobile-menu glass" style={{ maxHeight: open ? 400 : 0, opacity: open ? 1 : 0, paddingTop: open ? 16 : 0, paddingBottom: open ? 16 : 0 }}>
        <div className="nav-mobile-container">
          {NAV.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className={`nav-mobile-link ${active === l.href.slice(1) ? "active" : ""}`}>
              {l.label}
            </a>
          ))}
          <div className="nav-mobile-download-wrapper">
            <a href="#download" onClick={close} className="nav-mobile-download-btn">
              <Icon name="lucide:download" /> Download Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}