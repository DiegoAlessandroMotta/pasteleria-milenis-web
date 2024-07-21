import { FloatingWhatsappIcon } from "@/components/FloatingWhatsappIcon"
import { Footer } from "@/views/Footer"
import { Header } from "@/views/Header"

export const PageLayout = ({ children, whatsappIconVisible }) => {
  return (
    <div className='main-container'>
      <Header />
      {children}
      {
        whatsappIconVisible === true && (
          <div className="layers">
            <FloatingWhatsappIcon />
          </div>
        )
      }
      <Footer />
    </div>
  )
}
