import "@/ui/components/product-card.css"
import { Link } from "react-router-dom"

export const ProductCard = ({ imgUrl, imgAlt, title, price, description, redirectTo }) => {
  return (
    <Link to={redirectTo} className="w-full">
      <article className="product-card transition">
        <picture className="square-image-container">
          <img
            className="product-card__image image-full-cover-center transition"
            src={imgUrl}
            alt={imgAlt}
          />
        </picture>
        <div className="product-card-content">
          <p className="product-card__title">{title}</p>
          <p className="product-card__description">{description}</p>
          <p className="product-card__precio">S/. {price.toFixed(2)}</p>
        </div>
      </article>
    </Link>
  )
}
