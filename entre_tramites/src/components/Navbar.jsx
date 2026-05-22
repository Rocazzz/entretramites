import { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "¿Qué es?",      href: "#que-es"       },
  { label: "Requisitos",    href: "#requisitos"   },
  { label: "Documentación", href: "#documentacion"},
  { label: "Beneficios",    href: "#beneficios"   },
  { label: "Contacto",      href: "#contacto"     },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setOpen(false);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">

          <a href="#" className="navbar__brand">
            <img src="/cropped-logo-entre-tramites.png" alt="Entre Trámites" className="navbar__logo" />
          </a>

          <div className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="navbar__link">{label}</a>
            ))}
          </div>

          <div className="navbar__right">
            <a href="tel:+34930185237" className="navbar__phone">
              <FaPhoneAlt /> 930 185 237
            </a>
            <a href="#contacto" className="navbar__cta">Consulta gratis</a>
          </div>

          <button className="navbar__hamburger" onClick={() => setOpen(p => !p)} aria-label="Menú">
            <span className="navbar__hamburger-line" style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span className="navbar__hamburger-line" style={{ opacity: open ? 0 : 1, transform: open ? "scaleX(0)" : "none" }} />
            <span className="navbar__hamburger-line" style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>

        </div>
      </nav>

      {open && <div className="navbar__overlay" onClick={() => setOpen(false)} />}

      <div className="navbar__drawer" style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}>
        <div className="navbar__drawer-header">
          <img src="/cropped-logo-entre-tramites.png" alt="Entre Trámites" className="navbar__drawer-logo" />
          <button className="navbar__drawer-close" onClick={() => setOpen(false)}>✕</button>
        </div>
        <nav className="navbar__drawer-links">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="navbar__drawer-link" onClick={() => setOpen(false)}>
              {label} <span className="navbar__drawer-arrow">→</span>
            </a>
          ))}
        </nav>
        <div className="navbar__drawer-footer">
          <a href="tel:+34930185237" className="navbar__drawer-phone">
            <FaPhoneAlt /> 930 185 237
          </a>
          <a href="#contacto" className="navbar__drawer-cta" onClick={() => setOpen(false)}>
            Consulta gratis
          </a>
        </div>
      </div>
    </>
  );
}