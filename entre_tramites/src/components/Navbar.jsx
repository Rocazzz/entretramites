import { useState, useEffect } from "react";
import "./NavBar.css";

const NAV_LINKS = ["Qué es", "Requisitos", "Documentación", "Beneficios", "Proceso"];

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
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="navbar__link"
            >
              {item}
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