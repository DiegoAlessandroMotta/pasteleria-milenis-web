import { PageLayout } from "@/layouts/PageLayout"
import { PopularProducts } from "@/views/PopularProducts"
import { ProductBanner } from "@/views/ProductBanner"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Product = () => {
  const { id } = useParams()

  return (
    <PageLayout>
      <main className="flex-grow bg-light">
        <ProductBanner id={id} />
        <PopularProducts title={"Más productos"} />
      </main>
    </PageLayout>
  )
}
