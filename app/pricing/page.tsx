import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingTiers } from "@/components/pricing/pricing-tiers"
import { PricingFeatures } from "@/components/pricing/pricing-features"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Pricing | Publica.la",
  description:
    "Flexible pricing plans for publishers of all sizes. Choose the right plan for your digital publishing needs.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PricingHero />
      <PricingTiers />
      <PricingFeatures />
      <PricingFAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
