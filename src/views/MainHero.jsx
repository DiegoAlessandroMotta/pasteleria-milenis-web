import '@/ui/views/main-hero.css';
import { Link } from 'react-router-dom';

export const MainHero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-bg-filter"></div>
      <div className="hero-content px-8">
        <div className="max-w-1280 mx-auto">
          <div className="hero-contenido">
            <h1 className="hero__titulo">Pastelería Mileni's</h1>
            <p className="hero__texto">Delicias artesanales para cada ocasión</p>
            <Link to="/contact" className="mt-4">
              <button className="hero-button transition">Haz tu pedido ahora</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
