import "./Navbar.css";

const NAV_LINKS = [
  { label: "¿Qué es?", href: "#que-es" },
  { label: "Requisitos", href: "#requisitos" },
  { label: "Documentación", href: "#documentacion" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
];

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">

        {/* Logo real */}
        <a href="#" className="navbar__brand">
          <img
            src="/cropped-logo-entre-tramites.png"
            alt="Entre Trámites"
            className="navbar__logo"
          />
        </a>

        {/* Links centrales */}
        <div className="navbar__links">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="navbar__link"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Derecha */}
        <div className="navbar__right">
          <a
            href="tel:+34930185237"
            className="navbar__phone"
          >
            📞 930 185 237
          </a>

          <a
            href="#contacto"
            className="navbar__cta"
          >
            Consulta gratis
          </a>
        </div>

      </div>
    </nav>
  );
}