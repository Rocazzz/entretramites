import { useState } from "react";
import "./Faq.css";

const FAQS = [
  {
    q: "¿Cuánto tarda el proceso de aprobación?",
    a: "El visado de emprendedor suele resolverse entre 10 y 20 días hábiles desde la presentación del expediente completo ante el consulado. La autorización de residencia puede tardar algo más, hasta 20 días hábiles adicionales.",
  },
  {
    q: "¿Necesito presentarme personalmente en el consulado?",
    a: "No. Puedes designar un representante —como los gestores de Entre Trámites— para que presenten la solicitud en tu nombre. El único momento en que debes acudir personalmente es para retirar el visado ya aprobado.",
  },
  {
    q: "¿Qué pasa si mi proyecto no es aprobado por ENISA?",
    a: "No es obligatorio obtener el informe de ENISA. Es uno de los criterios de valoración, pero el consulado evalúa el proyecto de forma integral. Existen organismos equivalentes a nivel autonómico.",
  },
  {
    q: "¿Puedo llevar a mi familia?",
    a: "Sí. Tu cónyuge, pareja de hecho e hijos menores de 18 años (o mayores dependientes) pueden solicitar el visado de forma conjunta o en un momento posterior.",
  },
  {
    q: "¿Hay mínimo de tiempo que deba permanecer en España?",
    a: "Para mantener la residencia activa debes residir en España al menos 183 días al año (6 meses). Este requisito es clave para la renovación de la autorización.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="faq">
      <div className="faq__inner">

        <div className="faq__header">
          <p className="section-eyebrow">FAQ</p>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </div>

        <div className="faq__list">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="faq__item">
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span className="faq__question-text">{q}</span>
                <span
                  className="faq__icon"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="faq__answer">{a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}