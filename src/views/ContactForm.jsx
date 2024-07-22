import "@/ui/views/contact-form.css"

export const ContactForm = () => {
  return (
    <div>
      <p className="contact-section__title">Envíanos un mensaje</p>
      <form className="contact-form" onSubmit={(e) => { e.preventDefault() }}>
        <label>
          Nombres y apellidos
          <input type="text" name="nombres_apellidos" pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,40}" title="El nombre debe contener solo letras y espacios, y debe tener al menos 2 caracteres." required />
        </label>
        <label>
          Celular
          <input name="celular" pattern="[0-9]{9}" maxLength="9" required />
        </label>
        <label>
          Correo electrónico
          <input type="email" required />
        </label>
        <label>
          Mensaje
          <input type="text" required />
        </label>
        <button type="submit" className="button">Enviar</button>
      </form>
    </div>
  )
}
