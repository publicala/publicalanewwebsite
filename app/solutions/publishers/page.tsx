import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PublishersHero } from "@/components/publishers/publishers-hero"
import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"
import { PublishersFeatures } from "@/components/publishers/publishers-features"
import { PublishersMonetization } from "@/components/publishers/publishers-monetization"
import { PublishersEngagement } from "@/components/publishers/publishers-engagement"
import { PublishersAnalytics } from "@/components/publishers/publishers-analytics"
import { CTASection } from "@/components/cta-section"
import { PublishersCaseStudy } from "@/components/publishers/publishers-case-study"

export const metadata = {
  title: "Solutions for Publishers | Publica.la",
  description:
    "Discover how Publica.la helps publishers monetize content, engage audiences, and gain valuable insights through powerful analytics.",
}

export default function PublishersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PublishersHero />
      <CustomerLogosShowcase
        title="Trusted by Publishers Worldwide"
        subtitle="Leading publishers choose Publica.la for their digital transformation"
        variant="solution"
        industry="publishers"
      />
      <PublishersFeatures />
      <PublishersMonetization />
      <PublishersEngagement />
      <PublishersAnalytics />
      <PublishersCaseStudy />
      <CTASection />
      <Footer />
    </main>
  )
}
