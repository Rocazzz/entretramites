import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="footer__logo-mark"><span>ET</span></div>
          <span className="footer__name">Entre Trámites</span>
        </div>
        <p className="footer__copy">© 2026 Entre Trámites · Visa Emprendedor España · Asesoría 100% Online</p>
        <div className="footer__legal">
          {["Privacidad", "Aviso legal", "Cookies"].map(l => (
            <a key={l} href="#" className="footer__legal-link">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}