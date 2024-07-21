import "@/ui/views/contact-section.css"
import { ContactInfo } from "./ContactInfo"

export const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-section-content px-8">
        <div className="max-w-1280 mx-auto">
          <div className="contact-section-contenido">
            <ContactInfo />
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
