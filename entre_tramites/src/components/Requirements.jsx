import "./Requirements.css";

const REQUIREMENTS = [
  { n: "01", title: "Perfil personal", items: ["Ciudadano de país no comunitario", "Sin antecedentes penales en España ni país de residencia previa", "No encontrarse en período de prohibición de entrada a España"] },
  { n: "02", title: "El proyecto",     items: ["Actividad innovadora con interés económico para España", "Plan de negocio detallado y viable", "Formación o experiencia profesional acorde al proyecto"] },
  { n: "03", title: "Medios económicos", items: ["Recursos suficientes para subsistir durante la estancia", "Seguro médico público o privado con cobertura en España", "En su caso, medios para familiares a cargo"] },
];

export default function Requirements() {
  return (
    <section id="requisitos" className="requirements">
      <div className="requirements__inner">
        <div className="requirements__header">
          <span className="section-eyebrow">Requisitos</span>
          <h2 className="section-title">¿Quién puede solicitarla?</h2>
        </div>
        <div className="requirements__grid">
          {REQUIREMENTS.map(({ n, title, items }) => (
            <div key={n} className="req-card">
              <div className="req-card__header">
                <span className="req-card__num">{n}</span>
                <h3 className="req-card__title">{title}</h3>
              </div>
              <div className="req-card__body">
                {items.map((item, i) => (
                  <div key={i} className="req-card__item">
                    <span className="req-card__bullet">✓</span>
                    <span className="req-card__text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}