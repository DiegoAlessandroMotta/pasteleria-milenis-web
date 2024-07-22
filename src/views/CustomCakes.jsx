import { SimpleProductCard } from "@/components/SimpleProductCard";
import { CakeController } from "@/controllers/CakesController";
import "@/ui/views/custom-cakes.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CustomCakes = () => {
  const [cakes, setCakes] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    CakeController.getCakes({ limit: 5, category: "custom" })
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
    <section className="custom-cakes px-8 py-8">
      <header className="max-w-1280 mx-auto py-4">
        <h2 className="titulo-seccion">Pasteles personalizados</h2>
      </header>
      <div className="max-w-1280 mx-auto">
        {
          error && (
            <p>Error al cargar los resultados</p>
          )
        }
        {
          !error && (
            <div className="custom-cakes-container">
              {
                cakes.map((cake) => (
                  <SimpleProductCard
                    key={cake.id}
                    imgUrl={cake.imgUrl}
                    imgAlt={cake.imgAlt}
                    price={cake.price}
                    inOffer={cake.inOffer}
                    redirectTo={`/products/${cake.id}`}
                  />
                ))
              }
            </div>
          )
        }
      </div>
      <footer className="max-w-1280 mx-auto py-8">
        <Link to="#" className="main-link-footer-section link transition">
          Ver más pasteles
        </Link>
      </footer>
    </section>
  )
}