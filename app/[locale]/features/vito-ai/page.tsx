import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VitoAIFeature } from "@/components/features/vito-ai-feature"
import { CTASection } from "@/components/cta-section"
import { getDictionary } from "@/app/dictionaries"

export const metadata = {
  title: "Vito AI | Publica.la Features",
  description:
    "Enhance your digital publications with Vito AI, an interactive assistant that provides summaries and self-assessments for readers.",
}

export default async function VitoAIPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <VitoAIFeature dict={dict.vitoAIFeature} />
      <CTASection dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
