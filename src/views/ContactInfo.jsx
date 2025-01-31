import { ClockIcon } from "@/components/icons/ClockIcon"
import { MailClosedIcon } from "@/components/icons/MailClosedIcon"
import { MapPinIcon } from "@/components/icons/MapPinIcon"
import { PhoneIcon } from "@/components/icons/PhoneIcon"
import "@/ui/views/contact-info.css"

export const ContactInfo = () => {
  return (
    <div className="contact-info">
      <a
        href="https://www.bing.com/maps?osid=81a93dd7-2373-4788-9353-5dfb45e23b19&cp=-12.587985~-69.194907&lvl=17.013456&pi=0&imgid=0f327d70-bfda-4b9c-b83a-239f093efe59&v=2&sV=2&form=S00027"
        className="link"
        target="_blank"
      >
        <div className="contact-info-card">
          <MapPinIcon className="contact-info-card__icon" width="48" height="48" />
          <div className="contact-info-card__text">
            <p>Jr. La Cultura N° 851</p>
            <p>Puerto Maldonado - Peru</p>
            <p>Solo recojo, previa coordinación</p>
          </div>
        </div>
      </a>
      <div className="contact-info-card">
        <ClockIcon className="contact-info-card__icon" width="48" height="48" />
        <div className="contact-info-card__text">
          <p>Horario:</p>
          <p>Lunes a sábados: 8:00 a.m. - 8:00 p.m.</p>
        </div>
      </div>
      <div className="contact-info-card">
        <PhoneIcon className="contact-info-card__icon" width="48" height="48" />
        <div className="contact-info-card__text">
          <p>Teléfono:</p>
          <p>966 295 915</p>
          <p>968 671 955</p>
        </div>
      </div>
      <div className="contact-info-card">
        <MailClosedIcon className="contact-info-card__icon" width="48" height="48" />
        <div className="contact-info-card__text">
          <p>Correo:</p>
          <p>info@pasteleriamilenis.com.pe</p>
        </div>
      </div>
    </div>
  )
}
