import { ProductCard } from '@/components/ProductCard';
import { SearchBar } from '@/components/SearchBar';
import '@/ui/views/products-list.css';

const products = [
  {
    imgUrl: "/img/pasteles/personalizados/custom-cake-1.webp",
    imgAlt: "imagen del producto",
    price: 120,
    title: "Pastel personalizado",
    description: "Pastel con la temática que desees",
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/personalizados/custom-cake-2.webp",
    imgAlt: "imagen del producto",
    price: 85,
    title: "Pastel personalizado",
    description: "Pastel con la temática que desees",
    inOffer: true,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/personalizados/custom-cake-3.webp",
    imgAlt: "imagen del producto",
    price: 125,
    title: "Pastel personalizado",
    description: "Pastel con la temática que desees",
    inOffer: true,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/personalizados/custom-cake-4.webp",
    imgAlt: "imagen del producto",
    price: 110,
    title: "Pastel personalizado",
    description: "Pastel con la temática que desees",
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/personalizados/custom-cake-5.webp",
    imgAlt: "imagen del producto",
    price: 90,
    title: "Pastel personalizado",
    description: "Pastel con la temática que desees",
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/pastel-moca-con-crema.webp",
    imgAlt: "imagen del producto",
    title: "Pastel de moca con crema",
    description:
      "Bizcocho suave de café con crema dulce y un toque de chocolate",
    price: 72,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/pastel-maracuya.webp",
    imgAlt: "imagen del producto",
    title: "Pastel de maracuya",
    description: "Esponjoso bizcocho con relleno y cobertura de crema de fruta",
    price: 80,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/cheesecake-oreo.webp",
    imgAlt: "imagen del producto",
    title: "Cheesecake oreo",
    description: "Cremoso cheesecake con trozos crujientes de Oreo",
    price: 86,
    redirectTo: "#",
  },
  {
    imgUrl: "/img/pasteles/cheesecake-fresa.webp",
    imgAlt: "imagen del producto",
    title: "Cheesecake de fresa",
    description: "Suave cheesecake con cobertura de salsa de fresa",
    price: 72,
    redirectTo: "#",
  },
];

export const ProductsList = () => {
  return (
    <section className="products-section py-8 px-8">
      <header className="max-w-1280 mx-auto">
        <SearchBar />
      </header>
      <div className="max-w-1280 mx-auto py-4">
        <div className="products-container">
          {
            products.map((product) => (
              <ProductCard
                key={product.imgUrl}
                imgUrl={product.imgUrl}
                imgAlt={product.imgAlt}
                title={product.title}
                description={product.description}
                price={product.price}
                redirectTo={product.redirectTo}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}
