import "@/ui/views/contact-form.css"

export const ContactForm = () => {
  return (
    <div>
      <p className="contact-section__title">Envíanos un mensaje</p>
      <form className="contact-form" onSubmit={(e) => { e.preventDefault() }}>
        <label>
          Nombres y apellidos
          <input type="text" />
        </label>
        <label>
          Celular
          <input type="text" />
        </label>
        <label>
          Correo electrónico
          <input type="text" />
        </label>
        <label>
          Mensaje
          <input type="text" />
        </label>
        <button type="submit" className="button">Enviar</button>
      </form>
    </div>
  )
}
