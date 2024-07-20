import '@/ui/components/popular-product-card.css'

export const PopularProductCard = ({
  imgUrl,
  imgAlt,
  title,
  description,
  price,
  redirectTo
}) => {
  return (
    <a href={redirectTo} class="w-full">
      <article class="popular-product-card transition">
        <picture class="square-image-container">
          <img
            class="popular-product-card__image image-full-cover-center transition"
            src={imgUrl}
            alt={imgAlt}
          />
        </picture>
        <div class="popular-product-card-content">
          <h3 class="popular-product-card__title">{title}</h3>
          {
            description && (
              <p class="popular-product-card__description">{description}</p>
            )
          }
        </div>
        <footer class="popular-product-card__footer">
          <p class="product-card__precio">S/. {price.toFixed(2)}</p>
          <button class="popular-product-card__button">Ver producto -&gt</button>
        </footer>
      </article>
    </a>
  )
}