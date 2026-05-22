import {
  FaGlobe,
  FaBolt,
  FaBriefcase,
  FaUsers,
  FaDesktop,
  FaChartLine,
} from "react-icons/fa";
import "./Benefits.css";

const BENEFITS = [
  { icon: <FaGlobe />,     title: "Área Schengen completa",      desc: "Muévete libremente por los 27 países del espacio Schengen con un solo permiso de residencia." },
  { icon: <FaBolt />,      title: "Sin inversión mínima",        desc: "A diferencia de la Golden Visa, no se exige capital mínimo. Lo que importa es la innovación." },
  { icon: <FaBriefcase />, title: "Permiso de trabajo incluido", desc: "Trabaja legalmente en España sin tramitar ningún visado de trabajo adicional." },
  { icon: <FaUsers />,     title: "Reagrupación familiar",       desc: "Cónyuge e hijos menores de 18 años pueden incluirse en la solicitud desde el primer momento." },
  { icon: <FaDesktop />,   title: "Sin desplazamiento",          desc: "Designa a Entre Trámites como representante y tramita tu visa sin salir de tu país." },
  { icon: <FaChartLine />, title: "Ventajas fiscales",           desc: "Acceso al IS al 15% para startups y al régimen de la Ley Beckham en determinados casos." },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="benefits">
      <div className="benefits__inner">
        <div className="benefits__header">
          <span className="section-eyebrow">Beneficios</span>
          <h2 className="section-title">Por qué esta visa cambia todo</h2>
        </div>
        <div className="benefits__grid">
          {BENEFITS.map(({ icon, title, desc }) => (
            <div key={title} className="benefit-card">
              <div className="benefit-card__icon">{icon}</div>
              <div>
                <h3 className="benefit-card__title">{title}</h3>
                <p className="benefit-card__desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}