import "./WhatIs.css";

const CARDS = [
  {
    icon: "🚀",
    title: "Visado inicial (1 año)",
    desc: "Permite entrar a España para realizar los trámites previos al lanzamiento de tu actividad emprendedora. Ideal si estás fuera del país.",
  },
  {
    icon: "🏠",
    title: "Autorización de residencia (3 años)",
    desc: "Si ya estás en España, puedes solicitar directamente la autorización de residencia para emprendedores, renovable y válida en todo el territorio nacional.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Extensión familiar",
    desc: "Tu cónyuge e hijos menores de 18 años pueden solicitar el visado de forma conjunta o sucesiva, facilitando la reagrupación familiar.",
  },
];

export default function WhatIs() {
  return (
    <section id="qué-es" className="whatis">
      <div className="whatis__inner">

        <div className="whatis__header">
          <p className="section-eyebrow">¿Qué es?</p>
          <h2 className="section-title">
            El visado para emprendedores en España
          </h2>
          <p className="section-subtitle">
            Regulado por la{" "}
            <strong>Ley 14/2013 de Apoyo a los Emprendedores y su Internacionalización</strong>,
            este visado permite a ciudadanos extranjeros no comunitarios residir y desarrollar
            actividades empresariales innovadoras en España.
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
          <div className="whatis__banner-text">
            <div className="whatis__banner-eyebrow">Dato clave</div>
            <p className="whatis__banner-body">
              No existe monto mínimo de inversión ni requisito de creación de empleo.
              Cada proyecto es evaluado de forma individual.
            </p>
          </div>
          <a href="#contacto" className="whatis__banner-cta">
            Evalúa tu caso →
          </a>
        </div>

      </div>
    </section>
  );
}