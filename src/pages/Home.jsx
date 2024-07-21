import { FloatingWhatsappIcon } from "@/components/FloatingWhatsappIcon"
import { About } from "@/views/About"
import { CustomCakes } from "@/views/CustomCakes"
import { Footer } from "@/views/Footer"
import { Header } from "@/views/Header"
import { MainHero } from "@/views/MainHero"
import { PopularProducts } from "@/views/PopularProducts"

export const Home = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <MainHero />
        <PopularProducts />
        <CustomCakes />
        <About />
      </main>
      <div className="layers">
        <FloatingWhatsappIcon />
      </div>
      <Footer />
    </>
  )
}
