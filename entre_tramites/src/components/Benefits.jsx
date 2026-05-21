import "./Benefits.css";

const BENEFITS = [
  { icon: "🌍", title: "Libre circulación Schengen",  desc: "Muévete sin restricciones por los 27 países del Área Schengen con un solo visado." },
  { icon: "⚡", title: "Sin mínimo de inversión",     desc: "A diferencia de la Golden Visa, no se exige capital mínimo. Lo que importa es la innovación de tu proyecto." },
  { icon: "💼", title: "Permiso de trabajo incluido", desc: "Trabaja legalmente en España sin necesidad de tramitar un visado de trabajo por separado." },
  { icon: "👨‍👩‍👧", title: "Toda tu familia",          desc: "Incluye a tu cónyuge e hijos menores de 18 años en la solicitud. Todos protegidos." },
  { icon: "🖥️", title: "Sin presencia física",       desc: "Puedes designar un representante para tramitar el visado. No necesitas viajar para solicitarlo." },
  { icon: "📈", title: "Ventajas fiscales",           desc: "Acceso al régimen especial del Impuesto de Sociedades al 15% para startups durante los primeros años." },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="benefits">
      <div className="benefits__inner">

        <div className="benefits__header">
          <p className="section-eyebrow">Beneficios</p>
          <h2 className="section-title">Por qué esta visa cambia todo</h2>
        </div>

        <div className="benefits__grid">
          {BENEFITS.map(({ icon, title, desc }) => (
            <div key={title} className="benefit-card">
              <div className="benefit-card__icon">{icon}</div>
              <h3 className="benefit-card__title">{title}</h3>
              <p className="benefit-card__desc">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}