import { PopularProductCard } from "@/components/PopularProductCard"
import { CakeController } from "@/controllers/CakesController"
import "@/ui/views/popular-products.css"
import { useEffect, useState } from "react"

export const PopularProducts = () => {
  const [cakes, setCakes] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    CakeController.getCakes({ limit: 4 })
      .then((newCakes) => {
        if (newCakes < 0) {
          setError(true)
          return
        }

        setCakes(newCakes);
      })
      .catch((e) => {
        console.error(e)
        setError(true)
      })
  }, [])

  return (
    <section className="popular-products px-8 py-8">
      <header className="max-w-1280 mx-auto py-4">
        <h2 className="titulo-seccion">Productos más pedidos</h2>
      </header>
      <div className="max-w-1280 mx-auto">
        {
          error && (
            <p>Error al cargar los resultados</p>
          )
        }
        {
          !error && (
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
                      redirectTo={`/products/${cake.id}`}
                    />
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </section>
  )
}