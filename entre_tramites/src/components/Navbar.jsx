import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "¿Qué es?",       href: "que-es"       },
  { label: "Requisitos",     href: "requisitos"    },
  { label: "Documentación",  href: "documentacion" },
  { label: "Beneficios",     href: "beneficios"    },
  { label: "Proceso",        href: "proceso"       },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">

        <a href="#" className="navbar__brand">
          <div className="navbar__logo">
            <div className="navbar__logo-mark">
              <span>ET</span>
            </div>
          </div>
          <span className="navbar__brand-name">Entre Trámites</span>
        </a>

        <div className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={`#${href}`} className="navbar__link">{label}</a>
          ))}
          <a href="tel:+34930185237" className="navbar__phone">
            <span className="navbar__phone-icon">📞</span>
            930 185 237
          </a>
          <a href="#contacto" className="navbar__cta">Consulta gratis</a>
        </div>

      </div>
    </nav>
  );
}