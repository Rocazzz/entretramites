import "./Hero.css";

const STATS = [
  ["+500", "emprendedores asesorados"],
  ["98%",  "tasa de aprobación"],
  ["100%", "proceso online"],
];

const CHECKLIST = [
  "Tienes un proyecto innovador o de impacto",
  "Estás fuera de la Unión Europea",
  "Quieres residir legalmente en España",
  "Tu proyecto tiene un plan de negocio viable",
];

export default function Hero() {
  return (
    <section className="hero">
      {/* decorative rings */}
      <div className="hero__ring hero__ring--lg" />
      <div className="hero__ring hero__ring--sm" />

      <div className="hero__inner">
        {/* ── Left column ── */}
        <div className="hero__content animate-fade-up">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Ley 14/2013 de Emprendedores
          </div>

          <h1 className="hero__title">
            Visa de{" "}
            <span className="hero__title-accent">Emprendedor</span>
            <br />en España
          </h1>

          <p className="hero__subtitle">
            Convierte tu proyecto innovador en una residencia legal en España.
            Te acompañamos en cada paso del proceso, sin burocracia, sin complicaciones.
          </p>

          <div className="hero__actions">
            <a href="#contacto" className="hero__btn hero__btn--primary">
              Empieza ahora →
            </a>
            <a href="#qué-es" className="hero__btn hero__btn--outline">
              Saber más
            </a>
          </div>

          <div className="hero__stats">
            {STATS.map(([number, label]) => (
              <div key={number} className="hero__stat">
                <span className="hero__stat-number">{number}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column – checklist card ── */}
        <div className="hero__card animate-fade-in">
          <p className="hero__card-title">¿Cumples los requisitos básicos?</p>

          {CHECKLIST.map((item, i) => (
            <div key={i} className="hero__check-item">
              <span className="hero__check-icon">✓</span>
              <span className="hero__check-text">{item}</span>
            </div>
          ))}

          <a href="#contacto" className="hero__card-cta">
            Solicitar asesoría gratuita
          </a>
        </div>
      </div>
    </section>
  );
}