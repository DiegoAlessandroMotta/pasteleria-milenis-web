import "@/ui/views/products-hero.css"

export const ProductsHero = () => {
  return (
    <section className="products-hero">
      <div className="products-hero-bg"></div>
      <div className="products-hero-bg-filter"></div>
      <div className="products-hero-content px-8">
        <div className="max-w-1280 mx-auto">
          <div className="products-hero-contenido">
            <h1 className="products-hero__titulo">Pasteles y Repostería en general</h1>
            <p className="products-hero__texto">
              Atrévete a probar cualquiera de nuestras delicias
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
