import { PopularProductCard } from "@/components/PopularProductCard"
import "@/ui/views/popular-products.css"

const cakes = [
  {
    imgUrl: "/img/pasteles/pastel-moca-con-crema.webp",
    imgAlt: "imagen del producto",
    title: "Pastel de moca con crema",
    description: "Bizcocho suave de café con crema dulce y un toque de chocolate",
    price: 72,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/pastel-maracuya.webp",
    imgAlt: "imagen del producto",
    title: "Pastel de maracuya",
    description: "Esponjoso bizcocho con relleno y cobertura de crema de fruta",
    price: 80,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/cheesecake-oreo.webp",
    imgAlt: "imagen del producto",
    title: "Cheesecake oreo",
    description: "Cremoso cheesecake con trozos crujientes de Oreo",
    price: 86,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/cheesecake-fresa.webp",
    imgAlt: "imagen del producto",
    title: "Cheesecake de fresa",
    description: "Suave cheesecake con cobertura de salsa de fresa",
    price: 72,
    redirectTo: "#",
  }
]

export const PopularProducts = () => {
  return (
    <section className="popular-products px-8 py-8">
      <header className="max-w-1280 mx-auto py-4">
        <h2 className="titulo-seccion">Productos más pedidos</h2>
      </header>
      <div className="max-w-1280 mx-auto">
        <ul className="popular-products-container">
          {
            cakes.map(cake => (
              <li className="contents" key={cake.id}>
                <PopularProductCard
                  imgUrl={cake.imgUrl}
                  imgAlt={cake.imgAlt}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  redirectTo={cake.redirectTo}
                />
              </li>

            ))
          }
        </ul>
      </div>
    </section>
  )
}