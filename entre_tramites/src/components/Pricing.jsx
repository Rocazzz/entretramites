import "./Pricing.css";

const PLANS = [
  {
    name: "Asesoría inicial", price: "Gratis", sub: "primera consulta",
    features: ["Evaluación de tu perfil y proyecto", "Revisión de elegibilidad", "Hoja de ruta personalizada", "Respuesta en menos de 24 h"],
    cta: "Reservar consulta", highlight: false,
  },
  {
    name: "Gestión completa", price: "€990", sub: "pago único, sin sorpresas",
    features: ["Todo lo del plan básico", "Preparación del expediente completo", "Representación ante el consulado", "Seguimiento hasta la resolución", "Soporte post-aprobación incluido"],
    cta: "Empezar ahora", highlight: true, badge: "Más popular",
  },
  {
    name: "Premium + empresa", price: "€1.690", sub: "pago único",
    features: ["Todo lo del plan completo", "Constitución de empresa en España", "Alta como autónomo o SL", "Asesoría fiscal primer año", "Gestor personal dedicado"],
    cta: "Consultar precio", highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="pricing">
      <div className="pricing__inner">
        <div className="pricing__header">
          <span className="section-eyebrow">Tarifas</span>
          <h2 className="section-title">Nuestros servicios</h2>
        </div>
        <p className="pricing__note">Precios orientativos. Tu gestor confirmará el precio exacto en la consulta gratuita.</p>
        <div className="pricing__grid">
          {PLANS.map(({ name, price, sub, features, cta, highlight, badge }) => (
            <div key={name} className={`pricing-card ${highlight ? "pricing-card--highlight" : ""}`}>
              {badge && <div className="pricing-card__badge">{badge}</div>}
              <div className="pricing-card__body">
                <p className="pricing-card__name">{name}</p>
                <p className="pricing-card__price">{price}</p>
                <p className="pricing-card__sub">{sub}</p>
                <ul className="pricing-card__features">
                  {features.map((f, i) => (
                    <li key={i} className="pricing-card__feature">
                      <span className="pricing-card__check">✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`pricing-card__cta ${highlight ? "pricing-card__cta--filled" : "pricing-card__cta--outline"}`}>
                  {cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}