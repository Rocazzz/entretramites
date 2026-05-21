import "./Documentation.css";

const DOCS = [
  {
    cat: "Personales",
    items: [
      "Pasaporte válido y vigente (mínimo 1 año)",
      "Fotografías recientes tamaño carné",
      "Certificado de antecedentes penales apostillado",
      "Formulario de solicitud oficial",
    ],
  },
  {
    cat: "Del proyecto",
    items: [
      "Plan de negocio detallado (actividad, mercado, inversión)",
      "Informe de ENISA u organismo equivalente (si aplica)",
      "Currículum vitae con formación y experiencia relevante",
      "Documentación acreditativa del proyecto empresarial",
    ],
  },
  {
    cat: "Económicos y de salud",
    items: [
      "Justificante de medios económicos suficientes",
      "Seguro médico con cobertura completa en España",
      "En su caso, documentación fiscal en país de origen",
      "Prueba de pago de tasas consulares",
    ],
  },
];

export default function Documentation() {
  return (
    <section id="documentacion" className="documentation">
      <div className="documentation__inner">

        <div className="documentation__header">
          <p className="section-eyebrow">Documentación</p>
          <h2 className="section-title">¿Qué documentos necesitas?</h2>
          <p className="section-subtitle">
            La lista puede variar según tu caso. En Entre Trámites te decimos exactamente qué preparar.
          </p>
        </div>

        <div className="documentation__grid">
          {DOCS.map(({ cat, items }) => (
            <div key={cat} className="doc-card">
              <span className="doc-card__badge">{cat}</span>
              {items.map((item, i) => (
                <div key={i} className="doc-card__item">
                  <span className="doc-card__check">✓</span>
                  <span className="doc-card__text">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="documentation__banner">
          <div className="documentation__banner-text">
            <p className="documentation__banner-title">¿No sabes si tienes todo?</p>
            <p className="documentation__banner-body">
              Nuestros gestores revisan tu documentación, identifican lo que falta y te guían para
              conseguirlo. Incluye verificación de apostillas y traducciones juradas.
            </p>
          </div>
          <a href="#contacto" className="documentation__banner-cta">
            Revisión gratuita →
          </a>
        </div>

      </div>
    </section>
  );
}