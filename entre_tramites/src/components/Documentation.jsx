import "./Documentation.css";

const DOCS = [
  { cat: "Personales",  items: ["Pasaporte válido (mínimo 1 año de vigencia)", "Fotografías recientes tamaño carné", "Certificado de antecedentes penales apostillado", "Formulario de solicitud oficial cumplimentado"] },
  { cat: "Del proyecto", items: ["Plan de negocio detallado (actividad, mercado, inversión)", "Informe ENISA u organismo autonómico equivalente", "Currículum vitae con formación y experiencia relevante", "Documentación acreditativa del proyecto empresarial"] },
  { cat: "Económicos",   items: ["Justificante de medios económicos suficientes", "Seguro médico con cobertura completa en España", "En su caso, documentación fiscal del país de origen", "Justificante del pago de las tasas consulares"] },
];

export default function Documentation() {
  return (
    <section id="documentacion" className="documentation">
      <div className="documentation__inner">
        <div className="documentation__header">
          <span className="section-eyebrow">Documentación</span>
          <h2 className="section-title">¿Qué documentos necesitas?</h2>
          <p className="section-subtitle">La lista exacta varía según tu caso. En Entre Trámites te decimos con precisión qué preparar y cómo hacerlo.</p>
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
          <div>
            <p className="documentation__banner-title">¿No sabes si tienes todo listo?</p>
            <p className="documentation__banner-body">Nuestros gestores revisan tu expediente, detectan lo que falta y te acompañan para conseguirlo — incluidas apostillas y traducciones juradas.</p>
          </div>
          <a href="#contacto" className="documentation__banner-cta">Revisión gratuita →</a>
        </div>
      </div>
    </section>
  );
}