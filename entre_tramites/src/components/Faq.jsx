import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

const FAQS = [
  { q: "¿Cuánto tarda el proceso de aprobación?",           a: "El visado de emprendedor suele resolverse entre 10 y 20 días hábiles desde la presentación del expediente completo. La autorización de residencia puede tardar hasta 20 días hábiles adicionales." },
  { q: "¿Necesito presentarme en persona en el consulado?", a: "No. Puedes designar a Entre Trámites como representante para que presenten la solicitud en tu nombre. Solo deberás acudir en persona al momento de retirar el visado aprobado." },
  { q: "¿Es obligatorio el informe de ENISA?",              a: "No es obligatorio, pero sí muy recomendable. El consulado evalúa el proyecto de forma integral y existen organismos equivalentes a nivel autonómico si ENISA no aplica a tu caso." },
  { q: "¿Puedo llevar a mi familia?",                       a: "Sí. Tu cónyuge, pareja de hecho e hijos menores de 18 años pueden solicitar el permiso de forma conjunta o en un momento posterior sin mayor complejidad." },
  { q: "¿Cuánto tiempo debo permanecer en España?",         a: "Para mantener la residencia activa debes residir en España al menos 183 días al año. Este requisito es clave para la renovación de la autorización." },
  { q: "¿Qué pasa si mi proyecto es rechazado?",            a: "Analizamos las causas y, si procede, presentamos un recurso de alzada o reformulamos el plan de negocio. Nuestro objetivo es acompañarte hasta conseguir la resolución favorable." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq">
      <div className="faq__inner">
        <div className="faq__header">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </div>
        <div className="faq__list">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className={`faq__item ${open === i ? "faq__item--open" : ""}`}>
              <button className="faq__question" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span className="faq__question-text">{q}</span>
                <span className="faq__icon">
                  {open === i ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              {open === i && <p className="faq__answer">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}