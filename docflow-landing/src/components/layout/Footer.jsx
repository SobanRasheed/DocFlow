import Icon from "../ui/Icon";
import { FOOTER_TOOLS, COMPANY, SOCIALS } from "../../data/data";
import Logo from "../../assets/logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo-link">
              <img src={Logo} alt="DocFlow" className="footer-logo-img" />
            </a>
            <p className="footer-desc">
              The privacy-first document converter. Convert, merge, split, and compress your files directly on your device — no uploads, no accounts, no cost.
            </p>
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href="#" className="footer-social-link" aria-label={s.label}>
                  <Icon name={s.icon} size="text-base" className="footer-social-icon" />
                </a>
              ))}
            </div>

          </div>

          <div>
            <h4 className="footer-col-title">Tools</h4>
            <ul className="footer-link-list">
              {FOOTER_TOOLS.map((t) => <li key={t}><a href="#tools" className="footer-link">{t}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-link-list">
              {COMPANY.map((c) => <li key={c}><a href="#" className="footer-link">{c}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 DocFlow. All rights reserved.</p>
          <div className="footer-legal">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <a key={l} href="#" className="footer-legal-link">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}