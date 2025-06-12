import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"
import { BookshopsHero } from "@/components/bookshops/bookshops-hero"
import { BookshopsFeatures } from "@/components/bookshops/bookshops-features"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookshopsDigitalInventory } from "@/components/bookshops/bookshops-digital-inventory"
import { BookshopsOnlineSales } from "@/components/bookshops/bookshops-online-sales"
import { BookshopsEngagement } from "@/components/bookshops/bookshops-engagement"
import { BookshopsTestimonials } from "@/components/bookshops/bookshops-testimonials"
import { BookshopsIntegration } from "@/components/bookshops/bookshops-integration"
import { CTASection } from "@/components/cta-section"
import { BookshopsCaseStudy } from "@/components/bookshops/bookshops-case-study"

export const metadata = {
  title: "Solutions for Bookshops and Retailers | Publica.la",
  description:
    "Expand your bookshop's reach with digital offerings. Publica.la helps bookshops and retailers sell ebooks and digital content alongside physical inventory.",
}

export default function BookshopsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <BookshopsHero />
      <CustomerLogosShowcase
        title="Trusted by Bookshops Everywhere"
        subtitle="Independent and chain bookstores rely on Publica.la for digital growth"
        variant="solution"
        industry="bookshops"
      />
      <BookshopsFeatures />
      <BookshopsDigitalInventory />
      <BookshopsOnlineSales />
      <BookshopsEngagement />
      <BookshopsIntegration />
      <BookshopsCaseStudy />
      <BookshopsTestimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
