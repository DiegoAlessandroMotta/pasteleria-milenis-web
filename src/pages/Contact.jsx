import { ContactHero } from "@/views/ContactHero"
import { ContactSection } from "@/views/ContactSection"
import { Footer } from "@/views/Footer"
import { Header } from "@/views/Header"

export const Contact = () => {
  return (
    <>
      <Header />
      <main className="flex-grow bg-light">
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
