import "@/ui/views/about.css"
import { Link } from "react-router-dom"

export const About = () => {
  return (
    <section className="about-section px-8 py-8">
      <header className="max-w-1280 mx-auto py-4">
        <h2 className="titulo-seccion">Conoce Mileni's</h2>
      </header>
      <div className="about-content max-w-1280 mx-auto">
        <a
          href="https://www.bing.com/maps?osid=81a93dd7-2373-4788-9353-5dfb45e23b19&cp=-12.587985~-69.194907&lvl=17.013456&pi=0&imgid=0f327d70-bfda-4b9c-b83a-239f093efe59&v=2&sV=2&form=S00027"
          className="link"
          target="_blank"
        >
          <picture className="about-content-image-container square-image-container">
            <img
              className="about-content__image"
              src="/img/ubicacion-pasteleria.webp"
              alt="ubicacion pasteleria: Jr. La Cultura N° 851, Puerto Maldonado, Peru, 17001"
            />
          </picture>
        </a>
        <div className="about-content-information">
          <p>
            En Mileni's, endulzamos tus momentos especiales con nuestras exquisitas
            creaciones artesanales. Desde pasteles elaborados con amor hasta
            cupcakes irresistibles, cada bocado es una experiencia única. Descubre
            la magia de nuestros sabores y déjate sorprender por la calidad y el
            detalle en cada uno de nuestros productos. ¡Haz de cada ocasión un
            momento inolvidable con Mileni's!
          </p>
          <div className="about-content-contact">
            <a
              href="https://www.bing.com/maps?osid=81a93dd7-2373-4788-9353-5dfb45e23b19&cp=-12.587985~-69.194907&lvl=17.013456&pi=0&imgid=0f327d70-bfda-4b9c-b83a-239f093efe59&v=2&sV=2&form=S00027"
              className="link link-colored transition"
              target="_blank"
            >
              Direccion: Jr. La Cultura N° 851, Puerto Maldonado, Peru, 17001
            </a>
            <Link to="#" className="link link-colored transition"> Celular: 953 716 456 </Link>
          </div>
        </div>
      </div>
    </section>
  )
}