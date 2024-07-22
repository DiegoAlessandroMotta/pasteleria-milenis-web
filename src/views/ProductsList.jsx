import { ProductCard } from '@/components/ProductCard';
import { SearchBar } from '@/components/SearchBar';
import { CakeController } from '@/controllers/CakesController';
import '@/ui/views/products-list.css';
import { useEffect, useState } from 'react';

export const ProductsList = () => {
  const [cakes, setCakes] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    CakeController.getCakes({ limit: 50 })
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
    <section className="products-section py-8 px-8">
      <header className="max-w-1280 mx-auto">
        <SearchBar />
      </header>
      <div className="max-w-1280 mx-auto py-4">
        <div className="products-container">
          {
            error && (
              <p>Error al cargar los resultados</p>
            )
          }
          {
            !error && (
              cakes.map((cake) => (
                <ProductCard
                  key={cake.id}
                  imgUrl={cake.imgUrl}
                  imgAlt={cake.imgAlt}
                  title={cake.title}
                  description={cake.description}
                  price={cake.price}
                  redirectTo={`/products/${cake.id}`}
                />
              ))
            )
          }
        </div>
      </div>
    </section>
  )
}
