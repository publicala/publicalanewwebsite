import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CreatorsHero } from "@/components/creators/creators-hero"
import { CreatorsFeatures } from "@/components/creators/creators-features"
import { CreatorsFormats } from "@/components/creators/creators-formats"
import { CreatorsMonetization } from "@/components/creators/creators-monetization"
import { CreatorsWorkflow } from "@/components/creators/creators-workflow"
import { CreatorsAudience } from "@/components/creators/creators-audience"
import { CreatorsTestimonials } from "@/components/creators/creators-testimonials"
import { CTASection } from "@/components/cta-section"
import { CreatorsCaseStudy } from "@/components/creators/creators-case-study"
import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"

export const metadata = {
  title: "Solutions for Content Creators | Publica.la",
  description:
    "Empower your creative business with tools to sell any type of digital content - from photos and audio to books, PDFs, and more.",
}

export default function ContentCreatorsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <CreatorsHero />
      <CustomerLogosShowcase
        title="Trusted by Content Creators"
        subtitle="Successful creators and educators build their businesses with Publica.la"
        variant="solution"
        industry="creators"
      />
      <CreatorsFeatures />
      <CreatorsFormats />
      <CreatorsMonetization />
      <CreatorsWorkflow />
      <CreatorsAudience />
      <CreatorsCaseStudy />
      <CreatorsTestimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
