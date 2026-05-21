import { useState, useEffect } from "react";
import "./NavBar.css";

const NAV_LINKS = [
  { label: "Qué es",        href: "que-es"        },
  { label: "Requisitos",    href: "requisitos"     },
  { label: "Documentación", href: "documentacion"  },
  { label: "Beneficios",    href: "beneficios"     },
  { label: "Proceso",       href: "proceso"        },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">

        <a href="#" className="navbar__brand">
          <div className="navbar__logo">ET</div>
          <span className="navbar__name">Entre Trámites</span>
        </a>

        <div className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={`#${href}`}
              className="navbar__link"
            >
              {label}
            </a>
          ))}
          <a href="#contacto" className="navbar__cta">
            Consulta gratuita
          </a>
        </div>

      </div>
    </nav>
  );
}