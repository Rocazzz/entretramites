import {
  FaCheckCircle,
  FaLaptop,
  FaPuzzlePiece,
  FaUserTie,
  FaTag,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";
import "./Hero.css";

const CHECKLIST = [
  "Eres ciudadano de un país no comunitario",
  "Tienes un proyecto innovador o startup",
  "Quieres residir legalmente en España",
  "Tu negocio tiene un plan de negocio viable",
];

const TRUST = [
  { icon: <FaCheckCircle />, title: "Sin estrés",          desc: "Todo es 100% online, sin necesidad de salir de casa" },
  { icon: <FaPuzzlePiece />, title: "Integral",            desc: "Inmigración, asuntos legales o impuestos — lo hacemos" },
  { icon: <FaUserTie />,     title: "Personalizado",       desc: "Tendrás un especialista dedicado, guiándote paso a paso" },
  { icon: <FaTag />,         title: "Sin costos ocultos",  desc: "Paga solo por los servicios que necesitas" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__dots-tr" />
      <div className="hero__dots-bl" />

      <div className="hero__inner">
        {/* Left */}
        <div className="animate-fade-up">
          <h1 className="hero__title">
            Obtén tu <strong>Visa de Emprendedor</strong> en España
          </h1>
          <p className="hero__subtitle">
            Gestionamos tu residencia para emprendedores de principio a fin.
            Asesoría 100% online, sin burocracia y con especialistas dedicados a tu caso.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="hero__btn-primary">Consulta gratis</a>
            <a href="#que-es"   className="hero__btn-outline">Saber más</a>
          </div>
          <div className="hero__rating">
            <div className="hero__rating-score">
              <span className="hero__stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </span>
              4.5
            </div>
            <span className="hero__rating-text">Valorado con 4.5 de 5 · +500 reseñas</span>
          </div>
        </div>

        {/* Right card */}
        <div className="animate-fade-in">
          <div className="hero__card">
            <p className="hero__card-title">¿Puedes solicitar esta visa?</p>
            {CHECKLIST.map((item, i) => (
              <div key={i} className="hero__check-item">
                <span className="hero__check-icon"><FaCheckCircle /></span>
                <span className="hero__check-text">{item}</span>
              </div>
            ))}
            <a href="#contacto" className="hero__card-cta">Evalúa tu caso gratis</a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="hero__trust-bar">
        <div className="hero__trust-bar-inner">
          {TRUST.map(({ icon, title, desc }) => (
            <div key={title} className="hero__trust-item">
              <div className="hero__trust-icon">{icon}</div>
              <div>
                <p className="hero__trust-title">{title}</p>
                <p className="hero__trust-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}