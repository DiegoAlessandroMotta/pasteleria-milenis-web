import { PageLayout } from "@/layouts/PageLayout"
import { ContactHero } from "@/views/ContactHero"
import { ContactSection } from "@/views/ContactSection"

export const Contact = () => {
  return (
    <PageLayout>
      <main className="flex-grow bg-light">
        <ContactHero />
        <ContactSection />
      </main>
    </PageLayout>
  )
}
