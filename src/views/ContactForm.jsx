import "@/ui/views/contact-form.css"

export const ContactForm = () => {
  return (
    <div>
      <p class="contact-section__title">Envíanos un mensaje</p>
      <form class="contact-form">
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
        <button type="submit" class="button">Enviar</button>
      </form>
    </div>
  )
}
