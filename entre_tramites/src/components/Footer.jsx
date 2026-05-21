import "./Footer.css";

const LEGAL_LINKS = ["Privacidad", "Aviso legal", "Cookies"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <div className="footer__logo">ET</div>
          <span className="footer__name">Entre Trámites</span>
        </div>

        <p className="footer__copy">
          © 2025 Entre Trámites · Visa Emprendedor España · Asesoría 100% Online
        </p>

        <div className="footer__legal">
          {LEGAL_LINKS.map((link) => (
            <a key={link} href="#" className="footer__legal-link">{link}</a>
          ))}
        </div>

      </div>
    </footer>
  );
}