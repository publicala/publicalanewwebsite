import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IntegrationsFeature } from "@/components/features/integrations-feature"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Integrations | Publica.la Features",
  description:
    "Explore Publica.la's powerful integrations with third-party services and platforms to enhance your digital publishing workflow.",
}

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <IntegrationsFeature />
      <CTASection />
      <Footer />
    </main>
  )
}
