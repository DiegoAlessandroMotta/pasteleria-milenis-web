import '@/ui/views/main-hero.css';

export const MainHero = () => {
  return (
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-bg-filter"></div>
      <div class="hero-content px-8">
        <div class="max-w-1280 mx-auto">
          <div class="hero-contenido">
            <h1 class="hero__titulo">Pastelería Mileni's</h1>
            <p class="hero__texto">Delicias artesanales para cada ocasión</p>
            <a href="#" class="mt-4">
              <button class="hero-button transition">Haz tu pedido ahora</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
