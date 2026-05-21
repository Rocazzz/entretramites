import "./Hero.css";

const STATS = [
  ["+500", "emprendedores\nasesorados"],
  ["98%",  "tasa de\naprobación"],
  ["100%", "proceso\nonline"],
];

const CHECKLIST = [
  "Eres ciudadano no comunitario",
  "Tienes un proyecto innovador o startup",
  "Quieres residir legalmente en España",
  "Tu negocio tiene un plan viable",
];

const TRUST = [
  { icon: "⭐", text: "4.5/5 valoración media en Google" },
  { icon: "🔒", text: "Proceso 100% online y seguro" },
  { icon: "🇪🇸", text: "Especialistas en derecho español" },
  { icon: "💬", text: "Atención personalizada en español" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">

        {/* Left */}
        <div className="animate-fade-up">
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            Ley 14/2013 de Emprendedores
          </div>

          <h1 className="hero__title">
            Visa de{" "}
            <span className="hero__title-accent">Emprendedor</span>
            <br />en España
          </h1>

          <p className="hero__subtitle">
            Convierte tu idea de negocio en una residencia legal en España.
            Nuestros especialistas gestionan todo el proceso por ti, de forma
            100% online y sin sorpresas.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="hero__btn hero__btn--primary">
              Consulta gratis →
            </a>
            <a href="#que-es" className="hero__btn hero__btn--outline">
              Saber más
            </a>
          </div>

          <div className="hero__stats">
            {STATS.map(([n, l]) => (
              <div key={n}>
                <span className="hero__stat-number">{n}</span>
                <span className="hero__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="animate-fade-in">
          <div className="hero__card">
            <p className="hero__card-title">¿Puedes solicitar esta visa?</p>
            {CHECKLIST.map((item, i) => (
              <div key={i} className="hero__check-item">
                <span className="hero__check-icon">✓</span>
                <span className="hero__check-text">{item}</span>
              </div>
            ))}
            <a href="#contacto" className="hero__card-cta">
              Evalúa tu caso gratis
            </a>
          </div>
        </div>

      </div>

      {/* Trust bar */}
      <div className="hero__trust">
        {TRUST.map(({ icon, text }) => (
          <div key={text} className="hero__trust-item">
            <div className="hero__trust-icon">{icon}</div>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}