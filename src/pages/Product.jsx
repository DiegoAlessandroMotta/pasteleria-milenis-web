import { PageLayout } from "@/layouts/PageLayout"
import { ProductBanner } from "@/views/ProductBanner"
import { useParams } from "react-router-dom"

export const Product = () => {
  const { id } = useParams()

  return (
    <PageLayout>
      <main className="flex-grow bg-light">
        <ProductBanner id={id} />
        Más productos
      </main>
    </PageLayout>
  )
}
