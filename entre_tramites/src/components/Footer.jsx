import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const COLS = [
  {
    title: "Servicios",
    links: [
      "Visa de emprendedor",
      "Visa nómada digital",
      "Visa de estudiante",
      "Autónomos y PYMES",
      "Constitución de empresa",
      "Declaración de renta",
    ],
  },
  {
    title: "Recursos",
    links: [
      "Blog y noticias",
      "Calculadoras",
      "Descargables",
      "ET Research",
      "Modelos de extranjería",
    ],
  },
  {
    title: "Empresa",
    links: [
      "Quiénes somos",
      "Contacto",
      "Política de privacidad",
      "Aviso legal",
      "Cookies",
    ],
  },
];

export default function Footer() {
  return (
    <>
      <a
        href="https://wa.me/3167176644"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__cta-float"
      >
        <FaWhatsapp />
      </a>

      <footer className="footer">
        <div className="footer__inner">

          <div className="footer__top">

            <div>

              <a href="#" className="footer__brand">
                <img
                  src="/entre_blanco.png"
                  alt="Entre Trámites"
                  className="footer__logo"
                />
              </a>

              <p className="footer__tagline">
                Revolucionando el papeleo.
                Asesoría 100% online para vivir y trabajar en España.
              </p>

              <div className="footer__social">

                <a href="#" className="footer__social-icon">
                  <FaFacebookF />
                </a>

                <a href="#" className="footer__social-icon">
                  <FaInstagram />
                </a>

                <a href="#" className="footer__social-icon">
                  <FaYoutube />
                </a>

                <a href="#" className="footer__social-icon">
                  <FaLinkedinIn />
                </a>

              </div>
            </div>

            {COLS.map(({ title, links }) => (
              <div key={title}>

                <p className="footer__col-title">
                  {title}
                </p>

                <div className="footer__col-links">
                  {links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="footer__col-link"
                    >
                      {link}
                    </a>
                  ))}
                </div>

              </div>
            ))}

          </div>

          <div className="footer__bottom">

            <p className="footer__copy">
              © 2026 Entre Trámites · Todos los derechos reservados
            </p>

            <div className="footer__legal">

              <a href="#" className="footer__legal-link">
                Privacidad
              </a>

              <a href="#" className="footer__legal-link">
                Aviso legal
              </a>

              <a href="#" className="footer__legal-link">
                Cookies
              </a>

            </div>

          </div>

        </div>
      </footer>
    </>
  );
}