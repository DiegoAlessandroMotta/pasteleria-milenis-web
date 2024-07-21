import { PageLayout } from "@/layouts/PageLayout"
import { ProductsHero } from "@/views/ProductsHero"
import { ProductsList } from "@/views/ProductsList"

export const Products = () => {
  return (
    <PageLayout whatsappIconVisible={true}>
      <main className="flex-grow bg-light">
        <ProductsHero />
        <ProductsList />
      </main>
    </PageLayout>
  )
}
