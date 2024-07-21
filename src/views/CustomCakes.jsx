import { SimpleProductCard } from "@/components/SimpleProductCard";
import "@/ui/views/custom-cakes.css";
import { Link } from "react-router-dom";

const cakes = [
  {
    imgUrl: "/img/pasteles/personalizados/custom-cake-1.webp",
    imgAlt: "imagen del producto",
    price: 120,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/personalizados/custom-cake-2.webp",
    imgAlt: "imagen del producto",
    price: 85,
    inOffer: true,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/personalizados/custom-cake-3.webp",
    imgAlt: "imagen del producto",
    price: 125,
    inOffer: true,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/personalizados/custom-cake-4.webp",
    imgAlt: "imagen del producto",
    price: 110,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/personalizados/custom-cake-5.webp",
    imgAlt: "imagen del producto",
    price: 90,
    redirectTo: "#",
  },
];

export const CustomCakes = () => {

  return (
    <section className="custom-cakes px-8 py-8">
      <header className="max-w-1280 mx-auto py-4">
        <h2 className="titulo-seccion">Pasteles personalizados</h2>
      </header>
      <div className="custom-cakes-container max-w-1280 mx-auto">
        {
          cakes.map((cake) => (
            <SimpleProductCard
              key={cake.imgUrl}
              imgUrl={cake.imgUrl}
              imgAlt={cake.imgAlt}
              price={cake.price}
              inOffer={cake.inOffer}
              redirectTo={cake.redirectTo}
            />
          ))
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