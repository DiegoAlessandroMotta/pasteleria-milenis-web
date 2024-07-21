import { FloatingWhatsappIcon } from "@/components/FloatingWhatsappIcon"
import { Footer } from "@/views/Footer"
import { Header } from "@/views/Header"
import { ProductsHero } from "@/views/ProductsHero"
import { ProductsList } from "@/views/ProductsList"

export const Products = () => {
  return (
    <>
      <Header />
      <main className="flex-grow bg-light">
        <ProductsHero />
        <ProductsList />
      </main>
      <div className="layers">
        <FloatingWhatsappIcon />
      </div>
      <Footer />
    </>
  )
}
