import { CakeController } from "@/controllers/CakesController"
import { useEffect, useState } from "react"
import "@/ui/views/product-banner.css"

export const ProductBanner = ({ id }) => {
  const [productId, setProductId] = useState();
  const [product, setProduct] = useState();
  const [error, setError] = useState(false);

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
  }, [productId])

  const handleProductChange = () => {
    const newProductId = window.location.pathname.split("/").at(2)

    if (productId === newProductId) {
      return
    }

    setProductId(newProductId)
  }

  useEffect(() => {
    window.addEventListener('click', handleProductChange);

    return () => {
      window.removeEventListener('click', handleProductChange);
    }
  }, [])

  return (
    <>
      <section className="px-8 py-8">
        <div className="max-w-1280 mx-auto py-4">
          {
            error && (
              <p>Producto no encontrado</p>
            )
          }
          {
            !error && product !== undefined && (
              <div className="product-banner">
                <picture className="product-banner-image-container">
                  <img src={product.imgUrl} alt={product.imgAlt} className="product-banner__image" />
                </picture>
                <div className="product-banner-information">
                  <h2 className="product-banner-information__title">{product.title}</h2>
                  <p>{product.description}</p>
                  <p className="product-banner-information__precio">
                    S/. {product.price}
                  </p>
                </div>
              </div>
            )
          }
        </div>
      </section>
    </>
  )
}
