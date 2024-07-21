import '@/ui/components/popular-product-card.css'
import { Link } from 'react-router-dom'

export const PopularProductCard = ({
  imgUrl,
  imgAlt,
  title,
  description,
  price,
  redirectTo
}) => {
  return (
    <Link to={redirectTo} className="w-full">
      <article className="popular-product-card transition">
        <picture className="square-image-container">
          <img
            className="popular-product-card__image image-full-cover-center transition"
            src={imgUrl}
            alt={imgAlt}
          />
        </picture>
        <div className="popular-product-card-content">
          <h3 className="popular-product-card__title">{title}</h3>
          {
            description && (
              <p className="popular-product-card__description">{description}</p>
            )
          }
        </div>
        <footer className="popular-product-card__footer">
          <p className="product-card__precio">S/. {price}</p>
          <button className="popular-product-card__button">Ver producto</button>
        </footer>
      </article>
    </Link>
  )
}