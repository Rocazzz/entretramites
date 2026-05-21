import "./Requirements.css";

const REQUIREMENTS = [
  {
    n: "01",
    title: "Perfil del solicitante",
    items: [
      "Ser nacional de un país no comunitario",
      "No encontrarse en período de prohibición de retorno a España",
      "No tener antecedentes penales en España ni en países de residencia previa",
    ],
  },
  {
    n: "02",
    title: "El proyecto",
    items: [
      "Actividad de carácter innovador con interés económico para España",
      "Plan de negocio detallado y viable",
      "Perfil profesional acorde al proyecto: formación y experiencia",
    ],
  },
  {
    n: "03",
    title: "Medios económicos",
    items: [
      "Recursos suficientes para mantenerte durante la estancia",
      "Seguro médico con cobertura completa en España",
      "En su caso, medios económicos para los familiares a cargo",
    ],
  },
];

export default function Requirements() {
  return (
    <section id="requisitos" className="requirements">
      <div className="requirements__inner">

        <div className="requirements__header">
          <p className="section-eyebrow">Requisitos</p>
          <h2 className="section-title">¿Quién puede solicitarlo?</h2>
        </div>

        <div className="requirements__grid">
          {REQUIREMENTS.map(({ n, title, items }) => (
            <div key={n} className="req-card">
              <div className="req-card__header">
                <span className="req-card__number">{n}</span>
                <h3 className="req-card__title">{title}</h3>
              </div>
              <div className="req-card__body">
                {items.map((item, i) => (
                  <div key={i} className="req-card__item">
                    <span className="req-card__dash">—</span>
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