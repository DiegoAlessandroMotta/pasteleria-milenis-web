import { Header } from "@/views/Header"
import { MainHero } from "@/views/MainHero"
import { PopularProducts } from "@/views/PopularProducts"

export const Home = () => {
  return (
    <>
      <Header />
      <main class="flex-grow">
        <MainHero />
        <PopularProducts />
        {/* 
        <CustomCakes />
        <About /> */}
      </main>
      <div class="layers">
        {/* <FloatingWhatsappIcon /> */}
      </div>
      {/* <Footer /> */}
    </>
  )
}
