import "@/ui/components/simple-product-card.css"
import { Link } from "react-router-dom"

export const SimpleProductCard = ({ imgUrl, imgAlt, price, inOffer, redirectTo }) => {
  return (
    <Link to={redirectTo} className="w-full">
      <article className="simple-product-card transition">
        <picture className="square-image-container w-full">
          <img
            className="simple-product-card__image image-full-cover-center transition"
            src={imgUrl}
            alt={imgAlt}
          />
        </picture>
        <div className="simple-product-card-content">
          {inOffer && <span className="product-card__offer">En oferta</span>}
          <span className="simple-product-card__precio">S/. {price}</span>
        </div>
      </article>
    </Link>
  )
}