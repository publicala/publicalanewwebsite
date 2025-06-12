import { CustomerLogosShowcase } from "@/components/customer-logos-showcase"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { CaseStudiesList } from "@/components/case-studies/case-studies-list"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <CaseStudiesHero />
      <CustomerLogosShowcase
        title="Success Stories from Our Customers"
        subtitle="Discover how leading organizations achieve digital publishing success with Publica.la"
        variant="case-studies"
      />
      <CaseStudiesList />
      <Footer />
    </main>
  )
}
