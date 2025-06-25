import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { IntegrationsFeature } from "@/components/features/integrations-feature"
import { CTASection } from "@/components/cta-section"
import { getDictionary } from "@/app/dictionaries"

export const metadata = {
  title: "Integrations | Publica.la Features",
  description:
    "Explore Publica.la's powerful integrations with third-party services and platforms to enhance your digital publishing workflow.",
}

export default async function IntegrationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale as "en" | "es" | "pt")
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar dict={dict} locale={locale} />
      <IntegrationsFeature dict={dict} />
      <CTASection dict={dict} />
      <Footer dict={dict} locale={locale} />
    </main>
  )
}
