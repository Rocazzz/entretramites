import "./Testimonials.css";

const TESTIMONIALS = [
  { name: "Alejandro M.", country: "🇨🇴 Colombia", role: "Fundador de startup FinTech", text: "El equipo de Entre Trámites me ahorró meses de confusión. En 6 semanas tenía mi visa aprobada y ya estoy operando mi startup en Barcelona. Profesionales y transparentes." },
  { name: "María F.",     country: "🇲🇽 México",   role: "CEO de E-commerce",          text: "Pensé que la documentación era imposible. Me explicaron todo paso a paso, prepararon el expediente y lo presentaron por mí. Increíble servicio al cliente." },
  { name: "Rodrigo C.",   country: "🇦🇷 Argentina", role: "Consultor de Innovación",    text: "Lo mejor fue la transparencia. Desde la primera consulta sabían mi caso y cumplieron exactamente lo prometido. 100% recomendados." },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <span className="section-eyebrow">Testimonios</span>
          <h2 className="section-title">Emprendedores que ya lo lograron</h2>
        </div>
        <div className="testimonials__rating">
          <span className="testimonials__stars">★★★★½</span>
          <span className="testimonials__rating-text">4.5/5 · Más de 500 clientes satisfechos</span>
        </div>
        <div className="testimonials__grid">
          {TESTIMONIALS.map(({ name, country, role, text }) => (
            <div key={name} className="testimonial-card">
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{text}</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__avatar">{name[0]}</div>
                <div>
                  <p className="testimonial-card__name">{name} <span className="testimonial-card__country">{country}</span></p>
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