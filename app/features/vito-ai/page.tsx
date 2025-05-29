import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VitoAIFeature } from "@/components/features/vito-ai-feature"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Vito AI | Publica.la Features",
  description:
    "Enhance your digital publications with Vito AI, an interactive assistant that provides summaries and self-assessments for readers.",
}

export default function VitoAIPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <VitoAIFeature />
      <CTASection />
      <Footer />
    </main>
  )
}
