import { PageLayout } from "@/layouts/PageLayout"
import { About } from "@/views/About"
import { CustomCakes } from "@/views/CustomCakes"
import { MainHero } from "@/views/MainHero"
import { PopularProducts } from "@/views/PopularProducts"

export const Home = () => {
  return (
    <PageLayout whatsappIconVisible={true}>
      <main className="flex-grow bg-light">
        <MainHero />
        <PopularProducts title={"Productos más pedidos"} />
        <CustomCakes />
        <About />
      </main>
    </PageLayout>
  )
}
