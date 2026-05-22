import { FaRocket, FaHome, FaUsers, FaLightbulb } from "react-icons/fa";
import "./Whatis.css";

const CARDS = [
  { icon: <FaRocket />, title: "Visado inicial — 1 año", desc: "Permite entrar a España para preparar el lanzamiento de tu actividad. Ideal si estás fuera del país y quieres tramitarlo desde tu consulado." },
  { icon: <FaHome />,   title: "Autorización de residencia — 3 años", desc: "Si ya estás en España, puedes solicitar directamente la autorización de residencia para emprendedores, renovable y válida en todo el territorio nacional." },
  { icon: <FaUsers />,  title: "Extensión familiar", desc: "Tu cónyuge e hijos menores de 18 años pueden solicitar el permiso de forma conjunta o en un momento posterior, sin coste adicional de gestión." },
];

export default function WhatIs() {
  return (
    <section id="que-es" className="whatis">
      <div className="whatis__inner">
        <div className="whatis__header">
          <span className="section-eyebrow">¿Qué es?</span>
          <h2 className="section-title">La visa para emprendedores en España</h2>
          <p className="section-subtitle">
            Regulada por la <strong>Ley 14/2013 de Apoyo a los Emprendedores</strong>,
            permite a ciudadanos no comunitarios residir legalmente en España para
            desarrollar actividades empresariales innovadoras.
          </p>
        </div>

        <div className="whatis__grid">
          {CARDS.map(({ icon, title, desc }) => (
            <div key={title} className="whatis__card">
              <div className="whatis__card-icon">{icon}</div>
              <h3 className="whatis__card-title">{title}</h3>
              <p className="whatis__card-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="whatis__banner">
          <div className="whatis__banner-icon"><FaLightbulb /></div>
          <div className="whatis__banner-content">
            <div className="whatis__banner-label">Dato importante</div>
            <p className="whatis__banner-text">
              No existe monto mínimo de inversión. Cada proyecto se evalúa de forma individual
              según su carácter innovador e impacto económico para España.
            </p>
          </div>
          <a href="#contacto" className="whatis__banner-cta">Evalúa tu caso →</a>
        </div>
      </div>
    </section>
  );
}