import "./Contact.css";

const CONTACT_INFO = [
  { icon: "📞", label: "930 185 237",      desc: "Llámanos"  },
  { icon: "💬", label: "WhatsApp",          desc: "Escríbenos" },
  { icon: "🌐", label: "entretramites.com", desc: "Web"        },
];

const FIELDS = [
  { label: "Nombre completo",     type: "text",  placeholder: "Juan Pérez" },
  { label: "Email",               type: "email", placeholder: "juan@tuempresa.com" },
  { label: "País de residencia",  type: "text",  placeholder: "Colombia, México, Argentina..." },
];

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact__inner">

        {/* Left – info */}
        <div className="contact__info">
          <p className="section-eyebrow">Contacto</p>
          <h2 className="contact__title">
            Empieza tu camino a España hoy
          </h2>
          <p className="contact__subtitle">
            Una consulta gratuita de 30 minutos con nuestros especialistas para evaluar tu
            caso y diseñar la estrategia más efectiva.
          </p>

          <div className="contact__details">
            {CONTACT_INFO.map(({ icon, label, desc }) => (
              <div key={label} className="contact__detail">
                <span className="contact__detail-icon">{icon}</span>
                <div>
                  <p className="contact__detail-desc">{desc}</p>
                  <p className="contact__detail-label">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – form */}
        <div className="contact__form-wrapper">
          <h3 className="contact__form-title">Agenda tu consulta gratuita</h3>

          {FIELDS.map(({ label, type, placeholder }) => (
            <div key={label} className="contact__field">
              <label className="contact__label">{label}</label>
              <input type={type} placeholder={placeholder} className="contact__input" />
            </div>
          ))}

          <div className="contact__field">
            <label className="contact__label">¿En qué consiste tu proyecto?</label>
            <textarea
              rows={3}
              placeholder="Cuéntanos brevemente tu idea de negocio..."
              className="contact__textarea"
            />
          </div>

          <button className="contact__submit">
            Solicitar consulta gratuita →
          </button>

          <p className="contact__disclaimer">
            Sin compromiso. Tu información es confidencial.
          </p>
        </div>

      </div>
    </section>
  );
}