import "./Testimonials.css";

const TESTIMONIALS = [
  {
    name: "Alejandro M.",
    country: "🇨🇴 Colombia",
    role: "Fundador de FinTech",
    text: "El equipo de Entre Trámites me ahorró meses de confusión. En 6 semanas tenía mi visado aprobado y ya estoy montando mi startup en Barcelona.",
  },
  {
    name: "María F.",
    country: "🇲🇽 México",
    role: "CEO de E-commerce",
    text: "Pensé que era imposible por la documentación. Ellos me explicaron todo paso a paso, prepararon el expediente y lo presentaron por mí. Increíble servicio.",
  },
  {
    name: "Rodrigo C.",
    country: "🇦🇷 Argentina",
    role: "Consultor de Innovación",
    text: "Lo que más me gustó fue la transparencia. Sabían mi caso desde el primer día y cumplieron exactamente lo prometido. Muy profesionales.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">

        <div className="testimonials__header">
          <p className="section-eyebrow">Testimonios</p>
          <h2 className="section-title">Emprendedores que ya lo lograron</h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map(({ name, country, role, text }) => (
            <div key={name} className="testimonial-card">
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{text}</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__avatar">{name[0]}</div>
                <div>
                  <p className="testimonial-card__name">
                    {name} <span className="testimonial-card__country">{country}</span>
                  </p>
                  <p className="testimonial-card__role">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}