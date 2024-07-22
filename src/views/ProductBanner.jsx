import { CakeController } from "@/controllers/CakesController"
import { useEffect, useState } from "react"

export const ProductBanner = ({ id }) => {
  const [product, setProduct] = useState()
  const [error, setError] = useState(false)

  useEffect(() => {
    CakeController.getCake({ id })
      .then((newProduct) => {
        if (newProduct === undefined) {
          setError(true)
          return
        }

        setProduct(newProduct);
      })
      .catch((e) => {
        console.error(e)
        setError(true)
      })
  }, [])

  return (
    <>
      {
        error && (
          <p>Producto no encontrado</p>
        )
      }
      {
        !error && product !== undefined && (
          <div>
            {product.title}
          </div>
        )
      }
    </>
  )
}
