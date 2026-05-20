import "./Process.css";

const STEPS = [
  { n: 1, title: "Consulta gratuita",         desc: "Evaluamos tu perfil y proyecto en una sesión sin coste. Te decimos si cumples los requisitos y cuál es el camino más rápido." },
  { n: 2, title: "Preparación del expediente", desc: "Nuestros gestores te guían para reunir, apostillar y organizar toda la documentación necesaria, incluyendo el plan de negocio." },
  { n: 3, title: "Solicitud y representación", desc: "Presentamos la solicitud en tu nombre ante el consulado o la UGE-CE. Tú no necesitas desplazarte a ningún sitio." },
  { n: 4, title: "Seguimiento activo",         desc: "Hacemos seguimiento continuo del expediente y te mantenemos informado en tiempo real hasta la resolución favorable." },
  { n: 5, title: "Bienvenido a España",        desc: "Con tu visado aprobado, te acompañamos en el empadronamiento, NIE/TIE y los primeros pasos en territorio español." },
];

export default function Process() {
  return (
    <section id="proceso" className="process">
      <div className="process__inner">

        <div className="process__header">
          <p className="section-eyebrow">Proceso</p>
          <h2 className="section-title">Cómo te acompañamos</h2>
        </div>

        <div className="process__steps">
          {STEPS.map(({ n, title, desc }, i) => (
            <div key={n} className="process__step">
              <div className="process__step-left">
                <div className={`process__circle ${n === 1 ? "process__circle--active" : ""}`}>
                  {n}
                </div>
                {i < STEPS.length - 1 && <div className="process__line" />}
              </div>
              <div className="process__step-content">
                <h3 className="process__step-title">{title}</h3>
                <p className="process__step-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}