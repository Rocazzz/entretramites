import { FaPhoneAlt, FaWhatsapp, FaGlobe, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const CONTACT_INFO = [
  { icon: <FaPhoneAlt />,  label: "930 185 237",           desc: "Llámanos"   },
  { icon: <FaWhatsapp />,  label: "WhatsApp disponible",   desc: "Escríbenos" },
  { icon: <FaGlobe />,     label: "entretramites.com",     desc: "Web"        },
  { icon: <FaEnvelope />,  label: "hola@entretramites.com",desc: "Email"      },
];

const FIELDS = [
  { label: "Nombre y apellido *", type: "text",  placeholder: "Juan Pérez" },
  { label: "Teléfono *",          type: "tel",   placeholder: "+57 300 000 0000" },
  { label: "Email *",             type: "email", placeholder: "juan@tuempresa.com" },
];

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__inner">
        <div className="contact__header">
          <span className="section-eyebrow">Contacto</span>
          <h2 className="section-title">¡No dudes en contactarnos!</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Agenda una consulta gratuita con un especialista en extranjería
            y resuelve todas tus dudas sobre la Visa de Emprendedor en España.
          </p>
        </div>

        <div className="contact__grid">
          <div>
            <p className="section-subtitle">Estamos para ayudarte en cada paso del proceso.</p>
            <div className="contact__info-list">
              {CONTACT_INFO.map(({ icon, label, desc }) => (
                <div key={label} className="contact__info-item">
                  <span className="contact__info-icon">{icon}</span>
                  <div>
                    <p className="contact__info-desc">{desc}</p>
                    <p className="contact__info-label">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact__form-wrapper">
            <h3 className="contact__form-title">Agenda tu consulta gratuita</h3>
            {FIELDS.map(({ label, type, placeholder }) => (
              <div key={label} className="contact__field">
                <label className="contact__label">{label}</label>
                <input type={type} placeholder={placeholder} className="contact__input" />
              </div>
            ))}
            <div className="contact__field">
              <label className="contact__label">¿En qué podemos ayudarte? *</label>
              <textarea rows={4} placeholder="Cuéntanos sobre tu proyecto o consulta..." className="contact__textarea" />
            </div>
            <button className="contact__submit">Enviar consulta →</button>
            <p className="contact__disclaimer">Sin compromiso · Tu información es confidencial · Respuesta en 24 h</p>
          </div>
        </div>
      </div>
    </section>
  );
}