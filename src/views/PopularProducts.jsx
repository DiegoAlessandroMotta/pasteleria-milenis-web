import { PopularProductCard } from "@/components/PopularProductCard"
import "@/ui/views/popular-products.css"

export const PopularProducts = () => {
  return (
    <section class="popular-products px-8 py-8">
      <header class="max-w-1280 mx-auto py-4">
        <h2 class="titulo-seccion">Productos más pedidos</h2>
      </header>
      <div class="max-w-1280 mx-auto">
        <ul class="popular-products-container">
          <li class="contents">
            <PopularProductCard
              imgUrl="/img/pasteles/pastel-moca-con-crema.webp"
              imgAlt="imagen del producto"
              title="Pastel de moca con crema"
              description="Bizcocho suave de café con crema dulce y un toque de chocolate"
              price={72}
              redirectTo="#"
            />
          </li>
          <li class="contents">
            <PopularProductCard
              imgUrl="/img/pasteles/pastel-maracuya.webp"
              imgAlt="imagen del producto"
              title="Pastel de maracuya"
              description="Esponjoso bizcocho con relleno y cobertura de crema de fruta"
              price={80}
              redirectTo="#"
            />
          </li>
          <li class="contents">
            <PopularProductCard
              imgUrl="/img/pasteles/cheesecake-oreo.webp"
              imgAlt="imagen del producto"
              title="Cheesecake oreo"
              description="Cremoso cheesecake con trozos crujientes de Oreo"
              price={86}
              redirectTo="#"
            />
          </li>
          <li class="contents">
            <PopularProductCard
              imgUrl="/img/pasteles/cheesecake-fresa.webp"
              imgAlt="imagen del producto"
              title="Cheesecake de fresa"
              description="Suave cheesecake con cobertura de salsa de fresa"
              price={72}
              redirectTo="#"
            />
          </li>
        </ul>
      </div>
    </section>
  )
}